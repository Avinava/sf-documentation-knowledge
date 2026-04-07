---
title: "UpdateOptions"
domain: mc-apis
topic: updateoptions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:20.962Z
estimatedTokens: 510
keywords: [UpdateOptions, ability, save, extension, container, instance, DataExtensionField, Action, call, drops, any, child, Otherwise, adds, updates, Sample, Code, Items]
---

> The UpdateOptions object defines the ability to save, update, or delete data extension fields using a container. If the Container property contains an instance of DataExtensionField, and the Action is DELETE, then the call drops any child fields. Otherwise, the call adds or updates all child fields 

# UpdateOptions

The UpdateOptions object defines the ability to save, update, or delete data extension fields using a container. If the Container property contains an instance of DataExtensionField, and the Action is **DELETE**, then the call drops any child fields. Otherwise, the call adds or updates all child fields depending upon whether they exist.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Action | xsd:string | Defines the action to take for the specified object. Valid values include:CREATEDELETEUPDATE |
| CallsInConversation | xsd:int | Represents the number of calls that must be received before the conversation support in the asynchronous API begins processing. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| Container | ContainerID | Reserved for future use. |
| ConversationID | xsd:string | Unique ID of initial async API call. All requests that are processed as a single unit have the same ConversationID. |
| Priority | xsd:byte | Defines the priority for a triggered send. Valid values include Low, Medium, and High. |
| QueuePriority | Priority | Reserved for future use. |
| RequestType | RequestType | Defines request as synchronous or asynchronous API. |
| SaveOptions | SaveOption[] | Allows upsert on selected objects. |
| ScheduledTime | xsd:dateTime | Keeps requests in asynchronous queue until time specified in the call. |
| SendResponseTo | AsyncResponse[] | Defines how responses are returned and under what conditions. Optional. |
| SequenceCode | xsd:int | Specifies the processing sequence of a multi-step conversation. This optional property requires the use of ConversationID. |

## Sample Code

```
UpdateOptions uo = new UpdateOptions() ;
        uo.Container = new ContainerID() ;
        uo.Container.APIObject = new DataExtensionField() AS APIObject ;
        uo.Action = "DELETE" ;  //  case insensitive
```

## Related Items

[Asynchronous Processing](atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing.htm)

## Related Topics

- Asynchronous Processing (atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing.htm)
