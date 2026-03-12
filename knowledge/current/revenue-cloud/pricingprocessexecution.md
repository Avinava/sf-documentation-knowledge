---
title: "PricingProcessExecution"
domain: revenue-cloud
topic: pricingprocessexecution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.006Z
estimatedTokens: 1045
keywords: [PricingProcessExecution, record, generated, execution, discovery, pricing, procedure, Multiple, procedures, may, performed, API, call, recorded, version]
---

# PricingProcessExecution

> Represents a record generated during the execution of a discovery or pricing
         procedure. Multiple procedures may be performed within a single API call, with each
         recorded in a Pricing API Execution record. This object is available in API version
      63.0 and later.

# PricingProcessExecution

Represents a record generated during the execution of a discovery or pricing procedure. Multiple procedures may be performed within a single API call, with each recorded in a Pricing API Execution record. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only if the multicurrency feature is enabled. Contains the ISO code for any currency allowed by the organization.Possible values are:BHD—Bahraini DinarJPY—Japanese YenUSD—U.S. DollarThe default value is USD. |
| ExecutionKey | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe unique execution ID generated each time a pricing API runs. |
| ExecutionType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of execution defined internally within the pricing API.Possible values are:Api_Execution—Api ExecutionDiscoveryDiscovery_Line—Discovery LinePricingPricing_Line—Pricing LineThe default value is Pricing. |
| ExecutionTypeKey | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique execution type ID generated internally for procedure executions, such as pricing or discovery procedures. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Message | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe message generated upon running a pricing process. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe Salesforce ID of the sales representative who owns the pricing procedure resolution.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the execution type.Possible values are:FailurePartial_Success—Partial SuccessSuccessThe default value is Success. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PricingProcessExecutionFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PricingProcessExecutionHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PricingProcessExecutionShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PricingProcessExecutionFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- PricingProcessExecutionHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- PricingProcessExecutionShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
