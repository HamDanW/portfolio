

# ECS150: Project #1 - Simple Shell

## Introduction
In this project we created a simple shell program that functions as a command-line interpreter. It will take user inputs from the command line and execute them as well as displaying a completion message for user feedback. This project helps improve our understanding of the UNIX system as well as a deeper understanding of how command lines work. It also introduces students to a challenge in coding with C creating stronger software developing skills.


## Core Features
- Execution of user-supplied commands with optional arguments
- Selection of typical builtin commands
- Redirection of the standard output of commands to files
- Composition of commands via piping
- Redirection of the standard error of commands to files or pipes
- Simple ls-like builtin command
  
## Architecture: 
The architecture of the shell includes the main loop for reading and executing commands. The shell reads input from the user, tokenizes it, and checks for built-in commands. If the command is not a built-in command, the shell proceeds with command-line parsing, which involves setting up pipes and handling output/error redirection. The execution function is responsible for creating child processes and executing the user-supplied commands with the appropriate arguments and redirections. The pipeline data structure holds information about piped commands, and the parsePipe function extracts multiple commands connected by pipes from the user input.

## Data Structures

The shell uses a custom data structure called `struct pipeline` to hold information about piped commands. It has an array of command strings (`cmds`) and an integer field (`size`) to keep track of the number of commands in the pipeline. Additionally, the `eRedirect array` is used to indicate whether error redirection is required for a particular command in the pipeline.

## Stage 1: Command-line Tokenization (Lexical Analysis)

The lexical analysis stage involves tokenizing the user input to extract individual commands and arguments. The `parseArgv` function tokenizes the command-line input based on spaces and populates the `argv` array with the command and its arguments.

## Stage 2: Command-line Parsing
The command-line parsing stage handles output and error redirection and sets up pipes for piped commands. The `parsePipe` function extracts individual commands from a piped input and populates the `pipeline` data structure accordingly.

### Setting up the pipes

The shell supports up to three commands connected by pipes (`pipeline3`). The `pipeline2` function handles the case of two commands connected by a single pipe.

### Setting up output and/or error redirection

The `execution` function handles output redirection by opening the specified file and redirecting the standard output to it. If error redirection is required, the function redirects the standard error accordingly.

## Stage 3: Process Execution

The process execution stage involves creating child processes to execute the user-supplied commands. The `execution` function forks a child process and uses `execvp` to execute the command with the given arguments and redirections. If there are piped commands, the `pipeline2` and `pipeline3` functions handle their execution.

## Conclusion

Our simple shell project has provided us with valuable insights into the workings of a command-line interpreter. Through its implementation, we have gained a deeper understanding of the UNIX system and improved our C coding skills. The core features, such as command execution, redirection, and piping, have been successfully implemented, making our simple shell a useful tool for basic command-line operations.

## Future Enhancements
- Improve error handling and error messages for better user feedback.
- Implement additional built-in commands to expand the functionality of the shell.
- Enhance support for more complex piping scenarios with multiple commands.