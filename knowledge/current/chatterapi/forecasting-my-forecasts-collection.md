---
title: "Forecasting My Forecasts Collection"
domain: chatterapi
topic: forecasting-my-forecasts-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.013Z
estimatedTokens: 395
keywords: [Forecasting, Forecasts, Collection, users, territories, listed, dropdown, menu, search, results]
---

# Forecasting My Forecasts Collection

> A collection of forecasting users or territories listed in the
      dropdown menu or in search results on the forecasts page.

# Forecasting My Forecasts Collection

A collection of forecasting users or territories listed in the dropdown menu or in search results on the forecasts page.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| forecastManagerList | Forecasting My Forecasts[] | For territory-based forecast types, a list of territories that the context user is a forecast manager of. For role-based forecast types, the context user, if the context user is a forecast manager in the role hierarchy. | Big, 44.0 | 44.0 |
| representativeList | Forecasting My Forecasts[] | For territory-based forecast types, a list of territories that the context user is assigned to but that have no forecast manager. For role-based forecast types, the context user, if the context user is part of the role hierarchy and not a forecast manager. | Big, 44.0 | 44.0 |
| sharedList | Forecasting My Forecasts[] | List of users that have shared their forecasts with the context user. null for territory-based forecast types.NoteSharing isn’t available for territory-based forecast types, so this property is null for territory-based forecast types. | Big, 44.0 | 44.0 |
| url | String | URL endpoint that was accessed. | Small, 44.0 | 44.0 |
| viewAllForecastsList | Forecasting My Forecasts[] | For territory-based forecast types, a list of territories and their respective forecast managers at the top level of the territory hierarchy. For role-based forecast types, a list of users at the top level of the role hierarchy. | Big, 44.0 | 44.0 |

## Related Topics

- Forecasting My Forecasts (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_forecasting_my_forecasts.htm)
