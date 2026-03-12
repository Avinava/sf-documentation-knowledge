---
title: "getAccountSets"
domain: retail-api
topic: getaccountsets
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.965Z
estimatedTokens: 152
keywords: [getAccountSets, account, target, promotion, timeframe, calculated, difference, days, original, date, new, Input, Sample, period, defined, input]
---

# getAccountSets

> This method returns the list of account sets valid for the target promotion. Target
  promotion timeframe is calculated by the difference in days between the original promotion date
  and the new date.

# getAccountSets

This method returns the list of account sets valid for the target promotion. Target promotion timeframe is calculated by the difference in days between the original promotion date and the new date.

## Input Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| promotionId | String | YES | ID of the promotion. |
| inStoreDateFrom | String | YES | New start date of the promotion. |

## Input Sample

```

```

## Response Sample

```

```

## Response Properties

| Name | Description |
| --- | --- |
| Id | ID of the Account. |
| Name | Name of the Account. |

## Code Examples

```
"source": {
    "class": "CopyPromotionWizardCallable",
    "method": "getAccountSets",
    "cache": true,
    "params": {
        "promotionId": "{! promotionId }",
        "inStoreDateFrom": "{! promoDateFrom }"
    }
}
```

```
[[
    {
        "Name": "Prio A customers in Area 47*",
        "Id": "a0G2X00002jffpwUAA"
    },
    {
        "Name": "seg15feb2021",
        "Id": "a0G7R00002n1zzoUAA"
    },
    {
        "Name": "South",
        "Id": "a0G2X00002jffpzUAA"
    }
]
```

```
{
    "class": "NewPromotionWizardCallable",
    "method": "getAccountSets",
    "cache": true,
    "params": {
        "dateFrom": "{! promoDateFrom }",
        "dateThru": "{! promoDateThru }"
    }
}
```

```
[
    {
        "Name": "Prio A customers in Area 47*",
        "Id": "a0G2X00002jffpwUAA"
    },
    {
        "Name": "seg15feb2021",
        "Id": "a0G7R00002n1zzoUAA"
    },
    {
        "Name": "South",
        "Id": "a0G2X00002jffpzUAA"
    }
]
```
