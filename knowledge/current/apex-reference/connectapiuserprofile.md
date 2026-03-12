---
title: "ConnectApi.UserProfile"
domain: apex-reference
topic: connectapiuserprofile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.301Z
estimatedTokens: 160
keywords: [ConnectApi.UserProfile, necessary, render, view, user, profile]
---

# ConnectApi.UserProfile

> Details necessary to render a view of a user profile.

# ConnectApi.UserProfile

Details necessary to render a view of a user profile.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| capabilities | ConnectApi.UserCapabilities | The context user’s capabilities specific to the subject user’s profile. | 29.0 |
| id | String | The ID of the user attached to the profile. | 29.0 |
| tabs | List<ConnectApi.UserProfileTab> | The tabs visible to the context user specific to the subject user’s profile. | 29.0 |
| url | String | The URL of the user’s profile. | 29.0 |
| userDetail | ConnectApi.UserDetail | The details about the user attached to the profile. | 29.0 |

## Related Topics

- ConnectApi.UserCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_capabilities.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.UserProfileTab (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_profile_tab.htm)
- ConnectApi.UserDetail (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_detail.htm)
