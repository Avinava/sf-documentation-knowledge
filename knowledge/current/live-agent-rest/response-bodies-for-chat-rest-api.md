---
title: "Response Bodies for Chat REST API"
domain: live-agent-rest
topic: response-bodies-for-chat-rest-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:50.432Z
estimatedTokens: 2551
keywords: [Bodies, Chat, REST, API, resource, code, successful, execution, JSON, Availability, ChasitorSessionData, ChasitorIdleTimeoutWarningEvent, ChatEndReason, ChatEstablished, ChatMessage]
---

# Response Bodies for Chat REST API

> A request to a Chat REST API resource returns a response code. The successful
execution of a resource request can also return a response body in JSON format.

# Response Bodies for Chat REST API

A request to a Chat REST API resource returns a response code. The successful execution of a resource request can also return a response body in JSON format.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_rest)

#### Note

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

## Availability

Response Properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| results | Array of Result objects | A list of Salesforce IDs that correspond to agents and chat buttons and their respective availability to receive new chat requests. | 29.0 |

Response body

```

```

## ChasitorSessionData

Response Properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| queuePosition | integer | The position of the chat visitor in the chat queue. | 29.0 |
| geoLocation | GeoLocation object | The chat visitor's location, based on the IP address from which the request originated. | 29.0 |
| url | String | The URL that the chat visitor is visiting. | 29.0 |
| oref | String | The original URL that the chat request came from. | 29.0 |
| postChatUrl | String | The URL to which to redirect the chat visitor after the chat has ended. | 29.0 |
| sneakPeekEnabled | Boolean | Whether Sneak Peek is enabled for the agent who accepts the chat. | 29.0 |
| chatMessages | Array of TranscriptEntry objects | The chat message structure that’s synchronized across the agent.js and chasitor.js files. | 29.0 |

Response body

```

```

## ChasitorIdleTimeoutWarningEvent

Response properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| idleTimeoutWarningEvent | String | Informs the server when a warning is triggered or cleared. Possible values: triggered and cleared. | 35.0 |

## ChatEndReason

Response properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| reason | String | The reason that the chat ended. | 29.0 |
| attachedRecords | String | Returns a list of record IDs mapped to the chat's transcript object with the corresponding transcript field names containing those mappings. This mapping data is useful for enhancing your post chat implementation.Available if post-chat is enabled on the chat button. If the client uses attachedRecords post chat and a chasitor ends the chat without the client receiving the ChatEnded response, call Messages again after calling ChatEnd. | 29.0 |

## ChatEstablished

Response properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| name | String | The name of the agent who is engaged in the chat. | 29.0 |
| userId | String | The user ID of the agent who is engaged in the chat. | 29.0 |
| sneakPeekEnabled | Boolean | Whether Sneak Peek is enabled for the agent who accepts the chat. | 29.0 |
| chasitorIdletimeout | ChasitorIdleTimeoutSettings | Gives the settings for chat visitor idle time-out. | 35.0 |

Response body

```

```

## ChatMessage

Response properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| name | String | The name of the agent who is engaged in the chat. | 29.0 |
| text | String | The text of the chat message that the agent sent to the chat visitor. | 29.0 |

Response body

```

```

## ChatRequestFail

Response properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| reason | String | The reason why the chat request failed—for example, no agents were available to chat or an internal error occurred. | 29.0 |
| postChatUrl | String | The URL of the post-chat page to which to redirect the chat visitor after the chat has ended. | 29.0 |

Response body

```

```

## ChatRequestSuccess

Response properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| queuePosition | integer | The position of the chat visitor in the chat queue. | 29.0 |
| estimatedWaitTime | number | The estimated wait time for the button in seconds. If the server cannot retrieve the wait time, this property returns -1. | 47.0 |
| geoLocation | GeoLocation object | The chat visitor's location, based on the IP address from which the request originated. | 29.0 |
| url | String | The URL that the chat visitor is visiting. | 29.0 |
| oref | String | The original URL that the chat request came from. | 29.0 |
| postChatUrl | String | The URL to which to redirect the chat visitor after the chat has ended. | 29.0 |
| customDetails | Array of CustomDetail objects | The custom details of the deployment from which the chat request was initiated. | 29.0 |
| visitorId | String | The ID of the chat visitor. | 29.0 |

Response body

```

```

## ChatTransferred

Response properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| name | String | The name of the agent to whom the chat was transferred. | 29.0 |
| userId | String | The ID of the chat visitor. | 29.0 |
| sneakPeekEnabled | Boolean | Whether Sneak Peek is enabled for the agent to whom the chat was transferred. | 29.0 |
| chasitorIdletimeout | ChasitorIdleTimeoutSettings | Gives the settings for chat visitor idle time-out. | 35.0 |

Response body

```

```

## CustomEvent

Response properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| type | String | The type of custom event that occurred, used for adding the event listener on the chat visitor’s side. | 29.0 |
| data | String | Data that’s relevant to the event that was sent to the chat visitor. | 29.0 |

Response body

```

```

## Messages

Response Properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| messages | Array of Message objects | The messages that were sent over the course of a chat. | 29.0 |
| offset | integer | An internal number to be used with a ReconnectSession request that tracks which messages your client has received. | 29.0 |
| sequence | integer | The sequence of the message as it was received over the course of a chat. | 29.0 |

Response body

```

```

## NewVisitorBreadcrumb

Response properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| location | String | The URL of the web page that the chat visitor is viewing. | 29.0 |

Response body

```

```

## QueueUpdate

Response properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| position | integer | The updated position of the chat visitor in the chat queue. | 29.0 |
| estimatedWaitTime | number | The estimated wait time for the button in seconds. If the server cannot retrieve the wait time, this property returns -1. | 47.0 |

Response body

```

```

## ReconnectSession

Response properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| resetSequence | Boolean | If true, the sequence for the next request should be reset. | 37.0 |
| affinityToken | String | The affinity token for the session that’s passed in the header for all future requests. | 37.0 |

Response body

```

```

## SensitiveDataRules

Response Properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| sensitiveDataRules | SensitiveDataRule object | List of sensitive data rules and their details. | 29.0 |

Response body

```

```

## SessionId

Response Properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| id | String | The session ID for the new session. | 29.0 |
| key | String | The session key for the new session. | 29.0 |
| affinityToken | String | The affinity token for the session that’s passed in the header for all future requests. | 29.0 |
| clientPollTimeout | integer | The number of seconds before you must make a Messages request before your Messages long polling loop times out and is terminated. | 29.0 |

Response body

```

```

## Settings

Response Properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| pingrate | number | The rate at which the visitor must ping the server to maintain the Chat visitor session. | 29.0 |
| contentServerUrl | String | The URL of the content server. | 29.0 |
| buttons | Array of button objects | A list of chat buttons, along with their settings information, that were specified when you made the Settings request. | 29.0 |

Response body

```

```

## SwitchServer

This response is returned for requests to Visitor resources if the Live Agent instance URL is not correct for the Organization ID provided.

Response Properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| newUrl | String | The new Chat API endpoint for your org if your org is moved. It can be moved due to a planned org migration or during a Site Switch to a different instance. | 29.0 |

Response body

```

```

## VisitorId

Response Properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| sessionId | String | The session ID for the new session. | 29.0 |

Response body

```

```

#### See Also

-   [Status Codes and Error Responses](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_error_codes.htm "Each request returns a status code or error response to indicate whether the request was successful.")

## Code Examples

```
{
"results":{
            "type":"array",
            "description":"List of valid patterns of IDs and their availability.",
            "items":{
               "name":"result",
               "type":"object",
               "properties":{
                   "id":{
                       "type":"string",
                       "description":"ID of the entity.",
                       "required":true,
                       "version":29.0
                   },
                   "isAvailable":{
                       "type":"boolean",
                       "description":"Whether or not the entity is available for chat.",
                       "version":29.0
                   }
               }
            },
            "required":true,
            "version":29.0
        }
}
```

```
{
        queuePosition: 1,
        geoLocation: {
                countryCode: "US",
                countryName: "United States of America",
                region: "CA",
                city: "San Francisco",
                organization: Salesforce,
                latitude: 37.793880,
                longitude: -122.395114
        },
        url: "http://yoursite",
        oref: "http://www.google.com?q=yoursite",
        postChatUrl: "http://yoursite/postchat",
        sneakPeekEnabled: true,
        chatMessages: [
                {
                        type: "Agent",
                        name: "Andy L.",
                        content: "Hello, how can I help you?",
                        timestamp: 1376596367548,
                        sequence: 1
                },
                {
                        type: "Chasitor",
                        name: "Jon A.",
                        content: "I have a question for you.",
                        timestamp: 1376596349132
                        sequence: 2
                }
        ]
}
```

```
{
        name: "Andy L.",
        userId: "f1dda237-57f8-4816-b8e8-59775f1e44c8",
        sneakPeekEnabled: true
}
```

```
{
        name: "Andy L."
        text: "Hello, how can I help you?"
}
```

```
{
        reason: "Unavailable",
        postChatUrl: "http://yoursite/postChat"
}
```

## Related Topics

- Result (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm)
- SensitiveDataRule (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm)
- button (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm)
- Status Codes and Error Responses (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_error_codes.htm)
