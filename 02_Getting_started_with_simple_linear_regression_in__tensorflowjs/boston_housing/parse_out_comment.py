import sys
print("Parsing ", sys.argv[1])
f = open(sys.argv[1], 'r+')

full = f.readlines()

fulltext = []
for line in full:
    remove = False
    nline = ""
    for i, letter in enumerate(line):
        try:
            if(letter == '/' ):
                if(letter[i+1] == '/'):
                    remove = True
        except:
            pass
        
        if(remove!=True):
            print(remove)
            nline += str(letter)
        else:
            print(letter)
    
    fulltext.append(nline)

print(fulltext)


            