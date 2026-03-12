---
title: "ProductSellingModel"
domain: revenue-cloud
topic: productsellingmodel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:12.225Z
estimatedTokens: 843
keywords: [ProductSellingModel, product, sold, one-time, sale, evergreen, subscription, termed, subscription’s, term, multiple, selling, models, API, version]
---

# ProductSellingModel

> Defines one method by which a product can be sold; for example, as a one-time
         sale, an evergreen subscription, or a termed subscription. If the product is sold on
         subscription, this object defines the subscription’s term. A product can have multiple
         product selling models.  This object is available in API version 60.0 and later.

# ProductSellingModel

Defines one method by which a product can be sold; for example, as a one-time sale, an evergreen subscription, or a termed subscription. If the product is sold on subscription, this object defines the subscription’s term. A product can have multiple product selling models.  This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates when the user last referred to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIndicates when the user last viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name given to the product selling model. |
| PricingTerm | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of pricing term units in the pricing term. Used with PricingTermUnit to define the length of the pricing term. For example, if PricingTermUnit is Months and this field is 1, the subscription is priced monthly.If the selling model is one-time, this field must be null. |
| PricingTermUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of time used to define the pricing term. Used with PricingTerm to define the length of the pricing term. For example, if this field is Months and PricingTerm is 1, the subscription is priced monthly. If the selling model is one-time, this field must be null.Possible values are:MonthsQuarterlySemi-AnnualAnnual |
| SellingModelType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates whether the product is sold as a one-time sale, an evergreen subscription, or a subscription with a defined term.Possible values are:EvergreenOneTimeTermDefinedThe default value is OneTime. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the product selling model.Possible values are:ActiveDraftInactiveThe default value is Draft. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductSellingModelFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProductSellingModelHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProductSellingModelFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- ProductSellingModelHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
