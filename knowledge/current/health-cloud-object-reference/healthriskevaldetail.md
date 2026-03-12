---
title: "HealthRiskEvalDetail"
domain: health-cloud-object-reference
topic: healthriskevaldetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.635Z
estimatedTokens: 765
keywords: [HealthRiskEvalDetail, additional, health, risk, evaluation, including, basis, reason, API, version, 64.0, later, Calls, Associated, Objects]
---

# HealthRiskEvalDetail

> Represents additional details of a health risk evaluation, including the
         basis and reason for the evaluation. This object is available in API version 64.0 and
      later.

# HealthRiskEvalDetail

Represents additional details of a health risk evaluation, including the basis and reason for the evaluation. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DetailRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe reference record related to the health risk evaluation record.This field is a polymorphic relationship field.Relationship NameDetailRecordRefers ToCareObservation, DiagnosticSummary, HealthCondition |
| DetailType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the health risk evaluation detail.Possible values are:BasisReasonReference—ReasonThe default value is ReasonReference. |
| HealthRiskEvaluationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe health risk evaluation associated with the risk evaluation detail.This field is a relationship field.Relationship NameHealthRiskEvaluationRelationship TypeMaster-detailRefers ToHealthRiskEvaluation (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[HealthRiskEvalDetailChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[HealthRiskEvalDetailHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- HealthRiskEvalDetailChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- HealthRiskEvalDetailHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
