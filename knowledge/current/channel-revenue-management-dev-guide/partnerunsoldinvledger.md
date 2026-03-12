---
title: "PartnerUnsoldInvLedger"
domain: channel-revenue-management-dev-guide
topic: partnerunsoldinvledger
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.464Z
estimatedTokens: 1083
keywords: [PartnerUnsoldInvLedger, Monitors, deduction, links, credit, debit, transactions, API, version, 64.0, later, Calls, Associated, Objects]
---

# PartnerUnsoldInvLedger

> Monitors the deduction details and links credit and debit transactions. 
      This object is available in API version 64.0 and later.

# PartnerUnsoldInvLedger

Monitors the deduction details and links credit and debit transactions. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AvailableDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the date the unsold inventory was made available. |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionSpecifies the details of the ledger entry. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the currency ISO code for the currency fields.Possible values are:INR—Indian RupeeKWD—Kuwaiti DinarUSD—U.S. DollarThe default value is USD. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the partner unsold inventory ledger record. |
| PartnerUnsoldInventoryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSpecifies the unsold quantity of inventory available with the partner.This field is a relationship field.Relationship NamePartnerUnsoldInventoryRelationship TypeMaster-detailRefers ToPartnerUnsoldInventory (the master object) |
| Quantity | TypedoublePropertiesCreate, Filter, SortDescriptionRequired. Specifies the quantity of unsold inventory being used. |
| RebateClaimConsumedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the quantity of the partner unsold inventory ledger that's consumed to calculate a rebate claim's amount. |
| RebateClaimId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the rebate claim ID for the point of sale that's associated with the partner unsold inventory ledger.This field is a relationship field.Relationship NameRebateClaimRefers ToRebateClaim |
| SourceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type of source for creating the ledger record.Possible values are:ManualAdjustmentPartnerReturnPointOfSalePointOfSaleReturnPriceProtectionSaleDocument |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the status of the ledger entry.Possible values are:ApprovedInTransitMovedOnHoldRejected |
| TransactionDate | TypedatePropertiesCreate, Filter, Group, SortDescriptionRequired. Specifies the date of the transaction. |
| TransactionReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionRequired. Specifies the reference to the transaction that decides whether the transaction is debit or credit.This field is a polymorphic relationship field.Relationship NameTransactionReferenceRefers ToPartnerUnsoldInventory, PriceProtectExecLineItem, PtnrInvItmRecon, TransactionJournal |
| TransactionType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionRequired. Specifies whether the transaction type is debit or credit.Possible values are:CreditDebit |
| TransitDrtnReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe transit duration for inventory movement between locations.This field is a polymorphic relationship field.Relationship NameTransitDrtnReferenceRecordRefers ToAccountLeadTime, TransitTime |
| UnitPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSpecifies the per unit price of the unsold inventory. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartnerUnsoldInvLedgerHistory](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PartnerUnsoldInvLedgerHistory (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_history.htm)
