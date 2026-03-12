---
title: "PricingAdjBatchJobLog"
domain: revenue-cloud
topic: pricingadjbatchjoblog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.977Z
estimatedTokens: 957
keywords: [PricingAdjBatchJobLog, report, failed, adjustment, requests, along, error, message, reason, failure, API, version, 62.0, later, Calls]
---

# PricingAdjBatchJobLog

> Represents the report that contains a list of failed adjustment requests
         along with an error message that describes the reason for failure. This object is
      available in API version 62.0 and later.

# PricingAdjBatchJobLog

Represents the report that contains a list of failed adjustment requests along with an error message that describes the reason for failure. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustedValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe adjusted value of a record. The stored value is used even if another pricing adjustment batch job is triggered again. |
| EffectiveFrom | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the failed versioned record is generated. This is only applicable for Price Adjustment records. |
| EffectiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time until when the failed versioned record is available. This is applicable only for Price Adjustment records. |
| ErrorCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe error code for the failure during the record update process. |
| ErrorMessage | TypetextareaPropertiesCreate, UpdateDescriptionThe error message that’s generated for the failure during the record update process. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates whether the pricing adjustment batch job has been archived (true) or not (false). This field is read-only. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the pricing adjustment batch job. |
| PricingAdjBatchJobId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe pricing adjustment batch job associated with the pricing adjustment batch job log.This field is a relationship field.Relationship NamePricingAdjBatchJobRelationship TypeMaster-detailRefers ToPricingAdjBatchJob (the master object) |
| TargetRecord | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe ID of the record for which a pricing adjustment error was generated. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PricingAdjBatchJobLogFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PricingAdjBatchJobLogHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PricingAdjBatchJobLogFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- PricingAdjBatchJobLogHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
