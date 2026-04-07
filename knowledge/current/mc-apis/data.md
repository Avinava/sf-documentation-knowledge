---
title: "Data"
domain: mc-apis
topic: data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:16.368Z
estimatedTokens: 416
keywords: [lets, store, additional, channel, asset, channel's, parser, manipulates, properly, namespaced, under, sure, pass, API, Sample, Items]
---

> Data lets you store additional information for a channel in the asset, to be used by the channel's parser, or some UI that manipulates the asset for the channel. If using data, store properly namespaced custom fields under the channel name. If data is returned, be sure to pass it through the API.

# Data

Data lets you store additional information for a channel in the asset, to be used by the channel's parser, or some UI that manipulates the asset for the channel. If using data, store properly namespaced custom fields under the channel name. If data is returned, be sure to pass it through the API.

Add data to the asset as an object, under the data attribute. Store channel-specific attributes under their channel name inside of data. For example, the email channel needs additional information.

## Sample Asset with Data

```json
{
    "name": "NTO Welcome Series Email",
    "channels": {
        "email": true,
        "web": false
    },
    "assetType": {
        "name": "templatebasedemail",
        "id": 207
    },
    "data": {
        "email": {
            "attributes": [{
                    "DisplayName": "sample_attribute",
                    "Name": "__AdditionalEmailAttribute1",
                    "Value": "your_tracking",
                    "Order": 1,
                    "Channel": "email",
                    "AttributeType": "AdditionalEmailAttribute"
                },
                {
                    "DisplayName": "utm_medium",
                    "Name": "__AdditionalEmailAttribute2",
                    "Value": "salesforce",
                    "Order": 2,
                    "Channel": "email",
                    "AttributeType": "AdditionalEmailAttribute"
                }
            ]
        }
    }
}
```

## Related Items

-   [Asset Model](atlas.en-us.noversion.mc-apis.meta/mc-apis/asset-model.htm)
-   [Asset Model Example](atlas.en-us.noversion.mc-apis.meta/mc-apis/asset_model_examples.htm)

## Related Topics

- Asset Model (atlas.en-us.noversion.mc-apis.meta/mc-apis/asset-model.htm)
- Asset Model Example (atlas.en-us.noversion.mc-apis.meta/mc-apis/asset_model_examples.htm)
