---
title: "RecruitmentRequisitionLoc"
domain: psc-api
topic: recruitmentrequisitionloc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.402Z
estimatedTokens: 798
keywords: [RecruitmentRequisitionLoc, junction, recruitment, requisition, location, API, version, 62.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# RecruitmentRequisitionLoc

> Represents a junction between recruitment requisition and
         location This object is available in API version 62.0 and later.

# RecruitmentRequisitionLoc

Represents a junction between recruitment requisition and location This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=psc_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

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
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe location associated with the recruitment requisition location.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the recruitment requisition location. |
| RecruitmentRequisitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe recruitment requisition associated with the recruitment requisition location.This field is a relationship field.Relationship NameRecruitmentRequisitionRelationship TypeMaster-detailRefers ToRecruitmentRequisition (the master object) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RecruitmentRequisitionLocFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[RecruitmentRequisitionLocHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- RecruitmentRequisitionLocFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- RecruitmentRequisitionLocHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
