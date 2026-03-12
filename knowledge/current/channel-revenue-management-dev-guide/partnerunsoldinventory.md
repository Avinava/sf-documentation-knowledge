---
title: "PartnerUnsoldInventory"
domain: channel-revenue-management-dev-guide
topic: partnerunsoldinventory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.453Z
estimatedTokens: 2029
keywords: [PartnerUnsoldInventory, Tracks, product, quantities, partner, specific, price, API, version, 64.0, later, Calls, Associated, Objects]
---

# PartnerUnsoldInventory

> Tracks the product quantities available with a partner at a specific
         price. This object is available in API version 64.0 and later.

# PartnerUnsoldInventory

Tracks the product quantities available with a partner at a specific price. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the partner or the distributor account for which the sale has happened.Relationship NameAccountRefers ToAccount |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the currency ISO code for the currency fields.Possible values are:INR—Indian RupeeKWD—Kuwaiti DinarUSD—U.S. DollarThe default value is USD. |
| ExecutionReferenceNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique execution reference number for the unsold inventory. |
| InTransitQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe inventory quantity that's currently in transit.This field is a calculated field. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location of partner to which this sale is received.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the partner unsold inventory record. |
| OnHoldCreditQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe inventory quantity that's on hold for being credited. This quantity is a sum of the quantity of all related partner unsold inventory ledgers with the Credit transaction type and the On Hold status.This field is a calculated field. |
| OnHoldQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe quantity of inventory kept on hold for a product that has been ordered but not yet shipped.This field is a calculated field. |
| OrigUnsoldInventoryValue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total value of the original quantity of unsold units that's calculated by multiplying the original number of unsold units with the unit price.This field is a calculated field. |
| OriginalQuantity | TypedoublePropertiesCreate, Filter, SortDescriptionRequired. The total value of the original quantity. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user or group that owns the partner unsold inventory record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PriceProtectionExpiryDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the price protection option expires for the inventory. |
| PriceProtectionStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the price protection option is valid for the inventory. |
| PriceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. The type of price at which the item is sold.Possible values are:ContractPriceListPrice |
| ProcessingStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe asynchronous processing status, which is used to determine the eligibility for price protection.Possible values are:ErrorProcessed |
| ProcessingStatusReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the status of the asynchronous process. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the product that is being sold.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| RebatePartnerSpecialPrcTrmId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rebate partner special pricing term that's used to determine the start and end date of the ship and debit program that's associated with the partner unsold inventory.This field is a relationship field.Relationship NameRebatePartnerSpecialPrcTrmRefers ToRebatePartnerSpecialPrcTrm |
| RebateTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the rebate type which is associated with the partner unsold inventory record.This field is a relationship field.Relationship NameRebateTypeRefers ToProgramRebateType |
| RemainingQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe remaining quantity, which is updated based on the debits point of sale.This field is a calculated field. |
| RmnUnsoldInventoryValue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total value of the leftover quantity of unsold units that's calculated by multiplying the number of leftover unsold units with the unit price.This field is a calculated field. |
| ShipAndDebitPgmEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the ship and debit program ends. |
| ShipAndDebitPgmStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the ship and debit program starts. |
| SourcePartnerUnsoldInvId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source partner unsold inventory record that's used to create a new partner unsold inventory record containing the updated product price.This field is a relationship field.Relationship NameSourcePartnerUnsoldInvRefers ToPartnerUnsoldInventory |
| TotalRebateClaimConsumedQty | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total quantity of the partner unsold inventory that's consumed to calculate amounts of rebate claims. It's the sum of the rebate claim consumed quantities of the partner unsold inventory ledgers that are related to a partner unsold inventory.This field is a calculated field. |
| TransactionDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transaction date of the sale. |
| TransactionReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference ID for the credit transaction to the partner.This field is a polymorphic relationship field.Relationship NameTransactionReferenceRefers ToTransactionJournal |
| UnitPrice | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The price at which the product is sold. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartnerUnsoldInventoryHistory](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartnerUnsoldInventoryOwnerSharingRule](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PartnerUnsoldInventoryShare](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PartnerUnsoldInventoryHistory (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_history.htm)
- PartnerUnsoldInventoryOwnerSharingRule (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- PartnerUnsoldInventoryShare (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_share.htm)
