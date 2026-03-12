---
title: "Promotion Configuration (GET)"
domain: loyalty
topic: promotion-configuration-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.158Z
estimatedTokens: 386
keywords: [Promotion, Configuration, View, including, definition, eligibility, criteria, rules, limits, rule, library, version, API, developers, system]
---

# Promotion Configuration (GET)

> View configuration of a promotion, including its definition, eligibility criteria, rules,
    limits, and related rule library version. The Promotion Configuration API enables developers and
    system integrators in your company to view the configuration of active promotions in your
    Salesforce org and export the configuration to external systems such as offline point-of-sale
    (POS) systems.

# Promotion Configuration (GET)

View configuration of a promotion, including its definition, eligibility criteria, rules, limits, and related rule library version. The Promotion Configuration API enables developers and system integrators in your company to view the configuration of active promotions in your Salesforce org and export the configuration to external systems such as offline point-of-sale (POS) systems.

## Special Access Rules

The Promotion Configuration API is only available in orgs where Global Promotions Management is available.

Resource

```

```

Resource example

```

```

Available version

61.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| promotionId | String | ID of the active promotion you want to view.The ID must belong to a promotion whose rules are configured using a non-Loyalty promotion template. | Required | 61.0 |
| relatedObjectAndFieldApiNames | String[] | The list of related object fields whose details you want to view for the promotion. To view the details of a field, specify the API name of the object that the field belongs to and the API name of the field, separated by a period. relatedObjectAndFieldApiNames can pass only one field per object. | Optional | 61.0 |

Response body for GET

[Promotion Configuration](atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_configuration.htm "Output representation of the promotion’s details and its configuration.")

## Code Examples

```apex
/global-promotions-management/promotions/promotionId/configuration
```

```apex
https://yourInstance.salesforce.com/services/data/v66.0/global-promotions-management/promotions/promotionId/configuration
```

## Related Topics

- Promotion
              Configuration (atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_configuration.htm)
