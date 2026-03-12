---
title: "generate Commands"
domain: bi-dev-guide-cli-reference
topic: generate-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.021Z
estimatedTokens: 355
keywords: [generate, Commands, simple, Analytics, assets, template, Examples, Command]
---

# generate Commands

> Generate simple Analytics assets.

# generate Commands

Generate simple Analytics assets.

-   **[analytics generate template](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_generate_unified.htm#bi_cli_reference_analytics_app_generate_template_unified)**
    Generate a simple app template.

## analytics generate template

Generate a simple app template.

### Examples for analytics generate template

Generate the metadata files for a simple Analytics template file called myTemplate in the force-app/main/default/waveTemplates directory:

```

```

### Command Syntax

sf analytics generate template

\[\--json\]

\[\--flags-dir\]

\[\--api-version APIVERSION\]

\-o TARGETORG

\[\-d OUTPUTDIR\]

\[\-n NAME\]

### Parameters

\--json

Optional

Format output as JSON.

Type: boolean

\--flags-dir

Optional

Import flag values from a directory.

Type: filepath

\--api-version APIVERSION

Optional

Override the API version used for API requests made by this command.

Type: string

\-o TARGETORG

Required

Username or alias of the target org. Not required if the target-org configuration variable is set.

Type: string

\-d | \--output-dir OUTPUTDIR

Optional

The location can be an absolute path or relative to the current working directory. The default is the current directory

Type: filepath

\-n | \--name NAME

Required

The name to give to the generated Analytics template.

Type: string

## Code Examples

```
sf analytics generate template --name myTemplate --output-dir force-app/main/default/waveTemplates
```

## Related Topics

- analytics generate template (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_generate_unified.htm)
