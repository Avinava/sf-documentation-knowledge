---
title: "Corporate Member Enrollment"
domain: loyalty
topic: corporate-member-enrollment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:17.604Z
estimatedTokens: 206
keywords: [Corporate, Member, Enrollment, Output, representation]
---

# Corporate Member Enrollment

> Output representation of the corporate member enrollment create
      request.

# Corporate Member Enrollment

Output representation of the corporate member enrollment create request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | The ID of the loyalty program member’s business account. | Small, 55.0 | 55.0 |
| loyaltyProgramMemberId | String | The ID of the loyalty program member record created for the member. | Small, 55.0 | 55.0 |
| loyaltyProgramName | String | The name of the loyalty program into which the member enrolled. | Small, 55.0 | 55.0 |
| membershipNumber | String | The membership number of the enrolled member. | Small, 55.0 | 55.0 |
| transactionJournals | Transaction Journal Output[] | The list of transaction journals that are created. | Small, 55.0 | 55.0 |

## Code Examples

```
* accountId: *001xx000003GgHX*
* loyaltyProgramMemberId: *0lMxx00000008K9*
* loyaltyProgramName: *program1*
* membershipNumber: *Member6*
* transactionJournals
    * [Item 1]
        * activityDate: *2021-01-01T08:00:00.000Z*
        * journalSubType: *Member Enrollment*
        * journalType: *Accrual*
        * loyaltyProgram: *program1*
        * loyaltyProgramMember: *Member6*
        * referredMember: *null*
        * status: *Pending*
        * transactionJournalId: *0lVxx00000002Ej*
    * [Item 2]
        * activityDate: *2021-01-01T08:00:00.000Z*
        * journalSubType: *Member Referral*
        * journalType: *Accrual*
        * loyaltyProgram: *program1*
        * loyaltyProgramMember: *Member1*
        * referredMember: *Member6*
        * status: *Pending*
        * transactionJournalId: *0lVxx00000002Ek*
```

## Related Topics

- Transaction Journal Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_transaction_journal_output.htm)
