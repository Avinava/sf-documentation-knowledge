---
title: "Add Permissions to a Profile"
domain: mobile-sdk
topic: add-permissions-to-a-profile
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:25.338Z
estimatedTokens: 253
keywords: [Add, Permissions, Profile, API, Enabled, Enable, Chatter]
---

> Create a profile that has API Enabled and Enable Chatter permissions.

# Add Permissions to a Profile

Create a profile that has API Enabled and Enable Chatter permissions.

1.  From Setup, enter Profiles in the Quick Find box, then select **Profiles**.
2.  Click **New Profile**.
3.  For Existing Profile select **Customer Community User**.
4.  For **Profile Name** type FineApps API User.
5.  Click **Save**.
6.  On the FineApps API User page, click **Edit**.
7.  For **Administrative Permissions** select **API Enabled** and **Enable Chatter**.

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

    #### Note

    A user who doesn’t have the Enable Chatter permission gets an insufficient privileges error immediately after successfully logging into your Experience Cloud site in Salesforce.

8.  Click **Save**.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

In this tutorial we use a profile, but you can also use a permission set that includes the required permissions.
