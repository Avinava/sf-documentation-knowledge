---
title: "System Requirements"
domain: sfdx-setup
topic: system-requirements
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:36:19.225Z
estimatedTokens: 564
keywords: [System, Requirements, Review, Salesforce, CLI, developer, tools, Operating, Systems, Code, Editor, IDE, API, Enabled, Permission]
---

# System Requirements

> Review these system requirements to get the most out of Salesforce CLI and developer
        tools.

# System Requirements

Review these system requirements to get the most out of Salesforce CLI and developer tools.

## Operating Systems

Salesforce CLI supports the following operating systems.

-   Windows—Windows 8.1 and Windows Server 2012 (64-bit) or later
-   Mac—macOS 13.5 or later (Intel and M1)
-   Linux—Ubuntu 20.04

## Code Editor or IDE

You can use any code editor. We recommend that you use Visual Studio Code (VS Code) and install the [Salesforce Extensions for VS Code](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode) that are designed for development on Salesforce Platform.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_setup)

#### Note

If you’re using Salesforce Extensions for VS Code, keep in mind that some CLI commands are unavailable in the command palette. If you can’t find a command in VS Code, run it in the integrated terminal.

## API Enabled System Permission in Your Org

If you're using Salesforce CLI to interact with an org, the CLI requires the "API Enabled" system permission, which provides programmatic access to your org's information. If you’re unable to run CLI commands against your org, ask your Salesforce admin to enable this permission.

## Version Control System

You can use any version control system (VCS). We recommend that you use GitHub to take advantage of the samples in our GitHub repository.

## Node.js

We bundle Node.js in each operating system-specific Salesforce CLI installer. We include the version of Node.js with [Active LTS status](https://nodejs.org/en/about/previous-releases) and update it in tandem with the Node.js release schedule.

If you prefer to install Salesforce CLI using npm, we recommend you also use the Active LTS version of Node.js.

## Salesforce CLI Version Support

Salesforce supports only the most current version of Salesforce CLI. See the [Salesforce CLI Release Notes](https://github.com/forcedotcom/cli/blob/main/releasenotes/README.md) for the latest version information.

#### See Also

-   [*Salesforce Extensions for Visual Studio Code*](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide "Salesforce Extensions for Visual Studio Code - HTML (New Window)")
