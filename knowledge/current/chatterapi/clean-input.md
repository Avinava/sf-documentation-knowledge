---
title: "Clean Input"
domain: chatterapi
topic: clean-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.293Z
estimatedTokens: 283
keywords: [Clean, Input, data, integration, rule, records]
---

# Clean Input

> Defines a data integration rule, its type, and the records to
      update.

# Clean Input

Defines a data integration rule, its type, and the records to update.

Root XML tag

<CleanInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cleanRuleId | String | The 18-character ID of the data integration rule used to update records. Get the IDs for active rules from the Clean Rule Statuses resource. | Required | 37.0 |
| cleanType | String | The system-generated type of update operation used by the data integration rule. One of these values:BulkClean—Updates all existing records applicable to the specified data integration rule.Incremental—Updates only records that do not have a status of In Sync or Reviewed.Manual—Manually updates records with the specified data integration rule.Perpetual—Automatically updates saved records with the specified data integration rule. | Optional | 37.0 |
| entityIds | String[] | The 18-character IDs of the records to update using the data integration rule. | Required | 37.0 |
| requestId | String | The system-generated ID of the update request. | Optional | 37.0 |

## Code Examples

```
{ 
"cleanType":"bulk"
"cleanRuleId":"07ixx000000000U"
"requestId":"0Ysxx0000000004"
"entityIds":["003xx000004TnDu", .... ] 
}
```

## Related Topics

- Clean Rule Statuses (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_clean_rules_status.htm)
