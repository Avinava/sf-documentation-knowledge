---
title: "Search in the Enhanced Profile User Interface"
domain: securityImplGuide
topic: search-in-the-enhanced-profile-user-interface
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.278Z
estimatedTokens: 569
keywords: [Search, Enhanced, Profile, User, locate, tab, permission, setting, least, three, consecutive, letters, Settings, box, suggestions]
---

# Search in the Enhanced Profile User Interface

> To locate an object, tab, permission, or setting name on a profile page, type at least
  three consecutive letters in the Find Settings... box. As you type, suggestions for results that
  match your search terms appear in a list. Click an item in the list to go to its settings
  page.

# Search in the Enhanced Profile User Interface

To locate an object, tab, permission, or setting name on a profile page, type at least three consecutive letters in the Find Settings... box. As you type, suggestions for results that match your search terms appear in a list. Click an item in the list to go to its settings page.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| The available profile permissions and settings vary according to which Salesforce edition you have. |


| User Permissions Needed |
| --- |
| To find permissions and settings in a profile: | View Setup and Configuration |

Search terms aren’t case-sensitive. For some categories, you can search for the specific permission or setting name. For other categories, search for the category name.

| Item | Search for | Example |
| --- | --- | --- |
| Assigned apps | App name | Type sales in the Find Settings box, then select Sales from the list. |
| Objects | Object name | Let’s say you have an Albums custom object. Type albu, then select Albums. |
| FieldsRecord typesPage layout assignments | Parent object name | Let’s say your Albums object contains a Description field. To find the Description field for albums, type albu, select Albums, and scroll down to Description under Field Permissions. |
| Tabs | Tab or parent object name | Type rep, then select Reports. |
| App and system permissions | Permission name | Type api, then select API Enabled. |
| All other categories | Category name | To find Apex class access settings, type apex, then select Apex Class Access. To find custom permissions, type cust, then select Custom Permissions. And so on. |

If no results appear in a search:

-   Check if the permission, object, tab, or setting you’re searching for is available in the current organization.
-   Verify that the item you’re searching for is available for the user license that’s associated with the current profile. For example, a profile with the High Volume Customer Portal license doesn’t include the “Modify All Data” permission.
-   Ensure that your search term contains at least three consecutive characters that match the name of the item you want to find.
-   Make sure that you spelled the search term correctly.
