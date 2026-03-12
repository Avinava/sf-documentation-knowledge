---
title: "Install a CLI Plugin"
domain: sfdx-setup
topic: install-a-cli-plugin
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.178Z
estimatedTokens: 372
keywords: [Install, CLI, Plugin, extend, functionality, core, Salesforce, installing, commands, grouped, npm, package, come, variety, providers]
---

# Install a CLI Plugin

> You can extend the functionality of the core Salesforce CLI by installing a plugin,
    which is a set of CLI commands that are grouped in an npm package. The plugin can come from a
    variety of providers: Salesforce, a third party, or even one that you create yourself.
    Salesforce CLI plugin installs work similarly to npm installs.

# Install a CLI Plugin

You can extend the functionality of the core Salesforce CLI by installing a plugin, which is a set of CLI commands that are grouped in an npm package. The plugin can come from a variety of providers: Salesforce, a third party, or even one that you create yourself. Salesforce CLI plugin installs work similarly to npm installs.

An example of a non-core plugin provided by Salesforce is [DevOps Center](https://github.com/salesforcecli/plugin-devops-center). The examples in this topic use this plugin.

The typical way to install a plugin is to specify its long name with the plugins install command. This method installs the latest release of the plugin. The long name is the name property in the plugin’s [package.json](https://github.com/salesforcecli/plugin-devops-center/blob/main/package.json) file, such as @salesforce/plugin-devops-center.

```

```

To install a specific release of a plugin, specify its tag with the @ character after the long name.

```

```

#### See Also

-   [*Salesforce DevOps Center Documentation*](https://help.salesforce.com/s/articleView?id=platform.devops_center_overview.htm&language=en_US "Salesforce DevOps Center Documentation - HTML (New Window)")

-   [*npm Documentation:* npm install](https://docs.npmjs.com/cli/v10/commands/npm-install "npm Documentation: npm install - HTML (New Window)")

-   [*sf Plugin Developer Guide*](https://github.com/salesforcecli/cli/wiki "sf Plugin Developer Guide - HTML (New Window)")

## Code Examples

```
sf plugins install @salesforce/plugin-devops-center
```

```
sf plugins install @salesforce/plugin-devops-center@1.2.27
```
