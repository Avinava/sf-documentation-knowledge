---
title: "User Settings"
domain: chatterapi
topic: user-settings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.909Z
estimatedTokens: 373
keywords: [User, Settings, user’s, Chatter, specific]
---

# User Settings

> Settings specific to a user.

# User Settings

Settings specific to a user.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| approvalPosts | Boolean | User can approve workflows from Chatter posts. | Small, 29.0 | 27.0 |
| canAccess​PersonalStreams | Boolean | User can access personal stream feeds. | Small, 40.0 | 40.0 |
| canFollow | Boolean | User can follow things. | Small, 29.0 | 24.0 |
| canModify​AllData | Boolean | User has Modify all Data permission. | Small, 29.0 | 24.0 |
| canOwnGroups | Boolean | User can own groups. | Small, 29.0 | 24.0 |
| canViewAllData | Boolean | User has View all Data permission. | Small, 29.0 | 24.0 |
| canViewAllGroups | Boolean | User has View all Groups permission. | Small, 29.0 | 24.0 |
| canViewAllUsers | Boolean | User has View all Users permission. | Small, 29.0 | 24.0 |
| canViewCommunity​Switcher | Boolean | User can see the site switcher menu. | Small, 34.0 | 34.0 |
| canViewFull​UserProfile | Boolean | User can see other user’s Chatter profile. | Small, 29.0 | 24.0 |
| canView​PublicFiles | Boolean | User can see all files that are public. | Small, 29.0 | 24.0 |
| currencySymbol | String | Currency symbol to use for displaying currency values. Applicable only when the multiCurrency property of the Features response body is false. | Small, 29.0 | 28.0 |
| externalUser | Boolean | User is a Chatter customer. | Small, 29.0 | 24.0 |
| fileSync​Limit | Integer | Maximum number of files user can sync. | Small, 32.0 | 32.0 |
| fileSync​StorageLimit | Integer | Maximum storage for synced files, in megabytes (MB). | Small, 29.0 | 29.0 |
| folderSync​Limit | Integer | Maximum number of folders user can sync. | Small, 32.0 | 32.0 |
| hasAccess​ToInternalOrg | Boolean | User is a member of the internal org. | Small, 29.0 | 26.0 |
| hasChatter | Boolean | User has access to Chatter. | Small, 31.0 | 31.0 |
| hasFileSync | Boolean | User has Sync Files permission. | Small, 29.0 | 26.0 |
| hasFieldService​LocationTracking | Boolean | User has Field Service GPS tracking enabled. | Small, 41.0 | 41.0 |
| hasFieldService​MobileAccess | Boolean | User has access to the Field Service mobile app. | Small, 41.0 | 41.0 |
| hasFileSync​ManagedClient​AutoUpdate | Boolean | Administrator for the user’s org allows file sync clients to update automatically. | Small, 34.0 | 34.0 |
| hasRestData​ApiAccess | Boolean | User has access to REST API. | Small, 29.0 | 29.0 |
| timeZone | Time Zone | User's time zone as selected in the user’s personal settings in Salesforce. This value doesn’t reflect a device's current location. | Small, 30.0 | 30.0 |
| userDefault​CurrencyIsoCode | String | ISO code for the default currency. Applicable only when the multiCurrency property of the Features response body is true. | Small, 29.0 | 28.0 |
| userId | String | 18-character ID of the user. | Small, 29.0 | 24.0 |
| userLocale | String | Locale of user. | Small, 29.0 | 24.0 |

#### See Also

-   [Organization](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_organization.htm "An org.")

## Code Examples

```
/chatter/users/userId/settings
```

```
/connect/communities/communityId/chatter/users/userId/settings
```

```
{"defaultGroupEmailFrequency": "Never"}
```

## Related Topics

- User Chatter
                            Settings (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_chatter.htm)
- Time Zone (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_timeZone.htm)
- Organization (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_organization.htm)
