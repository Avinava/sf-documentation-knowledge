---
title: "generate Commands (Deprecated)"
domain: bi-dev-guide-cli-reference
topic: generate-commands-deprecated
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:02.017Z
estimatedTokens: 729
keywords: [generate, Commands, Deprecated, simple, Analytics, assets, template, Examples, Command]
---

# generate Commands (Deprecated)

> Generate simple Analytics assets.

# generate Commands (Deprecated)

Generate simple Analytics assets.

-   **[analytics:generate:template (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_generate.htm#bi_cli_reference_analytics_app_generate_template)**
    Generate a simple app template.

## analytics:generate:template (Deprecated)

Generate a simple app template.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_cli_reference)

#### Warning

As of April 20, 2023, we no longer maintain this section of the command reference. Refer to the [reference information about the sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.") instead, which we update regularly. We keep this reference information about the sfdx\-style commands as-is for historical reference only.

The sfdx\-style commands continue to work the same as before, and any scripts that use the commands won’t break. However, we recommend that you start using the equivalent [sf\-style commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm "This section contains information about the sf commands for the analytics plug-in.").

The reference page for each sfdx command has been updated with information about its equivalent sf command. The page also shows how the flag names have changed between the sfdx and sf commands. Use this information to migrate your scripts.

For background information about this change, read [this blog post](https://developer.salesforce.com/blogs/2022/12/big-improvements-coming-to-the-salesforce-cli), which describes how we've updated many of the existing sfdx commands to use the improvements we made in sf commands. To view all the changes, read the CLI release notes starting with version 7.183.1 on [January 12, 2023](https://github.com/forcedotcom/cli/blob/main/releasenotes/sfdx/README.md#71831-jan-12-2023).

### Examples for analytics:generate:template

Generate the metadata files for a simple Analytics template file called myTemplate in the force-app/main/default/waveTemplates directory:

```

```

### Command Syntax

sfdx analytics:generate:template

\[\--json\]

\[\--apiversion APIVERSION\]

\[\-d DIRECTORY\]

\[\-n NAME\]

### Parameters

\--json

Optional

Format output as JSON.

Type: boolean

\--api-version APIVERSION

Optional

Override the API version used for API requests made by this command.

Type: string

\-d | \--output-dir DIRECTORY

Optional

The location can be an absolute path or relative to the current working director. The default is the current directory

Type: filepath

\-n | \--name NAME

Required

The name to give to the generated Analytics template.

Type: string

## Code Examples

```
sfdx analytics:generate:template --name myTemplate --output-dir force-app/main/default/waveTemplates
```

## Related Topics

- analytics:generate:template (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_generate.htm)
- reference information about the sf-style
                commands (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm)
- sf-style commands (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm)
