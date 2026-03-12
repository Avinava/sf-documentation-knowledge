---
title: "MedReconStmtRecommendation"
domain: health-cloud-object-reference
topic: medreconstmtrecommendation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.674Z
estimatedTokens: 1005
keywords: [MedReconStmtRecommendation, Associates, medication, recommendation, statement, reconciliation, API, version, 54.0, later, Calls, Associated, Objects]
---

# MedReconStmtRecommendation

> Associates a medication recommendation to a medication statement and
         medication reconciliation. This object is available in API version 54.0 and later.

# MedReconStmtRecommendation

Associates a medication recommendation to a medication statement and medication reconciliation. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| MedReconRecommendationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe medication recommendation associated with the medication reconciliation and medication statement.This is a relationship field.Relationship NameMedReconRecommendationRelationship TypeLookupRefers ToMedReconRecommendation |
| MedicationReconciliationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe medication reconciliation with which the medication recommendation is associated.This is a relationship field.Relationship NameMedicationReconciliationRelationship TypeLookupRefers ToMedicationReconciliation |
| MedicationStatementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe medication statement with which the medication recommendation is associated.This is a relationship field.Relationship NameMedicationStatementRelationship TypeLookupRefers ToMedicationStatement |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the medication recommendation. |
| SourceSysModifiedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record was last modified in its source system. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system from where the record was brought into Salesforce. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record in its source system. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MedReconStmtRecommendationChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[MedReconStmtRecommendationFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MedReconStmtRecommendationHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- MedReconStmtRecommendationChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- MedReconStmtRecommendationFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- MedReconStmtRecommendationHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
