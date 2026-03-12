---
title: "Create and Edit Public Groups"
domain: securityImplGuide
topic: create-and-edit-public-groups
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.612Z
estimatedTokens: 1063
keywords: [Edit, Groups, help, configure, users’, access, records, features, administrators, delegated]
---

# Create and Edit Public Groups

> Create public groups to help configure your users’ access to records and other
      features. Only administrators and delegated administrators can create and edit public
      groups.

# Create and Edit Public Groups

Create public groups to help configure your users’ access to records and other features. Only administrators and delegated administrators can create and edit public groups.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To create or edit a public group: | Manage Users |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

When you edit groups, roles, and territories, sharing rules are recalculated to add or remove access as needed.

Depending on the nature of your updates and your org’s setup, these sharing calculations can take a while to complete. If you experience sharing evaluations or timeouts, consider deferring sharing calculations before making large-scale updates, and then restart and recalculate sharing at a later time. For more information, see [Defer Sharing Calculations](https://help.salesforce.com/apex/HTViewHelpDoc?id=security_sharing_defer_sharing_calculations.htm&language=en_US) in Salesforce Help.

To create or edit a group:

1.  From Setup, in the Quick Find box, enter Public Groups, and then select **Public Groups**.
2.  Click **New**, or click **Edit** next to the group you want to edit.
3.  Add the relevant description in the Description field.
4.  For Label, enter the name used to refer to the group in any user interface pages.
5.  Enter the unique Group Name used by the API and managed packages.
6.  To allow automatic access to records using your role hierarchies, select **Grant Access Using Hierarchies**. When selected, any records shared with users in this group are also shared with users higher in the hierarchy.

    Deselect **Grant Access Using Hierarchies** if you’re creating a public group with All Internal Users as members, which optimizes performance for sharing records with groups.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

    #### Note

    If Grant Access Using Hierarchies is deselected, users that are higher in the role hierarchy don’t receive automatic access to records shared with the public group. However, users can still receive access via the role hierarchy if the Grant Access Using Hierarchies setting is enabled on the Sharing Settings page. System Administrators and users with the View All and Modify All object permissions and the View All Data and Modify All Data system permissions can also access records they don’t own.

7.  From the Search dropdown, select the type of member to add. If you don’t see the member you want to add, enter keywords in the search box and click **Find**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

    #### Note

    For account owners to see child records owned by high-volume Experience Cloud site users, they must be members of any share groups with access to the site users' data.

8.  Select members from the Available Members box, and click **Add** to add them to the group.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=securityImplGuide)

    #### Tip

    To manage public group membership more easily, we recommend adding or removing members from the public group's access summary. For more information, see [Manage Public Group Membership](https://help.salesforce.com/apex/HTViewHelpDoc?id=manage_public_group_membership.htm&language=en_US) in Salesforce Help.

    If your group contains more than 10,000 members, you can experience performance issues or group members being deleted when updating membership on the group's Edit or Create pages. To prevent these issues, adjust group membership using the public group's access summary, user access policies, or the GroupMember API. You can also contact Salesforce Customer Support to enable the modified Group Setup interface.

9.  Specify any delegated administration groups whose members can add or remove members from this public group. Select groups from the Available Delegated Groups box, and then click **Add**.
10.  Save your changes.
