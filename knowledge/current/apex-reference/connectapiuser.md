---
title: "ConnectApi.User"
domain: apex-reference
topic: connectapiuser
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.750Z
keywords: [ConnectApi.User, See]
---

# ConnectApi.User

# ConnectApi.User

User.

This class is abstract.

Subclass of [ConnectApi.ActionWithId](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actorWithIdOutput.htm "Actor with ID.").

Superclass of:

-   [ConnectApi.UserDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_detail.htm "Details about a user in an org.")
-   [ConnectApi.UserSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm "User summary.")

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| additional​Label | String | If one exists, an extra label for the user, for example, “Customer,” “Partner,” or “Acme Corporation.” | 30.0 |
| communityNickname | String | User’s nickname in the site. | 32.0 |
| companyName | String | Name of the company.If your Experience Cloud site allows access without logging in, the value is null for guest users. | 28.0 |
| displayName | String | User’s name that is displayed in the site. If nicknames are enabled, the nickname is displayed. If nicknames aren’t enabled, the full name is displayed. | 32.0 |
| firstName | String | User's first name. In version 39.0 and later, if nicknames are enabled, firstName is null. | 28.0 |
| isChatterGuest | Boolean | true if user is a Chatter customer; false otherwise. | 28.0 |
| isInThisCommunity | Boolean | true if user is in the same site as the context user; false otherwise. | 28.0 |
| lastName | String | User's last name. In version 39.0 and later, if nicknames are enabled, lastName is null. | 28.0 |
| outOfOffice | ConnectApi.OutOfOffice | If one exists, extra out-of-office message for the user. | 40.0 |
| photo | ConnectApi.Photo | Information about the user's photos. | 28.0 |
| reputation | ConnectApi.Reputation | Reputation of the user. | 32.0 |
| stamps | List<ConnectApi.Stamp> | Collection of the user’s stamps.In version 44.0 and later, use SOQL to get a user’s stamps. | 39.0–43.0 |
| title | String | User’s title.If your Experience Cloud site allows access without logging in, the value is null for guest users. | 28.0 |
| userType | ConnectApi.​UserType Enum | Type of user.ChatterGuest—User is an external user in a private group.ChatterOnly—User is a Chatter Free customer.Guest—User is unauthenticated.Internal—User is a standard org member.Portal—User is an external user in an Experience Cloud site.System—User is Chatter Expert or a system user.Undefined—User is a user type that is a custom object. | 28.0 |

#### See Also

-   [ConnectApi.RecommendationAudience](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_audience.htm "A custom recommendation audience.")