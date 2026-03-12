---
title: "ConnectApi.IndividualMemberOutput"
domain: loyalty
topic: connectapiindividualmemberoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.735Z
estimatedTokens: 203
keywords: [ConnectApi.IndividualMemberOutput, Output, representation, individual, member]
---

# ConnectApi.IndividualMemberOutput

> Output representation of the individual member create
    request.

# ConnectApi.IndividualMemberOutput

Output representation of the individual member create request.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| contactId | String | The ID of the loyalty program member record created for the individual member. | 55.0 |
| loyaltyProgram​MemberId | String | The ID of the contact record associated with the loyalty program member record. | 55.0 |
| loyaltyProgramName | String | The name of the loyalty program in which the individual member is enrolled. | 55.0 |
| membershipNumber | String | The membership number created for the loyalty program member record. | 55.0 |
| transactionJournals | List<ConnectApi.TransactionJournalOutput> | The list of the transaction journal records created after the request is successful. | 55.0 |

## Related Topics

- ConnectApi.TransactionJournalOutput (atlas.en-us.loyalty.meta/loyalty/apex_connectapi_output_transaction_journal_output.htm)
