---
title: "Windows Performance Suggestions"
domain: sfdx-setup
topic: windows-performance-suggestions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.212Z
estimatedTokens: 598
keywords: [Windows, Performance, Suggestions, Follow, improve, Salesforce, CLI]
---

# Windows Performance Suggestions

> Follow these suggestions to improve the performance of Salesforce CLI on
		Windows.

# Windows Performance Suggestions

Follow these suggestions to improve the performance of Salesforce CLI on Windows.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=sfdx_setup)

#### Warning

We recommend that you consult your security administrator before making any of these suggested configuration changes.

**Use a local file system for your Salesforce DX project rather than a cloud-based one.**

Salesforce CLI performs better when your Salesforce DX project and associated files are on a local file system. Cloud-based file systems, such as OneDrive, Google Drive, and Dropbox, constantly watch all the files and directories in the file system. As a result, if you create your Salesforce DX project in one of these file systems, it can limit the performance of the Salesforce CLI. To avoid this issue, move your project directory away from these systems.

**Install Salesforce CLI with the official installer and exclude the sf executable from Windows Defender.**

-   Windows Defender continually rescans executables for potential threats. This scanning can have a noticeable performance impact on slower machines.
-   To exclude Salesforce CLI, use the sf executable installed from [developer.salesforce.com](https://developer.salesforce.com/tools/sfdxcli#) and follow these steps:
    1.  [Add an exclusion to Windows Security](https://support.microsoft.com/en-us/help/4028485/windows-10-add-an-exclusion-to-windows-security).
    2.  When prompted to select a folder, select C:\\Program Files\\Salesforce CLI.

**Exclude the project folder from Windows Defender.**

It’s also possible that Windows Defender keeps rescanning your project folder, causing negative performance. To exclude your project folder, [follow these steps](https://support.microsoft.com/en-us/help/4028485/windows-10-add-an-exclusion-to-windows-security).

**Exclude the sf executable from other security software.**

Some companies use more extensive security software than Windows Defender, and this security software can cause Salesforce CLI to perform slowly. Work with your internal IT department to exclude the sf executable from all security software.

**Close memory intensive programs.**

Salesforce CLI can be performing slowly because other programs such as Google Chrome or VS Code are using too much memory. Try restarting these programs to free up memory.
