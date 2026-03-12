---
title: "ConnectApi.ManagedContentChannelDetail"
domain: apex-reference
topic: connectapimanagedcontentchanneldetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.770Z
estimatedTokens: 304
keywords: [ConnectApi.ManagedContentChannelDetail, Managed, content, channel, detail]
---

# ConnectApi.ManagedContentChannelDetail

> Managed content channel detail.

# ConnectApi.ManagedContentChannelDetail

Managed content channel detail.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| channelId | String | ID of the managed content channel. | 54.0–61.0 |
| channelName | String | Name of the managed content channel. | 54.0–61.0 |
| channelType | ConnectApi.​ManagedContent​ChannelType | Type of managed content channel. Values are:CloudToCloud—Cloud-to-Cloud integrated channel.Community—Experience Cloud site channel.ConnectedApp—Channel served by a connected app.PublicUnauthenticated—Public channel. All published content is publicly available.UserPermission—Channel backed by a system permission. All published content is available only to users with the permission. | 54.0–61.0 |
| domain | String | Domain assigned to the managed content channel. | 54.0–61.0 |
| domainName | String | Name of the domain assigned to the managed content channel. | 54.0–61.0 |
| isChannelSearchable | Boolean | Specifies whether the text of the channel's contents is searchable (true) or not (false). | 54.0–61.0 |
| isDomainLocked | Boolean | Specifies whether the channel’s domain is locked and can’t be changed (true) or not (false). | 54.0–61.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ManagedContent​ChannelType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
