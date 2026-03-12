---
title: "Process Member Benefit"
domain: loyalty
topic: process-member-benefit
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.032Z
estimatedTokens: 157
keywords: [Process, Member, Benefit, action, associated, assigned, loyalty, program, REST, HTTP, Inputs]
---

# Process Member Benefit

> Process the benefit action associated with the benefit that is assigned
   to a loyalty program member.

# Process Member Benefit

Process the benefit action associated with the benefit that is assigned to a loyalty program member.

This action is available in API version 51.0 and later for users with Loyalty Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/processMemberBenefitAction

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| MemberBenefitId | TypeIDDescriptionRequired. ID of the member associated with the benefit. |

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
      "MemberBenefitId":"0lMxx0000A000001EAA"
   }]
}
```

```
{
   "actionName":"executeMemberBenefit",
   "errors":null,
   "isSuccess":true,
}
```
