---
title: "Sharing Rule Categories"
domain: securityImplGuide
topic: sharing-rule-categories
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.160Z
estimatedTokens: 930
keywords: [Sharing, Rule, Categories, define, choose, owned, members, Share, dropdown, Depending, features, enabled, organization, may, appear]
---

# Sharing Rule Categories

> When you define a sharing rule, you can choose from the following categories in the
      owned by members of and Share with dropdown lists.
    Depending on the type of sharing rule and the features enabled for your organization, some
    categories may not appear.

# Sharing Rule Categories

When you define a sharing rule, you can choose from the following categories in the owned by members of and Share with dropdown lists. Depending on the type of sharing rule and the features enabled for your organization, some categories may not appear.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer EditionsSee Sharing Rule Considerations for more information on availability. |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

You can’t include high-volume Experience Cloud site users in sharing rules because they don’t have roles and can’t be in public groups.

| Category | Description |
| --- | --- |
| Managers Groups | All direct and indirect managers of a user. |
| Manager Subordinates Groups | A manager and all direct and indirect reports who he or she manages. |
| Queues | All records owned by the queue, excluding records owned by individual members of the queue. Available only in the owned by members of list. |
| Public Groups | All public groups defined by your administrator.If Salesforce Experiences or portals are enabled for your organization, the All Partner Users or All Customer Portal Users group displays. These groups include all partner or customer users, respectively, allowed to access your site or portal, except for high-volume users. |
| Roles | All roles defined for your organization, excluding site and portal roles. This includes all of the users in the specified role. |
| Portal Roles | All roles defined for your organization’s site or portal. This includes all users in the specified role, except high-volume users.A site or portal role name includes the name of the account that it’s associated with, except for person accounts, which include the user alias. |
| Roles and Subordinates | All roles defined for your organization. This includes all of the users in the specified role plus all of the users in roles below that role. Only available in production orgs created before February 8, 2024 and in non-preview sandboxes if digital experiences or portals aren’t enabled for your organization. |
| Portal Roles and Subordinates | All roles defined for your organization’s site or portal. This includes all of the users in the specified role plus all of the users below that role in the site or portal role hierarchy, except for high-volume users.A site or portal role name includes the name of the account that it’s associated with, except for person accounts, which include the user alias. |
| Roles and Internal Subordinates | All roles defined for your organization. This includes all of the users in the specified role plus all of the users in roles below that role, excluding site and portal roles. In orgs created on February 8, 2024 or later and in preview sandboxes, this member type is available by default. In production orgs created before February 8, 2024 and in non-preview sandboxes, this member type is available after digital experiences or portals are enabled. |
| Roles, Internal and Portal Subordinates | All roles defined for your organization. This includes all of the users in the specified role plus all of the users in roles below that role, including site and portal roles. Only available when digital experiences or portals are enabled for your org. |
| Territories | All territories defined for your organization. |
| Territories and Subordinates | All territories defined for your organization. This includes the specified territory plus all territories below it. |
| Guest User | All unauthenticated users in a site. |

## Related Topics

- Sharing Rule Considerations (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_rule_considerations.htm)
