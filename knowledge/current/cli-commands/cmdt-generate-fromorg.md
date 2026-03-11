---
title: "cmdt generate fromorg"
domain: cli-commands
topic: cmdt-generate-fromorg
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T09:49:04.603Z
keywords: [cmdt, generate, fromorg, Generate, custom, metadata, type, its, records, Salesforce, object., Description, Examples, Flags, Aliases]
---

# cmdt generate fromorg

> Generate a custom metadata type and all its records from a Salesforce object.

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