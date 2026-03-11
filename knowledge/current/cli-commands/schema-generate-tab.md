---
title: "schema generate tab"
domain: cli-commands
topic: schema-generate-tab
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.391Z
keywords: [schema, generate, tab, Generate, metadata, source, files, new, custom, object., Description, Examples, Flags, Aliases]
---

# schema generate tab

> Generate the metadata source files for a new custom tab on a custom object.

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