---
title: "cmdt Commands"
domain: cli-commands
topic: cmdt-commands
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:03.056Z
estimatedTokens: 3158
keywords: [cmdt, Commands, Generate, field, custom, metadata, based, provided, type., generate, Description, Examples, Flags, Aliases, fromorg, record, records]
---

# cmdt Commands

> Generate a field for a custom metadata type based on the provided field type.

# cmdt Commands

Generate custom metadata types and their records.

-   **[cmdt generate field](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_cmdt_commands_unified.htm#cli_reference_cmdt_generate_field_unified)**
    Generate a field for a custom metadata type based on the provided field type.
-   **[cmdt generate fromorg](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_cmdt_commands_unified.htm#cli_reference_cmdt_generate_fromorg_unified)**
    Generate a custom metadata type and all its records from a Salesforce object.
-   **[cmdt generate object](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_cmdt_commands_unified.htm#cli_reference_cmdt_generate_object_unified)**
    Generate a new custom metadata type in the current project.
-   **[cmdt generate record](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_cmdt_commands_unified.htm#cli_reference_cmdt_generate_record_unified)**
    Generate a new record for a given custom metadata type in the current project.
-   **[cmdt generate records](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_cmdt_commands_unified.htm#cli_reference_cmdt_generate_records_unified)**
    Generate new custom metadata type records from a CSV file.

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

## cmdt generate fromorg

Generate a custom metadata type and all its records from a Salesforce object.

### Description for cmdt generate fromorg

Use this command to migrate existing custom objects or custom settings in an org to custom metadata types. If a field of the Salesforce object is of an unsupported type, the field type is automatically converted to text. Run "sf cmdt generate field --help" to see the list of supported cmdt field types, listed in the --type flag summary. Use the --ignore-unsupported to ignore these fields.

This command creates the metadata files that describe the new custom metadata type and its fields in the "force-app/main/default/objects/TypeName\_\_mdt" directory by default, where "TypeName" is the value of the required --dev-name flag. Use --type-output-directory to create them in a different directory.

### Examples for cmdt generate fromorg

Generate a custom metadata type from a custom object called MySourceObject\_\_c in your default org:

```

```

Generate a custom metadata type from a custom object in an org with alias my-scratch-org; ignore unsupported field types instead of converting them to text:

```

```

Generate a protected custom metadata type from a custom object:

```

```

Generate a protected custom metadata type from a custom setting with a specific singular and plural label:

```

```

Generate a custom metadata type and put the resulting metadata files in the specified directory:

```

```

Generate a custom metadata type and put the resulting record metadata file(s) in the specified directory:

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

\-n | \--dev-name DEV-NAME

Required

Name of the custom metadata type.

Type: option

\-l | \--label LABEL

Optional

Label for the custom metadata type.

Type: option

\-p | \--plural-label PLURAL-LABEL

Optional

Plural version of the label value; if blank, uses label.

Type: option

\-v | \--visibility VISIBILITY

Optional

Who can see the custom metadata type.

For more information on what each option means, see this topic in Salesforce Help: https://help.salesforce.com/s/articleView?id=sf.custommetadatatypes\_ui\_create.htm&type=5.

Type: option

Permissible values are: PackageProtected, Protected, Public

Default value: Public

\-s | \--sobject SOBJECT

Required

API name of the source Salesforce object used to generate the custom metadata type.

Type: option

\-i | \--ignore-unsupported

Optional

Ignore unsupported field types.

In this context, "ignore" means that the fields aren't created. The default behavior is to create fields of type text and convert the field values to text.

Type: boolean

\-d | \--type-output-directory TYPE-OUTPUT-DIRECTORY

Optional

Directory to store newly-created custom metadata type files.

Type: option

Default value: force-app/main/default/objects

\-r | \--records-output-dir RECORDS-OUTPUT-DIR

Optional

Directory to store newly-created custom metadata record files.

Type: option

Default value: force-app/main/default/customMetadata

### Aliases for cmdt generate fromorg

```

```

## cmdt generate object

Generate a new custom metadata type in the current project.

### Description for cmdt generate object

This command creates a metadata file that describes the new custom metadata type. By default, the file is created in the MyCustomType\_\_mdt directory in the current directory, where MyCustomType is the value of the required --type-name flag. Use the --output-directory to generate the file in a package directory with other custom metadata types, such as "force-app/main/default/objects".

### Examples for cmdt generate object

Generate a custom metadata type with developer name 'MyCustomType'; this name is also used as the label:

```

```

Generate a protected custom metadata type with a specific label:

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

\-n | \--type-name TYPE-NAME

Required

Unique object name for the custom metadata type.

The name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.

Type: option

\-l | \--label LABEL

Optional

Label for the custom metadata type.

Type: option

\-p | \--plural-label PLURAL-LABEL

Optional

Plural version of the label value; if blank, uses label.

Type: option

\-v | \--visibility VISIBILITY

Optional

Who can see the custom metadata type.

For more information on what each option means, see this topic in Salesforce Help: https://help.salesforce.com/s/articleView?id=sf.custommetadatatypes\_ui\_create.htm&type=5.

Type: option

Permissible values are: PackageProtected, Protected, Public

Default value: Public

\-d | \--output-directory OUTPUT-DIRECTORY

Optional

Directory to store the newly-created custom metadata type files

The location can be an absolute path or relative to the current working directory. The default is the current directory.

Type: option

### Aliases for cmdt generate object

```

```

```

```

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

## Code Examples

```
sf cmdt generate field --name MyCheckboxField --type Checkbox --output-directory force-app/main/default/objects/MyCmdt__mdt
```

```
sf cmdt generate field --name MyPicklistField --type Picklist --picklist-values A --picklist-values B --picklist-values C --output-directory force-app/main/default/objects/MyCmdt__mdt
```

```
sf cmdt generate field --name MyNumberField --type Number --decimal-places 2 --output-directory force-app/main/default/objects/MyCmdt__mdt
```

```
force:cmdt:field:create
```

```
cmdt:field:create
```

## Related Topics

- cmdt generate field (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_cmdt_commands_unified.htm)
- cmdt generate fromorg (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_cmdt_commands_unified.htm)
- cmdt generate object (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_cmdt_commands_unified.htm)
- cmdt generate record (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_cmdt_commands_unified.htm)
- cmdt generate records (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_cmdt_commands_unified.htm)
