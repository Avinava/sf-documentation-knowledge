---
title: "Install Other Versions of Salesforce CLI Plugins"
domain: sfdx-setup
topic: install-other-versions-of-salesforce-cli-plugins
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.183Z
estimatedTokens: 473
keywords: [Install, Versions, Salesforce, CLI, Plugins, Sometimes, want, specific, version, plugin, let’s, say, fixed, bug, apex]
---

# Install Other Versions of Salesforce CLI Plugins

> Sometimes you want to use a specific version of a plugin. For example, let’s say
    Salesforce fixed a bug in the apex run command. The fix has
    been released in the associated plugin, but Salesforce hasn’t yet included that plugin release
    in the current Salesforce CLI. But you want to test the bug fix in your local development
    environment. Follow these steps to install the version of the plugin that has the
    fix.

# Install Other Versions of Salesforce CLI Plugins

Sometimes you want to use a specific version of a plugin. For example, let’s say Salesforce fixed a bug in the apex run command. The fix has been released in the associated plugin, but Salesforce hasn’t yet included that plugin release in the current Salesforce CLI. But you want to test the bug fix in your local development environment. Follow these steps to install the version of the plugin that has the fix.

1.  Determine the plugin that contains the command by running the which command. This example shows that the apex run command is in the plugin-apex plugin.

    ```

    ```

2.  Find the plugin’s repository with the [Salesforce CLI Status](https://github.com/salesforcecli/status) page. Then navigate to its GitHub repo, such as [@salesforce/plugin-apex](https://github.com/salesforcecli/plugin-apex), which lists all the releases and tags.
3.  Install the version that contains the bug fix. For example, to install version 2.2.22 of the apex plugin, run this command:

    ```

    ```

    The preceding example uses the plugin’s short name, which is shown in the output of sf plugins --core. You can also use the plugin’s long name, which is the name property in the plugin’s [package.json](https://github.com/salesforcecli/plugin-apex/blob/main/package.json#L2) file.

    ```

    ```

    When you now run sf plugins --core, the apex plugin entry shows the newly installed version rather than (core).

    ```

    ```

4.  When you finish testing, go back to using the current version of the plugin by uninstalling the tagged version.

    ```

    ```

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_setup)

    #### Important

    When you install a specific plugin version using a tag, such as 2.2.22, you stay with that tag until you explicitly uninstall it.

## Code Examples

```
sf which apex run
=== apex run

plugin: @salesforce/plugin-apex
```

```
sf plugins install apex@2.2.22
```

```
sf plugins install @salesforce/plugin-apex@2.2.22
```

```
apex 2.2.21 (2.2.22)
```

```
sf plugins uninstall apex
```
