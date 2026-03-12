---
title: "SuggestedAssessmentDef"
domain: omnistudio
topic: suggestedassessmentdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:52.756Z
estimatedTokens: 750
keywords: [SuggestedAssessmentDef, Stores, suggested, assessments, API, version, 60.0, later, Calls, Associated, Objects]
---

# SuggestedAssessmentDef

> Stores information about suggested assessments. This object is available
      in API version 60.0 and later.

# SuggestedAssessmentDef

Stores information about suggested assessments. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentDefinitionRefId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe reference record of the object associated with the suggested assessment.This field is a polymorphic relationship field.Relationship NameAssessmentDefinitionRefRelationship TypeLookupRefers ToExternalAssessmentDefinition, OmniProcess |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe party for whom the assessment is suggested.This field is a polymorphic relationship field.Relationship NamePartyRelationship TypeLookupRefers ToAccount |
| SourceContextId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context from which the suggested assessment definition record was created.This field is a polymorphic relationship field.Relationship NameSourceContextRelationship TypeLookupRefers ToCase, ClinicalServiceRequest |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the suggested assessment.Possible values are:CompletedIgnoredInProgress—In ProgressSuggested |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SuggestedAssessmentDefFeed](https://developer.salesforce.com/docs/atlas.en-us.248.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[SuggestedAssessmentDefHistory](https://developer.salesforce.com/docs/atlas.en-us.248.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[SuggestedAssessmentDefShare](https://developer.salesforce.com/docs/atlas.en-us.248.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
