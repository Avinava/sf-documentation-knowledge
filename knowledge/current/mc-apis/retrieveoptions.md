---
title: "RetrieveOptions"
domain: mc-apis
topic: retrieveoptions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:23.550Z
estimatedTokens: 456
keywords: [RetrieveOptions, conjunction, Retrieve, call, working, ClientID]
---

# RetrieveOptions

> Use the RetrieveOptions object in conjunction with a Retrieve call to set the working ClientID for the call.

# RetrieveOptions

Use the RetrieveOptions object in conjunction with a Retrieve call to set the working ClientID for the call.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| BatchSize | xsd:int | Number of records to return in each batch as part of a Retrieve call. |
| CallsInConversation | xsd:int | Represents the number of calls that must be received before the conversation support in the asynchronous API begins processing. |
| Client | ClientID | Specifies the account ownership and context of an object. The ClientID must be a child account of the authenticating parent account. |
| ConversationID | xsd:string | Unique ID of initial async API call. All requests that are processed as a single unit have the same ConversationID. |
| IncludeObjects | xsd:boolean | Indicates whether the APIObject is included in the response. If you are only interested in the Result object and want to reduce the size of the response message, set this property to True. |
| OnlyIncludeBase | xsd:boolean | Reduce object to base APIObject information.Includes basic reference data associating object and request. |
| Priority | xsd:byte | Defines the priority for a triggered send. Valid values include Low, Medium, and High. |
| QueuePriority | Priority | Reserved for future use. |
| RequestType | RequestType | Defines request as synchronous or asynchronous API. |
| SaveOptions | SaveOption[] | Allows upsert on selected objects. |
| ScheduledTime | xsd:dateTime | Keeps requests in asynchronous queue until time specified in the call. |
| SendResponseTo | AsyncResponse[] | Defines how responses are returned and under what conditions. Optional. |
| SequenceCode | xsd:int | Specifies the processing sequence of a multi-step conversation. This optional property requires the use of ConversationID. |
