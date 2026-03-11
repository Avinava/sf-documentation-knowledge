---
title: "dev generate flag"
domain: cli-commands
topic: dev-generate-flag
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.148Z
keywords: [dev, generate, flag, Generate, existing, command., Description, Examples, Flags]
---

# dev generate flag

> Generate a flag for an existing command.

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