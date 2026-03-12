---
title: "CommissionScheduleAssignment"
domain: object-reference
topic: commissionscheduleassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.679Z
estimatedTokens: 1408
keywords: [CommissionScheduleAssignment, commission, calculation, applicable, specific, product, producer, multiple, commissionable, events, Calls, Associated, Objects]
---

# CommissionScheduleAssignment

> Represents the commission calculation applicable to a specific product or
         producer for one or multiple commissionable events.

# CommissionScheduleAssignment

Represents the commission calculation applicable to a specific product or producer for one or multiple commissionable events.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CommissionableEventType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionThe event that results in the commission calculation.Possible values are:ContractingEndorsementIssue PolicyPolicy Issuance |
| CommissionScheduleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the associated Commission Schedule, which is the commission calculation tied to the product or producer.This is a relationship field.Relationship NameCommissionScheduleRelationship TypeLookupRefers ToCommissionSchedule |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last date when the Commission Schedule is in effect for the product or producer. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe first date when the Commission Schedule is in effect for the product or producer. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MaxCommissionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum commission calculated for the product or producer for a commissionable event. Constrains the output from the Commission Schedule. |
| MaxCommissionRate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum commission rate that a producer receives for a commissionable event. |
| MinCommissionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum commission calculated for the product or producer for a commissionable event. Constrains the output from the Commission Schedule. |
| MinCommissionRate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum commission rate that a producer receives for a commissionable event. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the Commission Schedule Assignment. |
| ProducerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe producer, broker, brokerage, or other user who receives the commission.This is a relationship field.Relationship NameProducerRelationship TypeLookupRefers ToProducer |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product for which commissions are calculated.This is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CommissionScheduleAssignmentChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[CommissionScheduleAssignmentFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CommissionScheduleAssignmentHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CommissionScheduleAssignmentOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CommissionScheduleAssignmentShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CommissionScheduleAssignmentChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- CommissionScheduleAssignmentFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- CommissionScheduleAssignmentHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- CommissionScheduleAssignmentOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CommissionScheduleAssignmentShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
