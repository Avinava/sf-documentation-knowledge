---
title: "ProcessInstanceHistory"
domain: object-reference
topic: processinstancehistory
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:15.205Z
estimatedTokens: 1894
keywords: [ProcessInstanceHistory, read-only, steps, pending, approval, requests, associated, process, ProcessInstance, Calls, Usage]
---

# ProcessInstanceHistory

> This read-only object shows all steps and pending approval requests associated with an approval process (ProcessInstance).

# ProcessInstanceHistory

This read-only object shows all steps and pending approval requests associated with an approval process (ProcessInstance).

## Supported Calls

describeSObjects()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| ActorId | TypereferencePropertiesFilter, Group, SortDescriptionID of the user who is assigned to this ProcessInstance.This is a polymorphic relationship field.Relationship NameActorRelationship TypeLookupRefers ToGroup, User |
| Comments | TypestringPropertiesFilter, Nillable, SortDescriptionComments for a ProcessInstanceStep . This field doesn't apply to ProcessInstanceWorkitem records. |
| ElapsedTimeInDays | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total time in days between when the approval process instance was started and when it was completed. |
| ElapsedTimeInHours | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total time in hours between when the approval process instance was started and when it was completed. |
| ElapsedTimeInMinutes | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total time in minutes between when the approval process instance was started and when it was completed. |
| IsPending | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the ProcessInstance is pending (true) or not (false). |
| OriginalActorId | TypereferencePropertiesFilter, Group, SortDescriptionID of the user who was originally assigned this ProcessInstance.This is a polymorphic relationship field.Relationship NameOriginalActorRelationship TypeLookupRefers ToGroup, User |
| ProcessInstanceId | TypereferencePropertiesFilter, Group, SortDescriptionID of the ProcessInstance.This is a relationship field.Relationship NameProcessInstanceRelationship TypeLookupRefers ToProcessInstance |
| ProcessNodeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of this step.This is a relationship field.Relationship NameProcessNodeRelationship TypeLookupRefers ToProcessNode |
| RemindersSent | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of reminders that have been sent. Default is 0 (zero). |
| StepStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the status of the ProcessInstanceStep. |
| TargetObjectId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the object being approved.This is a polymorphic relationship field.Relationship NameTargetObjectRelationship TypeLookupRefers ToAccount, Accreditation, ActivationTarget, Address, AlternativePaymentMethod, AssessmentIndicatorDefinition, AssessmentTask, AssessmentTaskContentDocument, AssessmentTaskDefinition, AssessmentTaskIndDefinition, AssessmentTaskOrder, Asset, AssetRelationship, AssignedResource, AuthorizationForm, AuthorizationFormConsent, AuthorizationFormDataUse, AuthorizationFormText, Award, BoardCertification, BusinessLicense, BusinessMilestone, BusinessProfile, Campaign, CareBarrier, CareBarrierDeterminant, CareBarrierType, CareDeterminant, CareDeterminantType, CareDiagnosis, CareInterventionType, CareMetricTarget, CareObservation, CareObservationComponent, CarePgmProvHealthcareProvider, CarePreauth, CarePreauthItem, CareProgram, CareProgramCampaign, CareProgramEligibilityRule, CareProgramEnrollee, CareProgramEnrolleeProduct, CareProgramEnrollmentCard, CareProgramGoal, CareProgramProduct, CareProgramProvider, CareProgramTeamMember, CareProviderAdverseAction, CareProviderFacilitySpecialty, CareRegisteredDevice, CareRequest, CareRequestDrug, CareRequestExtension, CareRequestItem, CareSpecialty, CareSpecialtyTaxonomy, CareTaxonomy, Case, CodeSet, CodeSetBundle, CommSubscription, CommSubscriptionChannelType, CommSubscriptionConsent, CommSubscriptionTiming, ConsumptionRate, ConsumptionSchedule, Contact, ContactEncounter, ContactEncounterParticipant, ContactPointAddress, ContactPointConsent, ContactPointEmail, ContactPointPhone, ContactPointTypeConsent, Contract, CoverageBenefit, CoverageBenefitItem, CreditMemo, CreditMemoLine, DataStream, DataUseLegalBasis, DataUsePurpose, DelegatedAccount, DigitalSignature, DocumentChecklistItem, DuplicateRecordItem, DuplicateRecordSet, EmailMessage, EngagementChannelType, EnrollmentEligibilityCriteria, ExternalEventMapping, HealthCareDiagnosis, HealthCareProcedure, HealthcareFacility, HealthcareFacilityNetwork, HealthcarePayerNetwork, HealthcarePractitionerFacility, HealthcareProvider, HealthcareProviderNpi, HealthcareProviderSpecialty, HealthcareProviderTaxonomy, Identifier, IdentityDocument, Image, IndividualApplication, Invoice, InvoiceLine, Lead, Location, LocationTrustMeasure, MarketSegment, MarketSegmentActivation, MemberPlan, MessagingEndUser, MessagingSession, MktCalculatedInsight, Opportunity, Order, OrgMetricScanResult, OrgMetricScanSummary, OtherComponentTask, PartyConsent, PaymentAuthAdjustment, PersonEducation, PersonLanguage, PersonLifeEvent, PersonName, PlanBenefit, PlanBenefitItem, ProcessException, Product2, ProductFulfillmentLocation, ProductItem, ProductItemTransaction, ProductRequest, ProductRequestLineItem, ProductRequired, ProductTransfer, ProfileSkill, ProfileSkillEndorsement, ProfileSkillUser, PromptAction, PurchaserPlan, PurchaserPlanAssn, QuickTextUsage, ReceivedDocument, ResourceAbsence, ResourcePreference, ReturnOrder, ReturnOrderItemAdjustment, ReturnOrderItemTax, ReturnOrderLineItem, ServiceAppointment, ServiceResource, ServiceResourceSkill, ServiceTerritory, ServiceTerritoryMember, ServiceTerritoryWorkType, SharingRecordCollection, SharingRecordCollectionItem, SharingRecordCollectionMember, Shift, Shipment, ShipmentItem, SkillRequirement, SocialPost, Solution, StreamingChannel, UnitOfMeasure, UserProvisioningRequest, VideoCall, VideoCallParticipant, VideoCallRecording, Visit, VisitedParty, Visitor, VolunteerProject, WorkBadgeDefinition, WorkOrder, WorkOrderLineItem, WorkType, WorkTypeGroup, WorkTypeGroupMember |

## Usage

This object helps you replicate the related list functionality of the Salesforce user interface for approval processes. Use ProcessInstanceHistory for a unified read-only view of the ProcessInstanceStep and ProcessInstanceWorkItem objects. You can’t query ProcessInstanceHistory. Instead, you can query ProcessInstanceHistory by including it in a nested query on the parent ProcessInstance object. For example, this SOQL query returns all the ProcessInstanceHistory records related to individual ProcessInstance records. The nested query references StepsAndWorkitems, which is the child relationshipName for ProcessInstanceHistory in the ProcessInstance object.

```

```

This object respects field-level security on the parent object.

#### See Also

-   [ProcessInstance](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstance.htm "Represents an instance of a single, end-to-end approval process. Use this and the node, step, and workitem process instance objects to create approval history reports.")

-   [ProcessInstanceStep](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstancestep.htm "Represents one work item in an approval process (ProcessInstance).")

-   [ProcessInstanceWorkitem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstanceworkitem.htm "Represents a user’s pending approval request.")

## Code Examples

```
SELECT Id, (SELECT Id, StepStatus, Comments FROM StepsAndWorkitems) 
  FROM ProcessInstance
```

## Related Topics

- ProcessInstance (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstance.htm)
- ProcessInstanceStep (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstancestep.htm)
- ProcessInstanceWorkitem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstanceworkitem.htm)
