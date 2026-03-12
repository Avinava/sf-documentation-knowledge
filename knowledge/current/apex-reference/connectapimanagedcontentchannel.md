---
title: "ConnectApi.ManagedContentChannel"
domain: apex-reference
topic: connectapimanagedcontentchannel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:27.762Z
estimatedTokens: 992
keywords: [ConnectApi.ManagedContentChannel, Managed, content, channel]
---

# ConnectApi.ManagedContentChannel

> Managed content channel.

# ConnectApi.ManagedContentChannel

Managed content channel.

Subclass of [ConnectApi.AbstractManagedContentChannelRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_managed_content_channel.htm "Managed content channel.") in version 62.0 and later

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| cacheControlMaxAge | Long | HTTP cache control max age response header for content delivered from the channel. | 55.0 |
| channelId | String | ID of the managed content channel. | 48.0–61.0 |
| channelName | String | Name of the managed content channel. | 48.0–61.0 |
| channelType | ConnectApi.​ManagedContent​ChannelType | Type of managed content channel. Values are:CloudToCloud—Cloud-to-Cloud integrated channel.Community—Experience Cloud site channel.ConnectedApp—Channel served by a connected app.PublicUnauthenticated—Public channel. All published content is publicly available.UserPermission—Channel backed by a system permission. All published content is available only to users with the permission. | 48.0–61.0 |
| domain | String | ID or name of the domain assigned to the channel. | 52.0–61.0 |
| domainId | String | ID of the domain assigned to the channel.In version 52.0 and later, this information is returned in the domain property. | 50.0–51.0 |
| domainName | String | Name of the domain assigned to the channel. | 50.0–61.0 |
| id | String | ID of the managed content channel. | 62.0 |
| isChannelSearchable | Boolean | Specifies whether the text contents of the channel are searchable (true) or not (false). | 48.0–61.0 |
| isDedicated​ContentDelivery | Boolean | Specifies whether the channel has off-core dedicated content delivery enabled (true) or not (false). Orgs hosted on Hyperforce use off-core dedicated content delivery to deliver content in public channels with high performance and low latency. | 63.0 |
| isDomainLocked | Boolean | Specifies whether the domain is locked and can’t be changed (true) or not (false). | 50.0–61.0 |
| isSearchable | Boolean | Specifies whether the text contents of the channel are searchable (true) or not (false). | 62.0 |
| managedContent​ChannelDomain | ConnectApi.​ManagedContent​ChannelDomain​Representation | Domain associated with the channel. | 62.0 |
| mediaCacheControl​MaxAge | Long | HTTP cache control max age response header for media delivered from the channel. | 57.0 |
| name | String | Name of the managed content channel. | 62.0 |
| targetId | String | ID of the target associated with the channel. | 62.0 |
| type | ConnectApi.​ManagedContent​ChannelType | Type of managed content channel. Values are:CloudToCloud—Cloud-to-Cloud integrated channel.Community—Experience Cloud site channel.ConnectedApp—Channel served by a connected app.PublicUnauthenticated—Public channel. All published content is publicly available.UserPermission—Channel backed by a system permission. All published content is available only to users with the permission. | 62.0 |

#### See Also

-   [ConnectApi.ManagedContentChannelCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel_collection.htm "Collection of managed content channels.")

-   [postManagedContentChannel(ManagedContentCreateInputParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm#apex_ConnectAPI_ManagedContentChannels_postManagedContentChannel_2 "Create a managed content channel.")

-   [getManagedContentChannel(channelId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm#apex_ConnectAPI_ManagedContentChannels_getManagedContentChannel_2 "Get a managed content channel.")

-   [patchManagedContentChannel(channelId, ManagedContentChannelInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm#apex_ConnectAPI_ManagedContentChannels_patchManagedContentChannel_3 "Update a managed content channel.")

## Related Topics

- ConnectApi.AbstractManagedContentChannelRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_managed_content_channel.htm)
- Long (atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ManagedContent​ChannelType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​ManagedContent​ChannelDomain​Representation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel_domain.htm)
- ConnectApi.ManagedContentChannelCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_channel_collection.htm)
- postManagedContentChannel(ManagedContentCreateInputParam) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm)
- getManagedContentChannel(channelId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm)
- patchManagedContentChannel(channelId, ManagedContentChannelInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentChannels_static_methods.htm)
