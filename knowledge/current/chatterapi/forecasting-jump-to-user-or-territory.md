---
title: "Forecasting Jump-To-User-Or-Territory"
domain: chatterapi
topic: forecasting-jump-to-user-or-territory
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.443Z
estimatedTokens: 398
keywords: [Forecasting, Jump-To-User-Or-Territory, users, territories, whose, forecasts, context, user, access, view]
---

# Forecasting Jump-To-User-Or-Territory

> Get a list of users and territories whose forecasts the context user
      has access to view.

# Forecasting Jump-To-User-Or-Territory

Get a list of users and territories whose forecasts the context user has access to view.

Resource

```

```

Available version

44.0

In versions 36.0–43.0, use [Forecasting Jump-To-User](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_forecasting_jump_to.htm#connect_resources_forecasting_jump_to "For Salesforce Forecasting, returns a list of users whose forecasts the context user has access to view. The method compares a search string to available users’ first and last names. This functionality is analogous to using Jump To on the Forecasts page.").

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| nameStartsWith | String | The first few letters of the user’s or territory’s name. The system compares the string and returns entries that match any of the following.The first name and last name of all users that the context user has access toThe names of all territories that the context user has access toTyping one or two letters returns a list of users only. Typing three or more letters returns a list of users and territories. For best results, start typing a territory name, and then select a user’s name from the results. | Required | 44.0 |

Response body for GET

[Forecasting User Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_forecasting_user_collection.htm#connect_responses_forecasting_user_collection "A collection of forecasting users whose forecasts the context user can view.")

## Code Examples

```
/connect/forecasting/jump-to-user/forecastingTypeId
```

## Related Topics

- Forecasting Jump-To-User (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_forecasting_jump_to.htm)
- Forecasting User Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_forecasting_user_collection.htm)
