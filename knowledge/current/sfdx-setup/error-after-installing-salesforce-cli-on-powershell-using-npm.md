---
title: "Error After Installing Salesforce CLI on PowerShell Using npm"
domain: sfdx-setup
topic: error-after-installing-salesforce-cli-on-powershell-using-npm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.243Z
estimatedTokens: 209
keywords: [Error, Installing, Salesforce, CLI, PowerShell, npm, Windows, security, policy, whenever, try, execute, any, command, Windows-specific]
---

# Error After Installing Salesforce CLI on PowerShell Using npm

> After installing Salesforce CLI on Windows PowerShell using npm, you get a security
    policy error whenever you try to execute any CLI command. Installing with the Windows-specific
    installer works correctly.

# Error After Installing Salesforce CLI on PowerShell Using npm

After installing Salesforce CLI on Windows PowerShell using npm, you get a security policy error whenever you try to execute any CLI command. Installing with the Windows-specific installer works correctly.

The error looks something like this:

```

```

The problem is that you have a PowerShell execution policy configured for your computer that’s blocking Salesforce CLI from working correctly.

To fix the error, work with your administrator to manage the policy settings on your computer to disable the one that's blocking Salesforce CLI. For more information, see [about\_Execution\_Policies](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.4) in the Microsoft PowerShell documentation.

## Code Examples

```
sf : File C:\Users\<username>\AppData\Roaming
pm\sf.ps1 cannot be loaded because running scripts is disabled on this system
```
