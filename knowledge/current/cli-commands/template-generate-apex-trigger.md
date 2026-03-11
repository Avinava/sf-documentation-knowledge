---
title: "template generate apex trigger"
domain: cli-commands
topic: template-generate-apex-trigger
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.426Z
keywords: [template, generate, apex, trigger, Generate, Apex, trigger., Description, Examples, Flags, Aliases]
---

# template generate apex trigger

> Generate an Apex trigger.

## template generate apex trigger

Generate an Apex trigger.

### Description for template generate apex trigger

Generates the Apex trigger \*.trigger file and associated metadata file. These files must be contained in a parent directory called "triggers" in your package directory. Either run this command from an existing directory of this name, or use the --output-dir flag to generate one or point to an existing one.

If you don't specify the --sobject flag, the .trigger file contains the generic placeholder SOBJECT; replace it with the Salesforce object you want to generate a trigger for. If you don't specify --event, "before insert" is used.

### Examples for template generate apex trigger

Generate two files associated with the MyTrigger Apex trigger (MyTrigger.trigger and MyTrigger.trigger-meta.xml) in the current directory:

```

```

Similar to the previous example, but generate the files in the "force-app/main/default/triggers" directory:

```

```

Generate files for a trigger that fires on the Account object before and after an insert:

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

Name of the generated Apex trigger

The name can be up to 40 characters and must start with a letter.

Type: option

\-t | \--template TEMPLATE

Optional

Template to use for file creation.

Supplied parameter values or default values are filled into a copy of the template.

Type: option

Permissible values are: ApexTrigger

Default value: ApexTrigger

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

\-s | \--sobject SOBJECT

Optional

Salesforce object to generate a trigger on.

Type: option

Default value: SOBJECT

\-e | \--event EVENT

Optional

Events that fire the trigger.

Type: option

Permissible values are: before insert, before update, before delete, after insert, after update, after delete, after undelete

Default value: before insert

### Aliases for template generate apex trigger

```

```

```

```