---
title: "schema Commands"
domain: cli-commands
topic: schema-commands
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:03.565Z
estimatedTokens: 1811
keywords: [schema, Commands, Generate, metadata, source, files, new, custom, field, specified, object., generate, Description, Examples, Flags, Aliases, platformevent, sobject, tab]
---

# schema Commands

> Generate metadata source files for a new custom field on a specified object.

# schema Commands

Generate metadata files.

-   **[schema generate field](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_schema_commands_unified.htm#cli_reference_schema_generate_field_unified)**
    Generate metadata source files for a new custom field on a specified object.
-   **[schema generate platformevent](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_schema_commands_unified.htm#cli_reference_schema_generate_platformevent_unified)**
    Generate metadata source files for a new platform event.
-   **[schema generate sobject](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_schema_commands_unified.htm#cli_reference_schema_generate_sobject_unified)**
    Generate metadata source files for a new custom object.
-   **[schema generate tab](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_schema_commands_unified.htm#cli_reference_schema_generate_tab_unified)**
    Generate the metadata source files for a new custom tab on a custom object.

## schema generate field

Generate metadata source files for a new custom field on a specified object.

### Description for schema generate field

This command is interactive and must be run in a Salesforce DX project directory. You're required to specify the field's label with the "--label" flag. The command uses this label to provide intelligent suggestions for other field properties, such as its API name.

You can generate a custom field on either a standard object, such as Account, or a custom object. In both cases, the source files for the object must already exist in your local project before you run this command. If you create a relationship field, the source files for the parent object must also exist in your local directory. Use the command "sf metadata retrieve -m CustomObject:<object>" to retrieve source files for both standard and custom objects from your org. To create a custom object, run the "sf generate metadata sobject" command or use the Object Manager UI in your Salesforce org.

### Examples for schema generate field

Create a field with the specified label; the command prompts you for the object:

```

```

Specify the local path to the object's folder:

```

```

### Flags

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-l | \--label LABEL

Required

The field's label.

Type: option

\-o | \--object OBJECT

Optional

The directory that contains the object's source files.

The object source files in your local project are grouped in a directoy with the same name as the object. Custom object names always end in "\_\_c". An example of the object directory for the Account standard object is "force-app/main/default/objects/Account" An example custom object directory is "force-app/main/default/objects/MyObject\_\_c"

If you don't specify this flag, the command prompts you to choose from your local objects.

Type: option

### Aliases for schema generate field

```

```

## schema generate platformevent

Generate metadata source files for a new platform event.

### Description for schema generate platformevent

This command is interactive and must be run in a Salesforce DX project directory. You're required to specify the event's label with the "--label" flag. The command uses this label to provide intelligent suggestions for other event properties, such as its API name.

### Examples for schema generate platformevent

Create a platform event with the specified label:

```

```

### Flags

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-l | \--label LABEL

Required

The platform event's label.

Type: option

### Aliases for schema generate platformevent

```

```

## schema generate sobject

Generate metadata source files for a new custom object.

### Description for schema generate sobject

This command is interactive and must be run in a Salesforce DX project directory. You're required to specify the object's label with the "--label" flag. The command uses this label to provide intelligent suggestions for other object properties, such as its API name and plural label.

All Salesforce objects are required to have a Name field, so this command also prompts you for the label and type of the Name field. Run the "sf metadata generate field" command to create additional fields for the object.

To reduce the number of prompts, use the "--use-default-features" flag to automatically enable some features, such as reporting and search on the object.

### Examples for schema generate sobject

Create a custom object with the specified label and be prompted for additional information:

```

```

Create a custom object and enable optional features without prompting:

```

```

### Flags

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-l | \--label LABEL

Required

The custom object's label.

Type: option

\-f | \--use-default-features

Optional

Enable all optional features without prompting.

Enables these features:

\- Search: Allows users to find the custom object's records when they search, including SOSL.

\- Feeds: Enables feed tracking.

\- Reports: Allows reporting of the data in the custom object records.

\- History: Enables object history tracking.

\- Activities: Allows users to associate tasks and scheduled calendar events related to the custom object records.

\- Bulk API: With Sharing and Streaming API, classifies the custom object as an Enterprise Application object.

\- Sharing: With Bulk API and Streaming API, classifies the custom object as an Enterprise Application object.

\- Streaming API: With Bulk API and Sharing, classifies the custom object as an Enterprise Application object.

Type: boolean

### Aliases for schema generate sobject

```

```

## schema generate tab

Generate the metadata source files for a new custom tab on a custom object.

### Description for schema generate tab

Custom tabs let you display custom object data or other web content in Salesforce. Custom tabs appear in Salesforce as an item in the app’s navigation bar and in the App Launcher.

This command must be run in a Salesforce DX project directory. You must pass all required information to it with the required flags. The source files for the custom object for which you're generating a tab don't need to exist in your local project.

### Examples for schema generate tab

Create a tab on the \`MyObject\_\_c\` custom object:

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

\-o | \--object OBJECT

Required

API name of the custom object you're generating a tab for.

The API name for a custom object always ends in \`\_\_c\`, such as \`MyObject\_\_c\`.

Type: option

\-d | \--directory DIRECTORY

Required

Path to a "tabs" directory that will contain the source files for your new tab.

Type: option

\-i | \--icon ICON

Required

Number from 1 to 100 that specifies the color scheme and icon for the custom tab.

See https://lightningdesignsystem.com/icons/#custom for the available icons.

Type: option

Default value: 1

### Aliases for schema generate tab

```

```

## Code Examples

```
sf schema generate field --label "My Field"
```

```
sf schema generate field --label "My Field" --object force-app/main/default/objects/MyObject__c
```

```
generate:metadata:field
```

```
sf schema generate platformevent --label "My Platform Event"
```

```
generate:metadata:platformevent
```

## Related Topics

- schema generate field (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_schema_commands_unified.htm)
- schema generate platformevent (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_schema_commands_unified.htm)
- schema generate sobject (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_schema_commands_unified.htm)
- schema generate tab (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_schema_commands_unified.htm)
