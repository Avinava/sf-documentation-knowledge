---
title: "EmploymentOfferVettingEval"
domain: psc-api
topic: employmentoffervettingeval
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.582Z
estimatedTokens: 745
keywords: [EmploymentOfferVettingEval, junction, employment, offer, vetting, evaluation, recipient, API, version, 62.0, later, Calls, Special, Access, Rules]
---

# EmploymentOfferVettingEval

> Represents a junction between an employment offer and a vetting
         evaluation of the offer recipient.  This object is available in API version 62.0 and
      later.

# EmploymentOfferVettingEval

Represents a junction between an employment offer and a vetting evaluation of the offer recipient. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Talent Recruitment Management is enabled in your org. To access the object, you need one of these permission sets.

| User Type | Permission Set |
| --- | --- |
| Internal Users | Talent Recruitment Management Specialist Access |
| Salesforce Platform Users | Talent Recruitment Management Hiring Manager AccessORTalent Recruitment Management Employee Access |
| Customer and Partner Community Users | Talent Recruitment Management Applicant Access |

## Fields

| Field | Details |
| --- | --- |
| EmploymentOfferId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the employment offer associated with the employment offer vetting evaluation.This field is a relationship field.Relationship NameEmploymentOfferRelationship TypeMaster-detailRefers ToEmploymentOffer (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the employment offer vetting evaluation. |
| VettingEvaluationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the vetting evaluation associated with the employment offer vetting evaluation.This field is a relationship field.Relationship NameVettingEvaluationRefers ToVettingEvaluation |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EmploymentOfferVettingEvalFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[EmploymentOfferVettingEvalHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- EmploymentOfferVettingEvalFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- EmploymentOfferVettingEvalHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
