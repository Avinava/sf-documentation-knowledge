---
title: "Field Service Org Setup"
domain: field-service
topic: field-service-org-setup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:56.993Z
estimatedTokens: 727
keywords: [Field, Service, Org, Setup, Define, assign, required, permission, sets., Note, Permission, Set, Assign, Mobile, User]
---

# Field Service Org Setup

> Define and assign the required permission sets.

# Field Service Org Setup

Define and assign the required permission sets.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

This step is required for Field Service orgs. If you’re using LWC Offline in the Salesforce mobile app, skip to the next step.

Lightning web components for LWC Offline-enabled mobile apps is an opt-in feature. To enable it for your org, you must define and assign the permissions in the steps provided below. These are required to access and run LWCs within the Field Service mobile app. (While not technically required to develop LWCs, you’ll have a hard time developing components when you can’t run them.)

.

-   **[Define a Permission Set for Your Org](atlas.en-us.field_service_dev.meta/field_service_dev/sfs_gs_lwc_action_org_setup.htm#sfs_gs_lwc_action_org_setup_create_permset)**
    Create a permission set that applies the permissions required to enable Lightning Data Service for Field Service mobile app users.
-   **[Assign the Permission Set to a Mobile User](atlas.en-us.field_service_dev.meta/field_service_dev/sfs_gs_lwc_action_org_setup.htm#sfs_gs_lwc_action_org_setup_assign_permset)**
    Assign Lightning Data Service permissions to Field Service mobile app users.

## Define a Permission Set for Your Org

Create a permission set that applies the permissions required to enable Lightning Data Service for Field Service mobile app users.

1.  From Setup, enter Permission Sets in the Quick Find Box and select **Permission Sets**.
2.  Click **New**.

    -   For **Label**, enter Field Service - Lightning Data Service.
    -   For **Description**, enter Assign to Field Service Mobile users to give them permission to use features that use Lightning Data Service.
    -   For **License**, select **Field Service Mobile**.

3.  Click **Save**.
4.  In the Find Settings box, enter Lightning SDK for Field Service Mobile and click it.
5.  Click **Edit**.
6.  Select **Lightning SDK for Field Service Mobile** and save your work.

## Assign the Permission Set to a Mobile User

Assign Lightning Data Service permissions to Field Service mobile app users.

Create your permission set.

1.  From Setup, in the Quick Find box, enter and select **Permission Sets**.
2.  Scroll to the permission set you created, in this case **Field Service - Lightning Data Service**, and click on it.
3.  Click **Manage Assignments**, then **Add Assignments**.
4.  Select the users you’d like to assign this permission set to.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

    #### Note

    You can assign an expiration date at which time the permission set is removed for the selected users. If you want to assign the permission set indefinitely, leave **No expiration date** selected.

5.  Click **Assign**.
6.  On the Assignment Summary screen, click **Done**.

## Related Topics

- Define a Permission Set for Your Org (atlas.en-us.field_service_dev.meta/field_service_dev/sfs_gs_lwc_action_org_setup.htm)
- Assign the Permission Set to a Mobile User (atlas.en-us.field_service_dev.meta/field_service_dev/sfs_gs_lwc_action_org_setup.htm)
