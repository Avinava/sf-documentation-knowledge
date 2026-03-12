---
title: "dev Commands"
domain: cli-commands
topic: dev-commands
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:05.385Z
estimatedTokens: 2319
keywords: [dev, Commands, Audit, messages, plugin's, directory, locate, unused, missing, references, source, code, Examples, Flags, convert]
---

# dev Commands

> Audit messages in a plugin's messages directory to locate unused messages and missing messages that have references in source code.

# dev Commands

Commands for sf plugin development.

-   **[dev audit messages](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_dev_commands_unified.htm#cli_reference_dev_audit_messages_unified)**
    Audit messages in a plugin's messages directory to locate unused messages and missing messages that have references in source code.
-   **[dev convert messages](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_dev_commands_unified.htm#cli_reference_dev_convert_messages_unified)**
    Convert a .json messages file into Markdown.
-   **[dev convert script](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_dev_commands_unified.htm#cli_reference_dev_convert_script_unified)**
    Convert a script file that contains deprecated sfdx-style commands to use the new sf-style commands instead.
-   **[dev generate command](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_dev_commands_unified.htm#cli_reference_dev_generate_command_unified)**
    Generate a new sf command.
-   **[dev generate flag](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_dev_commands_unified.htm#cli_reference_dev_generate_flag_unified)**
    Generate a flag for an existing command.
-   **[dev generate plugin](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_dev_commands_unified.htm#cli_reference_dev_generate_plugin_unified)**
    Generate a new sf plugin.

## dev audit messages

Audit messages in a plugin's messages directory to locate unused messages and missing messages that have references in source code.

### Examples for dev audit messages

Audit messages using default directories:

```

```

Audit messages in the "messages" directory in the current working directory; the plugin's source directory is in "src":

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-p | \--project-dir PROJECT-DIR

Optional

Location of the project where messages are to be audited.

Type: option

Default value: .

\-m | \--messages-dir MESSAGES-DIR

Optional

Directory that contains the plugin's message files.

The default is the "messages" directory in the current working directory.

Type: option

Default value: messages

\-s | \--source-dir SOURCE-DIR

Optional

Directory that contains the plugin's source code.

The default is the "src" directory in the current working directory.

Type: option

Default value: src

## dev convert messages

Convert a .json messages file into Markdown.

### Description for dev convert messages

Preserves the filename and the original messages file, then creates a new file with the Markdown extension and standard headers for the command and flag summaries, descriptions, and so on. After you review the new Markdown file, delete the old .json file.

### Examples for dev convert messages

Convert the my-command.json message file into my-command.md with the standard messages headers:

```

```

Similar to previous example, but specify the plugin project directory:

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-p | \--project-dir PROJECT-DIR

Optional

Location of the project whose messages are to be converted.

Type: option

Default value: .

\-f | \--file-name FILE-NAME

Required

Filename to convert.

Type: option

## dev convert script

Convert a script file that contains deprecated sfdx-style commands to use the new sf-style commands instead.

### Description for dev convert script

Important: Use this command only to get started on the sfdx->sf script migration. We don't guarantee that the new sf-style command replacements work correctly or as you expect. You must test, and probably update, the new script before putting it into production. We also don't guarantee that the JSON results are the same as before.

This command can convert a large part of your script, but possibly not all. There are some sfdx-style commands that don't have an obvious sf-style equivalent. In this case, this command doesn't replace the sfdx-style command but instead adds a comment to remind you that you must convert it manually. See the Salesforce CLI Command Reference for migration information about each deprecated sfdx-style command: https://developer.salesforce.com/docs/atlas.en-us.sfdx\_cli\_reference.meta/sfdx\_cli\_reference/cli\_reference.htm.

This command is interactive; as it scans your script, it prompts you when it finds an sfdx-style command or flag and asks if you want to convert it to the displayed suggestion. The command doesn't update the script file directly; rather, it creates a new file whose name is the original name but with "-converted" appended to it. The script replaces all instances of "sfdx" with "sf". For each prompt you answer "y" to, the command replaces the sfdx-style names with their equivalent sf-style ones. For example, "sfdx force:apex:execute --targetusername myscratch" is replaced with "sf apex run --target-org myscratch".

### Examples for dev convert script

Convert the YAML file called "myScript.yml" located in the current directory; the new file that contains the replacements is called "myScript-converted.yml":

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-s | \--script SCRIPT

Required

Filepath to the script you want to convert.

Type: option

## dev generate command

Generate a new sf command.

### Description for dev generate command

You must run this command from within a plugin directory, such as the directory created with the "sf dev generate plugin" command.

The command generates basic source files, messages (\\\*.md), and test files for your new command. The Typescript files contain import statements for the minimum required Salesforce libraries, and scaffold some basic code. The new type names come from the value you passed to the --name flag.

The command updates the package.json file, so if it detects conflicts with the existing file, you're prompted whether you want to overwrite the file. There are a number of package.json updates required for a new command, so we recommend you answer "y" so the command takes care of them all. If you answer "n", you must update the package.json file manually.

### Examples for dev generate command

Generate the files for a new "sf my exciting command":

```

```

### Flags

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-n | \--name NAME

Required

Name of the new command. Use colons to separate the topic and command names.

Type: option

\--force

Optional

Overwrite existing files.

Type: boolean

\--dry-run

Optional

Display the changes that would be made without writing them to disk.

Type: boolean

\--nuts

Optional

Generate a NUT test file for the command.

Type: boolean

Default value: true

\--unit

Optional

Generate a unit test file for the command.

Type: boolean

Default value: true

## dev generate flag

Generate a flag for an existing command.

### Description for dev generate flag

You must run this command from within a plugin directory, such as the directory created with the "sf dev generate plugin" command.

This command is interactive. It first discovers all the commands currently implemented in the plugin, and asks you which you want to create a new flag for. It then prompts for other flag properties, such as its long name, optional short name, type, whether it's required, and so on. Long flag names must be kebab-case and not camelCase. The command doesn't let you use an existing long or short flag name. When the command completes, the Typescript file for the command is updated with the code for the new flag.

Use the --dry-run flag to review new code for the command file without actually updating it.

### Examples for dev generate flag

Generate a new flag and update the command file:

```

```

Don't actually update the command file, just view the generated code:

```

```

### Flags

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-d | \--dry-run

Optional

Print new flag code instead of adding it to the command file.

Type: boolean

## dev generate plugin

Generate a new sf plugin.

### Description for dev generate plugin

This command is interactive. You're prompted for information to populate your new plugin, such as its name, description, author, and percentage of code coverage you want. The command clones the 'salesforcecli/plugin-template-sf' GitHub repository, installs the plug-in's npm package dependencies using yarn install, and updates the package properties.

When the command completes, your new plugin contains the source, message, and test files for a sample "sf hello world" command.

### Examples for dev generate plugin

```

```

### Flags

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\--dry-run

Optional

Display the changes that would be made without writing them to disk.

Type: boolean

### Aliases for dev generate plugin

```

```

## Code Examples

```
sf dev audit messages
```

```
sf dev audit messages --messages-dir ./messages --source-dir ./src
```

```
sf dev convert messages --filename my-command.json
```

```
sf dev convert messages --project-dir ./path/to/plugin --filename my-command.json
```

```
sf dev convert script --script ./myScript.yml
```

## Related Topics

- dev audit messages (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_dev_commands_unified.htm)
- dev convert messages (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_dev_commands_unified.htm)
- dev convert script (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_dev_commands_unified.htm)
- dev generate command (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_dev_commands_unified.htm)
- dev generate flag (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_dev_commands_unified.htm)
- dev generate plugin (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_dev_commands_unified.htm)
