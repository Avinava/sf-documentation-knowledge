---
title: "ComplaintParticipant"
domain: nonprofit-cloud
topic: complaintparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.281Z
estimatedTokens: 1005
keywords: [ComplaintParticipant, junction, complaint, account, contact, stores, participant, registers, authorities, applicant, co-applicant, household, business, API, version]
---

# ComplaintParticipant

> Represents a junction between a public complaint, and an account or a
         contact. This object stores the details of the participant who registers a complaint with
         the authorities. This participant could be the applicant, co-applicant, a household, or
         even a business account. This object is available in API version 54.0 and
      later.

# ComplaintParticipant

Represents a junction between a public complaint, and an account or a contact. This object stores the details of the participant who registers a complaint with the authorities. This participant could be the applicant, co-applicant, a household, or even a business account. This object is available in API version 54.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

When Compliant Data Sharing is enabled for the Public Complaint object, a complaint participant represents information about a user or group of participants who have access to a public complaint.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comments | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comments about why the participant has access to the public complaint.Available in API version 62.0 and later, when Compliant Data Sharing is enabled for the Public Complaint object. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the participant's association with the public complaint is active (true) or not (false).The default value is false.Available in API version 62.0 and later, when Compliant Data Sharing is enabled for the Public Complaint object. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the complaint participant record. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe participant associated with the complaint participant record.This field is a polymorphic relationship field.Relationship NameParticipantRefers ToAccount, Contact, Group, User |
| ParticipantRoleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe participant role associated with the complaint participant record.This field is a relationship field.Available in API version 62.0 and later, when Compliant Data Sharing is enabled for the Public Complaint object.Relationship NameParticipantRoleRefers ToParticipantRole |
| PublicComplaintId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe public complaint associated with the complaint participant record.This field is a relationship field.Relationship NamePublicComplaintRelationship TypeMaster-DetailRefers ToPublicComplaint |
| Role | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the role of the complaint participant.Possible values are:ObserverPerpetratorReporterVictimThe new Nillable property is available in API version 58.0 and later. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the complaint participant.Possible values are:ActiveInactiveThe default value is Active. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ComplaintParticipantFeed

Feed tracking is available for the object.

ComplaintParticipantHistory

History is available for tracked fields of the object.
