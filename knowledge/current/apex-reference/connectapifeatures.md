---
title: "ConnectApi.Features"
domain: apex-reference
topic: connectapifeatures
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:38.767Z
keywords: [ConnectApi.Features, See]
---

# ConnectApi.Features

# ConnectApi.Features

Features available to the context user in the org.

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| activityReminder​Notifications​Enabled | Boolean | Reserved for future use. | 37.0 |
| chatter | Boolean | Specifies whether Chatter is enabled. | 28.0 |
| chatterActivity | Boolean | Specifies whether user details include information about Chatter activity. | 28.0 |
| chatterAnswers | Boolean | Specifies whether Chatter Answers is enabled.NoteWith the Spring ’18 release, Salesforce no longer supports Chatter Answers. Users of Chatter Answers can post, answer, comment, or view existing Chatter Answers data, but support and updates are scheduled to end. We recommend transitioning to Chatter Questions. For more information, see End of Support for Chatter Answers in Spring ’18. | 29.0 |
| chatter​GlobalInfluence | Boolean | Specifies whether user details include global Chatter activity. | 28.0 |
| chatterGroup​Records | Boolean | Specifies whether Chatter groups can have records associated with them. | 30.0 |
| chatterGroup​RecordSharing | Boolean | Specifies whether Chatter records are implicitly shared among group members when records are added to groups. | 30.0 |
| chatter​Messages | Boolean | Specifies whether Chatter messages are enabled. | 28.0 |
| chatter​Topics | Boolean | Specifies whether topics are enabled. | 28.0 |
| communities​Enabled | Boolean | Specifies whether digital experiences is enabled. | 31.0 |
| community​​Moderation | Boolean | Specifies whether moderation is enabled. | 29.0 |
| community​​Reputation | Boolean | Specifies whether reputation is enabled. | 32.0 |
| custom​Fiscal​Calendar​Enabled | Boolean | Specifies whether custom fiscal calendar is enabled. | 63.0 |
| dashboard​​Component​Snapshots | Boolean | Specifies whether the user can post dashboard component snapshots. | 28.0 |
| default​Currency​IsoCode | String | ISO code of the default currency. Applicable only when multiCurrency is false. | 28.0 |
| default​Locale | String | Specifies the Default locale. | 63.0 |
| einstein​VoiceEnabled | Boolean | Reserved for future use. | 46.0 |
| einstein​VoiceInPilot​Enabled | Boolean | Reserved for future use. | 46.0 |
| einstein​VoiceLogging​Enabled | Boolean | Reserved for future use. | 46.0 |
| einstein​VoiceProviderId | Integer | Reserved for future use. | 46.0 |
| favorites​Enabled | Boolean | Specifies whether favorites in Lightning are enabled. | 41.0 |
| feedPolling | Boolean | Reserved for future use. | 28.0 |
| feedStream​Enabled | Boolean | Specifies whether Chatter feed streams are enabled. | 39.0 |
| files | Boolean | Specifies whether files can act as resources for Connect REST API. | 28.0 |
| filesOnComments | Boolean | Specifies whether files can be attached to comments. | 28.0 |
| fiscal​Year​Start​Month | Integer | Specifies the number that corresponds to the month that starts the fiscal year for the org. For example, if the org's fiscal year starts in February, the value is 2. | 63.0 |
| forecasting3​Aggregated​Enabled | Boolean | Specifies whether aggregated forecasting is enabled for mobile clients. | 38.0 |
| forecasting​Enabled | Boolean | Specifies whether forecasting is enabled. | 38.0 |
| forecasting​PeriodRange | Integer | Range of the forecasting period. | 38.0 |
| forecasting​PeriodStart | Integer | Start index for the forecasting period. | 38.0 |
| forecasting​PeriodType | ConnectApi.​PeriodType | Time period used for forecasting. Values are:MonthQuarterWeekYear | 38.0 |
| groupsCanFollow | Boolean | Reserved for future use. | 28.0–29.0 |
| ideas | Boolean | Specifies whether Ideas is enabled. | 29.0 |
| liveAgent​HostName | String | Live Agent host name configured for the org. | 41.0 |
| managedTopics​Enabled | Boolean | Specifies whether managed topics are enabled. | 32.0 |
| maxEntity​Subscriptions​PerStream | Integer | Specifies the maximum number of feed-enabled entities that can be subscribed to in a Chatter stream. | 39.0 |
| maxFiles​PerFeedItem | Integer | Specifies the maximum number of files that can be added to a feed item. | 36.0 |
| maxStreams​PerPerson | Integer | Specifies the maximum number of Chatter streams that a user can have. | 39.0 |
| mobile​Notifications​Enabled | Boolean | Reserved for future use. | 29.0 |
| multiCurrency | Boolean | Specifies whether the org uses multiple currencies (true) or not (false). When false, the defaultCurrencyIsoCode indicates the ISO code of the default currency. | 28.0 |
| offlineEdit​Enabled | Boolean | Specifies whether the offline object permissions are enabled for Salesforce for Android and Salesforce for iOS mobile clients. | 37.0 |
| publisherActions | Boolean | Specifies whether actions in the publisher are enabled. | 28.0 |
| storeData​OnDevices​Enabled | Boolean | Specifies whether the Salesforce for Android and Salesforce for iOS can use secure, persistent storage on mobile devices to cache data. | 30.0 |
| thanksAllowed | Boolean | Reserved for future use. | 28.0 |
| trendingTopics | Boolean | Specifies whether trending topics are enabled. | 28.0 |
| userNav​ItemsEnabled | Boolean | Specifies whether users can customize the navigation bar in Lightning. | 41.0 |
| uses​Start​Date​As​Fiscal​Year​Name | Boolean | Specifies whether the calendar year when the fiscal year begins is referred to as the year of the company's fiscal year. For example, if the fiscal year begins in November 2025, but is referred to as fiscal year 2026, the value is false. | 63.0 |
| viralInvites​Allowed | Boolean | Specifies whether existing Chatter users can invite people in their company to use Chatter. | 28.0 |
| wave | Boolean | Specifies whether CRM Analytics is enabled. | 36.0 |

#### See Also

-   [getSettings()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Organization_static_methods.htm#apex_ConnectAPI_Organization_getSettings "Get information about the context user and the org, including which features are enabled.")
    
-   [ConnectApi.OrganizationSettings](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_organization.htm "Org settings.")