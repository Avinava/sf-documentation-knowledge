---
title: "ProcessInstance"
domain: object-reference
topic: processinstance
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:15.196Z
estimatedTokens: 2324
keywords: [ProcessInstance, instance, end-to-end, approval, process, node, step, workitem, objects, history, reports, Calls, Usage, Associated]
---

# ProcessInstance

> Represents an instance of a single, end-to-end 
 	approval process. Use this and the node, step, and workitem process instance objects 
 	to create approval history reports.

# ProcessInstance

Represents an instance of a single, end-to-end approval process. Use this and the node, step, and workitem process instance objects to create approval history reports.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Exceptions apply to approval history data retrieved with this object and are available only via SOAP API. For each approval process instance that was pending when Summer '14 became available for your organization, some field values are never populated or are populated only after the rollout. Other fields are populated only after the approval process instance is next acted upon—such as when a user approves, rejects, or reassigns an approval request—after the Summer '14 rollout.

For approval process instances that were completed before the Summer '14 rollout, all Process Instance fields are automatically populated, with one exception: CompletedDate is never populated for approval process instances that were completed before January 1, 2013. For approval process instances that were pending during the Summer '14 rollout, all ProcessInstance fields are automatically populated, with two exceptions: CompletedDate and LastActorId are populated only after the approval process instance is complete.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| CompletedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe completion date and time of the approval process. The ElapsedTimeDay, ElapsedTimeHours, and ElapsedTimeMinutes field values are calculated using CompletedDate. |
| ElapsedTimeInDays | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total elapsed time in days between when the approval process instance was started and now. |
| ElapsedTimeInHours | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total elapsed time in hours between when the approval process instance was started and now. |
| ElapsedTimeInMinutes | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total elapsed time in minutes between when the approval process instance was started and now. |
| LastActorId | TypereferencePropertiesGroup, Filter, Nillable, SortDescriptionThe last actor that approved, rejected, or recalled the process.This is a relationship field.Relationship NameLastActorRelationship TypeLookupRefers ToUser |
| ProcessDefinitionId | TypereferencePropertiesGroup, Filter, SortDescriptionThe ID of this approval process instance.This is a relationship field.Relationship NameProcessDefinitionRelationship TypeLookupRefers ToProcessDefinition |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of this approval process instance.Possible values are:ApprovedFaultHeldNoResponsePendingReassignedRejectedRemovedStarted |
| SubmittedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who submitted the approval process.This is a relationship field.Relationship NameSubmittedByRelationship TypeLookupRefers ToUser |
| TargetObjectId | TypereferencePropertiesFilter, Group, SortDescriptionID of the object affected by this approval process instance.This is a polymorphic relationship field.Relationship NameTargetObjectRelationship TypeLookupRefers ToAccount, Accreditation, ActivationTarget, Address, AlternativePaymentMethod, AssessmentIndicatorDefinition, AssessmentTask, AssessmentTaskContentDocument, AssessmentTaskDefinition, AssessmentTaskIndDefinition, AssessmentTaskOrder, Asset, AssetRelationship, AssignedResource, AuthorizationForm, AuthorizationFormConsent, AuthorizationFormDataUse, AuthorizationFormText, Award, BoardCertification, BusinessLicense, BusinessMilestone, BusinessProfile, Campaign, CareBarrier, CareBarrierDeterminant, CareBarrierType, CareDeterminant, CareDeterminantType, CareDiagnosis, CareInterventionType, CareMetricTarget, CareObservation, CareObservationComponent, CarePgmProvHealthcareProvider, CarePreauth, CarePreauthItem, CareProgram, CareProgramCampaign, CareProgramEligibilityRule, CareProgramEnrollee, CareProgramEnrolleeProduct, CareProgramEnrollmentCard, CareProgramGoal, CareProgramProduct, CareProgramProvider, CareProgramTeamMember, CareProviderAdverseAction, CareProviderFacilitySpecialty, CareRegisteredDevice, CareRequest, CareRequestDrug, CareRequestExtension, CareRequestItem, CareSpecialty, CareSpecialtyTaxonomy, CareTaxonomy, Case, CodeSet, CodeSetBundle, CommSubscription, CommSubscriptionChannelType, CommSubscriptionConsent, CommSubscriptionTiming, ConsumptionRate, ConsumptionSchedule, Contact, ContactEncounter, ContactEncounterParticipant, ContactPointAddress, ContactPointConsent, ContactPointEmail, ContactPointPhone, ContactPointTypeConsent, Contract, CoverageBenefit, CoverageBenefitItem, CreditMemo, CreditMemoLine, DataStream, DataUseLegalBasis, DataUsePurpose, DelegatedAccount, DigitalSignature, DocumentChecklistItem, DuplicateRecordItem, DuplicateRecordSet, EmailMessage, EngagementChannelType, EnrollmentEligibilityCriteria, ExternalEventMapping, HealthCareDiagnosis, HealthCareProcedure, HealthcareFacility, HealthcareFacilityNetwork, HealthcarePayerNetwork, HealthcarePractitionerFacility, HealthcareProvider, HealthcareProviderNpi, HealthcareProviderSpecialty, HealthcareProviderTaxonomy, Identifier, IdentityDocument, Image, IndividualApplication, Invoice, InvoiceLine, Lead, Location, LocationTrustMeasure, MarketSegment, MarketSegmentActivation, MemberPlan, MessagingEndUser, MessagingSession, MktCalculatedInsight, Opportunity, Order, OrgMetricScanResult, OrgMetricScanSummary, OtherComponentTask, PartyConsent, PaymentAuthAdjustment, PersonEducation, PersonLanguage, PersonLifeEvent, PersonName, PlanBenefit, PlanBenefitItem, ProcessException, Product2, ProductFulfillmentLocation, ProductItem, ProductItemTransaction, ProductRequest, ProductRequestLineItem, ProductRequired, ProductTransfer, ProfileSkill, ProfileSkillEndorsement, ProfileSkillUser, PromptAction, PurchaserPlan, PurchaserPlanAssn, QuickTextUsage, Quote, ReceivedDocument, ResourceAbsence, ResourcePreference, ReturnOrder, ReturnOrderItemAdjustment, ReturnOrderItemTax, ReturnOrderLineItem, ServiceAppointment, ServiceResource, ServiceResourceSkill, ServiceTerritory, ServiceTerritoryMember, ServiceTerritoryWorkType, SharingRecordCollection, SharingRecordCollectionItem, SharingRecordCollectionMember, Shift, Shipment, ShipmentItem, SkillRequirement, SocialPost, Solution, StreamingChannel, UnitOfMeasure, UserProvisioningRequest, VideoCall, VideoCallParticipant, VideoCallRecording, Visit, VisitedParty, Visitor, VolunteerProject, WorkBadgeDefinition, WorkOrder, WorkOrderLineItem, WorkType, WorkTypeGroup, WorkTypeGroupMember |

## Usage

Use this object to query or retrieve an approval process.

The following SOQL query returns details for all the ProcessInstanceStep records related to individual ProcessInstance records. The nested query references Steps, which is the child relationshipName for ProcessInstanceStep in the ProcessInstance object.

```

```

The following SOQL query returns details for all the ProcessInstanceWorkItem records related to individual ProcessInstance records. The nested query references Workitems, which is the child relationshipName for ProcessInstanceWorkItem in the ProcessInstance object.

```

```

ProcessInstanceHistory can help provide a unified read-only view of the ProcessInstanceStep and ProcessInstanceWorkItem objects.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ProcessInstanceHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstancehistory.htm "This read-only object shows all steps and pending approval requests associated with an approval process (ProcessInstance).")

History is available for tracked fields of the object.

[ProcessInstanceChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 58.0)

Change events are available for the object.

#### See Also

-   [ProcessInstanceHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstancehistory.htm "This read-only object shows all steps and pending approval requests associated with an approval process (ProcessInstance).")

-   [ProcessInstanceStep](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstancestep.htm "Represents one work item in an approval process (ProcessInstance).")

-   [ProcessInstanceWorkitem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstanceworkitem.htm "Represents a user’s pending approval request.")

## Code Examples

```
SELECT Id, (SELECT Id, StepStatus, Comments FROM Steps)
FROM ProcessInstance
```

```
SELECT Id, (SELECT Id, ActorId, ProcessInstanceId FROM Workitems)
FROM ProcessInstance
```

## Related Topics

- ProcessInstanceHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstancehistory.htm)
- ProcessInstanceChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ProcessInstanceStep (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstancestep.htm)
- ProcessInstanceWorkitem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processinstanceworkitem.htm)
