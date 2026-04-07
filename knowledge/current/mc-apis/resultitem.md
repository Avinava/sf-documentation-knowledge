---
title: "ResultItem"
domain: mc-apis
topic: resultitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:18.627Z
estimatedTokens: 789
keywords: [ResultItem, results, asynchronous, API, call, calling, zero, until, picked, queue, amount, time, remains, depends, current, volume, Marketing, Cloud, Sample, SOAP, Envelope, Items]
---

> The ResultItem object contains the results of an asynchronous API call. When calling the asynchronous API, ResultItem contains zero objects until that request is picked up from the asynchronous queue. The amount of time a call remains in the queue depends on the current volume of Marketing Cloud.

# ResultItem

The ResultItem object contains the results of an asynchronous API call. When calling the asynchronous API, ResultItem contains zero objects until that request is picked up from the asynchronous queue. The amount of time a call remains in the queue depends on the current volume of Marketing Cloud.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| ConversationID | xsd:string | Unique ID of initial async API call. All requests that are processed as a single unit have the same ConversationID. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| ErrorCode | xsd:int | Identifies the error of an API request via a numeric code. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| OrdinalID | xsd:int | Defines position of object within an array of information. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| RequestID | xsd:string | Unique ID of initial async API call. |
| RequestObjectType | xsd:string | Defines type of the Request object, such as email or triggered send. |
| RequestType | RequestType | Defines request as synchronous or asynchronous API. |
| StatusCode | xsd:string | Status of async API request. |
| StatusMessage | xsd:string | Describes the status of an API call. |

## Sample SOAP Envelope

```
<Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <RetrieveRequestMsg xmlns="http://exacttarget.com/wsdl/partnerAPI">
        <RetrieveRequest>
            <ObjectType>ResultItem</ObjectType>
            <Properties>RequestType</Properties>
            <Filter xmlns:q1="http://exacttarget.com/wsdl/partnerAPI" xsi:type="q1:SimpleFilterPart">
                <Property>RequestID</Property>
                <SimpleOperator>equals</SimpleOperator>
                <Value>69b55db2-c71d-4886-b127-f789c4efe3b7</Value>
            </Filter>
        </RetrieveRequest>
    </RetrieveRequestMsg>
</body>
```

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
