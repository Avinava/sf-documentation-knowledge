---
title: "Error Installing on Windows About the PATH Not Updated"
domain: sfdx-setup
topic: error-installing-on-windows-about-the-path-not-updated
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.248Z
estimatedTokens: 348
keywords: [Error, Installing, Windows, PATH, Updated, Salesforce, CLI, *.exe, installer, executable, original, length, number, greater]
---

# Error Installing on Windows About the PATH Not Updated

> While installing Salesforce CLI on Windows using the *.exe installer executable, you get the error PATH not
      updated, original length XX > 1024, where XX is
    a number greater than 1024.

# Error Installing on Windows About the PATH Not Updated

While installing Salesforce CLI on Windows using the \*.exe installer executable, you get the error PATH not updated, original length XX > 1024, where XX is a number greater than 1024.

The error looks something like this:

![Windows installer showing an error about the PATH not being updated.](/docs/resources/img/en-us/260.0?doc_id=sfdx_setup%2Fimages%2Fsfdx_setup_windows_install_path_error.png&folder=sfdx_setup)

The problem is that your PATH environment variable has a value whose string length is greater than 1024. This limitation isn’t from Salesforce CLI; rather, it’s a limitation of the [Nullsoft Scriptable Install System (NSIS)](https://nsis.sourceforge.io/Path_Manipulation#Warning), which Salesforce CLI uses for its Windows installer. The installer is checking for the PATH length on your computer to make sure that NSIS fails gracefully and doesn't get into a bad state.

To fix the problem, manually update your PATH variable to be shorter, such as removing unneeded paths. Check your Windows documentation for details.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=sfdx_setup)

#### Warning

Be careful updating your PATH variable, especially the one in your System Variables; updating it incorrectly can cause major headaches. Check with your admin, just to be sure.
