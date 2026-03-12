---
title: "Forecasting Manager Parents by User Role or Territory ID"
domain: chatterapi
topic: forecasting-manager-parents-by-user-role-or-territory-id
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.453Z
estimatedTokens: 349
keywords: [Forecasting, Manager, Parents, User, Role, Territory, managers, territories, context, forecast, hierarchy]
---

# Forecasting Manager Parents by User Role or Territory ID

> Get a list of managers or territories between the context user and a
      specified user or territory in the forecast hierarchy.

# Forecasting Manager Parents by User Role or Territory ID

Get a list of managers or territories between the context user and a specified user or territory in the forecast hierarchy.

Resource

```

```

Available version

44.0

In version 36.0–43.0, use [Forecasting Manager Ancestors Query](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_forecasting_manager_ancestors.htm#connect_resources_forecasting_manager_ancestors "Get the manager at the top of the forecast hierarchy.") and [Forecasting Manager Ancestors, Specific User](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_forecasting_manager_ancestors_specific_user.htm#connect_resources_forecasting_manager_ancestors_specific_user "Get a list of managers between the context user and a specified user.").

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| territory2Id | String | The unique identifier of the territory attached to this profile. | Required | 44.0 |
| userRoleId | String | The unique identifier of the forecasting user’s role attached to this profile. | Required | 44.0 |

Response body for GET

[Forecasting Ancestors](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_forecasting_ancestors.htm#connect_responses_forecasting_ancestors "A list of forecast managers or territories.")

## Code Examples

```
/connect/forecasting/ancestors/forecastingTypeId
```

## Related Topics

- Forecasting Manager Ancestors Query (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_forecasting_manager_ancestors.htm)
- Forecasting Manager Ancestors, Specific User (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_forecasting_manager_ancestors_specific_user.htm)
- Forecasting Ancestors (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_forecasting_ancestors.htm)
