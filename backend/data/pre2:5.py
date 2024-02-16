def add(x,y):
    return x+y
list1 = [11,8,12,7,-4,19,0,6,3,10]
items = map(add, list1[2:8], range(0,13,2))
items = [x for x in items]
print(sum(items))