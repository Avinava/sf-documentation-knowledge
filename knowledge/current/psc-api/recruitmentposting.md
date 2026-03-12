---
title: "RecruitmentPosting"
domain: psc-api
topic: recruitmentposting
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.379Z
estimatedTokens: 1385
keywords: [RecruitmentPosting, advertisement, vacancy, you're, recruiting, posted, API, version, 62.0, later, Calls, Special, Access, Rules, Associated]
---

# RecruitmentPosting

> Represents an advertisement of a vacancy that you're recruiting for and specifies
         when and where the advertisement is posted. This object is available in API version
      62.0 and later.

# RecruitmentPosting

Represents an advertisement of a vacancy that you're recruiting for and specifies when and where the advertisement is posted. This object is available in API version 62.0 and later.

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
| CandidateSourceKey | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the unique key for the internal or external recruitment portal where the vacancy is advertised.Picklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirements. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the recruitment posting. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the vacancy is removed from the recruitment portal. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the recruitment posting. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PostingKeyword | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe keywords associated with the recruitment posting. |
| PostingSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA summary of the recruitment posting content. |
| PostingTitle | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe title of the vacancy in the recruitment posting. |
| PostingType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of recruitment posting.Possible values are:ExternalInternal |
| RecruitmentRequisitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the recruitment requisition associated with the recruitment posting.This field is a relationship field.Relationship NameRecruitmentRequisitionRefers ToRecruitmentRequisition |
| RequisitionIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the recruitment requisition associated with the recruitment posting. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the vacancy is advertised on the recruitment portal. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the recruitment posting.Picklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirements. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[RecruitmentPostingFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[RecruitmentPostingHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[RecruitmentPostingOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[RecruitmentPostingShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- RecruitmentPostingFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- RecruitmentPostingHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- RecruitmentPostingOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- RecruitmentPostingShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
