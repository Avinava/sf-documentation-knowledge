---
title: "Configure Default Settings in Profiles"
domain: securityImplGuide
topic: configure-default-settings-in-profiles
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.304Z
estimatedTokens: 1117
keywords: [Configure, Settings, Profiles, assigned, apps, record, layouts, users, data, their, work]
---

# Configure Default Settings in Profiles

> Configure assigned apps, record types, page layouts, and other default settings in
    profiles so that assigned users can see the data and apps required to complete their
    work.

# Configure Default Settings in Profiles

Configure assigned apps, record types, page layouts, and other default settings in profiles so that assigned users can see the data and apps required to complete their work.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Essentials, Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |
| Custom Profiles available in: Essentials, Professional, Enterprise, Performance, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To view profiles: | View Setup and Configuration |
| To delete profiles and edit profile properties: | Manage Profiles and Permission Sets |

Profiles are one of the features that determine what users can see and do. For each profile, we recommend that you configure the following:

-   [Default assigned apps](https://help.salesforce.com/apex/HTViewHelpDoc?id=users_profiles_assigning_apps.htm&language=en_US)
-   [Default record types and page layouts](atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles_record_types.htm "Configure the record type and page layout assignment mappings that are used when users view records.")
-   [Login hours](atlas.en-us.securityImplGuide.meta/securityImplGuide/login_hours.htm "Specify the hours when users can log in based on the user profile.")
-   [Login IP ranges](atlas.en-us.securityImplGuide.meta/securityImplGuide/login_ip_ranges.htm "Control login access at the user level by specifying a range of allowed IP addresses on a user’s profile. When you define IP address restrictions for a profile, a login from any other IP address is denied.")
-   [Password policies](https://help.salesforce.com/apex/HTViewHelpDoc?id=users_profiles_password_policies.htm&language=en_US)
-   [Session settings](https://help.salesforce.com/apex/HTViewHelpDoc?id=users_profiles_session.htm&language=en_US)

You can also configure user, object, and field permissions in profiles. However, we strongly recommend that you use permission sets and permission set groups to manage your users’ permissions. Because you can reuse smaller permission set building blocks, you can avoid creating dozens or even hundreds of profiles for each user and job function. For more information, see [Permissions Sets](atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_overview.htm "A permission set is a collection of settings and permissions that give users access to various tools and functions. Permission sets extend users’ functional access without changing their profiles and are the recommended way to manage your users’ permissions.") in Salesforce Help.

Depending on your Salesforce org, settings for other features and apps are available to configure in profiles.

-   **[Assign Record Types and Page Layouts in Profiles](atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles_record_types.htm)**
    Configure the record type and page layout assignment mappings that are used when users view records.
-   **[App and System Settings in the Enhanced Profile User Interface](atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles_epui_app_and_system.htm)**
    In the enhanced profile user interface, administrators can easily navigate, search, and modify settings for a single profile. Permissions and settings are organized into pages under app and system categories, which reflect the rights users need to administer and use app and system resources.
-   **[Search in the Enhanced Profile User Interface](atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles_epui_search.htm)**
    To locate an object, tab, permission, or setting name on a profile page, type at least three consecutive letters in the Find Settings... box. As you type, suggestions for results that match your search terms appear in a list. Click an item in the list to go to its settings page.
-   **[View and Edit Login Hours in Profiles](atlas.en-us.securityImplGuide.meta/securityImplGuide/login_hours.htm)**
    Specify the hours when users can log in based on the user profile.
-   **[Restrict Login IP Addresses in Profiles](atlas.en-us.securityImplGuide.meta/securityImplGuide/login_ip_ranges.htm)**
    Control login access at the user level by specifying a range of allowed IP addresses on a user’s profile. When you define IP address restrictions for a profile, a login from any other IP address is denied.

## Related Topics

- Default record types and
          page layouts (atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles_record_types.htm)
- Login hours (atlas.en-us.securityImplGuide.meta/securityImplGuide/login_hours.htm)
- Login IP ranges (atlas.en-us.securityImplGuide.meta/securityImplGuide/login_ip_ranges.htm)
- Permissions Sets (atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_overview.htm)
- Assign Record Types and Page Layouts in Profiles (atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles_record_types.htm)
- App and System Settings in the Enhanced Profile User Interface (atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles_epui_app_and_system.htm)
- Search in the Enhanced Profile User Interface (atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles_epui_search.htm)
- View and Edit Login Hours in Profiles (atlas.en-us.securityImplGuide.meta/securityImplGuide/login_hours.htm)
- Restrict Login IP Addresses in Profiles (atlas.en-us.securityImplGuide.meta/securityImplGuide/login_ip_ranges.htm)
