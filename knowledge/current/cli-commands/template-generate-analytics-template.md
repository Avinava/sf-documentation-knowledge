---
title: "template generate analytics template"
domain: cli-commands
topic: template-generate-analytics-template
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:05.031Z
keywords: [template, generate, analytics, Generate, simple, Analytics, template., Description, Examples, Flags, Aliases]
---

# template generate analytics template

> Generate a simple Analytics template.

## template generate analytics template

Generate a simple Analytics template.

### Description for template generate analytics template

The metadata files associated with the Analytics template must be contained in a parent directory called "waveTemplates" in your package directory. Either run this command from an existing directory of this name, or use the --output-dir flag to generate one or point to an existing one.

### Examples for template generate analytics template

Generate the metadata files for a simple Analytics template file called myTemplate in the force-app/main/default/waveTemplates directory:

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

\-n | \--name NAME

Required

Name of the Analytics template.

Type: option

### Aliases for template generate analytics template

```

```

```

```