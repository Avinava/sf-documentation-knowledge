---
title: "code-analyzer config"
domain: cli-commands
topic: code-analyzer-config
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.620Z
keywords: [code-analyzer, config, Output, current, state, configuration, Code, Analyzer., Description, Examples, Flags]
---

# code-analyzer config

> Output the current state of configuration for Code Analyzer.

## code-analyzer config

Output the current state of configuration for Code Analyzer.

### Description for code-analyzer config

Code Analyzer gives you the ability to configure settings that modify Code Analyzer's behavior, to override the tags and severity levels of rules, and to configure the engine specific settings. Use this command to see the current state of this configuration. You can also save this state to a YAML-formatted file that you can modify for your needs.

To apply a custom configuration with Code Analyzer, either keep your custom configuration settings in a \`code-analyzer.yml\` file located in the current folder from which you are executing commands, or specify the location of your custom configuration file to the Code Analyzer commands with the --config-file flag.

We're continually improving Salesforce Code Analyzer. Tell us what you think! Give feedback at https://sfdc.co/CodeAnalyzerFeedback.

### Examples for code-analyzer config

Display the current state of the Code Analyzer configuration using the default behavior: display top level configuration, display the engine and rule override settings associated with all the rules; and automatically apply any existing custom configuration settings found in a \`code-analyzer.yml\` or \`code-analyzer.yaml\` file in the current folder:

```

```

This example is identical to the previous one, assuming that \`./code-analyzer.yml\` exists in your current folder.

```

```

Write the current state of configuration to the file \`code-analyzer.yml\`, including any configuration from an existing \`code-analyzer.yml\` file. The command preserves all values from the original config, but overwrites any comments:

```

```

Display the configuration state for just the recommended rules, instead of all the rules:

```

```

Display all the default rule values for the recommended rules, instead of only the rule values you've explicitly overriden in your \`code-analyzer.yml\` file. By default, only overriden rule values are displayed unless you specify the \`--include-unmodified-rules\` flag:

```

```

Display the configuration state associated with all the rules that are applicable to the files targeted within the folder \`./src\`:

```

```

Display any relevant configuration settings associated with the rule name 'no-undef' from the 'eslint' engine:

```

```

Display any relevant configuration settings associated with PMD rules whose severity is 2 or 3:

```

```

Load an existing configuration file called \`existing-config.yml\`, and then write the configuration to a new file called \`new-config.yml\`, the configuration state that is applicable to all rules that are relevant to the workspace located in the current folder:

```

```

### Flags

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-w | \--workspace WORKSPACE

Optional

Set of files that make up your workspace.

Use the \`--workspace\` flag to display only the configuration associated with the rules that apply to the files that make up your workspace. Typically, a workspace is a single project folder that contains all your files. But it can also consist of one or more folders, one or more files, and use glob patterns (wildcards). If you specify this flag multiple times, then your workspace is the sum of the files and folders.

This command uses the types of files in the workspace, such as JavaScript or Typescript, to determine the applicable configuration state. For example, if your workspace contains only JavaScript files, then the command doesn't display configuration state associated with TypeScript rules. The command uses a file's extension to determine what kind of file it is, such as ".ts" for TypeScript.

Some engines can be configured to add additional rules based on what it finds in your workspace. For example, if you set the engines.eslint.auto\_discover\_eslint\_config value of your \`code-analyzer.yml\` file to true, then supplying your workspace allows the "eslint" engine to examine your files in order to find ESLint configuration files that could potentially add in additional rules.

If you specify \`--target\` but not \`--workspace\`, then the current folder '.' is used as your workspace.

Type: option

\-t | \--target TARGET

Optional

Subset of files within your workspace that you want to target for analysis.

Use the \`--target\` flag to display the configuration state associated with the rules that apply to only a subset of targeted files within your workspace. You can specify a target as a file, a folder, or a glob pattern. If you specify this flag multiple times, then the full list of targeted files is the sum of the files and folders.

The command uses the type of the targeted files, such as JavaScript or Typescript, to determine which configuration state is applicable. For example, if you target only JavaScript files, then the command doesn't display the configuration state associated with TypeScript rules. The command uses a file's extension to determine what kind of file it is, such as ".ts" for TypeScript.

Each targeted file must live within the workspace specified by the \`–-workspace\` flag.

If you specify \`--workspace\` but not \`--target\`, then all the files within your workspace are targeted.

Type: option

\-r | \--rule-selector RULE-SELECTOR

Optional

Selection of rules, based on engine name, severity level, rule name, tag, or a combination of criteria separated by colons and commas, and grouped by parentheses.

Use the \`--rule-selector\` flag to display only the configuration associated with the rules based on specific criteria. You can select by engine, such as the rules associated with the "retire-js" or "eslint" engine. Or select by the severity of the rules, such as high or moderate. You can also select rules using tag values or rule names.

You can further filter the list by combining different criteria using colons to represent logical AND, commas to represent logical OR, and parentheses to create groupings. For example, \`--rule-selector "pmd:(Performance,Security):2"\` reduces the output to only contain the configuration state associated with PMD rules that have the Performance or Security tag and a severity of 2. You may also specify the flag multiple times to OR multiple selectors together. For example, \`--rule-selector Performance,Security\` is equivalent to \`--rule-selector Performance --rule-selector Security\`. Note that if you use parentheses in your selector, the selector should be wrapped in double-quotes.

If you don't specify this flag, then the command uses the "all" rule selector.

Run \`sf code-analyzer config --rule-selector Recommended\` to display the configuration state associated with just the 'Recommended' rules, instead of all the rules.

Type: option

Default value: all

\-c | \--config-file CONFIG-FILE

Optional

Path to the existing configuration file used to customize the engines and rules.

Use this flag to apply the customizations from a custom Code Analyzer configuration file to be displayed alongside the current Code Analyzer configuration state.

If you don't specify this flag, then the command looks for and applies a file named \`code-analyzer.yml\` or \`code-analyzer.yaml\` in your current folder.

Type: option

\-f | \--output-file OUTPUT-FILE

Optional

Output file to write the configuration state to. The file is written in YAML format.

If you specify a file within folder, such as \`--output-file ./config/code-analyzer.yml\`, the folder must already exist, or you get an error. If the file already exists, a prompt asks if you want to overwrite it.

If you don't specify this flag, the command outputs the configuration state to the terminal.

Type: option

\--include-unmodified-rules

Optional

Include unmodified rules in the rule override settings.

The default behavior of the config command is to not include the unmodified rules with their default values in the rule override settings (for the rules selected via the \`–-rule-selector\` flag). This default behavior prevents your configuration file from being unnecessarily large. If you want to include the unmodified rules, in addition to the modified rules, then specify this flag.

Type: boolean