---
title: "Assign Permissions to the Subscriber Support Console"
domain: pkg1-dev
topic: assign-permissions-to-the-subscriber-support-console
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.439Z
estimatedTokens: 313
keywords: [Assign, Permissions, Subscriber, Support, Console, permission, provide, users, access]
---

# Assign Permissions to the Subscriber Support Console

> Create a permission set to provide users access to the Subscriber Support
    Console.

# Assign Permissions to the Subscriber Support Console

Create a permission set to provide users access to the Subscriber Support Console.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

If you’ve already assigned these permissions via a profile or another permission set, you can skip this task.

1.  From Setup, in the Quick Find box, enter Permission Sets, and select **Permission Sets**.
2.  Click **New** and enter your permission set information.
3.  On the Permission Set Overview page, locate the Apps section, and select **Visualforce Page Access**.
    1.  Click **Edit**.
    2.  Add **sfLma.LoginToPartnerBT** and **sfLma.SubscriberSupport** to the list of Enabled Visualforce pages, and then click **Save**.
4.  On the Permission Set Overview page, locate the System section, and select **System Permissions**. Click **Edit**.
    1.  Select **Log in to Subscriber Organization**, and click **Save**.
5.  From Setup, in the Quick Find box, enter Profiles, and select **Profiles**.
    1.  Click **Edit**.
    2.  Under Custom App Settings, select **License Management App**.
    3.  Under Custom Tab Settings, locate the Subscribers tab and select **Default On**.
    4.  Click **Save**.
