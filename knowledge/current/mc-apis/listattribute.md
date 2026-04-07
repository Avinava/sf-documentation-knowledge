---
title: "ListAttribute"
domain: mc-apis
topic: listattribute
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:22.584Z
estimatedTokens: 968
keywords: [ListAttribute, Items]
---

# ListAttribute

# ListAttribute

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| BaseAttribute | ListAttribute | Specifies the base attribute of a list attribute in the person model. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| DefaultValue | xsd:string | The default value for a data extension field if no value is supplied (Include Now() as the default value if you wish to have a field default to today's date). Used by ExtractParameterDescription as the default value for the parameter if not suppliedwhen a data extract is executed. Used by PropertyDefinition if the default value for the attribute if not suppliedfor a data profile attribute. |
| Description | xsd:string | Describes and provides information regarding the object. |
| FieldLength | xsd:int | Defines number of characters available within a field for a list attribute. |
| FieldType | ListAttributeFieldType | Designates data type for a data extension field. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| Inheritable | xsd:boolean | Indicates whether a list attribute can be inherited. A value of true indicates an inheritable list attribute. |
| IsHidden | xsd:boolean | Specifies whether a list attribute is hidden. A value of true indicates that the list attribute is hidden. |
| IsNullable | xsd:boolean | Specifies whether a list attribute can contain a null value. A value of true indicates a list attributes can contain a null value. |
| IsReadOnly | xsd:boolean | Indicates whether a list attribute is read-only. A value of true indicates that the list attribute is read-only. |
| List | List | List associated with an object. |
| MaxValue | xsd:string | Indicates the maximum value that this property can be set to. |
| MinValue | xsd:string | Specifies the minimum value that this property can be set to. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| MustOverride | xsd:boolean | Indicates whether a list attribute must override all other values. A value of true indicates that this list attribute overrides other list attributes. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Ordinal | xsd:int | Indicates position of object within an array |
| Overridable | xsd:boolean | Indicates a list attribute can be overridden. A value of true indicates that a list attribute can be overridden. |
| OverrideType | OverrideType | Indicates how a list attribute can be overridden. Valid values include:DoNotOverrideOverrideOverrideExceptWhenNull |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| RestrictedValues | ListAttributeRestrictedValue[] | Specifies a collection for restricted values. |
| Scale | xsd:int | Indicates numeric precision for decimal properties. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
