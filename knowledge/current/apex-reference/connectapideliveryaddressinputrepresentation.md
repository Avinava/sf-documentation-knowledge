---
title: "ConnectApi.DeliveryAddressInputRepresentation"
domain: apex-reference
topic: connectapideliveryaddressinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.773Z
estimatedTokens: 212
keywords: [ConnectApi.DeliveryAddressInputRepresentation, Delivery, address.]
---

# ConnectApi.DeliveryAddressInputRepresentation

> Delivery address.

# ConnectApi.DeliveryAddressInputRepresentation

Delivery address.

While each field is optional, at least one combination (latitude and longitude, country and postal code, or city, state, and country) must be included. The fields can't be left empty.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| city | String | City in the state for the delivery address. | Optional | 63.0 |
| country | String | Country code for the delivery address. | Optional | 63.0 |
| latitude | Double | Latitude for the delivery address. | Optional | 63.0 |
| longitude | Double | Longitude for the delivery address. | Optional | 63.0 |
| postalCode | String | Postal code of the delivery address. | Optional | 63.0 |
| state | String | State in the country for the delivery address. | Optional | 63.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
