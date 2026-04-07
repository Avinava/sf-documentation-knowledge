---
title: "AsyncRequestResult"
domain: mc-apis
topic: asyncrequestresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:20.296Z
estimatedTokens: 418
keywords: [AsyncRequestResult, status, specific, campaign, instance]
---

# AsyncRequestResult

> The AsyncRequestResult object returns status information for a specific campaign instance.

# AsyncRequestResult

The AsyncRequestResult object returns status information for a specific campaign instance.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| CallMessage | xsd:string | Indicates message associated with campaign status call. |
| CallStatus | xsd:string | Indicates status of campaign. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CompleteDate | xsd:dateTime | Indicates data of completion for a campaign. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Status | xsd:string | Defines status of object. Status of an address. |
