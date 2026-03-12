---
title: "FieldSrcTrgtRelationship"
domain: metadata-api
topic: fieldsrctrgtrelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:39.463Z
estimatedTokens: 724
keywords: [FieldSrcTrgtRelationship, Stores, relationships, data, model, DMO, Individual.Id, one-to-many, relationship, ContactPointEmail.PartyId, Parent, File, Suffix, Directory, Location]
---

# FieldSrcTrgtRelationship

> Stores the relationships between a data model object (DMO) and its fields. For example,
  the Individual.Id field has a one-to-many relationship (1:M) with the
   ContactPointEmail.PartyId field.

# FieldSrcTrgtRelationship

Stores the relationships between a data model object (DMO) and its fields. For example, the Individual.Id field has a one-to-many relationship (1:M) with the ContactPointEmail.PartyId field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

FieldSrcTrgtRelationship components have the suffix .fieldSrcTrgtRelationship and are stored in the fieldSrcTrgtRelationships folder.

## Version

FieldSrcTrgtRelationship components are available in API version 51.0 and later.

## Special Access Rules

To access this metadata type, you must have the Customize Application user permission.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| definitionCreationType | DefinitionCreationType (enumeration of type string) | Required. Describes whether this object was added by the user or as part of a standard taxonomy.Values are:ADGActivation_AudienceBridgeCalculated_InsightChunkCuratedCustomDerivedDirectory_TableExternalMl_PredictionSegment_MembershipSemanticStandardSystemTransformVector_Embedding |
| lookupFieldName | string | Reference to the DMO lookup field. |
| masterLabel | string | Required. The UI name for the field relationship. |
| owner | FieldSrcTrgtRelationshipOwner (enumeration of type string) | Optional. The type of relationship that exists between the source and the target.Values are:SObject - The source of the relationship is a DMO and the target is a standard or custom SObject.DataCloud - Both the source and the target of the relationship are DMOs.The field is needed only when the target is an SObject. The system can infer the value when the target is a DMO. |
| relationshipCardinality | RelationshipCardinality (enumeration of type string) | Required. Cardinality of the relationship between the source and target fields.Values are:ManyToOneOneToOne |
| sourceFieldName | string | Required. Name of the field that represents the source side of the relationship. |
| targetEntity | string | Optional. Name of the entity that represents the target side of the relationship. The target entity can be a DMO or a standard or custom SObject. The field is needed only when the target entity is an SObject. The system can infer the value when the target entity is a DMO. |
| targetFieldName | string | Required. Name of the field that represents the target side of the relationship. |

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
