---
title: "config set"
domain: cli-commands
topic: config-set
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T09:49:04.638Z
keywords: [config, set, Set, configuration, variables, such, default, org., Description, Examples, Flags, Aliases]
---

# config set

> Set one or more configuration variables, such as your default org.

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