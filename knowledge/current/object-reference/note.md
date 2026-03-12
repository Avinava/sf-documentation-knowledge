---
title: "Note"
domain: object-reference
topic: note
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.285Z
estimatedTokens: 932
keywords: [text, associated, custom, standard, Contact, Contract, Opportunity, Calls, Usage]
---

# Note

> Represents a note, which is text associated with a custom object or a
   standard object, such as a Contact, Contract,
   or Opportunity.

# Note

Represents a note, which is text associated with a custom object or a standard object, such as a Contact, Contract, or Opportunity.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Body | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionBody of the note. Limited to 32 KB. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| IsPrivate | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, only the note owner or a user with the “Modify All Data” permission can view the note or query it via the API. Note that if a user who does not have the “Modify All Data” permission sets this field to true on a note that they do not own, then they can no longer query, delete, or update the note. Label is Private. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns the note.This is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the object associated with the note.This is a polymorphic relationship field.Relationship NameParentRelationship TypeLookupRefers ToAccount, Accreditation, AssessmentIndicatorDefinition, AssessmentTask, AssessmentTaskContentDocument, AssessmentTaskDefinition, AssessmentTaskOrder, Asset, Award, BoardCertification, BusinessLicense, BusinessMilestone, BusinessProfile, CareBarrier, CareBarrierDeterminant, CareBarrierType, CareDeterminant, CareDeterminantType, CareDiagnosis, CareMetricTarget, CareObservationComponent, CarePgmProvHealthcareProvider, CareProgram, CareProgramCampaign, CareProgramEligibilityRule, CareProgramEnrollee, CareProgramEnrolleeProduct, CareProgramEnrollmentCard, CareProgramGoal, CareProgramProduct, CareProgramProvider, CareProgramTeamMember, CareProviderAdverseAction, CareProviderFacilitySpecialty, CareRegisteredDevice, CareRequest, CareRequestDrug, CareRequestExtension, CareRequestItem, CareSpecialty, CareTaxonomy, CommSubscription, CommSubscriptionChannelType, CommSubscriptionConsent, CommSubscriptionTiming, Contact, Contract, CreditMemo, DelegatedAccount, EngagementChannelType, EnrollmentEligibilityCriteria, HealthcareFacility, HealthcareFacilityNetwork, HealthcarePayerNetwork, HealthcarePractitionerFacility, HealthcareProvider, HealthcareProviderNpi, HealthcareProviderSpecialty, HealthcareProviderTaxonomy, IdentityDocument, Image, IndividualApplication, Invoice, Lead, Location, MemberPlan, Opportunity, Order, OtherComponentTask, PersonEducation, PersonLifeEvent, Product2, ProductRequest, ProductRequestLineItem, PurchaserPlan, ReceivedDocument, ServiceAppointment, ServiceResource, Shift, SocialPost, Visit, VisitedParty, Visitor, VolunteerProject, WorkOrder, WorkOrderLineItem |
| Title | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionTitle of the note. |

## Usage

Use this object to manage notes for an object.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
