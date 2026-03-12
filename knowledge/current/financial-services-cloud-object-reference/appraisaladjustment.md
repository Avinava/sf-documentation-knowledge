---
title: "AppraisalAdjustment"
domain: financial-services-cloud-object-reference
topic: appraisaladjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.505Z
estimatedTokens: 673
keywords: [AppraisalAdjustment, adjustment, appraisal, item, API, version, 63.0, later, Calls, Associated, Objects]
---

# AppraisalAdjustment

> Represents an adjustment for the appraisal or an appraisal item. This object is
      available in API version 63.0 and later.

# AppraisalAdjustment

Represents an adjustment for the appraisal or an appraisal item. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact or the user that performs the adjustment.This field is a polymorphic relationship field.Relationship NameAdjustedByRefers ToContact, User |
| AdjustmentValue | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe positive or negative value of the appraisal adjustment. |
| AppraisalId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe appraisal record for which an adjustment is made.This field is a relationship field.Relationship NameAppraisalRelationship TypeMaster-detailRefers ToAppraisal (the master object) |
| AppraisalItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe appraisal item record for which an adjustment is madeThis field is a relationship field.Relationship NameAppraisalItemRefers ToAppraisalItem |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the appraisal adjustment. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp indicating the last time the current user viewed a related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp indicating when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the appraisal adjustment. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the adjustment.Default values are:ApprovedInReview—Under ReviewRejected |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the appraisal adjustment.Possible values are:NegativePositive |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AppraisalAdjustmentChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.
