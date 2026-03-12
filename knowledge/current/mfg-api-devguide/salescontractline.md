---
title: "SalesContractLine"
domain: mfg-api-devguide
topic: salescontractline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.234Z
estimatedTokens: 836
keywords: [SalesContractLine, Stores, contract's, product, including, price, quantity, components, covered, API, version, 59.0, later, Calls]
---

# SalesContractLine

> Stores a contract's product information, including price, quantity, and
         components covered. This object is available in API version 59.0 and
      later.

# SalesContractLine

Stores a contract's product information, including price, quantity, and components covered. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContractId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionIdentifier of the parent contract.This field is a relationship field.Relationship NameContractRelationship TypeLookupRefers ToContract |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the sales contract line. |
| EffectiveEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from which the line item is effective. |
| EffectiveStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date till which the line item is effective. |
| ExpenseRecoveryType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of expense recovery from the supplier.Possible values are:PartExpense—Part ExpenseTotalExpense—Total Expense |
| IsPartReturnRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether it's mandatory for the manufacturer to return the product to the supplier for the supplier contract to apply.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| LineItemNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique number of the line item. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the contract line item. |
| OriginalLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the original line item that this line item references (for example if this line item is due to a contract amendment).This field is a relationship field.Relationship NameOriginalLineItemRefers ToSalesContractLine |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionProduct ID associated with the line item.This field is a relationship field.Relationship NameProduct2Refers ToProduct2 |
| ProductCode | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionProduct code associated with the line item. |
| Quantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionProduct quantity associated with the line item. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the contract line item. |
| TotalPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total price of the line item based on the quantity and unit price. |
| UnitPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price of a single unit of the line item. |
