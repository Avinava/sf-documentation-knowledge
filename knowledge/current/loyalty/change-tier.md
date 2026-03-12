---
title: "Change Tier"
domain: loyalty
topic: change-tier
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.935Z
estimatedTokens: 324
keywords: [Change, Tier, loyalty, program, member, REST, HTTP, Inputs, Outputs]
---

# Change Tier

> Change the tier for a specified loyalty program
  member.

# Change Tier

Change the tier for a specified loyalty program member.

This action is available in API version 51.0 and later for users with Loyalty Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/changeTier

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| ChangeReason | TypestringDescriptionThe reason for change in member tier. |
| LoyaltyProgramMemberId | TypeIDDescriptionRequired. ID of the loyalty program member. |
| ProgramName | TypestringDescriptionRequired. The loyalty program name associated with the tier. |
| TierGroupName | TypestringDescriptionRequired. The name of the tier group. |
| TargetTierName | TypestringDescriptionRequired. The new tier to be associated with the loyalty program member |

## Outputs

| Output | Details |
| --- | --- |
| LoyaltyProgramMemberId | TypestringDescriptionID of the loyalty program member. |
| ProgramName | TypestringDescriptionThe name of the loyalty program. |
| TargetTierName | TypestringDescriptionThe new tier associated with the loyalty program member. |
| TierGroupName | TypestringDescriptionThe name of the tier group. |

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
      "TierGroupName": "QualifyingGroup",
      "ProgramName": "baProgram",
      "TargetTierName": "Gold",
      "LoyaltyProgramMemberId": "0lcxx00006000001AAA",
      "ChangeReason": "Reason to change the tier"
   }]
}
```

```
{
   "errors":null,
   "isSuccess":true,
   "outputValues":{ 
        "LoyaltyprogramMemberId":."0lMxx0000A000001EAA",
        "TierGroupName":"QualifyingGroup",
        "ProgramName": "baProgram",
        "TargetTierName":"Gold"
   }
}
```
