---
title: "CustomField"
domain: metadata-api
topic: customfield
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:36.142Z
estimatedTokens: 7294
keywords: [CustomField, metadata, associated, custom, definitions, standard, external, objects, Declarative, File, Suffix, Directory, Location, Retrieving, Deploying]
---

# CustomField

> Represents the metadata associated with a field. Use
            this metadata type to create, update, or delete custom field definitions on standard,
            custom, and external objects or standard field definitions on standard
        objects.

# CustomField

Represents the metadata associated with a field. Use this metadata type to create, update, or delete custom field definitions on standard, custom, and external objects or standard field definitions on standard objects.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Only standard fields that you can customize are supported, that is, standard fields to which you can add help text or enable history tracking or Chatter feed tracking. Other standard fields aren't supported, including system fields (such as CreatedById or LastModifiedDate) and autonumber fields. Some standard picklist fields aren’t supported. See [Unsupported Metadata Types](atlas.en-us.api_meta.meta/api_meta/meta_unsupported_types.htm "Some Salesforce features have metadata types that aren’t available in Metadata API. These metadata types can’t be retrieved or deployed with Metadata API. To make changes to these types, you must do it manually in each of your organizations."). By default, a custom object doesn’t have any standard fields that are customizable.

Specify the full name whenever you create or update a field. For example, a custom field on a custom object:

```

```

An example of a custom field on a standard object:

```

```

An example of a standard field on a standard object:

```

```

An example of a custom field on an external object:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

In Metadata API, external objects are represented by the CustomObject metadata type.

These custom field types aren’t available for external objects.

-   Auto-number (available only with the cross-org adapter for Salesforce Connect)
-   Currency (available only with the cross-org adapter for Salesforce Connect)
-   Formula
-   Location
-   Master-detail relationship
-   Picklist and multi-select picklist (available only with the cross-org adapter for Salesforce Connect)
-   Roll-up summary
-   Text (encrypted)
-   Text Area (rich)

## Declarative Metadata File Suffix and Directory Location

Custom fields are user-defined fields and are part of the custom object or standard object definition. See [CustomObject](atlas.en-us.api_meta.meta/api_meta/customobject.htm "Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.") for more information. Standard fields are predefined on standard objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Retrieving a component of this metadata type in a project makes the component appear in any Profile and PermissionSet components that are retrieved in the same package.

## Retrieving Fields on Custom or Standard Objects

When you retrieve a custom or standard object, you return everything associated with the object, except for standard fields that aren't customizable. You can also retrieve only specific fields for an object by explicitly naming the object and fields in package.xml. The following definition in package.xml creates the files objects/MyCustomObject\_\_c.object and objects/Account.object, each containing the requested field definitions.

```

```

## Retrieving or Deploying Fields on Data 360 Objects

When you retrieve a Data 360 object, such as a DLO or DMO, not all of the custom field properties are returned. The properties returned depend on the data type of the custom field.

When you deploy a Data 360 object via Metadata API, in API version 60.0 or later, the call succeeds only if the properties are supported by the custom field's data type. If you include a property that isn't supported by the field's data type, the API returns an error.

Data 360 objects support these data types.

-   Boolean/Checkbox
-   Date
-   DateTime
-   Email
-   Lookup (DMOs only)
-   Number
-   Percent
-   Phone
-   Text
-   Url

## Version

Custom and standard fields are available in API version 10.0 and later.

## Fields

Unless otherwise noted, all fields are creatable, filterable, and nillable.

| Field Name | Field Type | Description |
| --- | --- | --- |
| businessOwnerGroup | reference | Indicates the group associated with this field. The business owner group understands the importance of the field’s data to your company, and can be responsible for determining the minimum security classification. This field is available in API version 45.0 and later. |
| businessOwnerUser | reference | Indicates the person associated with this field. The business owner understands the importance of the field’s data to your company, and can be responsible for determining the minimum security classification. This field is available in API version 45.0 and later. |
| businessStatus | picklist | Indicates whether the field is in use. Valid values include:ActiveDeprecateCandidateHiddenThis field is available in API version 45.0 and later |
| caseSensitive | boolean | Indicates whether the field is case-sensitive (true) or not (false).For indirect lookup relationship fields on external objects, this attribute affects how this custom field’s values are matched against the values of the referenceTargetField. |
| complianceGroup | multipicklist | Indicates the compliance acts, definitions, or regulations related to the field’s data. Valid values include:CCPACOPPAGDPRHIPAAPCIPIIThis field is available in API version 47.0 and later. |
| customDataType | string | Deprecated in the Spring ‘19 (API version 45.0) release. |
| defaultValue | string | If specified, represents the default value of the field. |
| deleteConstraint | DeleteConstraint (enumeration of type string) | Provides deletion options for lookup relationships. Valid values are:Cascade—Deletes the lookup record as well as associated lookup fields.Restrict—Prevents the record from being deleted if it's in a lookup relationship.SetNull—This value is the default. If the lookup record is deleted, the lookup field is cleared.For more information on lookup relationships, see "Object Relationships" in Salesforce Help. |
| deprecated | boolean | Reserved for future use. |
| description | string | Description of the field. |
| displayFormat | string | The display format. |
| displayLocationInDecimal | boolean | Indicates how the geolocation values of a custom Location field appear in the user interface. If true, the geolocation values appear in decimal notation. If false, the geolocation values appear as degrees, minutes, and seconds. |
| elementType | ElementType (enumeration of type string) | Reserved for future use. |
| encrypted | boolean | This entry is about Shield Platform Encryption, not Classic Encryption.Indicates whether this field is encrypted (true) or not (false). This field is available in API version 34.0 through 43.0. |
| encryptionScheme | EncryptionScheme (enumeration of type string) | This entry is about Shield Platform Encryption, not Classic Encryption.For encrypted fields, determines which encryption scheme a field takes. Valid values areCaseInsensitiveDeterministicEncryptionCaseSensitiveDeterministicEncryptionNoneProbabilisticEncryptionThis field is available in API version 44.0 and later. |
| externalDeveloperName | string | Available only for external objects. Name of the table column on the external data source that maps to this custom field in Salesforce. Corresponds to External Column Name in the user interface. This field is available in API version 32.0 and later. |
| externalId | boolean | Indicates whether the field is an external ID field (true) or not (false). This property is returned only if the custom field data type is AutoNumber, Email, Number, or Text. |
| fieldManageability | FieldManageability (enumeration of type string) | Determines who can update the field after it’s released in a managed package. Valid values:Locked—The field can’t be updated.DeveloperControlled—The creator of the record can update the field with a package upgrade.SubscriberControlled—Anyone with proper permissions can update the field. The field can’t be updated with a package upgrade.Available only for fields on custom metadata types. If the field type is MetadataRelationship, and the manageability of the entity definition field is:Subscriber-controlled, then the Field Definition field must be subscriber-controlled.Upgradeable, then the Field Definition field must be either upgradeable or subscriber-controlled. |
| formula | string | If specified, represents a formula on the field. |
| formulaTreatBlanksAs | TreatBlanksAs (enumeration of type string) | Indicates how to treat blanks in a formula. Valid values are: BlankAsBlank and BlankAsZero. |
| fullName | string | Inherited from Metadata, this field is defined in the WSDL for this metadata type. It must be specified when creating, updating, or deleting. See createMetadata() to see an example of this field specified for a call.This value can't be null. |
| globalPicklist | string. | (This field is available in API version 37.0 only and removed from later versions.) If this custom field is a picklist that’s based on a global picklist, globalPicklist is the name of the global picklist whose value set this picklist inherits. A custom picklist that’s based on a global picklist is restricted. You can only add or remove values by editing the global picklist. |
| indexed | boolean | Indicates if the field is indexed. If this field is unique or the externalId is set true, the isIndexed value is set to true. This field has been deprecated as of API version 14.0 and is only provided for backward compatibility. |
| inlineHelpText | string | Represents the content of field-level help. For more information, see "Define Field-Level Help" in Salesforce Help. |
| isAIPredictionField | boolean | Available for Number type custom fields when you use Einstein Prediction Builder. Denotes whether the field can store and display Einstein prediction data on an object. Use Einstein Prediction Builder to determine the data for the target field. This field is available in API version 43.0 and later. |
| isFilteringDisabled | boolean | Available only for external objects. Indicates whether the custom field is available in filters. This field is available in API version 32.0 and later. |
| isNameField | boolean | Available only for external object fields of type text. For each external object, you can specify one field as the name field. If you set this value to true, make sure that the external table column identified by the externalDeveloperName attribute contains name values. This field is available in API version 32.0 and later. |
| isSortingDisabled | boolean | Available only for external objects. Indicates whether the custom field is sortable. This field is available in API version 32.0 and later. |
| label | string | Label for the field. You can't update the label for standard picklist fields, such as the Industry field for accounts. |
| length | int | Length of the field. |
| lookupFilter | LookupFilter | Represents the metadata associated with a lookup filter. This metadata type is used to create, update, or delete lookup filter definitions. This component has been removed as of API version 30.0 and is only available in previous API versions. The metadata associated with a lookup filter is now represented by the lookupFilter field in the CustomField component.This field is available in API version 30.0 and later.LookupFilter isn't supported on the article type object. |
| maskChar | EncryptedFieldMaskChar (enumeration of type string) | This page is about Classic Encryption, not Shield Platform Encryption.For encrypted fields, specifies the character to be used as a mask. Valid values are:asteriskXFor more information on encrypted fields, see Classic Encryption for Custom Fields in Salesforce Help. |
| maskType | EncryptedFieldMaskType (enumeration of type string) | This page is about Classic Encryption, not Shield Platform Encryption.For encrypted text fields, specifies the format of the masked and unmasked characters in the field. Valid values are:all—All characters in the field are hidden. This option is equivalent to the Mask All Characters option in Salesforce.creditCard—The first 12 characters are hidden and the last four display. This option is equivalent to the Credit Card Number option in Salesforce.lastFour—All characters are hidden but the last four display. This option is equivalent to the Last Four Characters Clear option in Salesforce.nino—All characters are hidden. Salesforce automatically inserts spaces after each pair of characters if the field contains nine characters. This option is equivalent to the National Insurance Number option in Salesforce.sin—All characters are hidden but the last four display. This option is equivalent to the Social Insurance Number option in Salesforce.ssn—The first five characters are hidden and the last four display. This option is equivalent to the Social Security Number option in Salesforce.For more information on encrypted fields, see "Classic Encryption for Custom Fields" in Salesforce Help. |
| metadataRelationshipControllingField | string | In custom metadata relationships, represents the controlling field that specifies the standard or custom object in an entity definition metadata relationship. Required when creating a field definition or entity particle metadata relationship on a custom metadata type. The object specified in the controlling field determines the values available in its dependent field definition or entity particle. For example, specifying the Account object filters the available fields in the field definition to Account fields only. This field is available in API version 39.0 and later. |
| picklist | Picklist | (Deprecated. Use this field in API version 37.0 and earlier only. In later versions, use valueSet instead.) If specified, the field is a picklist, and this field enumerates the picklist values and labels. |
| populateExistingRows | boolean | Indicates whether existing rows are going to be populated (true) or not (false). |
| precision | int | The precision for number values. Precision is the number of digits in a number. For example, the number 256.99 has a precision value of 5. |
| referenceTargetField | string | Available only for indirect lookup relationship fields on external objects. Specifies the custom field on the parent object to match against this indirect lookup relationship field, whose values come from an external data source. The specified custom field on the parent object must have both externalId and unique set to true. This field is available in API version 32.0 and later. |
| referenceTo | string | If specified, indicates a reference this field has to another object. |
| relationshipLabel | string | Label for the relationship. |
| relationshipName | string | If specified, indicates the value for one-to-many relationships. For example, in the object MyObject that had a relationship to YourObject, the relationship name can be YourObjects. |
| relationshipOrder | int | This field is valid for all master-detail relationships, but the value is only non-zero for junction objects. A junction object has two master-detail relationships, and is analogous to an association table in a many-to-many relationship. Junction objects must define one parent object as primary (0), the other as secondary (1). The definition of primary or secondary affects delete behavior and inheritance of look and feel, and record ownership for junction objects. For more information, see Salesforce Help.0 or 1 are the only valid values, and 0 is always the value for objects that aren't junction objects. |
| reparentableMasterDetail | boolean | Indicates whether the child records in a master-detail relationship on a custom object can be reparented to different parent records. The default value is false.This field is available in API version 25.0 and later. |
| required | boolean | Indicates whether the field requires a value on creation (true) or not (false). |
| scale | int | The scale for the field. Scale is the number of digits to the right of the decimal point in a number. For example, the number 256.99 has a scale of 2. |
| securityClassification | picklist | Indicates the sensitivity of the data contained in the field. Valid values include:PublicInternalConfidentialRestrictedMissionCriticalThis field is available in API version 45.0 and later. |
| startingNumber | int | If specified, indicates the starting number for the field. When you create records, Starting Number’s value increments to store the number that will be assigned to the next auto-number field created.You can’t retrieve the starting number of an auto-number field through Metadata API. To specify a Starting Number while deploying, add a startingNumber tag for your field to your package.xml file. For example: <startingNumber>42</startingNumber>If you deploy without specifying a Starting Number value in your package.xml file, the default starting number for standard fields is 0. The default starting number for custom fields is 1. |
| stripMarkup | boolean | Set to true to remove markup, or false to preserve markup. Used when converting a rich text area to a long text area. |
| summarizedField | string | Represents the field on the detail row that’s being summarized. This field can't be null unless the summaryOperation value is count. |
| summaryFilterItems | FilterItem[] | Represents the set of filter conditions for this field if it's a summary field. This field is summed on the child if the filter conditions are met. |
| summaryForeignKey | string | Represents the master-detail field on the child that defines the relationship between the parent and the child. |
| summaryOperation | SummaryOperations (enumeration of type string) | Represents the type of sum operation to be performed. Valid values are:CountMinMaxSum |
| trackFeedHistory | boolean | Indicates whether the field is enabled for feed tracking (true) or not (false). To set this field to true, the enableFeeds field on the associated CustomObject must also be true. For more information, see "Customize Chatter Feed Tracking" in Salesforce Help.This field is available in API version 18.0 and later. |
| trackHistory | boolean | Indicates whether history tracking is enabled for the field (true) or not (false). Also available for standard object fields (picklist and lookup fields only) in API version 30.0 and later.To set trackHistory to true, the enableHistory field on the associated standard or custom object must also be true.For more information, see "Field History Tracking" in Salesforce Help.Field history tracking isn’t available for external objects. |
| trackTrending | boolean | Indicates whether historical trending data is captured for the field (true) or not (false). An object is enabled for historical trending if this attribute is true for at least one field. Available in API version 29.0 and later.For more information, see "Report on Historical Changes" in Salesforce Help. |
| trueValueIndexed | boolean | Only relevant for a checkbox field. If set, true values are built into the index. This field has been deprecated as of API version 14.0 and is only provided for backward compatibility. |
| type | FieldType (enumeration of type string) | Indicates the field type for the field. Valid values are enumerated in FieldType.For standard fields on standard objects, the type field is optional. This field is included for some standard field types, such as Picklist or Lookup, but not for others. The type field is included for custom fields. |
| unique | boolean | Indicates whether the field is unique (true) or not (false). |
| valueSet | ValueSet | Represents the set of values that make up a picklist on a custom field. Each value is defined as a CustomValue. If this custom field is a picklist that uses a global value set, valueSet is the name of the global value set whose values this picklist inherits. A custom picklist that uses a global value set is restricted. You can only add or remove values by editing the global value set.A ValueSet component has either a valueSetDefinition or a valueName specified, but never both.This field is available in API version 38.0 and later. |
| visibleLines | int | Indicates the number of lines displayed for the field. |
| writeRequiresMasterRead | boolean | Sets the minimum sharing access level required on the primary record to create, edit, or delete child records. This field applies only to master-detail or junction object custom field types.true—Allows users with Read access to the primary record permission to create, edit, or delete child records. This setting makes sharing less restrictive.false—Allows users with Read/Write access to the primary record permission to create, edit, or delete child records. This setting is more restrictive than true, and is the default value.For junction objects, the most restrictive access from the two parents is enforced. For example, if you set to true on both master-detail fields, but users have Read access to one primary record and Read/Write access to the other primary record, users aren't able to create, edit, or delete child records. |

Fields use additional data types. For more information, see [Metadata Field Types](atlas.en-us.api_meta.meta/api_meta/meta_field_types.htm "These field types extend the field types described in the Salesforce Object Reference.").

## MktDataModelFieldAttributes

This is a subtype of CustomField.

| Field Name | Field Type | Description |
| --- | --- | --- |
| definitionCreationType | DefinitionCreationType enumeration | Indicates how this object was added. Valid values are:BridgeCustomDerivedStandardSystemValid values availble in API version 62.0 and later are:Activation_AudienceAd_Audience_InsightsADGCalculated_InsightCG_AudienceChunkDirectory_TableExternalProblem_RecordsSegment_MembershipSemanticTransformVector_Embedding |
| invalidMergeActionType | InvalidMergeActionType (enumeration of type string) | If this field is used for merging data, indicates what the system should do when an invalid merge occurs.Valid values are:DropKeepOverride |
| isDynamicLookup | boolean | When true, the existing data is queried for a unique set of values for this field. |
| primaryIndexOrder | int | If supplied, indicates that this field is part of the primary key. The number value (starting at 1) indicates the order of attributes if it’s a compound primary key. |
| refAttrDeveloperName | string | When this is a Standard Field, it’s the Name of the field from the Reference Model. |
| mktDatalakeSrcKeyQualifier | string | String storing the developer name of MktDataLakeSrcKeyQualifier configured on the field |

## MktDataLakeFieldAttributes

This is a subtype of CustomField. MktDataLakeFieldAttributes is available in API version 50.0 or later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| definitionCreationType | DefinitionCreationType (enumeration of type string) | Indicates how this object is added. Valid values are:BridgeCustomDerivedStandardSystemValid values available in API version 62.0 and later are:ADGCalculated_InsightCG_AudienceChunkDirectory_TableExternalSemanticVector_Embedding |
| dateFormat | string | Optional: The Date format of date, time, date/time fields in this Lake field.This field is deprecated in API version 55.0 and later. |
| externalName | string | The external name of this field. |
| isEventDate | boolean | When true, this field contains the event date for behavioral model area objects that are used to partition data. |
|  |  |  |
| primaryIndexOrder | int | If supplied, indicates that this field is part of the primary key. The number value (starting at 1) indicates the order of attributes if it’s a compound primary key. |
| isInternalOrganization | boolean | When true, this field contains the value for internal organization. In this case, the value of the field is the name of the internal organization. Landing Objects don't have access to the Salesforce ID and thus are using the developer name. |
| isRecordModified | boolean | Indicates the record modified field used to calibrate latest record version. |
| mktDatalakeSrcKeyQualifier | string | String storing the developer name of MktDataLakeSrcKeyQualifier configured on the field. Available in API version 55.0 and later. |
| keyQualifierName | string | Contains the developer name of key qualifier field. Available in API version 55.0 and later. |

## LookupFilter

Represents the metadata associated with a lookup filter. Replaces the NamedFilter component, which was removed as of API version 30.0. LookupFilter is available in API version 30.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| active | boolean | Required. Indicates whether the lookup filter is active (true) or not (false). |
| booleanFilter | string | Specifies advanced filter conditions. |
| description | string | A description of what this filter does. |
| errorMessage | string | The error message that appears if the lookup filter fails. |
| filterItems | FilterItem[] | Required. The set of filter conditions. You can have up to 10 FilterItems per lookup filter. |
| infoMessage | string | The information message displayed on the page. Use to describe things the user possibly doesn't understand, such as why certain items are excluded in the lookup filter. |
| isOptional | boolean | Required. Indicates whether the lookup filter is optional (true) or not (false). |

Lookup filters use additional data types. For more information, see [Metadata Field Types](atlas.en-us.api_meta.meta/api_meta/meta_field_types.htm "These field types extend the field types described in the Salesforce Object Reference.").

## FilterItem

Represents one entry in a set of filter criteria.

| Field | Field Type | Description |
| --- | --- | --- |
| field | string | Represents the field specified in the filter. |
| operation | FilterOperation (enumeration of type string) | Represents the filter operation for this filter item. Valid values are:equalsnotEquallessThangreaterThanlessOrEqualgreaterOrEqualcontainsnotContainstartsWithincludesexcludeswithin (DISTANCE criteria only) |
| value | string | Represents the value of the filter item being operated upon, for example, if the filter is my_number_field__c > 1, the value of value is 1. |
| valueField | string | Specifies if the final column in the filter contains a field or a field value.Approval processes don’t support valueField entries in filter criteria. |

## Declarative Metadata Sample Definition

The following example shows a field definition for a custom field that’s named Comments\_\_c.

```

```

This XML is the definition for two fields on the Account standard object—a custom field (MyCustomAccountField\_\_c), and a standard field (Phone) that has history tracking enabled.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_compactlayout.htm "CompactLayout")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_fieldset.htm "FieldSet")

#### See Also

-   [CustomObject](atlas.en-us.api_meta.meta/api_meta/customobject.htm "Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.")

-   [Picklist (Including Dependent Picklist)](atlas.en-us.api_meta.meta/api_meta/meta_picklist.htm "Deprecated. Represents a picklist (or dependent picklist) definition for a custom field in a custom object or a custom or standard field in a standard object, such as an account.")

-   [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.")

-   [NamedFilter](atlas.en-us.api_meta.meta/api_meta/namedfilter.htm "Represents the metadata associated with a lookup filter. This metadata type is used to create, update, or delete lookup filter definitions. This component has been removed as of API version 30.0 and is only available in previous API versions. The metadata associated with a lookup filter is now represented by the lookupFilter field in the CustomField component.")

## Code Examples

```
MyCustomObject__c.MyCustomField__c
```

```
Account.MyAcctCustomField__c
```

```
Account.Phone
```

```
MyExternalObject__x.MyCustomField__c
```

```
<types>
  <members>MyCustomObject__c.MyCustomField__c</members>
  <members>Account.MyCustomAccountField__c</members>
  <members>Account.Phone</members>
  <name>CustomField</name>
</types>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Unsupported Metadata Types (atlas.en-us.api_meta.meta/api_meta/meta_unsupported_types.htm)
- CustomObject (atlas.en-us.api_meta.meta/api_meta/customobject.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- createMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm)
- Picklist (atlas.en-us.api_meta.meta/api_meta/meta_picklist.htm)
- FieldType (atlas.en-us.api_meta.meta/api_meta/meta_field_types.htm)
- CustomValue (atlas.en-us.api_meta.meta/api_meta/meta_customvalue.htm)
- Metadata Field Types (atlas.en-us.api_meta.meta/api_meta/meta_field_types.htm)
- Deploying and Retrieving Metadata with the Zip
                    File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
