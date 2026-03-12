---
title: "Member Benefits Output"
domain: loyalty
topic: member-benefits-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.507Z
estimatedTokens: 87
keywords: [Member, Benefits, Output, representation, JSON]
---

# Member Benefits Output

> Output representation of all benefits available for a
    member.

# Member Benefits Output

﻿Output representation of all benefits available for a member.

## JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| memberBenefits | Member Benefit Output[] | List of all benefits available for a member. | Small, 51.0 | 51.0 |

## Code Examples

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

## Related Topics

- Member Benefit Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_member_benefit_output.htm)
