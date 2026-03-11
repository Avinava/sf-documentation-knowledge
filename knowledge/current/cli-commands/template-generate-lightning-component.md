---
title: "template generate lightning component"
domain: cli-commands
topic: template-generate-lightning-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:05.031Z
keywords: [template, generate, lightning, component, Generate, bundle, Aura, Lightning, web, component., Description, Examples, Flags, Aliases]
---

# template generate lightning component

> Generate a bundle for an Aura component or a Lightning web component.

## template generate lightning component

Generate a bundle for an Aura component or a Lightning web component.

### Description for template generate lightning component

Generates the bundle in the specified directory or the current working directory. The bundle consists of multiple files in a directory with the designated name. Lightning web components are contained in the directory with name "lwc", Aura components in "aura".

To generate a Lightning web component, pass "--type lwc" to the command. If you don’t specify --type, Salesforce CLI generates an Aura component by default.

### Examples for template generate lightning component

Generate the metadata files for an Aura component bundle in the current directory:

```

```

Generate a Lightning web component bundle in the current directory:

```

```

Generate an Aura component bundle in the "force-app/main/default/aura" directory:

```

```

Generate a Lightning web component bundle in the "force-app/main/default/lwc" directory:

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

Name of the generated Lightning Component.

The name can be up to 40 characters and must start with a letter.

Type: option

\-t | \--template TEMPLATE

Optional

Template to use for file creation.

Supplied parameter values or default values are filled into a copy of the template.

Type: option

Permissible values are: default, analyticsDashboard, analyticsDashboardWithStep

Default value: default

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

\--type TYPE

Optional

Type of the component bundle.

Type: option

Permissible values are: aura, lwc

Default value: aura

### Aliases for template generate lightning component

```

```

```

```