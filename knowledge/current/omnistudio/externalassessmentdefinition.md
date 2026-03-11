---
title: "ExternalAssessmentDefinition"
domain: omnistudio
topic: externalassessmentdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:12.003Z
keywords: [ExternalAssessmentDefinition, Supported, Calls, Fields, Associated, Objects]
---

# ExternalAssessmentDefinition

# ExternalAssessmentDefinition

Stores information about external assessments. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the guideline category the external assessment belongs to.Possible values are:CCGTC |
| AssessmentContentVersion | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version number of the external assessment's content. |
| CustomAssessmentDisclaimer | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA disclaimer for custom assessments sent by the external API. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe unique identifier of the external assessment. |
| IsCustomAssessment | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the external assessment is a custom assessment authored by the user (true) or an out-of-the-box assessment (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| SourceSystemName | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe source system from which the record was retrieved.Possible values are:MCG |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ExternalAssessmentDefinitionFeed](https://developer.salesforce.com/docs/atlas.en-us.248.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ExternalAssessmentDefinitionHistory](https://developer.salesforce.com/docs/atlas.en-us.248.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ExternalAssessmentDefinitionShare](https://developer.salesforce.com/docs/atlas.en-us.248.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.