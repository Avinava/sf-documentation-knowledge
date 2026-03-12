---
title: "Quick Start"
domain: sfdx-setup
topic: quick-start
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:36:19.187Z
estimatedTokens: 885
keywords: [Quick, Start, Salesforce, CLI, command-line, simplifies, development, build, automation, working, org, manage, orgs, synchronize, source]
---

# Quick Start

> Salesforce CLI is a command-line interface that simplifies development and build automation when working with your Salesforce org. Use it to create and manage orgs, synchronize source to and from orgs, create and install packages, and more.

# Quick Start

Salesforce CLI is a command-line interface that simplifies development and build automation when working with your Salesforce org. Use it to create and manage orgs, synchronize source to and from orgs, create and install packages, and more.

Salesforce CLI is based on oclif, an open-source framework for building command-line interfaces in Node.js. You run it on your local machine or continuous integration (CI) system. It supports the installation of custom plugins.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_setup)

#### Important

Are you still using sfdx (v7)? See [Move from sfdx (v7) to sf (v2)](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_move_to_sf_v2.htm "If you’re currently using sfdx (v7), we highly recommend that you move to sf (v2). The move is easy: you first uninstall sfdx (v7) and then install sf (v2). After you move, the CLI commands that you’ve been running in a terminal or continuous integration (CI) scripts continue to work as before.") if so.

Run through these steps to install Salesforce CLI on your computer and optionally configure it for your specific environment.

1.  [Read the system requirements to ensure Salesforce CLI works correctly on your computer.](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_sys_req.htm "Review these system requirements to get the most out of Salesforce CLI and developer tools.")
2.  [Install Salesforce CLI on your computer.](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli "Install Salesforce CLI on your computer using operating system-specific artifacts, such as .pkg on macOS, TAR files, or with npm.")

    Follow the documentation for your computer's operating system, such as Windows or macOS. You can also install using npm or from a TAR file.

3.  Verify that you've installed Salesforce CLI correctly by opening a terminal (macOS, Linux) or command prompt (Windows) and running this command to see the list of all available CLI commands.

    ```

    ```

    Run this command to see the version of Salesforce CLI you just installed.

    ```

    ```

4.  [Optionally configure Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli.htm) so it works exactly how you want.

    Here are a few examples of what you can do:

    -   Enable autocomplete.
    -   Set CLI configuration and environment variables.
    -   Customize the colors in the \--help output.
    -   Use Salesforce CLI from behind a company firewall.
5.  Read the [weekly release notes](https://github.com/forcedotcom/cli/blob/main/releasenotes/README.md) to learn about new features, changes, and bug fixes.

Congratulations! You can now start using Salesforce CLI for all kinds of fun tasks. For example, read [this documentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_sample_repo.htm) to learn how to use a sample GitHub repo to get started with Salesforce DX.

#### See Also

-   [*Salesforce DX Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev "Salesforce DX Developer Guide - HTML (New Window)")

-   [*Salesforce CLI Command Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference "Salesforce CLI Command Reference - HTML (New Window)")

-   [oclif: The Open CLI Framework](https://oclif.io/ "oclif: The Open CLI Framework - HTML (New Window)")

## Code Examples

```
sf commands
```

```
sf --version
```

## Related Topics

- Move from sfdx (v7) to sf (v2) (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_move_to_sf_v2.htm)
- Read
                                                the system requirements to ensure Salesforce CLI
                                                works correctly on your computer. (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_sys_req.htm)
- Install
                                                Salesforce CLI on your computer. (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm)
