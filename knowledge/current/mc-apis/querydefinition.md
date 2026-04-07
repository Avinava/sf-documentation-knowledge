---
title: "QueryDefinition"
domain: mc-apis
topic: querydefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:18.405Z
estimatedTokens: 803
keywords: [QueryDefinition, SQL, query, activity, accessed, performed, SOAP, API, Items]
---

> The QueryDefinition object represents a SQL query activity accessed and performed by the SOAP API.

# QueryDefinition

The QueryDefinition object represents a SQL query activity accessed and performed by the SOAP API.

-   To update a QueryDefinition where the CategoryID is greater than 0, you need the Email | Interactions | Activities | Query | Move permission.
-   To start a QueryDefinition using the perform method, you need the Email | Interactions | Activities | Query | Move permission.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| CategoryID | xsd:int | Specifies the identifier of the folder. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| DataExtensionTarget | InteractionBaseObject | Indicates data extension to use as a template when auto-generating a new data extension. To ensure that the query activity targets the correct data extension, specify a unique external key for each data extension. For Enterprise 2.0 accounts, the external key must be unique among business unit and enterprise shared data extensions. |
| Description | xsd:string | Describes and provides information regarding the object. |
| FileSpec | xsd:string | Defines the file-naming pattern associated with an activity (valid substitutions include%%YEAR%%, %%MONTH%%, and %%DAY%%). |
| FileType | xsd:string | Specifies column delimiter of a file. Valid values include:CSVTABOther |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| InteractionObjectID | xsd:string | Returns associated ID for activities within the asynchronous process of the overall conversation or program. |
| Keyword | xsd:string | Reserved for future use. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| QueryText | xsd:string | Specifies text associated with a query definition. |
| Status | xsd:string | Defines status of object. Status of an address. |
| TargetType | xsd:string | Indicates target type for a query definition. |
| TargetUpdateType | xsd:string | Indicates the target update type for a query definition. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
