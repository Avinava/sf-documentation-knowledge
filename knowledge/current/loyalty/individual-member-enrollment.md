---
title: "Individual Member Enrollment"
domain: loyalty
topic: individual-member-enrollment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:17.701Z
estimatedTokens: 207
keywords: [Individual, Member, Enrollment, Output, representation]
---

# Individual Member Enrollment

> Output representation of the individual member enrollment create
      request.

# Individual Member Enrollment

Output representation of the individual member enrollment create request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contactId | String | The ID of the loyalty program member’s person account. | Small, 55.0 | 55.0 |
| loyaltyProgram​MemberId | String | The ID of the loyalty program member record created for the member. | Small, 55.0 | 55.0 |
| loyaltyProgram​Name | String | The name of the loyalty program into which the member is enrolled. | Small, 55.0 | 55.0 |
| membershipNumber | String | The membership number of the enrolled member. | Small, 55.0 | 55.0 |
| transactionJournals | Transaction Journal Output[] | The list of transaction journals that are created. | Small, 55.0 | 55.0 |

## Code Examples

```
{
  "contactId": "003xx000004WsO8",
  "loyaltyProgramMemberId": "0lMxx00000008FJ",
  "loyaltyProgramName": "program1",
  "membershipNumber": "Member3",
  "transactionJournals": [
    {
      "activityDate": "2021-01-01T08:00:00.000Z",
      "journalSubType": "Member Enrollment",
      "journalType": "Accrual",
      "loyaltyProgram": "program1",
      "loyaltyProgramMember": "Member3",
      "referredMember": null,
      "status": "Pending",
      "transactionJournalId": "0lVxx000000029t"
    },
    {
      "activityDate": "2021-01-01T08:00:00.000Z",
      "journalSubType": "Member Referral",
      "journalType": "Accrual",
      "loyaltyProgram": "program1",
      "loyaltyProgramMember": "Member1",
      "referredMember": "Member3",
      "status": "Pending",
      "transactionJournalId": "0lVxx000000029u"
    }
  ]
}
```

## Related Topics

- Transaction Journal Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_transaction_journal_output.htm)
