import re
import time


def multiply_arr(arr):
    res = 0
    for [a, b] in arr:
        res += int(a) * int(b)

    return res


def partOne():
    # Save timestamp
    start = time.time()
    # f = open("day_03/input.txt", "r")
    f = open("day_03/test_input.txt", "r")

    if not f:
        return

    valid_muls = []
    for row in f:
        items = re.findall(r"mul\(\d+,\d+\)", row)
        if items:
            valid_muls.extend(items)

    to_multiply = []
    for mul in valid_muls:
        to_multiply.append(re.split(",", re.search(r"\d+,\d+", mul).group()))

    print("Part 1:", multiply_arr(to_multiply))
    f.close()
    end = time.time()
    print(end - start, "s\n")


def partTwo():
    # Save timestamp
    start = time.time()
    f = open("day_03/test_input_2.txt", "r")
    f = open("day_03/input.txt", "r")

    if not f:
        return

    valid_muls = []
    do = r"do\(\)"
    dont = r"don't\(\)"
    mul = r"mul\(\d+,\d+\)"
    valid = True
    for row in f:
        for match in re.finditer(f"{do}|{dont}|{mul}", row):
            if re.fullmatch(dont, match.group()):
                valid = False
            elif re.fullmatch(do, match.group()):
                valid = True
            elif valid:
                valid_muls.append(match.group())

    to_multiply = []
    for mul in valid_muls:
        to_multiply.append(re.split(",", re.search(r"\d+,\d+", mul).group()))

    print("Part 2:", multiply_arr(to_multiply))
    f.close()
    end = time.time()
    print(end - start, "s\n")


def main():
    partOne()
    partTwo()


main()
