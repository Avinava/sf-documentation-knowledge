---
title: "Promotion Rule Configuration (GET, POST)"
domain: loyalty
topic: promotion-rule-configuration-get-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.174Z
estimatedTokens: 518
keywords: [Promotion, Rule, Configuration, POST, fetch, configiration, API, how, works, combining, eligibility, criteria, customers, rewards, logic]
---

# Promotion Rule Configuration (GET, POST)

> Create the rule configuration or fetch the rule configiration details for a given
    promotion ID. This API defines how a promotion works by combining eligibility criteria (what
    customers must di), rewards logic (what customers receive), target audience (who receives the
    reward), and template driven behavior. Each promotion can contain multiple rules, ordered by
    priority.

# Promotion Rule Configuration (GET, POST)

Create the rule configuration or fetch the rule configiration details for a given promotion ID. This API defines how a promotion works by combining eligibility criteria (what customers must di), rewards logic (what customers receive), target audience (who receives the reward), and template driven behavior. Each promotion can contain multiple rules, ordered by priority.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

GET POST

Response body for GET

[Template List Configuration](atlas.en-us.loyalty.meta/loyalty/connect_responses_template_list_configuration.htm "The output representation of the list template configuration")

Request body for POST

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| event​Configuration | Map<String, Object>[] | List of criteria that decides when customers are eligible for the rewards of the promotion rule. | Required | 60.0 |
| journalSubType | String | ID of the journal sub type. | Required when journalType is used | 60.0 |
| journalSub​TypeName | String | Name of the journal sub type. | Required when journalType is used | 64.0 |
| journalType | String | Name of the journal sub type. | Required for loyalty accrual or redemption templates | 60.0 |
| priority | Integer | Priority number of the rule in the promotion. | Required | 60.0 |
| promotionLimit | Integer | Milestone limit of the promotion. | Optional | 63.0 |
| reward​Configuration | Map<String, Object>[] | List of rewards that members get when their activity meets the rule's eligibility criteria. | Required | 60.0 |
| ruleName | String | Name of the promotion rule. | Required | 60.0 |
| templateName | String | Name of the promotion template that's used in a promotion rule. | Required | 60.0 |

Response body for POST

[Unified Promotion Templates](atlas.en-us.loyalty.meta/loyalty/connect_responses_unified_promotion_templates_output.htm "The output representation of the request to create a promotion.")

## Code Examples

```apex
/global-promotions-management/promotions/promotionId/rule-configuration
```

```apex
https://yourInstance.salesforce.com/services/data/v66.0/global-promotions-management/promotions/promotionId/rule-configuration
```

## Related Topics

- Template List Configuration (atlas.en-us.loyalty.meta/loyalty/connect_responses_template_list_configuration.htm)
- Unified Promotion Templates (atlas.en-us.loyalty.meta/loyalty/connect_responses_unified_promotion_templates_output.htm)
