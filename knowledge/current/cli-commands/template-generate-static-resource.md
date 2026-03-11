---
title: "template generate static-resource"
domain: cli-commands
topic: template-generate-static-resource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:05.031Z
keywords: [template, generate, static-resource, Generate, static, resource., Description, Examples, Flags, Aliases]
---

# template generate static-resource

> Generate a static resource.

## template generate static-resource

Generate a static resource.

### Description for template generate static-resource

Generates the metadata resource file in the specified directory or the current working directory. Static resource files must be contained in a parent directory called "staticresources" in your package directory. Either run this command from an existing directory of this name, or use the --output-dir flag to create one or point to an existing one.

### Examples for template generate static-resource

Generate the metadata file for a static resource called MyResource in the current directory:

```

```

Similar to previous example, but specifies a MIME type of application/json:

```

```

Generate the resource file in the "force-app/main/default/staticresources" directory:

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

Name of the generated static resource.

This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.

Type: option

\--type TYPE

Optional

Content type (mime type) of the generated static resource.

Must be a valid MIME type such as application/json, application/javascript, application/zip, text/plain, text/css, etc.

Type: option

Default value: application/zip

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

### Aliases for template generate static-resource

```

```

```

```