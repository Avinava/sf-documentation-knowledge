---
title: "Forecasting Manager Ancestors, Specific User"
domain: chatterapi
topic: forecasting-manager-ancestors-specific-user
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.450Z
estimatedTokens: 313
keywords: [Forecasting, Manager, Ancestors, Specific, User, managers, context]
---

# Forecasting Manager Ancestors, Specific User

> Get a list of managers between the context user and a specified
            user.

# Forecasting Manager Ancestors, Specific User

Get a list of managers between the context user and a specified user.

Requires Salesforce Forecasting.

The list of managers returned depends on the permissions of the context user.

| Context User’s Permissions | List of Managers Returned |
| --- | --- |
| Forecast user | Returns the list of managers between the specified user role and the context user. |
| Any user with View All Forecasts or View All Data | Returns the list of managers between the specified user role and the top of the forecast hierarchy. |

Resource

```

```

Available version

36.0–43.0

In version 44.0 and later, use [Forecasting Manager Parents by User Role or Territory ID](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_forecasting_manager_parent_by_user_or_territory_id.htm#connect_resources_forecasting_manager_parent_by_user_or_territory_id "Get a list of managers or territories between the context user and a specified user or territory in the forecast hierarchy.").

HTTP methods

GET

Response body for GET

[Forecasting Ancestors](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_forecasting_ancestors.htm#connect_responses_forecasting_ancestors "A list of forecast managers or territories.")

## Code Examples

```
/connect/forecasting/manager-ancestors/forecastingManagerUserRoleId
```

## Related Topics

- Forecasting Manager Parents by User Role or Territory ID (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_forecasting_manager_parent_by_user_or_territory_id.htm)
- Forecasting Ancestors (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_forecasting_ancestors.htm)
