---
title: "Group Member Types"
domain: securityImplGuide
topic: group-member-types
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.254Z
estimatedTokens: 947
keywords: [Group, Member, groups, various, internal, external, users]
---

# Group Member Types

> Many types of groups are available for various internal and external
                users.

# Group Member Types

Many types of groups are available for various internal and external users.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer EditionsThe member types that are available vary depending on your edition. |


| User Permissions Needed |
| --- |
| To create or edit a public group: | Manage Users |
| To create or edit another user’s personal group: | Manage Users |

When you create or edit a group, you can select the following types of members from the Search drop-down list. Depending on your organization settings, some types may not be available.

| Member Type | Description |
| --- | --- |
| Customer Portal Users | All of your Customer Portal users. This is only available when a customer site or portal is enabled for your organization. |
| Partner Users | All of your partner users. This is only available when a partner site or portal is enabled for your organization. |
| Personal Groups | All of your own groups. This is only available when creating other personal groups. |
| Portal Roles | All roles defined for your organization’s site or portal. This includes all users in the specified role, except high-volume users.A site or portal role name includes the name of the account that it’s associated with, except for person accounts, which include the user alias. |
| Portal Roles and Subordinates | All roles defined for your organization’s site or portal. This includes all of the users in the specified role plus all of the users below that role in the site or portal role hierarchy, except for high-volume users.A site or portal role name includes the name of the account that it’s associated with, except for person accounts, which include the user alias. |
| Public Groups | All public groups defined by your administrator. |
| Roles | All roles defined for your organization. Adding a role to a group includes all of the users in that role, but doesn’t include site or portal roles. |
| Roles and Internal Subordinates | Adding a role and its subordinate roles includes all of the users in that role plus all of the users in roles below that role. This doesn't include site or portal roles or users. In orgs created on February 8, 2024 or later and in preview sandboxes, this member type is available by default. In production orgs created before February 8, 2024 and in non-preview sandboxes, this member type is available after digital experiences or portals are enabled. |
| Roles and Subordinates | Adding a role and its subordinate roles includes all of the users in that role plus all of the users in roles below that role. This is only available in production orgs created before February 8, 2024 and in non-preview sandboxes if digital experiences or portals aren’t enabled for your organization.WarningIn Salesforce orgs created before February 8, 2024, after enabling digital experiences, all Roles and Subordinates members in groups are converted to Roles, Internal and Portal Subordinates members. Review public groups that contain Roles, Internal and Portal Subordinates members, and replace them with Role and Internal Subordinates as required. |
| Roles, Internal and Portal Subordinates | Adding a role and its subordinate roles includes all of the users in that role plus all of the users in roles below that role. This is only available when digital experiences or portals are enabled for your org. This includes site and portal users. |
| Users | All users in your organization. This doesn't include site or portal users. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

You can't add unauthenticated guest users to public groups.
