---
title: "config get"
domain: cli-commands
topic: config-get
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T10:26:31.093Z
keywords: [config, get, Get, value, configuration, variable., Description, Examples, Flags, Aliases]
---

# config get

> Get the value of a configuration variable.

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