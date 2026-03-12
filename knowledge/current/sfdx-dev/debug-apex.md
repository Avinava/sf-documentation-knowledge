---
title: "Debug Apex"
domain: sfdx-dev
topic: debug-apex
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.220Z
estimatedTokens: 607
keywords: [Debug, Apex, Salesforce, Extensions, Visual, Studio, Code, development, tasks, choice, Debugger, Whichever, chose, breakpoints, classes]
---

# Debug Apex

> If you use Salesforce Extensions for Visual Studio Code (VS Code) for your development
    tasks, you have a choice of Apex Debugger extensions. Whichever debugger you chose, you set
    breakpoints in your Apex classes and step through their execution to inspect your code in real
    time to find bugs. You can run Apex tests in VS Code or on the command line.

# Debug Apex

If you use Salesforce Extensions for Visual Studio Code (VS Code) for your development tasks, you have a choice of Apex Debugger extensions. Whichever debugger you chose, you set breakpoints in your Apex classes and step through their execution to inspect your code in real time to find bugs. You can run Apex tests in VS Code or on the command line.

## Apex Replay Debugger

Apex Replay Debugger is available for use without any additional licenses. To configure and use it, see [Apex Replay Debugger](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/replay-debugger.html).

## Apex Interactive Debugger

You must have at least one available Apex Debugger session in your Dev Hub org. To purchase more sessions for an org, contact your System Admin to [open a case](https://help.salesforce.com/articleView?id=000314082&type=1&mode=1&language=en_US).

-   Performance Edition and Unlimited Edition orgs include one Apex Debugger session.
-   Apex Debuggers sessions aren’t available in Trial and Developer Edition orgs.
-   You can purchase Apex Debugger sessions for Enterprise Edition orgs.

Enable the Apex Debugger in your scratch orgs by adding the DebugApex feature to your scratch org definition file:

```

```

To configure and use it, see [Apex Interactive Debugger](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/interactive-debugger.html).

## ISV Customer Debugger (Salesforce Extensions for VS Code Only)

ISV Customer Debugger is part of the Apex Interactive Debugger (salesforcedx-vscode-apex-debugger) extension, so you don’t have to install anything other than the Salesforce Extension Pack and its prerequisites. You can debug only sandbox orgs.

See [ISV Customer Debugger](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/isv-debugger.html) in Salesforce Extensions for VS Code for details.

#### See Also

-   [Visual Studio Marketplace: Apex Replay Debugger extension](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode-apex-replay-debugger "Visual Studio Marketplace: Apex Replay Debugger
    extension - HTML (New Window)")

-   [Visual Studio Marketplace: Apex Interactive Debugger extension](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode-apex-debugger "Visual Studio Marketplace: Apex Interactive Debugger
    extension - HTML (New Window)")

## Code Examples

```
"features": "DebugApex"
```
