---
title: "Permissions and Access Settings"
domain: securityImplGuide
topic: permissions-and-access-settings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.867Z
estimatedTokens: 821
keywords: [Permissions, Access, Settings, User, profiles, permission, effectively, understand, differences]
---

# Permissions and Access Settings

> User, object, and field permissions and access settings can be specified in profiles and
  permission sets. To use them effectively, understand the differences between profiles and
  permission sets.

# Permissions and Access Settings

User, object, and field permissions and access settings can be specified in profiles and permission sets. To use them effectively, understand the differences between profiles and permission sets.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| The available permissions and settings vary according to which Salesforce edition you have. |
| Permission sets available in: Essentials, Contact Manager, Professional, Group, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


Permissions and access settings specify what users can do within an organization:

-   Permissions determine a user's ability to access object records and perform certain tasks, such as viewing the Setup menu, permanently deleting records in the Recycle Bin, or resetting a user's password.
-   Access settings determine other functions, such as access to Apex classes, app visibility, and the hours when users can log in.

Every user is assigned only one profile, but can also have multiple permission sets. When setting up your users, use profiles to manage default settings, such as assigned apps, record types, page layouts. Then use permission sets to configure permissions and access settings.

This table shows the types of permissions and access settings that can be specified in profiles and permission sets and the recommended feature for managing them.

| Permission or Setting Type | In Profiles? | In Permission Sets? | Recommended Feature |
| --- | --- | --- | --- |
| Assigned apps |  |  | Profiles for default assigned apps, permission sets for additional assignments |
| Tab settings |  |  | Permission sets |
| Record type assignments |  |  | Profiles for default record types, permission sets for additional assignments |
| Page layout assignments |  |  | Profiles |
| Object permissions |  |  | Permission sets |
| Field permissions |  |  | Permission sets |
| User permissions (app and system) |  |  | Permission sets |
| Custom permissions |  |  | Permission sets |
| Apex class access |  |  | Permission sets |
| Visualforce page access |  |  | Permission sets |
| External data source access |  |  | Permission sets |
| Connected app access |  |  | Permission sets |
| Legacy SAML service provider access (not created via connected apps) |  |  | Permission sets |
| Login hours |  |  | Profiles |
| Login IP ranges |  |  | Profiles |

-   **[Revoke Permissions and Access](atlas.en-us.securityImplGuide.meta/securityImplGuide/permissions_revoking_access.htm)**
    You can use profiles, permission sets, and permission set groups to grant access but not to deny access. Permissions granted from profiles, permission sets, and permission set groups are honored. For example, if Transfer Record isn't enabled in a profile but is enabled in a permission set, the assigned user can transfer records regardless of whether the user owns them. To revoke a permission, you must remove all instances of the permission from the user.

#### See Also

-   [Assign Permission Sets to a Single User](atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_assigning.htm "Assign permission sets or remove permission set assignments for a single user from the user detail page.")

## Related Topics

- Revoke Permissions and Access (atlas.en-us.securityImplGuide.meta/securityImplGuide/permissions_revoking_access.htm)
- Assign Permission Sets to a Single User (atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_assigning.htm)
