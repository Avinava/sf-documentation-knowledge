---
title: "PricingAPIExecution"
domain: revenue-cloud
topic: pricingapiexecution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.985Z
estimatedTokens: 990
keywords: [PricingAPIExecution, pricing, resolution, element, determined, strategy, formula, API, version, 63.0, later, Calls, Associated, Objects]
---

# PricingAPIExecution

> Represents the pricing resolution for an pricing element determined using
         strategy name and formula. This object is available in API version 63.0 and later.

# PricingAPIExecution

Represents the pricing resolution for an pricing element determined using strategy name and formula. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApiEndpoint | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique API endpoint that is called. |
| ApiType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the API type of the pricing API execution.Possible values are:NGPThe default value is NGP. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only if the multicurrency feature is enabled. Contains the ISO code for any currency allowed by the organization.Possible values are:BHD—Bahraini DinarJPY—Japanese YenUSD—U.S. DollarThe default value is USD. |
| ExecutionKey | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique execution ID generated each time a pricing API runs. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe Salesforce ID of the sales representative who owns the pricing procedure resolution.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ReferenceKey | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOptional. The reference ID that a consuming workstream must pass in the API to search for specific logs in the Pricing Operations Console. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the API response.Possible values are:FailurePartial_Success—Partial SuccessSuccessThe default value is Success. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PricingAPIExecutionFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PricingAPIExecutionHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PricingAPIExecutionShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PricingAPIExecutionFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- PricingAPIExecutionHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- PricingAPIExecutionShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
