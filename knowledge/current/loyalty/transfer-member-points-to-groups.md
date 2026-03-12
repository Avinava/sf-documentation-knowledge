---
title: "Transfer Member Points to Groups"
domain: loyalty
topic: transfer-member-points-to-groups
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.045Z
estimatedTokens: 253
keywords: [Transfer, Member, Points, Groups, Transfers, Individual, Corporate, members’, contributions, associated, REST, HTTP, Inputs]
---

# Transfer Member Points to Groups

> Transfers Individual or Corporate type members’ points contributions to
   the members’ associated groups.

# Transfer Member Points to Groups

Transfers Individual or Corporate type members’ points contributions to the members’ associated groups.

For more information about this action, see [Transfer Member Points to Groups](https://help.salesforce.com/articleView?id=loyalty_member_group_action.htm&language=en_US) in Salesforce Help.

This action is available in API version 53.0 and later for users with Loyalty Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/transferMemberPointsToGroups

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| JournalId | TypeIDDescriptionRequired. The transaction journal from which points must be transferred to groups. The transaction journal must be associated to either an Individual or a Corporate type member. The points are transferred to the member’s associated groups. |

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
  "inputs": [
    {
      "JournalId":"0lMxx0000A000001EAA"
    }
  ]
}
```

```
{ 
      "actionName":"transferMemberPointsToGroups",
      "errors":null,
      "isSuccess":true
   }
}
```
