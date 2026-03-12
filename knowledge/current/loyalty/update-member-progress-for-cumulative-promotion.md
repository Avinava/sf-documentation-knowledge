---
title: "Update Member Progress for Cumulative Promotion"
domain: loyalty
topic: update-member-progress-for-cumulative-promotion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.064Z
estimatedTokens: 546
keywords: [Member, Progress, Cumulative, Promotion, made, loyalty, program, towards, attaining, action, creates, record, isn't, associated, REST]
---

# Update Member Progress for Cumulative Promotion

> Update the progress made by a loyalty program member towards attaining
   a Cumulative type promotion. The action creates a Loyalty Program Member Promotion record if the
   promotion isn't associated with the member.

# Update Member Progress for Cumulative Promotion

Update the progress made by a loyalty program member towards attaining a Cumulative type promotion. The action creates a Loyalty Program Member Promotion record if the promotion isn't associated with the member.

For more information about this action, see [Update the Member's Progress Towards Attaining a Cumulative Promotion](https://help.salesforce.com/articleView?id=loyalty_promotion_action_cumulative.htm&language=en_US) in Salesforce Help.

This action is available in API version 53.0 and later for users in orgs where either B2C - Loyalty, B2C - Loyalty Plus, Loyalty Management - Growth, or Loyalty Management - Advanced license is enabled.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/updateProgressForCumulativePromotionUsage

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| loyaltyProgramMemberId | TypeIDDescriptionRequired. ID of the loyalty program member who progress towards attaining a cumulative promotion must be updated. |
| promotionId | TypeIDDescriptionRequired. ID of the Cumulative type promotion for which member's progress must be updated. |
| usageIncrementForCumulativePromotion | TypeintegerDescriptionRequired. The value or quantity that must be added to member's usage towards attaining the promotion.For example, if the target of a promotion is 10 units and the member has previously purchased 1 unit. Now the member has purchased 4 units. In this scenario, the input must be 4 and not 5 (1+4). |

## Outputs

| Output | Details |
| --- | --- |
| cumulativeUsageTarget | TypeintegerDescriptionThe target value or quantity which members must achieve to attain the promotion. |
| updatedCumulativeUsageCompleted | TypeintegerDescriptionThe updated value or quantity by which the member has progressed towards attaining the promotion.For example, if the target of a promotion is 10 units and the member has previously purchased 1 unit. Now the member has purchased 4 units. In this scenario, the output is 5. |

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
"inputs" : [
     {
"loyaltyProgramMemberId" : "0lMRxx0000006MfMAI",
"promotionId": "0c8xx00000002MqIAI",
"usageIncrementForCumulativePromotion": 4
   }
]
}
```

```
[ {
  "actionName" : "updateProgressForCumulativePromotionUsage",
  "errors" : null,
  "isSuccess" : true,
  "outputValues" : {
    "cumulativeUsageTarget" : 10,
    "updatedCumulativeUsageCompleted" : 5
  }
} ]
```
