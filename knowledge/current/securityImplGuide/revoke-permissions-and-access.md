---
title: "Revoke Permissions and Access"
domain: securityImplGuide
topic: revoke-permissions-and-access
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.874Z
estimatedTokens: 666
keywords: [Revoke, Permissions, Access, profiles, permission, groups, grant, deny, granted, honored, Transfer, Record, isn't, enabled, profile]
---

# Revoke Permissions and Access

> You can use profiles, permission sets, and permission set groups to grant access but
    not to deny access. Permissions granted from profiles, permission sets, and permission set
    groups are honored. For example, if Transfer Record isn't enabled in a profile but is enabled in
    a permission set, the assigned user can transfer records regardless of whether the user owns
    them. To revoke a permission, you must remove all instances of the permission from the
    user.

# Revoke Permissions and Access

You can use profiles, permission sets, and permission set groups to grant access but not to deny access. Permissions granted from profiles, permission sets, and permission set groups are honored. For example, if Transfer Record isn't enabled in a profile but is enabled in a permission set, the assigned user can transfer records regardless of whether the user owns them. To revoke a permission, you must remove all instances of the permission from the user.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Essentials, Contact Manager, Professional, Group, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


| Action | Consequence |
| --- | --- |
| Disable a permission or remove an access setting in the profile and any permission sets and permission set groups that are assigned to the user. | The permission or access setting is disabled for all other users assigned to the profile, permission sets, or permission set groups. |
| If a permission or access setting is enabled in the user's profile, assign a different profile to the user.ANDIf the permission or access setting is enabled in any permission sets or permission set groups that are assigned to the user, remove the permission set and permission set group assignments from the user. | The user may lose other permissions or access settings associated with the profile, permission sets, or permission set groups. |

To see a user’s assigned permissions, from the Users page in Setup, select a user, and then click **View Summary**. To see all included permissions in a permission set or permission set group, on the detail page for the specific permission set or permission set group, click **View Summary**. To see all users assigned to a permission set or permission set group, on the detail page, click **Manage Assignments**.

To resolve the consequence in either case, consider all possible options. For example, you can clone the assigned profile or any assigned permission sets where the permission or access setting is enabled. Then, disable the permission or access setting, and assign the cloned profile or permission sets to the user. Another option is use muting permission sets in permission set groups to mute selected permissions for the users assigned to the permission set group.

When possible, we recommend that you use permission sets and permission set groups to manage your users’ permissions. Because you can reuse smaller permission set building blocks, you can avoid creating dozens or even hundreds of profiles for each user and job function.
