---
title: "Customize the Colors in Help Output"
domain: sfdx-setup
topic: customize-the-colors-in-help-output
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.123Z
estimatedTokens: 680
keywords: [Customize, Colors, Help, Output, run, command, --help, flag, uses, highlight, certain, parts, descriptions, executable, don’t]
---

# Customize the Colors in Help Output

> When you run a command with the --help or -h flag, the help output uses colors to highlight certain parts,
  such as command and flag descriptions, executable name, and more. If you don’t like the default
  colors, you can customize them.

# Customize the Colors in Help Output

When you run a command with the \--help or \-h flag, the help output uses colors to highlight certain parts, such as command and flag descriptions, executable name, and more. If you don’t like the default colors, you can customize them.

1.  Create a file called theme.json using your favorite editor.
2.  Add key-value pairs to the theme.json file where the key specifies the help section you want to colorize and the value is a color.

    You can use [chalk-style colors](https://github.com/chalk/chalk/?tab=readme-ov-file#colors) (such as greenBright), hex code (#FF0000), or RGB (rgb(255,255,255)). See the [default theme.json file](#help-themes-example) for an example.

    Here's the list of available JSON keys and what they colorize:

    -   alias: The aliases that are listed in the ALIASES section.
    -   bin: The sf executable name.
    -   command: The command's name.
    -   commandSummary: The command's summary.
    -   dollarSign: The $ character printed before examples and command usage.
    -   flag: The long and short flag names.
    -   flagDefaultValue: The text \[default: X\] that is displayed for flags that have a default value.
    -   flagOptions: The valid options for a flag.
    -   flagRequired: The text (required) that is displayed for required flags.
    -   flagSeparator: The , character (comma) that separates the short and long flag names.
    -   sectionDescription: The text inside the sections, such as all the text in the DESCRIPTION section.
    -   sectionHeader: The section header, such as DESCRIPTION.
    -   topic: The topics listed in the TOPICS section.
    -   version: The VERSION section that’s displayed when you run sf --help.

    To configure a section’s color back to the default black, set the associated JSON key to none.

3.  Save the theme.json file in the appropriate directory

    The directory where you save the file depends on your operating system.

    -   Linux and macOS: $HOME/.config/sf
    -   Windows: Depending on your Salesforce CLI configuration, either C:\\Users\\<username>\\.config\\sf or %LOCALAPPDATA%\\sf

When you next run a command with the \--help or \-h flag, the help output uses your customized colors.

## Example

As an example, here’s the internal theme.json file that Salesforce CLI uses to configure the default help output colors.

{ "aliases": "none", "bin": "blueBright", "command": "blueBright", "commandSummary": "none", "dollarSign": "green", "flag": "green", "flagDefaultValue": "blueBright", "flagOptions": "blueBright", "flagRequired": "red", "flagSeparator": "none", "sectionDescription": "none", "sectionHeader": "blue", "topic": "blueBright", "version": "none" }
