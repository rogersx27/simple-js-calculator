const operationCounters = {
  add: 0,
  subtract: 0,
  multiply: 0,
  divide: 0,
  power: 0,
  squareRoot: 0,
  baseLog: 0,
  sin: 0,
  cos: 0,
  tan: 0,
  factorial: 0,
  areaOfSquare: 0,
  areaOfRectangle: 0,
  areaOfTriangle: 0,
  areaOfCircle: 0,
}

cheer()

setTimeout(menu, 3000) // <- start the "console-program" after 3 seconds :D

function cheer() {
  console.log("\n".repeat(10))
  console.log(",--.   ,--.      ,--.")
  console.log("|  |   |  |,---. |  |,---. ,---. ,--,--,--.,---.  ")
  console.log("|  |.'.|  | .-. :|  | .--|'| . | |        | .-. ")
  console.log("|   ,'.   |   --.|  | `--.'' . | ' '|  |  |   |  --. ")
  console.log("'--'   '--'`----'`--'`---' `---' `--`--`--'`----' ")

  console.log("This is a calculator with a three basic functionalities.")
}

function menu() {
  clearAndSpace()
  console.log("--------------------------")
  console.log("| Select the calculator you want to use:")
  console.log("| ---> 1. Basic Calculator")
  console.log("| ---> 2. Scientific Calculator")
  console.log("| ---> 3. Special Calculator")
  console.log("| ---> 4. View log of operations performed")
  console.log("--------------------------")

  let value = prompt("Enter your choice: ")
  switch (value) {
    case "1":
      basicCalculator()
      break
    case "2":
      scientificCalculator()
      break
    case "3":
      specialCalculator()
      break
    case "4":
      printLogs()
      console.log("Exiting...")
      break
    default:
      console.log("Invalid choice")
      if (confirm("Do you want to continue?")) {
        menu()
      }
      console.log("Exiting...")
      return
  }
}

function printLogs() {
  console.log("Operation Counters:")
  for (const operation in operationCounters) {
    logOperation(operation, operationCounters[operation])
  }
}

function basicCalculator() {
  clearAndSpace()

  let looping = true
  while (looping) {
    console.log("--------------------------")
    console.log("| Avalible operations to perform:")
    console.log("| ---> 1. Addition")
    console.log("| ---> 2. Subtraction")
    console.log("| ---> 3. Multiplication")
    console.log("| ---> 4. Division")
    console.log("| ---> 0. Exit")
    console.log("| (NOTE: You can clear the screen by typing 'clear' or 'cls' and press enter.)")
    console.log("--------------------------")
    let value = prompt("Enter the operation you want to use: ")
    switch (value) {
      case "1":
        var [a, b] = numbers()
        console.log(`Result: ${add(a, b)}`)
        break
      case "2":
        var [a, b] = numbers()
        console.log(`Result: ${subtract(a, b)}`)
        break
      case "3":
        var [a, b] = numbers()
        console.log(`Result: ${multiply(a, b)}`)
        break
      case "4":
        var [a, b] = numbers()
        console.log(`Result: ${divide(a, b)}`)
        break
      case "0":
        looping = false
        menu()
        break
      case "clear":
        clearAndSpace()
        break
      case "cls":
        clearAndSpace()
        break
      default:
        looping = validateStop()
        if (!looping) {
          menu()
        }
    }
  }
}

function scientificCalculator() {
  clearAndSpace()

  let looping = true
  while (looping) {
    console.log("--------------------------")
    console.log("| Avalible operations to perform:")
    console.log("| ---> 1. Power")
    console.log("| ---> 2. Square Root")
    console.log("| ---> 3. Base Log")
    console.log("| ---> 4. Sin")
    console.log("| ---> 5. Cos")
    console.log("| ---> 6. Tan")
    console.log("| ---> 7. Factorial")
    console.log("| ---> 0. Exit")
    console.log("| (NOTE: You can clear the screen by typing 'clear' or 'cls' and press enter.)")
    console.log("--------------------------")
    let value = prompt("Enter the operation you want to use:  ")
    switch (value) {
      case "1":
        var [a, b] = numbers()
        console.log(`Result: ${power(a, b)}`)
        break
      case "2":
        var a = numbers((count = 1))
        console.log(`Result: ${squareRoot(a)}`)
        break
      case "3":
        var [a, b] = numbers()
        console.log(`Result: ${baseLog(a, b)}`)
        break
      case "4":
        var a = numbers((count = 1))
        console.log(`Result: ${sin(a)}`)
        break
      case "5":
        var a = numbers((count = 1))
        console.log(`Result: ${cos(a)}`)
        break
      case "6":
        var a = numbers((count = 1))
        console.log(`Result: ${tan(a)}`)
        break
      case "7":
        var a = numbers((count = 1))
        console.log(`Result: ${factorial(a)}`)
        break
      case "0":
        looping = false
        menu()
        break
      case "clear":
        clearAndSpace()
        break
      case "cls":
        clearAndSpace()
        break
      default:
        looping = validateStop()
        if (!looping) {
          menu()
        }
    }
  }
}

function specialCalculator() {
  clearAndSpace()

  let looping = true
  while (looping) {
    console.log("--------------------------")
    console.log("| Avalible operations to perform:")
    console.log("| ---> 1. Area of a Square")
    console.log("| ---> 2. Area of a Rectangle")
    console.log("| ---> 3. Area of a Triangle")
    console.log("| ---> 4. Area of a Circle")
    console.log("| ---> 0. Exit")
    console.log("| (NOTE: You can clear the screen by typing 'clear' or 'cls' and press enter.)")
    console.log("--------------------------")
    let value = prompt("Enter the operation you want to use:  ")
    switch (value) {
      case "1":
        var a = numbers(
          (count = 1),
          (message = ["Enter the side of the square: "])
        )
        console.log(`Result: ${areaOfSquare(a)}`)
        break
      case "2":
        var [a, b] = numbers(
          (count = 2),
          (message = ["Enter the length: ", "Enter the width: "])
        )
        console.log(`Result: ${areaOfRectangle(a, b)}`)
        break
      case "3":
        var [a, b] = numbers(
          (count = 2),
          (message = ["Enter the base: ", "Enter the height: "])
        )
        console.log(`Result: ${areaOfTriangle(a, b)}`)
        break
      case "4":
        var a = numbers((count = 1), (message = ["Enter the radius: "]))
        console.log(`Result: ${areaOfCircle(a)}`)
        break
      case "0":
        looping = false
        menu()
        break
      case "clear":
        clearAndSpace()
        break
      case "cls":
        clearAndSpace()
        break
      default:
        looping = validateStop()
        if (!looping) {
          menu()
        }
    }
  }
}

function add(a, b) {
  console.log(`${a} + ${b}`)

  incrementCounter("add")
  return a + b
}

function subtract(a, b) {
  console.log(`${a} - ${b}`)

  incrementCounter("multiply")
  return a - b
}

function multiply(a, b) {
  console.log(`${a} * ${b}`)

  incrementCounter("multiply")
  return a * b
}

function divide(a, b) {
  console.log(`${a} / ${b}`)

  if (b === 0) {
    console.warn("You can't divide by zero")
    return
  }

  incrementCounter("divide")
  return a / b
}

function power(a, b) {
  console.log(`${a} ^ ${b}`)

  incrementCounter("power")
  return Math.pow(a, b)
}

function squareRoot(a) {
  console.log(`√${a}`)

  if (a < 0) {
    console.warn("You can't get the square root of a negative number")
    return undefined
  }

  incrementCounter("squareRoot")
  return Math.sqrt(a)
}

function baseLog(base, number) {
  console.log(`log${a}(${b})`)

  if (base <= 0) {
    console.warn("You can't get the log of a negative number or zero")
    return undefined
  }

  if (base === 1) {
    console.warn("The base of a logarithm cannot be 1")
    return undefined
  }

  if (number <= 0) {
    console.warn("You can't get the log of a negative number or zero")
    return undefined
  }

  incrementCounter("baseLog")
  return Math.log(number) / Math.log(base)
}

function sin(a) {
  console.log(`sin(${a})`)

  incrementCounter("sin")
  return Math.sin(a)
}

function cos(a) {
  console.log(`cos(${a})`)

  incrementCounter("cos")
  return Math.cos(a)
}

function tan(a) {
  console.log(`tan(${a})`)

  incrementCounter("tan")
  return Math.tan(a)
}

function factorial(a) {
  console.log(`${a}!`)

  if (a === 0) {
    return 1
  }

  if (a < 0) {
    console.warn("You can't get the factorial of a negative number")
    return undefined
  }

  if (!Number.isInteger(a)) {
    console.warn("Factorial is only defined for integers")
    return undefined
  }

  incrementCounter("factorial")
  return a * factorial(a - 1)
}

function areaOfSquare(a) {
  console.log(`Area of a square with side ${a}`)

  incrementCounter("areaOfSquare")
  return multiply(a, a)
}

function areaOfRectangle(a, b) {
  console.log(`Area of a rectangle with length ${a} and width ${b}`)

  incrementCounter("areaOfRectangle")
  return multiply(a, b)
}

function areaOfTriangle(base, height) {
  console.log(`Area of a triangle with base ${base} and height ${height}`)

  incrementCounter("areaOfTriangle")
  return multiply(base, height) / 2
}

function areaOfCircle(radius) {
  console.log(`Area of a circle with radius ${radius}`)

  incrementCounter("areaOfCircle")
  return multiply(radius, radius) * Math.PI
}

function numbers(
  count = 2,
  message = ["Enter the first number: ", "Enter the second number: "]
) {
  if (count !== 1 && count !== 2) {
    throw new Error("Invalid argument: count must be 1 or 2")
  }

  const firstNumber = promptForNumber(message[0])
  if (count === 1) {
    return [firstNumber]
  }

  const secondNumber = promptForNumber(message[1])
  return [firstNumber, secondNumber]
}

function promptForNumber(message) {
  let value = parseFloat(prompt(message))
  while (!isNumber(value)) {
    value = parseFloat(prompt(message))
  }
  return value
}

function isNumber(value) {
  if (typeof value !== "number" || isNaN(value)) {
    console.warn("Please enter a valid number")
    return false
  }
  return true
}

function clearAndSpace() {
  console.clear()
  console.log("\n".repeat(10))
}

function validateStop() {
  console.log("Invalid choice")
  if (confirm("Do you want to back to the main menu?")) {
    console.log("Exiting...")
    return false
  }
  return true
}

function incrementCounter(operation) {
  operationCounters[operation]++
}

function logOperation(operation, ...args) {
  console.log(`${operation}(${args.join(", ")})`)
}
