---
title: "CartItem"
domain: comms-developer-guide
topic: cartitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.191Z
estimatedTokens: 974
keywords: [CartItem, row, item, web, cart, that's, active, store, built, B2B, Commerce, B2C, API, version, 66.0]
---

# CartItem

> Each row represents an item in a web cart that's active in a store built with
         B2B Commerce or B2C Commerce This object is available in API version 66.0 and later.

# CartItem

Each row represents an item in a web cart that's active in a store built with B2B Commerce or B2C Commerce This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The CartItem object is available with CMERLMB2CAddOn license.

## Fields

| Field | Details |
| --- | --- |
| BillingFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the billing frequency for the subscription.Possible values are:AnnualMilestonePlan—Milestone PlanMonthlyQuarterlySemi-Annual |
| DiscountAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe monetary final discount that's provided to the customer on the cart items. |
| DiscountPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe discount percentage associated with the cart item. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the cart item. |
| PeriodBoundary | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe boundary delimiters for periods, determines when a period starts and ends.Possible values are:AlignToCalendar—Align to CalendarAnniversaryDayOfPeriod—Day of PeriodLastDayOfPeriod—Last Day of Period |
| PeriodBoundaryDay | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number specifying the day when PeriodBoundary is a specific day in a week, month, or a year. |
| PeriodBoundaryStartMonth | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe start month of a period when the Billing Frequency is greater than monthly, such as annual, semi-annual, or quarterly.Possible values are:1—January10—October11—November12—December2—February3—March4—April5—May6—June7—July8—August9—September |
| PriceWaterfallIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe price waterfall identifier of the pricing execution associated with the waterfall data. |
| PricebookEntryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the price book entry for the product.This field is a relationship field.Relationship NamePricebookEntryRefers ToPricebookEntry |
| PricingTermCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA calculated field that indicates the number of pricing terms in the subscription. |
| ProductSellingModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the method by which a product is sold.This field is a relationship field.Relationship NameProductSellingModelRefers ToProductSellingModel |
| ProrationPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the proration policy, which defines how prices are calculated for each time period within a subscription term.This field is a relationship field.Relationship NameProrationPolicyRefers ToProrationPolicy |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the cart item. |
| SubscriptionTerm | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of terms in the subscription. |
| ValidationResult | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of configuration warnings for a cart item.Possible values are:Warning |

#### See Also

-   [CartItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_cartitem.htm "CartItem - HTML (New Window)")
