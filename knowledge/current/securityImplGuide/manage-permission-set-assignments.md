---
title: "Manage Permission Set Assignments"
domain: securityImplGuide
topic: manage-permission-set-assignments
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.827Z
estimatedTokens: 554
keywords: [Manage, Permission, Assignments, assign, user, detail, multiple, users, any]
---

# Manage Permission Set Assignments

> You can assign permission sets to a single user from the user detail page or assign
    multiple users to a permission set from any permission set page.

# Manage Permission Set Assignments

You can assign permission sets to a single user from the user detail page or assign multiple users to a permission set from any permission set page.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Essentials, Contact Manager, Professional, Group, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


| User Permissions Needed |
| --- |
| To assign permission sets: | Assign Permission SetsANDView Setup and Configuration |
| To remove permission set assignments: | Assign Permission Sets |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Some permissions require users to have a specific user license or permission set license before you can grant them in permission sets. For example, if you add the Use Identity Connect user permission to the Identity permission set, you can assign only users with the Identity Connect permission set license to the permission set. Or, if you create a permission set without specifying a license and include the Author Apex permission, you can’t assign the permission set to Salesforce Platform users, because their user license doesn’t allow Apex authoring.

It’s possible to assign inactive users to permission sets, but this practice isn’t recommended. If you’re troubleshooting errors related to permission set assignments, make sure to check if an inactive user is causing the issue.

-   **[Assign Permission Sets to a Single User](atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_assigning.htm)**
    Assign permission sets or remove permission set assignments for a single user from the user detail page.
-   **[Assign a Permission Set to Multiple Users](atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_mass_assign.htm)**
    Assign a permission set to one or more users from any permission set page.
-   **[Remove User Assignments from a Permission Set](atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_remove_assignments.htm)**
    From any permission set page, you can remove the permission set assignment from one or more users.

## Related Topics

- Assign Permission Sets to a Single User (atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_assigning.htm)
- Assign a Permission Set to Multiple Users (atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_mass_assign.htm)
- Remove User Assignments from a Permission Set (atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_remove_assignments.htm)
