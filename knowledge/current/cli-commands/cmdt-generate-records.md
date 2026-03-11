---
title: "cmdt generate records"
domain: cli-commands
topic: cmdt-generate-records
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.059Z
keywords: [cmdt, generate, records, Generate, new, custom, metadata, type, CSV, file., Description, Examples, Flags, Aliases]
---

# cmdt generate records

> Generate new custom metadata type records from a CSV file.

## cmdt generate records

Generate new custom metadata type records from a CSV file.

### Description for cmdt generate records

The custom metadata type must already exist in your project. By default, the Name column is used to determine the record name; use the --name-column flag to specify a different column.

### Examples for cmdt generate records

Generate record metadata files from values in a CSV file for the custom metadata type MyCmdt. Use 'Name' as the column that specifies the record name:

```

```

Generate record metadata files from a CSV file in the directory different from the default, and use 'PrimaryKey' as the column that specifies the record name:

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

\-f | \--csv CSV

Required

Pathname of the CSV file.

Type: option

\-t | \--type-name TYPE-NAME

Required

API name of the custom metadata type to create a record for.

The '\_\_mdt' suffix is appended to the end of the name if it's omitted.

Type: option

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

\-n | \--name-column NAME-COLUMN

Optional

Column used to determine the name of the record.

Type: option

Default value: Name

### Aliases for cmdt generate records

```

```

```

```