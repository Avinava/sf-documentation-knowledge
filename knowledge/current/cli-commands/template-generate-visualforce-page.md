---
title: "template generate visualforce page"
domain: cli-commands
topic: template-generate-visualforce-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:05.031Z
keywords: [template, generate, visualforce, page, Generate, Visualforce, Page., Description, Examples, Flags, Aliases]
---

# template generate visualforce page

> Generate a Visualforce Page.

## template generate visualforce page

Generate a Visualforce Page.

### Description for template generate visualforce page

The command generates the .Page file and associated metadata file in the specified directory or the current working directory by default.

### Examples for template generate visualforce page

Generate the metadata files for a Visualforce page in the current directory:

```

```

Similar to previous example, but generate the files in the directory "force-app/main/default/pages":

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

Name of the generated Visualforce Page.

The name can be up to 40 characters and must start with a letter.

Type: option

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

Visualforce Page label.

Type: option

### Aliases for template generate visualforce page

```

```

```

```