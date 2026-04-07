---
title: "SuppressionListContext"
domain: mc-apis
topic: suppressionlistcontext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.595Z
estimatedTokens: 594
keywords: [SuppressionListContext, context, SuppressionListDefinition, Items]
---

> The SuppressionListContext object defines a context that a SuppressionListDefinition can be associated with.

# SuppressionListContext

The SuppressionListContext object defines a context that a SuppressionListDefinition can be associated with.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AppliesToAllSends | xsd:boolean | Indicates whether this context applies to all transactional and marketing sends. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| Context | SuppressionListContextEnum | The context with which a SuppressionListDefinition is associated. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| Definition | SuppressionListDefinition | The suppression list with which a SuppressionListContext is associated. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Send | Send | Indicates send associated with the subscriber send result. |
| SendClassification | SendClassification | Indicates the send classification to use as part of a send definition. |
| SendClassificationType | SendClassificationTypeEnum | Defines the type for the applicable send classification. Valid values include Operational and Marketing. |
| SenderProfile | tns:SenderProfile | Indicates sender profile associated with context. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
