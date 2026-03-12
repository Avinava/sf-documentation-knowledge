---
title: "Install Trusted Unsigned Plugins Automatically"
domain: sfdx-setup
topic: install-trusted-unsigned-plugins-automatically
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.086Z
estimatedTokens: 366
keywords: [Install, Trusted, Unsigned, Plugins, Automatically, plugin, command, Salesforce, CLI, verifies, digital, installs, Otherwise, doesn't, until]
---

# Install Trusted Unsigned Plugins Automatically

> When you install a plugin with the sf plugins
      install command, Salesforce CLI first verifies its digital signature. If the plugin
    provides a valid signature, the CLI installs it. Otherwise, Salesforce CLI doesn't install it
    until you answer a warning prompt and acknowledge that you understand the risks. This process
    works well when you install a plugin interactively at the command line, but can prevent a batch
    job from completing. To automatically install a plugin without prompting, even when unsigned,
    create an allowlist file on your local file system and add the plugins you trust.

# Install Trusted Unsigned Plugins Automatically

When you install a plugin with the sf plugins install command, Salesforce CLI first verifies its digital signature. If the plugin provides a valid signature, the CLI installs it. Otherwise, Salesforce CLI doesn't install it until you answer a warning prompt and acknowledge that you understand the risks. This process works well when you install a plugin interactively at the command line, but can prevent a batch job from completing. To automatically install a plugin without prompting, even when unsigned, create an allowlist file on your local file system and add the plugins you trust.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=sfdx_setup)

#### Warning

After you install a plugin and run one of its commands in a terminal, the command runs with your user privileges. As a result, the command can read encrypted data, communicate with any Salesforce org you authenticated to, or remove files in your home directory. Install only unsigned and unverified plugins that you trust.

1.  Create a file called unsignedPluginAllowList.json and put it in one of these directories:

    -   (Linux and macOS): $HOME/.config/sf
    -   (Windows) Depending on your Windows configuration, either C:\\Users\\username\\.config\\sf or %LOCALAPPDATA%\\sf

2.  Add the names of the plugins you trust to the JSON file in a simple array of strings. For example:

    ```

    ```

## Code Examples

```
[
    "sfdx-templates",
    "salesforce-cmdt",
    ...
]
```
