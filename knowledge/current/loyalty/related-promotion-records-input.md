---
title: "Related Promotion Records Input"
domain: loyalty
topic: related-promotion-records-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.998Z
estimatedTokens: 170
keywords: [Promotion, Records, Input, representation, decides, cloned, associated, new]
---

# Related Promotion Records Input

> Input representation that decides which related records and fields of the existing promotion are cloned and associated with the new promotion.

# Related Promotion Records Input

Input representation that decides which related records and fields of the existing promotion are cloned and associated with the new promotion.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| relatedObject​ApiName | String | API name of the promotion's related object whose records associated with the existing promotion must be cloned for the new promotion. | Small, 61.0 | 61.0 |
| relatedObject​PromotionFieldName | String | The name of the Promotion field in the related object whose record has to be cloned and associated with the new promotion. | Small, 61.0 | 61.0 |
