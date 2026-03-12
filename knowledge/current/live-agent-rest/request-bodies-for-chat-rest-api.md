---
title: "Request Bodies for Chat REST API"
domain: live-agent-rest
topic: request-bodies-for-chat-rest-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.399Z
estimatedTokens: 1433
keywords: [Bodies, Chat, REST, API, perform, POST, pass, query, that’s, formatted, JSON, contain, nested, inside, unique]
---

# Request Bodies for Chat REST API

> To perform a POST or GET request, pass query parameters or create a request body
                that’s formatted in JSON. Request bodies can contain one or more other
                request bodies that are nested inside. Each request body can contain unique request
                properties.

# Request Bodies for Chat REST API

To perform a POST or GET request, pass query parameters or create a request body that’s formatted in JSON. Request bodies can contain one or more other request bodies that are nested inside. Each request body can contain unique request properties.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_rest)

#### Note

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

## Breadcrumb

Request properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| location | String | The URL of the web page that the chat visitor is viewing. | 29.0 |

Request body

```

```

## ChasitorInit

Request properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| organizationId | String | The chat visitor’s Salesforce organization ID. | 29.0 |
| deploymentId | String | The ID of the deployment from which the chat originated. | 29.0 |
| buttonId | String | The ID of the button from which the chat originated. | 29.0 |
| agentId | String | The ID of the agent of a direct-to-agent chat request. For normal chat requests, leave this field empty. | 29.0 |
| doFallback | Boolean | Specifies the fallback mode if agentId is present. If the value is false, it attempts to route the chat session back to that specific agent. If the value is true, it attempts to route the chat session back to the specific agent first but, if the agent is unavailable, it attempts to route to the button next. | 29.0 |
| sessionId | String | The chat visitor’s Chat session ID. | 29.0 |
| userAgent | String | The chat visitor’s browser user agent. | 29.0 |
| language | String | The chat visitor’s spoken language. | 29.0 |
| screenResolution | String | The resolution of the chat visitor’s computer screen. | 29.0 |
| visitorName | String | The chat visitor’s custom name. | 29.0 |
| prechatDetails | Array of CustomDetail objects | The pre-chat information that was provided by the chat visitor. | 29.0 |
| prechatEntities | Array of Entity objects | The records created, searched for, or both depending on what EntityFieldsMaps has enabled. | 29.0 |
| buttonOverrides | Array of Strings | The button override is an ordered list of routing targets and overrides the buttonId, agentId, and doFallback modes. The possible options are:buttonId—Normal routingagentId—Direct-to-agent routing with no fallbackagentId_buttonId—Direct-to-agent routing with fallback to the buttonYou can list one or more of these options, where the order specifies the routing target order. The second or third target is attempted only if the previous one fails. | 29.0 |
| receiveQueueUpdates | Boolean | Indicates whether the chat visitor receives queue position updates (true) or not (false). | 29.0 |
| isPost | Boolean | Indicates whether the chat request was made properly through a POST request (true) or not (false). | 29.0 |

Request body

```

```

## ChasitorResyncState

Request properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| organizationId | String | The chat visitor’s Salesforce organization ID. | 29.0 |

Request body

```

```

## ChasitorSneakPeek

Request properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| position | integer | The position of the Sneak Peek update in the chat. | 29.0 |
| text | String | The text that the chat visitor is typing in the text input area of the chat window. | 29.0 |

Request body

```

```

## ChatMessage

Request properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| text | String | The text of the chat visitor’s message to the agent. | 29.0 |

Request body

```

```

## CustomEvent

Request properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| type | String | The type of custom event that occurred, used for adding the event listener on the agent’s side. | 29.0 |
| data | String | Data that’s relevant to the event that was sent to the agent. | 29.0 |

Request body

```

```

## MultiNoun

Request properties

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| nouns | Array of NounWrapper objects | An array of noun objects and their properties that are batched in the MultiNoun request. | 29.0 |

Request body

```

```

## SensitiveDataRuleTriggered for Agents

Request properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| rules | Array of Rule objects | A list of sensitive data rules applied to the chat session. | 29.0 |
| chatId | String | The ID of the chat session. |  |

Request body

```

```

## SensitiveDataRuleTriggered for Chasitors

Request properties

| Property Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| rules | Array of Rule objects | A list of sensitive data rules applied to the chat session. | 29.0 |

Request body

```

```

## Code Examples

```
"location":{
            "type":"string",
            "description":"The current location or URL of the visitor",
            "required":true,
            "version":29.0
        }
```

```
{
        organizationId: "00DD0000000JVXs",
        deploymentId: "572D000000000J6",
        buttonId: "573D000000000OC",
        agentId: "005B0000000F3b2",
        doFallback: true,
        sessionId: "5503f854-0203-4324-8ed5-f793a367426f",
        userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36",
        language: "en-US",
        screenResolution: "2560x1440",
        visitorName: "Jon A.",
        prechatDetails: [
                {
                        label: "E-mail Address",
                        value: "jon@example.com",
                        entityFieldMaps: [
                           {
                                entityName: "Contact",
                                fieldName: "Email",
                                isFastFillable: false,
                                isAutoQueryable: true,
                                isExactMatchable: true
                           }
                        ],
                        transcriptFields: [
                                "c__EmailAddress"
                        ],
                        displayToAgent: true
                }             
        ],
        prechatEntities: [],
        buttonOverrides: [
                "573D000000000OD"
        ],
        receiveQueueUpdates: true,
        isPost: true
}
```

```
{
        organizationId: "00DD0000000JVXs"
}
```

```
{
        position: 3,
        text: "Hi there."
}
```

```
{
        text: "I have a question about my account."
}
```

## Related Topics

- CustomDetail (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm)
- Entity (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm)
- EntityFieldsMaps (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm)
- Rule (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm)
