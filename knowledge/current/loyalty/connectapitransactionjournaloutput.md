---
title: "ConnectApi.TransactionJournalOutput"
domain: loyalty
topic: connectapitransactionjournaloutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.781Z
estimatedTokens: 278
keywords: [ConnectApi.TransactionJournalOutput, Output, representation, transaction, journal, records]
---

# ConnectApi.TransactionJournalOutput

> Output representation of the transaction journal
    records.

# ConnectApi.TransactionJournalOutput

Output representation of the transaction journal records.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| activityDate | Datetime | The date and time of when the transaction journal record is created. | 55.0 |
| journalSubType | String | The journal subtype of the transaction journal record. | 55.0 |
| journalType | String | The journal type of the transaction journal record. | 55.0 |
| loyaltyProgram | String | The loyalty program associated with the transaction journal record. | 55.0 |
| loyaltyProgramMember | String | The membership number of the loyalty program member associated with the transaction journal record. | 55.0 |
| referredMember | String | The membership number of the loyalty program member who has referred the member. | 55.0 |
| status | ConnectApi.​JournalStatusResource | The status of the transaction journal record.Possible values are:CancelledErrorPendingProcessed | 55.0 |
| transactionJournalId | String | The ID of the transaction journal record created after the request is successful. | 55.0 |
