---
title: "config list"
domain: cli-commands
topic: config-list
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T10:26:31.093Z
keywords: [config, list, List, configuration, variables, you've, previously, set., Description, Examples, Flags, Aliases]
---

# config list

> List the configuration variables that you've previously set.

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