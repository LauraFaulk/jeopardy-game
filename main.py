# This dictionary stores our categories, values, and questions
questions = {
    "Python": {
        "100": {"q": "What keyword is used to define a function?", "a": "def"},
        "200": {"q": "What is the file extension for Python files?", "a": ".py"}
    },
    "Git": {
        "100": {"q": "Which command saves changes locally?", "a": "git commit"},
        "200": {"q": "Which command sends code to GitHub?", "a": "git push"}
    }
}

score = 0# 1. Setup the data
# We use a dictionary: Category -> Points -> {Question and Answer}
board = {
    "Science": {
        "100": {"q": "What planet is known as the Red Planet?", "a": "mars"},
        "200": {"q": "What is the chemical symbol for Water?", "a": "h2o"}
    },
    "Coding": {
        "100": {"q": "What language are you using right now?", "a": "python"},
        "200": {"q": "What does 'GUI' stand for?", "a": "graphical user interface"}
    }
}

score = 0

print("--- WELCOME TO GITHUB JEOPARDY ---")
print("Type 'quit' at any time to exit.")

while True:
    print(f"\nYour Current Score: ${score}")
    print("Categories: Python, Git")
    
    # 1. Get User Input
    category = input("Choose a category: ").capitalize()
    if category == "Quit":
        break
        
    val = input("Choose a value (100, 200): ")
    if val == "quit":
        break

    # 2. Check if the choice is valid
    if category in questions and val in questions[category]:
        data = questions[category][val]
        
        # 3. Ask the question
        attempt = input(f"QUESTION: {data['q']}\nYour Answer: ").lower()

        # 4. Check the answer
        if attempt == data['a'].lower():
            print("CORRECT!")
            score += int(val)
        else:
            print(f"WRONG! The answer was: {data['a']}")
    else:
        print("Invalid choice. Please pick from the available categories and values.")
