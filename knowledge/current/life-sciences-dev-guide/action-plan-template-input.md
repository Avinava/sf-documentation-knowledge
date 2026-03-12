---
title: "Action Plan Template Input"
domain: life-sciences-dev-guide
topic: action-plan-template-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.055Z
estimatedTokens: 109
keywords: [Action, Plan, Template, Input, representation]
---

# Action Plan Template Input

> Input representation of an action plan template.

# Action Plan Template Input

Input representation of an action plan template.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| templateId | String | ID of an action plan template. | Optional | 55.0 |
| templateItemFilters | Action Plan Template Item Filters Input[] | Details of the action plan template item filters. | Optional | 55.0 |

## Code Examples

```
"actionPlanTemplate": {
  "templateId": "0PTxx0000004C92GAE",
  "templateItemFilters": [
    {
      "templateItemId": "0PJxx0000004C92GAE"
    }
  ]
}
```

## Related Topics

- Action Plan Template Item Filters Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_action_plan_template_item_filters.htm)
