---
title: "Search Permission Sets"
domain: securityImplGuide
topic: search-permission-sets
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.854Z
estimatedTokens: 662
keywords: [Search, Permission, quickly, navigate, pages, enter, terms, any, detail]
---

# Search Permission Sets

> To quickly navigate to other pages in a permission set, you can enter search terms in
  any permission set detail page.

# Search Permission Sets

To quickly navigate to other pages in a permission set, you can enter search terms in any permission set detail page.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Essentials, Contact Manager, Professional, Group, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


| User Permissions Needed |
| --- |
| To search permission sets: | View Setup and Configuration |

On any of the permission sets detail pages, type at least three consecutive letters of an object, setting, or permission name in the ![Lookup](/docs/resources/img/en-us/260.0?doc_id=help%2Fresources-global%2F_corporate%2Fimages%2Flookup20.gif&folder=securityImplGuide) **Find Settings...** box. The search terms aren't case-sensitive. As you type, suggestions for results that match your search terms appear in a list. Click an item in the list to go to its settings page.

For some categories, you can search for the specific permission or setting name. For other categories, search for the category name.

| Item | Search for | Example |
| --- | --- | --- |
| Assigned apps | App name | Type sales in the Find Settings box, then select Sales from the list. |
| Objects | Object name | Let’s say you have an Albums custom object. Type albu, then select Albums. |
| FieldsRecord types | Parent object name | Let’s say your Albums object contains a Description field. To find the Description field for albums, type albu, select Albums, and scroll down to Description under Field Permissions. |
| Tabs | Tab or parent object name | Type rep, then select Reports. |
| App and system permissions | Permission name | Type api, then select API Enabled. |
| All other categories | Category name | To find Apex class access settings, type apex, then select Apex Class Access. To find custom permissions, type cust, then select Custom Permissions. And so on. |

If you don’t get any results, don’t worry. Here’s some tips that can help:

-   Check if the search term has at least three consecutive characters that match the object, setting, or permission name.
-   The permission, object, or setting you're searching for might not be available in the current Salesforce org.
-   The item you’re searching for might not be available for the user license that’s associated with the current permission set. For example, a permission set with the Standard Platform User license doesn’t include the “Modify All Data” permission.
-   The permission set license associated with the permission set doesn’t include the object, setting, or permission name you’re searching for.
