---
title: "NoteAndAttachment"
domain: object-reference
topic: noteandattachment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.292Z
estimatedTokens: 928
keywords: [NoteAndAttachment, read-only, notes, attachments, associated, Calls, Usage]
---

# NoteAndAttachment

> This read-only object contains all notes and attachments associated
      with an object.

# NoteAndAttachment

This read-only object contains all notes and attachments associated with an object.

## Supported Calls

describeSObjects()

## Fields

| Field | Details |
| --- | --- |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| IsNote | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the object contains a note (true) or an attachment (false). |
| IsPrivate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, only the note owner or a user with the “Modify All Data” permission can view the note or query it via the API. Note that if a regular user who does not have “Modify All Data” permission sets this field to true on a note that they do not own, then they can no longer query, delete, or update that note. Label is Private. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionID of the user who owns the note and attachment.This is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| ParentId | TypereferencePropertiesFilter, Group, SortDescriptionID of the parent object.This is a polymorphic relationship field.Relationship NameParentRelationship TypeLookupRefers ToAccount, Accreditation, AssessmentIndicatorDefinition, AssessmentTask, AssessmentTaskContentDocument, AssessmentTaskDefinition, AssessmentTaskOrder, Asset, Award, BoardCertification, BusinessLicense, BusinessMilestone, BusinessProfile, CareBarrier, CareBarrierDeterminant, CareBarrierType, CareDeterminant, CareDeterminantType, CareDiagnosis, CareMetricTarget, CareObservationComponent, CarePgmProvHealthcareProvider, CareProgram, CareProgramCampaign, CareProgramEligibilityRule, CareProgramEnrollee, CareProgramEnrolleeProduct, CareProgramEnrollmentCard, CareProgramGoal, CareProgramProduct, CareProgramProvider, CareProgramTeamMember, CareProviderAdverseAction, CareProviderFacilitySpecialty, CareRegisteredDevice, CareRequest, CareRequestDrug, CareRequestExtension, CareRequestItem, CareSpecialty, CareTaxonomy, CommSubscription, CommSubscriptionChannelType, CommSubscriptionConsent, CommSubscriptionTiming, Contact, Contract, CreditMemo, DelegatedAccount, EngagementChannelType, EnrollmentEligibilityCriteria, HealthcareFacility, HealthcareFacilityNetwork, HealthcarePayerNetwork, HealthcarePractitionerFacility, HealthcareProvider, HealthcareProviderNpi, HealthcareProviderSpecialty, HealthcareProviderTaxonomy, IdentityDocument, Image, IndividualApplication, Invoice, Lead, Location, MemberPlan, Opportunity, Order, OtherComponentTask, PersonEducation, PersonLifeEvent, Product2, ProductRequest, ProductRequestLineItem, PurchaserPlan, ReceivedDocument, ServiceAppointment, ServiceResource, Shift, SocialPost, Visit, VisitedParty, Visitor, VolunteerProject, WorkOrder, WorkOrderLineItem |
| Title | TypestringPropertiesFilter, Nillable, Group, SortDescriptionTitle of the note. |

## Usage

Use this object to list all notes and attachments for an object.

To retrieve notes and attachments, issue a describe call on an object, which returns a query result for each activity since the record was created. You can’t directly query this object.

#### See Also

-   [Note](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_note.htm "Represents a note, which is text associated with a custom object or a standard object, such as a Contact, Contract, or Opportunity.")

-   [Attachment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attachment.htm "Represents a file that a User has uploaded and attached to a parent object.")

## Related Topics

- Note (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_note.htm)
- Attachment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attachment.htm)
