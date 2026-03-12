---
title: "info Commands"
domain: cli-commands
topic: info-commands
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T05:14:03.235Z
estimatedTokens: 311
keywords: [info, Commands, Display, Salesforce, CLI, release, notes, command, line., releasenotes, display, Description, Examples, Flags, Aliases]
---

# info Commands

> Display Salesforce CLI release notes on the command line.

# info Commands

Access Salesforce CLI information from the command line.

-   **[info releasenotes display](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_info_commands_unified.htm#cli_reference_info_releasenotes_display_unified)**
    Display Salesforce CLI release notes on the command line.

## info releasenotes display

Display Salesforce CLI release notes on the command line.

### Description for info releasenotes display

By default, this command displays release notes for the currently installed CLI version on your computer. Use the --version flag to view release notes for a different release.

### Examples for info releasenotes display

Display release notes for the currently installed CLI version:

```

```

Display release notes for CLI version 7.120.0:

```

```

Display release notes for the CLI version that corresponds to a tag (stable, stable-rc, latest, latest-rc, rc):

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

\-v | \--version VERSION

Optional

CLI version or tag for which to display release notes.

Type: option

### Aliases for info releasenotes display

```

```

## Code Examples

```
sf info releasenotes display
```

```
sf info releasenotes display --version 7.120.0
```

```
sf info releasenotes display --version latest
```

## Related Topics

- info releasenotes display (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_info_commands_unified.htm)
