---
title: "Profiles"
domain: securityImplGuide
topic: profiles
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.603Z
estimatedTokens: 748
keywords: [Profiles, define, settings, users, assign, profile]
---

# Profiles

> Profiles define default settings for users. When you
            create users, you assign a profile to each one.

# Profiles

Profiles define default settings for users. When you create users, you assign a profile to each one.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Essentials, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |
| Custom Profiles available in: Essentials, Professional, Enterprise, Performance, Unlimited, and Developer Editions |


Watch the video to see how you can configure profiles.

<!-- -->

Your org includes several standard profiles where you can edit a limited number of settings. With editions that contain custom profiles, you can edit all permissions and settings except the user license. In Contact Manager and Group Edition orgs, you can assign standard profiles to your users, but you can’t view or edit the standard profiles, and you can’t create custom profiles.

Every profile belongs to exactly one user license type.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

When possible, assign users the Minimum Access - Salesforce profile, and then use permission sets and permission set groups to grant users only the permissions that they require. Apply permission sets to users based on the tasks that they do rather than their job title. Because you can reuse smaller permission set building blocks, you can avoid creating dozens or even hundreds of profiles for each user and job function. For more information, see [Permission Sets](atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_overview.htm "A permission set is a collection of settings and permissions that give users access to various tools and functions. Permission sets extend users’ functional access without changing their profiles and are the recommended way to manage your users’ permissions.") in Salesforce Help.

-   **[Configure Default Settings in Profiles](atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles_using_enhanced_ui.htm)**
    Configure assigned apps, record types, page layouts, and other default settings in profiles so that assigned users can see the data and apps required to complete their work.
-   **[Edit Multiple Profiles with Profile List Views](atlas.en-us.securityImplGuide.meta/securityImplGuide/users_inline_editing.htm)**
    If enhanced profile list views are enabled for your organization, you can change permissions in up to 200 profiles directly from the list view, without accessing individual profile pages.
-   **[Create or Clone Profiles](atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles_cloning.htm)**
    Create custom profiles using the API, or clone existing profiles and customize them to fit your business’s needs.
-   **[View a Profile's Assigned Users](atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles_assigned_users.htm)**
    View and manage all users assigned to a profile from the profile’s overview page.

## Related Topics

- Permission Sets (atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_overview.htm)
- Configure Default Settings in Profiles (atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles_using_enhanced_ui.htm)
- Edit Multiple Profiles with Profile List Views (atlas.en-us.securityImplGuide.meta/securityImplGuide/users_inline_editing.htm)
- Create or Clone Profiles (atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles_cloning.htm)
- View a Profile's Assigned Users (atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles_assigned_users.htm)
