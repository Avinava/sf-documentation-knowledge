---
title: "Salesforce CLI Plugins"
domain: sfdx-setup
topic: salesforce-cli-plugins
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:09.351Z
estimatedTokens: 2018
keywords: [Salesforce, CLI, Plugins, consists, npm, Node.js, package, manager, @salesforce, multiple, plugins—also, packages—that, contain, commands, JavaScript, Typescript, runtime, environment, supports, execution, outside, browser, core, functionality, comes]
---

> Salesforce CLI consists of an npm (Node.js package manager) package called @salesforce/cli and multiple plugins—also npm
    packages—that contain commands. Node.js is a JavaScript (also Typescript) runtime
    environment that supports execution outside of a browser. Most of the core functionality that
    Salesforce CLI provides comes from plugins.

# Salesforce CLI Plugins

Salesforce CLI consists of an npm (Node.js package manager) package called @salesforce/cli and multiple plugins—also npm packages—that contain commands. Node.js is a JavaScript (also Typescript) runtime environment that supports execution outside of a browser. Most of the core functionality that Salesforce CLI provides comes from plugins.

Some plugins are automatically installed when you install Salesforce CLI. These core plugins contain commands that support source-driven development, such as:

-   Create and manage scratch orgs and sandboxes: The [plugin-org](https://github.com/salesforcecli/plugin-org) plugin contains commands such as org create scratch and org delete sandbox
-   Deploy and retrieve metadata between the org and your local project: The [plugin-deploy-retrieve](https://github.com/salesforcecli/plugin-deploy-retrieve) plugin contains commands such as project deploy start and project retrieve preview.
-   Authorize orgs: The [plugin-auth](https://github.com/salesforcecli/plugin-auth) plugin contains commands such as org login web and org logout.
-   Work with test data: The [plugin-data](https://github.com/salesforcecli/plugin-data) plugin contains commands such as data export bulk, data query, and data import tree.
-   Create and manage scratch org users: The [plugin-user](https://github.com/salesforcecli/plugin-user) plugin contains commands such as org create user and org generate password.
-   Create, preview, and test agents: The [plugin-agent](https://github.com/salesforcecli/plugin-agent) plugin contains commands such as agent create and agent test run.

Some plugins are installed just when you need them, rather than being included automatically in a Salesforce CLI installation. When you run a command in a "just-in-time" (JIT) plugin for the first time, Salesforce CLI installs the latest released version of the plugin and then runs the command. The plugin installation happens automatically, although we display a little message so you know what's going on. From then on, run any of the commands contained in the plugin as usual. When you next update Salesforce CLI with sf update, if the JIT plugin has released a new version, then it's also updated. These JIT plugins contain specialized commands that aren’t typically used by most CLI users, such as:

-   Create and manage scratch org snapshots and shapes: The [plugin-signups](https://github.com/salesforcecli/plugin-signups) plugin contains commands such as org create shape and org delete snapshot.
-   Scan and evaluate Apex, LWC, Flow, and Visualforce code for potential issues: The [code-analyzer](https://github.com/forcedotcom/code-analyzer) plugin contains commands such as code-analyzer rules and code-analyzer run.
-   Run Flow tests in your org and view the results: The [plugin-flow](https://github.com/salesforcecli/plugin-flow) contains commands such as flow run test and flow get test.

To determine whether a plugin is core or JIT, check the [package.json](https://github.com/salesforcecli/cli/blob/main/package.json) file of the aggregator @salesforce/cli plugin:

-   Core plugins are listed in the oclif:plugins section.
-   JIT plugins are listed in the oclif:jitPlugins section.

See the [Salesforce CLI Status](https://github.com/salesforcecli/status) page for the full list of core and JIT plugins, their GitHub repositories, and their status.

You can also install more plugins, such as [CRM Analytics](https://help.salesforce.com/s/articleView?id=analytics.bi_dev_tools_cli_analytics_plugin.htm&type=5&language=en_US), to incorporate other Salesforce features into your development environment. You can also develop your own plugin to add your custom functionality to Salesforce CLI. See [Salesforce CLI Plugin Developer Guide.](https://developer.salesforce.com/docs/platform/salesforce-cli-plugin/guide/conceptual-overview.html)

By default, the latest versions of the core plugins are installed when you both install Salesforce CLI for the first time and subsequently update. See [What Happens When You Update Salesforce CLI?](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_update_cli.htm#update-cli) for details about how non-core plugins are updated.

To determine the versions of the plugins currently installed in your CLI, run:

```

```

The command displays information such as this sample output.

```

```

As shown in the sample output, if a plugin has (core) next to its name, it’s the version bundled with the CLI. If you install a specific version of the plugin, or it was automatically installed as a JIT plugin, its version number or tag is displayed instead. For example, the code-analyzer commands are contained in the JIT code-analyzer plugin and the sample output indicates that version 5.11.0 is installed.

The end of the plugins --core output also displays the available JIT plugins that haven’t yet been installed.

-   **[Install a CLI Plugin](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_plugin.htm)**
    You can extend the functionality of the core Salesforce CLI by installing a plugin, which is a set of CLI commands that are grouped in an npm package. The plugin can come from a variety of providers: Salesforce, a third party, or even one that you create yourself. Salesforce CLI plugin installs work similarly to npm installs.
-   **[Install Other Versions of Salesforce CLI Plugins](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_plugin_version.htm)**
    Sometimes you want to use a specific version of a plugin. For example, let’s say Salesforce fixed a bug in the apex run command. The fix has been released in the associated plugin, but Salesforce hasn’t yet included that plugin release in the current Salesforce CLI. But you want to test the bug fix in your local development environment. Follow these steps to install the version of the plugin that has the fix.
-   **[Install Trusted Unsigned Plugins Automatically](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_allowlist.htm)**
    When you install a plugin with the sf plugins install command, Salesforce CLI first verifies its digital signature. If the plugin provides a valid signature, the CLI installs it. Otherwise, Salesforce CLI doesn't install it until you answer a warning prompt and acknowledge that you understand the risks. This process works well when you install a plugin interactively at the command line, but can prevent a batch job from completing. To automatically install a plugin without prompting, even when unsigned, create an allowlist file on your local file system and add the plugins you trust.
-   **[Discover Salesforce Plugins](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_other_plugins.htm)**
    Check out these other plugins that work with specific Salesforce features. These plugins are created by Salesforce.
-   **[Quickly Uninstall All Non-Core Plugins](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_reset_plugins.htm)**
    Sometimes you want to quickly uninstall all the non-core Salesforce CLI plugins that were installed after you first installed the CLI.

#### See Also

-   [Install Other Versions of Salesforce CLI Plugins](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_plugin_version.htm "Sometimes you want to use a specific version of a plugin. For example, let’s say Salesforce fixed a bug in the apex run command. The fix has been released in the associated plugin, but Salesforce hasn’t yet included that plugin release in the current Salesforce CLI. But you want to test the bug fix in your local development environment. Follow these steps to install the version of the plugin that has the fix.")

-   [Discover Salesforce Plugins](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_other_plugins.htm "Check out these other plugins that work with specific Salesforce features. These plugins are created by Salesforce.")

-   [Salesforce CLI Plugin Developer Guide](https://github.com/salesforcecli/cli/wiki/Quick-Introduction-to-Developing-sf-Plugins "Salesforce CLI Plugin Developer Guide - HTML (New Window)")

## Code Examples

```
sf plugins --core
```

```
@oclif/plugin-autocomplete 3.2.41 (core)
@oclif/plugin-commands 4.1.40 (core)
@oclif/plugin-help 6.2.38 (core)
@oclif/plugin-not-found 3.2.75 (core)
@oclif/plugin-plugins 5.4.58 (core)
@oclif/plugin-search 1.2.39 (core)
@oclif/plugin-update 4.7.23 (core)
@oclif/plugin-version 2.2.38 (core)
@oclif/plugin-warn-if-update-available 3.1.55 (core)
@oclif/plugin-which 3.2.44 (core)
agent 1.32.4 (core)
apex 3.9.13 (core)
api 1.3.11 (core)
auth 4.3.1 (core)
code-analyzer 5.11.0
data 4.0.80 (core)
deploy-retrieve 3.24.16 (core)
info 3.4.111 (core)
limits 3.3.80 (core)
marketplace 1.3.10 (core)
org 5.9.72 (core)
packaging 2.25.10 (core)
schema 3.3.98 (core)
settings 2.4.60 (core)
sobject 1.4.86 (core)
telemetry 3.8.3 (core)
templates 56.10.7 (core)
trust 3.7.114 (core)
user 3.7.1 (core)

Uninstalled JIT Plugins:
community 3.3.48
custom-metadata 3.3.84
dev 2.5.2
devops-center 1.2.27
flow 1.0.5
lightning-dev 6.2.16
signups 2.6.56
@salesforce/sfdx-plugin-lwc-test 1.2.1
```

## Related Topics

- What Happens When You Update Salesforce CLI? (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_update_cli.htm)
- Install a CLI Plugin (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_plugin.htm)
- Install Other Versions of Salesforce CLI Plugins (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_plugin_version.htm)
- Install Trusted Unsigned Plugins Automatically (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_allowlist.htm)
- Discover Salesforce Plugins (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_other_plugins.htm)
- Quickly Uninstall All Non-Core Plugins (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_reset_plugins.htm)
