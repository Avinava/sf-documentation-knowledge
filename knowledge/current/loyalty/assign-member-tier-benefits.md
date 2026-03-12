---
title: "Assign Member Tier Benefits"
domain: loyalty
topic: assign-member-tier-benefits
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.919Z
estimatedTokens: 205
keywords: [Assign, Member, Tier, Benefits, loyalty, program, members, their, member’s, associated, Benefit, Action, REST, HTTP, Inputs]
---

# Assign Member Tier Benefits

> Assign benefits to a loyalty program members based on their member’s
   tier for benefits that are associated with a Benefit Action.

# Assign Member Tier Benefits

Assign benefits to a loyalty program members based on their member’s tier for benefits that are associated with a Benefit Action.

This action is available in API version 51.0 and later for users with Loyalty Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/assignMemberTierBenefits

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| LoyaltyProgramMemberId | TypeIDDescriptionRequired. ID of the loyalty program member to associate with the benefits. |

## Outputs

| Output | Details |
| --- | --- |
| MemberBenefits | Typestring[]DescriptionThe benefits associated with the member. |

## Example

**Sample Request**

```

```

**Sample Response**

```

```

## Code Examples

```
{
   "inputs":[{
      "LoyaltyProgramMemberId":"0lMR00000000001OAA"
   }]
}
```

```
{
   "actionName":"assignTierBenefits",
   "errors":null,
   "isSuccess":true,
   "outputValues": { 
        "MemberBenefits": [
             '0hWR00000000001OAA',
             '0hWR00000000001OAB',
             '0hWR00000000001OAC'
        ]
   }
}
```
