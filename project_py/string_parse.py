input_string = input()
i = 0

final_string = ''
while i < (len(input_string) - 1):
    try:
        while ord(input_string[i]) + 1 != ord(input_string[i + 1]):
            final_string += input_string[i]
            i += 1
        while ord(input_string[i]) + 1 == ord(input_string[i + 1]):
            i += 1
            if i == len(input_string) - 1:
                input_string = input_string[0:i]
    except Exception as e:
        continue
    input_string = input_string[i+1:]
    input_string = final_string + input_string
    final_string = ''
    i = 0
    
if len(input_string) is not 1:
    print(input_string)