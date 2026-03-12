---
title: "Forecasting My Forecasts"
domain: chatterapi
topic: forecasting-my-forecasts
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.009Z
estimatedTokens: 262
keywords: [Forecasting, Forecasts, user, territory, listed, dropdown, menu, search, results]
---

# Forecasting My Forecasts

> A forecasting user or territory listed in the dropdown menu or in
      search results on the forecasts page.

# Forecasting My Forecasts

A forecasting user or territory listed in the dropdown menu or in search results on the forecasts page.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| formattedLabel | String | For territory-based forecast types, the composite label of the user and the territory. For role-based forecast types, the user’s full name. | Big, 44.0 | 44.0 |
| territory2Id | String | For territory-based forecast types, the unique identifier of the territory attached to this profile. For role-based forecast types, this property is blank. | Small, 44.0 | 44.0 |
| territory2Name | String | For territory-based forecast types, the name of the territory attached to this profile. For role-based forecast types, this property is blank. | Small, 44.0 | 44.0 |
| userId | String | Unique identifier of the forecasting user. | Small, 44.0 | 44.0 |
| userRoleId | String | Unique identifier of the forecasting user’s role attached to this profile. | Small, 44.0 | 44.0 |
