---
title: "Transaction Ledger Summary"
domain: loyalty
topic: transaction-ledger-summary
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.204Z
estimatedTokens: 387
keywords: [Transaction, Ledger, Summary, Retrieve, aggregate, view, journal, loyalty, records]
---

# Transaction Ledger Summary

> Retrieve an aggregate view on the transaction journal and the
      loyalty ledger records.

# Transaction Ledger Summary

Retrieve an aggregate view on the transaction journal and the loyalty ledger records.

Resource

```

```

Resource Examples

```

```

```

```

```

```

Available version

58.0

Requires Chatter

No

HTTP methods

GET

Query parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| journalSubTypeName | String | Returns the transaction journals filtered by the specified journal subtype. | Optional | 58.0 |
| additionalTransactionJournalAttributes | String | Returns the list of transaction journal fields. | Optional | 58.0 |
| journalTypeName | String | Returns the transaction journals filtered by the specified journal type. | Optional | 58.0 |
| pageNumber | Integer | Returns the transaction journals for the specified page number.NoteThe API returns the first page by default. Each page contains 200 transaction journals, which are sorted according to the date the transaction journal record was created. | Optional | 58.0 |
| periodEndDate | String | Returns the transaction journals filtered by the specified end date. | Optional | 58.0 |
| periodStartDate | String | Returns the transaction journals filtered by the specified start date. | Optional | 58.0 |

Response body for GET

[Transaction Journal Summary Output](atlas.en-us.loyalty.meta/loyalty/connect_responses_transaction_ledgers_output.htm "Output representation of the transaction journals and the ledgers associated with the specified loyalty program member.")

## Code Examples

```
/loyalty/programs/${programName}/members/${membershipNumber}/transaction-ledger-summary
```

```
https://yourInstance.salesforce.com/services/data/v66.0/loyalty/programs/NTO/members/M1/transaction-ledger-summary
```

```
https://yourInstance.salesforce.com/services/data/v66.0/loyalty/programs/NTO/members/M1/transaction-ledger-summary?journalSubTypeName={provide_value}
```

```
https://yourInstance.salesforce.com/services/data/v66.0/loyalty/programs/NTO/members/M1/transaction-ledger-summary?pageNumber=2&journalTypeName={name}&journalSubTypeName={provide_value}
```

## Related Topics

- Transaction Journal
              Summary Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_transaction_ledgers_output.htm)
