---
title: "ConnectApi.UserSettings"
domain: apex-reference
topic: connectapiusersettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:29.274Z
estimatedTokens: 679
keywords: [ConnectApi.UserSettings, Settings, specific, user.]
---

# ConnectApi.UserSettings

> Settings specific to a user.

# ConnectApi.UserSettings

Settings specific to a user.

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| approvalPosts | Boolean | User can approve workflows from Chatter posts. | 28.0 |
| canAccess​PersonalStreams | Boolean | User can access personal stream feeds. | 40.0 |
| canFollow | Boolean | User can follow users and records. | 28.0 |
| canModify​AllData | Boolean | User has Modify all Data permission. | 28.0 |
| canOwnGroups | Boolean | User can own groups. | 28.0 |
| canViewAllData | Boolean | User has View all Data permission. | 28.0 |
| canViewAllGroups | Boolean | User has View all Groups permission. | 28.0 |
| canViewAllUsers | Boolean | User has View all Users permission. | 28.0 |
| canViewCommunity​Switcher | Boolean | User can see the site switcher menu. | 34.0 |
| canViewFull​UserProfile | Boolean | User can see other user’s Chatter profile. | 28.0 |
| canViewPublicFiles | Boolean | User can see all files that are public. | 28.0 |
| currencySymbol | String | Currency symbol to use for displaying currency values. Applicable only when the ConnectApi.Features.multiCurrency property is false. | 28.0 |
| externalUser | Boolean | User is a Chatter customer. | 28.0 |
| fileSync​Limit | Integer | Maximum number of files user can sync. | 32.0 |
| fileSync​StorageLimit | Integer | Maximum storage for synced files, in megabytes (MB). | 29.0 |
| folderSync​Limit | Integer | Maximum number of folders user can sync. | 32.0 |
| hasAccessTo​InternalOrg | Boolean | User is a member of the internal org. | 28.0 |
| hasChatter | Boolean | User has access to Chatter. | 31.0 |
| hasFileSync | Boolean | User has Sync Files permission. | 28.0 |
| hasFieldService​LocationTracking | Boolean | User has Field Service GPS tracking enabled. | 41.0 |
| hasFieldService​MobileAccess | Boolean | User has access to the Field Service mobile app. | 41.0 |
| hasFileSync​ManagedClient​AutoUpdate | Boolean | Administrator for the user’s org allows file sync clients to update automatically. | 34.0 |
| hasRestData​ApiAccess | Boolean | User has access to REST API. | 29.0 |
| timeZone | ConnectApi.​TimeZone | The user's time zone as selected in the user’s personal settings in Salesforce. This value does not reflect a device's current location. | 30.0 |
| userDefault​CurrencyIsoCode | String | The ISO code for the default currency. Applicable only when the ConnectApi.Features.multiCurrency property is true. | 28.0 |
| userId | String | 18-character ID of the user. | 28.0 |
| userLocale | String | Locale of user. | 28.0 |

#### See Also

-   [ConnectApi.OrganizationSettings](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_organization.htm "Org settings.")

## Related Topics

- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.​TimeZone (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_timezone.htm)
- ConnectApi.OrganizationSettings (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_organization.htm)
