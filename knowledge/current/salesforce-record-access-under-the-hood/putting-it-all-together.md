---
title: "Putting It All Together"
domain: salesforce-record-access-under-the-hood
topic: putting-it-all-together
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.109Z
estimatedTokens: 1532
keywords: [Putting, Together, paper’s, scenarios, seen, how, access, rights, users, recorded, Sharing, Group, Maintenance, tables, Salesforce]
---

# Putting It All Together

> In this paper’s scenarios, you have seen how the access rights of users are recorded in
   the Object Sharing and Group Maintenance tables of the Salesforce platform. In those relatively
   simple examples, only a few rows were changing in many of the tables. However, many common
   administrative o

# Putting It All Together

In this paper’s scenarios, you have seen how the access rights of users are recorded in the Object Sharing and Group Maintenance tables of the Salesforce platform. In those relatively simple examples, only a few rows were changing in many of the tables. However, many common administrative operations might require a much more substantial recalculation of access and many more updates to the underlying tables. This level of complexity is especially true for organizations with large amounts of data and complex role hierarchies. To illustrate how involved those operations might get, we will consider one seemingly simple group operation that can have a major impact on sharing recalculations: changing a user’s role. As in the previous scenarios, the organization-wide default settings are Private for all objects.

The role hierarchy and users are mostly the same, with two differences.

-   A new role has been created for the Small and Medium Business Partner Sales organization.
-   Instead of a broad sharing rule providing access to all Sales data to the Services branch, there is a more focused sharing rule providing access only to data from the West Sales Rep Role—the SMB Partner data is not shared to Services.

In this scenario, Wendy moves from the West Sales Rep role to the new SMB Partner Sales role, which is located in a separate branch of the role hierarchy.

![Wendy's move to the SMB Partner Sales role](/docs/resources/img/en-us/260.0?doc_id=images%2Fwendy1.png&folder=salesforce_record_access_under_the_hood)

When Wendy makes her move, the underlying sharing system performs the following maintenance under the hood.

-   If Wendy is the first member in her new role to own any data, Salesforce arranges access to her data for all users in roles above her in the hierarchy. This arrangement is performed by making those users indirect members of Wendy’s new role. Note the inclusion of Maria and Marc in the new SMB Partner Sales role.

    ![Maria and Marc's move to the SMB Partner Sales role](/docs/resources/img/en-us/260.0?doc_id=images%2Fwendy2.png&folder=salesforce_record_access_under_the_hood)

-   If Wendy’s new role has different settings than her old role for access to child records of Account—Contacts, Cases, and Opportunities—Salesforce:

    -   Removes some of Wendy’s shares to those records
    -   Adds new shares to reflect the change in settings

    ![Shares to Wendy's records](/docs/resources/img/en-us/260.0?doc_id=images%2Fwendy3.png&folder=salesforce_record_access_under_the_hood)

-   If Wendy owns any accounts that have been enabled for either the Customer or Partner portals, Salesforce:

    -   Makes changes to group membership
    -   Adjusts shares that provide access in the hierarchy to records owned by or shared to portal users

    For each portal-enabled account, 1–3 roles are appended to the main hierarchy below the account owner’s role. When Wendy moves, Salesforce removes these portal roles from her old role and appends them to her new role for *every* portal-enabled account she owns.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_record_access_under_the_hood)

    #### Note

    Salesforce must delete shares written to Wendy’s old role—shares that provide her and all her superiors with access to records owned by or visible to members of each portal account—and add them to her new role.

    ![Relocation of portal roles during Wendy's move](/docs/resources/img/en-us/260.0?doc_id=images%2Fwendy4.png&folder=salesforce_record_access_under_the_hood)

-   To reflect Wendy’s new assignment, Salesforce recalculates all sharing rules that include Wendy’s old or new role in the source group.

    ![Deleting shares to Wendy's records](/docs/resources/img/en-us/260.0?doc_id=images%2Fwendy5.png&folder=salesforce_record_access_under_the_hood)

    Specifically, Salesforce deletes shares to all of Wendy’s records from:

    -   The top role in the Service branch of the hierarchy
    -   All of its subordinates

    Depending on the sharing rule settings for her accounts, Salesforce might also need to remove shares to her account child records.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_record_access_under_the_hood)

    #### Note

    If Wendy owns portal accounts, and there are sharing rules that use portal roles as the source group, Salesforce may need to recalculate these rules. Those rules may also no longer be valid given Wendy’s new location in the hierarchy, in which case an administrator may need to modify or delete them.


In addition to these changes, the managers in the branch above Wendy’s old role lose access to all the data that she owns, as well as to child records shared through the role settings. This process is part of the normal operation of inheritance in the hierarchy—no updates to group membership or sharing tables are required.

So a lot can go on under the hood when an administrator takes what looks like a simple action, such as changing a user’s role. We chose a particularly complex operation to illustrate all the possible types of sharing maintenance, but other common group and data updates can have a similar impact.

Moving a role to another branch in the hierarchy

One benefit to moving a whole role is that any portal accounts simply move along with their parent role, and Salesforce doesn’t have to change the related sharing. On the other hand, Salesforce must do all of the remaining work associated with Wendy’s move for *every* user in the role being moved and for all their data.

Changing the owner of a portal account

The effort required for this task can be surprising because it looks like a simple data update—changing the name of the user in the Account owner field. When owners are in different roles, as the previous example shows, Salesforce isn’t moving only the portal roles to a new parent role, however; it’s also reparenting the portal roles associated with the account and adjusting sharing for all of the data associated with the portal account.
