# def  sumFromTo(st,end):
#     s = 0
#     if st <= end:
#         for i in range(st,end+1):
#             s = s + i
#     else:
#         for i in range(end,st+1):
#             s = s + i
#     return s
# while True:
#     a = int(input("nhap so a:"))
#     b = int(input("nhap so b:"))
#     print(sumFromTo(a,b))
#     c = input("nhap lai (y/n): ")
#     if c == 'n':
#         break

# def getLastName(text):
#     for i in range(len(text)):
#         if text[i] == ";":
#             return text[:i]
# def getFirstName(text):
#     for i in range(len(text)):
#         if text[i] == ";":
#             return text[i+1:]
# text = input("nhap ho ten:")
# print("first name is :",getFirstName(text))
# print("Last name is :",getLastName(text))

# text = input("nhap chuoi")
# n = len(text)
# for i in range(1, n+1):
#     print(text[-i],end="")

# def check(a):
#     b = -1
#     for i in range(len(a)):
#         b = b + 1
#         if a[b] == "a" or a[b] == "A":
#             return True
#         else:   
#             return False
# n = str(input("Nhap chuoi: "))
# print(check(n))

# def getLastName(text):
#     for i in range(len(text)):
#         if text[i] == ";":
#             return text[:i]
# def getFirstName(text):
#     for i in range(len(text)):
#         if text[i] == ";":
#             return text[i+1:]
# text = input("nhap ho ten:")
# print("first name is :",getFirstName(text))
# print("Last name is :",getLastName(text))
#     tyurfgy

text = "class2024"
for i in text:
    print(i, end =",")