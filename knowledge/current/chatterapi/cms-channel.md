---
title: "CMS Channel"
domain: chatterapi
topic: cms-channel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.745Z
estimatedTokens: 585
keywords: [CMS, Channel, managed, content]
---

# CMS Channel

> Get, update, or delete a managed content channel.

# CMS Channel

Get, update, or delete a managed content channel.

To get a managed content delivery channel, see [CMS Delivery Channel](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_delivery_channel.htm "Get a managed content delivery channel.").

Resource

```

```

Available version

62.0

HTTP methods

GET, PATCH, DELETE

Request body for PATCH

[Managed Content Channel Update](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_channel_update.htm "Input body to update a managed content channel.")

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

Response body for GET and PATCH

[Managed Content Channel](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_channel.htm "Managed content channel.")

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/cms/channels/channelId
```

```
{
"name": "New Channel Name"
}
```

## Related Topics

- CMS Delivery
        Channel (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_delivery_channel.htm)
- Managed Content Channel Update (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_channel_update.htm)
- Managed Content Channel (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_channel.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
