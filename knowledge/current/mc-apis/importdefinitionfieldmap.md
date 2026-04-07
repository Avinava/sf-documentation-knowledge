---
title: "ImportDefinitionFieldMap"
domain: mc-apis
topic: importdefinitionfieldmap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:22.427Z
estimatedTokens: 357
keywords: [ImportDefinitionFieldMap]
---

# ImportDefinitionFieldMap

# ImportDefinitionFieldMap

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| DestinationName | xsd:string | Defines field where imported data resides. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| Item | Object | Identifies an item in a mapped relationship. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
