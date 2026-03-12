---
title: "Reference: Streaming Channel Push REST API"
domain: api-streaming
topic: reference-streaming-channel-push-rest-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.460Z
estimatedTokens: 618
keywords: [Streaming, Channel, Push, REST, API, subscriber, pushes, notifications, channels]
---

# Reference: Streaming Channel Push REST API

> Gets subscriber information, and pushes notifications for streaming channels.

# Reference: Streaming Channel Push REST API

Gets subscriber information, and pushes notifications for streaming channels.

## Syntax

URI

/vXX.X/sobjects/StreamingChannel/**Channel ID**/push

Available since release

29.0

Formats

JSON, XML

HTTP methods

GET, POST

Authentication

Authorization: Bearer **token**

Request body

For GET, no request body required. For POST, a request body that provides the push notification payload. This contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| pushEvents | array of push event payloads | List of event payloads to send notifications for. |

Each push event payload contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| payload | string | Information sent with notification. Cannot exceed 3,000 single-byte characters. |
| userIds | array of User IDs | List of subscribed users to send the notification to. If this array is empty, the notification will be broadcast to all subscribers on the channel. |

Request parameters

None

Response data

For GET, information on the channel and subscribers is returned in the following fields:

| Name | Type | Description |
| --- | --- | --- |
| OnlineUserIds | array of User IDs | User IDs of currently subscribed users to this channel. |
| ChannelName | string | Name of the channel, for example, /u/notifications/ExampleUserChannel. |

For POST, information on the channel and payload notification results is returned in an array of push results, each of which contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| fanoutCount | number | The number of subscribers that the event got sent to. This is the count of subscribers specified in the POST request that were online. If the request was broadcast to all subscribers, fanoutCount will be –1. If no active subscribers were found for the channel, fanoutCount will be 0. |
| userOnlineStatus | array of User online status information | List of User IDs the notification was sent to and their listener status. If true the User ID is actively subscribed and listening, otherwise false. |

## Example

The following is an example JSON response of a GET request for services/data/v29.0/sobjects/StreamingChannel/0M6D000000000g7KXA/push:

```

```

Using a POST request to services/data/v29.0/sobjects/StreamingChannel/0M6D000000000g7KXA/push with a request JSON body of:

```

```

the JSON response data looks something like:

```

```

## Code Examples

```
{
  "OnlineUserIds" : [ "005D0000001QXi1IAG" ],
  "ChannelName" : "/u/notifications/ExampleUserChannel"
}
```

```
{ 
  "pushEvents": [
      { 
          "payload": "hello world!", 
          "userIds": [ "005xx000001Svq3AAC", "005xx000001Svq4AAC" ] 
      }, 
      { 
          "payload": "broadcast to everybody (empty user list)!", 
          "userIds": [] 
      } 
   ] 
}
```

```
[ 
  {
    "fanoutCount" : 1,
    "userOnlineStatus" : {
        "005xx000001Svq3AAC" : true,
        "005xx000001Svq4AAC" : false,
    }
  },
  {
    "fanoutCount" : -1,
    "userOnlineStatus" : {
    }
  } 
]
```
