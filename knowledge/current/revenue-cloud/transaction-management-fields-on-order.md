---
title: "Transaction Management Fields on Order"
domain: revenue-cloud
topic: transaction-management-fields-on-order
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.520Z
estimatedTokens: 1781
keywords: [Transaction, Management, Order, Standard, custom, extend, Special, Access, Rules]
---

# Transaction Management Fields on Order

> Standard and custom fields extend the standard Order object for use
         in Transaction Management.

# Transaction Management Fields on Order

Standard and custom fields extend the standard Order object for use in Transaction Management.

## Special Access Rules

To view these fields, you must have the Revenue Cloud Advanced license. See [Order](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_order.htm) for fields on the Salesforce platform object.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentDistributionLogic | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies how the overall discount amount distributes among all the order line items that have prices associated with them.The amount distributed is either the value specified in the AppliedDiscountAmount field or the difference between the values in the calculated TotalAmount and the user-specified TotalAmountOverride fields.Valid values are:Equal—Distributes the discount amount equally among all the order items.Proportionate—Distributes the discount amount in proportion to the ListPriceTotal values of the order items.Available in API version 65.0 and later. |
| AppliedDiscount | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe discount amount that’s distributed among all the order items that have prices associated with them. This amount is distributed based on the logic specified in the AdjustmentDistributionLogic field. Available in API version 65.0 and later. |
| AppliedDiscountAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percent discount applied to each order item. Available in API version 65.0 and later. |
| CalculationStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the price and tax calculations for the order.Valid values are:CompletedWithPricing—Indicates that pricing is complete and tax will now be calculated.CompletedWithTax—Indicates that pricing and tax calculation are complete.CompletedWithoutPricing—Indicates that pricing and tax calculation were skipped. For a sales rep, this value appears as Unknown on the order page.ConfigurationFailed—Indicates that configuration failed. Available in API version 62.0ConfigurationInProgress—Indicates that the configuration is in progress. Available in API version 62.0GroupRampConfigurationFailed—Indicates that the checks for group ramps have failed. Available in API version 65.0 and later.OrderRequestFailed—Indicates that the requested order changes weren’t saved. Available in API version 62.0OrderRequestPartiallySaved—Indicates that the requested order changes were partially saved. Available in API version 62.0PriceCalculationFailed—Indicates that pricing failed.ReconciliationFailed—Indicates that the arrangement of order data failed. Available in API version 62.0ReconciliationInProgress—Indicates that the arrangement of data is in progress. For a sales rep, this value appears as Saving on the order page. Available in API version 62.0SaveFailedOrIncomplete—Indicates that the recent changes to the order weren’t saved. For a sales rep, this value appears as Some Records Weren’t Saved on the order page.TaxCalculationFailed—Indicates that pricing is complete but tax calculation failed.TaxCalculationWaiting—Indicates that pricing is complete and a request sent to the tax engine, but tax calculation isn’t complete.This read-only field is available in API version 61.0 and later. |
| DiscountPercent | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of discount applied to the order. The discount percent calculation is ((TotalRoundedLineAmount - TotalAmount) / TotalRoundedLineAmount) * 100. Available in API version 60.0 and later. |
| FulfillmentPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique ID of the fulfillment plan associated with the order.This field is a relationship field.This field is available only in orgs where Dynamic Revenue Orchestrator is enabled. Available in API version 60.0 and later.Relationship NameFulfillmentPlanRelationship TypeLookupRefers ToFulfillmentPlan |
| LastPricedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the order price was last calculated. Available in API version 60.0 and later. |
| OrchestrationSbmsStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of order submission for orchestration.This field is available only in orgs where Dynamic Revenue Orchestrator is enabled.Valid values are:CompletedRejectedSubmittedThis read-only field is available in API version 61.0 and later. |
| OriginalActionType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the action that created the order.Valid values are:Amend—Indicates that the order was created to amend assets.Cancel—Indicates that the order was created to cancel assets.Renew—Indicates that the order was created to renew assets.Transfer—Indicates that the order was created to transfer assets.Available in API version 61.0 and later. |
| SalesTransactionTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe foreign key to the Sales Transaction Type object. Available in API version 61.0 and later.This field is a relationship field.Relationship NameSalesTransactionTypeRelationship TypeLookupRefers ToSalesTransactionType |
| TotalAmountOverride | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value that the TotalAmount field must be set to by applying overall discounts.Transaction Management calculates the overall discount amount by finding the difference between the value in the calculated TotalAmount field and the value in this field. It then uses the logic specified in the AdjustmentDistributionLogic field to distribute the discount amount among all the order items that have prices associated with them.Available in API version 65.0 and later. |
| TotalRoundedLineAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of all line items in an order without pricing adjustments, such as discounts or tax calculations. Available in API version 60.0 and later. |
| TransactionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of order being processed.The valid value is:AdvancedConfigurator—Indicates that the order must be processed by using the configuration rules and constraints set up in Constraint Rules Engine.Available in API version 61.0 and later. |
| ValidationResult | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the order was configured and priced.Orders can be activated only after they’re configured and priced.Valid values are:MissingContributor—Indicates that the order contains a derived product but not its pricing source.TransactionIncomplete—Indicates that the order wasn’t configured and priced.Available in API version 61.0 and later. |
