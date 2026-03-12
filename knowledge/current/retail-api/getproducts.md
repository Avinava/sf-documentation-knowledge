---
title: "getProducts"
domain: retail-api
topic: getproducts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.997Z
estimatedTokens: 167
keywords: [getProducts, tactic, templates, input, promotion, template, Sample]
---

# getProducts

> This method returns the list of tactic templates related to the
      input promotion template.

# getProducts

This method returns the list of tactic templates related to the input promotion template.

## Input Parameters

| Name | Description |
| --- | --- |
| level | The product level to be retrieved. |
| dateFrom | Start date of the promotion. |
| dateThru | End date of the promotion. |
| promotionTemplate | ID of the promotion template. |
| accountOrAccountSet | Account or account set of the promotion. |

## Input Sample

```

```

## Response Sample

```

```

## Response Properties

This method returns a list of items with the following properties:

| Name | Description |
| --- | --- |
| Id | Product SFDC ID |
| Name | Product description value. |

## Code Examples

```
{
    "class": "NewPromotionWizardCallable",
    "method": "getProducts",
    "params": {  
        "level": "Brand",
        "dateFrom": "{! promoDateFrom }",
        "dateThru": "{! promoDateThru }",
        "promotionTemplate": "{! promoTemplate.Id }",
        "accountOrAccountSet": "{! if(promoTemplate.AnchorType, if(promoTemplate.AnchorType == 'CustomerSet', promoAnchorAccountSet.Id, promoAnchorAccount.Id), '') }"
    },
    "cache": true
}
```

```
[
    {
        "Id": "a2L2X00000Bw3MfUAJ",
        "Name": "Beverages Adv. Material"
    },
    {
        "Id": "a2L2X00000Bw3MqUAJ",
        "Name": "Big Pizza"
    },
    {
        "Id": "a2L2X00000Bw3MoUAJ",
        "Name": "Cakes"
    },
    {
        "Id": "a2L2X00000Bw3MeUAJ",
        "Name": "Caspro Adv. Material"
    }
]
```
