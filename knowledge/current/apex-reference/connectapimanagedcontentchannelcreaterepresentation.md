---
title: "ConnectApi.ManagedContentChannelCreateRepresentation"
domain: apex-reference
topic: connectapimanagedcontentchannelcreaterepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.270Z
keywords: [ConnectApi.ManagedContentChannelCreateRepresentation, See]
---

# ConnectApi.ManagedContentChannelCreateRepresentation

# ConnectApi.ManagedContentChannelCreateRepresentation

Input class to create a managed content channel.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cacheControlMax​Age | Long | Cache control max age value in seconds. | Optional | 62.0 |
| domain | String | ID or name of the domain assigned to the public channel. | Optional | 62.0 |
| isDedicated​ContentDelivery | Boolean | Specifies whether the channel has off-core dedicated content delivery enabled (true) or not (false). Orgs hosted on Hyperforce use off-core dedicated content delivery to deliver content in public channels with high performance and low latency. | Optional | 63.0 |
| isDomainLocked | Boolean | Specifies whether the domain is locked and can’t be changed (true) or not (false). | Optional | 62.0 |
| isSearchable | Boolean | Specifies whether the text contents of the channel are searchable (true) or not (false). | Optional | 62.0 |
| mediaCacheControl​MaxAge | Long | Media cache control max age value in seconds. | Optional | 62.0 |
| name | String | Name of the managed content channel. | Required | 62.0 |
| targetId | String | ID of the target associated with the managed content channel. | Required for all channel types except Public​Unauthenticated | 62.0 |
| type | ConnectApi.​ManagedContent​ChannelType | Type of managed content channel. Values are:CloudToCloud—Cloud-to-Cloud integrated channel.Community—Experience Cloud site channel.ConnectedApp—Channel served by a connected app.PublicUnauthenticated—Public channel. All published content is publicly available.UserPermission—Channel backed by a system permission. All published content is available only to users with the permission. | Required | 62.0 |

#### See Also

-   [postManagedContentChannel(ManagedContentCreateInputParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm#apex_ConnectAPI_ManagedContentChannels_postManagedContentChannel_2 "Create a managed content channel.")