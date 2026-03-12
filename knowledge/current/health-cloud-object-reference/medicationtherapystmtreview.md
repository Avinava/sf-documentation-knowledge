---
title: "MedicationTherapyStmtReview"
domain: health-cloud-object-reference
topic: medicationtherapystmtreview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.656Z
estimatedTokens: 829
keywords: [MedicationTherapyStmtReview, junction, Medication, Therapy, Review, Statement, objects, API, version, 56.0, later, Calls, Associated]
---

# MedicationTherapyStmtReview

> Represents a junction object between the Medication Therapy Review and
         Medication Statement objects. This object is available in API version 56.0 and later.

# MedicationTherapyStmtReview

Represents a junction object between the Medication Therapy Review and Medication Statement objects. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information about the medication therapy review related to the medication statement. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| MedicationStatementId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe medication statement associated with the medication therapy statement review.This field is a relationship field.Relationship NameMedicationStatementRelationship TypeLookupRefers ToMedicationStatement |
| MedicationTherapyReviewId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe medication therapy review associated with the medication therapy statement review.This field is a relationship field.Relationship NameMedicationTherapyReviewRelationship TypeMaster-DetailRefers ToMedicationTherapyReview |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the medication therapy statement review. |
| SourceSysModifiedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record was last modified in its source system. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system from where the record was brought into Salesforce. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record in its source system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the medication therapy statement review.Possible values are:CompletePending |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MedicationTherapyStmtReviewFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MedicationTherapyStmtReviewHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- MedicationTherapyStmtReviewFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- MedicationTherapyStmtReviewHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
