---
title: "examples Commands"
domain: comm-cli-reference
topic: examples-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.924Z
estimatedTokens: 414
keywords: [examples, Commands, Convert, repo, SFDX, scratch, org, commerce, Command]
---

# examples Commands

> Convert repo examples to SFDX scratch org.

# examples Commands

-   **[commerce:examples:convert](atlas.en-us.comm_cli_reference.meta/comm_cli_reference/comm_cli_reference_commerce_examples.htm#comm_cli_reference_commerce_examples_convert)**
    Convert repo examples to SFDX scratch org.

## commerce:examples:convert

Convert repo examples to SFDX scratch org.

### Examples for commerce:examples:convert

sfdx commerce:examples:convert -f store-scratch-def.json

### Command Syntax

sfdx commerce:examples:convert

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-f DEFINITIONFILE\]

\[\-d OUTPUTDIR\]

\[\-p SOURCEPATH\]

\[\-o TYPE\]

\[\-y\]

\[\-n STORE-NAME\]

### Parameters

\--json

Optional

Format output as JSON.

Type: boolean

\--loglevel LOGLEVEL

Optional

The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.

Type: enum

Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL

Default value: warn

\-f | \--definitionfile DEFINITIONFILE

Optional

Config file.

Type: filepath

Default value: ~/.commerce/config/store-scratch-def.json

\-d | \--outputdir OUTPUTDIR

Optional

Directory to output the conversion.

Type: string

Default value: ~/.commerce/force-app

\-p | \--sourcepath SOURCEPATH

Optional

Files to convert.

Type: string

\-o | \--type TYPE

Optional

The type of store you want to create.

Type: string

Permissible values are: b2c, b2b

Default value: b2c

\-y | \--prompt

Optional

If there is a file difference detected, prompt before overwriting file.

Type: boolean

\-n | \--store-name STORE-NAME

Required

Name of the site to create.

Type: string

Default value: 1commerce

## Related Topics

- commerce:examples:convert (atlas.en-us.comm_cli_reference.meta/comm_cli_reference/comm_cli_reference_commerce_examples.htm)
