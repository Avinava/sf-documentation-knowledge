---
title: "AttachedContentDocument"
domain: object-reference
topic: attachedcontentdocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.165Z
estimatedTokens: 1534
keywords: [AttachedContentDocument, read-only, ContentDocument, objects, associated, Calls, Usage]
---

# AttachedContentDocument

> This read-only object contains all ContentDocument objects associated with an object.

# AttachedContentDocument

This read-only object contains all ContentDocument objects associated with an object.

## Supported Calls

describeSObjects()

## Fields

| Field Name | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the attached ContentDocument.This is a relationship field.Relationship NameContentDocumentRelationship TypeLookupRefers ToContentDocument |
| ContentSize | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe size of the document in bytes for notes smaller than 2 GB.In API version 66.0 and later, we recommend that you use the ContentSizeLong field even for notes smaller than 2 GB. |
| ContentSizeLong | TypelongPropertiesFilter, Group, Nillable, SortDescriptionThe size of the note in bytes up to 10 GB.This field is available in API version 66.0 and later. |
| ContentUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionURL for links and Google Docs. This field is set only for links and Google Docs, and is one of the fields that determine the FileType.This field is available in API version 31.0 and later. |
| ExternalDataSourceName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the external data source in which the document is stored. This field is set only for external documents that are connected to Salesforce.This field is available in API version 32.0 and later. |
| ExternalDataSourceType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionType of external data source in which the document is stored. This field is set only for external documents that are connected to Salesforce.This field is available in APIAPI version 35.0 and later. |
| FileExtension | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFile extension of the attached ContentDocument.This field is available in API version 31.0 and later. |
| FileType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionType of document, determined by the file extension. |
| LinkedEntityId | TypereferencePropertiesFilter, Group, SortDescriptionID of the record the ContentDocument is attached to.This is a relationship field.Relationship NameLinkedEntityRelationship TypeLookupRefers ToAccount, Accreditation, ActivationTarget, ActivationTrgtIntOrgAccess, ApiAnomalyEventStore, AssessmentIndicatorDefinition, AssessmentTask, AssessmentTaskContentDocument, AssessmentTaskDefinition, AssessmentTaskIndDefinition, AssessmentTaskOrder, Asset, AssetRelationship, AssignedResource, Award, BoardCertification, BusinessLicense, BusinessMilestone, BusinessProfile, Campaign, CareBarrier, CareBarrierDeterminant, CareBarrierType, CareDeterminant, CareDeterminantType, CareDiagnosis, CareInterventionType, CareMetricTarget, CareObservation, CareObservationComponent, CarePgmProvHealthcareProvider, CarePreauth, CarePreauthItem, CareProgram, CareProgramCampaign, CareProgramEligibilityRule, CareProgramEnrollee, CareProgramEnrolleeProduct, CareProgramEnrollmentCard, CareProgramGoal, CareProgramProduct, CareProgramProvider, CareProgramTeamMember, CareProviderAdverseAction, CareProviderFacilitySpecialty, CareProviderSearchableField, CareRegisteredDevice, CareRequest, CareRequestDrug, CareRequestExtension, CareRequestItem, CareSpecialty, CareSpecialtyTaxonomy, CareTaxonomy, Case, CodeSet, CollaborationGroup, CommSubscription, CommSubscriptionChannelType, CommSubscriptionConsent, CommSubscriptionTiming, ConsumptionSchedule, Contact, ContactEncounter, ContactEncounterParticipant, ContentWorkspace, Contract, ConversationEntry, CoverageBenefit, CoverageBenefitItem, CredentialStuffingEventStore, CreditMemo, CreditMemoLine, Dashboard, DashboardComponent, DataStream, DelegatedAccount, DocumentChecklistItem, EmailMessage, EmailTemplate, EngagementChannelType, EnhancedLetterhead, EnrollmentEligibilityCriteria, Event, HealthcareFacility, HealthcareFacilityNetwork, HealthcarePayerNetwork, HealthcarePractitionerFacility, HealthcareProvider, HealthcareProviderNpi, HealthcareProviderSpecialty, HealthcareProviderTaxonomy, Identifier, Image, IndividualApplication, Invoice, InvoiceLine, Lead, ListEmail, Location, MarketSegment, MarketSegmentActivation, MemberPlan, MessagingSession, MktCalculatedInsight, OperatingHours, Opportunity, Order, OrderItem, Organization, OtherComponentTask, PartyConsent, PersonEducation, PersonLanguage, PersonLifeEvent, PersonName, PlanBenefit, PlanBenefitItem, Product2, ProductFulfillmentLocation, ProductItem, ProductItemTransaction, ProductRequest, ProductRequestLineItem, ProductRequired, ProductTransfer, ProfileSkill, ProfileSkillEndorsement, ProfileSkillUser, ProviderSearchSyncLog, PurchaserPlan, PurchaserPlanAssn, ReceivedDocument, Report, ReportAnomalyEventStore, ResourceAbsence, ResourcePreference, ReturnOrder, ReturnOrderLineItem, ServiceAppointment, ServiceResource, ServiceResourceSkill, ServiceTerritory, ServiceTerritoryMember, ServiceTerritoryWorkType, SessionHijackingEventStore, Shift, Shipment, ShipmentItem, Site, SkillRequirement, SocialPost, Solution, Task, ThreatDetectionFeedback, User, Visit, VisitedParty, Visitor, VoiceCall, VolunteerProject, WorkBadgeDefinition, WorkOrder, WorkOrderLineItem, WorkType, WorkTypeGroup, WorkTypeGroupMember |
| SharingOption | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionControls whether or not sharing is frozen for a file. Only administrators and file owners with Collaborator access to the file can modify this field. Default is Allowed, which means that new shares are allowed. When set to Restricted, new shares are prevented without affecting existing shares.This field is available in API versions 35.0 and later. |
| Title | TypestringPropertiesFilter, Group, idLookup, SortDescriptionTitle of the attached ContentDocument. |

## Usage

Use this object to list all ContentDocument objects attached to an object via a feed post.

To retrieve ContentDocument objects, issue a describe call on an object, which returns a query result for each activity since the record was created. You can’t directly query this object.
