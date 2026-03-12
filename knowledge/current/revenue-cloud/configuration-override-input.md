---
title: "Configuration Override Input"
domain: revenue-cloud
topic: configuration-override-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.815Z
estimatedTokens: 406
keywords: [Configuration, Override, Input, representation, Pricing, API]
---

# Configuration Override Input

> Input representation of the details to override for a Pricing API
    configuration.

# Configuration Override Input

Input representation of the details to override for a Pricing API configuration.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| discovery​Procedure | String | Name of the discovery procedure to use to fetch the details of assets. | Optional | 61.0 |
| display​Context | Boolean | Indicates whether the context structure for pricing must be displayed (true) or not (false). | Optional | 61.0 |
| isHighVolume​LineItems | Boolean | Indicates whether the pricing API returns pricing details for more than 100 line items (true) or not (false). | Optional | 63.0 |
| persist​Context | Boolean | Indicates whether the context must be persisted as per the mapping (true) or not (false). | Optional | 60.0 |
| reference​Key | String | Reference ID that a consuming workstream provides in the API to search for specific logs in the Pricing Operations Console. | Optional | 63.0 |
| skip​Discovery | Boolean | Indicates whether the discovery procedure must be skipped (true) or not (false). | Optional | 61.0 |
| skip​Waterfall | Boolean | Indicates whether the price waterfall must be skipped in the output response (true) or not (false). | Optional | 60.0 |
| tagged​Data | Boolean | Indicates whether the JSON data string can specify tags in the input instead of attributes (true) or not (false). | Optional | 60.0 |
| useSession​Scoped​Context | Boolean | Indicates whether a session scoped context must be created (true) or request scoped context (false). The default is false. | Optional | 60.0 |

## Code Examples

```
"configurationOverrides": {
         "skipWaterfall": true,
         "useSessionScopedContext": true,
         "persistContext": true,
         "referenceKey": "referenceKey-12345",
         "displayContext" : false,
         "taggedData": false,
         "isHighVolumeLineItems": false
    }
```
