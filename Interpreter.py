import random

variables = {}
sequences = {}
events = {}

def execute_line(line):
    if line.startswith(">> echo"):
        msg = line.replace(">> echo ", "").strip('" ')
        print(msg.format(**variables))
    elif line.startswith(">> let"):
        parts = line.replace(">> let ", "").split(" be ")
        var, expr = parts[0].strip(), parts[1].strip()
        if expr.startswith("random("):
            args = expr[7:-1].split(",")
            variables[var] = random.randint(int(args[0]), int(args[1]))
        else:
            variables[var] = expr
    elif line.startswith(">> ask"):
        question = line.split('"')[1]
        target = line.split("into")[1].strip()
        variables[target] = input(f"{question}: ")
    elif line.startswith(">> trigger"):
        event = line.split(" ")[2]
        if event in events:
            for cmd in events[event]:
                execute_line(cmd)

def define_sequence(name, lines):
    sequences[name] = lines

def define_event(name, lines):
    events[name] = lines

# Mock REPL/loader
define_sequence("scentPulse", [
    ">> let intensity be random(1, 10)",
    '>> echo "{drone} emits pulse at intensity {intensity}"'
])
define_event("emergency-breakout", [
    '>> echo "ALERT! Perimeter breach detected!"',
    '>> echo "Engaging response protocols..."'
])

# Execute demo
variables["drone"] = "VelvetEmitter-XZ"
for line in sequences["scentPulse"]:
    execute_line(line)
execute_line(">> trigger emergency-breakout")
