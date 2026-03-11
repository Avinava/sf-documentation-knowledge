---
title: "ConnectApi.UserProfileTab"
domain: apex-reference
topic: connectapiuserprofiletab
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.190Z
keywords: [ConnectApi.UserProfileTab, See]
---

# ConnectApi.UserProfileTab

# ConnectApi.UserProfileTab

Information about a profile tab.

| Name | Type | Descriptio | Available Version |
| --- | --- | --- | --- |
| id | String | The tab’s unique identifier or 18–character ID | 29.0 |
| isDefault | Boolean | Specifies if the tab appears first when clicking the user profile (true) or not (false) | 29.0 |
| tabType | ConnectApi.​UserProfile​TabType Enum | Specifies the type of tabCustomVisualForce—Tab that displays data from a Visualforce page.CustomWeb—Tab that displays data from any external web-based application or web page.Element—Tab that displays generic content inline.Feed—Tab that displays the Chatter feed.Overview—Tab that displays user details. | 29.0 |
| tabUrl | String | The current tab’s content URL (for non built-in tab types) | 29.0 |

#### See Also

-   [ConnectApi.UserProfile](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_profile.htm "Details necessary to render a view of a user profile.")