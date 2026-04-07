---
title: "ConfigureOptions"
domain: mc-apis
topic: configureoptions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:15.716Z
estimatedTokens: 315
keywords: [ConfigureOptions, options, async, Configure, call]
---

> The ConfigureOptions object contains options to be used on an async Configure call.

# ConfigureOptions

The ConfigureOptions object contains options to be used on an async Configure call.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| CallsInConversation | xsd:int | Represents the number of calls that must be received before the conversation support in the asynchronous API begins processing. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| ConversationID | xsd:string | Unique ID of initial async API call. All requests that are processed as a single unit have the same ConversationID. |
| Priority | xsd:byte | Defines the priority for a triggered send. Valid values include Low, Medium, and High. |
| QueuePriority | Priority | Reserved for future use. |
| RequestType | RequestType | Defines request as synchronous or asynchronous API. |
| SaveOptions | SaveOption[] | Allows upsert on selected objects. |
| ScheduledTime | xsd:dateTime | Keeps requests in asynchronous queue until time specified in the call. |
| SendResponseTo | AsyncResponse[] | Defines how responses are returned and under what conditions. Optional. |
| SequenceCode | xsd:int | Specifies the processing sequence of a multi-step conversation. This optional property requires the use of ConversationID. |
