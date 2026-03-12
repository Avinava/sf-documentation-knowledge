---
title: "ConnectApi.CorporateMemberOutput"
domain: loyalty
topic: connectapicorporatememberoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.731Z
estimatedTokens: 204
keywords: [ConnectApi.CorporateMemberOutput, Output, representation, corporate, member, enrollment]
---

# ConnectApi.CorporateMemberOutput

> Output representation of the corporate member enrollment create
      request.

# ConnectApi.CorporateMemberOutput

Output representation of the corporate member enrollment create request.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| accountId | String | The ID of the account record associated with the loyalty program member record. | 55.0 |
| loyaltyProgram​MemberId | String | The ID of the loyalty program member record created for the corporate member. | 55.0 |
| loyaltyProgramName | String | The name of the loyalty program in which the corporate member is enrolled. | 55.0 |
| membershipNumber | String | The membership number created for the loyalty program member record. | 55.0 |
| transactionJournals | List<ConnectApi.TransactionJournalOutput> | The list of the transaction journal records created after the request is successful. | 55.0 |

## Related Topics

- ConnectApi.TransactionJournalOutput (atlas.en-us.loyalty.meta/loyalty/apex_connectapi_output_transaction_journal_output.htm)
