---
title: "ConnectApi.UserDetail"
domain: apex-reference
topic: connectapiuserdetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.271Z
estimatedTokens: 468
keywords: [ConnectApi.UserDetail, user, org]
---

# ConnectApi.UserDetail

> Details about a user in an org.

# ConnectApi.UserDetail

Details about a user in an org.

Subclass of [ConnectApi.User](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_User.htm "User.").

If the context user doesn’t have permission to see a property, its value is set to null.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| aboutMe | String | Text from user's profile. | 28.0 |
| address | ConnectApi.​Address | User’s address. | 28.0 |
| bannerPhoto | ConnectApi.BannerPhoto | User’s banner photo. | 36.0 |
| chatterActivity | ConnectApi.​Chatter​Activity | Chatter activity statistics. | 28.0 |
| chatterInfluence | ConnectApi.​Global​Influence | User’s influence rank. | 28.0 |
| email | String | User's email address. | 28.0 |
| followersCount | Integer | Number of users following this user. | 28.0 |
| followingCounts | ConnectApi.​Following​Counts | Information about items the user is following. | 28.0 |
| groupCount | Integer | Number of groups user is following. | 28.0 |
| hasChatter | Boolean | true if user has access to Chatter; false otherwise. | 31.0 |
| isActive | Boolean | true if user is active; false otherwise. | 28.0 |
| managerId | String | 18-character ID of the user’s manager. | 28.0 |
| managerName | String | Locale-based concatenation of manager's first and last names. | 28.0 |
| phoneNumbers | List<ConnectApi.​Phone​Number> | Collection of user's phone numbers. | 28.0 |
| thanksReceived | Integer | The number of times the user has been thanked. | 29.0 |
| username | String | Username of the user, such as Admin@mycompany.com. | 28.0 |

#### See Also

-   [ConnectApi.UserPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_page.htm "Page of users.")

-   [ConnectApi.UserProfile](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_profile.htm "Details necessary to render a view of a user profile.")

## Related Topics

- ConnectApi.User (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_User.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​Address (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_address.htm)
- ConnectApi.BannerPhoto (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm)
- ConnectApi.​Chatter​Activity (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_activity.htm)
- ConnectApi.​Global​Influence (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Chatter_Influence.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.​Following​Counts (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_followingCounts.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
