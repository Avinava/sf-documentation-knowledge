---
title: "ScheduleTPMAccrualProcessChain Class"
domain: retail-api
topic: scheduletpmaccrualprocesschain-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.020Z
estimatedTokens: 460
keywords: [ScheduleTPMAccrualProcessChain, Apex, initiates, TPM, Accrual, Process, orchestrator, ensuring, export, configuration, successfully, updated, Date, referencedate, List<String>]
---

# ScheduleTPMAccrualProcessChain Class

> This Apex class initiates TPM Accrual Process orchestrator after ensuring the accrual
  export configuration is successfully updated.

# ScheduleTPMAccrualProcessChain Class

This Apex class initiates TPM Accrual Process orchestrator after ensuring the accrual export configuration is successfully updated.

## Namespace

cgcloud

## Constructors

The following are the two constructors for ScheduleTPMAccrualProcessChain.

-   **ScheduleTPMAccrualProcessChain(Date referencedate, List<String> salesorgs, String ingestionmode)**
-   **ScheduleTPMAccrualProcessChain()**

## ScheduleTPMAccrualProcessChain(Date referencedate, List<String> salesorgs, String ingestionmode)

Schedules the accrual process chain at a specific reference date, based on the list of provided sales organizations, and with a specific mode of operation.

API Version

65.0 and later

Signature

```

```

**Signature Parameters**

-   referencedate: Enter the reference date in date format.
-   salesorgs: Enter the list of sales org names.
-   ingestionmode: Enter the type of ingestion mode. The supported values are initial, partial, and full.

## ScheduleTPMAccrualProcessChain()

Schedules the Accrual Process Chain at the current date, based on all sales organizations with accruals enabled, and with mode of operation initial.

API Version

65.0 and later

**Signature**

```

```

## Methods

The following method is available for ScheduleTPMAccrualProcessChain.

-   **global void execute(SchedulableContext context)**

## SchedulableContext context

This method executes the scheduled Apex job.

API Version

65.0 and later

**Signature**

```

```

**Signature Parameters**

-   context: Enter the Apex job ID that needs to be executed.

-   **[Best Practices: Claim Processing Through Apex Batch](atlas.en-us.retail_api.meta/retail_api/tpm_best_practices_accruals_claims.htm)**
    Claim processes in Consumer Goods Cloud Trade Promotion Management (TPM) is done through user interface.

## Code Examples

```apex
global ScheduleTPMAccrualProcessChain(Date referencedate, List<String> salesorgs, String ingestionmode)
```

```apex
global ScheduleTPMAccrualProcessChain()
```

## Related Topics

- Best Practices: Claim Processing Through Apex Batch (atlas.en-us.retail_api.meta/retail_api/tpm_best_practices_accruals_claims.htm)
