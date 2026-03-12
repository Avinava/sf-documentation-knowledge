---
title: "ApplicationFormParticipant"
domain: psc-api
topic: applicationformparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.895Z
estimatedTokens: 1194
keywords: [ApplicationFormParticipant, user, group, participants, access, application, form, API, version, 62.0, later, Calls, Special, Rules, Associated]
---

# ApplicationFormParticipant

> Represents information about a user or group of participants who have
         access to an application form. This object is available in API version 62.0 and
      later.

# ApplicationFormParticipant

Represents information about a user or group of participants who have access to an application form. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=psc_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

This object is available if Talent Recruitment Management is enabled in your org and Compliant Data Sharing is enabled for the ApplicationForm object. To access the object, you need these permissions.

| User Type | Permission Set |
| --- | --- |
| Internal Users | Talent Recruitment Management Specialist AccessANDConfigure Compliant Data Sharing OR Use Compliant Data Sharing permission from the Compliant DataSharing permission set license |
| Salesforce Platform Users | Talent Recruitment Management Hiring Manager AccessORTalent Recruitment Management Employee Access |
| Customer and Partner Community Users | Talent Recruitment Management Applicant Access |

## Fields

| Field | Details |
| --- | --- |
| ApplicationFormId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe application form associated with the participant.This field is a relationship field.Relationship NameApplicationFormRelationship TypeMaster-detailRefers ToApplicationForm (the master object) |
| Comments | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comments about why the participant has access to the application form. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the application form participant is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the application form participant record. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe participant that's associated with the application form.This field is a polymorphic relationship field.Relationship NameParticipantRelationship TypeLookupRefers ToGroup, User |
| ParticipantRoleId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe default access level for a role that a participant can have in the context of a parent record.This field is a relationship field.Relationship NameParticipantRoleRelationship TypeLookupRefers ToParticipantRole |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApplicationFormParticipantChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ApplicationFormParticipantFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ApplicationFormParticipantHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ApplicationFormParticipantChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- ApplicationFormParticipantFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- ApplicationFormParticipantHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
