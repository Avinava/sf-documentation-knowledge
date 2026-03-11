---
title: "template generate lightning interface"
domain: cli-commands
topic: template-generate-lightning-interface
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:05.031Z
keywords: [template, generate, lightning, interface, Generate, Lightning, Interface., Description, Examples, Flags, Aliases]
---

# template generate lightning interface

> Generate a Lightning Interface.

## template generate lightning interface

Generate a Lightning Interface.

### Description for template generate lightning interface

Generates a Lightning Interface bundle in the specified directory or the current working directory. The bundle consists of multiple files in a folder with the designated name.

### Examples for template generate lightning interface

Generate the metadata files for a Lightning interface bundle called "myinterface" in the current directory:

```

```

Similar to the previous example but generate the files in the "force-app/main/default/aura" directory:

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

Name of the generated Lightning Interface.

The name can be up to 40 characters and must start with a letter.

Type: option

\-t | \--template TEMPLATE

Optional

Template to use for file creation.

Supplied parameter values or default values are filled into a copy of the template.

Type: option

Permissible values are: DefaultLightningIntf

Default value: DefaultLightningIntf

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

### Aliases for template generate lightning interface

```

```

```

```