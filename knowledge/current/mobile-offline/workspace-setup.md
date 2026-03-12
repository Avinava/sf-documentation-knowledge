---
title: "Workspace Setup"
domain: mobile-offline
topic: workspace-setup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.740Z
estimatedTokens: 381
keywords: [Workspace, Setup, development, environment, project, develop, LWC, connect, Salesforce]
---

# Workspace Setup

> Set up your development environment, create a project to develop your LWC in, and
    connect your project to Salesforce.

# Workspace Setup

Set up your development environment, create a project to develop your LWC in, and connect your project to Salesforce.

1.  Launch VS Code.
2.  Select **File** | **Open** and open a project to use with your org.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

    #### Note

    If you don’t have a project created, you can open the VS Code Command Palette by clicking **View** | **Command Palette**, enter SFDX, and select **SFDX: Create a Project**. Then follow the prompts.

3.  In the menu bar, select **View** | **Terminal** to open VS Code’s integrated terminal if it’s not already visible.
4.  Run the following command to install the Salesforce Extension Plugins for mobile.

    ```

    ```

5.  In the menu bar, select **View** | **Command Palette** to open the VS Code Command Palette.
6.  Enter SFDX and select **SFDX: Authorize an Org**.
7.  Select the org you want to use and press **Enter**.

    A web page opens for the org login.

8.  Verify your org authorization by checking the bottom left in VS Code.

    You should see your username in the VS Code status bar.

    ![VS Code status bar showing org authentication status](/docs/resources/img/en-us/260.0?doc_id=images%2Fqs_action_vscode_auth.png&folder=mobile_offline)

    If you have difficulty authorizing SFDX for access to your org, see [SFDX Authorization](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm "HTML (New Window)").

## Code Examples

```
sf plugins install @salesforce/lwc-dev-mobile
```
