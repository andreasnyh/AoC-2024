import re
import time


# Save timestamp
start = time.time()


def multiply_arr(arr):
    res = 0
    for [a, b] in arr:
        res += int(a) * int(b)

    return res


def partOne():
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


partOne()
end = time.time()
print(end - start, "s\n")
