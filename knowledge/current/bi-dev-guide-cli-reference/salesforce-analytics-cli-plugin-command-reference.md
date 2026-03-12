---
title: "Salesforce Analytics CLI Plugin Command Reference"
domain: bi-dev-guide-cli-reference
topic: salesforce-analytics-cli-plugin-command-reference
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:01.775Z
estimatedTokens: 678
keywords: [Salesforce, Analytics, CLI, Plugin, Command, commands, their, flags, Getting, Started]
---

# Salesforce Analytics CLI Plugin Command Reference

> The command reference contains information about the Salesforce CLI commands for the
        Analytics plugin and their flags.

# Salesforce Analytics CLI Plugin Command Reference

The command reference contains information about the Salesforce CLI commands for the Analytics plugin and their flags.

The sf section contains information about the sf\-style commands, which became generally available in July 2023. The sfdx section contains information about the sfdx\-style commands, which are deprecated. We no longer maintain the sfdx information and keep it in this guide for historical reference only. See this [developer blog post](https://developer.salesforce.com/blogs/2023/07/salesforce-cli-sf-v2-is-here) for more information about Salesforce CLI sf (v2).

## Getting Started

The Analytics plug-in commands perform Analytics related actions, like creating apps and updating templates, in your target org. You must be authenticated into your scratch org from a generated project for the Analytics plug-in commands to work.

Create a project:

```

```

Create a Developer edition scratch org using your default dev hub and give the scratch org an alias:

```

```

Set the target org default for all sf commands:

```

```

Open your scratch org:

```

```

View the help for analytics commands:

```

```

For information about installing the Salesforce CLI, see the [Salesforce DX Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm "HTML (New Window)").

For information about installing the Analytics CLI plugin, see [Install the Analytics CLI Plugin](https://help.salesforce.com/articleView?id=bi_cli_analytics_plugin_install.htm&language=en_US "HTML (New Window)").

For information about Salesforce CLI changes, see the [Salesforce CLI Release Notes](https://developer.salesforce.com/media/salesforce-cli/releasenotes.html "HTML (New Window)").

-   **[sf](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics_unified.htm)**
    This section contains information about the sf commands for the analytics plug-in.
-   **[sfdx (Deprecated)](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics.htm)**
    This section contains information about the deprecated sfdx\-style commands for the analytics plug-in.
-   **[Help for Salesforce CLI Commands](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_help.htm)**
    The \-h | \--help parameter shows details about Salesforce CLI topics and their commands.
-   **[CLI Deprecation Policy](atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/sfdx_dev_cli_deprecation.htm)**
    Salesforce deprecates CLI commands and flags when, for example, the underlying API changes.

## Code Examples

```
sf project generate --name MyAnalyticsWork
```

```
sf org create scratch --edition developer --alias my-scratch-org
```

```
sf config set target-org my-scratch-org
```

```
sf org open [-o my-scratch-org]
```

```
sf analytics --help
```

## Related Topics

- sfdx (Deprecated) (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_analytics.htm)
- Help for Salesforce CLI Commands (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/bi_cli_reference_help.htm)
- CLI Deprecation Policy (atlas.en-us.bi_dev_guide_cli_reference.meta/bi_dev_guide_cli_reference/sfdx_dev_cli_deprecation.htm)
