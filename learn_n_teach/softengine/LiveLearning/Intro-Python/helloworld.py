#! Variables

# * Variables are used to store data in a computer.

customer = "Ochego"
product = "RasPi"
quantity = 4
price = 1500
weight = 2.5

print("Customer name: "+ customer)
print("Product bought: "+ product)

""" 
!The + sign is used with strings, to use it with an int, 
we have to assign it as a string👇🏽. Thi is !type casting!
TODO Help Me Out
"""
print("Quantity of items: " + str(quantity))
print("Total price: " + str(price*quantity))
print("Thank you")

print(type(price))

'''
Type casting, can also be done like this:
! variable_name = int(variable-name) e.g :
'''
float_price = (float(price))
int_weight = (int(weight))

print(float_price)
print(int_weight)

# !Data Types;
# There are several types of data types in Python;
################################## *String Types; #######################################
'''
Strings --> str "" e.g "Nairobi", "Ochego", "ALX", *"1000"* etc.
adding "" to any other type makes it a string
'''
price_string = "1500"
print(type(price_string))



# ! len() function;
'''
The len() function returns the length of a string.
! len(variable_name)
'''
print(len(customer))

# * You can also store the length of a string in a variable;

length_of_customer = len(customer)
print(customer + " has " + str(length_of_customer) + " letters in his name")

# * What if we want a string to be printed in capital letters/ small letters?
'''
    str.upper()
    str.lower()
'''
capital_customer = customer.upper()
lower_customer = customer.lower()

print(capital_customer + " has " + str(length_of_customer ) + " letters in his name.")
print(lower_customer + " has " + str(length_of_customer) + " letters in his name")

# ! Replacing a string/character;
'''
You can also replace a character in a string with another character using the replace() function; 
'''

correct_spelling = customer.replace("ch","p")
print("The correct spelling of my name is " + correct_spelling)


# ! Formatting a  print() statement to make it simpler.
# print(lower_customer + " has " + str(length_of_customer) + " letters in his name")
# *The code above is correct but can get a bit confusing, hence the use of .format() is encouraged;

print("{0} has {1} characters in his name.".format(customer,length_of_customer))

# * Slicing strings;
'''
A string is just a group of characters.(An array)
'''
slice = correct_spelling[1]
slice_full = correct_spelling[:]
slice_out_of_full = correct_spelling[:3]
slice_from_to = correct_spelling[1:3] #slices the chars between the 1st & 3rd char(1,2)
print(slice)
print(slice_full)
print(slice_out_of_full)
print(slice_from_to)

########################################### *Numeric Types; #################################
'''
There are three numeric types in Python:
i) integers - (int) e.g 5, 67, 890, 2900
ii) float - (float) e.g 5.5, 67.8, 890.0, 2900.0
iii) complex - (complex) e.g 52j, 672j, 890+2j, 2900+2j
'''
complex_num = 52j
print(type(complex_num))

########################## *Booleans -> bool - (True/false) ##############################

is_correct_spelling_correct = False
print(type(is_correct_spelling_correct))

wow = 1000000 > 10
print(wow)

# *Sequence Types -> Lists, Tuples, Range;
# *Mapping Types -> Dict;
# *Set Types -> Set, frozenset;
# *Nonetype;
############################## ! Operators; #######################################

##### *Arithmetic Operators; 
'''
    + addition -> is used to add two numbers together
    - subtraction -> is used to subtract two numbers together
    * multiplication -> is used to multiply two numbers together
    / division -> is used to divide two numbers together
    % modulus -> is used to find the remainder of a division
    ** exponentiation -> is used to raise a number to a power
    // floor division -> is used to find the floor of a division
'''

addition = 2 + 2
subtraction = 2 - 2
multiplication = 2 * 2
division = 4 / 2
modulus = 13 % 2
expon = 3 ** 7
floor = 13 // 2

print(addition)
print(subtraction)
print(multiplication)
print(division)
print(modulus)
print(expon)
print(floor)

#### * Assignment Operators;
'''
    = assignment -> is used to assign a value to a variable
    += addition assignment -> is used to add a value to a variable
    -= subtraction assignment -> is used to subtract a value from a variable
'''
# an example of an assignment operator in use;

age = 21
print(age)

age += 1 #age = age + 1 
print(age)

### * Comparison Operators;
'''
These operators are used to compare two values
They include ==,!=,<,>,<=,>=
'''

### * Logical Operators;
'''
    and -> is used to check if two conditions are true
    or -> is used to check if one of two conditions are true
    not -> is used to check if a condition is false
'''


### * Identity Operators;
'''
    is -> is used to check if two variables are the same
    is not -> is used to check if two variables are not the same
'''


# ! Interactivity

### * Input
'''
input allows the user to input a value, and the value can be stored in a variable;
'''

'''name = input("What is your name? ")
print("Hello, " + name)
age = input("How old are you? ")
slice_name = name[:6]
ask = input("{}, do you know you are {} years old?" .format(slice_name, age))
print("Smart Answer... You, not so smart :(")'''

#!Problems

'''
Ask the user to enter the width and the length of their room in m, 
then use these values to calculate the area of the room in m2.
'''
name = input("What is your name?")
short_name = name[:6]
print("Hello {}, welcome to Carpet Mania.".format(name))
print("We are glad to serve you. ")
print("First, we will need calculate the area of your room.")

length = input("What is the length of your room in m? ")
width = input("What about the width of your room in m? ")

area_of_room = float(length) * float(width)

print("The area of your room is {} m2. The next time you need a carpet, you know the size ;)".format(area_of_room))
print("Thank you, {}, for trusting us with the comfort of your home.".format(short_name))
print("We hope to work with you again.")