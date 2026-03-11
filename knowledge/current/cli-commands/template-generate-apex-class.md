---
title: "template generate apex class"
domain: cli-commands
topic: template-generate-apex-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.426Z
keywords: [template, generate, apex, class, Generate, Apex, class., Description, Examples, Flags, Aliases]
---

# template generate apex class

> Generate an Apex class.

## template generate apex class

Generate an Apex class.

### Description for template generate apex class

Generates the Apex \*.cls file and associated metadata file. These files must be contained in a parent directory called "classes" in your package directory. Either run this command from an existing directory of this name, or use the --output-dir flag to generate one or point to an existing one.

### Examples for template generate apex class

Generate two metadata files associated with the MyClass Apex class (MyClass.cls and MyClass.cls-meta.xml) in the current directory:

```

```

Similar to previous example, but generates the files in the "force-app/main/default/classes" directory:

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

Name of the generated Apex class.

The name can be up to 40 characters and must start with a letter.

Type: option

\-t | \--template TEMPLATE

Optional

Template to use for file creation.

Supplied parameter values or default values are filled into a copy of the template.

Type: option

Permissible values are: ApexException, ApexUnitTest, BasicUnitTest, DefaultApexClass, InboundEmailService

Default value: DefaultApexClass

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

### Aliases for template generate apex class

```

```

```

```