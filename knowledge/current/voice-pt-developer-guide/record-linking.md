---
title: "Record Linking"
domain: voice-pt-developer-guide
topic: record-linking
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.129Z
estimatedTokens: 698
keywords: [Record, Linking, associate, voice, call, records, Flow]
---

# Record Linking

> Use record linking to associate a voice call with other related records.

# Record Linking

Use record linking to associate a voice call with other related records.

## Related Records

Add the Voice Call related list to a Lightning record page to show a list of calls associated with a record. For example, add the list to your Case record page, so reps can see a case's associated calls and learn about the customer's interactions with your company.

1.  From the Object Manager in Setup, select the object that you want to add the Voice Call related list to. For example, to add the Voice Call related list to a Case page layout, select **Case**.
2.  Select **Lightning Record Pages** .
3.  Select the page that you want to modify, then click **Edit**.
4.  Drag the Related List - Single component to the page layout.
5.  In the Related List menu, select **Voice Calls**.
6.  Save your changes.

## Object Linking

When a rep accepts a call in the workspace, prompt them to choose from recommended records, search for a record, or add a new one.

1.  From Setup, enter Channel-Object in the Quick Find box, then select **Channel-Object Linking**.
2.  Click **New Linking Rule**.
3.  Select the Phone channel and the object to link to (such as Contact).
4.  Create a rule name and description.
5.  Set rule actions for Action for No Record Found and Action for Single Record Found. For example, if no matches are found for a contact, include a rule to automatically create and link a record, or prompt the rep to search for or create a record. If a single matching record is found, set a rule to automatically link the record. Alternatively, prompt the agrepnt to pick the suggested record, search for a record, or create a record.
6.  Save your work.
7.  After completing the Phone setup, add the Object-Linking Notifications background utility in the App Manager. This utility displays toast messages in the console that prompt the rep to link a suggested record or add a new one.
8.  From Setup, enter App Manager in the Quick Find box, then select **App Manager**.
9.  Click **Edit** in the action menu for your app.
10.  Click **Utility Items (Desktop Only)** | **Add Utility Items** | **Object-Linking Notifications**.
11.  Save your work.

## Using Flow for Record Linking

Flow builder can also be used to link a case or contact to a voice call.

1.  From Setup, enter Flow in the Quick Find box, then select **Flows** from Process Automations.
2.  Use the logic and data elements from the flow builder to trigger events such as opening cases associated with a voice call or opening a contact associated with a voice call.

#### See Also

-   [*Salesforce Help:* Channel-Object Linking](https://help.salesforce.com/articleView?id=service.channel_object_linking_parent.htm&type=5&language=en_US "Salesforce Help: Channel-Object Linking - HTML (New Window)")
