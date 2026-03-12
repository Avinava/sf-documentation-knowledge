---
title: "Include Search Rule Input"
domain: chatterapi
topic: include-search-rule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.798Z
estimatedTokens: 181
keywords: [Include, Search, Rule, Input]
---

# Include Search Rule Input

> Include search rule input.

# Include Search Rule Input

Include search rule input.

Root XML tag

<searchResultsRules>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| type | String | Type of search rule. Value is:Include—When a term in a query matches any term in a ruleDefinition, Commerce Search returns results for all terms in the list. | Required | 58.0 |
| ruleDefinition | String | Comma-separated list of terms that the include search rule applies to. Valid number of unique strings is from 2 through 5. | Required | 58.0 |
| locales | String | Comma-separated list of up to 10 locales that the include search rule applies to. | Required | 58.0 |

## Code Examples

```
{
  "type" : "Include",
  "ruleDefinition" : ["decaffeinated", "decaf"],
  "locales" : ["en_US"]
}
```
