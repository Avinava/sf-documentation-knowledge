---
title: "Commerce Management Webstore Search, Include Rules"
domain: chatterapi
topic: commerce-management-webstore-search-include-rules
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.055Z
estimatedTokens: 247
keywords: [Commerce, Management, Webstore, Search, Include, Rules, retrieve, configurable]
---

# Commerce Management Webstore Search, Include Rules

> Create or retrieve search include rules for a webstore. You can
      create up to 25 rules for a webstore. Search include rules are not configurable in the
      UI.

# Commerce Management Webstore Search, Include Rules

Create or retrieve search include rules for a webstore. You can create up to 25 rules for a webstore. Search include rules are not configurable in the UI.

Resource

```

```

Available version

58.0

HTTP methods

GET, PUT

Response body for GET

[Include Search Rules Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_result_rules_collection_output.htm "Collection of include search rules.")

Request body for PUT

Root XML tag

<searchResultsRules>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| searchResultsRules | Include Search Rule Input[] | A collection of include search rule inputs. | Required | 58.0 |

Response body for PUT

[Include Search Rules Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_result_rules_collection_output.htm "Collection of include search rules.")

## Code Examples

```
/commerce/management/webstores/webstoreId/search/results-rules
```

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

- Include Search Rules
              Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_result_rules_collection_output.htm)
- Include Search Rule Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_search_result_rule_input.htm)
