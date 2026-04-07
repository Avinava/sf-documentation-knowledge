---
title: "TriggeredSendSummary"
domain: mc-apis
topic: triggeredsendsummary
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.794Z
estimatedTokens: 885
keywords: [TriggeredSendSummary, summary, results, specific, triggered, send, Items]
---

> The TriggeredSendSummary object is a summary of results for a specific triggered send.

# TriggeredSendSummary

The TriggeredSendSummary object is a summary of results for a specific triggered send.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Bounces | xsd:long | Indicates number of bounces resulting from a triggered send |
| Clicks | xsd:long | Indicates the number of clicks resulting from a triggered send |
| Client | ClientID | Specifies the account ownership and context of an object |
| Conversions | xsd:long | Indicates the number of conversions results from a triggered send |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| FTAFEmailsSent | xsd:long | Indicates Forward To A Friend emails sent as a result of a triggered send |
| FTAFOptIns | xsd:long | Indicates number of subscribers opting in to receiving messages as a result of a Forward To A Friend action from a triggered send |
| FTAFRequests | xsd:long | Indicates number of Forward To A Friend requests received as part of a triggered send |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| InProcess | xsd:long | Indicates the number of triggered send messages in progress. Deprecated. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified |
| NotSentDueToError | xsd:long | Indicates number of triggered send messages not sent due to error |
| NotSentDueToOptOut | xsd:long | Indicates number of sends not completed due to a subscriber's decision to opt out of receiving messages |
| NotSentDueToUndeliverable | xsd:long | Indicates number of sends not completed due to a subscriber's undeliverable status |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use |
| Opens | xsd:long | Indicates number of opens from a triggered send |
| OptOuts | xsd:long | Indicates number of subscribers who opted out of receiving messages after receiving a triggered send |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by client and stored by system. This property is accessible only via API. |
| Queued | xsd:long | Indicates number of messages queued for sending |
| Sent | xsd:long | Indicates number of messages sent. Indicates the message was sent to a subscriber. |
| SurveyResponses | xsd:long | Indicates number of responses to a survey question contained in a triggered send |
| TriggeredSendDefinition | TriggeredSendDefinition | Defines associated triggered send definition for triggered send |
| UniqueClicks | xsd:long | Indicates number of unique clicks on message |
| UniqueConversions | xsd:long | Indicates number of unique conversions resulting from a triggered send |
| UniqueOpens | xsd:long | Indicates number of unique opens resulting from a triggered send |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
