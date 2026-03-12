---
title: "Forecasting User Access by Forecasting Type"
domain: chatterapi
topic: forecasting-user-access-by-forecasting-type
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.463Z
estimatedTokens: 265
keywords: [Forecasting, User, Access, context, user’s]
---

# Forecasting User Access by Forecasting Type

> Get information about the context user’s access to the user to which
      you need access.

# Forecasting User Access by Forecasting Type

Get information about the context user’s access to the user to which you need access.

Resource

```

```

Available version

43.0.

In version 36.0–42.0, use [Forecasting User Access](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_forecasting_is_shared_or_subordinate.htm "Indicates whether the context user has access to view a specified user’s forecast.").

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| territory2Id | Id | ID of the territory that we’re trying to determine whether a user can access. | Optional | 43.0 |
| user | Id | ID of the user for which we’re trying to retrieve access. | Optional | 43.0 |

Response body for GET

[Forecasting User Access Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_forecasting_user_access_collection.htm#connect_responses_forecasting_user_access_collection "A collection of forecast user access representations.")

## Code Examples

```
/connect/forecasting/user-access/userId/forecastingTypeId
```

## Related Topics

- Forecasting User Access (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_forecasting_is_shared_or_subordinate.htm)
- Forecasting User Access Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_forecasting_user_access_collection.htm)
