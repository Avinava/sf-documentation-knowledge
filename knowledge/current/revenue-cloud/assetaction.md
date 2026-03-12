---
title: "AssetAction"
domain: revenue-cloud
topic: assetaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.742Z
estimatedTokens: 2277
keywords: [AssetAction, change, made, lifecycle-managed, asset, can’t, edited, API, version, 50.0, later, Calls, Special, Access, Rules]
---

# AssetAction

> Represents a change made to a lifecycle-managed asset. The fields can’t be
         edited. This object is available in API version 50.0 and later.

# AssetAction

Represents a change made to a lifecycle-managed asset. The fields can’t be edited. This object is available in API version 50.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Special Access Rules

To use Customer Asset Lifecycle Management APIs, you must have the Access Customer Asset Lifecycle Management APIs permission and Read access to the Asset, Asset Action, Asset Action Source, and Asset State Period objects.

## Fields

| Field | Details |
| --- | --- |
| ActionDate | TypedateTimePropertiesFilter, SortDescriptionThe date when an asset action change is recorded. This date can differ from the start date of the related asset state period. For example, suppose that a customer cancels a subscription in June, and the subscription expires in October. The date the customer cancels the subscription (June) is the action date of the asset action. The cancellation's effective date (October) is the start date of the asset state period. |
| ActualTaxChange | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe rollup of actual tax from all asset action sources. This field is populated by the system. Label is Change in Actual Tax.This field is a calculated field. |
| AdjustmentAmountChange | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe rollup of adjustment amount from all asset action sources. This field is populated by the system. Label is Change in Adjustment Amount.This field is a calculated field. |
| Amount | TypecurrencyPropertiesFilter, SortDescriptionThe delta in the total asset amount resulting from an asset action. |
| AssetActionNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the asset action. Label is Name. |
| AssetId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related lifecycle-managed asset. Label is Asset.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| CanRollBack | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the last asset action can be rolled back (true). If this property is set to false, the asset and the last asset action can’t be rolled back.The default value is false. This field is available in API version 65.0 and later. |
| CategoryEnum | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe business category of the asset action, for use in reporting. Asset action totals are broken out by the picklist values on this required field, and those totals are in turn reflected on assets. These categories are available and aren’t customizable. Label is Business Category.Possible values are:CancellationsCross-SellsDowngrades Indicates a transition to a lower-level version or tier of an asset.Downsells Indicates a negative quantity amendment or a decreased Line Item total price with no change in quantity.Initial Sale Indicates that the asset is initially purchased by an account.OtherRenewalsSwaps Indicates the exchange of one asset for another. Applies to both swapped-out and swapped-in actions.Terms And Conditions ChangesTransfers Indicates that an asset is transferred from one account to another.Upgrades Indicates a transition to a higher-level version or tier of an asset.Upsells Indicates a positive quantity amendment or an increased Line Item total price with no change in quantity. |
| EstimatedTaxChange | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe rollup of estimated tax from all asset action sources. This field is populated by the system. Label is Change in Estimated Tax.This field is a calculated field. |
| MrrChange | TypecurrencyPropertiesFilter, SortDescriptionThe delta in the asset’s monthly recurring revenue resulting from an asset action. For example, suppose that the MRR during an asset state period is $200 and the next asset action adds $100. Then this field’s value is $100. Label is Change in Monthly Recurring Revenue. |
| ProductAmountChange | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe rollup of product amount from all asset action sources. This field is populated by the system. Label is Change in Product Amount.This field is a calculated field. |
| QuantityChange | TypedoublePropertiesFilter, SortDescriptionThe delta in the asset quantity resulting from an asset action. For example, suppose that the asset quantity during an asset state period is 20 and the next asset action adds 10. Then this field’s value is 10. Label is Change in Quantity. |
| RolledbackAssetAction | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last asset action rolled back in the current rollback transaction. This field is available in API version 65.0 and later. |
| SubtotalChange | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe rollup of subtotal from all asset action sources. This field is populated by the system. Label is Change in Subtotal.This field is a calculated field. |
| Subtype | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe subtype of the action on the asset.Valid values are:DowngradeFrom—Available in API version 66.0 and later.DowngradeTo—Available in API version 66.0 and later.FieldAmendmentRollbackStartDateAdjustmentSwapIn—Available in API version 66.0 and later.SwapOut—Available in API version 66.0 and later.TransferFromTransferToUpgradeFrom—Available in API version 66.0 and later.UpgradeTo—Available in API version 66.0 and later.This field is available in API version 65.0 and later. |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the current and previous asset action amount. This field is populated by the system.This field is a calculated field. |
| TotalCancellationsAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of current and previous asset action amounts categorized as Cancellations. This field is populated by the system. |
| TotalCrossSellsAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of current and previous asset action amounts categorized as Cross-Sells. This field is populated by the system. |
| TotalDowngradesAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of current and previous asset action amounts categorized as Downgrades. This field is populated by the system and is available in API version 66.0 and later. |
| TotalDownsellsAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of current and previous asset action amounts categorized as Downsells. This field is populated by the system. |
| TotalInitialSaleAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of current and previous asset action amounts categorized as Initial Sale. This field is populated by the system. |
| TotalMrr | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the monthly recurring revenue for the current and previous asset action. This field is populated by the system. Label is Total Monthly Recurring Revenue. |
| TotalOtherAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of current and previous asset action amounts categorized as Other. This field is populated by the system. |
| TotalQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of the changes in quantity for the current and previous asset action. This field is populated by the system. |
| TotalRenewalsAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of current and previous asset action amounts categorized as Renewals. This field is populated by the system. |
| TotalSwapsAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of current and previous asset action amounts categorized as Swaps. This field is populated by the system and is available in API version 66.0 and later. |
| TotalTermsAndConditionsAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of current and previous asset action amounts categorized as Terms and Conditions Changes. This field is populated by the system. Label is Total Terms and Conditions Changes Amount. |
| TotalTransfersAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of current and previous asset action amounts categorized as Transfers. This field is populated by the system. |
| TotalUpgradesAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of current and previous asset action amounts categorized as Upgrades. This field is populated by the system and is available in API version 66.0 and later. |
| TotalUpsellsAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of current and previous asset action amounts categorized as Upsells. This field is populated by the system. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe REST API used to generate the asset action. This field is populated by the system.Valid values are:CancelChangeConvertGenerate |
