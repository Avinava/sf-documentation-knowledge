---
title: "Uninstall Salesforce CLI or Plugins"
domain: sfdx-setup
topic: uninstall-salesforce-cli-or-plugins
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.256Z
estimatedTokens: 646
keywords: [Uninstall, Salesforce, CLI, Plugins, Uninstalling, removes, entirely, computer, Installed, macOS, Linux, Installers, TAR, Files, Windows]
---

# Uninstall Salesforce CLI or Plugins

> Uninstalling Salesforce CLI removes it entirely from your computer.

# Uninstall Salesforce CLI or Plugins

Uninstalling Salesforce CLI removes it entirely from your computer.

The method to uninstall Salesforce CLI differs depending on whether you used an operating-specific installer or npm. You must therefore know how you installed before you can uninstall. See [Determine How You Installed Salesforce CLI](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_update_cli.htm#determine-how-you-installed) for more information.

## You Installed on macOS or Linux Using the Installers or TAR Files

Enter all these commands in a terminal to remove Salesforce CLI. The commands uninstall both sfdx (v7) and sf (v1 and v2).

```

```

## You Installed on Windows Using the Installer

These steps uninstall both sfdx (v7) and sf (v1 and v2):

1.  Select **Start > Control Panel > Programs > Programs and Features**.
2.  Select **@salesforce/cli**, and click **Uninstall**.
3.  Inside your home directory, delete these two directories:
    -   .config\\sfdx
    -   .config\\sf

If Salesforce CLI is still installed, delete these directories:

-   %LOCALAPPDATA%\\sfdx
-   %LOCALAPPDATA%\\sf

## You Installed Using npm

1.  To uninstall sfdx (v7), run this npm command from a terminal or command prompt:

    ```

    ```

    To uninstall sf (v1 or v2), run this command:

    ```

    ```

2.  Inside your home directory, delete these two directories.
    -   Library/Caches/sfdx (On Windows: Library\\Caches\\sfdx)
    -   Library/Caches/sf (On Windows: Library\\Caches\\sf)

## Remove Authorization and Log Files

After uninstalling Salesforce CLI, your computer still has data specific to your CLI usage, such as log files and authorization information about the orgs you’ve logged into or created. Retaining these files is useful if you later reinstall Salesforce CLI, because you don’t have to reauthorize these orgs and you can view your old logs. But if you want to remove these files too, run these commands.

On macOS or Linux:

```

```

On Windows, delete these directories in your home directory:

-   .sfdx
-   .sf

## Uninstall a Plugin

Use the plugins:uninstall command to uninstall a plugin you’ve previously installed.

Let’s say, for example, that you previously installed a specific version of the auth plugin, but now you want to go back to the latest version. Uninstalling the plugin takes you back to the core version that’s bundled with the CLI. Enter this command from a terminal or Windows command prompt:

```

```

If the plugin is standalone and not bundled with the CLI, then uninstalling it removes it from Salesforce CLI.

## Code Examples

```
sudo rm -rf /usr/local/sfdx
sudo rm -rf /usr/local/lib/sfdx
sudo rm -rf /usr/local/bin/sfdx
sudo rm -rf ~/.local/share/sfdx ~/.config/sfdx ~/.cache/sfdx
sudo rm -rf ~/Library/Caches/sfdx
sudo rm -rf /usr/local/sf
sudo rm -rf /usr/local/bin/sf
sudo rm -rf ~/.local/share/sf ~/.config/sf ~/.cache/sf
sudo rm -rf ~/Library/Caches/sf
```

```apex
npm uninstall sfdx-cli --global
```

```apex
npm uninstall @salesforce/cli --global
```

```
sudo rm -rf ~/.sfdx
sudo rm -rf ~/.sf
```

```
sf plugins:uninstall auth
```

## Related Topics

- Determine How You Installed Salesforce CLI (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_update_cli.htm)
