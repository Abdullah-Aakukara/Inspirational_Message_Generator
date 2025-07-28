# Inspirational Message Generator

A simple Node.js program that generates a random inspirational message each time you run it. The message is composed from different pieces of information stored in a separate data module.

## Features

- Randomly selects parts of a message from predefined arrays
- Modular code structure for easy extension
- Outputs a new inspirational message every run

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system

### Installation

1. Clone this repository:
    ```sh
    git clone https://github.com/Abdullah-Aakukara/Inspirational_Message_Generator.git
    cd Inspirational-Message-Generator
    ```

2. (Optional) Install any dependencies if you add them in the future.

### Usage

1. Make sure your `data.js` file contains the message parts as arrays.
2. Run the program:
    ```sh
    node randomMessage.js
    ```

3. You’ll see a new inspirational message in your terminal each time.

## Project Structure

```
Inspirational Message Generator/
│
├── data.js
├── randomMessage.js
└── README.md
```

## Customization

- Edit `data.js` to add or change the message components.
- Modify `randomMessage.js` to change how messages are constructed.

## License

This project is open source and available under the [MIT License](LICENSE).
