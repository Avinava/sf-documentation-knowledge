---
title: "ConnectApi.MemberDetailsOutput"
domain: loyalty
topic: connectapimemberdetailsoutput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.766Z
estimatedTokens: 743
keywords: [ConnectApi.MemberDetailsOutput, Output, representation, loyalty, program, member]
---

# ConnectApi.MemberDetailsOutput

> Output representation of the details of a loyalty program
    member.

# ConnectApi.MemberDetailsOutput

Output representation of the details of a loyalty program member.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| additionalLoyalty​ProgramMemberFields | Map<String, Object> | The details of the custom fields added in the loyalty program member object. | 55.0 |
| associatedAccount | ConnectApi.MemberAccountOutput | The details of the account record associated with the loyalty program member. | 55.0 |
| associatedContact | ConnectApi.MemberContactOutput | The details of the contact record associated with the loyalty program member. | 55.0 |
| canReceivePartner​Promotions | Boolean | Indicates whether the loyalty program member can receive partner promotions (true) or not (false). | 55.0 |
| canReceivePromotions | Boolean | Indicates whether the loyalty program member can receive promotions true) or not (false). | 55.0 |
| enrollmentChannel | String | The channel used by the member to enroll in the loyalty program. | 55.0 |
| enrollmentDate | Datetime | The date on which the member enrolled in the loyalty program. | 55.0 |
| groupCreated​ByMember | String | The membership number of the loyalty program member who created the group. | 55.0 |
| groupName | String | The name of the group to which the member belongs. | 55.0 |
| lastActivityDate | Datetime | The date on which the member performed their last activity. | 55.0 |
| loyaltyProgram​MemberId | String | The ID of the loyalty program member. | 55.0 |
| loyaltyProgramName | String | The name of the loyalty program. | 55.0 |
| memberCurrencies | List<ConnectApi.MemberCurrencyOutput> | The currencies associated with the loyalty program member. | 55.0 |
| memberStatus | String | The status of the loyalty program member. | 55.0 |
| memberTiers | List<ConnectApi.MemberTierOutput> | The tiers associated with the loyalty program member. | 55.0 |
| memberType | String | The type of loyalty program member. | 55.0 |
| membership​EndDate | Datetime | The date on which the membership ends. | 55.0 |
| membershipLast​RenewalDate | Datetime | The date on which the loyalty program member last renewed their membership. | 55.0 |
| membershipNumber | String | The membership number of the loyalty program member. | 55.0 |
| referredBy | String | The membership number of the loyalty program member who referred the member to the loyalty program. | 55.0 |
| relatedCorporate​MembershipNumber | String | The membership number of the Corporate type loyalty program member associate with the member. | 55.0 |
| transactionJournal​StatementFrequency | String | The frequency at which transaction journal statements must be delivered to the member. | 55.0 |
| transactionJournalStatement​LastGeneratedDate | Datetime | The date on which the member's last transaction journal statement was generated. | 55.0 |
| transactionJournalStatementMethod | String | The method used to deliver transaction journal statements to the member. | 55.0 |

## Related Topics

- ConnectApi.MemberAccountOutput (atlas.en-us.loyalty.meta/loyalty/apex_connectapi_output_loyalty_account_output.htm)
- ConnectApi.MemberContactOutput (atlas.en-us.loyalty.meta/loyalty/apex_connectapi_output_loyalty_contact_output.htm)
- ConnectApi.MemberCurrencyOutput (atlas.en-us.loyalty.meta/loyalty/apex_connectapi_output_member_currency_output.htm)
- ConnectApi.MemberTierOutput (atlas.en-us.loyalty.meta/loyalty/apex_connectapi_output_member_tier_output.htm)
