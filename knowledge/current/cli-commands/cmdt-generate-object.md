---
title: "cmdt generate object"
domain: cli-commands
topic: cmdt-generate-object
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T09:49:04.603Z
keywords: [cmdt, generate, object, Generate, new, custom, metadata, type, current, project., Description, Examples, Flags, Aliases]
---

# cmdt generate object

> Generate a new custom metadata type in the current project.

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