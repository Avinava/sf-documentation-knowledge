---
title: "PricingAdjBatchJob"
domain: revenue-cloud
topic: pricingadjbatchjob
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.948Z
estimatedTokens: 1269
keywords: [PricingAdjBatchJob, Represents, collective, update, multiple, records, their, prices, adjustments., API, version, 62.0, later., Supported, Calls, Fields, Usage, Associated, Objects]
---

# PricingAdjBatchJob

> Represents the collective update of multiple records on their prices
         and other adjustments.  This object is available in API version 62.0 and
      later.

# PricingAdjBatchJob

Represents the collective update of multiple records on their prices and other adjustments. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EffectiveFrom | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the updated value can be considered for a pricing adjustment batch job. |
| EffectiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time until when the updated value is effective and can be considered for a pricing adjustment batch job. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates whether the pricing adjustment batch job has been archived (true) or not (false). This field is read-only. |
| LastTriggeredDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the pricing adjustment batch job was last triggered. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the pricing adjustment batch job. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe Salesforce ID of the sales representative who owns the pricing procedure resolution.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProcessedRecordsCount | TypelongPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of records that were successfully updated. |
| RecordCount | TypelongPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of records that have been processed. |
| RecordList | TypetextareaPropertiesCreateDescriptionThe list of record IDs eligible for a pricing adjustment batch job. |
| ShouldSkipBulkRetry | TypebooleanPropertiesCreate, Filter, Group, Nillable, SortDescriptionFor internal use only. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe processing status of the pricing adjustment batch job.Valid values are:CompletedFailedInProgressNewPartiallyCompletedRerun |
| TargetObject | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe target object of the pricing adjustment batch job.Valid values are:AttributeBasedAdjustmentBundleBasedAdjustmentPriceAdjustmentTierPricebookEntry |
| UpdateType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of update being made by the pricing adjustment batch job.Valid values are:AmountOverridePercentage |
| UpdateValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe numerical value of the update. |

## Usage

To execute a pricing adjustment batch job through an API request, make a POST request to the /services/data/v66.0/sobjects/PricingAdjBatchJob resource. Here's a sample request payload.

```

```

You can specify a comma-separated list of record IDs that are eligible for a pricing adjustment batch job.

To rerun a pricing adjustment batch job, make a PATCH request to the /services/data/v66.0/sobjects/PricingAdjBatchJob/pricingAdjBatchJobID resource. Here's a sample request payload.

```

```

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PricingAdjBatchJobFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PricingAdjBatchJobHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PricingAdjBatchJobShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
{
  "TargetObject": "PriceAdjustmentTier",
  "UpdateType": "Amount",
  "UpdateValue": "10",
  "RecordList": "84YDU00000010ig2AA,84YDU00000010ig2AB,84YDU00000010ig2AC",
  "EffectiveFrom": "2024-08-01T10:07:09.000+0000",
  "EffectiveTo": "2024-08-05T10:07:09.000+0000"
}
```

```
{
  "Status": "Rerun"
}
```

## Related Topics

- PricingAdjBatchJobFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- PricingAdjBatchJobHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- PricingAdjBatchJobShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
