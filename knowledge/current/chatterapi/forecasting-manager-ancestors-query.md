---
title: "Forecasting Manager Ancestors Query"
domain: chatterapi
topic: forecasting-manager-ancestors-query
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.447Z
estimatedTokens: 306
keywords: [Forecasting, Manager, Ancestors, Query, top, forecast, hierarchy]
---

# Forecasting Manager Ancestors Query

> Get the manager at the top of the forecast
    hierarchy.

# Forecasting Manager Ancestors Query

Get the manager at the top of the forecast hierarchy.

Requires Salesforce Forecasting.

If the context user is a forecast manager with the View All Forecasts or View All Data permission, this resource returns the manager at the top of the forecast hierarchy. If the hierarchy does not have a forecast manager assigned to every role with direct reports, this resource returns all managers who do not have a forecast manager above them. For all other users, this resource returns nothing.

Resource

```

```

Available version

36.0–43.0

In version 44.0 and later, use [Forecasting Manager Parents by User Role or Territory ID](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_forecasting_manager_parent_by_user_or_territory_id.htm#connect_resources_forecasting_manager_parent_by_user_or_territory_id "Get a list of managers or territories between the context user and a specified user or territory in the forecast hierarchy.").

HTTP methods

GET

Response body for GET

[Forecasting Manager Ancestors](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_forecasting_manager_ancestors.htm#connect_responses_forecasting_manager_ancestors "A list of forecast managers.")

## Code Examples

```
/connect/forecasting/manager-ancestors
```

## Related Topics

- Forecasting Manager Parents by User Role or Territory ID (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_forecasting_manager_parent_by_user_or_territory_id.htm)
- Forecasting Manager
              Ancestors (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_forecasting_manager_ancestors.htm)
