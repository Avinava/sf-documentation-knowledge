---
title: "Transaction History"
domain: loyalty
topic: transaction-history
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.198Z
estimatedTokens: 396
keywords: [Transaction, History, journals, loyalty, member, belonging, program, Obtain, either, accrual, redemption, journal, records, Retrieve, member’s, asynchronously, requesting, data, API, Resource]
---

# Transaction History

> Retrieve member’s transaction history, while asynchronously requesting data from the
  Transaction History API.

# Transaction History

Retrieve member’s transaction history, while asynchronously requesting data from the Transaction History API.

## Resource

```

```

## Signature

```

```

## Input Parameters

| Parameter Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| devMode | Boolean | Indicates whether the request is run in developer mode (true) or not (false). | Optional |
| journalSubTypeName | String | The subtype of the transaction journal record. | Optional |
| journalTypeName | String | The type of the transaction journal record. Possible values are:AccrualRedemption | Optional |
| membershipNumber | String | Unique identifier of the member whose transactions are being retrieved. | Required |
| pageNumber | Integer | The page number to be returned. If you don’t specify a value, the first page is returned. Each page contains 200 transactions, sorted by their date of creation. | Optional |
| periodStartDate | String | Retrieve transaction journals starting on this date. | Optional |
| periodEndDate | String | Retrieve transaction journals until this date. | Optional |
| version | String | Version of the API. The request body is available in version 55.0 and later. | Optional |

## Sample Output

```

```

## Output Parameters

| Parameter Name | Type | Description |
| --- | --- | --- |
| externalTransactionNumber | String | The transaction journal record ID from an external source system. |
| message | String | The message explaining why the request failed. |
| status | Boolean | Indicates whether the request succeeded (true) or failed (false). |
| transactionJournalCount | Integer | The total number of transaction journals that match the input criteria. |
| transactionJournals | Map<String, Object>[] | The details of the transaction journals. |

## Code Examples

```
/connect/loyalty/programs/${programName}/transaction-history
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/loyalty/programs/NTO/transaction-history?page=2
```

```
{
   "membershipNumber":"doc_member1",
   "journalType":"Accrual",
   "journalSubType":"Social",
   "periodStartDate":"2022-01-27T00:00:00Z",
   "periodEndDate":"2022-11-27T00:00:00Z"
}
```

```
getTransactions(for:pageNumber:journalTypeName:journalSubTypeName:periodStartDate:periodEndDate:version:devMode:)
```

```apex
public func getTransactions(
    for membershipNumber: String,
    pageNumber: Int? = nil,
    journalTypeName: String? = nil,
    journalSubTypeName: String? = nil,
    periodStartDate: String? = nil,
    periodEndDate: String? = nil,
    version: String = LoyaltyAPIVersion.defaultVersion,
    devMode: Bool = false) async throws -> [TransactionJournal]
```

## Related Topics

- Loyalty View Transaction Journal History Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_loyalty_view_t_j_history_output.htm)
