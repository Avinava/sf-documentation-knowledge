---
title: "Member Profile"
domain: loyalty
topic: member-profile
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.137Z
estimatedTokens: 380
keywords: [Member, Profile, loyalty, program, asynchronously, requesting, data, API, Resource, Input, Sample, Output]
---

# Member Profile

> Get the profile details of a loyalty program member, while asynchronously requesting
  data from the Member Profile API.

# Member Profile

Get the profile details of a loyalty program member, while asynchronously requesting data from the Member Profile API.

## Resource

```

```

## Signature

```

```

## Input Parameters

| Parameter | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| devMode | Boolean | Indicates whether the request is run in developer mode (true) or not (false). | Optional |
| memberId | String | Identifier of the member whose benefits are being retrieved. | Required |
| version | String | Version of the API. The request body is available in version 55.0 and later. | Optional |

## Return Value

A ProfileModel instance of type:

```

```

## Sample Output

```

```

## Output Parameters

| Property Name | Type | Description |
| --- | --- | --- |
| additionalLoyalty​ProgramMemberFields | Map<String, Object> | The details of the custom fields added in the loyalty program member object. |
| associatedAccount | Codable | The details of the account record that is associated with the loyalty program member. |
| associatedContact | Codable | The details of the contact record that is associated with the loyalty program member. |
| canReceivePartnerPromotions | Boolean | Indicates whether the loyalty program member can receive partner promotions. |
| canReceivePromotions | Boolean | Indicates whether the loyalty program member can receive promotions (true) or not (false). |
| enrollmentChannel | String | The channel used by the member to enroll in the loyalty program. |
| enrollmentDate | String | The date on which the member enrolled in the loyalty program. |
| groupCreatedByMember | String | The membership number of the loyalty program member who created the group. |
| groupName | String | The name of the loyalty program group to which the member belongs. |
| lastActivityDate | String | The date on which the member performed their last activity. |
| loyaltyProgram​MemberId | String | The ID of the loyalty program member. |
| loyaltyProgramName | String | The name of the loyalty program. |
| memberCurrencies | Codable | The currencies associated with the loyalty program member. |
| memberStatus | String | The status of the loyalty program member. |
| memberTiers | Codable | The tiers associated with the loyalty program member. |
| memberType | String | The type of loyalty program member. |
| membershipEndDate | String | The date on which the membership ends. |
| membershipLast​RenewalDate | String | The date on which the loyalty program member last renewed their membership. |
| membershipNumber | String | The membership number of the loyalty program member. |
| referredBy | String | The membership number of the loyalty program member who referred the member to the loyalty program. |
| relatedCorporate​MembershipNumber | String | The membership number of the Corporate type loyalty program member associate with the member. |
| transactionJournal​StatementFrequency | String | The frequency at which transaction journal statements must be delivered to the member.Possible values are:MonthlyQuarterly |
| transactionJournal​StatementLastGeneratedDate | String | The date on which the member's last transaction journal statement was generated. |
| transactionJournal​StatementMethod | String | The method used to deliver transaction journal statements to the member. |

.

## Code Examples

```
/loyalty-programs/${loyaltyProgramName}/members
```

```
https://yourInstance.salesforce.com/services/data/v66.0/loyalty-programs/${baLoyalty}/members
```

```
https://yourInstance.salesforce.com/services/data/v66.0/loyalty-programs/${baLoyalty}/members?memberId=007
```

```
https://yourInstance.salesforce.com/services/data/v66.0/loyalty-programs/${baLoyalty}/members?membershipNumber=doc_member1
```

```
https://yourInstance.salesforce.com/services/data/v66.0/loyalty-programs/${baLoyalty}/members?programCurrencyName=Yen
```

## Related Topics

- Member Profile Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_member_profile_output.htm)
