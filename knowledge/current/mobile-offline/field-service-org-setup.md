---
title: "Field Service Org Setup"
domain: mobile-offline
topic: field-service-org-setup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.734Z
estimatedTokens: 716
keywords: [Service, Org, Setup, permission, Lightning, SDK, Mobile, assign, users, develop, web, components, app, Define, User]
---

# Field Service Org Setup

> Create a permission set with the Lightning SDK for Field Service
                    Mobile
    permission, and assign this permission set to users who develop for or use
    Lightning web components in the mobile app.

# Field Service Org Setup

Create a permission set with the Lightning SDK for Field Service Mobile permission, and assign this permission set to users who develop for or use Lightning web components in the mobile app.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

This step is required for Field Service orgs. If you’re using LWC Offline in the Salesforce mobile app, skip to the next step.

Lightning web components for LWC Offline-enabled mobile apps is an opt-in feature. To enable it for your org, you must create and assign a permission set for your mobile users that includes enabling the Lightning SDK for Field Service Mobile permission. This permission set is required to access and run LWCs within the Field Service mobile app. (While not technically required to develop LWCs, you’ll have a hard time developing components when you can’t run them.)

You can use this one permission set for any number of Lightning web components and mobile users.

-   **[Define a Permission Set for Your Org](atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_org_setup.htm#quickstart_lwc_action_org_setup_create_permset)**
    Create a permission set that applies the permissions required to enable Lightning web components to users with the permission set.
-   **[Assign the Permission Set to a Mobile User](atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_org_setup.htm#quickstart_lwc_action_org_setup_assign_permset)**
    Assign the permission set that enables Lightning web components to users who must use or develop LWCs.

## Define a Permission Set for Your Org

Create a permission set that applies the permissions required to enable Lightning web components to users with the permission set.

1.  From Setup, enter Permission Sets in the Quick Find Box and select **Permission Sets**.
2.  Click **New**.

    -   For **Label**, enter Field Service - LWC Offline.
    -   For **Description**, enter Assign to Field Service Mobile users to give them permission to run LWC actions.
    -   For **License**, select **Field Service Mobile**.

3.  Click **Save**.
4.  In the Find Settings box, enter *Lightning SDK for Field Service Mobile* and click it.
5.  Click **Edit**.
6.  Select the **Lightning SDK for Field Service Mobile** checkbox.
7.  Click **Save**.

## Assign the Permission Set to a Mobile User

Assign the permission set that enables Lightning web components to users who must use or develop LWCs.

1.  From Setup, enter Permission Sets in the Quick Find Box and select **Permission Sets**.
2.  Select **Field Service - LWC Offline**, which is the new permission set.
3.  Click **Manage Assignments**.
4.  Click **Add Assignments**.
5.  Select your mobile user’s checkbox.

    For this quick start, the mobile user is **you**.

6.  Click **Assign**.

## Related Topics

- Define a Permission Set for Your Org (atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_org_setup.htm)
- Assign the Permission Set to a Mobile User (atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_org_setup.htm)
