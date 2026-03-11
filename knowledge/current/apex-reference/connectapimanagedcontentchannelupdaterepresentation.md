---
title: "ConnectApi.ManagedContentChannelUpdateRepresentation"
domain: apex-reference
topic: connectapimanagedcontentchannelupdaterepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.275Z
keywords: [ConnectApi.ManagedContentChannelUpdateRepresentation, See]
---

# ConnectApi.ManagedContentChannelUpdateRepresentation

# ConnectApi.ManagedContentChannelUpdateRepresentation

Input class to update a managed content channel.

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

#### See Also

-   [patchManagedContentChannel(channelId, ManagedContentChannelInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm#apex_ConnectAPI_ManagedContentChannels_patchManagedContentChannel_3 "Update a managed content channel.")