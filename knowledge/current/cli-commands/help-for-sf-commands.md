---
title: "Help for sf Commands"
domain: cli-commands
topic: help-for-sf-commands
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T09:49:04.734Z
keywords: [Help, Commands]
---

# Help for sf Commands

# Help for sf Commands

The \-h and \--help flags show details about sf topics and their commands.

The short \-h flag shows a subset of the command-line help and is meant for quick reference. The long \--help flag shows the complete command-line help.

The short help (\-h) for commands has these parts.

1.  **Short Description of Command**
    
    At the top of the \-h output (with no heading), a short description of the command is shown.
    
2.  **Usage**
    
    The command signature on the Usage line uses the docopt format.
    
    -   All available flags are listed. Flags that have short names are listed using their short names.
    -   Flags that take a value show <value> immediately after the flag’s name.
    -   Optional flags are in square brackets (\[ … \]).
    -   Required flags have no annotation.
    -   For flags that accept a limited set of values, the values are shown after the flag name, separated by pipes (\--flagname value1|value2|value3).
    
3.  **Flags**
    
    The Flags section lists all the command’s flags, including their short name, long name, and purpose. Flags are grouped for easier reading, such as global flags and other groups relevant to a specific command.
    
    For flags that take multiple values, you have two ways to specify the values:
    
    -   Specify the flag multiple times, where each flag takes a different single value.
    -   Specify the flag one time, but separate all the values with a space.
    
    For example, the following commands are equivalent:
    
    ```
    
    ```
    
    Flags that accept a limited list of values include the values in parentheses, with the default value specified with the default keyword.
    

The long help (\--help) for commands has the same parts as the preceding short help \-h) and these additional parts.

1.  **Description**
    
    Usage notes.
    
2.  **Examples**
    
    All examples include a brief description.
    
3.  **Flag Descriptions**
    
    Some flags have optional additional usage notes.