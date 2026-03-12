---
title: "ConnectApi.ManagedContentDeliveryChannelRepresentation"
domain: apex-reference
topic: connectapimanagedcontentdeliverychannelrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:27.765Z
estimatedTokens: 435
keywords: [ConnectApi.ManagedContentDeliveryChannelRepresentation, Managed, content, delivery, channel.]
---

# ConnectApi.ManagedContentDeliveryChannelRepresentation

> Managed content delivery channel.

# ConnectApi.ManagedContentDeliveryChannelRepresentation

Managed content delivery channel.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| domain | String | Domain assigned to the managed content channel. | 62.0 |
| domainName | String | Name of the domain assigned to the managed content channel. | 62.0 |
| id | String | ID of the managed content channel. | 62.0 |
| isDedicated​ContentDelivery | Boolean | Specifies whether the channel has off-core dedicated content delivery enabled (true) or not (false). Orgs hosted on Hyperforce use off-core dedicated content delivery to deliver content in public channels with high performance and low latency. | 63.0 |
| isDomainLocked | Boolean | Specifies whether the channel’s domain is locked and can’t be changed (true) or not (false). | 62.0 |
| isSearchable | Boolean | Specifies whether the text of the channel's contents is searchable (true) or not (false). | 62.0 |
| name | String | Name of the managed content channel. | 62.0 |
| type | ConnectApi.​ManagedContent​ChannelType | Type of managed content channel. Values are:CloudToCloud—Cloud-to-Cloud integrated channel.Community—Experience Cloud site channel.ConnectedApp—Channel served by a connected app.PublicUnauthenticated—Public channel. All published content is publicly available.UserPermission—Channel backed by a system permission. All published content is available only to users with the permission. | 62.0 |

#### See Also

-   [getManagedContentDeliveryChannel(channelId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm#apex_ConnectAPI_ManagedContentDelivery_getManagedContentDeliveryChannel_1 "Get a managed content delivery channel.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​ManagedContent​ChannelType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- getManagedContentDeliveryChannel(channelId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentDelivery_static_methods.htm)
