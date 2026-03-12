---
title: "Debug Subscriber Orgs"
domain: pkg1-dev
topic: debug-subscriber-orgs
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.646Z
estimatedTokens: 832
keywords: [Debug, Subscriber, Orgs, logging, subscriber’s, org, view, logs, initiate, ISV, Customer, Debugger, sessions, Access, Troubleshoot]
---

# Debug Subscriber Orgs

> After logging in to a subscriber’s org, you can view
        logs
        and initiate ISV Customer Debugger sessions.

# Debug Subscriber Orgs

After logging in to a subscriber’s org, you can view logs and initiate ISV Customer Debugger sessions.

## Get Access to Debug Logs

You can debug your code by generating Apex debug logs that contain the output from your managed package. Using this log information, you can troubleshoot issues that are specific to that subscriber.

To get access to a subscriber’s Apex debug logs, you can either [request login access from the subscriber](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/lma_requesting_login_access.htm), or use the License Management App (LMA) to enable debug logs for a namespace.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pkg1_dev)

#### Important

Note these important considerations for enabling subscriber debug logs for a namespace.

-   When you enable debug logs for a namespace, the subscriber org displays debug statements from those managed packages. Logs from Apex code execution in that namespace become visible in the subscriber org.
-   Because multiple packages can share a namespace in second-generation managed packaging (2GP), enabling debug logs for 2GP means enabling logs for all managed packages in the namespace. For example, a subscriber is reporting issues with Package A and you enable debug logs for the namespace that includes Package A. The subscriber also uses Package B and Package C that are in the same namespace. By enabling debug logs for the namespace that includes Package A, you also enable debug logs for Package B and Package C.

Follow these steps to enable debug logs for a namespace through the LMA.

1.  In the LMA, click the **Subscribers** tab.
2.  Search for the subscriber’s name or org ID, then click the name of the subscriber org.
3.  In the Packages & Licensing section, find the package that you want to troubleshoot.
4.  In the Subscriber Debug Logs column, click **Enable**.
5.  Review the confirmation message, then click **OK**.

After you enable debug logs, the logs from Apex code execution remain visible to the subscriber org until you disable debug logs. To disable debug logs, follow the same steps in the LMA.

## Troubleshoot with Debug Logs

After you get access to a subscriber’s debug logs or you enable debug logs for a namespace, get debug logs from the Developer Console.

1.  From Setup of the subscriber’s org, in the Quick Find box, enter Debug Logs, and then select **Debug Logs**.
2.  Launch the Developer Console.
3.  Perform the operation, and view the debug log with your output.

Subscribers can see the debug logs you generate, and these logs contain your unobfuscated Apex code.

You can also view and edit data contained in protected custom settings from your managed packages when logged in as a user.

## Troubleshoot with the ISV Debugger

Each License Management Org can use one free ISV Customer Debugger session at a time. The ISV Customer Debugger is part of the [Salesforce Extensions for Visual Studio Code](https://developer.salesforce.com/tools/vscode). You can use the ISV Customer Debugger only in sandbox orgs, so you can initiate debugging sessions only from a customer’s sandbox.

For details, see the [ISV Customer Debugger](https://developer.salesforce.com/tools/vscode/en/apex/isv-debugger) documentation.
