---
title: "Managed Content Delivery Channel"
domain: chatterapi
topic: managed-content-delivery-channel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.443Z
estimatedTokens: 425
keywords: [Managed, Content, Delivery, Channel]
---

# Managed Content Delivery Channel

> Managed content delivery channel.

# Managed Content Delivery Channel

Managed content delivery channel.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| domain | String | ID or name of the domain assigned to the channel. | Small, 62.0 | 62.0 |
| domainName | String | Name of the domain assigned to the channel. | Small, 62.0 | 62.0 |
| id | String | ID of the managed content channel. | Small, 62.0 | 62.0 |
| isDedicated​ContentDelivery | Boolean | Specifies whether the channel has off-core dedicated content delivery enabled (true) or not (false). Orgs hosted on Hyperforce use off-core dedicated content delivery to deliver content in public channels with high performance and low latency. | Small, 63.0 | 63.0 |
| isDomainLocked | Boolean | Specifies whether the domain is locked and can’t be changed (true) or not (false). | Small, 62.0 | 62.0 |
| isSearchable | Boolean | Specifies whether the text contents of the channel are searchable (true) or not (false). | Small, 62.0 | 62.0 |
| name | String | Name of the managed content channel. | Small, 62.0 | 62.0 |
| type | String | Type of managed content channel. Values are:CloudToCloud—Cloud-to-Cloud integrated channel.Community—Experience Cloud site channel.ConnectedApp—Channel served by a connected app.PublicUnauthenticated—Public channel. All published content is publicly available.UserPermission—Channel backed by a system permission. All published content is available only to users with the permission. | Small, 62.0 | 62.0 |

#### See Also

-   [CMS Delivery Channel](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_delivery_channel.htm "Get a managed content delivery channel.")

## Related Topics

- CMS Delivery Channel (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_delivery_channel.htm)
