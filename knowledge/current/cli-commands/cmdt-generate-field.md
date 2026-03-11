---
title: "cmdt generate field"
domain: cli-commands
topic: cmdt-generate-field
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T10:26:31.059Z
keywords: [cmdt, generate, field, Generate, custom, metadata, type, based, provided, type., Description, Examples, Flags, Aliases]
---

# cmdt generate field

> Generate a field for a custom metadata type based on the provided field type.

## cmdt generate field

Generate a field for a custom metadata type based on the provided field type.

### Description for cmdt generate field

Similar to a custom object, a custom metadata type has a list of custom fields that represent aspects of the metadata.

This command creates a metadata file that describes the new custom metadata type field. By default, the file is created in a "fields" directory in the current directory. Use the --output-directory to generate the file in the directory that contains the custom metadata type metdata files, such as "force-app/main/default/objects/MyCmdt\_\_mdt" for the custom metadata type called MyCmdt.

### Examples for cmdt generate field

Generate a metadata file for a custom checkbox field and add the file to the MyCmdt\_\_mdt/fields directory:

```

```

Generate a metadata file for a custom picklist field and add a few values:

```

```

Generate a metadata file for a custom number field and specify 2 decimal places:

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

Unique name for the field.

Type: option

\-f | \--type TYPE

Required

Type of the field.

You can't use this command to create a custom metadata type field of type "Metadata Relationship". Use the Salesforce Setup UI instead.

Type: option

Permissible values are: Checkbox, Date, DateTime, Email, Number, Percent, Phone, Picklist, Text, TextArea, LongTextArea, Url

\-p | \--picklist-values PICKLIST-VALUES

Optional

Picklist values; required for picklist fields.

Type: option

\-s | \--decimal-places DECIMAL-PLACES

Optional

Number of decimal places to use for number or percent fields.

The value must be greater than or equal to zero. Default value is 0.

Type: option

\-l | \--label LABEL

Optional

Label for the field.

Type: option

\-d | \--output-directory OUTPUT-DIRECTORY

Optional

Directory to store newly-created field definition files.

New files are automatically created in the "fields" directory. The location can be an absolute path or relative to the current working directory. The default is the current directory.

Type: option

### Aliases for cmdt generate field

```

```

```

```