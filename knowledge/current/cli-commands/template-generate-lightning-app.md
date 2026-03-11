---
title: "template generate lightning app"
domain: cli-commands
topic: template-generate-lightning-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:05.031Z
keywords: [template, generate, lightning, app, Generate, Lightning, App., Description, Examples, Flags, Aliases]
---

# template generate lightning app

> Generate a Lightning App.

## template generate lightning app

Generate a Lightning App.

### Description for template generate lightning app

Generates a Lightning App bundle in the specified directory or the current working directory. The bundle consists of multiple files in a folder with the designated name.

### Examples for template generate lightning app

Generate the metadata files for a Lightning app bundle called "myapp" in the current directory:

```

```

Similar to the previous example, but generate the files in the "force-app/main/default/aura" directory:

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

Name of the generated Lightning App.

The name can be up to 40 characters and must start with a letter.

Type: option

\-t | \--template TEMPLATE

Optional

Template to use for file creation.

Supplied parameter values or default values are filled into a copy of the template.

Type: option

Permissible values are: DefaultLightningApp

Default value: DefaultLightningApp

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

### Aliases for template generate lightning app

```

```

```

```