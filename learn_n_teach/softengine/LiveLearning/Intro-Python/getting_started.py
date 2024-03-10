''' 
python keywords. --> They are used to define the syntax 
and structure of the python programming language.
There are 33keywords
'''

'''
Though these are hard rules for writing identifiers, also there are some naming conventions which are not mandatory but rather good practices to follow.

1.Class names start with an uppercase letter. All other identifiers start with a lowercase letter.
2. Starting an identifier with a single leading underscore indicates the identifier is private.
3. If the identifier starts and ends with two underscores, than means the identifier is language-defined special name.
4. While c = 10 is valid, writing count = 10 would make more sense and it would be easier to figure out what it does even when you look at your code after a long time.
5. Multiple words can be separated using an underscore, for example this_is_a_variable.
'''

# * If you don’t want characters prefaced by \ to be interpreted as special characters, you can use raw strings by adding an r before the first quote:

print('c:\docs\notes') #can be fixed by;

print(r'c:\docs\notes')


#* String literals can span multiple lines, one way is using triple quotes: '''...''' or """..."""
# End of lines are automatically included in the string, but it’s possible to prevent this by adding a \ at the end of the line. The following example:

print('''\
      Hello gentlemen, I wish I was here to explain my intentions
      to you. but I am not. I am just a computer program.
      Hope to see you soon.               Hope not
      ''')