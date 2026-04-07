---
title: "FilterDefinition"
domain: mc-apis
topic: filterdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.888Z
estimatedTokens: 576
keywords: [FilterDefinition, audience, rules, filter, supports, subscriber, data, extensions, Items]
---

# FilterDefinition

> The FilterDefinition object defines an audience based on specified rules in a filter. This object supports both subscriber lists and data extensions.

# FilterDefinition

The FilterDefinition object defines an audience based on specified rules in a filter. This object supports both subscriber lists and data extensions.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| CategoryID | xsd:int | Specifies the identifier of the folder containing the filder definition. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| DataFilter | FilterPart | Filter parts for a filter definition. This property specifies the rules for the filter, although these rules cannot be specified hierarchically. You can retrieve a data filter only if it doesn’t contain a data relationship. Use Today + or Today - qualifiers only with date values. |
| DataSource | APIObject | Source of data (such as a data extension or list) referred to by API as part of afilter definition |
| Description | xsd:string | Describes and provides information regarding the object. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
