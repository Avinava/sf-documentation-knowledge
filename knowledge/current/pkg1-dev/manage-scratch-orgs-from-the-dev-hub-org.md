---
title: "Manage Scratch Orgs from the Dev Hub Org"
domain: pkg1-dev
topic: manage-scratch-orgs-from-the-dev-hub-org
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.715Z
estimatedTokens: 357
keywords: [Manage, Scratch, Orgs, Dev, Hub, Org, view, their, associated, requests]
---

# Manage Scratch Orgs from the Dev Hub Org

> You can view and delete your scratch orgs and their associated requests from the Dev
  Hub org.

# Manage Scratch Orgs from the Dev Hub Org

You can view and delete your scratch orgs and their associated requests from the Dev Hub org.

In the Dev Hub org, the ActiveScratchOrg standard object represents the scratch orgs that are currently in use. The ScratchOrgInfo standard object represents the requests that were used to create scratch orgs and provides historical context.

1.  Log in to the Dev Hub org as the System Administrator or as a user with the Salesforce DX permissions.
2.  From the App Launcher, select **Active Scratch Orgs** to see a list of all active scratch orgs.

    To view more details about a scratch org, click the link in the Number column.

3.  To delete an active scratch org from the Active Scratch Orgs list view, choose **Delete** from the dropdown.

    Deleting an active scratch org doesn’t delete the request (ScratchOrgInfo) that created it, but it does free up a scratch org so that it doesn’t count against your allocations.

4.  To view the requests that created the scratch orgs, select **Scratch Org Infos** from the App Launcher.

    To view more details about a request, click the link in the Number column. The details of a scratch org request include whether it's active, expired, or deleted.

5.  To delete the request that was used to create a scratch org, choose **Delete** from the dropdown.

    Deleting the request (ScratchOrgInfo) also deletes the active scratch org.
