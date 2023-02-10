import glob
import os
import pyautogui
import time
from tkinter import messagebox

FailSafeException=True

print ("\nDigital Signaturing in process.... \n")
files_to_sign = glob.glob(os.path.join("D:\Programming\Prescription", '*.pdf*'))
#print (type(files_to_sign))
#print(files_to_sign)

time.sleep(1.5)

pyautogui.click(x=1, y=1080, button="left") #click on windows logo
time.sleep(1.5)

pyautogui.write("Adobe Acrobat") #open adobe acrobat reader from windows
pyautogui.press("enter")
time.sleep(1.5)

pyautogui.hotkey('ctrl','o') #Opening prompt to open desired file
time.sleep(1.5)

pyautogui.click(x=322,y=221,button='left')  #click on pdf file
time.sleep(1.5)

pyautogui.click(x=818,y=560,button='left')  #click on open button to open the pdf file to be signed 
time.sleep(1.5)

#print ("Currently opened" + files_to_sign)

#SIGNATURING STARTS HERE
pyautogui.click(x=101,y=66,button='left')  #click on tools
time.sleep(1.5)

pyautogui.click(x=402,y=461,button='left') #click on Certificates
time.sleep(1.5)

pyautogui.click(x=798,y=154,button='left') #click on Digitally Sign
time.sleep(1.5)

pyautogui.keyDown('ctrl') #GOTO BOTTOM OF DOCUMENT BY PRESSING ctrl+end
pyautogui.press('end')
pyautogui.keyUp('ctrl')
time.sleep(1.5)


#MAKE THE SIGNATURE BOX
pyautogui.moveTo(1352,426) #Come to Start Position
time.sleep(1.5)

pyautogui.mouseDown(button='left') #Press the Left Click Button
time.sleep(1.5)

pyautogui.moveTo(1682,540) #Come to end Position
time.sleep(1.5)

pyautogui.mouseUp(button='left') #Release the Left Click Button
time.sleep(1.5)


#NOW DIGITAL SIGN WINDOW IS OPEN    
pyautogui.click(x=789,y=444,button='left') #Click on the Name of The Signer
time.sleep(1.5)

pyautogui.click(x=1239,y=745,button='left') #Click on Continue
time.sleep(1.5)


#TINKER HERE
pyautogui.write("piis3.14159!") #GIVE THE PASSWORD
pyautogui.press("enter")
time.sleep(1.5)

pyautogui.click(x=1251,y=729,button='left') #Click on Sign
time.sleep(1.5)


pyautogui.click(x=261,y=487,button='left') #click on filename
time.sleep(1.5)

pyautogui.write("_signed") #rename
time.sleep(1.5)

pyautogui.click(x=821,y=558,button='left') #click on save button
time.sleep(1.5)

pyautogui.hotkey('alt','f4') #Close the Application of Acrobat
print ("\nDigital Signaturing Successfully done!")