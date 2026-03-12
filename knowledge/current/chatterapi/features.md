---
title: "Features"
domain: chatterapi
topic: features
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.644Z
estimatedTokens: 1711
keywords: [Features, context, user, org, feature, disabled, resources, associated, unavailable, feature-related, objects]
---

# Features

> Features available to the context user in the org. If a feature is disabled, the
  resources associated with that feature are unavailable and some feature-related properties on
  objects are set to null.

# Features

Features available to the context user in the org. If a feature is disabled, the resources associated with that feature are unavailable and some feature-related properties on objects are set to null.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| activityReminder​Notifications​Enabled | Boolean | Reserved for future use. | Small, 37.0 | 37.0 |
| chatter | Boolean | Specifies whether Chatter is enabled. | Small, 29.0 | 27.0 |
| chatterActivity | Boolean | Specifies whether user details include information about Chatter activity. | Small, 29.0 | 24.0 |
| chatterAnswers | Boolean | Specifies whether Chatter Answers is enabled.NoteWith the Spring ’18 release, Salesforce no longer supports Chatter Answers. Users of Chatter Answers can post, answer, comment, or view existing Chatter Answers data, but support and updates are scheduled to end. We recommend transitioning to Chatter Questions. For more information, see End of Support for Chatter Answers in Spring ’18. | Small, 29.0 | 29.0 |
| chatter​GlobalInfluence | Boolean | Specifies whether user details include global Chatter activity. | Small, 29.0 | 24.0 |
| chatter​GroupRecords | Boolean | Specifies whether Chatter groups can have records associated with them. | Small, 33.0 | 33.0 |
| chatter​GroupRecord​Sharing | Boolean | Specifies whether Chatter records are implicitly shared among group members when records are added to groups. | Small, 33.0 | 33.0 |
| chatter​Messages | Boolean | Specifies whether Chatter messages are enabled. | Small, 29.0 | 24.0 |
| chatter​Topics | Boolean | Specifies whether topics are enabled. | Small, 29.0 | 28.0 |
| communities​Enabled | Boolean | Specifies whether digital experiences is enabled. | Small, 31.0 | 31.0 |
| community​Moderation | Boolean | Specifies whether moderation is enabled. | Small, 29.0 | 29.0 |
| community​Reputation | Boolean | Specifies whether reputation is enabled. | Small, 32.0 | 32.0 |
| custom​Fiscal​Calendar​Enabled | Boolean | Specifies whether custom fiscal calendar is enabled. | Small, 63.0 | 63.0 |
| dashboard​Component​Snapshots | Boolean | Specifies whether the user can post dashboard component snapshots. | Small, 29.0 | 24.0 |
| defaultCurrency​IsoCode | String | ISO code of the default currency. Applicable only when multiCurrency is false. | Small, 29.0 | 28.0 |
| default​Locale | String | Specifies the Default locale. | Small, 63.0 | 63 |
| einstein​VoiceEnabled | Boolean | Reserved for future use. | Small, 46.0 | 46.0 |
| einstein​VoiceInPilot​Enabled | Boolean | Reserved for future use. | Small, 46.0 | 46.0 |
| einstein​VoiceLogging​Enabled | Boolean | Reserved for future use. | Small, 46.0 | 46.0 |
| einstein​VoiceProviderId | Integer | Reserved for future use. | Small, 46.0 | 46.0 |
| favorites​Enabled | Boolean | Specifies whether favorites in Lightning are enabled. | Small, 41.0 | 41.0 |
| feedPolling | Boolean | Reserved for future use. | Small, 29.0 | 24.0 |
| feedStream​Enabled | Boolean | Specifies whether Chatter feed streams are enabled. | Small, 39.0 | 39.0 |
| files | Boolean | Specifies whether files can act as resources for Connect REST API. | Small, 29.0 | 24.0 |
| filesOnComments | Boolean | Specifies whether files can be attached to comments. | Small, 29.0 | 24.0 |
| fiscal​Year​Start​Month | Integer | Specifies the number that corresponds to the month that starts the fiscal year for the org. For example, if the org's fiscal year starts in February, the value is 2. | Small, 63.0 | 63.0 |
| forecasting3​Aggregated​Enabled | Boolean | Specifies whether aggregated forecasting is enabled for mobile clients. | Small, 38.0 | 38.0 |
| forecasting​Enabled | Boolean | Specifies whether forecasting is enabled. | Small, 38.0 | 38.0 |
| forecasting​PeriodRange | Integer | Range of the forecasting period. | Small, 38.0 | 38.0 |
| forecasting​PeriodStart | Integer | Start index for the forecasting period. | Small, 38.0 | 38.0 |
| forecasting​PeriodType | String | Time period used for forecasting. Values are:MonthQuarterWeekYear | Small, 38.0 | 38.0 |
| groupsCanFollow | Boolean | Reserved for future use. | Small, 29.0 | 28.0–29.0 |
| ideas | Boolean | Specifies whether Ideas is enabled. | Small, 29.0 | 29.0 |
| liveAgent​HostName | String | Live Agent host name configured for the org. | Small, 41.0 | 41.0 |
| managedTopics​Enabled | Boolean | Specifies whether managed topics are enabled. | Small, 32.0 | 32.0 |
| maxEntity​Subscriptions​PerStream | Integer | Specifies the maximum number of feed-enabled entities that can be subscribed to in a Chatter stream. | Small, 39.0 | 39.0 |
| maxFiles​PerFeedItem | Integer | Specifies the maximum number of files that can be added to a feed item. | Small, 36.0 | 36.0 |
| maxStreams​PerPerson | Integer | Specifies the maximum number of Chatter streams that a user can have. | Small, 39.0 | 39.0 |
| mobile​Notifications​Enabled | Boolean | Reserved for future use. | Small, 29.0 | 29.0 |
| multiCurrency | Boolean | Specifies whether the org uses multiple currencies (true) or not (false). When false, the defaultCurrencyIsoCode indicates the ISO code of the default currency. | Small, 29.0 | 28.0 |
| offlineEdit​Enabled | Boolean | Specifies whether the offline object permissions are enabled for Salesforce for Android and Salesforce for iOS mobile clients. | Small, 37.0 | 37.0 |
| publisherActions | Boolean | Specifies whether actions in the publisher are enabled. | Small, 29.0 | 28.0 |
| storeData​OnDevices​Enabled | Boolean | Specifies whether the Salesforce for Android and Salesforce for iOS can use secure, persistent storage on mobile devices to cache data. | Small, 30.0 | 30.0 |
| trendingTopics | Boolean | Specifies whether trending topics are enabled. | Small, 29.0 | 24.0 |
| userNav​ItemsEnabled | Boolean | Specifies whether users can customize the navigation bar in Lightning. | Small, 41.0 | 41.0 |
| usesStartDateAsFiscalYearName | Boolean | Specifies whether the calendar year when the fiscal year begins is referred to as the year of the company's fiscal year. For example, if the fiscal year begins in November 2025, but is referred to as fiscal year 2026, the value is false. | Small, 63.0 | 63.0 |
| viralInvites​Allowed | Boolean | Specifies whether existing Chatter users can invite people in their company to use Chatter. | Small, 29.0 | 24.0 |
| wave | Boolean | Specifies whether CRM Analytics is enabled. | Small, 36.0 | 36.0 |

#### See Also

-   [Connect Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_connect.htm "Information about the context user’s org and settings, and information about the Experience Cloud sites the context user is a member of.")

-   [Organization](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_organization.htm "An org.")

## Related Topics

- Connect Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_connect.htm)
- Organization (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_organization.htm)
