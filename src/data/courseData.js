export const courseData = {
  title: "Master Python Programming",
  description: "Learn Python from scratch to advanced — become a confident Python developer",
  chapters: [
    // ═══════════════════════════════════════════════════════════════
    // CHAPTER 1: GETTING STARTED WITH PYTHON
    // ═══════════════════════════════════════════════════════════════
    {
      id: 1,
      title: "Getting Started with Python",
      lessons: [
        {
          id: "1-1",
          title: "Welcome to Python",
          completed: false,
          content: {
            description: "Discover why Python is the #1 language for beginners and professionals alike. Learn what makes Python special, where it's used, and write your first program.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll understand why Python is the world's most popular programming language, know exactly where it's used in the real world, and have written your very first Python program.`
              },
              {
                type: "text",
                content: `Python is one of the most powerful and beginner-friendly programming languages ever created. It was designed in 1991 by **Guido van Rossum** with one radical philosophy: **code should be readable**. While other languages drown you in curly braces, semicolons, and complex syntax, Python reads almost like plain English. This isn't an accident — it's by design.`
              },
              {
                type: "text",
                content: `Think of programming languages like cars. Some languages are like Formula 1 race cars — incredibly fast but nearly impossible to drive without years of training. Python is like a Tesla — powerful, elegant, and anyone can get in and start driving immediately. But don't let the simplicity fool you. The same language that beginners use to print "Hello World" is the same language powering Instagram's backend (serving 2 billion users), training OpenAI's GPT models, and analyzing data at NASA.`
              },
              {
                type: "heading",
                level: 2,
                content: "Why Python Dominates"
              },
              {
                type: "text",
                content: `Python consistently ranks as the **#1 most popular programming language** across every major index — TIOBE, Stack Overflow Developer Survey, GitHub's Octoverse, and IEEE Spectrum. But popularity alone doesn't tell the whole story. Here's why Python has earned its crown:`
              },
              {
                type: "list",
                items: [
                  "**Readable syntax** — Python code reads like pseudocode. You spend more time solving problems than deciphering syntax.",
                  "**Massive ecosystem** — Over 400,000 packages on PyPI (Python Package Index) for everything from web scraping to deep learning.",
                  "**Versatile** — One language for web development, data science, AI/ML, automation, scripting, game development, and more.",
                  "**Huge job market** — Python developers earn an average of $120,000/year in the US. It's required for roles in data science, DevOps, backend engineering, and ML.",
                  "**Incredible community** — Millions of developers, thousands of tutorials, and instant answers on Stack Overflow for any question you have.",
                  "**Cross-platform** — Write once, run everywhere: Windows, Mac, Linux, and even Raspberry Pi."
                ]
              },
              {
                type: "tip",
                content: "Python is named after **Monty Python's Flying Circus**, not the snake! Guido van Rossum was reading scripts from the comedy show while developing the language and wanted something short, unique, and fun."
              },
              {
                type: "heading",
                level: 2,
                content: "Who Uses Python?"
              },
              {
                type: "text",
                content: `Python isn't just a learning language — it's a production powerhouse used by the biggest companies in the world:`
              },
              {
                type: "code",
                language: "text",
                filename: "python_users.txt",
                code: `Company          │ How They Use Python
─────────────────┼──────────────────────────────────────
Google           │ YouTube, search algorithms, internal tools
Instagram        │ Entire backend (Django framework)
Netflix          │ Recommendation engine, data pipelines
Spotify          │ Data analysis, backend services
Dropbox          │ Desktop client, server infrastructure
NASA             │ Scientific computing, data analysis
Tesla            │ Autopilot AI, manufacturing automation
Reddit           │ Original codebase (now mixed)
Pinterest        │ Recommendation systems
Stripe           │ Data pipelines, internal tooling`
              },
              {
                type: "heading",
                level: 2,
                content: "Python vs Other Languages"
              },
              {
                type: "text",
                content: `Let's see how Python compares to other popular languages by looking at the same program — printing "Hello, World!" — in different languages:`
              },
              {
                type: "code",
                language: "text",
                filename: "comparison.txt",
                code: `# Python (1 line!)
print("Hello, World!")

// Java (5 lines of boilerplate)
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

// C++ (5 lines)
#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`
              },
              {
                type: "text",
                content: `See the difference? Python does in **1 line** what takes Java and C++ **5+ lines**. This isn't just about saving keystrokes — it's about **reducing cognitive load**. The less boilerplate you write, the more time you spend on actual problem-solving.`
              },
              {
                type: "heading",
                level: 2,
                content: "Setting Up Python"
              },
              {
                type: "text",
                content: `Before writing code, you need Python installed on your computer. Here's how to set up for each operating system:`
              },
              {
                type: "code",
                language: "text",
                filename: "setup.txt",
                code: `WINDOWS:
1. Go to python.org/downloads
2. Download "Python 3.12" (or latest 3.x)
3. ⚠️ CHECK "Add Python to PATH" during install!
4. Open Command Prompt → type: python --version

MAC:
1. Open Terminal
2. Install Homebrew: /bin/bash -c "$(curl -fsSL ...)"
3. Run: brew install python
4. Verify: python3 --version

LINUX (Ubuntu/Debian):
1. Open Terminal
2. Run: sudo apt update && sudo apt install python3
3. Verify: python3 --version`
              },
              {
                type: "warning",
                content: "On Windows, **always check 'Add Python to PATH'** during installation! Without this, you won't be able to run Python from the command line, and you'll get frustrating 'python is not recognized' errors."
              },
              {
                type: "heading",
                level: 2,
                content: "Your First Python Program"
              },
              {
                type: "text",
                content: `It's time! Let's write the classic first program that every developer in history has started with. This tradition dates back to 1978 when Brian Kernighan used it in a C programming tutorial.`
              },
              {
                type: "code",
                language: "python",
                filename: "hello.py",
                code: `# Your first Python program!
# The print() function displays text on the screen

print("Hello, World!")

# You can print multiple things
print("Welcome to Python! 🐍")
print("Let's learn to code together!")

# You can print numbers too
print(42)
print(3.14)

# And do math inside print!
print(2 + 2)
print("Python is", 30, "years old")`
              },
              {
                type: "text",
                content: `Let's break down what just happened:\n\n• **print()** is a built-in function that displays output to the screen\n• Text inside quotes (\\"...\\" or '...') is called a **string**\n• Lines starting with **#** are comments — Python ignores them, but they help humans understand the code\n• You can pass multiple items to print, separated by commas — Python adds spaces between them automatically`
              },
              {
                type: "heading",
                level: 2,
                content: "The Python Interactive Shell (REPL)"
              },
              {
                type: "text",
                content: `Python comes with a powerful interactive mode called the **REPL** (Read-Eval-Print Loop). Think of it as a conversation with Python — you type something, Python responds immediately.`
              },
              {
                type: "code",
                language: "python",
                filename: "repl_demo.py",
                code: `# In the Python REPL (type 'python' or 'python3' in terminal):

# >>> 2 + 3
# 5

# >>> "Hello" + " World"
# 'Hello World'

# >>> len("Python")
# 6

# >>> type(42)
# <class 'int'>

# The REPL is perfect for quick experiments!
# Try these yourself in your terminal.

# To start the REPL:
#   Windows: python
#   Mac/Linux: python3

# To exit: type exit() or press Ctrl+D`
              },
              {
                type: "tip",
                content: "Use the REPL as your **playground**. Whenever you're unsure how something works, open the REPL and try it. It's faster than writing a whole file. Professional developers use it constantly!"
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "text",
                content: `Now it's your turn! Complete these exercises to reinforce what you've learned:`
              },
              {
                type: "code",
                language: "python",
                filename: "exercises.py",
                code: `# Exercise 1: Print your name
# Write a print statement that displays your full name
# Your code here:


# Exercise 2: Print a poem
# Use multiple print() statements to display a 3-line poem
# Your code here:


# Exercise 3: Math in print
# Use print() to display the result of 365 * 24
# (How many hours are in a year?)
# Your code here:


# Exercise 4: Print art!
# Create a simple ASCII art face using print()
# Example:
# print("  O  O")
# print("   ^")
# print(" \\___/")
# Your code here:
`
              },
              {
                type: "checkpoint",
                content: "Can you make Python print your name, do a math calculation, and display a fun message? Try modifying the examples above and experiment! Breaking things is how you learn."
              }
            ]
          }
        },
        {
          id: "1-2",
          title: "Variables and Data Types",
          completed: false,
          content: {
            description: "Master Python's data types and variables — the fundamental building blocks that every Python program is built on.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll understand how to create variables, know every major data type in Python, and be able to convert between types confidently.`
              },
              {
                type: "text",
                content: `If print() is how Python talks to you, **variables** are how Python remembers things. A variable is simply a **name that points to a value** stored in your computer's memory. Think of variables like labeled boxes — you put something inside, give it a name, and can retrieve or change it later.`
              },
              {
                type: "text",
                content: `Unlike many other languages (Java, C++, C#), Python doesn't require you to declare the **type** of a variable. You just assign a value and Python figures out the type automatically. This is called **dynamic typing**, and it's one of the reasons Python feels so fast and natural to write.`
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
                code: `# Strings — text data (use quotes)
first_name = "Ada"
last_name = 'Lovelace'  # single or double quotes both work
full_name = first_name + " " + last_name  # string concatenation

# Integers — whole numbers (no decimal point)
age = 28
birth_year = 1996
negative_number = -42

# Floats — decimal numbers
height = 5.9
pi = 3.14159
temperature = -10.5

# Booleans — True or False (notice the capital T and F!)
is_student = True
has_job = False
is_adult = age >= 18  # evaluates to True

# None — represents "nothing" or "no value"
middle_name = None

# Print everything out
print(f"Name: {full_name}")
print(f"Age: {age}, Born: {birth_year}")
print(f"Height: {height}")
print(f"Is adult? {is_adult}")
print(f"Middle name: {middle_name}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Variable Naming Rules"
              },
              {
                type: "text",
                content: `Python has strict rules about what you can name your variables. Follow these and you'll avoid confusing errors:`
              },
              {
                type: "code",
                language: "python",
                filename: "naming_rules.py",
                code: `# ✅ VALID variable names
user_name = "Ada"          # snake_case (recommended!)
userName = "Ada"           # camelCase (works but not Pythonic)
_private = "secret"        # leading underscore (convention for private)
name2 = "Second"           # numbers OK (but not at the start)
MAX_SIZE = 100             # ALL_CAPS for constants

# ❌ INVALID variable names (these will crash!)
# 2name = "Bad"            # can't start with a number
# my-name = "Bad"          # no hyphens (Python thinks it's subtraction)
# my name = "Bad"          # no spaces
# class = "Bad"            # 'class' is a reserved keyword
# for = "Bad"              # 'for' is a reserved keyword`
              },
              {
                type: "tip",
                content: "Python convention is **snake_case** for variables and functions (words separated by underscores): `user_name`, `total_score`, `is_valid`. Use **ALL_CAPS** for constants: `MAX_RETRIES`, `API_KEY`. This is defined in PEP 8, Python's official style guide."
              },
              {
                type: "heading",
                level: 2,
                content: "Python's Core Data Types"
              },
              {
                type: "text",
                content: `Every value in Python has a **type** that determines what operations you can perform on it. Here are the fundamental types you'll use every day:`
              },
              {
                type: "code",
                language: "text",
                filename: "data_types.txt",
                code: `Type       │ Example              │ Description            │ Use Case
───────────┼──────────────────────┼────────────────────────┼──────────────────────
str        │ "hello", 'world'     │ Text/characters        │ Names, messages, URLs
int        │ 42, -7, 0            │ Whole numbers          │ Counts, ages, IDs
float      │ 3.14, -0.5           │ Decimal numbers        │ Prices, measurements
bool       │ True, False          │ Boolean logic          │ Flags, conditions
NoneType   │ None                 │ Absence of value       │ Default/empty values
list       │ [1, 2, 3]            │ Ordered, mutable       │ Collections of items
tuple      │ (1, 2, 3)            │ Ordered, immutable     │ Fixed collections
dict       │ {"a": 1}             │ Key-value pairs        │ Structured data
set        │ {1, 2, 3}            │ Unique values only     │ Removing duplicates`
              },
              {
                type: "heading",
                level: 2,
                content: "Type Checking with type()"
              },
              {
                type: "code",
                language: "python",
                filename: "type_checking.py",
                code: `# The type() function tells you what type a value is
print(type("Hello"))       # <class 'str'>
print(type(42))            # <class 'int'>
print(type(3.14))          # <class 'float'>
print(type(True))          # <class 'bool'>
print(type(None))          # <class 'NoneType'>
print(type([1, 2, 3]))     # <class 'list'>

# You can also use isinstance() for checking
age = 25
print(isinstance(age, int))     # True
print(isinstance(age, str))     # False
print(isinstance(age, (int, float)))  # True — checks multiple types`
              },
              {
                type: "heading",
                level: 2,
                content: "Type Conversion (Casting)"
              },
              {
                type: "text",
                content: `Sometimes you need to convert between types. This is called **type casting**. Python makes it easy with built-in conversion functions:`
              },
              {
                type: "code",
                language: "python",
                filename: "type_conversion.py",
                code: `# String to Integer
user_input = "42"
number = int(user_input)    # 42 (now it's a real number!)
print(number + 8)           # 50

# Integer to String
age = 28
message = "I am " + str(age) + " years old"
print(message)

# String to Float
price = float("19.99")     # 19.99
print(price * 2)            # 39.98

# Float to Integer (truncates — does NOT round!)
pi = 3.99
whole = int(pi)             # 3 (not 4!)
print(whole)

# Number to Boolean
print(bool(0))     # False — zero is "falsy"
print(bool(42))    # True — any non-zero is "truthy"
print(bool(""))    # False — empty string is "falsy"
print(bool("hi"))  # True — non-empty string is "truthy"`
              },
              {
                type: "warning",
                content: "**int() truncates, it doesn't round!** int(3.99) gives 3, not 4. If you want rounding, use round(3.99) which gives 4. This catches many beginners off guard."
              },
              {
                type: "heading",
                level: 2,
                content: "f-Strings — Modern String Formatting"
              },
              {
                type: "text",
                content: `f-strings (formatted string literals) are the modern, Pythonic way to embed variables and expressions inside strings. Added in Python 3.6, they're cleaner and faster than older methods.`
              },
              {
                type: "code",
                language: "python",
                filename: "fstrings.py",
                code: `name = "Ada"
age = 28
salary = 95000.50

# Basic f-string — embed variables with {variable}
print(f"My name is {name} and I'm {age} years old.")

# Expressions inside f-strings — any valid Python works!
print(f"In 5 years, I'll be {age + 5}")
print(f"My name has {len(name)} letters")
print(f"Uppercase: {name.upper()}")

# Formatting numbers
print(f"Salary: \${salary:,.2f}")       # $95,000.50
print(f"Percentage: {0.856:.1%}")       # 85.6%
print(f"Padded: {42:05d}")             # 00042

# Multi-line f-strings
profile = f"""
╔══════════════════════╗
║  Name: {name:<14}║
║  Age:  {age:<14}║
╚══════════════════════╝
"""
print(profile)

# Old ways (still work but avoid in new code):
# %-formatting: "Hello %s" % name
# .format():    "Hello {}".format(name)
# f-strings:    f"Hello {name}"  ← USE THIS!`
              },
              {
                type: "tip",
                content: "f-strings can contain **any valid Python expression** inside the curly braces. You can call functions, do math, use ternary operators — anything that returns a value. Example: f\"Status: {'adult' if age >= 18 else 'minor'}\""
              },
              {
                type: "heading",
                level: 2,
                content: "Multiple Assignment & Swapping"
              },
              {
                type: "code",
                language: "python",
                filename: "multiple_assignment.py",
                code: `# Assign multiple variables at once
x, y, z = 1, 2, 3
print(x, y, z)  # 1 2 3

# Assign same value to multiple variables
a = b = c = 0
print(a, b, c)  # 0 0 0

# Swap variables (Python makes this elegant!)
x, y = 10, 20
print(f"Before: x={x}, y={y}")  # x=10, y=20

x, y = y, x  # swap in one line!
print(f"After:  x={x}, y={y}")  # x=20, y=10

# In other languages, you'd need a temp variable:
# temp = x
# x = y
# y = temp
# Python's way is much cleaner!`
              },
              {
                type: "heading",
                level: 2,
                content: "Getting User Input"
              },
              {
                type: "code",
                language: "python",
                filename: "user_input.py",
                code: `# input() always returns a STRING
name = input("What's your name? ")
print(f"Hello, {name}!")

# For numbers, you must convert!
age_str = input("How old are you? ")
age = int(age_str)  # convert string to int
print(f"You'll be {age + 1} next year!")

# Shorthand — convert in one line
height = float(input("Your height in feet: "))
print(f"That's {height * 30.48:.1f} centimeters")`
              },
              {
                type: "warning",
                content: "**input() ALWAYS returns a string**, even if the user types a number. If you need to do math with user input, you must convert it with int() or float() first. Forgetting this is the #1 beginner mistake!"
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "code",
                language: "python",
                filename: "exercises.py",
                code: `# Exercise 1: Personal Info Card
# Create variables for your name, age, city, and hobby
# Print a formatted card using f-strings like:
# "Hi! I'm Ada, 28, from London. I love hiking!"


# Exercise 2: Temperature Converter
# Ask the user for a temperature in Fahrenheit
# Convert to Celsius: (F - 32) * 5/9
# Print the result formatted to 1 decimal place


# Exercise 3: Type Detective
# Create one variable of each type (str, int, float, bool, None)
# Use type() to print each one's type
# Then convert the int to a string and prove it changed


# Exercise 4: Bill Splitter
# Ask for the total bill amount and number of people
# Calculate each person's share
# Print: "Each person pays $XX.XX"
`
              },
              {
                type: "quiz",
                question: "What will type(3.14) return?",
                options: [
                  { id: "a", text: "<class 'int'>" },
                  { id: "b", text: "<class 'float'>" },
                  { id: "c", text: "<class 'str'>" },
                  { id: "d", text: "<class 'number'>" }
                ],
                correct: "b",
                explanation: "3.14 has a decimal point, so Python treats it as a float. There is no 'number' type in Python — numbers are either int or float."
              },
              {
                type: "checkpoint",
                content: "Create a mini profile program: ask the user for their name, age, and favorite color using input(), then print a formatted summary using f-strings. Bonus: calculate and display their birth year!"
              }
            ]
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CHAPTER 2: CONTROL FLOW
    // ═══════════════════════════════════════════════════════════════
    {
      id: 2,
      title: "Control Flow",
      lessons: [
        {
          id: "2-1",
          title: "Conditional Statements (if/elif/else)",
          completed: false,
          content: {
            description: "Learn to make your programs smart with conditional logic — the ability to make decisions based on data.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll be able to write programs that make intelligent decisions using if, elif, and else statements, comparison operators, and logical operators.`
              },
              {
                type: "text",
                content: `So far, your programs run every line from top to bottom, no exceptions. But real programs need to **make decisions**. Should I show an error message? Is the user old enough? Did the password match? This is where **conditional statements** come in — they let your program choose different paths based on conditions.`
              },
              {
                type: "text",
                content: `Think of conditionals like a GPS navigation system. When you reach an intersection, the GPS checks: "Is the user's destination to the left?" If yes, say "turn left." If no, check another condition. This branching logic is the foundation of every program ever written.`
              },
              {
                type: "heading",
                level: 2,
                content: "The if Statement"
              },
              {
                type: "code",
                language: "python",
                filename: "if_basics.py",
                code: `# Basic if statement
age = 20

if age >= 18:
    print("You are an adult! 🎉")
    print("You can vote!")

# This runs regardless — it's NOT inside the if block
print("Program continues...")

# The structure:
# if condition:       ← condition must be True or False
#     indented code   ← runs ONLY if condition is True
#     more code       ← still inside the if block
# back to normal      ← runs no matter what`
              },
              {
                type: "warning",
                content: "**Indentation is NOT optional in Python!** Unlike most languages where indentation is just style, Python uses indentation (4 spaces) to define code blocks. Mixing tabs and spaces will cause IndentationError. Configure your editor to use 4 spaces per tab."
              },
              {
                type: "heading",
                level: 2,
                content: "if/else — Two Paths"
              },
              {
                type: "code",
                language: "python",
                filename: "if_else.py",
                code: `age = 15

if age >= 18:
    print("Welcome! You can enter the club. 🎵")
else:
    print(f"Sorry, you're {age}. Come back in {18 - age} years! 🚫")

# Real-world example: Login check
password = input("Enter password: ")

if password == "python123":
    print("✅ Login successful! Welcome back.")
else:
    print("❌ Wrong password. Try again.")

# Another example: Even/Odd checker
number = int(input("Enter a number: "))

if number % 2 == 0:
    print(f"{number} is EVEN")
else:
    print(f"{number} is ODD")`
              },
              {
                type: "heading",
                level: 2,
                content: "if/elif/else — Multiple Paths"
              },
              {
                type: "text",
                content: `Sometimes you need more than two options. That's where **elif** (short for "else if") comes in. You can chain as many elif blocks as you need:`
              },
              {
                type: "code",
                language: "python",
                filename: "elif.py",
                code: `# Grade calculator
score = 85

if score >= 90:
    grade = "A"
    message = "Outstanding! 🌟"
elif score >= 80:
    grade = "B"
    message = "Great job! 👏"
elif score >= 70:
    grade = "C"
    message = "Not bad, keep studying! 📚"
elif score >= 60:
    grade = "D"
    message = "You passed, but barely. 😬"
else:
    grade = "F"
    message = "Time to retake the course. 📖"

print(f"Score: {score} → Grade: {grade}")
print(message)

# Time-based greeting
from datetime import datetime
hour = datetime.now().hour

if hour < 12:
    greeting = "Good morning! ☀️"
elif hour < 17:
    greeting = "Good afternoon! 🌤️"
elif hour < 21:
    greeting = "Good evening! 🌅"
else:
    greeting = "Good night! 🌙"

print(greeting)`
              },
              {
                type: "heading",
                level: 2,
                content: "Comparison Operators"
              },
              {
                type: "text",
                content: `Conditions rely on **comparison operators** that return True or False:`
              },
              {
                type: "code",
                language: "text",
                filename: "operators.txt",
                code: `Operator │ Meaning                │ Example        │ Result
─────────┼────────────────────────┼────────────────┼───────
==       │ Equal to               │ 5 == 5         │ True
!=       │ Not equal to           │ 5 != 3         │ True
>        │ Greater than           │ 10 > 5         │ True
<        │ Less than              │ 3 < 7          │ True
>=       │ Greater than or equal  │ 5 >= 5         │ True
<=       │ Less than or equal     │ 3 <= 2         │ False`
              },
              {
                type: "warning",
                content: "**Don't confuse = and ==!** A single `=` is assignment (storing a value). Double `==` is comparison (checking equality). Writing `if x = 5:` is a syntax error — you mean `if x == 5:`"
              },
              {
                type: "heading",
                level: 2,
                content: "Logical Operators: and, or, not"
              },
              {
                type: "text",
                content: `You can combine multiple conditions using **logical operators**:`
              },
              {
                type: "code",
                language: "python",
                filename: "logical_operators.py",
                code: `age = 25
has_license = True
is_insured = True

# AND — both conditions must be True
if age >= 18 and has_license:
    print("You can drive! 🚗")

# OR — at least one condition must be True
day = "Saturday"
if day == "Saturday" or day == "Sunday":
    print("It's the weekend! 🎉")

# NOT — reverses the condition
is_raining = False
if not is_raining:
    print("Let's go for a walk! 🚶")

# Combining multiple conditions
if age >= 18 and has_license and is_insured:
    print("You're fully legal to drive!")
elif age >= 18 and has_license and not is_insured:
    print("You need insurance first!")
else:
    print("You can't drive yet.")

# Real-world: Eligibility checker
income = 75000
credit_score = 720

if income >= 50000 and credit_score >= 700:
    print("✅ Approved for the loan!")
elif income >= 50000 or credit_score >= 700:
    print("⚠️ Conditionally approved — needs review")
else:
    print("❌ Not eligible at this time")`
              },
              {
                type: "heading",
                level: 2,
                content: "Nested Conditionals"
              },
              {
                type: "code",
                language: "python",
                filename: "nested_if.py",
                code: `# You can put if statements inside other if statements
has_ticket = True
age = 15
is_vip = False

if has_ticket:
    print("You have a ticket! ✅")
    
    if age < 12:
        print("Child ticket — $5")
    elif age < 18:
        print("Youth ticket — $8")
    else:
        print("Adult ticket — $15")
    
    if is_vip:
        print("🌟 VIP access — front row seats!")
else:
    print("No ticket! Buy one at the counter. 🎫")`
              },
              {
                type: "tip",
                content: "Avoid deeply nested conditionals (3+ levels) — they're hard to read. If you find yourself nesting deeply, consider using **early returns** (in functions), **logical operators** to combine conditions, or refactoring into separate functions."
              },
              {
                type: "heading",
                level: 2,
                content: "Ternary Operator (One-Line if/else)"
              },
              {
                type: "code",
                language: "python",
                filename: "ternary.py",
                code: `# Normal if/else
age = 20
if age >= 18:
    status = "adult"
else:
    status = "minor"

# Same thing in ONE line (ternary operator)
status = "adult" if age >= 18 else "minor"
print(status)  # "adult"

# More examples
x = 10
result = "even" if x % 2 == 0 else "odd"
print(f"{x} is {result}")

# With f-strings
print(f"You are {'old enough' if age >= 18 else 'too young'} to vote")`
              },
              {
                type: "heading",
                level: 2,
                content: "Truthy and Falsy Values"
              },
              {
                type: "text",
                content: `In Python, every value has a "truthiness." You don't always need explicit comparisons — Python can evaluate any value as True or False:`
              },
              {
                type: "code",
                language: "python",
                filename: "truthy_falsy.py",
                code: `# FALSY values (evaluate to False):
# False, 0, 0.0, "", [], {}, set(), None

# TRUTHY values (everything else):
# True, any non-zero number, non-empty string/list/dict

# This means you can write cleaner conditions:
name = "Ada"
items = [1, 2, 3]
count = 0

# Instead of: if name != ""
if name:
    print(f"Hello, {name}!")

# Instead of: if len(items) > 0
if items:
    print(f"You have {len(items)} items")

# Instead of: if count != 0
if not count:
    print("Count is zero")`
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "code",
                language: "python",
                filename: "exercises.py",
                code: `# Exercise 1: Age Group Classifier
# Ask for age and classify: baby(0-2), child(3-12),
# teen(13-17), adult(18-64), senior(65+)


# Exercise 2: Simple Calculator
# Ask for two numbers and an operator (+, -, *, /)
# Perform the operation and print the result
# Handle division by zero!


# Exercise 3: Rock Paper Scissors
# Ask user for rock, paper, or scissors
# Generate computer's choice (import random; random.choice([...]))
# Determine and print the winner


# Exercise 4: Leap Year Checker
# Ask for a year. A leap year is:
# - Divisible by 4 AND
# - NOT divisible by 100, UNLESS also divisible by 400
# Example: 2000=leap, 1900=not leap, 2024=leap
`
              },
              {
                type: "quiz",
                question: "What does this print? x = 5; print('yes' if x > 3 and x < 10 else 'no')",
                options: [
                  { id: "a", text: "yes" },
                  { id: "b", text: "no" },
                  { id: "c", text: "True" },
                  { id: "d", text: "Error" }
                ],
                correct: "a",
                explanation: "x is 5, which is both greater than 3 AND less than 10, so the condition is True, and 'yes' is printed."
              },
              {
                type: "checkpoint",
                content: "Build a movie ticket pricing system: ask for age and day of the week. Weekdays are cheaper than weekends. Kids and seniors get discounts. Use if/elif/else with logical operators."
              }
            ]
          }
        },
        {
          id: "2-2",
          title: "Loops (for and while)",
          completed: false,
          content: {
            description: "Master Python's looping constructs to repeat actions, iterate over data, and build powerful automated programs.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll know how to use for loops, while loops, range(), loop control statements (break, continue, pass), and nested loops to automate repetitive tasks.`
              },
              {
                type: "text",
                content: `Imagine you need to send a "Happy Birthday" message to 1,000 employees. Would you write 1,000 print statements? Of course not! **Loops** let you repeat actions automatically. They're one of the most powerful concepts in programming — almost every useful program uses loops.`
              },
              {
                type: "heading",
                level: 2,
                content: "The for Loop"
              },
              {
                type: "text",
                content: `A for loop iterates over a **sequence** (list, string, range, etc.) and runs a block of code for each item:`
              },
              {
                type: "code",
                language: "python",
                filename: "for_basics.py",
                code: `# Loop through a list
fruits = ["apple", "banana", "cherry", "mango"]

for fruit in fruits:
    print(f"I love {fruit}! 🍎")

# Loop through a string (character by character)
for letter in "Python":
    print(letter, end=" ")  # P y t h o n

print()  # new line

# Loop with index using enumerate()
students = ["Alice", "Bob", "Charlie"]

for index, name in enumerate(students):
    print(f"Student #{index + 1}: {name}")

# Output:
# Student #1: Alice
# Student #2: Bob
# Student #3: Charlie`
              },
              {
                type: "heading",
                level: 2,
                content: "The range() Function"
              },
              {
                type: "text",
                content: `range() generates a sequence of numbers. It's the most common way to loop a specific number of times:`
              },
              {
                type: "code",
                language: "python",
                filename: "range_examples.py",
                code: `# range(stop) — 0 to stop-1
for i in range(5):
    print(i, end=" ")  # 0 1 2 3 4
print()

# range(start, stop) — start to stop-1
for i in range(1, 6):
    print(i, end=" ")  # 1 2 3 4 5
print()

# range(start, stop, step) — with custom increment
for i in range(0, 20, 3):
    print(i, end=" ")  # 0 3 6 9 12 15 18
print()

# Counting backwards
for i in range(10, 0, -1):
    print(i, end=" ")  # 10 9 8 7 6 5 4 3 2 1
print("🚀 Liftoff!")

# Practical: Multiplication table
number = 7
print(f"\\n--- {number}x Table ---")
for i in range(1, 11):
    print(f"{number} × {i} = {number * i}")`
              },
              {
                type: "tip",
                content: "Remember: range(n) gives you n numbers starting from 0. So range(5) gives [0,1,2,3,4], not [1,2,3,4,5]. If you want 1-5, use range(1, 6). The stop value is always EXCLUDED."
              },
              {
                type: "heading",
                level: 2,
                content: "The while Loop"
              },
              {
                type: "text",
                content: `A while loop keeps running **as long as a condition is True**. Use it when you don't know how many iterations you need:`
              },
              {
                type: "code",
                language: "python",
                filename: "while_loops.py",
                code: `# Basic while loop — countdown
count = 5
while count > 0:
    print(f"{count}...")
    count -= 1  # same as count = count - 1
print("Go! 🏁")

# User input validation — keep asking until valid
while True:
    age = input("Enter your age (1-120): ")
    if age.isdigit() and 1 <= int(age) <= 120:
        age = int(age)
        break  # exit the loop
    print("Invalid! Try again.")

print(f"Your age is {age}")

# Guessing game
import random
secret = random.randint(1, 10)
attempts = 0

while True:
    guess = int(input("Guess a number (1-10): "))
    attempts += 1
    
    if guess == secret:
        print(f"🎉 Correct! You got it in {attempts} tries!")
        break
    elif guess < secret:
        print("Too low! ⬆️")
    else:
        print("Too high! ⬇️")`
              },
              {
                type: "warning",
                content: "**Infinite loops** are the most common loop bug! If your while condition never becomes False, your program runs forever. Always make sure something inside the loop changes the condition. If your program freezes, press Ctrl+C to stop it."
              },
              {
                type: "heading",
                level: 2,
                content: "Loop Control: break, continue, pass"
              },
              {
                type: "code",
                language: "python",
                filename: "loop_control.py",
                code: `# BREAK — exit the loop immediately
print("--- break example ---")
for i in range(10):
    if i == 5:
        print("Found 5! Stopping.")
        break
    print(i, end=" ")  # 0 1 2 3 4
print()

# CONTINUE — skip this iteration, go to next
print("\\n--- continue example ---")
for i in range(10):
    if i % 2 == 0:  # skip even numbers
        continue
    print(i, end=" ")  # 1 3 5 7 9
print()

# PASS — do nothing (placeholder)
print("\\n--- pass example ---")
for i in range(5):
    if i == 3:
        pass  # TODO: handle this case later
    print(i, end=" ")  # 0 1 2 3 4
print()

# Real-world: Search for an item
usernames = ["alice", "bob", "charlie", "david"]
search = "charlie"

for user in usernames:
    if user == search:
        print(f"✅ Found {search}!")
        break
else:
    # This else belongs to the for loop (not the if!)
    # It runs only if the loop completed WITHOUT break
    print(f"❌ {search} not found")`
              },
              {
                type: "tip",
                content: "Python has a unique feature: **for/else** and **while/else**. The else block after a loop runs only if the loop completed normally (without hitting a break). It's perfect for search operations where you need to know if something was NOT found."
              },
              {
                type: "heading",
                level: 2,
                content: "Nested Loops"
              },
              {
                type: "code",
                language: "python",
                filename: "nested_loops.py",
                code: `# Nested loops — a loop inside a loop
# The inner loop runs completely for each outer iteration

# Print a pattern
for row in range(1, 6):
    for col in range(row):
        print("⭐", end="")
    print()  # new line after each row

# Output:
# ⭐
# ⭐⭐
# ⭐⭐⭐
# ⭐⭐⭐⭐
# ⭐⭐⭐⭐⭐

# Practical: Seating chart
rows = ["A", "B", "C"]
seats_per_row = 4

for row in rows:
    for seat in range(1, seats_per_row + 1):
        print(f"[{row}{seat}]", end=" ")
    print()

# Output:
# [A1] [A2] [A3] [A4]
# [B1] [B2] [B3] [B4]
# [C1] [C2] [C3] [C4]`
              },
              {
                type: "heading",
                level: 2,
                content: "List Comprehensions (Pythonic Loops)"
              },
              {
                type: "text",
                content: `Python offers a powerful shortcut for creating lists from loops called **list comprehensions**. They're concise, readable, and faster than regular loops:`
              },
              {
                type: "code",
                language: "python",
                filename: "list_comprehensions.py",
                code: `# Regular loop to create a list
squares = []
for x in range(10):
    squares.append(x ** 2)
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Same thing with list comprehension (ONE line!)
squares = [x ** 2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With condition (filtering)
evens = [x for x in range(20) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Transform strings
names = ["alice", "BOB", "Charlie"]
cleaned = [name.strip().title() for name in names]
print(cleaned)  # ['Alice', 'Bob', 'Charlie']

# Fizzbuzz in one line!
fizzbuzz = ["FizzBuzz" if i % 15 == 0 
            else "Fizz" if i % 3 == 0 
            else "Buzz" if i % 5 == 0 
            else str(i) 
            for i in range(1, 16)]
print(fizzbuzz)`
              },
              {
                type: "heading",
                level: 2,
                content: "Useful Loop Patterns"
              },
              {
                type: "code",
                language: "python",
                filename: "loop_patterns.py",
                code: `# Pattern 1: Accumulator — sum of numbers
total = 0
for num in [10, 20, 30, 40, 50]:
    total += num
print(f"Sum: {total}")  # 150

# Pattern 2: Counter — count occurrences
text = "hello world"
vowel_count = 0
for char in text:
    if char in "aeiou":
        vowel_count += 1
print(f"Vowels: {vowel_count}")  # 3

# Pattern 3: Max/Min finder
temps = [72, 85, 60, 91, 77, 63]
hottest = temps[0]
for temp in temps:
    if temp > hottest:
        hottest = temp
print(f"Hottest: {hottest}°F")  # 91

# Pattern 4: zip() — loop through multiple lists together
names = ["Alice", "Bob", "Charlie"]
scores = [95, 87, 92]

for name, score in zip(names, scores):
    print(f"{name}: {score}%")`
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "code",
                language: "python",
                filename: "exercises.py",
                code: `# Exercise 1: Sum Calculator
# Ask the user for numbers until they type "done"
# Then print the total sum and average


# Exercise 2: FizzBuzz (Classic Interview Question!)
# Print numbers 1-100, but:
# - Multiples of 3: print "Fizz"
# - Multiples of 5: print "Buzz"
# - Multiples of both: print "FizzBuzz"


# Exercise 3: Password Generator
# Use a loop to generate a random 12-character password
# Mix uppercase, lowercase, digits, and symbols
# Hint: import random, import string


# Exercise 4: Number Pyramid
# Print this pattern for n=5:
#     1
#    121
#   12321
#  1234321
# 123454321
`
              },
              {
                type: "quiz",
                question: "What does range(2, 10, 3) produce?",
                options: [
                  { id: "a", text: "[2, 3, 4, 5, 6, 7, 8, 9, 10]" },
                  { id: "b", text: "[2, 5, 8]" },
                  { id: "c", text: "[2, 5, 8, 11]" },
                  { id: "d", text: "[3, 6, 9]" }
                ],
                correct: "b",
                explanation: "range(2, 10, 3) starts at 2, increments by 3 each time, and stops BEFORE 10. So: 2, 5, 8 (next would be 11 which is >= 10, so it stops)."
              },
              {
                type: "checkpoint",
                content: "Write a program that asks the user for a number and prints whether it's a prime number. Use a for loop to check divisibility from 2 to the square root of the number."
              }
            ]
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CHAPTER 3: DATA STRUCTURES
    // ═══════════════════════════════════════════════════════════════
    {
      id: 3,
      title: "Data Structures",
      lessons: [
        {
          id: "3-1",
          title: "Lists and Tuples",
          completed: false,
          content: {
            description: "Master Python's most fundamental data structures — lists for mutable collections and tuples for immutable ones.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll be able to create, modify, slice, and manipulate lists and tuples like a Python pro. These are the workhorses of Python programming.`
              },
              {
                type: "text",
                content: `Variables are great for storing single values, but what if you need to store a **collection** of values? A list of students, a series of temperatures, a shopping cart of items? That's where **lists** come in. Lists are Python's most versatile and commonly used data structure.`
              },
              {
                type: "heading",
                level: 2,
                content: "Creating Lists"
              },
              {
                type: "code",
                language: "python",
                filename: "list_creation.py",
                code: `# Lists are ordered, mutable collections in square brackets
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [42, "hello", True, 3.14, None]  # any types!

# Empty list (two ways)
empty1 = []
empty2 = list()

# List from range
nums = list(range(1, 11))  # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# List from string
chars = list("Python")  # ['P', 'y', 't', 'h', 'o', 'n']

print(f"Fruits: {fruits}")
print(f"Length: {len(fruits)}")  # 3`
              },
              {
                type: "heading",
                level: 2,
                content: "Indexing and Slicing"
              },
              {
                type: "text",
                content: `Every item in a list has a position called an **index**. Python uses **zero-based indexing** — the first item is at index 0, not 1.`
              },
              {
                type: "code",
                language: "python",
                filename: "indexing.py",
                code: `fruits = ["apple", "banana", "cherry", "date", "elderberry"]
#           index:  0        1         2        3       4
#  negative index: -5       -4        -3       -2      -1

# Positive indexing (from the start)
print(fruits[0])    # "apple" (first item)
print(fruits[2])    # "cherry" (third item)

# Negative indexing (from the end)
print(fruits[-1])   # "elderberry" (last item!)
print(fruits[-2])   # "date" (second to last)

# SLICING — get a sub-list [start:stop:step]
print(fruits[1:4])    # ['banana', 'cherry', 'date']
print(fruits[:3])     # ['apple', 'banana', 'cherry'] (first 3)
print(fruits[2:])     # ['cherry', 'date', 'elderberry'] (from index 2)
print(fruits[::2])    # ['apple', 'cherry', 'elderberry'] (every 2nd)
print(fruits[::-1])   # reversed! ['elderberry', 'date', ...]`
              },
              {
                type: "tip",
                content: "**Slicing never causes an IndexError**, even if your indices are out of range. `fruits[100:200]` just returns an empty list. But **indexing** with an out-of-range index WILL crash: `fruits[100]` → IndexError!"
              },
              {
                type: "heading",
                level: 2,
                content: "Modifying Lists"
              },
              {
                type: "code",
                language: "python",
                filename: "modifying_lists.py",
                code: `fruits = ["apple", "banana", "cherry"]

# Change an item by index
fruits[1] = "blueberry"
print(fruits)  # ['apple', 'blueberry', 'cherry']

# ADDING items
fruits.append("mango")           # add to end
fruits.insert(1, "avocado")      # insert at index 1
fruits.extend(["kiwi", "grape"]) # add multiple items
print(fruits)

# REMOVING items
fruits.remove("cherry")   # remove by value (first occurrence)
popped = fruits.pop()     # remove & return last item
popped2 = fruits.pop(0)   # remove & return item at index 0
del fruits[1]             # delete by index (no return)
print(fruits)

# OTHER useful methods
nums = [3, 1, 4, 1, 5, 9, 2, 6]
nums.sort()               # sort in place: [1, 1, 2, 3, 4, 5, 6, 9]
nums.reverse()            # reverse in place
print(nums.count(1))      # 2 (how many 1s?)
print(nums.index(5))      # find index of value 5

# sorted() returns a NEW sorted list (original unchanged)
original = [3, 1, 4, 1, 5]
new_sorted = sorted(original)
print(original)    # [3, 1, 4, 1, 5] — unchanged!
print(new_sorted)  # [1, 1, 3, 4, 5]`
              },
              {
                type: "warning",
                content: "**.sort() modifies the list in place and returns None!** Don't do `my_list = my_list.sort()` — this sets my_list to None! Use `.sort()` alone OR use `sorted()` which returns a new list."
              },
              {
                type: "heading",
                level: 2,
                content: "List Operations"
              },
              {
                type: "code",
                language: "python",
                filename: "list_operations.py",
                code: `# Membership testing
fruits = ["apple", "banana", "cherry"]
print("banana" in fruits)     # True
print("mango" not in fruits)  # True

# Concatenation
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2  # [1, 2, 3, 4, 5, 6]

# Repetition
zeros = [0] * 5  # [0, 0, 0, 0, 0]

# Unpacking
first, second, *rest = [1, 2, 3, 4, 5]
print(first)   # 1
print(second)  # 2
print(rest)    # [3, 4, 5]

# Built-in functions with lists
nums = [10, 20, 30, 40, 50]
print(len(nums))   # 5
print(sum(nums))   # 150
print(min(nums))   # 10
print(max(nums))   # 50
print(sum(nums) / len(nums))  # 30.0 (average)`
              },
              {
                type: "heading",
                level: 2,
                content: "Tuples — Immutable Lists"
              },
              {
                type: "text",
                content: `A **tuple** is like a list, but **you can't change it after creation**. Tuples are immutable — no adding, removing, or modifying items. Why use them? They're faster, safer, and can be used as dictionary keys.`
              },
              {
                type: "code",
                language: "python",
                filename: "tuples.py",
                code: `# Creating tuples — use parentheses (or no brackets)
coordinates = (10, 20)
rgb_color = (255, 128, 0)
single = (42,)  # trailing comma needed for single-item tuple!

# Tuples support indexing and slicing (just like lists)
print(coordinates[0])   # 10
print(rgb_color[1:])    # (128, 0)

# But you CANNOT modify them!
# coordinates[0] = 99  # ❌ TypeError: 'tuple' does not support item assignment

# Tuple unpacking — very common in Python
x, y = coordinates
print(f"X: {x}, Y: {y}")

# Returning multiple values from functions
def get_user():
    return "Alice", 28, "alice@email.com"

name, age, email = get_user()
print(f"{name} is {age}")

# When to use tuple vs list:
# Tuple: data that shouldn't change (coordinates, RGB, DB record)
# List:  data that needs to grow/shrink (todo items, cart, students)`
              },
              {
                type: "code",
                language: "text",
                filename: "list_vs_tuple.txt",
                code: `Feature          │ List                  │ Tuple
─────────────────┼───────────────────────┼─────────────────────
Syntax           │ [1, 2, 3]             │ (1, 2, 3)
Mutable          │ ✅ Yes                │ ❌ No
Methods          │ Many (.append, etc.)  │ Few (.count, .index)
Speed            │ Slower                │ Faster
Memory           │ More                  │ Less
Dict key         │ ❌ Can't be a key     │ ✅ Can be a key
Use case         │ Dynamic collections   │ Fixed/constant data`
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "code",
                language: "python",
                filename: "exercises.py",
                code: `# Exercise 1: List Statistics
# Given: scores = [85, 92, 78, 95, 88, 72, 90]
# Find and print: highest, lowest, average, sorted list


# Exercise 2: Remove Duplicates
# Given: nums = [1, 3, 5, 3, 7, 1, 9, 5]
# Create a new list with duplicates removed (keep order!)
# Hint: check if item already in new list before adding


# Exercise 3: Flatten a Nested List
# Given: nested = [[1, 2], [3, 4], [5, 6]]
# Create: flat = [1, 2, 3, 4, 5, 6]
# Do it with a loop AND with a list comprehension


# Exercise 4: Rotate a List
# Write code that rotates a list by n positions
# [1,2,3,4,5] rotated by 2 → [4,5,1,2,3]
# Hint: use slicing!
`
              },
              {
                type: "quiz",
                question: "What does [1,2,3] + [4,5] produce?",
                options: [
                  { id: "a", text: "[5, 7, 3]" },
                  { id: "b", text: "[1, 2, 3, 4, 5]" },
                  { id: "c", text: "Error" },
                  { id: "d", text: "[[1,2,3], [4,5]]" }
                ],
                correct: "b",
                explanation: "The + operator concatenates lists, creating a new list with all items: [1, 2, 3, 4, 5]. It does NOT add the numbers element-wise."
              },
              {
                type: "checkpoint",
                content: "Build a simple To-Do list app: use a while loop to let users add items, remove items, view all items, or quit. Store items in a list. Use enumerate() to show numbered items."
              }
            ]
          }
        },
        {
          id: "3-2",
          title: "Dictionaries and Sets",
          completed: false,
          content: {
            description: "Master dictionaries (key-value data) and sets (unique collections) — essential structures for real-world Python programming.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll understand how to create and manipulate dictionaries, work with nested data structures, and use sets for efficient collection operations.`
              },
              {
                type: "text",
                content: `Lists are great when you access data by position (index 0, 1, 2...). But what if you want to look up data by **name**? "What's Alice's email?" "What's the capital of France?" This is where **dictionaries** shine — they store **key-value pairs**, like a real dictionary maps words to definitions.`
              },
              {
                type: "heading",
                level: 2,
                content: "Creating Dictionaries"
              },
              {
                type: "code",
                language: "python",
                filename: "dict_creation.py",
                code: `# Dictionaries use curly braces with key: value pairs
student = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science",
    "gpa": 3.8,
    "is_active": True
}

# Access values by key
print(student["name"])     # "Alice"
print(student["gpa"])      # 3.8

# Using .get() — safer! Returns None instead of error
print(student.get("email"))            # None (no crash!)
print(student.get("email", "N/A"))     # "N/A" (custom default)

# Dictionary from constructor
colors = dict(red="#FF0000", green="#00FF00", blue="#0000FF")
print(colors["red"])  # "#FF0000"

# Dictionary from list of tuples
pairs = [("a", 1), ("b", 2), ("c", 3)]
letter_map = dict(pairs)
print(letter_map)  # {'a': 1, 'b': 2, 'c': 3}`
              },
              {
                type: "warning",
                content: "**Always use .get() when you're not sure if a key exists!** `dict[key]` crashes with KeyError if the key doesn't exist. `dict.get(key)` returns None safely. This is one of the most common Python bugs in production code."
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
                code: `student = {"name": "Alice", "age": 20}

# Add or update a key
student["email"] = "alice@university.edu"  # add new key
student["age"] = 21                         # update existing

# Remove keys
del student["age"]                   # delete by key
email = student.pop("email")        # remove and return value
last = student.popitem()             # remove last inserted pair

# Update multiple keys at once
student.update({
    "age": 21,
    "gpa": 3.9,
    "year": "Senior"
})

# Merge dictionaries (Python 3.9+)
defaults = {"theme": "dark", "lang": "en"}
user_prefs = {"theme": "light"}
settings = defaults | user_prefs  # user_prefs wins on conflicts
print(settings)  # {'theme': 'light', 'lang': 'en'}`
              },
              {
                type: "heading",
                level: 2,
                content: "Iterating Over Dictionaries"
              },
              {
                type: "code",
                language: "python",
                filename: "dict_iteration.py",
                code: `student = {"name": "Alice", "age": 20, "major": "CS", "gpa": 3.8}

# Loop through keys (default)
for key in student:
    print(key)  # name, age, major, gpa

# Loop through values
for value in student.values():
    print(value)  # Alice, 20, CS, 3.8

# Loop through key-value pairs (most useful!)
for key, value in student.items():
    print(f"{key}: {value}")

# Check if key exists
if "name" in student:
    print(f"Name is {student['name']}")

# Dictionary comprehension
names = ["Alice", "Bob", "Charlie"]
name_lengths = {name: len(name) for name in names}
print(name_lengths)  # {'Alice': 5, 'Bob': 3, 'Charlie': 7}

# Useful dict methods
print(list(student.keys()))    # ['name', 'age', 'major', 'gpa']
print(list(student.values()))  # ['Alice', 20, 'CS', 3.8]
print(len(student))            # 4`
              },
              {
                type: "heading",
                level: 2,
                content: "Nested Dictionaries"
              },
              {
                type: "code",
                language: "python",
                filename: "nested_dicts.py",
                code: `# Real-world: User database
users = {
    "alice": {
        "name": "Alice Johnson",
        "email": "alice@email.com",
        "scores": [95, 88, 92],
        "active": True
    },
    "bob": {
        "name": "Bob Smith",
        "email": "bob@email.com",
        "scores": [78, 85, 80],
        "active": False
    }
}

# Access nested data
print(users["alice"]["email"])       # alice@email.com
print(users["bob"]["scores"][0])     # 78

# Loop through nested dict
for username, data in users.items():
    avg = sum(data["scores"]) / len(data["scores"])
    status = "✅" if data["active"] else "❌"
    print(f"{status} {data['name']}: avg={avg:.1f}")

# Output:
# ✅ Alice Johnson: avg=91.7
# ❌ Bob Smith: avg=81.0`
              },
              {
                type: "heading",
                level: 2,
                content: "Sets — Unique Collections"
              },
              {
                type: "text",
                content: `A **set** is an unordered collection of **unique** items. Sets automatically remove duplicates and support mathematical set operations (union, intersection, difference).`
              },
              {
                type: "code",
                language: "python",
                filename: "sets.py",
                code: `# Creating sets
colors = {"red", "green", "blue"}
numbers = {1, 2, 3, 3, 3}  # duplicates auto-removed!
print(numbers)  # {1, 2, 3}

# Remove duplicates from a list
names = ["Alice", "Bob", "Alice", "Charlie", "Bob"]
unique = list(set(names))
print(unique)  # ['Alice', 'Bob', 'Charlie']

# Set operations
frontend = {"HTML", "CSS", "JavaScript", "React"}
backend = {"Python", "JavaScript", "SQL", "Django"}

# Union — everything from both sets
all_skills = frontend | backend
print(all_skills)

# Intersection — items in BOTH sets
shared = frontend & backend
print(f"Shared: {shared}")  # {'JavaScript'}

# Difference — in frontend but NOT backend
only_frontend = frontend - backend
print(f"Frontend only: {only_frontend}")

# Symmetric difference — in one but not both
exclusive = frontend ^ backend
print(f"Exclusive: {exclusive}")

# Modifying sets
colors.add("yellow")
colors.discard("red")  # remove (no error if missing)
colors.remove("green")  # remove (KeyError if missing!)
print(colors)`
              },
              {
                type: "tip",
                content: "**Sets are blazingly fast for membership testing!** Checking `x in my_set` is O(1) — constant time regardless of size. Checking `x in my_list` is O(n) — gets slower with bigger lists. If you're doing lots of lookups, convert your list to a set."
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "code",
                language: "python",
                filename: "exercises.py",
                code: `# Exercise 1: Word Counter
# Count how many times each word appears in a sentence
# Input: "the cat sat on the mat the cat"
# Output: {"the": 3, "cat": 2, "sat": 1, "on": 1, "mat": 1}


# Exercise 2: Student Grade Book
# Create a dict of 5 students with lists of test scores
# Calculate and print each student's average
# Find the student with the highest average


# Exercise 3: Common Friends
# Two users each have a set of friends
# Find: mutual friends, unique to each, total combined
# Use set operations!


# Exercise 4: Phonebook App
# Build a simple phonebook using a dictionary
# Menu: Add contact, Search, Delete, List all, Quit
# Use a while loop for the menu
`
              },
              {
                type: "quiz",
                question: "What is the result of: len({1, 2, 2, 3, 3, 3})?",
                options: [
                  { id: "a", text: "6" },
                  { id: "b", text: "3" },
                  { id: "c", text: "1" },
                  { id: "d", text: "Error" }
                ],
                correct: "b",
                explanation: "Sets automatically remove duplicates. {1, 2, 2, 3, 3, 3} becomes {1, 2, 3}, which has 3 unique items."
              },
              {
                type: "checkpoint",
                content: "Build a simple inventory system: use a dictionary where keys are product names and values are dicts with 'price' and 'quantity'. Let users add products, update stock, search, and calculate total inventory value."
              }
            ]
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CHAPTER 4: FUNCTIONS
    // ═══════════════════════════════════════════════════════════════
    {
      id: 4,
      title: "Functions",
      lessons: [
        {
          id: "4-1",
          title: "Defining and Calling Functions",
          completed: false,
          content: {
            description: "Learn to write reusable, modular code with functions — the building blocks of clean, professional Python programs.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll be able to define functions with parameters, return values, default arguments, and variable-length arguments. You'll understand scope and write clean, reusable code.`
              },
              {
                type: "text",
                content: `Imagine you need to calculate the area of a circle in 20 different places in your code. Would you write the formula 20 times? No! You'd write it once in a **function** and call it whenever needed. Functions are the foundation of clean, maintainable code. They let you **write once, use everywhere**.`
              },
              {
                type: "text",
                content: `Think of functions like recipes. A recipe has a name ("Chocolate Cake"), ingredients (inputs), steps (code), and a result (output). Once you write the recipe, anyone can follow it, any number of times, with different ingredients.`
              },
              {
                type: "heading",
                level: 2,
                content: "Your First Function"
              },
              {
                type: "code",
                language: "python",
                filename: "first_function.py",
                code: `# Defining a function
def greet(name):
    """Greet someone by name."""
    print(f"Hello, {name}! Welcome to Python! 🐍")

# Calling the function
greet("Alice")     # Hello, Alice! Welcome to Python! 🐍
greet("Bob")       # Hello, Bob! Welcome to Python! 🐍
greet("Charlie")   # Hello, Charlie! Welcome to Python! 🐍

# Breaking it down:
# def         → keyword that starts a function definition
# greet       → function name (use snake_case)
# (name)      → parameter (input the function receives)
# """..."""    → docstring (documentation — what the function does)
# body        → indented code that runs when function is called`
              },
              {
                type: "heading",
                level: 2,
                content: "Parameters and Arguments"
              },
              {
                type: "code",
                language: "python",
                filename: "parameters.py",
                code: `# Multiple parameters
def introduce(name, age, city):
    print(f"I'm {name}, {age} years old, from {city}.")

introduce("Alice", 25, "New York")

# Default parameter values
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")              # Hello, Alice!
greet("Bob", "Hey")         # Hey, Bob!
greet("Charlie", "Howdy")   # Howdy, Charlie!

# Keyword arguments — specify by name (order doesn't matter!)
def create_profile(name, age, role="Developer"):
    return f"{name} ({age}) - {role}"

# All of these work:
print(create_profile("Alice", 25))
print(create_profile("Bob", 30, role="Designer"))
print(create_profile(age=28, name="Charlie"))  # reordered!`
              },
              {
                type: "warning",
                content: "**Default values must come AFTER non-default values!** `def func(x=1, y)` is a syntax error. Write `def func(y, x=1)` instead. Think of it this way: if you skip an argument, Python needs to know which one you're skipping."
              },
              {
                type: "heading",
                level: 2,
                content: "Return Values"
              },
              {
                type: "code",
                language: "python",
                filename: "return_values.py",
                code: `# Functions that RETURN values (not just print)
def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # 8

# You can return ANY type
def get_stats(numbers):
    return {
        "count": len(numbers),
        "sum": sum(numbers),
        "average": sum(numbers) / len(numbers),
        "min": min(numbers),
        "max": max(numbers)
    }

stats = get_stats([85, 92, 78, 95, 88])
print(f"Average: {stats['average']:.1f}")  # 87.6

# Return multiple values (as a tuple)
def divide(a, b):
    quotient = a // b
    remainder = a % b
    return quotient, remainder

q, r = divide(17, 5)
print(f"17 ÷ 5 = {q} remainder {r}")  # 3 remainder 2

# Early return — exit function immediately
def validate_age(age):
    if age < 0:
        return "Invalid: age can't be negative"
    if age > 150:
        return "Invalid: that's too old!"
    return f"Valid age: {age}"

print(validate_age(25))   # Valid age: 25
print(validate_age(-5))   # Invalid: age can't be negative`
              },
              {
                type: "tip",
                content: "**print() vs return**: print() shows output on screen but doesn't give the value back. return sends the value back to where the function was called. In production code, functions should almost always **return** values, not print them."
              },
              {
                type: "heading",
                level: 2,
                content: "Variable-Length Arguments (*args, **kwargs)"
              },
              {
                type: "code",
                language: "python",
                filename: "args_kwargs.py",
                code: `# *args — accept any number of positional arguments
def total(*args):
    print(f"Received: {args}")  # tuple of all arguments
    return sum(args)

print(total(1, 2, 3))        # 6
print(total(10, 20, 30, 40)) # 100

# **kwargs — accept any number of keyword arguments
def create_user(**kwargs):
    print(f"Received: {kwargs}")  # dictionary of all arguments
    for key, value in kwargs.items():
        print(f"  {key}: {value}")

create_user(name="Alice", age=25, city="NYC")

# Combining everything
def super_function(required, *args, default="hi", **kwargs):
    print(f"Required: {required}")
    print(f"Extra positional: {args}")
    print(f"Default: {default}")
    print(f"Extra keyword: {kwargs}")

super_function("hello", 1, 2, 3, default="bye", x=10, y=20)

# Real-world example: flexible logger
def log(message, *tags, level="INFO"):
    tag_str = ", ".join(tags)
    print(f"[{level}] {message} | Tags: {tag_str}")

log("User logged in", "auth", "user", level="INFO")
log("Disk full!", "system", "critical", level="ERROR")`
              },
              {
                type: "heading",
                level: 2,
                content: "Scope — Where Variables Live"
              },
              {
                type: "code",
                language: "python",
                filename: "scope.py",
                code: `# Variables inside functions are LOCAL
x = 10  # global variable

def my_function():
    x = 99  # this is a DIFFERENT x (local)
    y = 42  # local variable
    print(f"Inside: x = {x}")  # 99

my_function()
print(f"Outside: x = {x}")  # 10 (unchanged!)
# print(y)  # ❌ NameError: y is not defined outside

# To modify a global variable from inside a function:
counter = 0

def increment():
    global counter  # tell Python to use the global one
    counter += 1

increment()
increment()
print(counter)  # 2

# But AVOID global variables when possible!
# Better approach — use parameters and return values:
def increment_better(count):
    return count + 1

counter = 0
counter = increment_better(counter)
counter = increment_better(counter)
print(counter)  # 2`
              },
              {
                type: "warning",
                content: "**Avoid global variables!** They make code hard to debug, test, and understand. If a function needs data, pass it as a parameter. If it produces data, return it. This is a fundamental principle of clean code."
              },
              {
                type: "heading",
                level: 2,
                content: "Docstrings — Documenting Your Functions"
              },
              {
                type: "code",
                language: "python",
                filename: "docstrings.py",
                code: `def calculate_bmi(weight_kg, height_m):
    """
    Calculate Body Mass Index (BMI).
    
    Parameters:
        weight_kg (float): Weight in kilograms
        height_m (float): Height in meters
    
    Returns:
        tuple: (bmi_value, category_string)
    
    Example:
        >>> calculate_bmi(70, 1.75)
        (22.9, 'Normal weight')
    """
    bmi = weight_kg / (height_m ** 2)
    
    if bmi < 18.5:
        category = "Underweight"
    elif bmi < 25:
        category = "Normal weight"
    elif bmi < 30:
        category = "Overweight"
    else:
        category = "Obese"
    
    return round(bmi, 1), category

# Use it
bmi, cat = calculate_bmi(70, 1.75)
print(f"BMI: {bmi} ({cat})")

# Access the docstring
print(calculate_bmi.__doc__)
help(calculate_bmi)`
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "code",
                language: "python",
                filename: "exercises.py",
                code: `# Exercise 1: Temperature Converter
# Write functions celsius_to_fahrenheit() and fahrenheit_to_celsius()
# Formula: F = C * 9/5 + 32


# Exercise 2: Password Validator
# Write is_strong_password(password) that returns True if:
# - At least 8 characters
# - Contains uppercase AND lowercase
# - Contains at least one digit
# - Contains at least one special character (!@#$%^&*)


# Exercise 3: List Analyzer
# Write analyze(numbers) that returns a dict with:
# mean, median, mode, range, std_deviation
# Don't use external libraries!


# Exercise 4: Recursive Factorial
# Write factorial(n) using recursion
# factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
# Handle edge cases (0, negative numbers)
`
              },
              {
                type: "quiz",
                question: "What does a function return if there's no return statement?",
                options: [
                  { id: "a", text: "0" },
                  { id: "b", text: "Empty string" },
                  { id: "c", text: "None" },
                  { id: "d", text: "Error" }
                ],
                correct: "c",
                explanation: "In Python, every function returns something. If there's no explicit return statement (or just 'return' with no value), the function returns None."
              },
              {
                type: "checkpoint",
                content: "Build a mini calculator using functions: write add(), subtract(), multiply(), divide() functions. Then write a main() function that asks users for an operation and two numbers, calls the right function, and shows the result. Include error handling for division by zero!"
              }
            ]
          }
        },
        {
          id: "4-2",
          title: "Advanced Functions",
          completed: false,
          content: {
            description: "Level up with lambda functions, closures, decorators, and functional programming tools that separate beginners from professionals.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll understand lambda functions, higher-order functions (map, filter, reduce), closures, and decorators — powerful tools used in professional Python code.`
              },
              {
                type: "text",
                content: `Now that you can write basic functions, it's time to learn the advanced patterns that professional Python developers use daily. These concepts might seem abstract at first, but they'll make your code dramatically cleaner and more powerful.`
              },
              {
                type: "heading",
                level: 2,
                content: "Lambda Functions (Anonymous Functions)"
              },
              {
                type: "text",
                content: `A **lambda** is a small, anonymous function defined in a single line. It's perfect for simple operations you don't want to give a full name to.`
              },
              {
                type: "code",
                language: "python",
                filename: "lambdas.py",
                code: `# Regular function
def double(x):
    return x * 2

# Same thing as a lambda
double = lambda x: x * 2

print(double(5))   # 10

# Lambdas are most useful when passed to other functions
numbers = [3, 1, 4, 1, 5, 9, 2, 6]

# Sort by absolute value
sorted_nums = sorted(numbers, key=lambda x: abs(x))

# Sort a list of tuples by the second element
students = [("Alice", 92), ("Bob", 85), ("Charlie", 98)]
by_grade = sorted(students, key=lambda s: s[1], reverse=True)
print(by_grade)  # [('Charlie', 98), ('Alice', 92), ('Bob', 85)]

# Sort strings by length
words = ["banana", "pie", "watermelon", "kiwi"]
by_length = sorted(words, key=lambda w: len(w))
print(by_length)  # ['pie', 'kiwi', 'banana', 'watermelon']`
              },
              {
                type: "tip",
                content: "**Use lambdas for simple, one-time operations only.** If your lambda is getting complex or you're reusing it, write a regular function instead. Python's philosophy: readability > cleverness."
              },
              {
                type: "heading",
                level: 2,
                content: "Higher-Order Functions: map(), filter(), reduce()"
              },
              {
                type: "text",
                content: `A **higher-order function** is a function that takes another function as an argument. Python has three classic built-in higher-order functions:`
              },
              {
                type: "code",
                language: "python",
                filename: "higher_order.py",
                code: `# MAP — apply a function to every item
numbers = [1, 2, 3, 4, 5]

doubled = list(map(lambda x: x * 2, numbers))
print(doubled)  # [2, 4, 6, 8, 10]

# Equivalent list comprehension (often preferred):
doubled = [x * 2 for x in numbers]

# FILTER — keep only items that pass a test
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4, 6, 8, 10]

# Equivalent list comprehension:
evens = [x for x in numbers if x % 2 == 0]

# REDUCE — combine all items into a single value
from functools import reduce

numbers = [1, 2, 3, 4, 5]
total = reduce(lambda a, b: a + b, numbers)
print(total)  # 15 (1+2=3, 3+3=6, 6+4=10, 10+5=15)

# Practical: Find the longest word
words = ["Python", "is", "absolutely", "amazing"]
longest = reduce(lambda a, b: a if len(a) > len(b) else b, words)
print(longest)  # "absolutely"

# Chain them together!
# Get sum of squares of even numbers from 1-10
result = reduce(
    lambda a, b: a + b,
    map(lambda x: x ** 2,
        filter(lambda x: x % 2 == 0, range(1, 11)))
)
print(result)  # 220 (4+16+36+64+100)`
              },
              {
                type: "heading",
                level: 2,
                content: "Closures — Functions That Remember"
              },
              {
                type: "code",
                language: "python",
                filename: "closures.py",
                code: `# A closure is a function that remembers its outer scope
def make_multiplier(factor):
    def multiply(number):
        return number * factor  # 'factor' is remembered!
    return multiply

double = make_multiplier(2)
triple = make_multiplier(3)

print(double(5))   # 10
print(triple(5))   # 15
print(double(10))  # 20

# Practical: Counter factory
def make_counter(start=0):
    count = [start]  # use list to allow modification
    
    def increment():
        count[0] += 1
        return count[0]
    
    def get():
        return count[0]
    
    def reset():
        count[0] = start
    
    return increment, get, reset

inc, get, reset = make_counter()
inc()
inc()
inc()
print(get())  # 3
reset()
print(get())  # 0`
              },
              {
                type: "heading",
                level: 2,
                content: "Decorators — Wrapping Functions"
              },
              {
                type: "text",
                content: `A **decorator** is a function that wraps another function to extend its behavior without modifying its code. They're used extensively in Python frameworks like Flask, Django, and FastAPI.`
              },
              {
                type: "code",
                language: "python",
                filename: "decorators.py",
                code: `import time

# A decorator to measure execution time
def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"⏱️ {func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

# Use the @ syntax to apply the decorator
@timer
def slow_function():
    time.sleep(1)
    return "Done!"

result = slow_function()
# ⏱️ slow_function took 1.0012 seconds

# Another decorator: retry on failure
def retry(max_attempts=3):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    print(f"Attempt {attempt} failed: {e}")
                    if attempt == max_attempts:
                        raise
        return wrapper
    return decorator

@retry(max_attempts=3)
def risky_operation():
    import random
    if random.random() < 0.7:
        raise ConnectionError("Network failed!")
    return "Success!"

# Practical: Simple login required decorator
def login_required(func):
    def wrapper(user, *args, **kwargs):
        if not user.get("authenticated"):
            print("❌ Please log in first!")
            return None
        return func(user, *args, **kwargs)
    return wrapper

@login_required
def view_dashboard(user):
    print(f"Welcome to the dashboard, {user['name']}!")

view_dashboard({"name": "Alice", "authenticated": True})   # ✅
view_dashboard({"name": "Bob", "authenticated": False})     # ❌`
              },
              {
                type: "tip",
                content: "Decorators are everywhere in modern Python! Flask uses @app.route(), pytest uses @pytest.fixture, Django uses @login_required. Understanding decorators unlocks the power of these frameworks."
              },
              {
                type: "heading",
                level: 2,
                content: "Generators — Memory-Efficient Iteration"
              },
              {
                type: "code",
                language: "python",
                filename: "generators.py",
                code: `# A generator function uses 'yield' instead of 'return'
# It produces values one at a time, saving memory

def count_up(limit):
    n = 1
    while n <= limit:
        yield n  # pause here, give the value, resume later
        n += 1

# Use it like any iterable
for num in count_up(5):
    print(num, end=" ")  # 1 2 3 4 5
print()

# Why generators? MEMORY EFFICIENCY!
# This creates ALL 1 million numbers in memory:
big_list = [x ** 2 for x in range(1_000_000)]  # ~8MB RAM

# This generates them one at a time (almost no memory):
big_gen = (x ** 2 for x in range(1_000_000))  # ~120 bytes!

# Generator expression (like list comprehension but with ())
squares = (x ** 2 for x in range(10))
print(list(squares))  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Practical: Read huge files line by line
def read_large_file(file_path):
    with open(file_path) as f:
        for line in f:
            yield line.strip()

# Infinite generator
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

fib = fibonacci()
for _ in range(10):
    print(next(fib), end=" ")  # 0 1 1 2 3 5 8 13 21 34`
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "code",
                language: "python",
                filename: "exercises.py",
                code: `# Exercise 1: Custom sort
# Given a list of dictionaries:
# students = [{"name": "Alice", "gpa": 3.8}, ...]
# Sort by GPA (descending) using a lambda with sorted()


# Exercise 2: Write a decorator
# Create @debug that prints function name, arguments,
# and return value every time the function is called


# Exercise 3: Pipeline
# Use map + filter + reduce to:
# Take a list of strings, filter words > 3 letters,
# convert to uppercase, then join with commas


# Exercise 4: Generator
# Write a generator that yields prime numbers infinitely
# Use next() to get the first 20 primes
`
              },
              {
                type: "quiz",
                question: "What does sorted([3,1,2], key=lambda x: -x) return?",
                options: [
                  { id: "a", text: "[1, 2, 3]" },
                  { id: "b", text: "[3, 2, 1]" },
                  { id: "c", text: "[-3, -2, -1]" },
                  { id: "d", text: "Error" }
                ],
                correct: "b",
                explanation: "The key function negates each value, so sorted sorts by -3, -2, -1 (ascending), which puts the original values in descending order: [3, 2, 1]."
              },
              {
                type: "checkpoint",
                content: "Create a @cache decorator that memorizes function results. When the same arguments are passed again, return the cached result instead of recalculating. Test it with a recursive fibonacci function and measure the speed difference!"
              }
            ]
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CHAPTER 5: OBJECT-ORIENTED PROGRAMMING
    // ═══════════════════════════════════════════════════════════════
    {
      id: 5,
      title: "Object-Oriented Programming",
      lessons: [
        {
          id: "5-1",
          title: "Classes and Objects",
          completed: false,
          content: {
            description: "Learn Object-Oriented Programming (OOP) — the paradigm that powers most modern software, from games to enterprise applications.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll understand classes, objects, methods, attributes, constructors, and the self keyword — enabling you to model real-world concepts in code.`
              },
              {
                type: "text",
                content: `So far, you've been writing **procedural code** — functions and variables working together. But as programs grow, you need a better way to organize code. **Object-Oriented Programming (OOP)** lets you bundle related data and behavior into **objects**, just like the real world.`
              },
              {
                type: "text",
                content: `Think of a **class** as a blueprint and an **object** as something built from that blueprint. A "Car" class is the blueprint — it defines that cars have color, speed, and can accelerate. Your actual red Tesla is an **object** (instance) of that class.`
              },
              {
                type: "heading",
                level: 2,
                content: "Your First Class"
              },
              {
                type: "code",
                language: "python",
                filename: "first_class.py",
                code: `class Dog:
    """A simple Dog class."""
    
    # The __init__ method runs when you create a new Dog
    # 'self' refers to the current object being created
    def __init__(self, name, breed, age):
        self.name = name       # instance attribute
        self.breed = breed     # instance attribute
        self.age = age         # instance attribute
        self.energy = 100      # default attribute
    
    # Instance methods — things a Dog can DO
    def bark(self):
        print(f"{self.name}: Woof! 🐕")
    
    def fetch(self, item):
        self.energy -= 10
        print(f"{self.name} fetches the {item}! Energy: {self.energy}")
    
    def describe(self):
        print(f"{self.name} is a {self.age}-year-old {self.breed}")

# Creating objects (instances)
dog1 = Dog("Buddy", "Golden Retriever", 3)
dog2 = Dog("Luna", "Husky", 2)

# Using the objects
dog1.bark()         # Buddy: Woof! 🐕
dog2.bark()         # Luna: Woof! 🐕
dog1.fetch("ball")  # Buddy fetches the ball! Energy: 90
dog1.describe()     # Buddy is a 3-year-old Golden Retriever

# Each object is independent
print(dog1.name)    # Buddy
print(dog2.name)    # Luna`
              },
              {
                type: "warning",
                content: "**Don't forget self!** Every instance method must have `self` as its first parameter. `self` refers to the current object. If you forget it, Python will give you a confusing 'takes 0 positional arguments but 1 was given' error."
              },
              {
                type: "heading",
                level: 2,
                content: "Class vs Instance Attributes"
              },
              {
                type: "code",
                language: "python",
                filename: "attributes.py",
                code: `class Student:
    # CLASS attribute — shared by ALL instances
    school = "Python Academy"
    student_count = 0
    
    def __init__(self, name, grade):
        # INSTANCE attributes — unique to each object
        self.name = name
        self.grade = grade
        Student.student_count += 1  # increment shared counter
    
    def __str__(self):
        return f"{self.name} (Grade: {self.grade}) at {self.school}"

# Create students
s1 = Student("Alice", "A")
s2 = Student("Bob", "B")

print(s1)  # Alice (Grade: A) at Python Academy
print(s2)  # Bob (Grade: B) at Python Academy

# Class attribute is shared
print(Student.student_count)  # 2
print(s1.student_count)       # 2 (same value)

# If you change the class attribute, ALL instances see it
Student.school = "Advanced Python Academy"
print(s1.school)  # Advanced Python Academy
print(s2.school)  # Advanced Python Academy`
              },
              {
                type: "heading",
                level: 2,
                content: "Special (Dunder) Methods"
              },
              {
                type: "text",
                content: `Python has special methods with double underscores (called "dunder" methods) that let you customize how objects behave with built-in operations:`
              },
              {
                type: "code",
                language: "python",
                filename: "dunder_methods.py",
                code: `class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    # String representation (for end users)
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    # Developer representation (for debugging)
    def __repr__(self):
        return f"Vector(x={self.x}, y={self.y})"
    
    # Addition: v1 + v2
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    # Equality: v1 == v2
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    
    # Length: len(v)
    def __len__(self):
        return int((self.x ** 2 + self.y ** 2) ** 0.5)
    
    # Comparison: v1 < v2
    def __lt__(self, other):
        return len(self) < len(other)

v1 = Vector(3, 4)
v2 = Vector(1, 2)
v3 = v1 + v2

print(v1)            # Vector(3, 4)
print(v3)            # Vector(4, 6)
print(v1 == v2)      # False
print(len(v1))       # 5 (3-4-5 triangle!)
print(v1 > v2)       # True`
              },
              {
                type: "heading",
                level: 2,
                content: "A Real-World Class: BankAccount"
              },
              {
                type: "code",
                language: "python",
                filename: "bank_account.py",
                code: `class BankAccount:
    """A realistic bank account class with validation."""
    
    def __init__(self, owner, balance=0):
        self.owner = owner
        self._balance = balance  # underscore = "private" convention
        self._transactions = []
    
    @property
    def balance(self):
        """Read-only balance property."""
        return self._balance
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit amount must be positive!")
        self._balance += amount
        self._transactions.append(f"+\${amount:.2f}")
        print(f"✅ Deposited \${amount:.2f}. Balance: \${self._balance:.2f}")
    
    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive!")
        if amount > self._balance:
            print(f"❌ Insufficient funds! Balance: \${self._balance:.2f}")
            return False
        self._balance -= amount
        self._transactions.append(f"-\${amount:.2f}")
        print(f"✅ Withdrew \${amount:.2f}. Balance: \${self._balance:.2f}")
        return True
    
    def statement(self):
        print(f"\\n--- Statement for {self.owner} ---")
        for t in self._transactions:
            print(f"  {t}")
        print(f"  Current balance: \${self._balance:.2f}")
    
    def __str__(self):
        return f"BankAccount({self.owner}: \${self._balance:.2f})"

# Use it
account = BankAccount("Alice", 1000)
account.deposit(500)      # ✅ Deposited $500.00
account.withdraw(200)     # ✅ Withdrew $200.00
account.withdraw(5000)    # ❌ Insufficient funds!
account.statement()`
              },
              {
                type: "tip",
                content: "The **@property** decorator lets you access methods like attributes. Instead of `account.get_balance()`, you write `account.balance`. It looks cleaner and you can add validation or computation behind the scenes."
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "code",
                language: "python",
                filename: "exercises.py",
                code: `# Exercise 1: Rectangle Class
# Create a Rectangle class with width and height
# Methods: area(), perimeter(), is_square(), __str__()
# Use @property for width/height with validation (must be > 0)


# Exercise 2: Library Book
# Create a Book class with title, author, isbn, available
# Methods: checkout(), return_book(), __str__(), __repr__()
# Track who has the book checked out


# Exercise 3: Shopping Cart
# Create Product class (name, price) and Cart class
# Cart methods: add_item(), remove_item(), total(),
# apply_discount(percent), checkout()


# Exercise 4: Student GradeBook
# Create Student class that tracks grades by subject
# Methods: add_grade(subject, grade), average(subject=None),
# highest_subject(), report_card()
`
              },
              {
                type: "quiz",
                question: "What does 'self' refer to in a Python class method?",
                options: [
                  { id: "a", text: "The class itself" },
                  { id: "b", text: "The current instance (object)" },
                  { id: "c", text: "The parent class" },
                  { id: "d", text: "Nothing — it's just a convention" }
                ],
                correct: "b",
                explanation: "self refers to the current instance of the class. When you call dog1.bark(), Python passes dog1 as 'self' automatically. It's how methods know which object's data to use."
              },
              {
                type: "checkpoint",
                content: "Build a complete TodoList class: it should store tasks (each with title, priority, and done status), let you add/remove/complete tasks, filter by priority, and print a formatted report. Use dunder methods for len() and str()."
              }
            ]
          }
        },
        {
          id: "5-2",
          title: "Inheritance and Polymorphism",
          completed: false,
          content: {
            description: "Master inheritance, polymorphism, and composition — the OOP techniques that enable code reuse and scalable architecture.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll understand single/multiple inheritance, method overriding, super(), abstract classes, and the composition vs inheritance debate.`
              },
              {
                type: "text",
                content: `**Inheritance** is one of the four pillars of OOP. It lets you create a new class based on an existing one, inheriting all its attributes and methods while adding or modifying behavior. Think of it like genetics — children inherit traits from parents but can develop their own unique characteristics.`
              },
              {
                type: "heading",
                level: 2,
                content: "Basic Inheritance"
              },
              {
                type: "code",
                language: "python",
                filename: "inheritance.py",
                code: `# Parent (Base) class
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
        self.energy = 100
    
    def eat(self, food):
        self.energy += 10
        print(f"{self.name} eats {food}. Energy: {self.energy}")
    
    def sleep(self):
        self.energy += 20
        print(f"{self.name} sleeps. Energy: {self.energy}")
    
    def __str__(self):
        return f"{self.name} ({self.species})"

# Child (Derived) class — inherits from Animal
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Dog")  # call parent's __init__
        self.breed = breed
        self.tricks = []
    
    def bark(self):
        self.energy -= 5
        print(f"{self.name}: Woof! 🐕")
    
    def learn_trick(self, trick):
        self.tricks.append(trick)
        print(f"{self.name} learned: {trick}!")
    
    def show_tricks(self):
        if self.tricks:
            print(f"{self.name} can: {', '.join(self.tricks)}")
        else:
            print(f"{self.name} doesn't know any tricks yet.")

class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name, "Cat")
        self.color = color
    
    def purr(self):
        print(f"{self.name}: Purrr... 🐱")
    
    def scratch(self, item):
        print(f"{self.name} scratches the {item}! 😼")

# Using inheritance
buddy = Dog("Buddy", "Golden Retriever")
buddy.eat("kibble")        # inherited from Animal
buddy.bark()               # Dog's own method
buddy.learn_trick("sit")
buddy.learn_trick("shake")
buddy.show_tricks()

whiskers = Cat("Whiskers", "orange")
whiskers.sleep()           # inherited from Animal
whiskers.purr()            # Cat's own method`
              },
              {
                type: "heading",
                level: 2,
                content: "Method Overriding"
              },
              {
                type: "code",
                language: "python",
                filename: "overriding.py",
                code: `class Shape:
    def __init__(self, color="black"):
        self.color = color
    
    def area(self):
        raise NotImplementedError("Subclass must implement area()")
    
    def describe(self):
        print(f"I'm a {self.color} {self.__class__.__name__}")
        print(f"My area is {self.area():.2f}")

class Circle(Shape):
    def __init__(self, radius, color="black"):
        super().__init__(color)
        self.radius = radius
    
    def area(self):
        import math
        return math.pi * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, width, height, color="black"):
        super().__init__(color)
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

class Triangle(Shape):
    def __init__(self, base, height, color="black"):
        super().__init__(color)
        self.base = base
        self.height = height
    
    def area(self):
        return 0.5 * self.base * self.height

# Polymorphism — same method, different behavior!
shapes = [
    Circle(5, "red"),
    Rectangle(4, 6, "blue"),
    Triangle(3, 8, "green")
]

for shape in shapes:
    shape.describe()
    print()

# This is polymorphism: we call .area() on each shape
# and each calculates it differently`
              },
              {
                type: "heading",
                level: 2,
                content: "Abstract Base Classes"
              },
              {
                type: "code",
                language: "python",
                filename: "abstract.py",
                code: `from abc import ABC, abstractmethod

class PaymentProcessor(ABC):
    """Abstract base class — cannot be instantiated directly."""
    
    def __init__(self, name):
        self.name = name
    
    @abstractmethod
    def process_payment(self, amount):
        """Subclasses MUST implement this."""
        pass
    
    @abstractmethod
    def refund(self, amount):
        """Subclasses MUST implement this."""
        pass
    
    def receipt(self, amount, action="Payment"):
        """Shared method — available to all subclasses."""
        print(f"[{self.name}] {action}: \${amount:.2f} ✅")

class CreditCardProcessor(PaymentProcessor):
    def __init__(self, card_number):
        super().__init__("Credit Card")
        self.card_number = card_number
    
    def process_payment(self, amount):
        print(f"Charging \${amount:.2f} to card ...{self.card_number[-4:]}")
        self.receipt(amount)
    
    def refund(self, amount):
        print(f"Refunding \${amount:.2f} to card ...{self.card_number[-4:]}")
        self.receipt(amount, "Refund")

class PayPalProcessor(PaymentProcessor):
    def __init__(self, email):
        super().__init__("PayPal")
        self.email = email
    
    def process_payment(self, amount):
        print(f"Sending \${amount:.2f} request to {self.email}")
        self.receipt(amount)
    
    def refund(self, amount):
        print(f"Refunding \${amount:.2f} to {self.email}")
        self.receipt(amount, "Refund")

# Can't create abstract class directly:
# p = PaymentProcessor("test")  # ❌ TypeError!

# But concrete implementations work:
cc = CreditCardProcessor("4111111111111111")
cc.process_payment(99.99)

pp = PayPalProcessor("alice@email.com")
pp.process_payment(49.99)`
              },
              {
                type: "tip",
                content: "**Abstract classes define the contract.** They guarantee that all subclasses will have certain methods. This is powerful in team settings — you can code against the abstract interface without caring about the specific implementation."
              },
              {
                type: "heading",
                level: 2,
                content: "Composition vs Inheritance"
              },
              {
                type: "text",
                content: `A common design principle is **"Favor composition over inheritance."** Instead of inheriting behavior, you compose objects together. Here's the difference:`
              },
              {
                type: "code",
                language: "python",
                filename: "composition.py",
                code: `# ❌ INHERITANCE approach (can get messy)
# class ElectricCar(Car):      # inherits from Car
# class HybridCar(ElectricCar, GasCar):  # diamond problem!

# ✅ COMPOSITION approach (flexible, clean)
class Engine:
    def __init__(self, type, horsepower):
        self.type = type
        self.hp = horsepower
    
    def start(self):
        print(f"🔧 {self.type} engine ({self.hp}hp) started!")

class Battery:
    def __init__(self, capacity_kwh):
        self.capacity = capacity_kwh
        self.charge = 100
    
    def status(self):
        print(f"🔋 Battery: {self.charge}% ({self.capacity}kWh)")

class GPS:
    def navigate(self, destination):
        print(f"🗺️ Navigating to {destination}...")

class Car:
    def __init__(self, make, model, engine, battery=None, gps=None):
        self.make = make
        self.model = model
        self.engine = engine      # HAS-A engine (composition)
        self.battery = battery    # HAS-A battery (optional)
        self.gps = gps           # HAS-A GPS (optional)
    
    def start(self):
        print(f"Starting {self.make} {self.model}...")
        self.engine.start()
        if self.battery:
            self.battery.status()

# Build different cars by composing components
tesla = Car(
    "Tesla", "Model 3",
    Engine("Electric", 450),
    Battery(75),
    GPS()
)

civic = Car(
    "Honda", "Civic",
    Engine("Gas", 158)
)

tesla.start()
tesla.gps.navigate("San Francisco")

civic.start()`
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "code",
                language: "python",
                filename: "exercises.py",
                code: `# Exercise 1: Employee Hierarchy
# Create: Employee (base), Manager, Developer, Designer
# Each has salary, role-specific attributes, and a describe() method
# Manager has a team list and add_member() method


# Exercise 2: Shape Calculator
# Abstract Shape class with: area(), perimeter(), __str__()
# Implement: Circle, Rectangle, Square, Triangle
# Write a function that takes a list of shapes and prints total area


# Exercise 3: Game Character System (Composition)
# Create: Weapon(name, damage), Armor(name, defense), Spell(name, mana)
# Create: Character(name) that can equip weapons, armor, spells
# Method: attack(), defend(), cast_spell(), stats()


# Exercise 4: Plugin System
# Create abstract Plugin class with: name, activate(), deactivate()
# Implement: LoggingPlugin, CachePlugin, AuthPlugin
# Create PluginManager that loads and manages multiple plugins
`
              },
              {
                type: "quiz",
                question: "What does super().__init__() do?",
                options: [
                  { id: "a", text: "Creates a new parent class" },
                  { id: "b", text: "Calls the parent class's constructor" },
                  { id: "c", text: "Deletes the parent class" },
                  { id: "d", text: "Returns the parent class name" }
                ],
                correct: "b",
                explanation: "super() returns a reference to the parent class, and __init__() calls its constructor. This ensures the parent class is properly initialized before the child adds its own attributes."
              },
              {
                type: "checkpoint",
                content: "Design a Vehicle hierarchy: Vehicle (base) → Car, Truck, Motorcycle. Each has unique attributes and methods. Use composition for Engine, Wheels, and FuelTank. Create a Fleet class that manages multiple vehicles and calculates total fuel costs."
              }
            ]
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CHAPTER 6: FILE HANDLING & MODULES
    // ═══════════════════════════════════════════════════════════════
    {
      id: 6,
      title: "File Handling & Modules",
      lessons: [
        {
          id: "6-1",
          title: "Working with Files",
          completed: false,
          content: {
            description: "Learn to read, write, and manipulate files — connecting your Python programs to the real world of data storage.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll be able to read/write text files, work with CSV and JSON data, handle file paths safely, and use context managers to prevent data loss.`
              },
              {
                type: "text",
                content: `So far, all your data disappears when the program ends. **File handling** lets you persist data — save to disk and load it back later. This is essential for any real application: configuration files, databases, logs, data exports, and more.`
              },
              {
                type: "heading",
                level: 2,
                content: "Reading Files"
              },
              {
                type: "code",
                language: "python",
                filename: "reading_files.py",
                code: `# The SAFE way — using 'with' (context manager)
# Automatically closes the file when done!
with open("example.txt", "r") as file:
    content = file.read()  # read entire file as string
    print(content)

# Read line by line (memory efficient for large files)
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())  # strip() removes trailing newline

# Read all lines into a list
with open("example.txt", "r") as file:
    lines = file.readlines()  # ['line 1\\n', 'line 2\\n', ...]
    print(f"File has {len(lines)} lines")

# Read a specific number of characters
with open("example.txt", "r") as file:
    first_100 = file.read(100)  # first 100 characters`
              },
              {
                type: "warning",
                content: "**Always use the `with` statement for file operations!** Without it, if your code crashes before `file.close()`, the file stays open and you can lose data. `with` automatically closes the file no matter what happens."
              },
              {
                type: "heading",
                level: 2,
                content: "Writing Files"
              },
              {
                type: "code",
                language: "python",
                filename: "writing_files.py",
                code: `# Write mode ("w") — creates new file or OVERWRITES existing!
with open("output.txt", "w") as file:
    file.write("Hello, World!\\n")
    file.write("This is a new file.\\n")

# Append mode ("a") — adds to the END of existing file
with open("output.txt", "a") as file:
    file.write("This line was appended!\\n")

# Write multiple lines at once
lines = ["Line 1\\n", "Line 2\\n", "Line 3\\n"]
with open("output.txt", "w") as file:
    file.writelines(lines)

# Practical: Simple logger
from datetime import datetime

def log(message, filename="app.log"):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open(filename, "a") as f:
        f.write(f"[{timestamp}] {message}\\n")

log("Application started")
log("User logged in")
log("Processing complete")`
              },
              {
                type: "heading",
                level: 2,
                content: "Working with CSV Files"
              },
              {
                type: "code",
                language: "python",
                filename: "csv_files.py",
                code: `import csv

# Writing CSV
students = [
    ["Name", "Age", "Grade"],
    ["Alice", 20, "A"],
    ["Bob", 22, "B+"],
    ["Charlie", 21, "A-"]
]

with open("students.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(students)

# Reading CSV
with open("students.csv", "r") as file:
    reader = csv.reader(file)
    header = next(reader)  # skip header row
    for row in reader:
        name, age, grade = row
        print(f"{name} (age {age}): {grade}")

# Using DictReader (better — access by column name!)
with open("students.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(f"{row['Name']}: {row['Grade']}")

# Writing with DictWriter
data = [
    {"name": "Alice", "score": 95},
    {"name": "Bob", "score": 87}
]

with open("scores.csv", "w", newline="") as file:
    writer = csv.DictWriter(file, fieldnames=["name", "score"])
    writer.writeheader()
    writer.writerows(data)`
              },
              {
                type: "heading",
                level: 2,
                content: "Working with JSON"
              },
              {
                type: "code",
                language: "python",
                filename: "json_files.py",
                code: `import json

# Python dict → JSON file
user_data = {
    "name": "Alice",
    "age": 28,
    "skills": ["Python", "JavaScript", "SQL"],
    "experience": {
        "years": 5,
        "companies": ["Google", "Startup"]
    }
}

# Save to JSON file
with open("user.json", "w") as file:
    json.dump(user_data, file, indent=2)

# Load from JSON file
with open("user.json", "r") as file:
    loaded = json.load(file)
    print(loaded["name"])           # Alice
    print(loaded["skills"])         # ['Python', 'JavaScript', 'SQL']

# Python ↔ JSON conversion (in memory, no file)
json_string = json.dumps(user_data, indent=2)  # dict → string
print(json_string)

parsed = json.loads(json_string)  # string → dict
print(parsed["age"])  # 28

# Practical: Settings manager
def save_settings(settings, path="settings.json"):
    with open(path, "w") as f:
        json.dump(settings, f, indent=2)
    print("⚙️ Settings saved!")

def load_settings(path="settings.json"):
    try:
        with open(path, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        return {}  # return defaults

settings = load_settings()
settings["theme"] = "dark"
settings["font_size"] = 14
save_settings(settings)`
              },
              {
                type: "tip",
                content: "JSON is the universal data format of the web. APIs send JSON, configs use JSON, databases export JSON. Mastering json.load() and json.dump() is essential for any Python developer."
              },
              {
                type: "heading",
                level: 2,
                content: "File Paths with pathlib"
              },
              {
                type: "code",
                language: "python",
                filename: "pathlib_demo.py",
                code: `from pathlib import Path

# Create path objects
home = Path.home()
project = Path("my_project")
data_file = project / "data" / "users.json"

print(data_file)         # my_project/data/users.json
print(data_file.name)    # users.json
print(data_file.stem)    # users
print(data_file.suffix)  # .json
print(data_file.parent)  # my_project/data

# Check if file/directory exists
if data_file.exists():
    print("File found!")
else:
    print("File not found")

# Create directories
Path("output/reports").mkdir(parents=True, exist_ok=True)

# List files in a directory
for file in Path(".").glob("*.py"):
    print(f"Python file: {file}")

# Recursive glob (all subdirectories)
for file in Path(".").rglob("*.json"):
    print(f"JSON file: {file}")

# Read/write with pathlib (Python 3.5+)
Path("hello.txt").write_text("Hello from pathlib!")
content = Path("hello.txt").read_text()
print(content)`
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "code",
                language: "python",
                filename: "exercises.py",
                code: `# Exercise 1: Word Counter
# Read a text file, count words, and find the top 10 most common


# Exercise 2: CSV Analyzer
# Read a CSV of sales data, calculate total revenue,
# average sale, and best-selling product


# Exercise 3: Config Manager
# Build a class that reads/writes app settings from JSON
# Methods: get(key), set(key, value), save(), load()
# Auto-save when a setting changes


# Exercise 4: File Organizer
# Write a script that organizes files in a directory by type
# .py → code/, .txt → docs/, .jpg → images/
# Use pathlib to move files into subdirectories
`
              },
              {
                type: "checkpoint",
                content: "Build a simple diary application: users can add daily entries, view past entries, search by keyword, and export all entries to a JSON file. Store each entry with date, title, and content."
              }
            ]
          }
        },
        {
          id: "6-2",
          title: "Modules and Packages",
          completed: false,
          content: {
            description: "Organize your code like a professional with modules, packages, and virtual environments — essential skills for real-world Python projects.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll understand how to import modules, create your own packages, use pip to install third-party libraries, and manage virtual environments.`
              },
              {
                type: "text",
                content: `As your programs grow, putting everything in one file becomes unmanageable. **Modules** let you split code into separate files. **Packages** let you organize modules into directories. This is how professional Python projects are structured — and how the 400,000+ libraries on PyPI are built.`
              },
              {
                type: "heading",
                level: 2,
                content: "Importing Modules"
              },
              {
                type: "code",
                language: "python",
                filename: "imports.py",
                code: `# Import the entire module
import math
print(math.pi)        # 3.141592653589793
print(math.sqrt(16))  # 4.0

# Import specific items
from math import pi, sqrt, ceil, floor
print(pi)             # 3.141592653589793
print(sqrt(16))       # 4.0

# Import with an alias
import datetime as dt
now = dt.datetime.now()
print(now.strftime("%Y-%m-%d %H:%M"))

# Import everything (generally avoid — pollutes namespace!)
from math import *  # brings ALL names into current scope

# Common standard library imports
import os           # operating system interface
import sys          # system-specific parameters
import json         # JSON handling
import csv          # CSV files
import random       # random numbers
import re           # regular expressions
from pathlib import Path
from collections import Counter, defaultdict
from datetime import datetime, timedelta`
              },
              {
                type: "heading",
                level: 2,
                content: "Python's Standard Library (Batteries Included)"
              },
              {
                type: "text",
                content: `Python's motto is "batteries included" — the standard library has modules for almost anything. Here are the most useful ones:`
              },
              {
                type: "code",
                language: "text",
                filename: "stdlib.txt",
                code: `Module         │ Purpose                      │ Example Use
───────────────┼──────────────────────────────┼──────────────────────────
os             │ File system, env variables   │ os.listdir(), os.environ
sys            │ System info, script args     │ sys.argv, sys.exit()
json           │ JSON encode/decode           │ json.load(), json.dumps()
csv            │ Read/write CSV files         │ csv.reader(), csv.writer()
math           │ Math functions               │ math.sqrt(), math.pi
random         │ Random numbers               │ random.choice(), randint()
datetime       │ Dates and times              │ datetime.now(), timedelta
re             │ Regular expressions          │ re.search(), re.findall()
pathlib        │ File paths (modern)          │ Path("file.txt").read_text()
collections    │ Special containers           │ Counter, defaultdict, deque
itertools      │ Iterator utilities           │ chain, combinations, product
functools      │ Function utilities           │ reduce, lru_cache, partial
urllib         │ HTTP requests (basic)        │ urllib.request.urlopen()
sqlite3        │ SQLite database              │ Built-in SQL database!
unittest       │ Testing framework            │ Unit tests for your code`
              },
              {
                type: "code",
                language: "python",
                filename: "stdlib_examples.py",
                code: `# collections.Counter — count things easily
from collections import Counter
text = "hello world hello python hello"
word_counts = Counter(text.split())
print(word_counts)  # Counter({'hello': 3, 'world': 1, 'python': 1})
print(word_counts.most_common(2))  # [('hello', 3), ('world', 1)]

# collections.defaultdict — dict with default values
from collections import defaultdict
grade_book = defaultdict(list)
grade_book["Alice"].append(95)
grade_book["Alice"].append(88)
grade_book["Bob"].append(72)
print(dict(grade_book))  # {'Alice': [95, 88], 'Bob': [72]}

# random — generate random things
import random
print(random.randint(1, 100))        # random int 1-100
print(random.choice(["a", "b", "c"])) # random pick
random.shuffle([1, 2, 3, 4, 5])     # shuffle in place
print(random.sample(range(100), 5)) # 5 unique random numbers

# datetime — work with dates
from datetime import datetime, timedelta
now = datetime.now()
print(now.strftime("%B %d, %Y"))    # "January 15, 2025"
future = now + timedelta(days=30)
print(f"30 days from now: {future.strftime('%Y-%m-%d')}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Creating Your Own Modules"
              },
              {
                type: "code",
                language: "python",
                filename: "my_utils.py",
                code: `# This file IS a module! Any .py file is a module.
# Save this as: my_utils.py

def greet(name):
    """Greet someone."""
    return f"Hello, {name}!"

def calculate_area(shape, **dimensions):
    """Calculate area of various shapes."""
    if shape == "circle":
        import math
        return math.pi * dimensions["radius"] ** 2
    elif shape == "rectangle":
        return dimensions["width"] * dimensions["height"]
    elif shape == "triangle":
        return 0.5 * dimensions["base"] * dimensions["height"]
    else:
        raise ValueError(f"Unknown shape: {shape}")

# This code only runs when the file is executed directly
# NOT when it's imported as a module
if __name__ == "__main__":
    print(greet("Test"))
    print(calculate_area("circle", radius=5))`
              },
              {
                type: "code",
                language: "python",
                filename: "main.py",
                code: `# Import YOUR module just like any other!
from my_utils import greet, calculate_area

print(greet("Alice"))
area = calculate_area("circle", radius=5)
print(f"Circle area: {area:.2f}")`
              },
              {
                type: "tip",
                content: "**Always use `if __name__ == '__main__':`** at the bottom of modules that can also be run as scripts. This block only executes when you run the file directly (python my_utils.py), not when it's imported. It's essential for reusable code."
              },
              {
                type: "heading",
                level: 2,
                content: "pip — Installing Third-Party Packages"
              },
              {
                type: "code",
                language: "python",
                filename: "pip_guide.py",
                code: `# pip is Python's package manager. Use it in the TERMINAL, not Python!

# Install a package:
# pip install requests

# Install specific version:
# pip install requests==2.31.0

# Install from requirements.txt:
# pip install -r requirements.txt

# See installed packages:
# pip list

# Create requirements.txt (freeze current packages):
# pip freeze > requirements.txt

# Popular packages you should know:
# requests     — HTTP requests (APIs)
# flask        — Web framework (simple)
# django       — Web framework (full-featured)
# pandas       — Data analysis
# numpy        — Numerical computing
# matplotlib   — Data visualization
# pytest       — Testing framework
# black        — Code formatter
# sqlalchemy   — Database ORM`
              },
              {
                type: "heading",
                level: 2,
                content: "Virtual Environments"
              },
              {
                type: "text",
                content: `Different projects need different package versions. **Virtual environments** create isolated Python installations for each project — essential for professional development.`
              },
              {
                type: "code",
                language: "python",
                filename: "venv_guide.py",
                code: `# Create a virtual environment:
# python -m venv myenv

# Activate it:
# Windows:  myenv\\Scripts\\activate
# Mac/Linux: source myenv/bin/activate

# Your prompt changes to show (myenv)
# Now pip install only affects this environment!

# Deactivate when done:
# deactivate

# Professional project setup:
# 1. mkdir my_project && cd my_project
# 2. python -m venv venv
# 3. source venv/bin/activate
# 4. pip install requests flask
# 5. pip freeze > requirements.txt
# 6. Add 'venv/' to .gitignore

# Teammate setup:
# 1. git clone the_project
# 2. python -m venv venv
# 3. source venv/bin/activate
# 4. pip install -r requirements.txt`
              },
              {
                type: "warning",
                content: "**Never commit your venv/ folder to git!** It's huge and system-specific. Add `venv/` to your .gitignore file. The requirements.txt file is what teammates use to recreate the environment."
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "code",
                language: "python",
                filename: "exercises.py",
                code: `# Exercise 1: Build a utility module
# Create math_tools.py with: is_prime(), fibonacci(n),
# gcd(a,b), lcm(a,b). Import and use in main.py


# Exercise 2: Package structure
# Create a package called 'gamelib' with:
# gamelib/__init__.py
# gamelib/player.py (Player class)
# gamelib/enemy.py (Enemy class)
# gamelib/utils.py (helper functions)


# Exercise 3: requirements.txt project
# Create a new venv, install requests and beautifulsoup4
# Write a script that fetches a webpage and counts words
# Save requirements.txt for sharing


# Exercise 4: CLI Tool
# Build a command-line tool using sys.argv
# that reads a CSV file and prints statistics
# Usage: python stats.py data.csv --column age
`
              },
              {
                type: "checkpoint",
                content: "Set up a proper Python project: create a directory, set up a virtual environment, install requests, write a script that fetches data from a public API (like jsonplaceholder.typicode.com/users), and save the results to a JSON file."
              }
            ]
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CHAPTER 7: ERROR HANDLING & TESTING
    // ═══════════════════════════════════════════════════════════════
    {
      id: 7,
      title: "Error Handling & Testing",
      lessons: [
        {
          id: "7-1",
          title: "Exception Handling",
          completed: false,
          content: {
            description: "Write robust, crash-proof Python code with try/except, custom exceptions, and defensive programming techniques.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll understand Python's exception hierarchy, write proper try/except blocks, create custom exceptions, and follow best practices for error handling.`
              },
              {
                type: "text",
                content: `Errors are inevitable. Users enter wrong data, files go missing, networks fail, APIs return unexpected responses. The difference between amateur and professional code is how it handles these errors. **Exception handling** lets you anticipate problems and respond gracefully instead of crashing.`
              },
              {
                type: "heading",
                level: 2,
                content: "Common Python Exceptions"
              },
              {
                type: "code",
                language: "text",
                filename: "exceptions.txt",
                code: `Exception          │ When It Happens                    │ Example
───────────────────┼────────────────────────────────────┼──────────────────────
SyntaxError        │ Invalid Python code                │ if x = 5:
NameError          │ Variable not defined               │ print(undefined_var)
TypeError          │ Wrong type for operation           │ "hello" + 5
ValueError         │ Right type, wrong value            │ int("hello")
IndexError         │ List index out of range            │ my_list[100]
KeyError           │ Dict key doesn't exist             │ my_dict["missing"]
FileNotFoundError  │ File doesn't exist                 │ open("missing.txt")
ZeroDivisionError  │ Division by zero                   │ 10 / 0
AttributeError     │ Object has no such attribute       │ "hello".push()
ImportError        │ Module not found                   │ import nonexistent`
              },
              {
                type: "heading",
                level: 2,
                content: "Try/Except Basics"
              },
              {
                type: "code",
                language: "python",
                filename: "try_except.py",
                code: `# Basic try/except
try:
    number = int(input("Enter a number: "))
    result = 100 / number
    print(f"100 / {number} = {result}")
except ValueError:
    print("❌ That's not a valid number!")
except ZeroDivisionError:
    print("❌ Can't divide by zero!")

# Catch multiple exceptions in one block
try:
    data = {"name": "Alice"}
    print(data["age"])
except (KeyError, TypeError) as e:
    print(f"❌ Error: {e}")

# The full try/except/else/finally structure
try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("❌ File not found!")
    content = None
else:
    # Runs ONLY if no exception occurred
    print(f"✅ Read {len(content)} characters")
finally:
    # Runs ALWAYS — whether exception or not
    print("🔚 Cleanup complete")
    # Good place to close connections, files, etc.`
              },
              {
                type: "warning",
                content: "**Never use bare `except:`** — it catches EVERYTHING including KeyboardInterrupt (Ctrl+C) and SystemExit, making your program impossible to stop. Always specify the exception type: `except ValueError:` or at minimum `except Exception:`"
              },
              {
                type: "heading",
                level: 2,
                content: "Raising Exceptions"
              },
              {
                type: "code",
                language: "python",
                filename: "raising.py",
                code: `# Raise your own exceptions
def set_age(age):
    if not isinstance(age, int):
        raise TypeError(f"Age must be int, got {type(age).__name__}")
    if age < 0 or age > 150:
        raise ValueError(f"Age must be 0-150, got {age}")
    return age

# Using it
try:
    set_age("twenty")
except TypeError as e:
    print(f"Type error: {e}")

try:
    set_age(-5)
except ValueError as e:
    print(f"Value error: {e}")

# Re-raise an exception (let it propagate up)
def process_data(data):
    try:
        result = data["key"]
    except KeyError:
        print("Warning: key missing, logging...")
        raise  # re-raise the same exception`
              },
              {
                type: "heading",
                level: 2,
                content: "Custom Exceptions"
              },
              {
                type: "code",
                language: "python",
                filename: "custom_exceptions.py",
                code: `# Create meaningful exceptions for your application
class AppError(Exception):
    """Base exception for our application."""
    pass

class ValidationError(AppError):
    """Raised when input validation fails."""
    def __init__(self, field, message):
        self.field = field
        self.message = message
        super().__init__(f"{field}: {message}")

class AuthenticationError(AppError):
    """Raised when authentication fails."""
    pass

class InsufficientFundsError(AppError):
    """Raised when account balance is too low."""
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        super().__init__(
            f"Cannot withdraw \${amount:.2f}. Balance: \${balance:.2f}"
        )

# Using custom exceptions
def transfer_money(account, amount):
    if amount <= 0:
        raise ValidationError("amount", "Must be positive")
    if amount > account["balance"]:
        raise InsufficientFundsError(account["balance"], amount)
    account["balance"] -= amount
    return account["balance"]

# Handle them
account = {"name": "Alice", "balance": 100}
try:
    transfer_money(account, 500)
except ValidationError as e:
    print(f"Validation: {e.field} — {e.message}")
except InsufficientFundsError as e:
    print(f"Insufficient funds: need \${e.amount}, have \${e.balance}")
except AppError as e:
    print(f"App error: {e}")`
              },
              {
                type: "tip",
                content: "Create a **hierarchy** of custom exceptions. Have a base AppError, then specific subclasses. This lets callers catch specific errors or broadly catch all app errors with a single `except AppError:`."
              },
              {
                type: "heading",
                level: 2,
                content: "Best Practices"
              },
              {
                type: "code",
                language: "python",
                filename: "best_practices.py",
                code: `# ✅ DO: Catch specific exceptions
try:
    value = int(user_input)
except ValueError:
    print("Invalid number")

# ❌ DON'T: Catch everything (hides bugs!)
# try:
#     value = int(user_input)
# except:
#     print("Something went wrong")

# ✅ DO: Use EAFP (Easier to Ask Forgiveness than Permission)
# Pythonic style — try first, handle errors
try:
    result = my_dict["key"]
except KeyError:
    result = "default"

# ❌ AVOID: LBYL (Look Before You Leap) for simple cases
# if "key" in my_dict:
#     result = my_dict["key"]
# else:
#     result = "default"

# ✅ DO: Keep try blocks small
try:
    value = int(input("Number: "))  # only the risky line
except ValueError:
    value = 0

# Process the value OUTSIDE the try block
result = value * 2
print(result)

# ✅ DO: Log errors in production
import logging
logging.basicConfig(level=logging.ERROR)

try:
    risky_operation()
except Exception as e:
    logging.error(f"Operation failed: {e}", exc_info=True)
    # Show user-friendly message
    print("Something went wrong. Please try again.")`
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "code",
                language: "python",
                filename: "exercises.py",
                code: `# Exercise 1: Safe Division
# Write safe_divide(a, b) that handles:
# - ZeroDivisionError
# - TypeError (non-numeric inputs)
# Return result or error message


# Exercise 2: File Reader with Retry
# Write a function that tries to read a file
# If not found, ask user for correct path (max 3 tries)
# Handle encoding errors too


# Exercise 3: Input Validator
# Write get_valid_int(prompt, min_val, max_val)
# Keep asking until user gives a valid integer in range
# Handle all possible errors gracefully


# Exercise 4: Bank Account with Custom Exceptions
# Create custom exceptions for: InsufficientFunds, InvalidAmount,
# AccountLocked, DailyLimitExceeded
# Build a BankAccount class that uses them
`
              },
              {
                type: "checkpoint",
                content: "Build a robust data parser: write a function that reads a JSON config file, validates all required fields exist and have correct types, and raises clear custom exceptions for each type of error. Include a helpful error message that tells the user exactly what's wrong and how to fix it."
              }
            ]
          }
        },
        {
          id: "7-2",
          title: "Testing Your Code",
          completed: false,
          content: {
            description: "Write professional tests that catch bugs before your users do — using pytest, assertions, and test-driven development.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll be able to write unit tests with pytest, use assertions effectively, understand test-driven development (TDD), and know what makes good tests.`
              },
              {
                type: "text",
                content: `"Code without tests is broken by design." — Jacob Kaplan-Moss (Django creator). Testing isn't optional in professional development. It's how you prove your code works, catch regressions, and refactor with confidence. Companies like Google require tests for every single code change.`
              },
              {
                type: "heading",
                level: 2,
                content: "Why Test?"
              },
              {
                type: "code",
                language: "text",
                filename: "why_test.txt",
                code: `Scenario                │ Without Tests         │ With Tests
────────────────────────┼───────────────────────┼─────────────────────────
Add new feature         │ Hope nothing breaks   │ Run tests, know for sure
Fix a bug               │ Might create new bugs │ Test proves fix works
Refactor code           │ Scary, avoid it       │ Confident improvement
Onboard new developer   │ "Don't touch this"    │ Tests explain behavior
Deploy to production    │ Pray 🙏              │ Deploy with confidence 🚀`
              },
              {
                type: "heading",
                level: 2,
                content: "Getting Started with pytest"
              },
              {
                type: "code",
                language: "python",
                filename: "calculator.py",
                code: `# The code we want to test
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero!")
    return a / b`
              },
              {
                type: "code",
                language: "python",
                filename: "test_calculator.py",
                code: `# Test file — name must start with test_!
# Install pytest: pip install pytest
# Run tests: pytest test_calculator.py -v

from calculator import add, subtract, multiply, divide
import pytest

# Test functions must start with test_
def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0

def test_subtract():
    assert subtract(5, 3) == 2
    assert subtract(1, 1) == 0
    assert subtract(0, 5) == -5

def test_multiply():
    assert multiply(3, 4) == 12
    assert multiply(-2, 3) == -6
    assert multiply(0, 100) == 0

def test_divide():
    assert divide(10, 2) == 5.0
    assert divide(7, 2) == 3.5
    assert divide(-10, 2) == -5.0

def test_divide_by_zero():
    # Test that an exception is raised
    with pytest.raises(ValueError) as exc_info:
        divide(10, 0)
    assert "Cannot divide by zero" in str(exc_info.value)

def test_add_floats():
    result = add(0.1, 0.2)
    assert result == pytest.approx(0.3)  # handles float precision!`
              },
              {
                type: "tip",
                content: "**pytest.approx()** handles floating-point comparison. `0.1 + 0.2 == 0.3` is False in Python (it's 0.30000000000000004), but `0.1 + 0.2 == pytest.approx(0.3)` is True. Always use this for float comparisons in tests."
              },
              {
                type: "heading",
                level: 2,
                content: "Testing Classes"
              },
              {
                type: "code",
                language: "python",
                filename: "test_bank.py",
                code: `import pytest

class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        self.balance += amount
    
    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount

# Fixtures — setup code reused across tests
@pytest.fixture
def account():
    """Create a fresh account for each test."""
    return BankAccount("Alice", 100)

@pytest.fixture
def empty_account():
    return BankAccount("Bob", 0)

# Tests using fixtures
def test_initial_balance(account):
    assert account.balance == 100
    assert account.owner == "Alice"

def test_deposit(account):
    account.deposit(50)
    assert account.balance == 150

def test_withdraw(account):
    account.withdraw(30)
    assert account.balance == 70

def test_withdraw_insufficient(account):
    with pytest.raises(ValueError, match="Insufficient"):
        account.withdraw(200)

def test_deposit_negative(account):
    with pytest.raises(ValueError, match="positive"):
        account.deposit(-50)

# Parametrized tests — test many inputs at once!
@pytest.mark.parametrize("deposit,expected", [
    (50, 150),
    (0.01, 100.01),
    (1000, 1100),
])
def test_various_deposits(account, deposit, expected):
    account.deposit(deposit)
    assert account.balance == pytest.approx(expected)`
              },
              {
                type: "heading",
                level: 2,
                content: "Test-Driven Development (TDD)"
              },
              {
                type: "text",
                content: `TDD flips the process: write tests FIRST, then write code to make them pass. It sounds backwards but produces cleaner, more reliable code.`
              },
              {
                type: "code",
                language: "python",
                filename: "tdd_example.py",
                code: `# Step 1: Write the test FIRST (it will FAIL)
def test_is_palindrome():
    assert is_palindrome("racecar") == True
    assert is_palindrome("hello") == False
    assert is_palindrome("A man a plan a canal Panama") == True
    assert is_palindrome("") == True
    assert is_palindrome("a") == True

# Step 2: Run pytest → FAILS (function doesn't exist yet!)

# Step 3: Write the MINIMUM code to pass
def is_palindrome(text):
    cleaned = text.lower().replace(" ", "")
    return cleaned == cleaned[::-1]

# Step 4: Run pytest → PASSES! ✅

# Step 5: Refactor if needed, tests ensure nothing breaks

# The TDD cycle:
# 🔴 RED    — Write a failing test
# 🟢 GREEN  — Write minimum code to pass
# 🔵 BLUE   — Refactor while tests stay green`
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "code",
                language: "python",
                filename: "exercises.py",
                code: `# Exercise 1: Test a String Utility Module
# Write + test: capitalize_words(), count_vowels(),
# is_email_valid(), truncate(text, max_len)


# Exercise 2: TDD — Shopping Cart
# Write tests first for a ShoppingCart class:
# add_item, remove_item, total, apply_coupon, checkout
# Then implement the class to pass all tests


# Exercise 3: Test Edge Cases
# Write tests for a function that calculates shipping cost
# based on weight, distance, and priority level
# Test: zero weight, negative, international, etc.


# Exercise 4: Integration Test
# Test a function that reads a CSV, processes data,
# and writes results to JSON. Use temporary files.
`
              },
              {
                type: "checkpoint",
                content: "Use TDD to build a password strength checker. Write at least 10 test cases first (weak, medium, strong passwords, edge cases), then implement the function to pass all tests. The checker should return a strength score and feedback."
              }
            ]
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CHAPTER 8: REAL-WORLD PYTHON
    // ═══════════════════════════════════════════════════════════════
    {
      id: 8,
      title: "Real-World Python Projects",
      lessons: [
        {
          id: "8-1",
          title: "Working with APIs",
          completed: false,
          content: {
            description: "Connect your Python programs to the world — fetch data from APIs, handle responses, and build integrations that do real work.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll understand how APIs work, make HTTP requests with the requests library, handle JSON responses, and build a practical API integration.`
              },
              {
                type: "text",
                content: `**APIs (Application Programming Interfaces)** are how programs talk to each other over the internet. When you check the weather on your phone, it's calling a weather API. When you pay with Stripe, it's calling a payment API. Understanding APIs is essential for any modern developer — it's how you connect your code to the world's data and services.`
              },
              {
                type: "heading",
                level: 2,
                content: "HTTP Basics"
              },
              {
                type: "code",
                language: "text",
                filename: "http_methods.txt",
                code: `Method  │ Purpose           │ Example                    │ Has Body?
────────┼───────────────────┼────────────────────────────┼──────────
GET     │ Retrieve data     │ Get user profile           │ No
POST    │ Create new data   │ Create new account         │ Yes
PUT     │ Update (replace)  │ Update entire profile      │ Yes
PATCH   │ Update (partial)  │ Change just the email      │ Yes
DELETE  │ Remove data       │ Delete a post              │ No

Status Codes:
200 OK              — Success!
201 Created         — New resource created
400 Bad Request     — Your request is wrong
401 Unauthorized    — Need to log in
403 Forbidden       — Not allowed
404 Not Found       — Resource doesn't exist
500 Server Error    — Server broke`
              },
              {
                type: "heading",
                level: 2,
                content: "Making Requests with Python"
              },
              {
                type: "code",
                language: "python",
                filename: "api_basics.py",
                code: `import requests

# GET request — fetch data
response = requests.get("https://jsonplaceholder.typicode.com/users/1")

# Check if successful
if response.status_code == 200:
    user = response.json()  # parse JSON response
    print(f"Name: {user['name']}")
    print(f"Email: {user['email']}")
    print(f"City: {user['address']['city']}")
else:
    print(f"Error: {response.status_code}")

# GET with query parameters
response = requests.get(
    "https://jsonplaceholder.typicode.com/posts",
    params={"userId": 1, "_limit": 3}
)
posts = response.json()
for post in posts:
    print(f"📝 {post['title'][:50]}...")

# POST request — send data
new_post = {
    "title": "My Python Post",
    "body": "Learning APIs is fun!",
    "userId": 1
}

response = requests.post(
    "https://jsonplaceholder.typicode.com/posts",
    json=new_post  # automatically sets Content-Type header
)
print(f"Created post ID: {response.json()['id']}")

# Headers (for authentication, etc.)
headers = {
    "Authorization": "Bearer your-api-key-here",
    "Accept": "application/json"
}
response = requests.get("https://api.example.com/data", headers=headers)`
              },
              {
                type: "heading",
                level: 2,
                content: "Error Handling for APIs"
              },
              {
                type: "code",
                language: "python",
                filename: "api_error_handling.py",
                code: `import requests
from requests.exceptions import (
    ConnectionError, Timeout, HTTPError
)

def fetch_data(url, retries=3):
    """Fetch data from an API with retry logic."""
    for attempt in range(1, retries + 1):
        try:
            response = requests.get(url, timeout=10)
            response.raise_for_status()  # raises HTTPError for 4xx/5xx
            return response.json()
        
        except ConnectionError:
            print(f"❌ Connection failed (attempt {attempt}/{retries})")
        except Timeout:
            print(f"⏰ Request timed out (attempt {attempt}/{retries})")
        except HTTPError as e:
            print(f"🚫 HTTP Error: {e.response.status_code}")
            if e.response.status_code == 404:
                return None  # not found, don't retry
            if e.response.status_code >= 500:
                continue  # server error, retry
            return None  # client error, don't retry
    
    print("All retries failed!")
    return None

# Use it
data = fetch_data("https://jsonplaceholder.typicode.com/users")
if data:
    print(f"Got {len(data)} users!")
else:
    print("Failed to fetch data")`
              },
              {
                type: "heading",
                level: 2,
                content: "Building a Weather App"
              },
              {
                type: "code",
                language: "python",
                filename: "weather_app.py",
                code: `import requests
import json

def get_weather(city, api_key="your-key-here"):
    """
    Fetch weather data from OpenWeatherMap API.
    Sign up free at: openweathermap.org/api
    """
    base_url = "https://api.openweathermap.org/data/2.5/weather"
    
    params = {
        "q": city,
        "appid": api_key,
        "units": "imperial"  # fahrenheit
    }
    
    try:
        response = requests.get(base_url, params=params, timeout=10)
        response.raise_for_status()
        data = response.json()
        
        weather = {
            "city": data["name"],
            "country": data["sys"]["country"],
            "temp": data["main"]["temp"],
            "feels_like": data["main"]["feels_like"],
            "humidity": data["main"]["humidity"],
            "description": data["weather"][0]["description"],
            "wind_speed": data["wind"]["speed"]
        }
        
        return weather
    
    except requests.exceptions.HTTPError as e:
        if e.response.status_code == 404:
            return {"error": f"City '{city}' not found"}
        return {"error": f"API error: {e.response.status_code}"}
    except requests.exceptions.RequestException as e:
        return {"error": f"Request failed: {e}"}

def display_weather(weather):
    if "error" in weather:
        print(f"❌ {weather['error']}")
        return
    
    print(f"""
╔══════════════════════════════╗
║  🌤️ Weather for {weather['city']}, {weather['country']}
╠══════════════════════════════╣
║  🌡️  Temp: {weather['temp']}°F
║  🤔 Feels: {weather['feels_like']}°F  
║  💧 Humidity: {weather['humidity']}%
║  💨 Wind: {weather['wind_speed']} mph
║  ☁️  {weather['description'].title()}
╚══════════════════════════════╝
""")

# Main loop
if __name__ == "__main__":
    while True:
        city = input("Enter city (or 'quit'): ")
        if city.lower() == 'quit':
            break
        weather = get_weather(city)
        display_weather(weather)`
              },
              {
                type: "tip",
                content: "Most APIs require an **API key** for authentication. Store keys in environment variables (`os.environ['API_KEY']`), NEVER hardcode them in your source code or commit them to git!"
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "code",
                language: "python",
                filename: "exercises.py",
                code: `# Exercise 1: GitHub Profile Viewer
# Use the GitHub API (api.github.com/users/{username})
# Fetch and display: name, bio, repos, followers


# Exercise 2: Random Joke App
# Use https://official-joke-api.appspot.com/random_joke
# Fetch and display jokes in a loop


# Exercise 3: Currency Converter
# Use a free exchange rate API
# Convert between currencies with user input


# Exercise 4: API Data Dashboard
# Fetch data from multiple APIs (users, posts, comments)
# Process and display statistics:
# - Most active user (by post count)
# - Average comments per post
# - Users with no posts
`
              },
              {
                type: "checkpoint",
                content: "Build a complete API-powered app: create a movie search tool using the OMDb API (omdbapi.com). Users search by title, see results with ratings and plot summaries, and can save favorites to a JSON file."
              }
            ]
          }
        },
        {
          id: "8-2",
          title: "Your Python Journey Continues",
          completed: false,
          content: {
            description: "Celebrate how far you've come, and get a roadmap for where to go next — web development, data science, automation, and beyond.",
            sections: [
              {
                type: "text",
                content: `Congratulations! 🎉 You've completed the Master Python Programming course. Let's recap everything you've learned and chart your path forward.`
              },
              {
                type: "heading",
                level: 2,
                content: "What You've Mastered"
              },
              {
                type: "code",
                language: "text",
                filename: "your_skills.txt",
                code: `Chapter │ What You Learned                         │ Key Skills
────────┼─────────────────────────────────────────┼────────────────────────
Ch 1    │ Python Basics                           │ Variables, types, I/O
Ch 2    │ Control Flow                            │ if/else, loops, logic
Ch 3    │ Data Structures                         │ Lists, dicts, sets
Ch 4    │ Functions                               │ Params, lambdas, decorators
Ch 5    │ Object-Oriented Programming             │ Classes, inheritance, OOP
Ch 6    │ Files & Modules                         │ I/O, JSON, packages, pip
Ch 7    │ Error Handling & Testing                │ Try/except, pytest, TDD
Ch 8    │ Real-World Python                       │ APIs, HTTP, integrations`
              },
              {
                type: "heading",
                level: 2,
                content: "Where to Go Next"
              },
              {
                type: "text",
                content: `Python opens doors to many specializations. Here's a roadmap based on your interests:`
              },
              {
                type: "code",
                language: "text",
                filename: "roadmap.txt",
                code: `🌐 WEB DEVELOPMENT
   └── Learn Flask (simple) or Django (full-featured)
   └── Build REST APIs with FastAPI
   └── Frontend: HTML/CSS/JavaScript + React
   └── Deploy on Heroku, AWS, or Vercel

📊 DATA SCIENCE
   └── NumPy (numerical computing)
   └── Pandas (data manipulation)
   └── Matplotlib & Seaborn (visualization)
   └── Jupyter Notebooks (interactive analysis)
   └── SQL (database queries)

🤖 MACHINE LEARNING / AI
   └── Scikit-learn (classical ML)
   └── TensorFlow or PyTorch (deep learning)
   └── Natural Language Processing (NLP)
   └── Computer Vision (OpenCV)

🔧 AUTOMATION & DEVOPS
   └── Selenium (web automation)
   └── Beautiful Soup (web scraping)
   └── Paramiko (SSH automation)
   └── Ansible (infrastructure automation)

🎮 GAME DEVELOPMENT
   └── Pygame (2D games)
   └── Arcade (modern 2D framework)

📱 MOBILE DEVELOPMENT
   └── Kivy (cross-platform apps)
   └── BeeWare (native apps)`
              },
              {
                type: "heading",
                level: 2,
                content: "Final Capstone Project Ideas"
              },
              {
                type: "list",
                items: [
                  "**Personal Finance Tracker** — Track expenses, visualize spending with charts, export to CSV",
                  "**Blog API** — Build a REST API with Flask, SQLite database, user authentication",
                  "**Web Scraper** — Scrape product prices and get alerts when they drop",
                  "**Chat Application** — Real-time chat using WebSockets",
                  "**Portfolio Website Generator** — Python script that generates a static portfolio site from YAML config",
                  "**Habit Tracker** — CLI tool that tracks daily habits with streaks and statistics",
                  "**File Organizer** — Automatically organize downloads folder by file type and date"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Pro Tips for Your Journey"
              },
              {
                type: "list",
                items: [
                  "**Build projects, not just tutorials** — Apply what you learn to real problems you care about",
                  "**Read other people's code** — GitHub is full of excellent Python projects to learn from",
                  "**Contribute to open source** — Start small: fix typos in docs, then tackle real issues",
                  "**Write clean code** — Follow PEP 8, use meaningful names, write docstrings",
                  "**Test everything** — Professional code has tests. Start the habit now.",
                  "**Join the community** — Python Discord, Reddit r/python, local meetups",
                  "**Never stop learning** — Python evolves. Stay current with new features and best practices."
                ]
              },
              {
                type: "tip",
                content: "The best way to learn is to **build something you actually want to use**. If you need a budget tracker, build one. If you're bored, build a game. Passion projects teach more than any course."
              },
              {
                type: "text",
                content: `You're no longer a Python beginner. You have the tools, knowledge, and skills to build real software. The best programmers never stop learning — they just keep building, one project at a time. Welcome to the Python community! 🐍🚀`
              },
              {
                type: "checkpoint",
                content: "Pick one of the capstone project ideas (or invent your own!) and build it. Use everything you've learned: classes, functions, file I/O, error handling, API calls, and testing. This is where your real Python journey begins!"
              }
            ]
          }
        }
      ]
    }
  ]
};