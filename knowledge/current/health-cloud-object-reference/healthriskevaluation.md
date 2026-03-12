---
title: "HealthRiskEvaluation"
domain: health-cloud-object-reference
topic: healthriskevaluation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:34.655Z
estimatedTokens: 1471
keywords: [HealthRiskEvaluation, evaluation, health, risks, API, version, 64.0, later, Calls, Associated, Objects]
---

# HealthRiskEvaluation

> Represents the evaluation of health risks. This object is available in
      API version 64.0 and later.

# HealthRiskEvaluation

Represents the evaluation of health risks. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClinicalEncounterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe clinical encounter associated with the health risk evaluation.This field is a relationship field.Relationship NameClinicalEncounterRefers ToClinicalEncounter |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the evaluation ended. |
| EvaluatorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account, healthcare provider, facility, or registered device associated with the health risk evaluation.This field is a polymorphic relationship field.Relationship NameEvaluatorRefers ToAccount, CareRegisteredDevice, Contact, HealthcarePractitionerFacility, HealthcareProvider |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MethodCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code set or code set bundle that represents the method used to evaluate the risk.This field is a polymorphic relationship field.Relationship NameMethodCodeRefers ToCodeSet, CodeSetBundle |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PrimaryHealthConditionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe health condition that was assessed during the health risk evaluation.This field is a relationship field.Relationship NamePrimaryHealthConditionRefers ToHealthCondition |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe assessment or the disease investigation associated with the health risk evaluation.This field is a polymorphic relationship field.Relationship NameReferenceRecordRefers ToAssessment, DiseaseInvestigation |
| RiskMitigationInfo | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe evaluator's advice to reduce or manage the identified risks. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the evaluation started. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the health risk evaluation.Possible values are:amended—AmendedappendedcancelledcannotBeObtainedcorrectedenteredInErrorfinalpreliminaryregisteredspecimenInProcessunknownThe default value is registered. |
| SubjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account associated with the health risk evaluation.This field is a polymorphic relationship field.Relationship NameSubjectRefers ToAccount |
| TypeCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code set or code set bundle that represents the type of health risk evaluation.This field is a polymorphic relationship field.Relationship NameTypeCodeRefers ToCodeSet, CodeSetBundle |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[HealthRiskEvaluationChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[HealthRiskEvaluationFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[HealthRiskEvaluationHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[HealthRiskEvaluationShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- HealthRiskEvaluationChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- HealthRiskEvaluationFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- HealthRiskEvaluationHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- HealthRiskEvaluationShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
