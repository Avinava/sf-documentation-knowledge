---
title: "WebCart"
domain: comms-developer-guide
topic: webcart
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.226Z
estimatedTokens: 579
keywords: [WebCart, row, item, online, shopping, cart, store, built, B2B, Commerce, B2C, total, amounts, products, shipping]
---

# WebCart

> Each row represents an item of an online shopping cart for a store built with
         B2B Commerce or B2C Commerce with total amounts for products, shipping and handling, and
         taxes. This object is available in API version 66.0 and later.

# WebCart

Each row represents an item of an online shopping cart for a store built with B2B Commerce or B2C Commerce with total amounts for products, shipping and handling, and taxes. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The WebCart object is available with CMERLMB2CAddOn license.

## Fields

| Field | Details |
| --- | --- |
| CalculationStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of web cart calculation status after running the Place Sales Transaction API.Possible values are:CartRequestFailed—Cart Request FailedCartRequestPartiallySaved—Cart Request Partially SavedCompletedWithPricing—Completed With PricingCompletedWithoutPricing—Completed Without PricingConfigurationFailed—Configuration FailedNotStarted—None in ProgressPriceCalculationFailed—Price Calculation FailedPriceCalculationInProgress—Price Calculation in ProgressPriceCalculationQueued—Price Calculation QueuedReconciliationFailed—Some Records Weren’t SavedSaveFailedOrIncomplete—Some Records Weren’t SavedSaving—Saving...The default value is NotStarted. |
| Pricebook2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the pricebook associated with the web cart.This field is a relationship field.Relationship NamePricebook2Refers ToPricebook2 |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of web cart.Possible values are:CartConsumerSales—Consumer SalesPayNowReadOnly—Pay Now Read OnlyReadOnly—Read OnlyTemplate |
| ValidationResult | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of web cart transaction staus.Possible values are:MissingContributor—Missing ContributorTransactionIncomplete—Transaction Incomplete |

#### See Also

-   [WebCart](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_webcart.htm "WebCart - HTML (New Window)")
