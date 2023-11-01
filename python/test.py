h=int(input("시간을 입력하세요:"))
m=int(input("분을 입력하세요:"))
s=int(input("초를 입력하세요:"))
s=s+h*3600
s=s+m*60
print("%d초"%(s))