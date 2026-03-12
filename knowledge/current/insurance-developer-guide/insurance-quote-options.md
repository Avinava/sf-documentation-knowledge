---
title: "Insurance Quote Options"
domain: insurance-developer-guide
topic: insurance-quote-options
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.761Z
estimatedTokens: 107
keywords: [Insurance, Quote, Options, Input, representation]
---

# Insurance Quote Options

> Input representation of insurance quote options.

# Insurance Quote Options

Input representation of insurance quote options.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| productSellingModel | String | Determines the pricebookId for the products. | Required | 63.0 |
| saveQuote | Boolean | Indicates whether to save insurance quote or only generate context. | Required | 63.0 |

## Code Examples

```
options: {
    "saveQuote": true,
    "productSellingModel": "One Time"
  }
```
