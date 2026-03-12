---
title: "Set Field Permissions in Permission Sets and Profiles"
domain: securityImplGuide
topic: set-field-permissions-in-permission-sets-and-profiles
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.289Z
estimatedTokens: 626
keywords: [Permissions, Permission, Profiles, specify, access, level]
---

# Set Field Permissions in Permission Sets and Profiles

> Field permissions specify the access level for each field in an object.

# Set Field Permissions in Permission Sets and Profiles

Field permissions specify the access level for each field in an object.

| Available in: Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


| User Permissions Needed |
| --- |
| To set field-level security: | Manage Profiles and Permission SetsANDCustomize Application |

Watch how you can restrict access to specific fields using permission sets.

<!-- -->

In some cases, you want users to have access to an object, but you don’t want every field accessible to them. For example, you want certain account information accessible only to select employees. By configuring field permissions, or field-level security, you can control the specific fields that a user can see and edit on object records.

We strongly recommend that you use permission sets and permission set groups instead of profiles to manage your users’ field permissions. Because you can reuse smaller permission set building blocks, you can avoid creating dozens or even hundreds of profiles for each user and job function. For more information, see [Permissions Sets](atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_overview.htm "A permission set is a collection of settings and permissions that give users access to various tools and functions. Permission sets extend users’ functional access without changing their profiles and are the recommended way to manage your users’ permissions.") in Salesforce Help.

1.  From Setup, enter Permission Sets in the Quick Find box, then select **Permission Sets**. Or, enter Profiles in the Quick Find box, then select **Profiles**.
2.  Select a permission set or profile.
3.  Depending on which interface you're using, do one of the following:
    -   Permission sets or enhanced profile user interface—In the **Find Settings...** box, enter the name of the object you want and select it from the list. Click **Edit**, then scroll to the Field Permissions section.
    -   Original profile user interface—In the Field-Level Security section, click **View** next to the object you want to modify, and then click **Edit**.
4.  Specify the field's access level.
5.  Click **Save**.

You can see all field permissions, as well as user, object, and custom permissions, that are enabled for a permission set on its summary page. On the permission set’s detail page, click **View Summary**.

## Related Topics

- Permissions Sets (atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_overview.htm)
