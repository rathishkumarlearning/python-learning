export const courseData = {
  title: "Master Python Programming",
  description: "Learn Python from scratch to advanced — become a confident Python developer",
  chapters: [
    {
      id: 1,
      title: "Getting Started with Python",
      lessons: [
        {
          id: "1-1",
          title: "Welcome to Python",
          completed: false,
          content: {
            description: "Discover why Python is the #1 language for beginners and professionals alike. Learn what makes Python special and set up your development environment.",
            sections: [
              {
                type: "text",
                content: `Python is one of the most popular programming languages in the world, and for good reason. It's **readable**, **versatile**, and has a massive ecosystem of libraries for everything from web development to AI.`
              },
              {
                type: "heading",
                level: 2,
                content: "Why Learn Python?"
              },
              {
                type: "list",
                items: [
                  "**Beginner-friendly syntax** — reads almost like English",
                  "**Huge demand** — used by Google, Netflix, Instagram, Spotify",
                  "**Versatile** — web, data science, AI, automation, and more",
                  "**Strong community** — tons of resources and libraries"
                ]
              },
              {
                type: "tip",
                content: "Python is named after Monty Python, not the snake! Guido van Rossum, the creator, was a fan of the comedy group."
              },
              {
                type: "heading",
                level: 2,
                content: "Your First Python Program"
              },
              {
                type: "text",
                content: "Let's write the classic first program that every developer starts with:"
              },
              {
                type: "code",
                language: "python",
                filename: "hello.py",
                code: `# Your first Python program!
print("Hello, World!")

# You can also print multiple things
print("Welcome to Python")
print("Let's learn together! 🐍")`
              },
              {
                type: "text",
                content: "Click **Run** to see the output. Congratulations — you just wrote Python code!"
              },
              {
                type: "checkpoint",
                content: "Try changing the message inside print() to your own greeting. What happens when you run it?"
              }
            ]
          }
        },
        {
          id: "1-2",
          title: "Variables and Data Types",
          completed: false,
          content: {
            description: "Learn how to store and work with different types of data in Python — the building blocks of every program.",
            sections: [
              {
                type: "text",
                content: "Variables are containers for storing data. In Python, you don't need to declare the type — Python figures it out automatically!"
              },
              {
                type: "heading",
                level: 2,
                content: "Creating Variables"
              },
              {
                type: "code",
                language: "python",
                filename: "variables.py",
                code: `# Strings - text data
name = "Rathish"
greeting = 'Hello!'  # single or double quotes work

# Numbers
age = 28
height = 5.9  # float (decimal)
is_developer = True  # boolean

# Print them out
print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height}")
print(f"Is a developer: {is_developer}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Python Data Types"
              },
              {
                type: "list",
                items: [
                  "**str** — text: \"hello\", 'world'",
                  "**int** — whole numbers: 42, -7, 1000",
                  "**float** — decimals: 3.14, -0.5",
                  "**bool** — True or False",
                  "**list** — ordered collection: [1, 2, 3]",
                  "**dict** — key-value pairs: {\"name\": \"Rathish\"}"
                ]
              },
              {
                type: "tip",
                content: "Use type(variable) to check what type something is. Try: print(type(age))"
              },
              {
                type: "heading",
                level: 2,
                content: "f-strings — Easy String Formatting"
              },
              {
                type: "text",
                content: "Notice the `f` before the quotes? That's an **f-string** — it lets you embed variables directly in text using `{variable}`."
              },
              {
                type: "code",
                language: "python",
                filename: "fstrings.py",
                code: `name = "Rathish"
role = "Lead Engineer"
years = 5

# f-string magic ✨
intro = f"I'm {name}, a {role} with {years} years of experience."
print(intro)

# You can even do math inside!
print(f"In 10 years, I'll have {years + 10} years of experience!")`
              },
              {
                type: "quiz",
                question: "What will type(3.14) return?",
                options: [
                  { id: "a", text: "int" },
                  { id: "b", text: "float" },
                  { id: "c", text: "str" },
                  { id: "d", text: "number" }
                ],
                correct: "b",
                explanation: "3.14 has a decimal point, so Python treats it as a float (floating-point number)."
              }
            ]
          }
        },
        {
          id: "1-3",
          title: "Basic Operations",
          completed: false,
          content: {
            description: "Master arithmetic, string operations, and comparisons — the fundamental operations you'll use constantly.",
            sections: [
              {
                type: "heading",
                level: 2,
                content: "Math Operations"
              },
              {
                type: "code",
                language: "python",
                filename: "math.py",
                code: `# Basic arithmetic
a = 10
b = 3

print(f"Addition: {a + b}")        # 13
print(f"Subtraction: {a - b}")     # 7
print(f"Multiplication: {a * b}")  # 30
print(f"Division: {a / b}")        # 3.333...
print(f"Floor Division: {a // b}") # 3 (rounds down)
print(f"Modulo: {a % b}")          # 1 (remainder)
print(f"Power: {a ** b}")          # 1000 (10³)`
              },
              {
                type: "heading",
                level: 2,
                content: "String Operations"
              },
              {
                type: "code",
                language: "python",
                filename: "strings.py",
                code: `first = "Hello"
last = "World"

# Concatenation (joining)
full = first + " " + last
print(full)  # Hello World

# Repetition
print("=" * 20)  # ====================

# String methods
message = "  python is awesome  "
print(message.strip())      # removes whitespace
print(message.upper())      # PYTHON IS AWESOME
print(message.replace("awesome", "amazing"))

# Length
print(len(message))  # 22`
              },
              {
                type: "heading",
                level: 2,
                content: "Comparison Operators"
              },
              {
                type: "code",
                language: "python",
                filename: "comparisons.py",
                code: `x = 10
y = 5

print(x > y)   # True - greater than
print(x < y)   # False - less than
print(x >= 10) # True - greater or equal
print(x == y)  # False - equal to
print(x != y)  # True - not equal to

# Chaining comparisons (Python magic!)
age = 25
print(18 <= age <= 65)  # True - is age between 18 and 65?`
              },
              {
                type: "checkpoint",
                content: "Calculate how many hours are in a year using Python. (Hint: 24 hours × 365 days)"
              }
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: "Control Flow",
      lessons: [
        {
          id: "2-1",
          title: "If Statements",
          completed: false,
          content: {
            description: "Learn to make decisions in your code with conditional statements — the foundation of program logic.",
            sections: [
              {
                type: "text",
                content: "If statements let your program make decisions based on conditions. They're like asking \"if this is true, do that.\""
              },
              {
                type: "code",
                language: "python",
                filename: "if_basic.py",
                code: `age = 25

if age >= 18:
    print("You're an adult! 🎉")
    print("You can vote!")

# This runs regardless of the if
print("Thanks for checking!")`
              },
              {
                type: "warning",
                content: "Python uses **indentation** (4 spaces or 1 tab) to define code blocks. This is not optional — it's part of the syntax!"
              },
              {
                type: "heading",
                level: 2,
                content: "if-else"
              },
              {
                type: "code",
                language: "python",
                filename: "if_else.py",
                code: `temperature = 75

if temperature > 80:
    print("It's hot! Stay hydrated 🥤")
else:
    print("Nice weather! Enjoy your day ☀️")`
              },
              {
                type: "heading",
                level: 2,
                content: "if-elif-else"
              },
              {
                type: "code",
                language: "python",
                filename: "if_elif.py",
                code: `score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade is: {grade}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Logical Operators"
              },
              {
                type: "code",
                language: "python",
                filename: "logical.py",
                code: `age = 25
has_license = True
has_car = False

# and - both must be true
if age >= 18 and has_license:
    print("You can drive!")

# or - at least one must be true
if has_car or has_license:
    print("You have some driving credentials!")

# not - reverses the boolean
if not has_car:
    print("You might need to borrow a car")`
              },
              {
                type: "quiz",
                question: "What will this print?\n\nx = 5\nif x > 3:\n    print('A')\nelif x > 4:\n    print('B')",
                options: [
                  { id: "a", text: "A" },
                  { id: "b", text: "B" },
                  { id: "c", text: "A and B" },
                  { id: "d", text: "Nothing" }
                ],
                correct: "a",
                explanation: "Once a condition is True (x > 3), Python runs that block and skips the rest. It never checks elif."
              }
            ]
          }
        },
        {
          id: "2-2",
          title: "Loops",
          completed: false,
          content: {
            description: "Automate repetitive tasks with for and while loops — save time and write cleaner code.",
            sections: [
              {
                type: "heading",
                level: 2,
                content: "For Loops"
              },
              {
                type: "text",
                content: "For loops iterate over a sequence (like a list, string, or range of numbers)."
              },
              {
                type: "code",
                language: "python",
                filename: "for_loops.py",
                code: `# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I love {fruit}!")

print("---")

# Loop through a range of numbers
for i in range(5):  # 0, 1, 2, 3, 4
    print(f"Count: {i}")

print("---")

# range(start, stop, step)
for i in range(2, 10, 2):  # 2, 4, 6, 8
    print(f"Even: {i}")`
              },
              {
                type: "heading",
                level: 2,
                content: "While Loops"
              },
              {
                type: "text",
                content: "While loops keep running as long as a condition is True. Be careful — you can create infinite loops!"
              },
              {
                type: "code",
                language: "python",
                filename: "while_loops.py",
                code: `# Countdown
count = 5
while count > 0:
    print(f"T-minus {count}...")
    count -= 1  # same as count = count - 1

print("Liftoff! 🚀")`
              },
              {
                type: "heading",
                level: 2,
                content: "Break and Continue"
              },
              {
                type: "code",
                language: "python",
                filename: "break_continue.py",
                code: `# break - exit the loop entirely
for i in range(10):
    if i == 5:
        print("Found 5! Stopping.")
        break
    print(i)

print("---")

# continue - skip to the next iteration
for i in range(5):
    if i == 2:
        continue  # skip printing 2
    print(i)`
              },
              {
                type: "tip",
                content: "Use enumerate() when you need both the index and value:\n\nfor i, fruit in enumerate(fruits):\n    print(f\"{i}: {fruit}\")"
              },
              {
                type: "checkpoint",
                content: "Write a loop that prints all numbers from 1 to 20 that are divisible by 3. (Hint: use the modulo operator %)"
              }
            ]
          }
        }
      ]
    },
    {
      id: 3,
      title: "Data Structures",
      lessons: [
        {
          id: "3-1",
          title: "Lists",
          completed: false,
          content: {
            description: "Master Python lists — the most versatile data structure for storing collections of items.",
            sections: [
              {
                type: "text",
                content: "Lists are ordered, mutable (changeable) collections. They can hold any type of data and are incredibly useful."
              },
              {
                type: "code",
                language: "python",
                filename: "lists_basic.py",
                code: `# Creating lists
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]
empty = []

# Accessing elements (0-indexed)
fruits = ["apple", "banana", "cherry", "date"]
print(fruits[0])   # apple (first)
print(fruits[-1])  # date (last)
print(fruits[1:3]) # ['banana', 'cherry'] (slice)`
              },
              {
                type: "heading",
                level: 2,
                content: "Modifying Lists"
              },
              {
                type: "code",
                language: "python",
                filename: "lists_modify.py",
                code: `fruits = ["apple", "banana", "cherry"]

# Add items
fruits.append("date")        # adds to end
fruits.insert(1, "avocado")  # insert at index 1
print(fruits)

# Remove items
fruits.remove("banana")  # remove by value
popped = fruits.pop()    # remove & return last item
del fruits[0]            # remove by index
print(fruits)

# Modify
fruits[0] = "blueberry"
print(fruits)`
              },
              {
                type: "heading",
                level: 2,
                content: "Useful List Methods"
              },
              {
                type: "code",
                language: "python",
                filename: "lists_methods.py",
                code: `numbers = [3, 1, 4, 1, 5, 9, 2, 6]

print(len(numbers))      # 8 - length
print(min(numbers))      # 1 - minimum
print(max(numbers))      # 9 - maximum
print(sum(numbers))      # 31 - sum all

numbers.sort()           # sorts in place
print(numbers)           # [1, 1, 2, 3, 4, 5, 6, 9]

numbers.reverse()        # reverses in place
print(numbers)

# Check if item exists
print(5 in numbers)      # True
print(10 in numbers)     # False`
              },
              {
                type: "heading",
                level: 2,
                content: "List Comprehensions"
              },
              {
                type: "text",
                content: "List comprehensions are a Pythonic way to create lists. They're concise and powerful!"
              },
              {
                type: "code",
                language: "python",
                filename: "list_comprehension.py",
                code: `# Traditional way
squares = []
for x in range(10):
    squares.append(x ** 2)
print(squares)

# List comprehension (same result, one line!)
squares = [x ** 2 for x in range(10)]
print(squares)

# With condition
evens = [x for x in range(20) if x % 2 == 0]
print(evens)

# Transform strings
words = ["hello", "world", "python"]
upper_words = [w.upper() for w in words]
print(upper_words)`
              },
              {
                type: "quiz",
                question: "What does my_list[-2] return for my_list = [10, 20, 30, 40, 50]?",
                options: [
                  { id: "a", text: "20" },
                  { id: "b", text: "30" },
                  { id: "c", text: "40" },
                  { id: "d", text: "Error" }
                ],
                correct: "c",
                explanation: "Negative indexing counts from the end. -1 is the last (50), -2 is second to last (40)."
              }
            ]
          }
        },
        {
          id: "3-2",
          title: "Dictionaries",
          completed: false,
          content: {
            description: "Learn dictionaries — Python's powerful key-value data structure for organizing related data.",
            sections: [
              {
                type: "text",
                content: "Dictionaries store data as key-value pairs. Think of them like a real dictionary: you look up a word (key) to get its definition (value)."
              },
              {
                type: "code",
                language: "python",
                filename: "dict_basic.py",
                code: `# Creating a dictionary
person = {
    "name": "Rathish",
    "role": "Lead Engineer",
    "years_exp": 5,
    "skills": ["Python", "JavaScript", "React"]
}

# Accessing values
print(person["name"])           # Rathish
print(person.get("role"))       # Lead Engineer
print(person.get("age", "N/A")) # N/A (default if not found)`
              },
              {
                type: "heading",
                level: 2,
                content: "Modifying Dictionaries"
              },
              {
                type: "code",
                language: "python",
                filename: "dict_modify.py",
                code: `person = {"name": "Rathish", "role": "Lead Engineer"}

# Add or update
person["age"] = 28
person["role"] = "Principal Engineer"  # update existing
print(person)

# Remove
del person["age"]
removed = person.pop("role")  # removes and returns value
print(f"Removed: {removed}")
print(person)`
              },
              {
                type: "heading",
                level: 2,
                content: "Looping Through Dictionaries"
              },
              {
                type: "code",
                language: "python",
                filename: "dict_loops.py",
                code: `stats = {"views": 1000, "likes": 250, "shares": 50}

# Loop through keys
for key in stats:
    print(key)

# Loop through values
for value in stats.values():
    print(value)

# Loop through both (most useful!)
for key, value in stats.items():
    print(f"{key}: {value}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Nested Dictionaries"
              },
              {
                type: "code",
                language: "python",
                filename: "dict_nested.py",
                code: `company = {
    "employees": {
        "e001": {"name": "Rathish", "dept": "Engineering"},
        "e002": {"name": "Nadia", "dept": "Languages"}
    },
    "location": "Cincinnati"
}

# Access nested data
print(company["employees"]["e001"]["name"])  # Rathish

# Add new employee
company["employees"]["e003"] = {
    "name": "New Hire",
    "dept": "Marketing"
}
print(company)`
              },
              {
                type: "tip",
                content: "Use dict.keys(), dict.values(), and dict.items() to get different views of your dictionary data."
              }
            ]
          }
        }
      ]
    },
    {
      id: 4,
      title: "Functions",
      lessons: [
        {
          id: "4-1",
          title: "Defining Functions",
          completed: false,
          content: {
            description: "Write reusable code blocks with functions — the key to clean, maintainable programs.",
            sections: [
              {
                type: "text",
                content: "Functions are reusable blocks of code. They help you avoid repetition and make your code more organized."
              },
              {
                type: "code",
                language: "python",
                filename: "functions_basic.py",
                code: `# Define a function
def greet(name):
    """Greets a person by name."""
    print(f"Hello, {name}! 👋")

# Call the function
greet("Rathish")
greet("Nadia")

# Function with return value
def square(n):
    return n ** 2

result = square(5)
print(f"5 squared is {result}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Parameters and Arguments"
              },
              {
                type: "code",
                language: "python",
                filename: "functions_params.py",
                code: `# Default parameters
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Rathish")                    # Hello, Rathish!
greet("Rathish", "Good morning")    # Good morning, Rathish!

# Keyword arguments
def create_profile(name, age, role):
    return f"{name}, {age}, {role}"

# Call with keywords (order doesn't matter)
profile = create_profile(role="Engineer", name="Rathish", age=28)
print(profile)`
              },
              {
                type: "heading",
                level: 2,
                content: "Multiple Return Values"
              },
              {
                type: "code",
                language: "python",
                filename: "functions_return.py",
                code: `def get_stats(numbers):
    """Returns min, max, and average of a list."""
    return min(numbers), max(numbers), sum(numbers) / len(numbers)

# Unpack the returned values
data = [4, 8, 15, 16, 23, 42]
minimum, maximum, average = get_stats(data)

print(f"Min: {minimum}")
print(f"Max: {maximum}")
print(f"Avg: {average:.2f}")`
              },
              {
                type: "heading",
                level: 2,
                content: "*args and **kwargs"
              },
              {
                type: "code",
                language: "python",
                filename: "args_kwargs.py",
                code: `# *args - variable number of positional arguments
def sum_all(*numbers):
    return sum(numbers)

print(sum_all(1, 2, 3))       # 6
print(sum_all(1, 2, 3, 4, 5)) # 15

# **kwargs - variable number of keyword arguments
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="Rathish", role="Engineer", city="Cincinnati")`
              },
              {
                type: "checkpoint",
                content: "Write a function called is_palindrome that takes a string and returns True if it's a palindrome (reads the same forwards and backwards)."
              }
            ]
          }
        },
        {
          id: "4-2",
          title: "Lambda Functions",
          completed: false,
          content: {
            description: "Write concise one-line functions with lambda — perfect for quick operations and callbacks.",
            sections: [
              {
                type: "text",
                content: "Lambda functions are small anonymous functions. They're useful for short operations, especially with functions like map(), filter(), and sorted()."
              },
              {
                type: "code",
                language: "python",
                filename: "lambda_basic.py",
                code: `# Regular function
def square(x):
    return x ** 2

# Same thing as a lambda
square_lambda = lambda x: x ** 2

print(square(5))        # 25
print(square_lambda(5)) # 25

# Lambda with multiple arguments
add = lambda a, b: a + b
print(add(3, 4))  # 7`
              },
              {
                type: "heading",
                level: 2,
                content: "Lambda with Built-in Functions"
              },
              {
                type: "code",
                language: "python",
                filename: "lambda_builtins.py",
                code: `numbers = [1, 2, 3, 4, 5]

# map() - apply function to each element
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# filter() - keep elements that pass a test
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4]

# sorted() with custom key
words = ["banana", "pie", "apple", "cherry"]
by_length = sorted(words, key=lambda w: len(w))
print(by_length)  # ['pie', 'apple', 'banana', 'cherry']`
              },
              {
                type: "heading",
                level: 2,
                content: "Real-World Example"
              },
              {
                type: "code",
                language: "python",
                filename: "lambda_real.py",
                code: `# Sort employees by salary
employees = [
    {"name": "Rathish", "salary": 120000},
    {"name": "John", "salary": 150000},
    {"name": "Sarah", "salary": 95000}
]

# Sort by salary (ascending)
by_salary = sorted(employees, key=lambda e: e["salary"])
for emp in by_salary:
    print(f"{emp['name']}: {emp['salary']:,}")

print("---")

# Sort by salary (descending)
by_salary_desc = sorted(employees, key=lambda e: e["salary"], reverse=True)
for emp in by_salary_desc:
    print(f"{emp['name']}: {emp['salary']:,}")`
              },
              {
                type: "tip",
                content: "Use regular functions for complex logic. Lambda is best for simple, one-line operations."
              }
            ]
          }
        }
      ]
    },
    {
      id: 5,
      title: "Object-Oriented Programming",
      lessons: [
        {
          id: "5-1",
          title: "Classes and Objects",
          completed: false,
          content: {
            description: "Learn OOP fundamentals — create your own data types with classes and bring them to life as objects.",
            sections: [
              {
                type: "text",
                content: "Object-Oriented Programming (OOP) lets you model real-world things in code. A **class** is a blueprint, and an **object** is an instance of that blueprint."
              },
              {
                type: "code",
                language: "python",
                filename: "class_basic.py",
                code: `class Dog:
    """A simple Dog class."""
    
    def __init__(self, name, breed):
        # __init__ is the constructor - runs when creating an object
        self.name = name
        self.breed = breed
        self.energy = 100
    
    def bark(self):
        print(f"{self.name} says: Woof! 🐕")
    
    def play(self):
        self.energy -= 20
        print(f"{self.name} played! Energy: {self.energy}")

# Create objects (instances)
buddy = Dog("Buddy", "Golden Retriever")
max = Dog("Max", "German Shepherd")

# Use the objects
print(buddy.name)   # Buddy
buddy.bark()        # Buddy says: Woof! 🐕
buddy.play()        # Buddy played! Energy: 80`
              },
              {
                type: "heading",
                level: 2,
                content: "Class Variables vs Instance Variables"
              },
              {
                type: "code",
                language: "python",
                filename: "class_variables.py",
                code: `class Employee:
    # Class variable - shared by all instances
    company = "TechCorp"
    employee_count = 0
    
    def __init__(self, name, role):
        # Instance variables - unique to each instance
        self.name = name
        self.role = role
        Employee.employee_count += 1
    
    def introduce(self):
        print(f"Hi, I'm {self.name}, a {self.role} at {Employee.company}")

# Create employees
e1 = Employee("Rathish", "Lead Engineer")
e2 = Employee("Sarah", "Designer")

e1.introduce()
e2.introduce()
print(f"Total employees: {Employee.employee_count}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Special Methods (Dunder Methods)"
              },
              {
                type: "code",
                language: "python",
                filename: "dunder_methods.py",
                code: `class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    def __str__(self):
        # Called by print()
        return f"'{self.title}' by {self.author}"
    
    def __len__(self):
        # Called by len()
        return self.pages
    
    def __eq__(self, other):
        # Called by ==
        return self.title == other.title and self.author == other.author

book1 = Book("Python Crash Course", "Eric Matthes", 544)
book2 = Book("Python Crash Course", "Eric Matthes", 544)

print(book1)           # 'Python Crash Course' by Eric Matthes
print(len(book1))      # 544
print(book1 == book2)  # True`
              },
              {
                type: "tip",
                content: "self refers to the current instance. It's always the first parameter in instance methods."
              }
            ]
          }
        },
        {
          id: "5-2",
          title: "Inheritance",
          completed: false,
          content: {
            description: "Build class hierarchies with inheritance — share code between related classes and extend functionality.",
            sections: [
              {
                type: "text",
                content: "Inheritance lets you create a new class based on an existing class. The new class inherits attributes and methods from the parent."
              },
              {
                type: "code",
                language: "python",
                filename: "inheritance_basic.py",
                code: `class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        print(f"{self.name} makes a sound")
    
    def sleep(self):
        print(f"{self.name} is sleeping... 💤")

# Dog inherits from Animal
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  # Call parent's __init__
        self.breed = breed
    
    def speak(self):  # Override parent method
        print(f"{self.name} says: Woof! 🐕")
    
    def fetch(self):  # New method
        print(f"{self.name} is fetching the ball!")

# Cat inherits from Animal
class Cat(Animal):
    def speak(self):
        print(f"{self.name} says: Meow! 🐱")

buddy = Dog("Buddy", "Golden Retriever")
whiskers = Cat("Whiskers")

buddy.speak()    # Buddy says: Woof! 🐕
buddy.sleep()    # Buddy is sleeping... 💤 (inherited)
buddy.fetch()    # Buddy is fetching the ball!

whiskers.speak() # Whiskers says: Meow! 🐱`
              },
              {
                type: "heading",
                level: 2,
                content: "Practical Example: Game Characters"
              },
              {
                type: "code",
                language: "python",
                filename: "inheritance_game.py",
                code: `class Character:
    def __init__(self, name, health=100):
        self.name = name
        self.health = health
    
    def take_damage(self, amount):
        self.health -= amount
        print(f"{self.name} took {amount} damage! HP: {self.health}")
        if self.health <= 0:
            print(f"{self.name} has been defeated!")

class Warrior(Character):
    def __init__(self, name):
        super().__init__(name, health=150)  # Warriors have more health
        self.armor = 20
    
    def take_damage(self, amount):
        reduced = max(0, amount - self.armor)
        super().take_damage(reduced)
        print(f"  (Armor blocked {amount - reduced} damage)")
    
    def shield_bash(self, target):
        print(f"{self.name} bashes {target.name}!")
        target.take_damage(25)

class Mage(Character):
    def __init__(self, name):
        super().__init__(name, health=80)  # Mages have less health
        self.mana = 100
    
    def fireball(self, target):
        if self.mana >= 30:
            self.mana -= 30
            print(f"{self.name} casts Fireball! 🔥")
            target.take_damage(50)
        else:
            print(f"{self.name} is out of mana!")

# Battle!
conan = Warrior("Conan")
gandalf = Mage("Gandalf")

gandalf.fireball(conan)
conan.shield_bash(gandalf)`
              },
              {
                type: "quiz",
                question: "What does super().__init__() do?",
                options: [
                  { id: "a", text: "Creates a new parent class" },
                  { id: "b", text: "Calls the parent class's __init__ method" },
                  { id: "c", text: "Overrides the parent class" },
                  { id: "d", text: "Deletes the parent class" }
                ],
                correct: "b",
                explanation: "super() gives you access to the parent class, and __init__() calls its constructor to properly initialize inherited attributes."
              }
            ]
          }
        }
      ]
    },
    {
      id: 6,
      title: "File Handling & Modules",
      lessons: [
        {
          id: "6-1",
          title: "Working with Files",
          completed: false,
          content: {
            description: "Read and write files in Python — essential for data processing and automation.",
            sections: [
              {
                type: "text",
                content: "Python makes file operations simple. The with statement ensures files are properly closed after use."
              },
              {
                type: "code",
                language: "python",
                filename: "files_write.py",
                code: `# Writing to a file
with open("notes.txt", "w") as file:
    file.write("Hello, Python!\\n")
    file.write("File handling is easy.\\n")
    file.write("This is line 3.")

print("File written successfully! ✅")

# Appending to a file
with open("notes.txt", "a") as file:
    file.write("\\nThis line was appended.")`
              },
              {
                type: "heading",
                level: 2,
                content: "Reading Files"
              },
              {
                type: "code",
                language: "python",
                filename: "files_read.py",
                code: `# Read entire file
with open("notes.txt", "r") as file:
    content = file.read()
    print(content)

print("---")

# Read line by line
with open("notes.txt", "r") as file:
    for line in file:
        print(f"Line: {line.strip()}")

# Read into a list of lines
with open("notes.txt", "r") as file:
    lines = file.readlines()
    print(f"Total lines: {len(lines)}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Working with JSON"
              },
              {
                type: "code",
                language: "python",
                filename: "json_example.py",
                code: `import json

# Python dict to JSON file
data = {
    "name": "Rathish",
    "role": "Lead Engineer",
    "skills": ["Python", "JavaScript", "React"],
    "years_exp": 5
}

# Write JSON
with open("profile.json", "w") as file:
    json.dump(data, file, indent=2)

# Read JSON
with open("profile.json", "r") as file:
    loaded = json.load(file)

print(loaded["name"])
print(loaded["skills"])`
              },
              {
                type: "warning",
                content: "Always use 'with' when working with files. It automatically handles closing the file, even if an error occurs."
              }
            ]
          }
        },
        {
          id: "6-2",
          title: "Importing Modules",
          completed: false,
          content: {
            description: "Leverage Python's vast ecosystem — import built-in and third-party modules to supercharge your code.",
            sections: [
              {
                type: "text",
                content: "Modules are Python files containing reusable code. Python has a rich standard library, plus thousands of third-party packages."
              },
              {
                type: "code",
                language: "python",
                filename: "imports_basic.py",
                code: `# Import entire module
import math
print(math.pi)        # 3.14159...
print(math.sqrt(16))  # 4.0

# Import specific items
from random import randint, choice
print(randint(1, 100))  # Random number 1-100

fruits = ["apple", "banana", "cherry"]
print(choice(fruits))   # Random fruit

# Import with alias
import datetime as dt
now = dt.datetime.now()
print(f"Current time: {now}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Useful Standard Library Modules"
              },
              {
                type: "code",
                language: "python",
                filename: "stdlib_examples.py",
                code: `# os - operating system interface
import os
print(os.getcwd())  # Current directory
# os.listdir()      # List files in directory

# pathlib - modern path handling
from pathlib import Path
home = Path.home()
print(f"Home: {home}")

# collections - specialized containers
from collections import Counter
words = ["apple", "banana", "apple", "cherry", "apple"]
count = Counter(words)
print(count)  # Counter({'apple': 3, 'banana': 1, 'cherry': 1})
print(count.most_common(2))  # [('apple', 3), ('banana', 1)]

# itertools - iteration tools
from itertools import combinations
items = ["A", "B", "C"]
for combo in combinations(items, 2):
    print(combo)  # ('A', 'B'), ('A', 'C'), ('B', 'C')`
              },
              {
                type: "heading",
                level: 2,
                content: "Creating Your Own Module"
              },
              {
                type: "code",
                language: "python",
                filename: "myutils.py",
                code: `# myutils.py - Your custom module!

def greet(name):
    """Returns a greeting."""
    return f"Hello, {name}! 👋"

def calculate_tip(bill, tip_percent=18):
    """Calculates tip amount."""
    return bill * (tip_percent / 100)

PI = 3.14159

# In another file, you can do:
# from myutils import greet, calculate_tip
# print(greet("Rathish"))`
              },
              {
                type: "tip",
                content: "Use 'pip install package_name' to install third-party packages. Popular ones: requests (HTTP), pandas (data), flask (web), pillow (images)."
              }
            ]
          }
        }
      ]
    },
    {
      id: 7,
      title: "Error Handling",
      lessons: [
        {
          id: "7-1",
          title: "Try-Except Blocks",
          completed: false,
          content: {
            description: "Handle errors gracefully — write robust code that doesn't crash when things go wrong.",
            sections: [
              {
                type: "text",
                content: "Errors happen. Good code handles them gracefully instead of crashing. Python uses try-except blocks for error handling."
              },
              {
                type: "code",
                language: "python",
                filename: "try_except.py",
                code: `# Without error handling - crashes!
# result = 10 / 0  # ZeroDivisionError

# With error handling - graceful
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Oops! Can't divide by zero.")
    result = 0

print(f"Result: {result}")

# Multiple exception types
try:
    numbers = [1, 2, 3]
    print(numbers[10])  # IndexError
except IndexError:
    print("Index out of range!")
except Exception as e:
    print(f"Something went wrong: {e}")`
              },
              {
                type: "heading",
                level: 2,
                content: "try-except-else-finally"
              },
              {
                type: "code",
                language: "python",
                filename: "full_try.py",
                code: `def divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Error: Division by zero!")
        return None
    except TypeError:
        print("Error: Invalid types!")
        return None
    else:
        # Runs if NO exception occurred
        print("Division successful!")
        return result
    finally:
        # ALWAYS runs, even if there's an exception
        print("Cleanup complete.")

print(divide(10, 2))   # Works
print("---")
print(divide(10, 0))   # ZeroDivisionError
print("---")
print(divide(10, "a")) # TypeError`
              },
              {
                type: "heading",
                level: 2,
                content: "Raising Exceptions"
              },
              {
                type: "code",
                language: "python",
                filename: "raise_exceptions.py",
                code: `def validate_age(age):
    if not isinstance(age, int):
        raise TypeError("Age must be an integer")
    if age < 0:
        raise ValueError("Age cannot be negative")
    if age > 150:
        raise ValueError("Age seems unrealistic")
    return True

# Test it
try:
    validate_age(-5)
except ValueError as e:
    print(f"Validation failed: {e}")

try:
    validate_age("twenty")
except TypeError as e:
    print(f"Type error: {e}")`
              },
              {
                type: "checkpoint",
                content: "Write a function safe_divide(a, b) that returns the result of a/b, or 'undefined' if b is zero. Handle both ZeroDivisionError and TypeError."
              }
            ]
          }
        }
      ]
    },
    {
      id: 8,
      title: "Congratulations! 🎉",
      lessons: [
        {
          id: "8-1",
          title: "Your Python Journey",
          completed: false,
          content: {
            description: "You've completed the Python fundamentals! Here's what's next on your journey to mastery.",
            sections: [
              {
                type: "text",
                content: "**Congratulations!** 🎉 You've learned the fundamentals of Python programming. You now have the tools to build real projects and continue growing as a developer."
              },
              {
                type: "heading",
                level: 2,
                content: "What You've Learned"
              },
              {
                type: "list",
                items: [
                  "✅ Variables and data types",
                  "✅ Control flow (if/else, loops)",
                  "✅ Data structures (lists, dictionaries)",
                  "✅ Functions and lambda expressions",
                  "✅ Object-Oriented Programming",
                  "✅ File handling and modules",
                  "✅ Error handling"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Where to Go Next"
              },
              {
                type: "list",
                items: [
                  "**Web Development** — Learn Flask or Django to build web apps",
                  "**Data Science** — Explore pandas, NumPy, and matplotlib",
                  "**Automation** — Automate boring tasks with Python scripts",
                  "**APIs** — Build and consume REST APIs",
                  "**Machine Learning** — Dive into scikit-learn and TensorFlow"
                ]
              },
              {
                type: "tip",
                content: "The best way to learn is by building! Pick a project that excites you and start coding. You'll learn 10x faster by doing."
              },
              {
                type: "text",
                content: "Keep coding, keep learning, and remember — every expert was once a beginner. You've got this! 🐍🚀"
              }
            ]
          }
        }
      ]
    }
  ]
};
