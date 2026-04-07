---
title: "Options"
domain: mc-apis
topic: options
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:18.021Z
estimatedTokens: 391
keywords: [Options, base, avoid, having, specify, ClientID, call, Specify, option, optionally, processing]
---

> The Options object is the base object for all options on methods, such as Create. To avoid having to specify ClientID on all objects within the call, specify ClientID on this object.

# Options

The Options object is the base object for all options on methods, such as Create. To avoid having to specify ClientID on all objects within the call, specify ClientID on this object.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| CallsInConversation | xsd:int | Represents the number of calls that must be received before the conversation support in the asynchronous API begins processing. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| ConversationID | xsd:string | Unique ID of initial async API call. All requests that are processed as a single unit have the same ConversationID. |
| Priority | xsd:byte | Defines the priority for a triggered send. Valid values include Low, Medium, and High. |
| QueuePriority | Priority | Specifies the priority of the triggered send. |
| RequestType | RequestType | Defines request as synchronous or asynchronous API. |
| SaveOptions | SaveOption[] | Allows upsert on selected objects. |
| ScheduledTime | xsd:dateTime | Keeps requests in asynchronous queue until time specified in the call.To maintain compliance with data privacy regulations, avoid scheduling tasks in the future. Scheduling async tasks in the future can reintroduce deleted or restricted contacts into the system. |
| SendResponseTo | AsyncResponse[] | Defines how responses are returned and under what conditions. Optional. |
| SequenceCode | xsd:int | Specifies the processing sequence of a multi-step conversation. This optional property requires the use of ConversationID. |
