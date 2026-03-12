---
title: "Quickly Uninstall All Non-Core Plugins"
domain: sfdx-setup
topic: quickly-uninstall-all-non-core-plugins
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.221Z
estimatedTokens: 237
keywords: [Quickly, Uninstall, Non-Core, Plugins, Sometimes, want, Salesforce, CLI, were, installed]
---

# Quickly Uninstall All Non-Core Plugins

> Sometimes you want to quickly uninstall all the non-core Salesforce CLI plugins that were
        installed after you first installed the CLI.

# Quickly Uninstall All Non-Core Plugins

Sometimes you want to quickly uninstall all the non-core Salesforce CLI plugins that were installed after you first installed the CLI.

Examples of non-core plugins include:

-   Third-party plugins that you explicitly installed with the plugins install command.
-   JIT plugins that were automatically installed when you ran one of their commands.
-   Local plugins that you linked with the plugins link command.

To uninstall all non-core plugins, run this command.

```

```

After the command finishes, you’re left with only the core Salesforce CLI plugins, as if you had installed the CLI from scratch.

To uninstall, then reinstall, all non-core plugins, specify the \--reinstall flag.

```

```

To remove all package manager-related files and directories (node\_modules, package.json, yarn.lock, package-lock.json) from Salesforce CLI's internal data directory, specify the \--hard flag.

```

```

## Code Examples

```
sf plugins reset
```

```
sf plugins reset --reinstall
```

```
sf plugins reset --hard
```
