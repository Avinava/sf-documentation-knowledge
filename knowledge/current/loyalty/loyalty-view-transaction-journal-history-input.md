---
title: "Loyalty View Transaction Journal History Input"
domain: loyalty
topic: loyalty-view-transaction-journal-history-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.944Z
estimatedTokens: 199
keywords: [Loyalty, View, Transaction, Journal, History, Input, representation, getting, records, member]
---

# Loyalty View Transaction Journal History Input

> Input representation for getting the transaction journal records of a
      loyalty member.

# Loyalty View Transaction Journal History Input

Input representation for getting the transaction journal records of a loyalty member.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| journalSubType | String | The subtype of the transaction journal record. | Optional | 56.0 |
| journalType | String | The type of the transaction journal.Possible values include:AccrualRedemption | Required | 56.0 |
| membershipNumber | String | The membership number of the loyalty program member. | Required | 56.0 |
| periodEndDate | String | Retrieve transaction journals until this date. | Optional | 56.0 |
| periodStartDate | String | Retrieve transaction journals starting on this date. | Required | 56.0 |

## Code Examples

```
{
   "membershipNumber":"doc_member1",
   "journalType":"Accrual",
   "journalSubType":"Social",
   "periodStartDate":"2022-01-27T00:00:00Z",
   "periodEndDate":"2022-11-27T00:00:00Z"
}
```
