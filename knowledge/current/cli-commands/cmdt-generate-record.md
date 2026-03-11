---
title: "cmdt generate record"
domain: cli-commands
topic: cmdt-generate-record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.059Z
keywords: [cmdt, generate, record, Generate, new, given, custom, metadata, type, current, project., Description, Examples, Flags, Aliases]
---

# cmdt generate record

> Generate a new record for a given custom metadata type in the current project.

## cmdt generate record

Generate a new record for a given custom metadata type in the current project.

### Description for cmdt generate record

The custom metadata type must already exist in your project. You must specify a name for the new record. Use name=value pairs to specify the values for the fields, such as MyTextField="some text here" or MyNumberField=32.

### Examples for cmdt generate record

Create a record metadata file for custom metadata type 'MyCMT' with specified values for two custom fields:

```

```

Create a protected record metadata file for custom metadata type 'MyCMT' with a specific label and values specified for two custom fields:

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

\-t | \--type-name TYPE-NAME

Required

API name of the custom metadata type to create a record for; must end in "\_\_mdt".

Type: option

\-n | \--record-name RECORD-NAME

Required

Name of the new record.

Type: option

\-l | \--label LABEL

Optional

Label for the new record.

Type: option

\-p | \--protected PROTECTED

Optional

Protect the record when it's in a managed package.

Protected records can only be accessed by code in the same managed package namespace.

Type: option

Permissible values are: true, false

Default value: false

\-i | \--input-directory INPUT-DIRECTORY

Optional

Directory from which to get the custom metadata type definition from.

Type: option

Default value: force-app/main/default/objects

\-d | \--output-directory OUTPUT-DIRECTORY

Optional

Directory to store newly-created custom metadata record files.

Type: option

Default value: force-app/main/default/customMetadata

### Aliases for cmdt generate record

```

```

```

```