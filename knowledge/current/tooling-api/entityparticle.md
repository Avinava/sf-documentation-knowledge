---
title: "EntityParticle"
domain: tooling-api
topic: entityparticle
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.807Z
keywords: [EntityParticle, Important, Supported, SOAP, Calls, REST, HTTP, Methods, Limitations, Fields, Note, RelationshipReferenceTo, Type, Usage]
---

# EntityParticle

# EntityParticle

Represents each element of a field that can be presented in a user interface. Contrast EntityParticle with FieldDefinition, which represents each element of a field defined in the Metadata API. EntityParticle has parity with describe, which returns API accessible fields only for an entity. Available in Tooling API version 34.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP Calls

query()

## Supported REST HTTP Methods

GET

## Limitations

[SOQL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm "Some Tooling API objects have SOQL limitations. These limitations apply to any Metadata Catalog query, which applies to all Custom Metadata Types and Metadata Catalog entities, not only the ones explicitly listed.")

[SOSL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm "Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.")

## Fields

| Field | Details |
| --- | --- |
| ByteLength | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe maximum length of the field represented by this EntityParticle, in bytes. |
| DataType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionData type of the field, for example textarea or datetime. The values are defined similar to the values in the user interface, not the corresponding API data type names.For example, from an object, retrieve all the fields of one data type.SELECT DataType, QualifiedApiName FROM EntityParticle WHERE DataType = 'phone' AND EntityDefinition.QualifiedApiName = 'Account' |
| DefaultValueFormula | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe default value specified for the field when a formula isn’t specified. If no default value is specified, this field isn’t returned. |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s org. Label is Record Type Name. |
| Digits | TypeintPropertiesFilter, Group, Nillable, SortDescriptionMaximum number of digits for a field of type int. If an integer value exceeds the number of digits, the API returns an error. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID for the object defined in the DurableId field. |
| ExtraTypeInfo | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents further definition of a type.For type textarea:plaintextarearichtextareaFor type URL:imageFor type reference:externallookupindirectlookupFor Account:switchablepersonnamepersonname |
| FieldDefinitionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the field definition associated with this EntityParticle. |
| InlineHelpText | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the content of field-level help. Available in Tooling API starting version 35.0. |
| IsApiFilterable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field represented by this EntityParticle can be specified in the WHERE clause of a query string.RestrictionsYou can’t sort or filter compound fields. This field’s value is always false for compound fields. |
| IsApiGroupable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field represented by this EntityParticle can be included in the GROUP BY clause of a SOQL query. |
| IsApiSortable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, a query can sort on the field represented by this EntityParticle.RestrictionsYou can’t sort or filter compound fields. This field’s value is always false for compound fields. |
| IsAutoNumber | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field’s value is assigned when the record is created. Available in Tooling API starting version 35.0. |
| IsCalculated | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field represented by this EntityParticle is calculated. |
| IsCaseSensitive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field represented by this EntityParticle is case sensitive. Available in Tooling API starting version 35.0. |
| IsCompactLayoutable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field can be included in a compact layout. |
| IsComponent | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field is a component of a compound field. The default value is false. Available in Tooling API starting version 40.0. |
| IsCompound | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field is a compound of other fields. The default value is false. Available in Tooling API starting version 38.0. |
| IsCreatable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, a value for the field represented by this EntityParticle can be created. Available in Tooling API starting version 35.0. |
| IsDefaultedOnCreate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, and if no other value is supplied, a default value is applied when the record is created. Available in Tooling API starting version 35.0. |
| IsDependentPicklist | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field is a dependent picklist. Available in Tooling API starting version 35.0. |
| IsDeprecatedAndHidden | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionReserved for future use. |
| IsDisplayLocationInDecimal | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, and if the field represented by this EntityParticle is a Geolocation custom field, the value appears in decimal notation. If false, the value appears as degrees, minutes, and seconds. Available in Tooling API starting version 35.0.RestrictionsThis field has no effect on custom fields that aren’t Geolocation fields. |
| IsEncrypted | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field is marked for Classic Encryption. Available in Tooling API starting version 35.0. |
| IsFieldHistoryTracked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field’s history can be tracked. |
| IsHighScaleNumber | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the field stores numbers to eight decimal places regardless of what’s specified in the field details (true) or not (false). Used to handle currencies for products that cost fractions of a cent, in large quantities. If high-scale unit pricing isn’t enabled in your org, this field isn’t returned. |
| IsHTMLFormatted | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field contains HTML. |
| IsIdLookup | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, you can use the field to specify a record for upsert. Available in Tooling API starting version 35.0. |
| IsLayoutable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field can be assigned to a layout. Available in Tooling API starting version 35.0. |
| IsListVisible | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field can be included in a related list. |
| IsNameField | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field is a name field. |
| IsNamePointing | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field represents a polymorphic relationship. Determine the object type at runtime for dynamic queries when this value is true. Available in Tooling API starting version 35.0. |
| IsNillable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field can be left out of queries on the object. |
| IsPermissionable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, you can specify field permissions for the field. Available in Tooling API starting version 35.0. |
| IsUnique | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field is unique. Available in Tooling API starting version 35.0. |
| IsUpdatable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, you can update the field. Available in Tooling API starting version 35.0. |
| IsWorkflowFilterable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field can be filtered for a workflow. |
| IsWriteRequiresMasterRead | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, writing to the detail object requires read sharing instead of read-write sharing of the parent. Available in Tooling API starting version 35.0. |
| Label | TypestringPropertiesFilter, Group, SortDescriptionThe label that corresponds to the field in the user interface. If the label has translations, the label returned is in the user’s language. |
| Length | TypeintPropertiesFilter, Group, SortDescriptionThe maximum number of bytes available to store the value in the field represented by this EntityParticle. |
| Mask | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReserved for future use. |
| MaskType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReserved for future use. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionPrimary label for this object. This display value is the internal label that isn’t translated. Limit: 40 characters. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the object for the field represented by this EntityParticle. This field is available in API version 35.0 and later. |
| NamespacePrefix | TypestringPropertiesFilter, Group, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of these values:In a Developer Edition org, the namespace prefix is set to the namespace prefix of the org for all objects that support it. There’s an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In an org other than a Developer Edition org, NamespacePrefix is only set for objects that are part of an installed managed package. There’s no namespace prefix for all other objects. |
| Precision | TypeintPropertiesFilter, Group, SortDescriptionThe maximum number of digits allowed for the field represented by this EntityParticle. |
| QualifiedApiName | TypestringPropertiesFilter, Group, SortDescriptionA unique external name for the field. |
| ReferenceTargetField | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the custom field on the parent object to match against this indirect lookup relationship field, whose values come from an external data source. The specified custom field on the parent object must have both IsIdLookup and IsUnique set to true. This field is available in API version 35.0 and later.RestrictionsAvailable only if the field represented by this EntityParticle is an indirect lookup relationship field on an external object. |
| ReferenceTo | TypeRelationshipReferenceToPropertiesNillableDescriptionThe array of values in this field represents the possible object types of the referenced objects. For example, if EntityParticle represents a field on Events, the values are Contact, Lead, and custom objects with a relationship to Events. |
| RelationshipName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf the field represented by this EntityParticle is a master-detail relationship field, this field’s value is the relationship name. |
| RelationshipOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionA value of 0 represents a primary relationship, and a value of 1 represents a secondary relationship. This field is relevant only for relationship fields. |
| Scale | TypeintPropertiesFilter, Group, SortDescriptionThe number of digits to the right of the decimal in an integer. For example, 3.00 has a scale of 2. |
| ValueTypeId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the value type, if any, for the field represented by this EntityParticle. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

EntityParticle fields are exposed in SOAP API version 45.0 and later. You can use Tooling API to query for EntityParticle fields in guest user mode in API version 44.0 and earlier. In API version 45.0 and later, use SOAP API to get this data in guest user mode. EntityParticle is still exposed in Tooling API to User Profiles with the ViewSetup permission.

## RelationshipReferenceTo Type

Represents the set of objects that this EntityParticle can have a relationship with.

| Field | Type | Details |
| --- | --- | --- |
| referenceTo | string[] | The name of an object that can be referenced. For example, if EntityParticle represents Event.WhoId (the WhoId field on Event), the value of this field would be at least [Contact, Lead]. |

## Usage

When querying or searching the EntityParticle object, you must filter using this syntax: WHERE EntityDefinition.QualifiedApiName ='\[ObjectAPIName\]'

Example Query:

```

```

Example Query: Retrieve All Account Fields

SELECT DataType, FieldDefinition.QualifiedApiName FROM EntityParticle WHERE EntityDefinition.QualifiedApiName ='Account'

Example Query: Find Parent Object Types

Some fields can have more than one type of object in a relationship (polymorphic). For example, Task and Event can have relationships with Contact or Lead.

Use this query to retrieve a list of objects that can have a relationship with Event.WhoId (represented by EntityParticle).

SELECT QualifiedApiName, RelationshipName, ReferenceTo, ReferenceTargetField FROM EntityParticle WHERE EntityDefinition.QualifiedApiName = 'Event' AND QualifiedApiName = 'WhoId'