---
title: "Composite Promotion Translation Input"
domain: chatterapi
topic: composite-promotion-translation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.631Z
estimatedTokens: 128
keywords: [Composite, Promotion, Translation, Input, representation]
---

# Composite Promotion Translation Input

> Input representation of the promotion translation.

# Composite Promotion Translation Input

Input representation of the promotion translation.

JSON example

Here’s an example for the displayName field:

```

```

Here’s an example for the termsAndCondition field:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| translations | Map<String, String> | Map of language code to the translated value. | Optional | 62.0 |
| value | String | Value to be translated. | Optional | 62.0 |

## Code Examples

```
{
   "translations": {},
   "value": "Fall Promotion"
}
```

```
{
   "translations": {},
   "value": "This is fall promotion.Get 10% off on Product &#39;Alpine Energy Drink Chai Post 0.5L PET - 6 pack."
}
```
