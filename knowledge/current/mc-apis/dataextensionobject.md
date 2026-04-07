---
title: "DataExtensionObject"
domain: mc-apis
topic: dataextensionobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:16.416Z
estimatedTokens: 705
keywords: [DataExtensionObject, row, extension, Email, Subscribers, Manage, permission, Items]
---

> The DataExtensionObject object represents a row within a data extension. To use the DataExtensionObject object, you need the Email | Subscribers | Data Extension | Manage Data permission.

# DataExtensionObject

The DataExtensionObject object represents a row within a data extension. To use the DataExtensionObject object, you need the Email | Subscribers | Data Extension | Manage Data permission.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| Keys | APIProperty[] | Indicates keys used in a data extension. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. If your call does not include an ObjectID or CustomerKey, you can use Name to look up the target data extension. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Properties | APIProperty[] | Specifies an array of property definitions available for an object type. You can retrieve allowed properties using the Describe method. |
| Type | xsd:string | Indicates type of specific list. Valid values include Public, Private, Salesforce, GlobalUnsubscribe, and Master. Indicates the type of email to send to the address. Valid values include Text and HTML. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [Add Data to a Data Extension](atlas.en-us.noversion.mc-apis.meta/mc-apis/adding_data_to_data_extension_object.htm)
-   [Delete a Row from a Data Extension](atlas.en-us.noversion.mc-apis.meta/mc-apis/deleting_a_row_from_a_data_extension_via_the_web_service_api.htm)
-   [Retrieve Data from a Data Extension](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_data_from_a_data_extension.htm)
-   [Retrieve a Data Extension Using Customer Key](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_dataextension_object.htm)

## Related Topics

- Add Data to a Data Extension (atlas.en-us.noversion.mc-apis.meta/mc-apis/adding_data_to_data_extension_object.htm)
- Delete a Row from a Data Extension (atlas.en-us.noversion.mc-apis.meta/mc-apis/deleting_a_row_from_a_data_extension_via_the_web_service_api.htm)
- Retrieve Data from a Data Extension (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_data_from_a_data_extension.htm)
- Retrieve a Data Extension Using Customer Key (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_dataextension_object.htm)
