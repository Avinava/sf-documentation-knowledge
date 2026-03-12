---
title: "User Detail"
domain: chatterapi
topic: user-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.441Z
estimatedTokens: 1383
keywords: [User, Detail, context, doesn’t, permission]
---

# User Detail

> User detail. If the context user doesn’t have permission to see a property, the
    property is set to null.

# User Detail

User detail. If the context user doesn’t have permission to see a property, the property is set to null.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| aboutMe | String | Text from user's profile. | Big, 29.0 | 23.0 |
| additional​Label | String | If one exists, an extra label for the user, for example, “Customer,” “Partner,” or “Acme Corporation.” | Small, 30.0 | 30.0 |
| address | Address | User’s address. | Big, 29.0 | 23.0 |
| bannerPhoto | Banner Photo | User’s banner photo. | Big, 36.0 | 36.0 |
| chatterActivity | Chatter Activity | Chatter activity statistics. | Big, 29.0 | 23.0 |
| chatterInfluence | Chatter Influence | User’s influence rank. | Big, 29.0 | 23.0 |
| community​Nickname | String | User’s nickname in the site. | Medium, 32.0 | 32.0 |
| companyName | String | Company name. | Small, 29.0 | 23.0 |
| currentStatus | User Status | User's current status. |  | 23.0–25.0 |
| displayName | String | User’s name that is displayed in the site. If nicknames are enabled, the nickname is displayed. If nicknames aren’t enabled, the full name is displayed. | Small, 32.0 | 32.0 |
| email | String | User's email address. | Medium, 29.0 | 23.0 |
| firstName | String | User's first name. In version 39.0 and later, if nicknames are enabled, firstName is null. | Small, 29.0 | 23.0 |
| followersCount | Integer | Number of users following this user. | Big, 29.0 | 23.0 |
| followingCounts | Following Counts | Information about items the user is following. | Big, 29.0 | 23.0 |
| groupCount | Integer | Number of groups user is following. | Big, 29.0 | 23.0 |
| hasChatter | Boolean | true if user has access to Chatter; false otherwise. | Small, 31.0 | 31.0 |
| id | String | 18-character ID of the user. | Small, 29.0 | 23.0 |
| isActive | Boolean | true if user is active, false otherwise. | Small, 29.0 | 23.0 |
| isChatterGuest | Boolean | true if user is a Chatter customer, false otherwise.In version 26.0 and later, use the userType property. |  | 23.0–25.0 |
| isInThis​Community | Boolean | true if the user is in the same Experience Cloud site as the context user; false otherwise. Can be false for record feed @mentions on posts with the scope “All Users.” | Small, 29.0 | 28.0 |
| lastName | String | User's last name. In version 39.0 and later, if nicknames are enabled, lastName is null. | Small, 29.0 | 23.0 |
| managerId | String | 18-character ID of the user’s manager. | Big, 29.0 | 23.0 |
| managerName | String | Locale-based concatenation of manager's first and last names. | Big, 29.0 | 23.0 |
| motif | Motif | Small, medium, and large icons indicating that the object is a user. The motif can also contain the object’s base color.The motif icon is not the user’s profile picture. | Small, 29.0 | 27.0 |
| mySubscription | Reference | If the context user is following this user, contains information about the subscription, otherwise null. | Medium, 29.0 | 23.0 |
| name | String | Locale-based concatenation of first and last names. In version 39.0 and later, if nicknames are enabled, name is the nickname. | Small, 29.0 | 23.0 |
| outOfOffice | Out of Office | If one exists, extra out-of-office message for the user. | Small, 40.0 | 40.0 |
| phoneNumbers | Phone Number[] | Collection of user's phone numbers. | Big, 29.0 | 23.0 |
| photo | Photo | Information about the user's photos. | Small, 29.0 | 23.0 |
| reputation | Reputation | Reputation of the user in the site, which is determined by the number of points earned from events and actions performed in the site. | Big, 32.0 | 32.0 |
| stamps | Stamp[] | Collection of the user’s stamps.In version 44.0 and later, use SOQL to get a user’s stamps. | Small, 39.0 | 39.0–43.0 |
| thanksReceived | Integer | Number of thanks the user has received. | Big, 29.0 | 29.0 |
| title | String | Title of the user. | Small, 29.0 | 23.0 |
| type | String | Value is User. | Small, 29.0 | 23.0 |
| url | String | URL to the user's Chatter profile. | Small, 29.0 | 23.0 |
| username | String | User name of the user, such as Admin@mycompany.com. | Small, 29.0 | 24.0 |
| userType | String | Type of user. Valid values are:ChatterGuest—User is an external user in a private group.ChatterOnly—User is a Chatter Free customer.Guest—User is unauthenticated.Internal—User is a standard org member.Portal—User is an external user in an Experience Cloud site.System—User is Chatter Expert or a system user.Undefined—User is a user type that is a custom object. | Medium, 29.0 | 26.0 |

#### See Also

-   [User Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm "The User Summary response body is a subset of the User Detail response body.")

-   [Case Comment Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_case_comment_capability.htm "If a feed element has this capability, it has a case comment on the case feed.")

-   [Edit Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_edit_capability.htm "If a feed element or comment has this capability, it can be edited by users who have permission.")

-   [Custom Recommendation Audience](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_audience.htm "A custom recommendation audience.")

-   [User Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_page.htm "Page of Chatter users.")

-   [User Profile](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_profile.htm "Chatter user profile.")

## Related Topics

- Address (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_address.htm)
- Banner Photo (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_banner_photo.htm)
- Chatter Activity (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_activity.htm)
- Chatter Influence (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_influence.htm)
- User Status (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_status.htm)
- Following Counts (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_following_counts.htm)
- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Out of Office (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_out_of_office.htm)
- Phone Number (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_phone_number.htm)
