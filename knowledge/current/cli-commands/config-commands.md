---
title: "config Commands"
domain: cli-commands
topic: config-commands
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:03.104Z
estimatedTokens: 1511
keywords: [config, Commands, Get, configuration, variable., get, Description, Examples, Flags, Aliases, list, set, unset]
---

# config Commands

> Get the value of a configuration variable.

# config Commands

Commands to configure Salesforce CLI.

-   **[config get](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_config_commands_unified.htm#cli_reference_config_get_unified)**
    Get the value of a configuration variable.
-   **[config list](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_config_commands_unified.htm#cli_reference_config_list_unified)**
    List the configuration variables that you've previously set.
-   **[config set](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_config_commands_unified.htm#cli_reference_config_set_unified)**
    Set one or more configuration variables, such as your default org.
-   **[config unset](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_config_commands_unified.htm#cli_reference_config_unset_unified)**
    Unset local or global configuration variables.

## config get

Get the value of a configuration variable.

### Description for config get

Run "sf config list" to see the configuration variables you've already set and their level (local or global).

Run "sf config set" to set a configuration variable. For the full list of available configuration variables, see https://developer.salesforce.com/docs/atlas.en-us.sfdx\_setup.meta/sfdx\_setup/sfdx\_dev\_cli\_config\_values.htm.

### Examples for config get

Get the value of the "target-org" configuration variable.

```

```

Get multiple configuration variables and display whether they're set locally or globally:

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

\--verbose

Optional

Display whether the configuration variables are set locally or globally.

Type: boolean

### Aliases for config get

```

```

## config list

List the configuration variables that you've previously set.

### Description for config list

A config variable can be global or local, depending on whether you used the --global flag when you set it. Local config variables apply only to the current project and override global config variables, which apply to all projects. You can set all config variables as environment variables. Environment variables override their equivalent local and global config variables.

The output of this command takes into account your current context. For example, let's say you run this command from a Salesforce DX project in which you've locally set the "target-org" config variable. The command displays the local value, even if you've also set "target-org" globally. If you haven't set the config variable locally, then the global value is displayed, if set. If you set the SF\_TARGET\_ORG environment variable, it's displayed as such and overrides any locally or globally set "target-org" config variable.

For the full list of available configuration variables, see https://developer.salesforce.com/docs/atlas.en-us.sfdx\_setup.meta/sfdx\_setup/sfdx\_dev\_cli\_config\_values.htm.

### Examples for config list

List the global and local configuration variables that apply to your current context:

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

### Aliases for config list

```

```

## config set

Set one or more configuration variables, such as your default org.

### Description for config set

Use configuration variables to set CLI defaults, such as your default org or the API version you want the CLI to use. For example, if you set the "target-org" configuration variable, you don't need to specify it as a "sf deploy metadata" flag if you're deploying to your default org.

Local configuration variables apply only to your current project. Global variables, specified with the --global flag, apply in any Salesforce DX project.

The resolution order if you've set a flag value in multiple ways is as follows:

1\. Flag value specified at the command line.

2\. Local (project-level) configuration variable.

3\. Global configuration variable.

Run "sf config list" to see the configuration variables you've already set and their level (local or global).

If you're setting a single config variable, you don't need to use an equal sign between the variable and value. But you must use the equal sign if setting multiple config variables.

For the full list of available configuration variables, see https://developer.salesforce.com/docs/atlas.en-us.sfdx\_setup.meta/sfdx\_setup/sfdx\_dev\_cli\_config\_values.htm.

### Examples for config set

Set the local target-org configuration variable to an org username:

```

```

Set the local target-org configuration variable to an alias:

```

```

Set the global target-org and target-dev-hub configuration variables using aliases:

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

\-g | \--global

Optional

Set the configuration variables globally, so they can be used from any Salesforce DX project.

Type: boolean

### Aliases for config set

```

```

## config unset

Unset local or global configuration variables.

### Description for config unset

Local configuration variables apply only to your current project. Global configuration variables apply in any Salesforce DX project.

For the full list of available configuration variables, see https://developer.salesforce.com/docs/atlas.en-us.sfdx\_setup.meta/sfdx\_setup/sfdx\_dev\_cli\_config\_values.htm.

### Examples for config unset

Unset the local "target-org" configuration variable:

```

```

Unset multiple configuration variables globally:

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

\-g | \--global

Optional

Unset the configuration variables globally.

Type: boolean

### Aliases for config unset

```

```

## Code Examples

```
sf config get target-org
```

```
sf config get target-org api-version --verbose
```

```
force:config:get
```

```
$ sf config list
```

```
force:config:list
```

## Related Topics

- config get (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_config_commands_unified.htm)
- config list (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_config_commands_unified.htm)
- config set (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_config_commands_unified.htm)
- config unset (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_config_commands_unified.htm)
