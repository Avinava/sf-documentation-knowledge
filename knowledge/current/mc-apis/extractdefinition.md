---
title: "ExtractDefinition"
domain: mc-apis
topic: extractdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.780Z
estimatedTokens: 559
keywords: [ExtractDefinition, means, define, execute, extract, support, ExtractRequest, handle, requests, whenever, possible, Items]
---

# ExtractDefinition

> The ExtractDefinition object provides means to define and execute an extract request. This object does not support all extract types. Use ExtractRequest to handle all extract requests whenever possible.

# ExtractDefinition

The ExtractDefinition object provides means to define and execute an extract request. This object does not support all extract types. Use ExtractRequest to handle all extract requests whenever possible.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| ConfigurationPage | xsd:string | The page displayed so that the user can configure the parameters to use when executing a data extract. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PackageKey | xsd:string | Specifies the key associated with an extract package. |
| Parameters | ExtractParameterDescription[] | Container for key value pairs of parameters for objects. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Values | APIProperty[] | Specifies values associated with an extract definition. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [ExtractRequest Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/executerequest.htm)

## Related Topics

- ExtractRequest Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/executerequest.htm)
