---
title: "AssessmentDefinition"
domain: omnistudio
topic: assessmentdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.398Z
estimatedTokens: 864
keywords: [AssessmentDefinition, Represents, definition, assessment, including, details, such, last, revised, date, purpose., API, version, 63.0, later., Supported, Calls, Fields, Associated, Objects]
---

# AssessmentDefinition

> Represents the definition of an assessment including details such as the last
         revised date and purpose. This object is available in API version 63.0 and later.

# AssessmentDefinition

Represents the definition of an assessment including details such as the last revised date and purpose. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApprovalDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the assessment was approved by the publisher. |
| DisplayType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the display format for questions in the assessment for the end-user. |
| EffectiveFromDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the assessment takes effect. |
| EffectiveToDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date until the assessment is in effect. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last referenced. |
| LastRevisedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the assessment was last revised. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PerformerType | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the type of performer that can record responses to the assessment. |
| PublisherId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe organization or individual that published the assessment.This field is a polymorphic relationship field.Relationship NamePublisherRefers ToAccount, Contact, User |
| Purpose | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe purpose of the assessment. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssessmentDefinitionChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AssessmentDefinitionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AssessmentDefinitionOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[AssessmentDefinitionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
