---
title: "schema generate sobject"
domain: cli-commands
topic: schema-generate-sobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.391Z
keywords: [schema, generate, sobject, Generate, metadata, source, files, new, custom, object., Description, Examples, Flags, Aliases]
---

# schema generate sobject

> Generate metadata source files for a new custom object.

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