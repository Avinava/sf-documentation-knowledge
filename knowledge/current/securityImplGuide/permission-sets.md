---
title: "Permission Sets"
domain: securityImplGuide
topic: permission-sets
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.839Z
estimatedTokens: 863
keywords: [Permission, collection, settings, permissions, give, users, access, various, tools, functions, extend, users’, functional, changing, their]
---

# Permission Sets

> A permission set is a collection of settings and permissions that give users access
        to various tools and functions. Permission sets extend users’ functional access without
        changing their profiles and are the recommended way to manage your users’
        permissions.

# Permission Sets

A permission set is a collection of settings and permissions that give users access to various tools and functions. Permission sets extend users’ functional access without changing their profiles and are the recommended way to manage your users’ permissions.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Essentials, Contact Manager, Professional, Group, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


Watch how you can grant users permissions using permission sets.

<!-- -->

Users can have only one profile but, depending on the Salesforce edition, they can have multiple permission sets. You can assign permission sets to various types of users, regardless of their profiles.

Create permission sets to grant access for a specific job or task, regardless of the primary job function or title of the users they’re assigned to. For example, let’s say you have several users who must delete and transfer leads. You can create a permission set based on the tasks that these users must perform and include the permission set within permission set groups based on the users’ job functions.

If a permission isn’t enabled in a profile but is enabled in a permission set, users with that profile and permission set have the permission. For example, if Manage Password Policies isn’t enabled in a user’s profile but is enabled in one of their permission sets, they can manage password policies.

A permission set's overview page provides an entry point for all of the permissions in a permission set. To open a permission set overview page, from Setup, enter Permission Sets in the Quick Find box, then select **Permission Sets** and select the permission set you want to view. To see the permission set’s enabled object, user, field, and custom permissions and which permission set groups it’s included in, click **View Summary**.

-   **[Configure Permissions and Access in Permission Sets](atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_permissions_access.htm)**
    Configure object, field, and user permissions as well as other access and feature settings in permission sets.
-   **[Work with Permission Set Lists](atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_view.htm)**
    Create list views to help view and manage your permission sets. You can also edit permissions in multiple permission sets at the same time using list views.
-   **[Manage Permission Set Assignments](atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_manage_assignments.htm)**
    You can assign permission sets to a single user from the user detail page or assign multiple users to a permission set from any permission set page.
-   **[Search Permission Sets](atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_search.htm)**
    To quickly navigate to other pages in a permission set, you can enter search terms in any permission set detail page.
-   **[View and Edit Assigned Apps in Permission Sets](atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_assigning_apps.htm)**
    Assigned app settings specify the apps that users can select in the Lightning Platform app menu.
-   **[Assign Custom Record Types in Permission Sets](atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_record_types_assign.htm)**
    You can assign record types to users in permission sets.

## Related Topics

- Configure Permissions and Access in Permission Sets (atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_permissions_access.htm)
- Work with Permission Set Lists (atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_view.htm)
- Manage Permission Set Assignments (atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_manage_assignments.htm)
- Search Permission Sets (atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_search.htm)
- View and Edit Assigned Apps in Permission Sets (atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_assigning_apps.htm)
- Assign Custom Record Types in Permission Sets (atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_record_types_assign.htm)
