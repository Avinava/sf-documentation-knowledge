---
title: "App and System Settings in the Enhanced Profile User Interface"
domain: securityImplGuide
topic: app-and-system-settings-in-the-enhanced-profile-user-interface
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.274Z
estimatedTokens: 698
keywords: [App, System, Settings, Enhanced, Profile, User, administrators, easily, navigate, search, modify, Permissions, organized, pages, under]
---

# App and System Settings in the Enhanced Profile User Interface

> In the enhanced profile user interface, administrators can easily navigate, search, and
    modify settings for a single profile. Permissions and settings are organized into pages under
    app and system categories, which reflect the rights users need to administer and use app and
    system resources.

# App and System Settings in the Enhanced Profile User Interface

In the enhanced profile user interface, administrators can easily navigate, search, and modify settings for a single profile. Permissions and settings are organized into pages under app and system categories, which reflect the rights users need to administer and use app and system resources.

| Available in: Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


## App Settings

Apps are sets of tabs that users can change by selecting the drop-down menu in the header. All underlying objects, components, data, and configurations remain the same, regardless of the selected app. In selecting an app, users navigate in a set of tabs that allows them to efficiently use the underlying functionality for app-specific tasks. For example, let's say you do most of your work in the sales app, which includes tabs like Accounts and Opportunities. To track a new marketing campaign, rather than adding the Campaigns tab to the sales app, you select Marketing from the app drop-down to view your campaigns and campaign members.

In the enhanced profile user interface, the Apps section of the overview page contains settings that are directly associated with the business processes that the apps enable. For profiles, we recommend that you configure these app settings:

-   Assigned apps
-   Record types and page layouts (under Object Settings)

## System Settings

Some system functions apply to an organization and not to any single app. For example, login hours and login IP ranges control a user's ability to log in, regardless of which app the user accesses. For profiles, we recommend that you configure these system settings:

-   Login hours
-   Login IP ranges
-   Session settings
-   Password policies

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

You can also configure user, object, and field permissions in profiles under App Settings and System Settings. However, we strongly recommend that you use permission sets and permission set groups to manage your users’ permissions. Because you can reuse smaller permission set building blocks, you can avoid creating dozens or even hundreds of profiles for each user and job function. For more information, see [Permissions Sets](atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_overview.htm "A permission set is a collection of settings and permissions that give users access to various tools and functions. Permission sets extend users’ functional access without changing their profiles and are the recommended way to manage your users’ permissions.") in Salesforce Help.

## Related Topics

- Permissions Sets (atlas.en-us.securityImplGuide.meta/securityImplGuide/perm_sets_overview.htm)
