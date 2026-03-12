---
title: "ProductSellingModel"
domain: object-reference
topic: productsellingmodel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:15.453Z
estimatedTokens: 743
keywords: [ProductSellingModel, product, sold, one-time, sale, evergreen, subscription, term-defined, subscription’s, term, multiple, selling, models, API, version]
---

# ProductSellingModel

> Defines one method by which a product can be sold; for example, as a
         one-time sale, an evergreen subscription, or a term-defined subscription. If the product is
         sold on subscription, this object defines the subscription’s term. A product can have
         multiple product selling models. This object is available in API version 55.0 and
      later.

# ProductSellingModel

Defines one method by which a product can be sold; for example, as a one-time sale, an evergreen subscription, or a term-defined subscription. If the product is sold on subscription, this object defines the subscription’s term. A product can have multiple product selling models. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available with Revenue Cloud and Subscription Management. This object is available for Commerce when the Subscriptions (Beta) permission is enabled.

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name given to the product selling model. |
| PricingTerm | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the duration of the pricing term for a given selling model. Used with PricingTermUnit. For example, if this field’s value is 1 and the PricingTermUnit is Months, the subscription is priced monthly.If the selling model is one-time, this field must be null.Possible value is:1 |
| PricingTermUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of time used to define the pricing term. Used with PricingTerm to define the length of the pricing term. For example, if this field is Months and PricingTerm is 1, the subscription is priced monthly. If the selling model is one-time, this field must be null.Possible values are:Annual—UI label is YearsMonths |
| SellingModelType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates whether the product is sold as a one-time sale, an evergreen subscription, or a subscription with a defined term.Possible values are:Evergreen—A subscription without an end date. An evergreen subscription continues until the customer affirmatively cancels it.OneTime—A product that isn’t sold as a subscription.TermDefined—A subscription with a defined end date. The subscription continues for a specified time period. When the term ends, the subscription ends.The default value is OneTime. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the product selling model.Possible values are:Active—An active product selling model can’t be deleted, and only the Name and Status fields can be modified. An active product selling model can’t be changed back to draft.Draft—A draft product selling model can be modified and deleted.Inactive—An inactive product selling model can’t be deleted, and only the Name and Status fields can be modified. An inactive product selling model can’t be changed back to draft.The default value is Draft. |
