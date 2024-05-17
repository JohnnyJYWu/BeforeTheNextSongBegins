import json
import os
from pydub import AudioSegment
import sys

# 音频文件从网页请求中找到
# https://act.mihoyo.com/act/sr/event/e20240509robin-z0ps5s/3884193b5f8e1d4002453cd925b66b58.ogg
# https://act.mihoyo.com/act/sr/event/e20240509robin-z0ps5s/c9d7a682015c545b52ea104f4ec5a909.ogg
# 同理根据代码index_0936fcbbce7021df2525.js可查询到mp3原始文件地址
# https://act.mihoyo.com/act/sr/event/e20240509robin-z0ps5s/medias/1.fcab3e60..mp3
# https://act.mihoyo.com/act/sr/event/e20240509robin-z0ps5s/medias/2.a9f6a880..mp3

def main(audio_file_path, json_file_path):
    # 获取文件的目录，文件名和扩展名
    file_dir, file_name = os.path.split(audio_file_path)
    filename, file_extension = os.path.splitext(file_name)
    # 去掉扩展名前的点
    file_extension = file_extension[1:]

    # 创建新的目录来保存分割后的音频片段
    output_dir = os.path.join(file_dir, f'{filename}_slices_{file_extension}')
    os.makedirs(output_dir, exist_ok=True)

    # 读取音频文件
    if file_extension == 'wav':
        wav = AudioSegment.from_wav(audio_file_path)
    elif file_extension == 'mp3':
        wav = AudioSegment.from_mp3(audio_file_path)
    elif file_extension == 'ogg':
        wav = AudioSegment.from_ogg(audio_file_path)
    else:
        print(f'Unsupported file format: {file_extension}')
        return

    # 读取JSON文件
    with open(json_file_path, 'r') as f:
        times = json.load(f)

    total_segments = len(times)
    print(f'Starting to split the audio into {total_segments} segments...')

    # 根据JSON文件中的时间段来分割音频
    for idx, (key, value) in enumerate(times.items(), start=1):
        start_time, duration = value
        end_time = start_time + duration
        segment = wav[start_time:end_time]
        # 保存音频片段，命名格式为原文件名_1.ogg，原文件名_2.ogg等
        segment.export(os.path.join(output_dir, f'{filename}_{key}.{file_extension}'), format=file_extension)
        print(
            f'Segment {idx}/{total_segments} saved as {os.path.join(output_dir, f"{filename}_{key}.{file_extension}")}')

    print('All segments have been saved.')


if __name__ == "__main__":
    audio_file_path = sys.argv[1]
    json_file_path = sys.argv[2]
    main(audio_file_path, json_file_path)
