---
title: "Managed Content Channel Update"
domain: chatterapi
topic: managed-content-channel-update
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.010Z
estimatedTokens: 385
keywords: [Managed, Content, Channel, Input]
---

# Managed Content Channel Update

> Input body to update a managed content channel.

# Managed Content Channel Update

Input body to update a managed content channel.

Root XML tag

<ManagedContentChannelUpdateRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cacheControl​MaxAge | Long | Cache control max age value in seconds. | Optional | 62.0 |
| domain | String | ID or name of the domain assigned to the public channel. | Optional | 62.0 |
| isDedicated​ContentDelivery | Boolean | Specifies whether the channel has off-core dedicated content delivery enabled (true) or not (false). Orgs hosted on Hyperforce use off-core dedicated content delivery to deliver content in public channels with high performance and low latency. | Optional | 63.0 |
| isDomainLocked | Boolean | Specifies whether the domain is locked and can’t be changed (true) or not (false). | Optional | 62.0 |
| isSearchable | Boolean | Specifies whether the text contents of the channel are searchable (true) or not (false). | Optional | 62.0 |
| mediaCache​ControlMaxAge | Long | Media cache control max age value in seconds. | Optional | 62.0 |
| name | String | Name of the managed content channel. | Required | 62.0 |
| targetId | String | ID of the target associated with the managed content channel. | Required for all channel types except Public​Unauthenticated | 62.0 |

#### See Also

-   [CMS Channel](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_channel.htm "Get, update, or delete a managed content channel.")

## Code Examples

```
{
"name": "New Channel Name"
}
```

## Related Topics

- CMS Channel (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_channel.htm)
