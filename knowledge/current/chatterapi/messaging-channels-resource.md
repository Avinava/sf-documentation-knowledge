---
title: "Messaging Channels Resource"
domain: chatterapi
topic: messaging-channels-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.689Z
estimatedTokens: 703
keywords: [Messaging, Channels, Resource, Manage, channel, doesn't, already, add, register, taking, data, passing, POST]
---

# Messaging Channels Resource

> Manage Messaging channels. You can get Messaging channels using the
      GET method. If a channel doesn't already have an ID, you can add and register it by taking the
      data from the GET method and passing it to the POST method.

# Messaging Channels Resource

Manage Messaging channels. You can get Messaging channels using the GET method. If a channel doesn't already have an ID, you can add and register it by taking the data from the GET method and passing it to the POST method.

Resource

```

```

Available version

44.0

HTTP methods

GET, POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| authProviderId | String | ID of the authentication provider record that the user created during authentication. If this value is not provided, the request only queries the org and doesn't query any external sources. If this value is provided, it must have a valid, unexpired token. | Optional | 44.0 |
| cursor | String | Paged cursor position. The response to a GET can be paged. If it is paged, we provide a cursor in the response. Passing that cursor as an argument to the next GET request provides the next page. If the cursor is missing from the response, there are no additional pages. If the cursor is not passed as an argument, the first page is returned. | Optional | 44.0 |
| limit | Integer | Maximum number of channels to return in the response to the GET request. If provided, the response is paged. If not provided, the response contains all channels, which can take some time if you have many channels. | Optional | 44.0 |
| messageType | String | Type of channel. Values are:Facebook—A Facebook message.Line—A LINE message.Text—A text message. | Required if the authProviderId is given | 44.0 |

Response body for GET

[Messaging Channels](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_live_message_channels.htm#connect_responses_live_message_channels "List of messaging channels.")

Request body for POST

Root XML tag

<messagingChannel>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| external​AccountId | String | ID of an account of the external channel specified in messageType. |  | 57.0 |
| messageType | String | Type of channel. Values are:Facebook—A Facebook message. | Required | 44.0 |
| messaging​PlatformKey | String | ID of the Messaging channel on the external service. This value can be found in the GET response. | Required | 44.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| authProviderId | String | ID of the authentication provider record that the user created during authentication. | Required | 44.0 |

Response body for POST

[Messaging Channel](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_live_message_channel.htm#connect_responses_live_message_channel "Messaging channel.")

## Code Examples

```
/connect/livemessage/channels
```

```
{
  "messageType": "Facebook",
  "messagingPlatformKey": "234420552541404",
  "externalAccountId": "394847389739"
}
```

## Related Topics

- Messaging
              Channels (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_live_message_channels.htm)
- Messaging
              Channel (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_live_message_channel.htm)
