'''
Defining functions: def keyword, function name(), parameters, return value
'''
def helloWorld():
  print("Hello World!")
  
  #After defining the function, we can call it by typing the function name followed by parentheses
helloWorld()
  
  #We can also pass parameters to the function

#* A function with a parameter;
def callMe(user):
  print("Call Me {}".format(user))
  
callMe(user="Joseph")

#The function always needs to be defined before using it.

#Another example using the <return>;

def volume(length, cross_area):
  '''
  This function calculates the volume of a water bottle
  '''
  print("Calculating volume...")
  print("Length: {}".format(length))
  print("Cross Area: {}".format(cross_area))
  #print("Volume: {}".format(length * cross_area))
  print("Done!")
  
  #The return keyword is used to return a value from a function.
  #The return keyword is not required if the function does not return a value.
  #The return keyword is required if the function returns a value.
  #The return keyword is optional if the function does not return a value.
  
  #The return keyword is used to return a value from a function.
  #The return keyword is not required if the function does not return a value.
  #The return keyword is required if the function returns a value.
  #The return keyword is optional if the function does not return a value.
  
  #The return keyword is used to return a value from a function.
  #The return keyword is not required if the function does not return a value.  
  return length * cross_area

volume_waterBottle = volume(2, 3)
print("The volume of the water bottle is: {}".format(volume_waterBottle))