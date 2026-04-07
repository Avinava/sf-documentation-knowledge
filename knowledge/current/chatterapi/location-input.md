---
title: "Location Input"
domain: chatterapi
topic: location-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:22.083Z
estimatedTokens: 117
keywords: [Location, Input, Inventory, data, calculate, shipping, distance]
---

# Location Input

> Inventory location data used to calculate shipping
    distance.

# Location Input

Inventory location data used to calculate shipping distance.

Root XML tag

<locationInput>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| countryCode | String | The country code of the location. | Required | 51.0 |
| locationIdentifier | String | The identifier of the location. | Required | 51.0 |
| postalCode | String | The postal code of the location. | Required | 51.0 |
