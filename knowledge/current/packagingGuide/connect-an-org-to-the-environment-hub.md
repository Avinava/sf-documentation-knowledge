---
title: "Connect an Org to the Environment Hub"
domain: packagingGuide
topic: connect-an-org-to-the-environment-hub
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.865Z
estimatedTokens: 606
keywords: [Connect, Org, Environment, Hub, Salesforce, orgs, allowing, manage, development, test, trial, environments, except, scratch, location]
---

# Connect an Org to the Environment Hub

> You can connect existing Salesforce orgs to the Environment Hub, allowing you to manage
    all your development, test, and trial environments (except scratch orgs) from one location. When
    you connect an org to the hub, related orgs are automatically discovered so you don’t have to
    manually connect them.

# Connect an Org to the Environment Hub

You can connect existing Salesforce orgs to the Environment Hub, allowing you to manage all your development, test, and trial environments (except scratch orgs) from one location. When you connect an org to the hub, related orgs are automatically discovered so you don’t have to manually connect them.


| User Permissions Needed |
| --- |
| To connect or disconnect an org to or from the Environment Hub: | Connect Organization to Environment Hub |

The following types of related orgs are automatically discovered.

-   For any organization, all sandbox orgs created from it
-   For a managed 1GP packaging org, all its related patch orgs
-   For a Trialforce Management Org, all Trialforce Source Orgs created from it
-   For an org with the License Management App (LMA) installed, any release org with a managed package registered in the LMA

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

You can't connect a sandbox org to the Environment Hub directly. If you want to connect a sandbox, first connect the org used to create the sandbox to the Environment Hub. Then, refresh the sandbox org. The refresh automatically adds it as a hub member.

1.  From the App Launcher, select **Environment Hub**, and then select **Connect Org**.
2.  Enter the admin username for the org that you want to connect and, optionally, a short description. If your hub has many members, a description makes it easier to find the org later.
3.  By default, single sign-on (SSO) is enabled for the org you connected. To disable SSO, deselect **Auto-enable SSO for this org**.
4.  Select **Connect Org** again.
5.  In the pop-up window, enter the org’s admin username and password. If you don’t see the pop-up, temporarily disable your browser’s ad blocking software and try again.
6.  Select **Log In**, and then select **Allow**.

    This process creates a connected app to allow connections to the org. If you can't log in and select Allow, check if the Environment Hub org has a connected app called "Environment org". If you don't see this connected app, contact Salesforce Support.


To disconnect an org, locate the record for the org in the Environments Hub tab, and select **Remove** from the dropdown menu on the far right.

Orgs removed from the Environment Hub aren’t deleted, so you can still access the org after you remove it.
