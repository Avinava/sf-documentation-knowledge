---
title: "Referral Advocate Enrollment"
domain: referral-marketing
topic: referral-advocate-enrollment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.835Z
estimatedTokens: 325
keywords: [Referral, Advocate, Enrollment, Output, representation, program]
---

# Referral Advocate Enrollment

> Output representation of the request to create a referral program advocate.

# Referral Advocate Enrollment

Output representation of the request to create a referral program advocate.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contactId | String | ID of the contact that's created for the advocate. | Small, 59.0 | 59.0 |
| memberId | String | ID of the Loyalty Program Member record created for the advocate. | Small, 59.0 | 59.0 |
| membershipNumber | String | Membership number of the advocate. | Small, 59.0 | 59.0 |
| programName | String | Name of the referral program in which the advocate is enrolled. | Small, 59.0 | 59.0 |
| promotionReferralCode | String | Promotion referral code used by the advocate to join the referral program.The promotion referral code consists of the promotion code with which the referral member enrolls and the referral code that's used to join the referral program. A hyphen separates the promotion code and the referral code. For example, if the referral code is ABC and the promotion code is 123, then the promotion referral code is ABC-123. | Small, 59.0 | 59.0 |
| transactionJournals | Advocate Enrollment Transaction Journal[] | List of transaction journals that are created for the advocate's enrollment. | Small, 59.0 | 59.0 |

## Code Examples

```
{
  "contactId": "003RO000003vJeU",
  "memberId": "0lMRO00000000nO",
  "membershipNumber": "DemoJun21",
  "programName": "DemoProgram",
  "promotionReferralCode": "ZB74ANSO-DemoPromo1",
  "transactionJournals": [
    {
      "activityDate": "2023-06-21T13:37:26.000Z",
      "journalSubType": "Member Enrollment",
      "journalType": "Referral",
      "membershipNumber": "DemoJun21",
      "programName": "DemoProgram",
      "status": "Processed",
      "transactionJournalId": "0lVRO00000002wV"
    }
  ]
}
```

## Related Topics

- Advocate Enrollment Transaction Journal (atlas.en-us.referral_marketing.meta/referral_marketing/connect_responses_member_enrollment_transaction_journal_output.htm)
