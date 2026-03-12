---
title: "Change All Tiers or None"
domain: loyalty
topic: change-all-tiers-or-none
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.942Z
estimatedTokens: 355
keywords: [Change, Tiers, None, tier, loyalty, program, member, input, meet, criteria, REST, HTTP, Inputs, Outputs]
---

# Change All Tiers or None

> Change tier for a specified loyalty program member only when all the
   input parameters meet the criteria.

# Change All Tiers or None

Change tier for a specified loyalty program member only when all the input parameters meet the criteria.

This action is available in API version 51.0 and later for users with Loyalty Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/changeAllTierOrNone

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| ChangeReason | TypestringDescriptionThe reason for change in the tier. |
| ChangeReasonType | TypestringDescriptionThe reason type for change in the tier. |
| LoyaltyProgramMemberId | TypeIDDescriptionRequired. ID of the loyalty program member. |
| ProgramName | TypestringDescriptionRequired. The name of the loyalty program. |
| TierGroupName | TypestringDescriptionRequired. The name of the tier group. |
| TargetTierName | TypestringDescriptionRequired. The new tier to be associated with the loyalty program member. |

## Outputs

| Output | Details |
| --- | --- |
| LoyaltyProgramMemberId | TypeIDDescriptionID of the loyalty program member. |
| ProgramName | TypestringDescriptionThe name of the loyalty program. |
| TierGroupName | TypestringDescriptionThe name of the tier group. |
| TargetTierName | TypestringDescriptionThe new tier associated with the loyalty program. |

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
       "TierGroupName":"Default Tier Group",
       "ProgramName":"Rewards program",
       "TargetTierName":"Gold",
       "LoyaltyProgramMemberId": "0lcxx00006000001AAA",
       "ChangeReason":"Reason to change the tier"
   }]
}
```

```
{ 
   "actionName":"changeTierWhenNoErrors",
   "errors":null,
   "isSuccess":true,
   "outputValues":{ 
      "LoyaltyProgramMemberId":"0lcxx00006000001AAA",
      "TierGroupName":"Default Tier Group",
      "ProgramName": "Rewards program",
      "TargetTierName":"Gold",
   }
}
```
