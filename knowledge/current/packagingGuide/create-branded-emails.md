---
title: "Create Branded Emails"
domain: packagingGuide
topic: create-branded-emails
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.410Z
estimatedTokens: 363
keywords: [Branded, Emails, customize, branding, sent, subscribers, new, trial, organizations]
---

# Create Branded Emails

> You can customize the branding of the emails sent to subscribers of new trial
        organizations.

# Create Branded Emails

You can customize the branding of the emails sent to subscribers of new trial organizations.

| Available in: Salesforce Classic |
| --- |
| Available in: Developer Edition |


| User Permissions Needed |
| --- |
| To manage Trialforce: | Customize Application |

1.  Log in to your Trialforce Management Organization (TMO).
2.  Create a branded email set.
    1.  From Setup, in the Quick Find box, enter Branding, select **Branding**, and then click **Email Sets**.
    2.  Click **New Email Set** or **Edit** next to an existing email set.
    3.  Enter a name for the email set and your company information.
    4.  In the Preview Emails area, click through the different types of generated emails and make sure that they read correctly. The login URL displayed in the preview is always https://login.salesforce.com even if you use a branded login page. These two processes are distinct.
    5.  Save your work.
    6.  If you’re ready to make these emails available to your Trialforce Source Organization (TSO), click **Publish**. Otherwise your changes are saved, and you can publish later.
3.  Assign a branded email set to your TSO.
    1.  From Setup, in the Quick Find box, enter Source Organizations, and then select **Source Organizations**.
    2.  Click **Edit** next to your TSO.
    3.  Select the email set.
    4.  Save your work.
    5.  If you want to see your branded login page in action, click **Login**.
