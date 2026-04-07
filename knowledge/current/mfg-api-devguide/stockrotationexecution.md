---
title: "StockRotationExecution"
domain: mfg-api-devguide
topic: stockrotationexecution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:24.284Z
estimatedTokens: 506
keywords: [StockRotationExecution, stock, rotation, rebate, activity, recording, affected, inventory, partner, claim, processing, API, version, 65.0, later]
---

# StockRotationExecution

> Represents a stock rotation rebate activity, recording affected inventory and
         partner information for rebate claim processing. This object is available in API
      version 65.0 and later.

# StockRotationExecution

Represents a stock rotation rebate activity, recording affected inventory and partner information for rebate claim processing. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Account | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSpecifies the partner account participating in the stock rotation execution. |
| EligibleAmount | TypecurrencyPropertiesCreate, Filter, Group, SortDescriptionSpecifies the total amount the partner is eligible to claim under the stock rotation program. |
| EndDate | TypedatePropertiesCreate, Filter, Group, SortDescriptionSpecifies the end date of the stock rotation execution. |
| ExecutionReferenceNumber | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe reference number associated with the stock rotation execution process, such as a data processing engine definition. |
| ProgramReference | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSpecifies the reference object associated with the stock rotation execution. |
| RebateProgram | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSpecifies the rebate program associated with the stock rotation program. |
| StartDate | TypedatePropertiesCreate, Filter, Group, SortDescriptionSpecifies the start date of the stock rotation execution. |
| Status | TypepicklistPropertiesCreate, Filter, Group, SortDescriptionIndicates the current status of the stock rotation execution. Possible values: New, In-Progress, Completed, Closed, Canceled. |
| TotalCalculatedAmount | TypecurrencyPropertiesCreate, Filter, Group, SortDescriptionSpecifies the total calculated amount for the partner under the stock rotation program. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, SortDescriptionIdentifies the business process this execution record is used for (e.g., Stock Rotation Rebate, Rebate). |
