def bubbleSort(list):
    #swap elements to arrange in order
    for iter_num in range(len(list)-1,0,-1):
        for index in range(iter_num):
            if list[index] > list[index + 1]:
                temp = list[index]
                list[index] = list[index + 1]
                list[index + 1] = temp
list = [20, 40, 1, 3, 90, 100, 349, 87, 93]
bubbleSort(list)
print(list)
