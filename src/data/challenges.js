export const challenges = [
  // ============ EASY ============
  {
    id: 'sum-two',
    title: 'Sum of Two Numbers',
    difficulty: 'easy',
    tags: ['basics', 'math'],
    timeEstimate: '2 min',
    xpReward: 50,
    description: 'Write a function `add(a, b)` that returns the sum of two numbers.',
    starterCode: `def add(a, b):
    # Your code here
    pass

# Test your function
print(add(2, 3))  # Should print: 5`,
    testCases: [
      { input: 'add(2, 3)', expected: '5' },
      { input: 'add(-1, 1)', expected: '0' },
      { input: 'add(0, 0)', expected: '0' },
      { input: 'add(100, 200)', expected: '300' },
    ],
    hints: ['Use the + operator', 'Remember to return the result, not print it!'],
    solution: `def add(a, b):
    return a + b`,
  },
  {
    id: 'hello-name',
    title: 'Say Hello',
    difficulty: 'easy',
    tags: ['strings', 'basics'],
    timeEstimate: '2 min',
    xpReward: 50,
    description: 'Write a function `greet(name)` that returns "Hello, {name}!"',
    starterCode: `def greet(name):
    # Your code here
    pass

print(greet("World"))  # Should print: Hello, World!`,
    testCases: [
      { input: 'greet("World")', expected: '"Hello, World!"' },
      { input: 'greet("Python")', expected: '"Hello, Python!"' },
      { input: 'greet("Rathish")', expected: '"Hello, Rathish!"' },
    ],
    hints: ['Use f-strings: f"Hello, {name}!"', 'Or use string concatenation: "Hello, " + name + "!"'],
    solution: `def greet(name):
    return f"Hello, {name}!"`,
  },
  {
    id: 'is-even',
    title: 'Even or Odd',
    difficulty: 'easy',
    tags: ['math', 'conditionals'],
    timeEstimate: '3 min',
    xpReward: 50,
    description: 'Write a function `is_even(n)` that returns True if n is even, False otherwise.',
    starterCode: `def is_even(n):
    # Your code here
    pass

print(is_even(4))  # True
print(is_even(7))  # False`,
    testCases: [
      { input: 'is_even(4)', expected: 'True' },
      { input: 'is_even(7)', expected: 'False' },
      { input: 'is_even(0)', expected: 'True' },
      { input: 'is_even(-2)', expected: 'True' },
    ],
    hints: ['Use the modulo operator: n % 2', 'If n % 2 equals 0, the number is even'],
    solution: `def is_even(n):
    return n % 2 == 0`,
  },
  {
    id: 'max-two',
    title: 'Maximum of Two',
    difficulty: 'easy',
    tags: ['conditionals', 'comparison'],
    timeEstimate: '3 min',
    xpReward: 50,
    description: 'Write a function `max_of_two(a, b)` that returns the larger number.',
    starterCode: `def max_of_two(a, b):
    # Your code here
    pass

print(max_of_two(5, 3))  # 5`,
    testCases: [
      { input: 'max_of_two(5, 3)', expected: '5' },
      { input: 'max_of_two(1, 9)', expected: '9' },
      { input: 'max_of_two(7, 7)', expected: '7' },
      { input: 'max_of_two(-3, -1)', expected: '-1' },
    ],
    hints: ['Use if/else to compare', 'Or use a ternary: a if a > b else b'],
    solution: `def max_of_two(a, b):
    return a if a > b else b`,
  },
  {
    id: 'str-length',
    title: 'String Length',
    difficulty: 'easy',
    tags: ['strings', 'basics'],
    timeEstimate: '2 min',
    xpReward: 50,
    description: 'Write a function `str_length(s)` that returns the length of a string.',
    starterCode: `def str_length(s):
    # Your code here
    pass

print(str_length("Python"))  # 6`,
    testCases: [
      { input: 'str_length("Python")', expected: '6' },
      { input: 'str_length("")', expected: '0' },
      { input: 'str_length("Hi")', expected: '2' },
      { input: 'str_length("Hello World")', expected: '11' },
    ],
    hints: ['Python has a built-in function len()', 'len() works on strings, lists, and more'],
    solution: `def str_length(s):
    return len(s)`,
  },

  // ============ MEDIUM ============
  {
    id: 'sum-list',
    title: 'Sum of List',
    difficulty: 'medium',
    tags: ['lists', 'loops'],
    timeEstimate: '5 min',
    xpReward: 75,
    description: 'Write a function `sum_list(numbers)` that returns the sum of all numbers in a list.',
    starterCode: `def sum_list(numbers):
    # Your code here
    pass

print(sum_list([1, 2, 3, 4, 5]))  # 15`,
    testCases: [
      { input: 'sum_list([1, 2, 3, 4, 5])', expected: '15' },
      { input: 'sum_list([10, -5, 3])', expected: '8' },
      { input: 'sum_list([])', expected: '0' },
      { input: 'sum_list([100])', expected: '100' },
    ],
    hints: ['You can use a for loop to iterate and add', 'Or use the built-in sum() function'],
    solution: `def sum_list(numbers):
    return sum(numbers)`,
  },
  {
    id: 'reverse-str',
    title: 'Reverse String',
    difficulty: 'medium',
    tags: ['strings', 'slicing'],
    timeEstimate: '5 min',
    xpReward: 75,
    description: 'Write a function `reverse(s)` that returns the string reversed.',
    starterCode: `def reverse(s):
    # Your code here
    pass

print(reverse("hello"))  # olleh`,
    testCases: [
      { input: 'reverse("hello")', expected: '"olleh"' },
      { input: 'reverse("Python")', expected: '"nohtyP"' },
      { input: 'reverse("")', expected: '""' },
      { input: 'reverse("a")', expected: '"a"' },
    ],
    hints: ['Python slicing can reverse: s[::-1]', 'The -1 step goes backwards through the string'],
    solution: `def reverse(s):
    return s[::-1]`,
  },
  {
    id: 'count-vowels',
    title: 'Count Vowels',
    difficulty: 'medium',
    tags: ['strings', 'loops'],
    timeEstimate: '5 min',
    xpReward: 75,
    description: 'Write a function `count_vowels(s)` that counts the vowels (a, e, i, o, u) in a string.',
    starterCode: `def count_vowels(s):
    # Your code here
    pass

print(count_vowels("hello"))  # 2`,
    testCases: [
      { input: 'count_vowels("hello")', expected: '2' },
      { input: 'count_vowels("PYTHON")', expected: '1' },
      { input: 'count_vowels("xyz")', expected: '0' },
      { input: 'count_vowels("aeiou")', expected: '5' },
    ],
    hints: ['Convert to lowercase first: s.lower()', 'Check if each character is in "aeiou"'],
    solution: `def count_vowels(s):
    return sum(1 for c in s.lower() if c in "aeiou")`,
  },
  {
    id: 'find-max',
    title: 'Find Maximum (No Built-in)',
    difficulty: 'medium',
    tags: ['lists', 'loops', 'algorithm'],
    timeEstimate: '7 min',
    xpReward: 100,
    description: 'Write `find_max(numbers)` that returns the largest number. Do NOT use the max() function!',
    starterCode: `def find_max(numbers):
    # Don't use max()!
    pass

print(find_max([3, 1, 4, 1, 5, 9]))  # 9`,
    testCases: [
      { input: 'find_max([3, 1, 4, 1, 5, 9])', expected: '9' },
      { input: 'find_max([-1, -5, -2])', expected: '-1' },
      { input: 'find_max([42])', expected: '42' },
      { input: 'find_max([1, 2, 3, 2, 1])', expected: '3' },
    ],
    hints: ['Start by assuming the first element is the max', 'Loop through and update if you find something larger'],
    solution: `def find_max(numbers):
    m = numbers[0]
    for n in numbers[1:]:
        if n > m:
            m = n
    return m`,
  },
  {
    id: 'fizzbuzz',
    title: 'FizzBuzz',
    difficulty: 'medium',
    tags: ['conditionals', 'classic'],
    timeEstimate: '7 min',
    xpReward: 100,
    description: 'Return "Fizz" if n is divisible by 3, "Buzz" if divisible by 5, "FizzBuzz" if both, otherwise return n as a string.',
    starterCode: `def fizzbuzz(n):
    # Your code here
    pass

print(fizzbuzz(15))  # FizzBuzz
print(fizzbuzz(9))   # Fizz
print(fizzbuzz(10))  # Buzz
print(fizzbuzz(7))   # 7`,
    testCases: [
      { input: 'fizzbuzz(15)', expected: '"FizzBuzz"' },
      { input: 'fizzbuzz(9)', expected: '"Fizz"' },
      { input: 'fizzbuzz(10)', expected: '"Buzz"' },
      { input: 'fizzbuzz(7)', expected: '"7"' },
    ],
    hints: ['Check divisible by both first (n % 15 == 0)', 'Return str(n) for numbers that are not Fizz or Buzz'],
    solution: `def fizzbuzz(n):
    if n % 15 == 0: return "FizzBuzz"
    if n % 3 == 0: return "Fizz"
    if n % 5 == 0: return "Buzz"
    return str(n)`,
  },

  // ============ HARD ============
  {
    id: 'fibonacci',
    title: 'Fibonacci Number',
    difficulty: 'hard',
    tags: ['math', 'recursion', 'classic'],
    timeEstimate: '10 min',
    xpReward: 150,
    description: 'Return the nth Fibonacci number. The sequence is: 0, 1, 1, 2, 3, 5, 8, 13...',
    starterCode: `def fib(n):
    # Your code here
    pass

print(fib(0))   # 0
print(fib(1))   # 1
print(fib(6))   # 8
print(fib(10))  # 55`,
    testCases: [
      { input: 'fib(0)', expected: '0' },
      { input: 'fib(1)', expected: '1' },
      { input: 'fib(6)', expected: '8' },
      { input: 'fib(10)', expected: '55' },
    ],
    hints: ['Base cases: fib(0) = 0, fib(1) = 1', 'Use iteration with two variables a and b'],
    solution: `def fib(n):
    if n <= 1: return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b`,
  },
  {
    id: 'palindrome',
    title: 'Palindrome Check',
    difficulty: 'hard',
    tags: ['strings', 'algorithm'],
    timeEstimate: '10 min',
    xpReward: 150,
    description: 'Return True if the string is a palindrome (reads same forwards and backwards). Ignore spaces and case.',
    starterCode: `def is_palindrome(s):
    # Your code here
    pass

print(is_palindrome("racecar"))  # True
print(is_palindrome("hello"))    # False`,
    testCases: [
      { input: 'is_palindrome("racecar")', expected: 'True' },
      { input: 'is_palindrome("hello")', expected: 'False' },
      { input: 'is_palindrome("A man a plan a canal Panama")', expected: 'True' },
      { input: 'is_palindrome("")', expected: 'True' },
    ],
    hints: ['Clean the string: remove spaces and convert to lowercase', 'Compare the cleaned string to its reverse'],
    solution: `def is_palindrome(s):
    clean = s.lower().replace(" ", "")
    return clean == clean[::-1]`,
  },
  {
    id: 'prime',
    title: 'Prime Number Check',
    difficulty: 'hard',
    tags: ['math', 'algorithm'],
    timeEstimate: '10 min',
    xpReward: 150,
    description: 'Return True if n is a prime number (only divisible by 1 and itself).',
    starterCode: `def is_prime(n):
    # Your code here
    pass

print(is_prime(7))   # True
print(is_prime(10))  # False
print(is_prime(2))   # True`,
    testCases: [
      { input: 'is_prime(7)', expected: 'True' },
      { input: 'is_prime(10)', expected: 'False' },
      { input: 'is_prime(2)', expected: 'True' },
      { input: 'is_prime(1)', expected: 'False' },
    ],
    hints: ['Numbers less than 2 are not prime', 'Only check divisibility up to sqrt(n)'],
    solution: `def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0: return False
    return True`,
  },
  {
    id: 'flatten',
    title: 'Flatten Nested List',
    difficulty: 'hard',
    tags: ['lists', 'recursion'],
    timeEstimate: '12 min',
    xpReward: 200,
    description: 'Flatten a nested list into a single flat list. Handle any depth of nesting.',
    starterCode: `def flatten(lst):
    # Your code here
    pass

print(flatten([1, [2, 3], [4, [5, 6]]]))  # [1, 2, 3, 4, 5, 6]`,
    testCases: [
      { input: 'flatten([1, [2, 3], [4, [5, 6]]])', expected: '[1, 2, 3, 4, 5, 6]' },
      { input: 'flatten([[1, 2], [3, 4]])', expected: '[1, 2, 3, 4]' },
      { input: 'flatten([1, 2, 3])', expected: '[1, 2, 3]' },
      { input: 'flatten([[[[1]]]])', expected: '[1]' },
    ],
    hints: ['Use recursion: if item is a list, flatten it', 'Check type with isinstance(item, list)'],
    solution: `def flatten(lst):
    result = []
    for item in lst:
        if isinstance(item, list):
            result.extend(flatten(item))
        else:
            result.append(item)
    return result`,
  },
  {
    id: 'anagram',
    title: 'Anagram Check',
    difficulty: 'hard',
    tags: ['strings', 'algorithm'],
    timeEstimate: '10 min',
    xpReward: 150,
    description: 'Return True if s1 and s2 are anagrams (contain the same letters in different order). Ignore spaces and case.',
    starterCode: `def is_anagram(s1, s2):
    # Your code here
    pass

print(is_anagram("listen", "silent"))  # True
print(is_anagram("hello", "world"))    # False`,
    testCases: [
      { input: 'is_anagram("listen", "silent")', expected: 'True' },
      { input: 'is_anagram("hello", "world")', expected: 'False' },
      { input: 'is_anagram("Dormitory", "dirty room")', expected: 'True' },
      { input: 'is_anagram("a", "a")', expected: 'True' },
    ],
    hints: ['Clean both strings: lowercase and remove spaces', 'Sort the characters and compare'],
    solution: `def is_anagram(s1, s2):
    c1 = s1.lower().replace(" ", "")
    c2 = s2.lower().replace(" ", "")
    return sorted(c1) == sorted(c2)`,
  },
]

export function getChallenge(id) {
  return challenges.find(c => c.id === id) || null
}

export function getChallengesByDifficulty(difficulty) {
  return challenges.filter(c => c.difficulty === difficulty)
}
