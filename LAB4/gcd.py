
import os
import shutil
import uuid
import datetime


def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)

def main():
    if not os.path.exists('logs'):
        os.makedirs('logs')
    u = uuid.uuid4()
    f = open(f"logs/{u}.txt", "a")
    history = {}
    while True:
        f.write('\n'+str(datetime.datetime.now())+'\n')
        f.write("Enter two numbers: $ ")
        numbers = input("Enter two numbers: $ ").split()
        f.write('\n'+str(datetime.datetime.now())+'\n')
        f.write(''.join(str(x)+' ' for x in numbers))

        if len(numbers)==1 and numbers[0]=='q':
            print("Bye!")
            f.write('\n'+str(datetime.datetime.now())+'\n')
            f.write("Bye!")
            break

        if (len(numbers)!=2):
            print("Invalid input: there must be 2 arguments")
            f.write('\n'+str(datetime.datetime.now())+'\n')
            f.write("Invalid input: there must be 2 arguments")
            continue

        if numbers[0] == 'rm' and numbers[1] == 'logs':
            if os.path.exists('logs'):
                shutil.rmtree('logs')
            continue

        try:
            a = int(float(numbers[0]))
            b = int(float(numbers[1]))
            print(a, b)
        except:
            print("Invalid input: cannot convert to int")
            f.write('\n'+str(datetime.datetime.now())+'\n')
            f.write("Invalid input: cannot convert to int")
            continue
        
        aAbs = abs(a)
        bAbs = abs(b)

        m = min(aAbs, bAbs)
        M = max(aAbs, bAbs)
        
        if m in history and M in history[m]:
            g = history[m][M]
        else:
            if not m in history:
                history[m] = dict()
            g = gcd(aAbs, bAbs)
            history[m][M] = g
        
        print('\n=========\n', 'gcd of ', a,' and ', b, 'is ', g, '\n=========\n')
        f.write('\n'+str(datetime.datetime.now())+'\n')
        f.write(f'\n=========\n gcd of {a} and {b} is {g} \n=========\n')
    f.close()

if __name__ == "__main__":
    main()
