---
title: "Update Salesforce CLI"
domain: sfdx-setup
topic: update-salesforce-cli
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:36:19.261Z
estimatedTokens: 1365
keywords: [Salesforce, CLI, want, ensure, you’re, running, latest, version, manually, Determine, How, Installed, Installer, npm, Happens]
---

# Update Salesforce CLI

> If you want to ensure that you’re running the latest version of Salesforce CLI, you can
    manually update it.

# Update Salesforce CLI

If you want to ensure that you’re running the latest version of Salesforce CLI, you can manually update it.

## Determine How You Installed Salesforce CLI

Because the method to update or uninstall Salesforce CLI differs depending on whether you used the operating system-specific installers or npm, you must know how you installed before you can update or uninstall. In case you forgot, here are some tips.

-   Run sf update in a terminal (macOS and Linux) or command prompt (Windows). If Salesforce CLI successfully updates, then you installed with the installers. If the command returns this or similar warning, then you installed with npm:

    ```

    ```

    If you get an error similar to this one, then you’re probably still using sf (v1), which was bundled with sfdx (v7):

    ```

    ```

    Both sf (v1) and sfdx (v7) are deprecated, so see [Move from sfdx (v7) to sf (v2)](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_move_to_sf_v2.htm "If you’re currently using sfdx (v7), we highly recommend that you move to sf (v2). The move is easy: you first uninstall sfdx (v7) and then install sf (v2). After you move, the CLI commands that you’ve been running in a terminal or continuous integration (CI) scripts continue to work as before.") for information on how to move to the latest supported version of Salesforce CLI, which is sf (v2).

-   Run npm list -g --depth 0. If you got valid output, and the displayed list includes the entry @salesforce/cli@<*version*\>, then you installed Salesforce CLI with npm.

## If You Installed Salesforce CLI Using the Installer

To install the latest Salesforce CLI and plugin versions, run this command in a terminal (macOS) or command prompt (Windows):

```

```

By default, the CLI periodically checks for and installs updates. To disable auto-update, set the SF\_AUTOUPDATE\_DISABLE environment variable to true.

When you update Salesforce CLI, we automatically display the release notes for the version you're updating to so you can learn about the new, changed, and fixed features. To silence the display, set the SF\_HIDE\_RELEASE\_NOTES and SF\_HIDE\_RELEASE\_NOTES\_FOOTER environment variables to true.

## If You Installed Salesforce CLI Using npm

The auto-update option isn’t available. When a new version of the CLI is available, run this command in a terminal (macOS and Linux) or command prompt (Windows):

```

```

## What Happens When You Update Salesforce CLI?

As previously described, you can update Salesforce CLI using two methods: sf update or npm install --global @salesforce/cli. Let's break down the upgrade process for both methods. See [Salesforce CLI Plugins](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_plugins_overview.htm "Salesforce CLI consists of an npm (Node.js package manager) package called @salesforce/cli and multiple plugins—also npm packages—that contain commands. Node.js is a JavaScript (also Typescript) runtime environment that supports execution outside of a browser. Most of the core functionality that Salesforce CLI provides comes from plugins.") for terminology and architecture information about plugins.

**Common Updates for Both Methods**

-   Salesforce CLI: Updated to the latest version, which is the public @salesforce/cli npm package that has the [latest tag](https://www.npmjs.com/package/@salesforce/cli/v/latest).
-   Core plugins: All core plugins are also updated to their latest versions based on the latest tag. Examples include [@salesforce/plugin-org](https://www.npmjs.com/package/@salesforce/plugin-org/v/latest) and [@salesforce/plugin-deploy-retrieve](https://www.npmjs.com/package/@salesforce/plugin-deploy-retrieve/v/latest).

**Update Behavior of Non-Core Plugins**

-   **If you used sf update to update Salesforce CLI**, then the update process attempts to update all non-core plugins to their latest available versions. Specifically, the process updates a non-core plugin only if the currently-installed one is older than the latest version. If the installed non-core plugin is newer than the latest version, then this plugin isn't updated.

    For example, let's say the latest available version of the code-analyzer plugin is 5.3.0. If the installed version is 5.3.1, then the code-analyzer plugin isn't updated when you run sf update. If, however, if the installed version is 5.2.0, then the plugin is updated to 5.3.0.

-   **If you used npm install --global @salesforce/cli to update**, then the non-core plugins (JIT and user-installed) aren't updated. You must update them yourself manually.

-   **[Update to the CLI Release Candidate or Nightly](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli_rc.htm)**
    We release a new version of the CLI weekly. At the same time we also publish a release candidate of the CLI that contains changes that we plan to include in the next weekly release. Think of the release candidate as the CLI-version of the Salesforce sandbox preview. You can update to a release candidate if you want to check out upcoming features. Or stay on the current and official release. Or go back and forth. It’s up to you!
-   **[Disable Automatic Update of the CLI](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_disable_autoupdate.htm)**
    When you run a command, Salesforce CLI checks to see if you have the latest version. If not, the CLI automatically updates itself. You can disable this automatic update with an environment variable.

## Code Examples

```apex
sf update
 ›   Warning: Use "npm update --global @salesforce/cli" to update npm-based installations.
@salesforce/cli: Updating CLI... not updatable
```

```
Running "sf update" has no effect because you're using a version of sf that was installed by sfdx.
```

## Related Topics

- Move from sfdx (v7) to sf (v2) (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_move_to_sf_v2.htm)
- Salesforce CLI Plugins (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_plugins_overview.htm)
- Update to the CLI Release Candidate or Nightly (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli_rc.htm)
- Disable Automatic Update of the CLI (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_disable_autoupdate.htm)
