---
title: "SuppressionListDefinition"
domain: mc-apis
topic: suppressionlistdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.611Z
estimatedTokens: 724
keywords: [SuppressionListDefinition, suppression, different, contexts, Once, created, definition, variety, email, send, processed, system, finds, Items]
---

> The SuppressionListDefinition object is a suppression list that can be associated with different contexts. Once it has been created, the definition can be associated with a variety of different contexts that are specified in the Contexts property. When an email send is processed, the system finds al

# SuppressionListDefinition

The SuppressionListDefinition object is a suppression list that can be associated with different contexts. Once it has been created, the definition can be associated with a variety of different contexts that are specified in the Contexts property. When an email send is processed, the system finds all of the suppression lists to apply. When two or more suppression lists are applicable to a context, the send applies all applicable lists in an additive manner. If two lists are supplied and one list contains customer1@example.com and the other list contains customer2@example.com, the send excludes both addresses.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Category | xsd:long | ID of the folder that an item is located in. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| Contexts | SuppressionListContext[] | The contexts with which a SuppressionListDefinition is associated. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| Description | xsd:string | Describes and provides information regarding the object. |
| Fields | DataExtensionField[] | Specifies fields contained within a data extension. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| NotifyEmail | xsd:string | Defines email address that receives notification once the application applies the auto-suppression list to all existing triggered send jobs. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| SubscriberCount | xsd:long | Indicates the number of records on a suppression list. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [Create a Suppression List Definition](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_suppression_list_definition.htm)

## Related Topics

- Create a Suppression List Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_suppression_list_definition.htm)
