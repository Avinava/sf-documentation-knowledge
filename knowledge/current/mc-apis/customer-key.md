---
title: "Customer Key"
domain: mc-apis
topic: customer-key
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:21.205Z
estimatedTokens: 214
keywords: [Customer, Key, keys, allow, identify, search, asset, data, known, unique, across, enterprise, typically, stored, database]
---

# Customer Key

> Customer keys allow you to identify and search for an asset by a data value known only by you. A customer key is a unique value across your enterprise that is typically stored in your database. The customer key is not a required field, and if you don't provide a value, a unique GUID will be created 

# Customer Key

Customer keys allow you to identify and search for an asset by a data value known only by you. A customer key is a unique value across your enterprise that is typically stored in your database. The customer key is not a required field, and if you don't provide a value, a unique GUID will be created for you.

Add a customer key to the asset as a string with a 36-character limit, using the customerKey attribute.

## Sample Asset with Customer Key

```json
{
    "name": "NTO Welcome Series Email",
    "assetType": {
        "id": 207,
        "name": "templatebasedemail"
    },
    "customerKey": "090c69e7-59ac-4286-8733-f8f7613ab470"
}
```

## Related Items

-   [Asset Model](atlas.en-us.noversion.mc-apis.meta/mc-apis/asset-model.htm)
-   [Asset Model Example](atlas.en-us.noversion.mc-apis.meta/mc-apis/asset_model_examples.htm)

## Related Topics

- Asset Model (atlas.en-us.noversion.mc-apis.meta/mc-apis/asset-model.htm)
- Asset Model Example (atlas.en-us.noversion.mc-apis.meta/mc-apis/asset_model_examples.htm)
