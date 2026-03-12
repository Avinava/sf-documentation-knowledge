---
title: "User Profile"
domain: chatterapi
topic: user-profile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.475Z
estimatedTokens: 162
keywords: [User, Profile, Chatter]
---

# User Profile

> Chatter user profile.

# User Profile

Chatter user profile.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| capabilities | User Capabilities | The context user’s capabilities specific to the subject user’s profile | Medium, 29.0 | 29.0 |
| id | String | The ID of the user attached to the profile | Small, 29.0 | 29.0 |
| tabs | User Profile Tab[] | The tabs visible to the context user for that user type | Big, 29.0 | 29.0 |
| url | String | The URL of the user’s profile | Small, 29.0 | 29.0 |
| userDetail | User Detail | The details about the user attached to the profile | Small, 29.0 | 29.0 |

## Related Topics

- User Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_capabilities.htm)
- User Profile Tab (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_profile_tab.htm)
- User Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm)
