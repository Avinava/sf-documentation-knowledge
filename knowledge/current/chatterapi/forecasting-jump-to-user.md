---
title: "Forecasting Jump-To-User"
domain: chatterapi
topic: forecasting-jump-to-user
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.440Z
estimatedTokens: 368
keywords: [Forecasting, Jump-To-User, Salesforce, users, whose, forecasts, context, user, access, view, compares, search, users’, functionality, analogous]
---

# Forecasting Jump-To-User

> For Salesforce Forecasting, returns a list of users whose forecasts
      the context user has access to view. The method compares a search string to available users’
      first and last names. This functionality is analogous to using Jump To on the Forecasts
      page.

# Forecasting Jump-To-User

For Salesforce Forecasting, returns a list of users whose forecasts the context user has access to view. The method compares a search string to available users’ first and last names. This functionality is analogous to using **Jump To** on the Forecasts page.

Requires Salesforce Forecasting. Forecast managers and users with the View All Forecasts permission can access other user’s forecasts.

Resource

```

```

Available version

36.0–43.0

In version 44.0 and later, use [Forecasting Jump-To-User-Or-Territory](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_forecasting_jump_to_user_or_territory.htm#connect_resources_forecasting_jump_to_user_or_territory "Get a list of users and territories whose forecasts the context user has access to view.").

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| nameStartsWith | String | The first few letters of the user’s name. The system compares the string to both the first name and last name of all users the context user has access to and returns any entries that match either. | Required | 36.0 |

Response body for GET

[Forecasting User Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_forecasting_user_collection.htm#connect_responses_forecasting_user_collection "A collection of forecasting users whose forecasts the context user can view.")

## Code Examples

```
/connect/forecasting/jump-to-user
```

## Related Topics

- Forecasting Jump-To-User-Or-Territory (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_forecasting_jump_to_user_or_territory.htm)
- Forecasting User Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_forecasting_user_collection.htm)
