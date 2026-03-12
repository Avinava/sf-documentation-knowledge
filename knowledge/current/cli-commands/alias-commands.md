---
title: "alias Commands"
domain: cli-commands
topic: alias-commands
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:02.969Z
estimatedTokens: 787
keywords: [alias, Commands, List, aliases, currently, set, local, computer., list, Description, Examples, Flags, Aliases, unset]
---

# alias Commands

> List all aliases currently set on your local computer.

# alias Commands

Use the alias commands to manage your aliases.

-   **[alias list](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_alias_commands_unified.htm#cli_reference_alias_list_unified)**
    List all aliases currently set on your local computer.
-   **[alias set](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_alias_commands_unified.htm#cli_reference_alias_set_unified)**
    Set one or more aliases on your local computer.
-   **[alias unset](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_alias_commands_unified.htm#cli_reference_alias_unset_unified)**
    Unset one or more aliases that are currently set on your local computer.

## alias list

List all aliases currently set on your local computer.

### Description for alias list

Aliases are global, which means that you can use all the listed aliases in any Salesforce DX project on your computer.

### Examples for alias list

List all the aliases you've set:

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

### Aliases for alias list

```

```

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

## alias unset

Unset one or more aliases that are currently set on your local computer.

### Description for alias unset

Aliases are global, so when you unset one it's no longer available in any Salesforce DX project.

### Examples for alias unset

Unset an alias:

```

```

Unset multiple aliases with a single command:

```

```

Unset all aliases:

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

\-a | \--all

Optional

Unset all currently set aliases.

Type: boolean

\-p | \--no-prompt

Optional

Don't prompt the user for confirmation when unsetting all aliases.

Type: boolean

### Aliases for alias unset

```

```

## Code Examples

```
sf alias list
```

```
force:alias:list
```

```
sf alias set my-scratch-org=test-sadbiytjsupn@example.com
```

```
sf alias set my-scratch-org=test-sadbiytjsupn@example.com my-other-scratch-org=test-ss0xut7txzxf@example.com
```

```
sf alias set my-alias='alias with spaces'
```

## Related Topics

- alias list (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_alias_commands_unified.htm)
- alias set (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_alias_commands_unified.htm)
- alias unset (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_alias_commands_unified.htm)
