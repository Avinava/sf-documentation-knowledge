---
title: "HealthRiskEvalOutcome"
domain: health-cloud-object-reference
topic: healthriskevaloutcome
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.644Z
estimatedTokens: 1236
keywords: [HealthRiskEvalOutcome, outcome, risk, evaluation, probability, disease, occurrence, API, version, 64.0, later, Calls, Associated, Objects]
---

# HealthRiskEvalOutcome

> Represents the outcome of a risk evaluation, such as the probability of
         disease occurrence. This object is available in API version 64.0 and
      later.

# HealthRiskEvalOutcome

Represents the outcome of a risk evaluation, such as the probability of disease occurrence. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalInformation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe additional information that explains the rationale for the risk prediction. |
| HealthRiskEvaluationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe health risk evaluation associated with the risk evaluation outcome.This field is a relationship field.Relationship NameHealthRiskEvaluationRelationship TypeMaster-detailRefers ToHealthRiskEvaluation (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MaximumRiskProbabilityValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum probability of the evaluation outcome. |
| MinimumRiskProbabilityValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum probability of the evaluation outcome. |
| RiskCodeSetValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code set or code set bundle that represents the value that determines the severity of the risk, such as high, medium, or low.This field is a polymorphic relationship field.Relationship NameRiskCodeSetValueRefers ToCodeSet, CodeSetBundle |
| RiskEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time after which the subject is no longer at risk of the outcome. |
| RiskNumericValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value that quantifies the severity of the health risk. |
| RiskOutcomeCodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe code set bundle that represents the possible outcome of a risk evaluation.This field is a polymorphic relationship field.Relationship NameRiskOutcomeCodeRefers ToCodeSet, CodeSetBundle |
| RiskRangeMaximumValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end of the range until which the subject is at risk of the evaluation outcome. |
| RiskRangeMinimumValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe starting point of the range at which the subject is at risk of the evaluation outcome. |
| RiskRangeUomId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the risk range.This field is a relationship field.Relationship NameRiskRangeUomRefers ToUnitOfMeasure |
| RiskStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time from when the subject is at risk of the outcome. |
| RiskValueType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the health risk evaluation outcome value.Possible values are:ProbableQualitativeRelativeThe default value is Probable. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[HealthRiskEvalOutcomeChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[HealthRiskEvalOutcomeHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- HealthRiskEvalOutcomeChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- HealthRiskEvalOutcomeHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
