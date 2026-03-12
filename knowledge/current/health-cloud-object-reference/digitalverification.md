---
title: "DigitalVerification"
domain: health-cloud-object-reference
topic: digitalverification
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:37.027Z
estimatedTokens: 1865
keywords: [DigitalVerification, Stores, verification, record, API, version, 60.0, later, Calls, Associated, Objects]
---

# DigitalVerification

> Stores information about the verification of a related record. This
      object is available in API version 60.0 and later.

# DigitalVerification

Stores information about the verification of a related record. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores additional comments about the verification. |
| DesignatedVerifierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user or user group who can provide verification for a parent reference record.This field is a polymorphic relationship field.Relationship NameDesignatedVerifierRelationship TypeLookupRefers ToGroup, User |
| DigitalVerificationSetupDetailId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe details associated with the digital verification setup record.This field is a relationship field.Relationship NameDigitalVerificationSetupDetailRelationship TypeLookupRefers ToDigitalVerfSetupDetail |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a record indirectly; for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the digital verification record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent reference record that is verified.This field is a polymorphic relationship field.Relationship NameParentReferenceRecordRelationship TypeLookupRefers ToClinicalTrial__c, CustodyChainEntry, DemoObject__c, HC24__AccountAccountRelation__c, HC24__CandidatePatient__c, HC24__CardView_Dropdown__c, HC24__CarePlanGoal__c, HC24__CarePlanProblem__c, HC24__CarePlanTemplateGoal__c, HC24__CarePlanTemplateProblem__c, HC24__CarePlanTemplateTask__c, HC24__CarePlanTemplate__c, HC24__CareProgramPlanTemplate__c, HC24__Clinical_Assessment_Response__c, HC24__CommunityProfileName__c, HC24__ConditionToHCCCodeMapping__c, HC24__ContactContactRelation__c, HC24__CrossObjectRelationship__c, HC24__CustomFieldSets__c, HC24__CustomLabelConfig__c, HC24__EHRProcedurePerformer__c, HC24__EHRProcedureRequest__c, HC24__EHRProcedure__c, HC24__EhrAllergyIntolerance__c, HC24__EhrCarePlanActivity__c, HC24__EhrCarePlanConcern__c, HC24__EhrCarePlanGoal__c, HC24__EhrCarePlanParticipant__c, HC24__EhrCarePlan__c, HC24__EhrConditionRelatedItem__c, HC24__EhrCondition__c, HC24__EhrDevice__c, HC24__EhrDosageInstruction__c, HC24__EhrEncounterAccomodation__c, HC24__EhrEncounterParticipant__c, HC24__EhrEncounter__c, HC24__EhrImmunizationReaction__c, HC24__EhrImmunization__c, HC24__EhrMedicationPrescription__c, HC24__EhrMedicationStatement__c, HC24__EhrObservation__c, HC24__EhrPatientCareProvider__c, HC24__EhrPatientContact__c, HC24__EhrPatient__c, HC24__EhrPractitionerIdentity__c, HC24__EhrPractitionerQualification__c, HC24__EhrPractitionerRole__c, HC24__EhrPractitioner__c, HC24__EhrRelatedObservation__c, HC24__EhrRelatedPerson__c, HC24__EhrVaccinationProtocol__c, HC24__EhrVirtualDeviceChannel__c, HC24__EhrVirtualDevice__c, HC24__FilterColumn__c, HC24__FilterCondition__c, HC24__FilterCriterion__c, HC24__HcFlexibleCarePlanTabs__c, HC24__HealthCloudFeatureToggle__c, HC24__HousingAssessment__c, HC24__IndustriesAppConfig__c, HC24__IndustriesSettings__c, HC24__PatientCardViewConfiguration__c, HC24__ProgramPatientAffiliation__c, HC24__ProgramPatientSummary__c, HC24__Program__c, HC24__Provider__c, HC24__ReciprocalRole__c, HC24__TaskGroups__c, HC24__TimelineViewConfiguration__c, HC24__UsePersonAccount__c, HC24__individualExcludedFields__c, custom_sk__c, vlocity_lwc20__CardFrameworkConfiguration__c, vlocity_lwc20__DRBatchQueue__c, vlocity_lwc20__DRBulkData__c, vlocity_lwc20__DREncryption__c, vlocity_lwc20__DRWorker__c, vlocity_lwc20__Interface_DRGeneric__c, vlocity_lwc20__TestResult__c, vlocity_lwc20__TriggerSetup__c, vlocity_lwc20__UISettings__c, vlocity_lwc20__VlocityDataPack__c, vlocity_lwc20__VlocityDocuSignTemplate__c, vlocity_lwc20__VlocityErrorLogEntry__c, vlocity_lwc20__VlocityScheduledJob__c, vlocity_lwc20__VlocityTrackingEntry__c |
| PostVerificationMessage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe message that is displayed after a verification is performed. |
| PreVerificationMessage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe message that is displayed before a verification is performed. |
| VerificationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the verification of the related record was done. |
| VerificationRequestDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the verification was requested. |
| VerificationSite | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe place where the verification is done. |
| VerificationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of verification for the parent reference record. |
| VerificationStatusCategory | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status category of the verification for the parent reference record.Possible values are:CompletedOnHoldReadyForSigningRejectedClosedRejectedOpen |
| VerifiedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who performed the verification.This field is a polymorphic relationship field.Relationship NameVerifiedByRelationship TypeLookupRefers ToUser |
| VerifierOrder | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe order of the verifier who performed the verification.Possible values are:FifthVerifierFirstVerifierFourthVerifierSecondVerifierThirdVerifier |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DigitalVerificationHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DigitalVerificationShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DigitalVerificationHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- DigitalVerificationShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
