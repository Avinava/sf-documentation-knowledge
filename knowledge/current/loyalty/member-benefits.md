---
title: "Member Benefits"
domain: loyalty
topic: member-benefits
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.128Z
estimatedTokens: 90
keywords: [Member, Benefits, loyalty, program, Retrieve, asynchronously, requesting, data, API, Resource, Input, Sample, Output]
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
getMemberBenefits(for:version:devMode:)
```

```apex
public func getMemberBenefits(
    for memberId: String,
    version: String = LoyaltyAPIVersion.defaultVersion,
    devMode: Bool = false) async throws -> [BenefitModel]
```

```apex
public struct BenefitModel : Identifiable, Codable
```

## Related Topics

- Member Benefits Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_member_benefits_output.htm)
