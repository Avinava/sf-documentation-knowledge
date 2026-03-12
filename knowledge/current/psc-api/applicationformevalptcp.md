---
title: "ApplicationFormEvalPtcp"
domain: psc-api
topic: applicationformevalptcp
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.878Z
estimatedTokens: 1049
keywords: [ApplicationFormEvalPtcp, user, group, participants, access, application, form, evaluation, API, version, 62.0, later, Calls, Special, Rules]
---

# ApplicationFormEvalPtcp

> Represents information about a user or group of participants who have access
         to an application form evaluation. This object is available in API version 62.0 and
      later.

# ApplicationFormEvalPtcp

Represents information about a user or group of participants who have access to an application form evaluation. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=psc_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

This object is available if Talent Recruitment Management is enabled in your org and Compliant Data Sharing is enabled for the ApplicationFormEvaluation object. To access the object, you need these permissions.

| User Type | Permission Set |
| --- | --- |
| Internal Users | Talent Recruitment Management Specialist AccessANDConfigure Compliant Data Sharing OR Use Compliant Data Sharing permission from the Compliant DataSharing permission set license |
| Salesforce Platform Users | Talent Recruitment Management Hiring Manager AccessORTalent Recruitment Management Employee Access |
| Customer and Partner Community Users | Talent Recruitment Management Applicant Access |

## Fields

| Field | Details |
| --- | --- |
| ApplicationFormEvaluationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe application form evaluation associated with the application form evaluation participant record.This field is a relationship field.Relationship NameApplicationFormEvaluationRelationship TypeMaster-detailRefers ToApplicationFormEvaluation (the master object) |
| Comments | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comments about why the participant has access to the application form evaluation. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the participant's association with the application form evaluation is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the application form evaluation participant record. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe participant associated with the application form evaluation participant record.This field is a polymorphic relationship field.Relationship NameParticipantRefers ToGroup, User |
| ParticipantRoleId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe participant role associated with the application form evaluation participant record.This field is a relationship field.Relationship NameParticipantRoleRefers ToParticipantRole |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApplicationFormEvalPtcpFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ApplicationFormEvalPtcpHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ApplicationFormEvalPtcpFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- ApplicationFormEvalPtcpHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
