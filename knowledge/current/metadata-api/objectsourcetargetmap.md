---
title: "ObjectSourceTargetMap"
domain: metadata-api
topic: objectsourcetargetmap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.773Z
keywords: [ObjectSourceTargetMap, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, FieldSourceTargetMap]
---

# ObjectSourceTargetMap

# ObjectSourceTargetMap

Contains the object-level mappings between the source and the target objects. The source and target objects can be an MktDataLakeObject or an MktDataModelObject. For example, an Email source object can be mapped to the ContactPointEmail object.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ObjectSourceTargetMap components have the suffix .objectSourceTargetMap and are stored in the objectSourceTargetMaps folder.

## Version

ObjectSourceTargetMap components are available in API version 51.0 and later.

## Special Access Rules

To access this metadata type, you must have the Customize Application user permission.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| creationType | DefinitionCreationType (enumeration of type string) | Describes whether this object was added by the user or as part of a standard taxonomy. Valid values are:ADGActivation_AudienceBridgeCalculated_InsightCG_Audience (Available in API version 62.0 and later)ChunkCuratedCustomDerivedDirectory_TableExternalMl_PredictionSegment_MembershipSemanticStandardSystemTransformVector_Embedding |
| fieldSourceTargetMaps | FieldSourceTargetMap[] | Contains the field-level mappings associated with this object mapping. |
| masterLabel | string | Required. The UI name for the target map. |
| sequenceNbr | int | Use this field to display multiple mappings between the same two objects, for a consistent customer experience when presenting the mappings. |
| sourceObjectName | string | Required. Name of the source object that’s mapped, such as Email, or SfmcEnt1_Subscriber. |
| targetObjectName | string | Required. Name of the target object that’s mapped, such as ContactPointEmail or Individual. |

## FieldSourceTargetMap

Contains the field-level mappings between the source and the target objects.

The source and target can be MktDataLakeField or MktDataModelField.

For example, you can map a Person source object’s field called emailAddress to an Individual target object's field called emailAddress.

| Field Name | Field Type | Description |
| --- | --- | --- |
| creationType | DefinitionCreationType (enumeration of type string) | Describes whether this object was added by the user or as part of a standard taxonomy.Values are:ADGActivation_AudienceBridgeCalculated_InsightChunkCuratedCustomDerivedDirectory_TableExternalMl_PredictionSegment_MembershipSemanticStandardSystemTransformVector_Embedding |
| filterApplied | boolean | Specifies whether the field-level mapping is an event type filter (true) or not (false). |
| filterOperationType | string | If the field-level mapping is an event type filter, specifies the filtering operator.Value is:Equal |
| filterValue | string | If the field-level mapping is an event type filter, specifies the object that contains the event type field. |
| isSourceFormula | boolean | Specifies whether the source field is a formula (true) or not (false). If true, you must include the sourceFormula value. |
| sourceField | string | Required. The source object field that’s mapped, such as EmailAddr or SfmcEnt1_Subscriber.FName. |
| sourceFormula | string | A formula, such as concatenation, date function, or constant value. |
| targetField | string | Required. The target object field that’s mapped, such as SfmcEnt1_Email.EmailAddr or Individual.FirstName. |