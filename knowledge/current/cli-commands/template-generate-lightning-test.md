---
title: "template generate lightning test"
domain: cli-commands
topic: template-generate-lightning-test
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.426Z
keywords: [template, generate, lightning, test, Generate, Lightning, test., Description, Examples, Flags, Aliases]
---

# template generate lightning test

> Generate a Lightning test.

## template generate lightning test

Generate a Lightning test.

### Description for template generate lightning test

Generates the test in the specified directory or the current working directory. The .resource file and associated metadata file are generated.

### Examples for template generate lightning test

Generate the metadata files for the Lightning test called MyLightningTest in the current directory:

```

```

Similar to the previous example but generate the files in the "force-app/main/default/lightningTests" directory:

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

Name of the generated Lightning Test.

Name of the new Lightning test; can be up to 40 characters and must start with a letter.

Type: option

\-t | \--template TEMPLATE

Optional

Template to use for file creation.

Supplied parameter values or default values are filled into a copy of the template.

Type: option

Permissible values are: DefaultLightningTest

Default value: DefaultLightningTest

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

### Aliases for template generate lightning test

```

```

```

```