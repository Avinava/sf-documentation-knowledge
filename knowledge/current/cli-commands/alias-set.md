---
title: "alias set"
domain: cli-commands
topic: alias-set
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T09:49:04.538Z
keywords: [alias, set, Set, aliases, local, computer., Description, Examples, Flags, Aliases]
---

# alias set

> Set one or more aliases on your local computer.

## alias set

Set one or more aliases on your local computer.

### Description for alias set

Aliases are user-defined short names that make it easier to use the CLI. For example, users often set an alias for a scratch org usernames because they're long and unintuitive. Check the --help of a CLI command to determine where you can use an alias.

You can associate an alias with only one value at a time. If you set an alias multiple times, the alias points to the most recent value. Aliases are global; after you set an alias, you can use it in any Salesforce DX project on your computer.

Use quotes to specify an alias value that contains spaces. You typically use an equal sign to set your alias, although you don't need it if you're setting a single alias in a command.

### Examples for alias set

Set an alias for a scratch org username:

```

```

Set multiple aliases with a single command:

```

```

Set an alias that contains spaces:

```

```

Set a single alias without using an equal sign:

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

### Aliases for alias set

```

```