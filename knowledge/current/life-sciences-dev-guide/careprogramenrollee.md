---
title: "CareProgramEnrollee"
domain: life-sciences-dev-guide
topic: careprogramenrollee
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.855Z
estimatedTokens: 2265
keywords: [CareProgramEnrollee, participant, enrolled, care, program, Calls, Associated, Objects]
---

# CareProgramEnrollee

> Represents a participant enrolled in a care program.

# CareProgramEnrollee

Represents a participant enrolled in a care program.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AccountId | TypeLookup(Account)PropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPerson Account representing the enrollee |
| BenefitCoverageType | TypePicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the coverage status of the enrollee under both Medicare and Medicaid.Possible values are:ContinuedEnrolleeNewEnrollee |
| CareProgramId | TypeMaster-Detail(Care Program)PropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLook up for Care Program. |
| ClinicalServiceRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe clinical service request associated with the care program enrollee.This field is a relationship field and is available in API version 60.0 and later.Relationship NameClinicalServiceRequestRelationship TypeLookupRefers ToClinicalServiceRequest |
| CurrentWorkOrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work order that's currently being executed for the care program enrollee.This field is a relationship field and is available for the Advanced Therapy Management feature in API version 58.0 and later.Relationship NameCurrentWorkOrderRelationship TypeLookupRefers ToCarePgmEnrolleeWorkOrder |
| CurrentWorkOrderStepId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work order step that's currently being executed for the care program enrollee.This field is a relationship field and is available for the Advanced Therapy Management feature in API version 58.0 and later.Relationship NameCurrentWorkOrderStepRelationship TypeLookupRefers ToCarePgmEnrolleeWkOrdStep |
| EnrolledAtId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe site, location, or territory where the enrollee enrolled in the care program. This field is available in API version 64.0 when Site Management is enabled.This field is a polymorphic relationship field.Relationship NameEnrolledAtRefers ToCareProgramSite |
| EnrolleeType | TypePicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the enrollee is a new enrollee or a continued enrollee.Possible values are:FullBenefitDualPartialBenefitDualNonDualDual |
| EnrollmentLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service territory where an advanced therapy care program is executed.This field is a relationship field and is available for the Advanced Therapy Management feature in API version 59.0 and later.Relationship NameEnrollmentLocationRelationship TypeLookupRefers ToServiceTerritory |
| FlowInterviewId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRuntime instance of the associated flow.This field is a relationship field.Relationship NameFlowInterviewRefers ToFlowInterview |
| FlowOrchestrationInstanceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRuntime instance of the associated flow orchestration.This field is a relationship field.Relationship NameFlowOrchestrationInstanceRefers ToFlowOrchestrationInstance |
| IsPatientInLtrmCareFacility | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the patient was at a long-term healthcare facility during outreach or enrollment to the care program. This field is available for the Medication Management feature in API version 56.0 and later.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LeadId | TypeLookup(Lead)PropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLead representing the enrollee. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the enrollee. |
| OptOutPeriodEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the patient’s opt-out from the care program ends. This field is available in API version 56.0 and later. |
| OptOutPeriodStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date that the patient opted out of the care program. This field is available in API version 56.0 and later. |
| OptOutReasonType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason why the patient opted out of the care program. This field is available in API version 56.0 and later. |
| ResearchStudyCandidateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe related Research Study Candidate record of the care program enrollee.This field is a relationship field.Relationship NameResearchStudyCandidateRefers ToResearchStudyCandidate |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe UserId for the record owner. This field is a polymorphic relationship field.This field is available in API version 58.0 and later. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem from which the enrollee record was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the system from which the enrollee record was sourced. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the enrollee.Possible values are:ActiveInactive |
| UserId | TypeLookup(User)PropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser representing the enrollee. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareProgramEnrolleeChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 59.0)

Change events are available for the object.

[CareProgramEnrolleeFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareProgramEnrolleeHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CareProgramEnrolleeOwnerSharingRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 58.0)

Sharing rules are available for the object.

[CareProgramEnrolleeShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 58.0)

Sharing is available for the object.

## Related Topics

- CareProgramEnrolleeChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- CareProgramEnrolleeFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- CareProgramEnrolleeHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- CareProgramEnrolleeOwnerSharingRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- CareProgramEnrolleeShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
