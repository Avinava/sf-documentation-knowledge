---
title: "FieldDefinition"
domain: tooling-api
topic: fielddefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.630Z
estimatedTokens: 9058
keywords: [FieldDefinition, Represents, standard, custom, field, providing, row-based, access, metadata., Contrast, EntityParticle, which, represents, element, presented, user, interface., parity, metadata, Field.]
---

# FieldDefinition

> Represents a standard or custom
            field, providing row-based access to field metadata. Contrast FieldDefinition with
            EntityParticle, which represents each element of a field that can be presented in a user
            interface. FieldDefinition has parity with metadata type Field.

# FieldDefinition

Represents a standard or custom field, providing row-based access to field metadata. Contrast FieldDefinition with EntityParticle, which represents each element of a field that can be presented in a user interface. FieldDefinition has parity with metadata type Field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

This object is available in API version 32.0 and later.

## Supported SOAP Calls

query()

describeSObject()

## Supported REST HTTP Methods

GET

## Limitations

[SOQL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm "Some Tooling API objects have SOQL limitations. These limitations apply to any Metadata Catalog query, which applies to all Custom Metadata Types and Metadata Catalog entities, not only the ones explicitly listed.")

[SOSL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm "Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.")

## Fields

| Field | Details |
| --- | --- |
| BusinessOwnerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIndicates the person or group associated with this field. The business owner understands the importance of the field’s data to your company and might be responsible for determining the minimum security classification. This field is available in API version 45.0 and later. |
| BusinessStatus | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionIndicates whether the field is in use. Valid values include:ActiveDeprecateCandidateHiddenThis field is available in API version 45.0 and later. |
| CompactLayoutItems | TypeQueryResultPropertiesFilter, Group, SortDescriptionThe CompactLayoutItemInfo records associated with this field definition. Available in Tooling API starting version 34.0. Because this field represents a relationship, use only in subqueries.Example subquery:SELECT Id, QualifiedApiName, (SELECT DurableId, SortOrder FROM CompactLayoutItems) FROM FieldDefinition WHERE EntityDefinition.QualifiedApiName = 'Account' AND QualifiedApiName = 'Name' |
| ComplianceGroup | TypemultipicklistPropertiesFilter, NillableDescriptionThe compliance acts, definitions, or regulations related to the field’s data. Valid values include:CCPA—California Consumer Privacy ActCOPPA—Children's Online Privacy Protection ActGDPR—General Data Protection RegulationHIPAA—Health Insurance Portability and Accountability ActPCI—Payment Card IndustryPersonalInfo—Personal information. For use with the Enhanced Personal Information Management feature. Only available if Enhanced Personal Information Management and Digital Experiences are enabled.PII—Personally Identifiable InformationThis field is available in API version 47.0 and later. |
| ControlledFields | TypeQueryResultPropertiesFilter, Group, SortDescriptionThe controlled fields in a dependent picklist. Use in subqueries to reduce the number of queries. Available in Tooling API starting version 34.0. Because this field represents a relationship, use only in subqueries. |
| ControllingFieldDefinition | TypeFieldDefinitionPropertiesFilter, Group, SortDescriptionThe field definition of the controlling field if this field is a dependent picklist. A dependent picklist works with a controlling picklist or checkbox to filter the available options. The value chosen in the controlling field affects the values available in the dependent field. This field is available in API version 14.0 and later. Available in Tooling API starting version 34.0. |
| ControllingFieldDefinitionId | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the ControllingFieldDefinition for this field. Available in Tooling API starting version 34.0. |
| DataType | TypestringPropertiesFilter, Group, SortDescriptionData type of the field, for example Text(40) or Date/Time. The values are defined as they are in the user interface, not the corresponding API data type names. Available in Tooling API starting version 34.0. |
| Description | TypestringPropertiesFilter, Nillable, SortDescriptionA description of the field definition. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s org. Label is Record Type Name. |
| DurableId | TypestringPropertiesFilter, Group, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, because the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| EntityDefinition | TypeEntityDefinitionPropertiesFilter, Group, SortDescriptionA relationship lookup to the object type that contains this field. For example, if the field is defined on an account, the lookup is to Account. You can’t interact directly with this field. Instead, use it in queries.SELECT Entity​Definition.​Label FROM Field​Definition WHERE Entity​Definition.​QualifiedApi​Name='Lead' |
| EntityDefinitionId | TypestringPropertiesFilter, Group, SortDescriptionThe durable ID for the object defined in the EntityDefinition field. |
| ExtraTypeInfo | TypestringPropertiesFilter, Group, SortDescriptionRepresents further definition of a type. Available in Tooling API starting version 34.0.For type textarea:plaintextarearichtextareaFor type URL, imageFor type reference,externallookupindirectlookupexternallookupFor Account,switchablepersonnamepersonname |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata object in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsApiFilterable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field can be specified in the WHERE clause of a query string.Available in Tooling API starting version 34.0.You can't sort or filter compound fields. This field’s value is always false for compound fields. |
| IsApiGroupable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field can be included in the GROUP BY clause of a SOQL query. Available in Tooling API starting version 34.0. |
| IsApiSortable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, a query can sort on this field.Available in Tooling API starting version 34.0.You can't sort or filter compound fields. This field’s value is always false for compound fields. |
| IsCalculated | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field’s value is calculated. Available in Tooling API starting version 34.0. |
| IsCompactLayoutable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field can be included in a compact layout. Available in Tooling API starting version 34.0. |
| IsCompound | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field is a compound of other fields. The default value is false. Available in Tooling API starting version 38.0. |
| IsEverApiAccessible | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field is describable in the API. The default value is false. Available in Tooling API starting version 49.0. |
| IsFieldHistoryTracked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field’s history can be tracked. Available in Tooling API starting version 34.0. |
| IsFlsEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, you can set field-level security on this field. Available in Tooling API starting version 35.0. |
| IsHighScaleNumber | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the field stores numbers to eight decimal places regardless of what’s specified in the field details (true) or not (false). Used to handle currencies for products that cost fractions of a cent, in large quantities. If high-scale unit pricing isn’t enabled in your organization, this field isn’t returned. Available in Tooling API starting version 34.0. |
| IsHtmlFormatted | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field contains HTML. Available in Tooling API starting version 34.0. |
| IsIndexed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field is indexed in the database. Available in Tooling API version 35.0 and later.Internal (database) indexing is different from indexing for search.We recommend targeting indexed fields for better response times in SOQL queries, reports, and list views. |
| IsListFilterable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field can be filtered for a related list. Available in Tooling API starting version 34.0. |
| IsListSortable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field can be sorted for a related list. Available in Tooling API starting version 34.0. |
| IsListVisible | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field can be included in a related list. Available in Tooling API starting version 34.0. |
| IsNameField | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field is a name field. Available in Tooling API starting version 34.0. |
| IsNillable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field can be left out of queries on the object. Available in Tooling API starting version 34.0. |
| IsPolymorphicForeignKey | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the foreign key includes multiple object types (true) or not (false). Available in Tooling API version 41.0 and later. |
| IsSearchPrefilterable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a foreign key can be included in prefiltering (true) or not (false) when used in a SOSL WHERE clause. Prefiltering means to filter by a specific field value before executing the full search query. Available in Tooling API version 40.0 and later. Prefiltering is supported only in WHERE clauses with the equals (=) operator. |
| IsWorkflowFilterable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the field can be filtered for a workflow. Available in Tooling API starting version 34.0. |
| Label | TypestringPropertiesFilter, Group, SortDescriptionThe label that corresponds to the field in the user interface. If the label has been translated, the value returned is in the user’s language. |
| Length | TypeintPropertiesFilter, Group, SortDescriptionThe maximum number of bytes available to store the value in this field. Available in Tooling API starting version 34.0. |
| LookupFilters | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionThe lookup filters associated with the field. Because this field represents a relationship, use only in subqueries.Example subquery:SELECT DurableId, QualifiedApi​Name, (SELECT Id, SourceObject,​ SourceField​Definition.​Label, IsOptional, Active, Developer​Name, LastModified​By.Name, LastModified​Date FROM Lookup​Filters) FROM Entity​Definition WHERE QualifiedApi​Name = 'User'"NoteLookupFilter isn’t supported on the article type object. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionPrimary label for this object. This display value is the internal label that isn’t translated. Limit: 40 characters. |
| Metadata | TypeCustomFieldPropertiesCreate, Nillable, UpdateDescriptionCompact layout metadata, from the mns namespace.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In a Developer Edition org, the namespace prefix is set to the namespace prefix of the org for all objects that support it. There’s an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In an org other than a Developer Edition org, NamespacePrefix is only set for objects that are part of an installed managed package. There’s no namespace prefix for all other objects. |
| Particles | TypeQueryResultPropertiesFilter, Group, SortDescriptionThe EntityParticles associated with this field. Available in Tooling API starting version 34.0. Because this field represents a relationship, use only in subqueries. |
| Precision | TypeintPropertiesFilter, Group, SortDescriptionThe maximum number of digits allowed for this field. Available in Tooling API starting version 34.0. |
| Publisher | TypePublisherPropertiesFilter, Group, SortDescriptionThe publisher of this field, for example Salesforce, a user, or a package name. Available in Tooling API starting version 34.0. |
| PublisherId | TypestringPropertiesFilter, Group, SortDescriptionID of the publisher associated with this field. Available in Tooling API starting version 34.0. |
| QualifiedApiName | TypestringPropertiesFilter, Group, SortDescriptionA unique external name for the field. |
| ReferenceTargetField | TypestringPropertiesFilter, Group, SortDescriptionAvailable only for indirect lookup relationship fields on external objects. Specifies the field on the parent object to match against this indirect lookup relationship field, whose values come from an external data source. The specified custom field on the parent object must have both externalId and unique set to true. Available in Tooling API starting version 34.0. |
| ReferenceTo | TypeRelationshipReferenceToPropertiesFilter, Group, SortDescriptionThe array of values in this field represents the possible object types of the referenced objects. For example, if a FieldDefinition represents a field on Event.WhoId, the values in this field are Contact, Lead, and custom objects with a relationship to Events. Available in Tooling API starting version 34.0. |
| RelationshipDomains | TypeQueryResultPropertiesFilter, Group, SortDescriptionMetadata about the relationships this field has with other objects. Available in Tooling API starting version 34.0. Because this field represents a relationship, use only in subqueries. |
| RelationshipName | TypestringPropertiesFilter, Group, SortDescriptionThe value for one-to-many relationships. For example, in the object MyObject with a relationship to YourObject, the relationship name is typically YourObjects. Available in Tooling API starting version 34.0. |
| RunningUserFieldAccessId | TypestringPropertiesDescriptionReserved for internal use. Available in Tooling API starting version 34.0. |
| Scale | TypeintPropertiesFilter, Group, SortDescriptionThe number of digits to the right of the decimal in an integer. For example, 3.00 has a scale of 2. Available in Tooling API starting version 34.0. |
| SecurityClassification | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionIndicates the sensitivity of the data contained in this field. Valid values include:PublicInternalConfidentialRestrictedMissionCriticalThis field is available in API version 45.0 and later. |
| ServiceDataType | TypeDataTypePropertiesFilter, Group, SortDescriptionThe service datatype for this field. Available in Tooling API starting version 34.0. |
| ServiceDataTypeId | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the ServiceDataType. Available in Tooling API version 34.0. Don’t use, provided for backward compatibility only. |
| ServiceDataTypes | TypeQueryResultPropertiesFilter, Group, SortDescriptionThe ServiceDataTypes associated with this field. Available in Tooling API starting version 34.0. Because this field represents a relationship, use only in subqueries. |
| ValueType | TypeDataTypePropertiesFilter, Group, SortDescriptionThe data type of the field. Available in Tooling API version 35.0. |
| ValueTypeId | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the ValueType. Available in Tooling API version 35.0. |
| WorkflowFieldUpdates | TypeQueryResultPropertiesFilter, Group, SortDescriptionThe workflow field updates for this field. Field updates allow you to automatically update a field value to one that you specify when a workflow rule is triggered. Available in Tooling API starting version 34.0. Because this field represents a relationship, use only in subqueries. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

FieldDefinition fields are exposed in SOAP API version 45.0 and later. You can use Tooling API to query for FieldDefinition fields in guest user mode in API version 44.0 and earlier. In API version 45.0 and later, use SOAP API to get this data in guest user mode. FieldDefinition is still exposed in Tooling API to User Profiles with the ViewSetup permission.

## Usage

When querying or searching the FieldDefinition object, you must filter using the following syntax: WHERE EntityDefinition.QualifiedApiName ='\[ObjectAPIName\]'.

Example Query:

```

```

Example Query: Find Parent Object Types

Some fields can have more than one type of object in a relationship (polymorphic). For example, Task and Event can have relationships with Contact or Lead.

Use this query to retrieve a list of objects that can have a relationship with the FieldDefinition.

SELECT QualifiedApiName, RelationshipName, ReferenceTo, ReferenceTargetField FROM FieldDefinition WHERE EntityDefinition.QualifiedApiName = 'Event' AND QualifiedApiName = 'WhoId'

Example Query: Find the Datatypes for Account Fields

SELECT QualifiedApiName, (Select DataType From Particles) FROM FieldDefinition WHERE EntityDefinition.QualifiedApiName ='Account'

## CustomField Metadata

| Field Name | Field Type | Description |
| --- | --- | --- |
| caseSensitive | boolean | Indicates whether the field is case sensitive (true) or not (false).For indirect lookup relationship fields on external objects, this attribute affects how this custom field’s values are matched against the values of referenceTargetField. |
| defaultValue | string | If specified, represents the default value of the field. |
| deleteConstraint | DeleteConstraint is an enumeration of strings | Provides deletion options for lookup relationships. Valid values are:SetNullDefault value.If the lookup record is deleted, the lookup field is cleared.RestrictIf the record is in a lookup relationship, prevents it from being deleted.CascadeDeletes the lookup record and associated lookup fields.For more information on lookup relationships, see “Object Relationships” in Salesforce Help. |
| description | string | Description of the field. |
| displayFormat | string | The display format. |
| displayLocationInDecimal | boolean | Indicates how the value of a Geolocation custom field appears in the user interface. If true, the geolocation appears in decimal notation. If false, the geolocation appears as degrees, minutes, and seconds. |
| externalDeveloperName | string | Available only for external objects. Name of the table column on the external data source that maps to this custom field in Salesforce. Corresponds to External Column Name in the user interface. This field is available in API version 32.0 and later. |
| externalId | boolean | Indicates whether the field is an external ID field (true) or not (false). |
| formula | string | If specified, represents a formula on the field. |
| formulaTreatBlankAs | TreatBlanksAs | Indicates how to treat blanks in a formula. Valid values are BlankAsBlank or BlankAsZero. |
| fullName | string | Required. The internal name of the object. White spaces and special characters are escaped for validity. The name must:Contain characters, letters, or the underscore (_) characterMust start with a letterCan’t end with an underscoreCan't contain two consecutive underscore characters |
| indexed | boolean | Indicates if the field is indexed. If this field is unique or the externalId is set to true, the isIndexed value is set to true. This field has been deprecated as of version 14.0 and is only provided for backward compatibility. |
| inlineHelpText | string | Represents the content of field-level help. For more information, see “Define Field-Level Help” in Salesforce Help. |
| isFilteringDisabled | boolean | Available only for external objects. Indicates whether the custom field is available in filters. This field is available in API version 32.0 and later. |
| isNameField | boolean | Available only for external object fields of type text. For each external object, you can specify one field as the name field. If you set this field's value to true, make sure that the external table column identified by externalDeveloperName contains name values. This field is available in API version 32.0 and later. |
| isSortingDisabled | boolean | Available only for external objects. Indicates whether the custom field is sortable. This field is available in API version 32.0 and later. |
| reparentableMasterDetail | boolean | Indicates whether the child records in a master-detail relationship on a custom object can be reparented to different parent records. The default value is false.This field is available in API version 25.0 and later. |
| label | string | Label for the field. You can’t update the label for standard picklist fields, such as the Industry field for accounts. |
| length | int | Length of the field. |
| lookupFilter | LookupFilter | The Lookup filter definition for the custom field.Available in API version 30.0 and later. |
| maskChar | EncryptedFieldMaskChar | For encrypted fields, specifies the character to be used as a mask. Valid values:asteriskX |
| maskType | EncryptedFieldMaskType | For encrypted text fields, specifies the format of the masked and unmasked characters in the field. Valid values:allAll characters in the field are hidden. This option is equivalent to the Mask All Characters.creditCardThe first 12 characters are hidden, the last four are displayed. This option is equivalent to the Credit Card Number option.ssnThe first five characters are hidden, the last four are displayed. This option is equivalent to the Social Security Number option.lastFourAll characters are hidden, except the last four are displayed. This option is equivalent to the Last Four Characters Clear option.sinAll characters are hidden, except the last four are displayed. This option is equivalent to the Social Insurance Number option.ninoAll characters are hidden. If the field contains nine characters, Salesforce automatically inserts spaces after each pair of characters. This option is equivalent to the National Insurance Number option. |
| picklist | Picklist | If specified, the field is a picklist, and this field enumerates the picklist values and labels. |
| populateExistingRows | boolean | Indicates whether existing rows are populated (true) or not (false). |
| precision | int | The precision for number values. Precision is the number of digits in a number. For example, the precision value for the number 256.99 is 5. |
| referenceTargetField | string | Available only for indirect lookup relationship fields on external objects. Specifies the custom field on the parent object to match against this indirect lookup relationship field, whose values come from an external data source. The specified custom field on the parent object must have both externalId and unique set to true. This field is available in API version 32.0 and later. |
| referenceTo | string | If specified, indicates a reference this field has to another object. |
| relationshipLabel | string | Label for the relationship. |
| relationshipName | string | If specified, indicates the value for one-to-many relationships. For example, in the object MyObject that had a relationship to YourObject, the relationship name YourObjects makes the relationship type obvious. |
| relationshipOrder | int | This field is valid for all master-detail relationships, but the value is only non-zero for junction objects. A junction object has two master-detail relationships, and is analogous to an association table in a many-to-many relationship. Junction objects must define one parent object as primary (0), the other as secondary (1). The definition of primary or secondary affects delete behavior and inheritance of look and feel, and record ownership for junction objects. For more information, see Salesforce Help.0 or 1 are the only valid values, and 0 is always the value for objects that aren’t junction objects. |
| required | boolean | Indicates whether the field requires a value on creation (true) or not (false). |
| scale | int | The scale for the field. Scale is the number of digits to the right of the decimal point in a number. For example, the number 256.99 has a scale of 2. |
| startingNumber | int | If specified, indicates the starting number for the field. |
| stripMarkup | boolean | Set to true to remove markup, or false to preserve markup. Used when converting a rich text area to a long text area. |
| summarizedField | string | Represents the field on the detail row that’s being summarized. This field can’t be null unless the value of SummaryOperation is count. |
| summaryForeignKey | string | Represents the master-detail field on the child that defines the relationship between the parent and the child. |
| summaryOperation | SummaryOperations is an enumeration of strings | Represents the sum operation to be performed. Valid values:CountMinMaxSum |
| trackFeedHistory | boolean | Indicates whether the field is enabled for feed tracking (true) or not (false).This field is available in API version 18.0 and later. |
| trackHistory | boolean | Indicates whether history tracking is enabled for the field (true) or not (false). Also available for standard object fields (picklist and lookup fields only) in API version 30.0 and later. |
| trackTrending | boolean | Indicates whether historical trending data is captured for the field (true) or not (false). If this attribute is true for at least one field, the object is enabled for historical trending. Available in API version 29.0 and later. |
| trueValueIndexed | boolean | This field is only relevant for a checkbox field. If set, true values are built into the index. This field has been deprecated as of API version 14.0 and is only provided for backward compatibility. |
| type | FieldType is an enumeration of strings | Indicates the field type for the field. Valid values:Address (beta)AutoNumberLookupMasterDetailCheckboxCurrencyDateDateTimeEmailEncryptedTextNumber1PercentPhonePicklistMultiselectPicklistSummaryTextTextAreaLongTextAreaSummaryUrlHierarchyFileHtmlGeolocationFor standard fields on standard objects, the type field is optional. This field is included for some standard field types, such as Picklist or Lookup, but not for others. The type field is included for custom fields. |
| unique | boolean | Indicates whether the field is unique (true) or not (false). |
| visibleLines | int | Indicates the number of lines displayed for the field. |
| writeRequiresMasterRead | boolean | Sets the minimum sharing access level required on the parent record to create, edit, or delete child records. This field applies only to master-detail or junction object custom field types.true—Allows users with “Read” access to the parent record permission to create, edit, or delete child records. This setting makes sharing less restrictive.false—Allows users with “Read/Write” access to the parent record permission to create, edit, or delete child records. This setting is more restrictive than true, and is the default value.For junction objects, the most restrictive access from the two parents is enforced. For example, you set to true on both master-detail fields, but users have “Read” access to one parent record and “Read/Write” access to the other parent record. In this example, users are unable to create, edit, or delete child records. |

## Picklist Metadata

| Field Name | Field Type | Description |
| --- | --- | --- |
| controllingField | string | The fullName of the controlling field if this field is a dependent picklist. A dependent picklist works with a controlling picklist or checkbox to filter the available options. The value chosen in the controlling field affects the values available in the dependent field. This field is available in API version 14.0 and later. |
| picklistValues | PicklistValue[] | Required. Represents a set of values for a picklist. |
| sorted | boolean | Required. Indicates whether values are sorted (true), or not (false). |

## PicklistValue Metadata

This metadata type defines a value in the picklist and specifies whether this value is the default value. This type extends Metadata and inherits its fullName field.

Note the following when working with picklist values:

-   When you retrieve a standard object, all picklist values are retrieved, not just the customized picklist values.
-   When you deploy changes to standard picklist fields, picklist values are added as needed.
-   You can’t set a picklist value as inactive, but if the picklist value is missing and you invoke an update() call, the missing value becomes inactive.

| Field Name | Field Type | Description |
| --- | --- | --- |
| allowEmail | boolean | Indicates whether this value lets users email a quote PDF (true), or not (false). This field is only relevant for the Status field in quotes. This field is available in API version 18.0 and later. |
| closed | boolean | Indicates whether this value is associated with a closed status (true), or not (false). This field is only relevant for the standard Status field in cases and tasks. This field is available in API version 16.0 and later. |
| color | string | Indicates the color assigned to the picklist value when used in charts on reports and dashboards. The color is in hexadecimal format; for example, #FF6600. If a color isn’t specified, it’s assigned dynamically during chart generation. This field is available in API version 17.0 and later. |
| controllingFieldValues | string[] | A list of values in the controlling field that are linked to this picklist value. The controlling field can be a checkbox or a picklist. This field is available in API version 14.0 and later. The values in the list depend on the field type:Checkbox: checked or unchecked.Picklist: The fullName of the picklist value in the controlling field. |
| converted | boolean | Indicates whether this value is associated with a converted status (true), or not (false). This field is relevant for only the standard Lead Status field in leads. Your organization can set its own guidelines for determining when a lead is qualified. The best practice is to convert a lead when it becomes a real opportunity that you want to forecast. For more information, see “Convert Qualified Leads” in Salesforce Help. This field is available in API version 16.0 and later. |
| cssExposed | boolean | Indicates whether this value is available in your Self-Service Portal (true), or not (false). This field is only relevant for the standard Case Reason field in cases.Self-Service provides an online support channel for your customers allowing them to resolve their inquiries without contacting a customer service representative. For more information about Self-Service, see “Setting Up Your Self-Service Portal” in Salesforce Help.NoteStarting with Spring ’12, the Self-Service portal isn’t available for new Salesforce orgs. Existing orgs continue to have access to the Self-Service portal.This field is available in API version 16.0 and later. |
| default | boolean | Required. Indicates whether this value is the default picklist value in the specified picklist (true), or not (false). |
| description | string | Description of a custom picklist value. This field is only relevant for the standard Stage field in opportunities. It’s useful to include a description for a customized picklist value so that the historical reason for creating it can be tracked. This field is available in API version 16.0 and later. |
| forecastCategory | ForecastCategories, an enumeration of type string | Indicates whether this value is associated with a forecast category (true), or not (false). This field is only relevant for the standard Stage field in opportunities. Valid values:OmittedPipelineBestCaseForecastClosedThis field is available in API version 16.0 and later. |
| fullName | string | The name used as a unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from Metadata. |
| highPriority | boolean | Indicates whether this value is a high priority item (true), or not (false). This field is only relevant for the standard Priority field in tasks. For more information about tasks, see “Start Using Tasks” in Salesforce Help. This field is available in API version 16.0 and later. |
| probability | int | Indicates whether this value is a probability percentage (true), or not (false). This field is only relevant for the standard Stage field in opportunities. This field is available in API version 16.0 and later. |
| reverseRole | string | A picklist value corresponding to a reverse role name for a partner. For example, for the role “subcontractor”, a reverse role is “general contractor”. Assigning a partner role to an account in Salesforce creates a reverse partner relationship so that both accounts list the other as a partner. This field is only relevant for partner roles.For more information, see “Partner Fields” in Salesforce Help.This field is available in API version 18.0 and later. |
| reviewed | boolean | Indicates whether this value is associated with a reviewed status (true), or not (false). This field is only relevant for the standard Status field in solutions. For more information about opportunities, see “Creating Solutions” in Salesforce Help. This field is available in API version 16.0 and later. |
| won | boolean | Indicates whether this value is associated with a closed or won status (true), or not (false). This field is only relevant for the standard Stage field in opportunities. This field is available in API version 16.0 and later. |

## RelationshipReferenceTo Type

| Field | Type | Details |
| --- | --- | --- |
| referenceTo | string[] | The objects that can have a relationship to the field represented by this FieldDefinition. |

## WorkflowFieldUpdate Metadata

For more information about WorkflowFieldUpdate, see the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)").

## Code Examples

```
SELECT DurableId, QualifiedApiName, Label, DataType, ValueTypeId, PublisherId, Length, Precision, Scale, EntityDefinitionId, RelationshipName
    FROM FieldDefinition
    WHERE EntityDefinition.QualifiedApiName = 'Customer_Sat_Survey__c' ORDER BY Label ASC NULLS FIRST
```

## Related Topics

- SOQL
                    Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm)
- SOSL
                    Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm)
- QueryResult (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_queryresult.htm)
- EntityDefinition (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_entitydefinition.htm)
- Publisher (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_publisher.htm)
- DataType (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_datatype.htm)
