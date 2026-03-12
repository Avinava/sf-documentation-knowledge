---
title: "Include Search Rule Collection Input"
domain: chatterapi
topic: include-search-rule-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.801Z
estimatedTokens: 100
keywords: [Include, Search, Rule, Collection, Input, rules, webstore]
---

# Include Search Rule Collection Input

> Include search rules input collection information of a
    webstore.

# Include Search Rule Collection Input

Include search rules input collection information of a webstore.

Root XML tag

<searchResultsRules>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| searchResultsRules | Include Search Rule Input[] | A collection of include search rule inputs. | Required | 58.0 |

## Code Examples

```
{
  "searchResultsRules" : [
    {
      "type" : "Include",
      "ruleDefinition" : ["decaffeinated", "decaf"],
      "locales" : ["en_US"]
    },
    {
      "type" : "Include",
      "ruleDefinition" : ["dog", "puppy"],
      "locales" : ["en_US"]
    },
    {
      "type" : "Include",
      "ruleDefinition" : ["wintercoat", "jacket", "coat"],
      "locales" : ["en_US"]
    }
  ]
}
```

## Related Topics

- Include Search Rule Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_search_result_rule_input.htm)
