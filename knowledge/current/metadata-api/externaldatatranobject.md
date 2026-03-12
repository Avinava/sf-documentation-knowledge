---
title: "ExternalDataTranObject"
domain: metadata-api
topic: externaldatatranobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:39.668Z
estimatedTokens: 1741
keywords: [ExternalDataTranObject, Represents, definition, Data, 360, schema, object., extends, Metadata, metadata, inherits, its, fullName, field., Important, File, Suffix, Directory, Location, Version]
---

# ExternalDataTranObject

> Represents a definition of a Data 360 schema object. This type extends the Metadata metadata type and inherits its
        fullName field.

# ExternalDataTranObject

Represents a definition of a Data 360 schema object. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

ExternalDataTranObject components have the suffix .externalDataTranObject and are stored in the externalDataTranObjects folder.

## Version

ExternalDataTranObject components are available in API version 55.0 and later.

## Special Access Rules

ExternalDataTranObject is available only if Data 360 is provisioned.

## Fields

| Field Name | Description |
| --- | --- |
| availabilityStatus | Field TypeAvailabilityStatus (enumeration of type string)DescriptionRequired.Represents the availability of the object. Valid values are:AvailableIn_Use |
| creationType | Field TypeDefinitionCreationType (enumeration of type string)DescriptionRequired.Describes whether this object was added by the Customer or as part of a Standard Taxonomy or by the System. Valid values are:Segment_MembershipActivation_Audience (Reserved for internal use only)CustomStandardSystemDerivedBridgeCuratedStandardValid values available in API version 62.0 and later are:ADGCalculated_InsightCG_AudienceChunkDirectory_TableExternalSemanticTransformVector_Embedding |
| extDataTranObjectTemplate | Field TypestringDescriptionReserved for internal use and read-only. Reference to the associated ExtDataTranObjectTemplate data kit object. The system populates this field when a data kit that contains a data stream is deployed. |
| externalDataTranFields | Field TypeExternalDataTranFieldDescriptionOptional.Stores the fields related to that schema object. |
| masterLabel | Field TypestringDescriptionRequired.The UI name for the object. |
| mktDataTranObject | Field TypeMktDataTranObjectDescriptionOptional.An entity that is used to transport information from the source to a target. |
| objectCategory | Field TypestringDescriptionRequired.Reference to the Object Category. For Transport, they're Profile, Engagement, or Other. |

## ExternalDataTranField

Stores the fields related to ExternalDataTranObject schema.

| Field Name | Description |
| --- | --- |
| creationType | Field TypeDefinitionCreationType (enumeration of type string).DescriptionRequired.Describes whether this object was added by the Customer or as part of a Standard Taxonomy or by the System. Valid values are:Segment_MembershipCustomStandardSystemDerivedBridgeCurated |
| datatype | Field TypestringDescriptionRequired.Phone, currency, number, or other assigned type. |
| dateFormat | Field TypestringDescriptionOptional.The Date format of date, time, date/time fields in this Transport field. |
| extDataTranFieldTemplate | Field TypestringDescriptionReserved for internal use and read-only. Reference to the associated ExtDataTranFieldTemplate data kit object. The system populates this field when a data kit that contains a data stream is deployed. |
| externalName | Field TypestringDescriptionOptional.Name of the object in the external system (different from Developer Name). |
| isCurrencyIsoCode | Field TypebooleanDescriptionOptional.If true, this field is a currency ISO code. |
| isDataRequired | Field TypebooleanDescriptionOptional.If true, data is required for this field. |
| length | Field TypeintDescriptionOptional.Length of a string column. |
| masterLabel | Optional. Field label. |
| mktDataTranField | Field TypemktDataTranFieldTypeDescriptionOptional. |
| precision | Field TypeintDescriptionOptional.Used for currency and numeric accuracy. |
| primaryIndexOrder | Field TypeintDescriptionOptional.If supplied, indicates this field is part of the primary key where the number value (starting at 1) indicates the order of attributes if it's a compound primary key. Missing value means this field isn’t part of the primary key. |
| scale | Field TypeintDescriptionOptional.Used for currency and numbers. |
| sequence | Field TypeintDescriptionOptional.The sequence of this source schema. |

## MktDataTranField

Stores fields related to [MktDataTranObject](atlas.en-us.api_meta.meta/api_meta/meta_mktdatatranobject.htm "An entity that is used to deliver (aka transport) information from the source to a target (target will be called a landing entity).This can be the schema of a file, API, Event, or other means of transporting data, such as SubscriberFile1.csv, or SubscriberCDCEvent.").

| Field Name | Description |
| --- | --- |
| creationType | Field TypeDefinitionCreationType (enumeration of type string).DescriptionRequired.Describes whether this object was added by the Customer or as part of a Standard Taxonomy or by the System. Valid values are:Segment_MembershipCustomStandardSystemDerivedBridgeCuratedValid values available in API version 62.0 and later are:ADGCalculated_InsightCG_AudienceChunkDirectory_TableExternalSemanticTransformVector_Embedding |
| datatype | Field TypestringDescriptionRequired.Phone, currency, number, or other assigned type. |
| dateFormat | Field TypestringDescriptionOptional.The Date format of date, time, date/time fields in this Transport field. |
| externalName | Field TypestringDescriptionOptional.Name of the object in the external system (different from Developer Name). |
| isDataRequired | Field TypebooleanDescriptionOptional.If true, data is required for this field. |
| length | Field TypeintDescriptionOptional.Length of a string column. |
| masterLabel | Optional. Field label. |
| precision | Field TypeintDescriptionOptional.Used for currency and numeric accuracy. |
| primaryIndexOrder | Field TypeintDescriptionOptional.If supplied, indicates this field is part of the primary key where the number value (starting at 1) indicates the order of attributes if it's a compound primary key. Missing value means this field isn’t part of the primary key. |
| scale | Field TypeintDescriptionOptional.Used for currency and numbers. |
| sequence | Field TypeintDescriptionOptional.The sequence of this source schema. |

## Declarative Metadata Sample Definition

The following is an example of a ExternalDataTranObject component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ExternalDataTranObject xmlns="http://soap.sforce.com/2006/04/metadata">
        <fullName>PlatformTraces</fullName>
        <availabilityStatus>Available</availabilityStatus>
        <creationType>Custom</creationType>
        <masterLabel>PlatformTraces</masterLabel>
        <objectCategory>Salesforce_SFDCReferenceModel_0_93.Engagement</objectCategory>
</ExternalDataTranObject>
```

```
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ExternalDataTranObject</name>
    </types>
    <version>55.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- MktDataTranObject (atlas.en-us.api_meta.meta/api_meta/meta_mktdatatranobject.htm)
