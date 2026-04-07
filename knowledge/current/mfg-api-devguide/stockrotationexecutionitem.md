---
title: "StockRotationExecutionItem"
domain: mfg-api-devguide
topic: stockrotationexecutionitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:38:14.710Z
estimatedTokens: 854
keywords: [StockRotationExecutionItem, affected, partner, inventory, stock, rotation, rebate, execution, determine, claim, eligibility, API, 65.0]
---

> Represents the affected partner inventory in a stock rotation rebate
         execution, used to determine claim eligibility. This object is available in API
      version 65.0 and later.

# StockRotationExecutionItem

Represents the affected partner inventory in a stock rotation rebate execution, used to determine claim eligibility. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcceptedQuantity | TypedoublePropertiesCreate, Filter, Group, SortDescriptionSpecifies the quantity accepted for stock rotation in this line item. |
| CalculatedAmount | TypecurrencyPropertiesCreate, Filter, Group, SortDescriptionSpecifies the simulated claim amount for this line item, calculated based on the claimable quantity. |
| ClaimableQuantity | TypedoublePropertiesCreate, Filter, Group, SortDescriptionSpecifies the quantity eligible for claim under the stock rotation program. |
| EligibleQuantity | TypedoublePropertiesCreate, Filter, Group, SortDescriptionSpecifies the quantity eligible for stock rotation in this line item. |
| HasWarnings | TypepicklistPropertiesCreate, Filter, Group, SortDescriptionIndicates whether this line item has any warnings. |
| PartnerUnsoldInventory | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRefers to the partner’s unsold inventory eligible for stock rotation. |
| PriceType | TypepicklistPropertiesCreate, Filter, Group, SortDescriptionIndicates the price category of the eligible inventory. |
| Product | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSpecifies the product from the partner’s eligible unsold inventory. |
| ProgramRebateTypeEligibility | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSpecifies the program rebate type detail associated with this line item. |
| RebateClaim | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRefers to the rebate claim generated for this line item. |
| RemainingQuantity | TypedoublePropertiesCreate, Filter, Group, SortDescriptionSpecifies the quantity remaining in the partner’s unsold inventory. |
| SelectedDate | TypedatePropertiesCreate, Filter, Group, SortDescriptionSpecifies the date when the quantity was selected for stock rotation. |
| SelectedQuantity | TypedoublePropertiesCreate, Filter, Group, SortDescriptionSpecifies the quantity selected for stock rotation in this line item. |
| Status | TypepicklistPropertiesCreate, Filter, Group, SortDescriptionIndicates the current status of the line item (e.g., New, Quantity Submitted, Accepted). |
| StatusReason | TypetextPropertiesCreate, Filter, Group, SortDescriptionSpecifies the reason for the current status of the line item. |
| StockRotationExecution | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSpecifies the parent stock rotation execution record associated with this line item. |
| StockRotationMethod | TypepicklistPropertiesCreate, Filter, Group, SortDescriptionSpecifies the stock rotation method chosen by the partner (Return or Scrap). |
| TransactionReference | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSpecifies the reference object (e.g., Invoice/PUI) associated with this line item. |
| UnitPrice | TypecurrencyPropertiesCreate, Filter, Group, SortDescriptionSpecifies the unit price of the product in the eligible inventory. |
| WarningMessage | TypetextPropertiesCreate, Filter, Group, SortDescriptionSpecifies the warning message associated with this line item if warnings exist. |
