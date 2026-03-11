---
title: "template generate visualforce component"
domain: cli-commands
topic: template-generate-visualforce-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.426Z
keywords: [template, generate, visualforce, component, Generate, Visualforce, Component., Description, Examples, Flags, Aliases]
---

# template generate visualforce component

> Generate a Visualforce Component.

## template generate visualforce component

Generate a Visualforce Component.

### Description for template generate visualforce component

The command generates the .Component file and associated metadata file in the specified directory or the current working directory by default.

### Examples for template generate visualforce component

Generate the metadata files for a Visualforce component in the current directory:

```

```

Similar to previous example, but generate the files in the directory "force-app/main/default/components":

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

Name of the generated Visualforce Component.

The name can be up to 40 characters and must start with a letter.

Type: option

\-t | \--template TEMPLATE

Optional

Template to use for file creation.

Supplied parameter values or default values are filled into a copy of the template.

Type: option

Permissible values are: DefaultVFComponent

Default value: DefaultVFComponent

\-d | \--output-dir OUTPUT-DIR

Optional

Directory for saving the created files.

The location can be an absolute path or relative to the current working directory. The default is the current directory.

Type: option

Default value: .

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-l | \--label LABEL

Required

Visualforce Component label.

Type: option

### Aliases for template generate visualforce component

```

```

```

```