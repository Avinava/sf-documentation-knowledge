---
title: "ConnectApi.CorporateMemberInput"
domain: loyalty
topic: connectapicorporatememberinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.707Z
estimatedTokens: 593
keywords: [ConnectApi.CorporateMemberInput, Input, representation, corporate, member]
---

# ConnectApi.CorporateMemberInput

> Input representation of the corporate member create
    request.

# ConnectApi.CorporateMemberInput

Input representation of the corporate member create request.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalMember​FieldValues | Map<String, String> | The custom attributes of the member in the loyalty program member record.KeysValues | Optional | 55.0 |
| associatedAccount​Details | ConnectApi.LoyaltyAccountInputRepresentation | The account details of the member. | Required | 55.0 |
| canReceivePartner​Promotions | Boolean | Indicates whether the member can receive partner promotions for the program (true) or not (false). | Optional | 55.0 |
| canReceivePromotions | Boolean | Indicates whether the member can receive promotions for the program (true) or not (false). | Optional | 55.0 |
| createTransaction​Journals | Boolean | Indicates whether to create the transaction journal records (true) or not (false).The transaction journals records are created to:Credit points to the member for enrolling in the loyalty program.Credit points to the member who has referred the corporate member. | Optional | 55.0 |
| enrollmentChannel | ConnectApi.​EnrollmentChannelResource | The channel used by members to enroll into the loyalty program.Possible values are:CallCenterEmailFranchiseMobilePartnerPosPrintSocialStoreWeb | Optional | 55.0 |
| enrollmentDate | Datetime | The date on which a member is enrolled. The format is: YYYY-MM-DDTHH:MM:SS. | Required | 55.0 |
| memberStatus | String | The status of the member.Possible values are:ActiveInactiveCustom value | Required | 55.0 |
| membershipEndDate | Datetime | The date on which the loyalty program member’s membership ends. | Optional | 55.0 |
| membershipNumber | String | The unique membership number of the loyalty program member. | Required | 55.0 |
| referredBy | String | The membership number of the loyalty program member who has referred the member. | Optional | 55.0 |
| transactionJournal​StatementFrequency | ConnectApi.​StatementFrequencyResource | The frequency at which transaction journal statement must be delivered to the member.Possible values are:MonthlyQuaterly | Optional | 55.0 |
| transactionJournal​StatementMethod | ConnectApi.​StatementMethodResource | The method used to deliver transaction journal statements to the member.Possible values are:EmailMail | Optional | 55.0 |

## Related Topics

- ConnectApi.LoyaltyAccountInputRepresentation (atlas.en-us.loyalty.meta/loyalty/apex_connectapi_input_loyalty_account.htm)
