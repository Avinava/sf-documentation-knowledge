---
title: "CombinedAttachment"
domain: object-reference
topic: combinedattachment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.636Z
estimatedTokens: 1586
keywords: [CombinedAttachment, read-only, notes, attachments, Google, Docs, documents, uploaded, libraries, Salesforce, CRM, content, files, added, Chatter]
---

# CombinedAttachment

> This read-only object contains all notes, attachments, Google Docs, documents uploaded
  to libraries in Salesforce CRM content, and files added to Chatter that are associated with a
  record.

# CombinedAttachment

This read-only object contains all notes, attachments, Google Docs, documents uploaded to libraries in Salesforce CRM content, and files added to Chatter that are associated with a record.

## Supported Calls

describeSObjects()

## Fields

| Field Name | Details |
| --- | --- |
| ContentSize | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe size of the document in bytes for documents smaller than 2 GB.In API version 66.0 and later, we recommend that you use the ContentSizeLong field even for documents smaller than 2 GB. |
| ContentSizeLong | TypelongPropertiesFilter, Group, Nillable, SortDescriptionThe size of the document in bytes up to 10 GB.This field is available in API version 66.0 and later. |
| ContentUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionURL for links and Google Docs. This field is set only for links and Google Docs, and is one of the fields that determine the FileType.This field is available in API version 31.0 and later. |
| ExternalDataSourceName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the external data source in which the document is stored. This field is set only for external documents that are connected to Salesforce.This field is available in API version 32.0 and later. |
| ExternalDataSourceType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionType of external data source in which the document is stored. This field is set only for external documents that are connected to Salesforce.This field is available in API version 35.0 and later. |
| FileExtension | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFile extension of the document.This field is available in API version 31.0 and later. |
| FileType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionType of document, which is determined by the file extension. |
| ParentId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the parent object.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToAccount, Accreditation, ActivationTarget, ActivationTrgtIntOrgAccess, ApiAnomalyEventStore, AssessmentIndicatorDefinition, AssessmentTask, AssessmentTaskContentDocument, AssessmentTaskDefinition, AssessmentTaskIndDefinition, AssessmentTaskOrder, Asset, AssetRelationship, AssignedResource, Award, BoardCertification, BusinessLicense, BusinessMilestone, BusinessProfile, Campaign, CareBarrier, CareBarrierDeterminant, CareBarrierType, CareDeterminant, CareDeterminantType, CareDiagnosis, CareInterventionType, CareMetricTarget, CareObservation, CareObservationComponent, CarePgmProvHealthcareProvider, CarePreauth, CarePreauthItem, CareProgram, CareProgramCampaign, CareProgramEligibilityRule, CareProgramEnrollee, CareProgramEnrolleeProduct, CareProgramEnrollmentCard, CareProgramGoal, CareProgramProduct, CareProgramProvider, CareProgramTeamMember, CareProviderAdverseAction, CareProviderFacilitySpecialty, CareProviderSearchableField, CareRegisteredDevice, CareRequest, CareRequestDrug, CareRequestExtension, CareRequestItem, CareSpecialty, CareSpecialtyTaxonomy, CareTaxonomy, Case, CodeSet, CollaborationGroup, CommSubscription, CommSubscriptionChannelType, CommSubscriptionConsent, CommSubscriptionTiming, ConsumptionSchedule, Contact, ContactEncounter, ContactEncounterParticipant, ContentWorkspace, Contract, ConversationEntry, CoverageBenefit, CoverageBenefitItem, CredentialStuffingEventStore, CreditMemo, CreditMemoLine, Dashboard, DashboardComponent, DataStream, DelegatedAccount, DocumentChecklistItem, EmailMessage, EmailTemplate, EngagementChannelType, EnhancedLetterhead, EnrollmentEligibilityCriteria, Event, HealthcareFacility, HealthcareFacilityNetwork, HealthcarePayerNetwork, HealthcarePractitionerFacility, HealthcareProvider, HealthcareProviderNpi, HealthcareProviderSpecialty, HealthcareProviderTaxonomy, Identifier, IdentityDocument, Image, IndividualApplication, Invoice, InvoiceLine, Lead, ListEmail, Location, MarketSegment, MarketSegmentActivation, MemberPlan, MessagingSession, MktCalculatedInsight, OperatingHours, Opportunity, Order, OrderItem, Organization, OtherComponentTask, PartyConsent, PersonEducation, PersonLanguage, PersonLifeEvent, PersonName, PlanBenefit, PlanBenefitItem, Product2, ProductFulfillmentLocation, ProductItem, ProductItemTransaction, ProductRequest, ProductRequestLineItem, ProductRequired, ProductTransfer, ProfileSkill, ProfileSkillEndorsement, ProfileSkillUser, ProviderSearchSyncLog, PurchaserPlan, PurchaserPlanAssn, ReceivedDocument, Report, ReportAnomalyEventStore, ResourceAbsence, ResourcePreference, ReturnOrder, ReturnOrderLineItem, ServiceAppointment, ServiceResource, ServiceResourceSkill, ServiceTerritory, ServiceTerritoryMember, ServiceTerritoryWorkType, SessionHijackingEventStore, Shift, Shipment, ShipmentItem, Site, SkillRequirement, SocialPost, Solution, Task, ThreatDetectionFeedback, User, Visit, VisitedParty, Visitor, VoiceCall, VolunteerProject, WorkBadgeDefinition, WorkOrder, WorkOrderLineItem, WorkType, WorkTypeGroup, WorkTypeGroupMember |
| RecordType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe parent object type. |
| SharingOption | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionControls whether sharing is frozen for a file. Only Salesforce admins and file owners with Collaborator access to the file can modify this field. The default is Allowed, which means that new shares are allowed. When set to Restricted, new shares are prevented without affecting existing shares.This field is available in API versions 35.0 and later. |
| Title | TypestringPropertiesFilter, Group, Nillable, SortDescriptionTitle of the attached file. |

## Usage

Use this object to list all notes, attachments, documents uploaded to libraries in Salesforce CRM content, and files added to Chatter for a record, such as a related list on a detail page.

To determine if an object supports the CombinedAttachment object, call describeSObject() on the object. For example, describeSObject('Account') returns all the child relationships of the Account object, including CombinedAttachment. You can then query the CombinedAttachment child relationship.

```

```

You can’t directly query CombinedAttachment.

## Code Examples

```
SELECT Name, (SELECT Title FROM CombinedAttachments)
FROM Account
```
