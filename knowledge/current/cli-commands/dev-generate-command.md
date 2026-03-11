---
title: "dev generate command"
domain: cli-commands
topic: dev-generate-command
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.148Z
keywords: [dev, generate, command, Generate, new, command., Description, Examples, Flags]
---

# dev generate command

> Generate a new sf command.

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