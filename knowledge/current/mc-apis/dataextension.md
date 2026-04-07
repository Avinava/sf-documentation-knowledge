---
title: "DataExtension"
domain: mc-apis
topic: dataextension
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.237Z
estimatedTokens: 1500
keywords: [DataExtension, data, extension, account, Items]
---

# DataExtension

> The DataExtension object represents a data extension within an account.

# DataExtension

The DataExtension object represents a data extension within an account.

-   To create or update a DataExtension, and if your account has the data extension retention policies business rule and any data retention fields are populated, you need the Data Extension | Manage Data Extension Retention permission. Data retention fields are: DataRetentionPeriod, DataRetentionPeriodLength, DataRetentionPeriodUnitOfMeasure, RowBasedRetention, ResetRetentionPeriodOnImport, DeleteAtEndOfRetentionPeriod, and RetainUntil.
-   To clear data from a DataExtension using the perform method, you need the Email | Subscribers | Data Extension | Clear Data permission. Also, your AccountType must be E2.0 or BU, or you need the role based access control business rule. If you don't own the data extension, you can't clear its data.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| CategoryID | xsd:long | Specifies the identifier of the folder. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| DataRetentionPeriod | DateTimeUnitOfMeasure | Specifies the period during which the application retains the data within a data extension. Valid values include:DaysWeeksMonthsYears |
| DataRetentionPeriodLength | xsd:int | Specifies the number of time units for which data is retained. This property is used with DataRetentionPeriodUnitOfMeasureto specify the full data retention time. |
| DataRetentionPeriodUnitOfMeasure | xsd:int | Specifies the units of time for which data is retained. Deprecated. Use DataRetentionPeriodLength and DataRetentionPeriod instead. |
| DeleteAtEndOfRetentionPeriod | xsd:boolean | Indicates whether data is deleted at the end of the retention period. If the value is false, the application deletes the entire data extension. If the value is true, the application deletes the data within the data extension but retains the data extension itself. |
| Description | xsd:string | Describes and provides information regarding the object. |
| Fields | DataExtensionField[] | Specifies fields contained within a data extension. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| IsSendable | xsd:boolean | Indicates whether you can use a data extension as part of an audience for a message send. |
| IsTestable | xsd:boolean | Indicates whether a sendable data extension can be used within tests sends for a message. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| ResetRetentionPeriodOnImport | xsd:boolean | Indicates whether a data retention period is reset after a successful import of new data. A value of true indicates that the data retention period resets to the beginning upon completion of a successful data import. A value of false indicates that the data retention period continues from the original starting point. |
| RetainUntil | xsd:string | Indicates the date that ends the retention period for a data extension. Make sure that the value passed to this property is correctly formatted based on the Date Format setting of the API user. Failure to do so may result in an error. |
| RowBasedRetention | xsd:boolean | Indicates whether the data retention policy removes data by row or deletes all data in an entire data extension. A value of true indicates that all records within a data extension are removed at the same time. A value of false indicates that the application can remove individual rows within a data extension. |
| SendableDataExtensionField | DataExtensionField | Indicates the field within a sendable data extension to use as an address as part of a send. Possible values include SubscriberID, CustomerKey, or EmailAddress. The application uses this field to establish a data relationship between a value specified by theSendableSubscriberFieldproperty and a value within a sendable data extension. |
| SendableSubscriberField | Attribute | Indicates field to use as sending address. The application uses this field to establish a data relationship between a subscriber field and a value specified by the SendableDataExtensionField property. |
| Status | xsd:string | Defines status of object. Status of an address. |
| Template | DataExtensionTemplate | Indicates template used to create a data extension. |

> The DataExtensionObject does not support LIKE operators in filters for the retrieve method.

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [Add Column to a Data Extension](atlas.en-us.noversion.mc-apis.meta/mc-apis/adding_new_column_to_an_existing_data_extension.htm)
-   [Create a Data Extension Using an Existing Template](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_data_extension_using_an_existing_template.htm)
-   [Create a Data Extension](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_data_extension_using_web_service_api.htm)

## Related Topics

- Add Column to a Data Extension (atlas.en-us.noversion.mc-apis.meta/mc-apis/adding_new_column_to_an_existing_data_extension.htm)
- Create a Data Extension Using an Existing Template (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_data_extension_using_an_existing_template.htm)
- Create a Data Extension (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_data_extension_using_web_service_api.htm)
