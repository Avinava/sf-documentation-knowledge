---
title: "Member Benefits"
domain: loyalty
topic: member-benefits
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:04:17.344Z
estimatedTokens: 89
keywords: [Member, Benefits, loyalty, program, Output, representation, JSON, Retrieve, asynchronously, requesting, data, API, Resource, Input, Sample]
---

# Member Benefits

> Retrieve a list of benefits for a member, while asynchronously requesting data from the
        Member Benefits API.

# Member Benefits

Retrieve a list of benefits for a member, while asynchronously requesting data from the Member Benefits API.

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

A BenefitModel instance of type:

```

```

## Sample Output

```

```

## Output Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| benefitId | String | The ID of the benefit available for the member. |
| benefitName | String | The name of the benefit available for the member. |
| benefitTypeId | String | The ID of the associated benefit type record. |
| benefitTypeName | String | The name of the associated benefit type. |
| createdRecordId | String | The ID of the record created during benefit assignment. |
| createdRecordName | String | The display name of the record created during benefit assignment. |
| description | String | The description of the benefit available to a loyalty program member. |
| endDate | String | The date the benefit expires. |
| isActive | Boolean | Indicates whether the benefit is active (true) or not (false). |
| memberBenefitStatus | String | The status of the benefit available for the member. |
| startDate | String | The date from when the benefit applies to a member. |

## Code Examples

```
/connect/loyalty/member/${memberId}/memberbenefits
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/loyalty/member/0lM0000Abthl24242af/memberbenefits
```

```
{
  "result" : {
      "benefitId": "0lB000000abc123",
      "benefitName": "15 Kg Luggage",
      "benefitTypeId": "0lo0000000afja435",
      "benefitTypeName": "Carry On Luggage",
      "startDate": "23-05-2015",
      "endDate": "22-05-2035",
      "isActive": true,
      "createdRecordId": "570000000ak123",
      "createdRecordName": "15 Kg Luggage Carry On",
      “description”: ”This is a carry on luggage member benefit”
  },
  {
      "benefitId": "0lB000000gsy88",
      "benefitName": "Priority Support",
      "benefitTypeId": "0lo0000000pi23ii",
      "benefitTypeName": "Support Entitlements",
      "startDate": "16-08-2020",
      "endDate": "15-02-2021",
      "isActive": true,
      "createdRecordId": "550000000aj112",
      "createdRecordName": "Priority Support Entitlement",
      “description”: ”This is a support entitlement member benefit”
  }
}
```

```
getMemberBenefits(for:version:devMode:)
```

```apex
public func getMemberBenefits(
    for memberId: String,
    version: String = LoyaltyAPIVersion.defaultVersion,
    devMode: Bool = false) async throws -> [BenefitModel]
```

## Related Topics

- Member Benefits (atlas.en-us.loyalty.meta/loyalty/connect_responses_member_benefits_output.htm)
- Member Benefit Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_member_benefit_output.htm)
