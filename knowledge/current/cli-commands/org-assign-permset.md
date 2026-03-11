---
title: "org assign permset"
domain: cli-commands
topic: org-assign-permset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, assign, permset, Assign, permission, set, users., Description, Examples, Flags]
---

# org assign permset

> Assign a permission set to one or more org users.

## org assign permset

Assign a permission set to one or more org users.

### Description for org assign permset

To specify an alias for the --target-org or --on-behalf-of flags, use the CLI username alias, such as the one you set with the "alias set" command. Don't use the value of the Alias field of the User Salesforce object for the org user.

To assign multiple permission sets, either set multiple --name flags or a single --name flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to --on-behalf-of.

### Examples for org assign permset

Assign two permission sets called DreamHouse and CloudHouse to original admin user of your default org:

```

```

Assign the Dreamhouse permission set to the original admin user of the org with alias "my-scratch":

```

```

Assign the Dreamhouse permission set to the specified list of users of your default org:

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

\-n | \--name NAME

Required

Permission set to assign.

Type: option

\-b | \--on-behalf-of ON-BEHALF-OF

Optional

Username or alias to assign the permission set to.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option