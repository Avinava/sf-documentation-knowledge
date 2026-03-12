---
title: "getAccounts"
domain: retail-api
topic: getaccounts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.962Z
estimatedTokens: 150
keywords: [getAccounts, accounts, target, promotion, timeframe, calculated, difference, days, original, date, new, Input, Sample, derived, period, defined, input]
---

# getAccounts

> This method returns the list of accounts valid for the target promotion. Target promotion
  timeframe is calculated by the difference in days between the original promotion date and the new
  date.

# getAccounts

This method returns the list of accounts valid for the target promotion. Target promotion timeframe is calculated by the difference in days between the original promotion date and the new date.

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
    "method": "getAccounts",
    "cache": true,
    "params": {
        "promotionId": "{! promotionId }",
        "inStoreDateFrom": "{! promoDateFrom }"
    }
}
```

```
[
    {
        "Name": "*Kroger Atlanta",
        "Id": "0012X000023GAClQAO"
    },
    {
        "Name": "*Kroger Store #201",
        "Id": "0012X000023GACxQAO"
    },
    {
        "Name": "*Safeway South-East",
        "Id": "0012X000023GAC5QAO"
    },
    {
        "Name": "+Kroger Detroit",
        "Id": "0012X000023GACWQA4"
    }
]
```

```
"source": {
    "class": "DerivePromotionWizardCallable",
    "method": "getAccounts",
    "cache": true,
    "params": {
        "promotionId": "{! promotionId }",
        "inStoreDateFrom": "{! promoDateFrom }"
    }
}
```

```
{
    "class": "NewPromotionWizardCallable",
    "method": "getAccounts",
    "cache": true,
    "params": {
        "dateFrom": "{! promoDateFrom }",
        "dateThru": "{! promoDateThru }"
    }
}
```
