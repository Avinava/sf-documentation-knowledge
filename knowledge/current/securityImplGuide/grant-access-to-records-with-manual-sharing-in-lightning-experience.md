---
title: "Grant Access to Records with Manual Sharing in Lightning
    Experience"
domain: securityImplGuide
topic: grant-access-to-records-with-manual-sharing-in-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.790Z
estimatedTokens: 1320
keywords: [Grant, Access, Records, Manual, Sharing, Lightning, Experience, Give, specific, users, individual, record]
---

# Grant Access to Records with Manual Sharing in Lightning
    Experience

> Give specific users access to an individual record with manual sharing.

# Grant Access to Records with Manual Sharing in Lightning Experience

Give specific users access to an individual record with manual sharing.

| Available in: Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer Editions |


For example, the owner of a record wants to share a single case record with a coworker, because that coworker has experience resolving similar issues. The record owner creates a manual share that opens up access to only the one case record for their coworker (and users above the coworker in the role hierarchy). In this scenario, creating a manual share is easier and more secure than a sharing rule.

1.  Click **Sharing** on the record that you want to share.
2.  In the Search box, enter the groups, users, roles, or territories to add.

    Use the search dropdown to filter for a group type. Depending on the data in your org, your options can include:

    | Type | Description |
    | --- | --- |
    | Managers Groups | All direct and indirect managers of a user. |
    | Manager Subordinates Groups | Managers and all the direct and indirect reports that they manage. |
    | Public Groups | All public groups defined by your administrator. |
    | Users | All users in your org. Doesn’t include portal users. |
    | Roles | All roles defined for your org, including all users in each role. |
    | Roles and Subordinates | All users in the role plus all users in roles below that role in the hierarchy. Only available in production orgs created before February 8, 2024 and in non-preview sandboxes if digital experiences or portals aren’t enabled.In orgs created before February 8, 2024, after enabling digital experiences, manual shares accessible to Roles and Subordinates are automatically converted to be shared with Roles, Internal and Portal Subordinates. To secure external users’ access, remove Roles, Internal, and Portal Subordinates from the Share With list of your manual shares. Add Roles and Internal Subordinates instead. |
    | Roles and Internal Subordinates | All roles defined for your org. Includes all users in the specified role and all users in roles below that role. Doesn’t include partner portal and Customer Portal roles.In orgs created on February 8, 2024 or later and in preview sandboxes, this member type is available by default. In production orgs created before February 8, 2024 and in non-preview sandboxes, this member type is available after digital experiences or portals are enabled. |
    | Roles, Internal and Portal Subordinates | Adds a role and its subordinate roles. Includes all users in that role plus all users in roles below that role. Only available when digital experiences or portals are enabled for your org. Includes site and portal users. |
    | Territories | For orgs that use territory management, all territories defined for your org, including all users in each territory. Only the territories in the active territory model are available. |
    | Territories and Subordinates | For orgs that use territory management, all users in the territory plus the users below that territory. Only the territories in the active territory model are available. |

3.  Choose the access level for the record that you’re sharing and any associated records that you own.

    | Access Level | Description |
    | --- | --- |
    | Full Access | User can view, edit, delete, and transfer the record. User can also extend sharing access to other users. But the user can’t grant Full Access to other users. |
    | Read/Write | User can view and edit the record, and add associated records, notes, and attachments to it. |
    | Read Only | User can view the record, and add associated records to it. They can’t edit the record or add notes or attachments. |
    | Private | User can’t access the record in any way. |

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

    #### Note

    -   If you’re sharing an opportunity, contact, or case, the users you share it with must have at least Read access to the associated parent account via sharing features or you must have the ability to also share the account. You have the ability to share the account if you are the account owner, are a Salesforce admin, are above the account owner in the role hierarchy, and or have the Modify All permission on Account. If you have the ability to share the account itself, the users you share the opportunity, contact, or case with are automatically given Read access to the parent account.
    -   If you’re sharing an account, the access level for its child opportunities, cases, and contacts can’t be greater than the account owner’s default access from organization-wide defaults and the owner’s role. You can only grant a greater level of access if you’re a Salesforce admin, have the Modify All permission on Account, or have the Modify All Data user permission.
    -   Contact Access isn’t available when the org-wide default for contacts is set to Controlled by Parent.

4.  Save your changes.

On the Sharing page, you can click **Edit** for a summary of the groups of users that this record is shared with. For full details on who has access to the record, click **View Sharing Hierarchy**.
