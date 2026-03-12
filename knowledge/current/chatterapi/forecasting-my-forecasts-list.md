---
title: "Forecasting My Forecasts List"
domain: chatterapi
topic: forecasting-my-forecasts-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.455Z
estimatedTokens: 240
keywords: [Forecasting, Forecasts, appropriate, user’s, dropdown, menu]
---

# Forecasting My Forecasts List

> Get the appropriate list of forecasts for a given user’s dropdown
      menu on the forecasts page.

# Forecasting My Forecasts List

Get the appropriate list of forecasts for a given user’s dropdown menu on the forecasts page.

Resource

```

```

Available version

44.0

HTTP methods

GET

Response body for GET

[Forecasting My Forecasts Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_forecasting_my_forecasts_collection.htm "A collection of forecasting users or territories listed in the dropdown menu or in search results on the forecasts page.")

Usage

For the default case, only forecastingTypeId is passed in as a parameter. The appropriate lists are populated in MyForecastsCollection based on the forecastingTypeId that is passed in. For example, if a context user who does not have the View All Forecasts permission and does not have any forecasts shared with them passes in a territory-based forecastingTypeId, the forecastManagerList and representativeList are populated but the viewAllForecastsList and sharedList are not.

## Code Examples

```
/connect/forecasting/my-forecasts-list/forecastingTypeId
```

## Related Topics

- Forecasting My Forecasts Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_forecasting_my_forecasts_collection.htm)
