---
title: "Target"
domain: mc-apis
topic: target
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:25.391Z
estimatedTokens: 315
keywords: [Target, Salesforce, campaigns, reports, associated, send]
---

# Target

> Represents one or more Salesforce campaigns or reports associated with a Salesforce send.

# Target

Represents one or more Salesforce campaigns or reports associated with a Salesforce send.

### Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. |
| Filters | APIProperty[] | Definition |
| ID | xsd:int | Read-only legacy identifier for an object. Not supported on all objects. |
| ModifiedDate | Nullable`1 | Last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectType | ObjectTypes | Defines type of object. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
