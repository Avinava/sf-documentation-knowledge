---
title: "DataExtensionField"
domain: mc-apis
topic: dataextensionfield
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.265Z
estimatedTokens: 1465
keywords: [DataExtensionField, data, extension, perform, retrieve, call, DataExtension.CustomerKey, Items]
---

# DataExtensionField

> The DataExtensionField object represents a field within a data extension. You can perform a retrieve call on this object and request DataExtension.CustomerKey.

# DataExtensionField

The DataExtensionField object represents a field within a data extension. You can perform a retrieve call on this object and request DataExtension.CustomerKey.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AttributeMaps | AttributeMap[] | Reserved for future use. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type, which corresponds to the external key assigned to an object in Marketing Cloud. |
| DataExtension | DataExtension | Specifies the data extension. |
| DataType | xsd:string | This has been deprecated. Use ValueType. (PropertyDefinition) The data type of the parameter that is passed to the Data Extract, which can be used to dynamically build a user interface with some basic data validation. (ExtractParameterDescription) |
| DefaultValue | xsd:string | The default value for a data extension field if no value is supplied (Include Now() as the default value if you wish to have a field default to today's date). Used by ExtractParameterDescription as the default value for the parameter if not suppliedwhen a data extract is executed. Used by PropertyDefinition if the default value for the attribute if not suppliedfor a data profile attribute. |
| Description | xsd:string | Describes and provides information regarding the object. |
| DisplayOrder | xsd:int | Specifies the position in which the attribute appears on the Subscriber Profile Center page. |
| FieldType | DataExtensionFieldType | Designates data type for a data extension field. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| IsAccountProperty | xsd:boolean | Indicates whether the property is specific to the account. |
| IsContextSpecific | xsd:boolean | Reserved for future use. |
| IsCreatable | xsd:boolean | Indicates if the PropertyDefinition, ObjectDefinition, or DataExtensionField can be set on a Create call. A value of true indicates it is creatable. |
| IsEditable | xsd:boolean | Indicates if the property is editable by the end-user in the profile center. |
| IsFilterable | xsd:boolean | Indicates if you can filter on this property. Set to true to specify the property in a SimpleFilterPart in a Retrieve call. |
| IsNillable | xsd:boolean | Indicates whether the property can contain a NULL value. |
| IsPartnerProperty | xsd:boolean | Indicates if the property is specific to a partner. |
| IsPrimaryKey | xsd:boolean | Designates whether a data extension field is used as a primary key for that data extension. |
| IsQueryable | xsd:boolean | Indicates whether the property is queryable. |
| IsRequired | xsd:boolean | Indicates whether the property must have a value specified. Create calls must include a supplied value, while Update and Delete calls don't require a value. |
| IsRestrictedPicklist | xsd:boolean | Indicates whetherthe property has a restricted list of valid values. |
| IsRetrievable | xsd:boolean | Indicates if object data is retrievable. |
| IsSendTime | xsd:boolean | Indicates whether the property is a send time attribute. |
| IsUpdatable | xsd:boolean | Indicates whether object is updatable. |
| IsViewable | xsd:boolean | Indicates whether the property is viewable by the end-user in the profile center. |
| Label | xsd:string | Name or text that is displayed next to the field. |
| Markups | APIProperty[] | Deprecated. |
| MaxLength | xsd:int | Maximum length of the data. |
| MaxValue | xsd:string | Specifies the maximum value to set this property to. |
| MinLength | xsd:int | Specifies the minimum length of the data. |
| MinValue | xsd:string | Specifies the minimum value to set this property to. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Ordinal | xsd:int | Indicates position of object within an array |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerMap | xsd:string | Deprecated. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| PicklistItems | PicklistItem[] | Represents a list of the valid values for the property. |
| Precision | xsd:int | Defines numeric precision for decimal properties. |
| PropertyType | PropertyType | Indicates the Marketing Cloud data type of the property. |
| References | APIObject[] | Indicates the object types of the referenced objects. Reserved for future use. |
| RelationshipName | xsd:string | Indicates the name of the relationship, such as One-to-One, One-to-Many. |
| Scale | xsd:int | Indicates numeric precision for decimal properties. |
| Status | xsd:string | Defines status of object. Status of an address. |
| StorageType | DataExtensionFieldStorageType | Indicates special storage properties for the field. Valid values are: Unspecified, Plain, Encrypted, or Obfuscated. |
| ValueType | SoapType | ValueType indicates the actual data type of the value that is stored in this property. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)

## Related Topics

- DataExtensionFieldType (atlas.en-us.noversion.mc-apis.meta/mc-apis/dataextensionfieldtype.htm)
