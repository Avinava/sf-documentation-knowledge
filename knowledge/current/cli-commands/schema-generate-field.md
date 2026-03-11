---
title: "schema generate field"
domain: cli-commands
topic: schema-generate-field
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.991Z
keywords: [schema, generate, field, Generate, metadata, source, files, new, custom, specified, object., Description, Examples, Flags, Aliases]
---

# schema generate field

> Generate metadata source files for a new custom field on a specified object.

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