---
title: "Get Tier"
domain: loyalty
topic: get-tier
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.989Z
estimatedTokens: 289
keywords: [Tier, Retrieve, current, loyalty, program, member, REST, HTTP, Inputs, Outputs]
---

# Get Tier

> Retrieve the current tier for a specified loyalty program
  member.

# Get Tier

Retrieve the current tier for a specified loyalty program member.

This action is available in API version 51.0 and later for users with Loyalty Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/getTier

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| LoyaltyProgramMemberId | TypestringDescriptionRequired. ID of the loyalty program member to whom the tier details needs to be fetched. |
| ProgramName | TypestringDescriptionRequired. The loyalty program name associated with the tier. |
| TierGroupName | TypestringDescriptionRequired. The name of the tier group. |

## Outputs

| Output | Details |
| --- | --- |
| LoyaltyProgramMemberId | TypestringDescriptionThe ID of the loyalty program member. |
| SequenceNumber | TypeintegerDescriptionThe ranking of the tier. |
| TierGroupName | TypestringDescriptionThe name of the tier group. |
| TierName | TypestringDescriptionThe name of the loyalty tier associated with the program member. |

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
      "TierGroupName":"QualifyingGroup",
      "ProgramName":"baLoyalty",
      "LoyaltyProgramMemberId":"0lcxx00004000001AAA"
   }]
}
```

```
{
   "errors":null,
   "isSuccess":true,
   "outputValues":{ 
        "LoyaltyProgramMemberId":"0lMxx0000A000001EAA",
        "TierGroupName":"QualifyingGroup"
        "TierName":"Gold",
        "ProgramName":"baLoyalty",
        "SequenceNumber":4
   }
}
```
