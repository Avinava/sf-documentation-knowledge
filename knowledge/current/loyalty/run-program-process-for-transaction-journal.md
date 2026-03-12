---
title: "Run Program Process for Transaction Journal"
domain: loyalty
topic: run-program-process-for-transaction-journal
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.041Z
estimatedTokens: 415
keywords: [Run, Program, Process, Transaction, Journal, active, loyalty, processes, pending, Accrual, Redemption, journals, REST, HTTP, Inputs]
---

# Run Program Process for Transaction Journal

> Run active loyalty program processes for pending Accrual or Redemption
      type transaction journals.

# Run Program Process for Transaction Journal

Run active loyalty program processes for pending Accrual or Redemption type transaction journals.

The action assesses transaction journals and runs the program processes whose selected journal type matches the transaction’s journal type. If program processes have a journal subtype selected, then processes only run for a transaction journal when the transaction journal's journal subtype matches that processes' journal subtype.

For more information about this action, see [Run Program Process For Transaction Journal](https://help.salesforce.com/s/articleView?id=xcloud.promotion_setup_processing_batch.htm&type=5&language=en_US) in Salesforce Help.

This action is available in API version 54.0 and later for users in org's where either B2C - Loyalty, B2C - Loyalty Plus, Loyalty Management - Growth, or Loyalty Management - Advanced license are enabled.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/runProgramProcessForTransactionJournal

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| transactionJournalId | TypeIDDescriptionRequired. ID of the transaction journal for which program processes must be run. The status of the Transaction Journal must be Pending, and the journal type must be specified for it. |

## Outputs

| Output | Details |
| --- | --- |
| status | TypeBooleanDescriptionIndicates the status of the request. True indicates the program process was successfully run for the transaction journal. |

## Example

**Sample Request**

```

```

**Sample Response**

```

```

## Code Examples

```
{
   "inputs": [
      {
         "transactionJournalId":"0lMxx0000A000001EAA"
      }
   ]
}
```

```
[ {
   "actionName" : "runProgramProcessForTransactionJournal",
   "errors" : null,
   "isSuccess" : true,
   "outputValues":{ 
      "status":"true"
   }
} ]
```
