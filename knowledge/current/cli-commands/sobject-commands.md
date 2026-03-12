---
title: "sobject Commands"
domain: cli-commands
topic: sobject-commands
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:05.736Z
estimatedTokens: 754
keywords: [sobject, Commands, Display, metadata, standard, custom, Tooling, API, describe, Examples, Flags, Aliases]
---

# sobject Commands

> Display the metadata for a standard or custom object or a Tooling API object.

# sobject Commands

Commands to interact with Salesforce objects.

-   **[sobject describe](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_sobject_commands_unified.htm#cli_reference_sobject_describe_unified)**
    Display the metadata for a standard or custom object or a Tooling API object.
-   **[sobject list](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_sobject_commands_unified.htm#cli_reference_sobject_list_unified)**
    List all Salesforce objects of a specified category.

## sobject describe

Display the metadata for a standard or custom object or a Tooling API object.

### Description for sobject describe

The metadata is displayed in JSON format. See this topic for a description of each property: https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce\_api\_calls\_describesobjects\_describesobjectresult.htm.

This command displays metadata for Salesforce objects by default. Use the --use-tooling-api flag to view metadata for a Tooling API object.

### Examples for sobject describe

Display the metadata of the "Account" standard object in your default org:

```

```

Display the metadata of the "MyObject\_\_c" custom object in the org with alias "my-scratch-org":

```

```

Display the metadata of the ApexCodeCoverage Tooling API object in your default org:

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

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-s | \--sobject SOBJECT

Required

API name of the object to describe.

Type: option

\-t | \--use-tooling-api

Optional

Use Tooling API to display metadata for Tooling API objects.

Type: boolean

### Aliases for sobject describe

```

```

## sobject list

List all Salesforce objects of a specified category.

### Description for sobject list

You can list the standard objects, custom objects, or all. The lists include only Salesforce objects, not Tooling API objects.

### Examples for sobject list

List all objects in your default org:

```

```

List only custom objects in the org with alias "my-scratch-org":

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

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-s | \--sobject SOBJECT

Optional

Category of objects to list.

Type: option

Default value: ALL

### Aliases for sobject list

```

```

## Code Examples

```
sf sobject describe --sobject Account
```

```
sf sobject describe --sobject MyObject__c --target-org my-scratch-org
```

```
sf sobject describe --sobject ApexCodeCoverage --use-tooling-api
```

```
force:schema:sobject:describe
```

```
sf sobject list --sobject all
```

## Related Topics

- sobject describe (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_sobject_commands_unified.htm)
- sobject list (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_sobject_commands_unified.htm)
