---
title: "getPromotion"
domain: retail-api
topic: getpromotion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.967Z
estimatedTokens: 111
keywords: [getPromotion, requested, promotion, Input, Sample]
---

# getPromotion

> This method returns the requested fields for the given promotion ID.

# getPromotion

This method returns the requested fields for the given promotion ID.

## Input Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| promotionId | String | YES | ID of the promotion. |
| fields | List<String> | YES | List of fields for which the details are required. |

## Input Sample

```

```

## Response Sample

```

```

## Response Properties

A single object with the requested properties.

## Code Examples

```
"source": {
        "class": "CopyPromotionWizardCallable",
        "method": "getPromotion",
        "cache": false,
        "params": {
          "promotionId": "{! _input_.promotionId }",
          "fields": [
            "Id",
            "cgcloud__Slogan__c",
            "cgcloud__Placement_Date_From__c",
            "cgcloud__Anchor_Account__c",
            "cgcloud__Anchor_Account_Set__c",
            "cgcloud__Promotion_Template__r.cgcloud__Anchor_Type__c"
          ]
        }
      }
```

```
{
    "Id": : "a2a2X000004L7wPQAS",
    "cgcloud__Slogan__c": "TEST PROMOTION",
    "cgcloud__Placement_Date_From__c": "2024-01-01",
    "cgcloud__Anchor_Account__c": "0012X000023GAClQAO",
    "cgcloud__Anchor_Account_Set__c": null,
    "cgcloud__Promotion_Template__r.cgcloud__Anchor_Type__c": "Customer"
}
```
