---
title: "StgTrnsUndwrEvaluation"
domain: financial-services-cloud-object-reference
topic: stgtrnsundwrevaluation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.654Z
estimatedTokens: 970
keywords: [StgTrnsUndwrEvaluation, underwriting, rule, evaluation, result, API, version, 63.0, later, Calls, Associated, Objects]
---

# StgTrnsUndwrEvaluation

> Represents the underwriting rule evaluation result. This object is
      available in API version 63.0 and later.

# StgTrnsUndwrEvaluation

Represents the underwriting rule evaluation result. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EvaluationDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time at which rules were applied to the target object. |
| EvaluationResult | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe result of evaluation done on all rules for a transaction. |
| IsRuleEvaluationSuccessful | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the stage transition was successful (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the underwriting rule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe object for which the underwriting rule was evaluated.This field is a polymorphic relationship field.Relationship NameReferenceObjectRefers ToInsurancePolicy, Quote |
| ReferenceObjectName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the object for which the underwriting rule was evaluated. |
| ReferenceObjectStatus | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe status of the reference object after the underwriting rule evaluation is completed. |
| StageTransition | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe stage transition ID for which the underwriting rule was evaluated. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[StgTrnsUndwrEvaluationHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[StgTrnsUndwrEvaluationOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[StgTrnsUndwrEvaluationShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- StgTrnsUndwrEvaluationHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- StgTrnsUndwrEvaluationOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- StgTrnsUndwrEvaluationShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
