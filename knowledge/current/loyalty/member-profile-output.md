---
title: "Member Profile Output"
domain: loyalty
topic: member-profile-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.540Z
estimatedTokens: 837
keywords: [Member, Profile, Output, representation, loyalty, program]
---

# Member Profile Output

> Output representation of the details of a loyalty program
    member.

# Member Profile Output

Output representation of the details of a loyalty program member.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additionalLoyalty​ProgramMemberFields | Map<String, Object> | The details of the custom fields added in the loyalty program member object. | Small, 55.0 | 55.0 |
| associatedAccount | Member Account Output | The details of the account record that is associated with the loyalty program member. | Small, 55.0 | 55.0 |
| associatedContact | Member Contact Output | The details of the contact record that is associated with the loyalty program member. | Small, 55.0 | 55.0 |
| canReceivePartner​Promotions | Boolean | Indicates whether the loyalty program member can receive partner promotions. | Small, 55.0 | 55.0 |
| canReceivePromotions | Boolean | Indicates whether the loyalty program member can receive promotions (true) or not (false). | Small, 55.0 | 55.0 |
| enrollmentChannel | String | The channel used by the member to enroll in the loyalty program. | Small, 55.0 | 55.0 |
| enrollmentDate | String | The date on which the member enrolled in the loyalty program. | Small, 55.0 | 55.0 |
| groupCreatedByMember | String | The membership number of the loyalty program member who created the group. | Small, 55.0 | 55.0 |
| groupName | String | The name of the loyalty program group to which the member belongs. | Small, 55.0 | 55.0 |
| lastActivityDate | String | The date on which the member performed their last activity. | Small, 55.0 | 55.0 |
| loyaltyProgram​MemberId | String | The ID of the loyalty program member. | Small, 55.0 | 55.0 |
| loyaltyProgramName | String | The name of the loyalty program. | Small, 55.0 | 55.0 |
| memberCurrencies | Member Currency Output[] | The currencies associated with the loyalty program member. | Small, 55.0 | 55.0 |
| memberStatus | String | The status of the loyalty program member. | Small, 55.0 | 55.0 |
| memberTiers | Member Tier Output[] | The tiers associated with the loyalty program member. | Small, 55.0 | 55.0 |
| memberType | String | The type of loyalty program member. | Small, 55.0 | 55.0 |
| membershipEndDate | String | The date on which the membership ends. | Small, 55.0 | 55.0 |
| membershipLast​RenewalDate | String | The date on which the loyalty program member last renewed their membership. | Small, 55.0 | 55.0 |
| membershipNumber | String | The membership number of the loyalty program member. | Small, 55.0 | 55.0 |
| referredBy | String | The membership number of the loyalty program member who referred the member to the loyalty program. | Small, 55.0 | 55.0 |
| relatedCorporate​MembershipNumber | String | The membership number of the Corporate type loyalty program member associate with the member. | Small, 55.0 | 55.0 |
| transactionJournal​StatementFrequency | String | The frequency at which transaction journal statements must be delivered to the member.Possible values are:MonthlyQuarterly | Small, 55.0 | 55.0 |
| transactionJournal​StatementLastGeneratedDate | String | The date on which the member's last transaction journal statement was generated. | Small, 55.0 | 55.0 |
| transactionJournal​StatementMethod | String | The method used to deliver transaction journal statements to the member. | Small, 55.0 | 55.0 |

## Code Examples

```
{
  "programName": "baLoyalty",
  "associatedContactDetails": {
    "id": "003xx0000000003",
    "firstName": "Abcd",
    "lastName": "Xyz",
    "email": "abcd@salesforce.com"
  },
  "associatedAccountDetails": {
    "id": "001xx0000000003",
    "name": "Salesforce"
  },
  "membershipNumber": "1234",
  "memberId": "0lMxx0000A000001EAA",
  "memberStatus": "Active",
  "memberType": "Individual",
  "groupName": "Family Group",
  "groupCreatedByMember": "GM-001",
  "associatedCorporateMembershipNumber": "G-001",
  "referredBy": "H-001",
  "lastActivityDate": "2022-01-02",
  "statementLastGeneratedDate": "2022-09-09",
  "statementFrequency": "Monthly",
  "statementMethod": "Email",
  "enrollmentDate": "2022-01-01",
  "enrollmentChannel": "POS",
  "canReceivePromotions": "True",
  "canReceivePartnerPromotion": "True",
  "membershipEndDate": "2023-01-01",
  "membershipLastRenewalDate": "2021-01-01",
  "memberCurrencies": [
    {
      "programCurrency": "NQP",
      "pointsBalance": 500,
      "escrowPointsBalance": 25
    }
  ],
  "memberTiers": [
    {
      "tierGroupName": "QualifyingGroup",
      "tierName": "Gold",
      "sequenceNumber": "4",
      "effectiveDate": "2022-01-01",
      "expirationDate": "2022-01-10"
    }
  ],
  "additionalMemberFieldValues": {
    "secondaryEmail__c": "abcd@salesforce.com"
  },
  "additionalMemberCurrencyFieldValues": {
    "conversionRate__c": "5"
  },
  "additionalMemberTierFieldValues": {
    "previousTier__c": "Silver"
  }
}
```

## Related Topics

- Member Account Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_loyalty_account_output.htm)
- Member Contact Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_loyalty_contact_output.htm)
- Member Currency Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_member_currency_output.htm)
- Member Tier Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_member_tier_output.htm)
