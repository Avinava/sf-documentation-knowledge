---
title: "OmniProcessAsmtQuestionVer"
domain: psc-api
topic: omniprocessasmtquestionver
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.048Z
estimatedTokens: 1045
keywords: [OmniProcessAsmtQuestionVer, junction, OmniScript, process, assessment, question, version, API, 55.0, later, Calls, Associated, Objects]
---

# OmniProcessAsmtQuestionVer

> Represents a junction between an OmniScript process and an assessment
         question version. This object is available in API version 55.0 and later.

# OmniProcessAsmtQuestionVer

Represents a junction between an OmniScript process and an assessment question version. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentQuestionVersionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of assessment question version associated with the Omni Process assessment question version record.This is a relationship field.Relationship NameAssessmentQuestionVersionRelationship TypeLookupRefers ToAssessmentQuestionVersion |
| IsImportant | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the assessment question version is important (true) or not (false).The default value is false.Available in API version 59.0 and later. |
| IsPrefill | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the assessment question version is prefilled (true) or not (false).The default value is false.Available in API version 60.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the Omni Process assessment question version record. |
| OmniProcessElementId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the Omni Process element associated with the Omni Process assessment question version record.This is a relationship field.Relationship NameOmniProcessElementRelationship TypeLookupRefers ToOmniProcessElement |
| OmniProcessId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the Omni Process associated with the Omni Process assessment question version record.This is a relationship field.Relationship NameOmniProcessRelationship TypeLookupRefers ToOmniProcess |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the relationship record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OmniProcessAsmtQuestionVerChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.252.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[OmniProcessAsmtQuestionVerFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[OmniProcessAsmtQuestionVerHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[OmniProcessAsmtQuestionVerOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.252.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[OmniProcessAsmtQuestionVerShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
