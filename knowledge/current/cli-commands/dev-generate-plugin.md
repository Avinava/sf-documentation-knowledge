---
title: "dev generate plugin"
domain: cli-commands
topic: dev-generate-plugin
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.148Z
keywords: [dev, generate, plugin, Generate, new, plugin., Description, Examples, Flags, Aliases]
---

# dev generate plugin

> Generate a new sf plugin.

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