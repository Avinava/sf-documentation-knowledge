---
title: "config unset"
domain: cli-commands
topic: config-unset
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T09:49:04.638Z
keywords: [config, unset, Unset, local, global, configuration, variables., Description, Examples, Flags, Aliases]
---

# config unset

> Unset local or global configuration variables.

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