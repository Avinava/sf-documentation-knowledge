---
title: "Create a User Role"
domain: securityImplGuide
topic: create-a-user-role
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.583Z
estimatedTokens: 989
keywords: [User, Role, hierarchy, users, access, records, owned, shared, roles, below, affect, components, reports]
---

# Create a User Role

> In the role hierarchy, users have access to records owned by or shared with users in
  roles below them. Roles within the hierarchy affect access on components such as records and
  reports.

# Create a User Role

In the role hierarchy, users have access to records owned by or shared with users in roles below them. Roles within the hierarchy affect access on components such as records and reports.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To view roles and role hierarchy: | View Roles and Role Hierarchy |
| To create, edit, and delete roles: | Manage Roles |
| To assign users to roles: | Manage Internal Users |

For information on designing your sharing setup to improve performance and speed up sharing changes, see the [Designing Record Access for Enterprise Scale](https://developer.salesforce.com/docs/atlas.en-us.260.0.draes.meta/draes/draes_preface.htm) guide.

Users at any role level can view, edit, and report on all data that’s owned by or shared with users below them in their role hierarchy, except in these two scenarios:

-   For custom objects, you can disable the **Grant Access Using Hierarchies** setting on the Sharing Settings page. When disabled, only the record owner and users who are granted access have access to the custom object’s records.
-   After you share a folder with a role, it’s visible only to users in that role, not to superior roles in the hierarchy.

1.  From Setup, in the Quick Find box, enter Roles, and then select **Roles**.
2.  If the “Understanding Roles” page is displayed, click **Set Up Roles**.
3.  Find the role under which you want to add the new role. Click **Add Role**.
4.  Add a Label for the role. The Role Name field autopopulates.
5.  Specify who the role reports to. The field is already populated with the role name under which you added the new role, but you can also edit the value here.
6.  Optionally, specify how the role name is displayed in reports. If the role name is long, consider using an abbreviation for reports.
7.  Specify the role’s access to the child contacts, opportunities, and cases associated with accounts that users in the role own.

    For example, you can set the contact access so that users in the role can edit all contacts associated with accounts that they own. This access applies regardless of who owns the contacts. And you can set the opportunity access so that users in a role can view, but not edit, all opportunities associated with accounts that they own. This access also applies regardless of who owns the opportunities.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

    #### Note

    If a child object’s organization-wide default is Public Read/Write, you can’t specify access, because you can’t use the role hierarchy to restrict access further than your organization-wide defaults. If the organization-wide default for contacts is Controlled by Parent, you also can’t specify access.

8.  Click **Save**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Roles for customer and partner users aren’t included on the role hierarchy setup page. For more information, see [Configure an External Account Hierarchy](https://help.salesforce.com/apex/HTViewHelpDoc?id=networks_external_account_hierarchies.htm&language=en_US).

When you edit groups, roles, and territories, sharing rules are recalculated to add or remove access as needed. Depending on the nature of your updates and your org’s setup, these sharing calculations can take a while to complete. If you experience sharing evaluations or timeouts, consider deferring sharing calculations before making large-scale updates, and then restart and recalculate sharing at a later time. For more information, see [Defer Sharing Calculations](https://help.salesforce.com/apex/HTViewHelpDoc?id=security_sharing_defer_sharing_calculations.htm&language=en_US) in Salesforce Help.
