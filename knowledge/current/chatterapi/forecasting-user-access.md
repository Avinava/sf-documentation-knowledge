---
title: "Forecasting User Access"
domain: chatterapi
topic: forecasting-user-access
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.437Z
estimatedTokens: 251
keywords: [Forecasting, User, Access, whether, context, view, user’s, forecast, another]
---

# Forecasting User Access

> Indicates whether the context user has access to view a specified
      user’s forecast.

# Forecasting User Access

Indicates whether the context user has access to view a specified user’s forecast.

Requires Salesforce Forecasting.

Resource

```

```

Available version

36.0–42.0

In version 43.0 and later, use [Forecasting User Access by Forecasting Type](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_forecasting_user_access_by_forecasting_type.htm "Get information about the context user’s access to the user to which you need access.").

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| user | String | The ID of the user whose forecast the context user is trying to view. | Required | 36.0 |

Response body for GET

[Forecasting User Access Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_forecasting_user_access_collection.htm#connect_responses_forecasting_user_access_collection "A collection of forecast user access representations.")

## Code Examples

```
/connect/forecasting/user-access
```

## Related Topics

- Forecasting User Access by Forecasting Type (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_forecasting_user_access_by_forecasting_type.htm)
- Forecasting User
              Access Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_forecasting_user_access_collection.htm)
- Forecasting User Access Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_forecasting_user_access_collection.htm)
