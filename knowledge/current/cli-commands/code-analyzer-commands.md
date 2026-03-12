---
title: "code-analyzer Commands"
domain: cli-commands
topic: code-analyzer-commands
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:03.078Z
estimatedTokens: 6591
keywords: [code-analyzer, Commands, Output, current, state, configuration, Code, Analyzer., config, Description, Examples, Flags, rules, run]
---

# code-analyzer Commands

> Output the current state of configuration for Code Analyzer.

# code-analyzer Commands

Analyze your code to ensure it adheres to best practices.

-   **[code-analyzer config](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_code-analyzer_commands_unified.htm#cli_reference_code-analyzer_config_unified)**
    Output the current state of configuration for Code Analyzer.
-   **[code-analyzer rules](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_code-analyzer_commands_unified.htm#cli_reference_code-analyzer_rules_unified)**
    List the rules that are available to analyze your code.
-   **[code-analyzer run](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_code-analyzer_commands_unified.htm#cli_reference_code-analyzer_run_unified)**
    Analyze your code with a selection of rules to ensure good coding practices.

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

## code-analyzer rules

List the rules that are available to analyze your code.

### Description for code-analyzer rules

You can also view details about the rules, such as the engine it's associated with, tags, and description.

Use this command to determine the exact set of rules to analyze your code. The \`code-analyzer run\` command has similar flags as this command, so once you've determined the flag values for this command that list the rules you want to run, you specify the same values to the \`code-analyzer run\` command.

We're continually improving Salesforce Code Analyzer. Tell us what you think! Give feedback at https://sfdc.co/CodeAnalyzerFeedback.

### Examples for code-analyzer rules

List rules using the default behavior: include rules from all engines that have a "Recommended" tag; display the rules using concise table format; and automatically apply rule or engine overrides if a \`code-analyzer.yml\` or \`code-analyzer.yaml\` file exists in the current folder:

```

```

The previous example is equivalent to this example:

```

```

List the recommended rules for the "eslint" engine:

```

```

List all the rules for the "eslint" engine:

```

```

The previous example is equivalent to this example:

```

```

List the details about all rules for all engines; also write the rules in JSON format to a file called "rules.json" in the "out" folder, which must already exist:

```

```

Get a more accurate list of the rules that apply specifically to your workspace (all the files in the current folder):

```

```

List the recommended rules associated with a workspace that targets all the files in the folder "./other-source" and only the Apex class files (extension .cls) under the folder "./force-app":

```

```

List all the "eslint" engine rules that have a moderate severity (3) and the recommended "retire-js" engine rules with any severity:

```

```

List all the "pmd" engine rules that have a severity of moderate (3) or high (2) and the "Performance" tag.

```

```

Similar to the previous example, but apply the rule overrides and engine settings from the configuration file called \`code-analyzer2.yml\` in the current folder. If, for example, you changed the severity of an "eslint" rule from moderate (3) to high (2) in the configuration file, then that rule isn't listed:

```

```

List the details of the "getter-return" rule of the "eslint" engine and the rules named "no-inner-declarations" in any engine:

```

```

List the details of the recommended "eslint" engine rules that have the tag "problem" and high severity level (2) that apply when targeting the files within the folder "./force-app":

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

Use the \`--workspace\` flag to return a more accurate list of the rules that apply to the files that make up your workspace. Typically, a workspace is a single project folder that contains all your files. But it can also consist of one or more folders, one or more files, and use glob patterns (wildcards). If you specify this flag multiple times, then your workspace is the sum of the files and folders.

The command uses the types of files in the workspace, such as JavaScript or Typescript, to determine which rules to list. For example, if your workspace contains only JavaScript files, the command doesn't list TypeScript rules. The command uses a file's extension to determine what kind of file it is, such as ".ts" for TypeScript.

Some engines may be configured to add additional rules based on what it finds in your workspace. For example, if you set the engines.eslint.auto\_discover\_eslint\_config value of your \`code-analyzer.yml\` file to true, then supplying your workspace allows the "eslint" engine to examine your files in order to find ESLint configuration files that could potentially add in additional rules.

If you specify \`--target\` but not \`--workspace\`, then the current folder '.' is used as your workspace.

Type: option

\-t | \--target TARGET

Optional

Subset of files within your workspace that you want to target for analysis.

Use the \`--target\` flag to return a more accurate list of the rules that apply to only a subset of targeted files within your workspace. You can specify a target as a file, a folder, or a glob pattern. If you specify this flag multiple times, then the full list of targeted files is the sum of the files and folders.

The command uses the type of the targeted files, such as JavaScript or Typescript, to determine which rules to list. For example, if you target only JavaScript files, the command doesn't list TypeScript rules. The command uses a file's extension to determine what kind of file it is, such as ".ts" for TypeScript.

Each targeted file must live within the workspace specified by the –-workspace flag.

If you specify \`--workspace\` but not \`--target\`, then all the files within your workspace are targeted.

Type: option

\-r | \--rule-selector RULE-SELECTOR

Optional

Selection of rules, based on engine name, severity level, rule name, tag, or a combination of criteria separated by colons.

Use the \`--rule-selector\` flag to select the list of rules based on specific criteria. For example, you can select by engine, such as the rules associated with the "retire-js" or "eslint" engine. Or select by the severity of the rules, such as high or moderate. You can also select rules using tag values or rule names. Every rule has a name, which is unique within the scope of an engine. Most rules have tags, although it's not required. An example of a tag is "Recommended".

You can further filter the list by combining different criteria using colons to represent logical AND, commas to represent logical OR, and parentheses to create groupings. For example, \`--rule-selector "pmd:(Performance,Security):2"\` lists rules associated only with the "pmd" engine that have the Security or Performance tags and a high severity (2). You may also specify the flag multiple times to OR multiple selectors together. For example, \`--rule-selector Performance,Security\` is equivalent to \`--rule-selector Performance --rule-selector Security\`. Note that if you use parentheses in your selector, the selector should be wrapped in double-quotes.

Run \`sf code-analyzer rules --rule-selector all\` to list the possible values for engine name, rule name, tags, and severity levels that you can use with this flag.

Type: option

Default value: Recommended

\-c | \--config-file CONFIG-FILE

Optional

Path to the configuration file used to customize the engines and rules.

Code Analyzer has an internal default configuration for its rule and engine properties. If you want to override these defaults, you can create a Code Analyzer configuration file.

We recommend that you name your Code Analyzer configuration file \`code-analyzer.yml\` or \`code-analyzer.yaml\` and put it at the root of your workspace. You then don't need to use this flag when you run the \`code-analyzer rules\` command from the root of your workspace, because it automatically looks for either file in the current folder, and if found, applies its rule overrides and engine settings. If you want to name the file something else, or put it in an alternative folder, then you must specify this flag.

To help you get started, use the \`code-analyzer config\` command to create your first Code Analyzer configuration file. With it, you can change the severity of an existing rule, change a rule's tags, and so on. Then use this flag to specify the file so that the command takes your customizations into account.

Type: option

\-f | \--output-file OUTPUT-FILE

Optional

Name of the file where the selected rules are written. The file format depends on the extension you specify; the currently supported extensions are .json and .csv

If you don't specify this flag, the command outputs the rules to only the terminal. Use this flag to write the rules to a file; the format of the rules depends on the extension you provide. For example, \`--output-file rules.csv\` creates a comma-separated values file. You can specify one of these extensions:

\- .csv

\- .json

To output the rules to multiple files, specify this flag multiple times. For example, \`--output-file rules.json --output-file rules.csv\` creates both a JSON file and a CSV file.

If you specify a file within folder, such as \`--output-file ./out/rules.json\`, the folder must already exist, or you get an error. If the file already exists, it's overwritten without prompting.

Type: option

\-v | \--view VIEW

Optional

Format to display the rules in the terminal.

The format \`table\` is concise and shows minimal output, the format \`detail\` shows all available information.

If you specify neither \`--view\` nor \`--output-file\`, then the default table view is shown. If you specify \`--output-file\` but not \`--view\`, only summary information is shown in the terminal.

Type: option

Permissible values are: detail, table

## code-analyzer run

Analyze your code with a selection of rules to ensure good coding practices.

### Description for code-analyzer run

You can scan your codebase with the recommended rules. Or use flags to filter the rules based on engines (such as "retire-js" or "eslint"), rule names, tags, and more.

If you want to preview the list of rules before you actually run them, use the \`code-analyzer rules\` command, which also has the \`--config-file\`, \`--rule-selector\`, \`--target\`, and \`--workspace\` flags that together define the list of rules to be run.

We're continually improving Salesforce Code Analyzer. Tell us what you think! Give feedback at https://sfdc.co/CodeAnalyzerFeedback.

### Examples for code-analyzer run

Analyze code using the default behavior: analyze all the files in the current folder (default workspace) using the Recommended rules; display the output in the terminal with the concise table view; and automatically apply rule or engine overrides if a \`code-analyzer.yml\` or \`code-analyzer.yaml\` file exists in the current folder:

```

```

The previous example is equivalent to this example:

```

```

Analyze the files using the recommended "eslint" rules and show details of the violations:

```

```

Analyze the files using all the "eslint" rules:

```

```

The previous example is equivalent to this example:

```

```

Analyze the files using all rules for all engines:

```

```

Analyze the files using only rules in the "pmd" engine with a severity of high (2) or moderate (3), and the "Performance" tag.

```

```

Analyze files using the recommended "retire-js" rules; target all the files in the folder "./other-source" and only the Apex class files (extension .cls) in the folder "./force-app":

```

```

Specify a custom configuration file and output the results to the "results.csv" file in CSV format; the commands fails if it finds a violation that exceeds the moderate severity level (3):

```

```

Analyze the files using all the "eslint" engine rules that have a moderate severity (3) and the recommended "retire-js" engine rules with any severity:

```

```

Analyze the files using only the "getter-return" rule of the "eslint" engine and any rule named "no-inner-declarations" from any engine:

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

Typically, a workspace is a single project folder that contains all your files. But it can also consist of one or more folders, one or more files, and use glob patterns (wildcards). If you specify this flag multiple times, then your workspace is the sum of the files and folders.

Some engines often need your entire code base to perform an analysis, even if you want to target only a subset of the files within your workspace , such as with the \`--target\` flag. For example, the Salesforce Graph Engine might need to compile your entire project in order to properly build a graph so it can perform a data flow analysis on the paths that start in your targeted files.

If you don't specify the \`--workspace\` flag, then the current folder '.' is used as your workspace.

Type: option

Default value: .

\-t | \--target TARGET

Optional

Subset of files within your workspace to be targeted for analysis.

You can specify a target as a file, a folder, or a glob pattern.

If you specify this flag multiple times, then the full list of targeted files is the sum of the files and folders.

Each targeted file must live within the workspace that you specified with the \`–-workspace\` flag.

If you don't specify the \`--target\` flag, then all the files within your workspace (specified by the \`--workspace\` flag) are targeted for analysis.

Type: option

\-r | \--rule-selector RULE-SELECTOR

Optional

Selection of rules, based on engine name, severity level, rule name, tag, or a combination of criteria separated by colons.

Use the \`--rule-selector\` flag to select the list of rules to run based on specific criteria. For example, you can select by engine, such as the rules associated with the "retire-js" or "eslint" engine. Or select by the severity of the rules, such as high or moderate. You can also select rules using tag values or rule names. Every rule has a name, which is unique within the scope of an engine. Most rules have tags, although it's not required. An example of a tag is "Recommended".

You can further filter the list by combining different criteria using colons to represent logical AND, commas to represent logical OR, and parentheses to create groupings. For example, \`--rule-selector "pmd:(Performance,Security):2"\` runs rules associated only with the "pmd" engine that have the Security or Performance tags and a high severity (2). You may also specify the flag multiple times to OR multiple selectors together. For example, \`--rule-selector Performance,Security\` is equivalent to \`--rule-selector Performance --rule-selector Security\`. Note that if you use parentheses in your selector, the selector should be wrapped in double-quotes.

Run \`sf code-analyzer rules --rule-selector all\` to see the possible values for engine name, rule name, tags, and severity levels that you can use with this flag.

Type: option

Default value: Recommended

\-s | \--severity-threshold SEVERITY-THRESHOLD

Optional

Severity level of a found violation that must be met or exceeded to cause this command to fail with a non-zero exit code.

You can specify either a number (2) or its equivalent string ("High").

Type: option

\-v | \--view VIEW

Optional

Format to display the command results in the terminal.

The format \`table\` is concise and shows minimal output, the format \`detail\` shows all available information.

If you specify neither \`--view\` nor \`--output-file\`, then the default table view is shown. If you specify \`--output-file\` but not \`--view\`, only summary information is shown.

Type: option

Permissible values are: detail, table

\-f | \--output-file OUTPUT-FILE

Optional

Name of the file where the analysis results are written. The file format depends on the extension you specify, such as .csv, .html, .xml, and so on.

If you don't specify this flag, the command outputs the results to only the terminal. Use this flag to print the results to a file; the format of the results depends on the extension you provide. For example, \`--output-file results.csv\` creates a comma-separated values file. You can specify one of these extensions:

\- .csv

\- .html or .htm

\- .json

\- .sarif or .sarif.json

\- .xml

To output the results to multiple files, specify this flag multiple times. For example: \`--output-file results.json --output-file report.html\` creates both a JSON results file and an HTML file.

If you specify a file within a folder, such as \`--output-file ./out/results.json\`, the folder must already exist, or you get an error. If the file already exists, it's overwritten without prompting.

Type: option

\-c | \--config-file CONFIG-FILE

Optional

Path to the configuration file used to customize the engines and rules.

Code Analyzer has an internal default configuration for its rule and engine properties. If you want to override these defaults, you can create a Code Analyzer configuration file.

We recommend that you name your Code Analyzer configuration file \`code-analyzer.yml\` or \`code-analyzer.yaml\` and put it at the root of your workspace. You then don't need to use this flag when you run the \`code-analyzer run\` command from the root of your workspace, because it automatically looks for either file in the current folder, and if found, applies its rule overrides and engine settings. If you want to name the file something else, or put it in an alternative folder, then you must specify this flag.

To help you get started, use the \`code-analyzer config\` command to create your first Code Analyzer configuration file. With it, you can change the severity of an existing rule, change a rule's tags, and so on. Then use this flag to specify the file so that the command takes your customizations into account.

Type: option

## Code Examples

```
sf code-analyzer config --config-file ./code-analyzer.yml --rule-selector all
```

```
sf code-analyzer config --config-file ./code-analyzer.yml --output-file code-analyzer.yml
```

```
sf code-analyzer config --target ./src
```

```
sf code-analyzer config --rule-selector eslint:no-undef
```

```
sf code-analyzer config --rule-selector "pmd:(2,3)"
```

## Related Topics

- code-analyzer config (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_code-analyzer_commands_unified.htm)
- code-analyzer rules (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_code-analyzer_commands_unified.htm)
- code-analyzer run (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_code-analyzer_commands_unified.htm)
