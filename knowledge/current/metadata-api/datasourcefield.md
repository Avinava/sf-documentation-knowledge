---
title: "DataSourceField"
domain: metadata-api
topic: datasourcefield
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.731Z
keywords: [DataSourceField, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# DataSourceField

# DataSourceField

Represents the details of a data source field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DataSourceField components have the suffix .dataSourceField and are stored in the dataSourceFields folder.

## Version

DataSourceField components are available in API version 52.0 and later.

## Special Access Rules

You need the Salesforce Customize Application permission to access this metadata type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| datatype | string | Required. Indicates the data type of the field: text, number, or date. |
| dateFormat | string | The date format of date, time, date/time fields. |
| definitionCreationType | DefinitionCreationType (enumeration of type string) | Describes whether this object was added by the user or as part of a standard taxonomy. Available in API version 62.0 and later. Valid values are:Activation_Audience (Reserved for internal use only)ADGActivation_Audience. Available in API version 63.0 and later.BridgeCalculated_InsightCG_AudienceChunkCuratedCustomDerivedDirectory_TableExternalMl_PredictionSegment_MembershipSemanticStandardSystemTransformVector_Embedding |
| externalDataType | string | The type of data in the external system. Available in API version 63.0 and later. |
| externalName | string | Required. Name of the object in the external system. This is different from the developer name. |
| fieldFormula | string | Used for formulas. |
| isDataRequired | boolean | If true, data is required. Default value is false. |
| isEventDate | boolean | If true, an event date is required. Default value is false. Available in API version 63.0 and later. |
| isFormula | boolean | If true, a formula is required. Default value is false. |
| isRecordModified | boolean | If true, the system tracks the modification date of the record. Default value is false. Available in API version 63.0 and later. |
| keyQualifierName | string | Contains the developer name of the keyQualifier field. Available in API version 62.0 and later. |
| length | int | Length of a string column. |
| masterLabel | string | Required. Field label. |
| precision | int | The total number of digits in a number including decimal points. Used for currency and for numeric accuracy. |
| primaryIndexOrder | int | If supplied, indicates that this field is part of the primary key. The number value indicates the order of attributes if it’s a compound primary key. A missing value means that this field isn’t part of the primary key. |
| scale | int | The number of digits to the right of the decimal point. Used for currency and for numeric accuracy. |
| sequence | int | Required. The sequence of this source schema. |
| srcKeyQualifier | string | Contains a reference to the source key qualifier record. The source key is the MktDataLakeSrcKeyQualifer metadata type. Available in API version 55.0 and later. |
| usageTag | usageTag (enumeration of type string) | Indicates if the field is a key qualifier field. Available in API version 55.0 and later.Values are:KEY_QUALIFIER—The field is used as a key qualifier field.NONE—The field isn’t used as a key qualifier field. |
| versionNumber | double | Required. The version of the data source object. |

## Declarative Metadata Sample Definition

This is an example of a DataSourceObject component and its fields. You can retrieve the DataSourceField component only through its parent object, DataSourceObject.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").