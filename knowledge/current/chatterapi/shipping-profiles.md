---
title: "Shipping Profiles"
domain: chatterapi
topic: shipping-profiles
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.598Z
estimatedTokens: 122
keywords: [Shipping, Profiles, Retrieve, native, webstore]
---

# Shipping Profiles

> Retrieve a list of native shipping profiles for a webstore.

# Shipping Profiles

Retrieve a list of native shipping profiles for a webstore.

Currently, this API returns only one shipping profile, which is the default shipping profile of a webstore.

Resource

```

```

Resource example

```

```

Available version

62.0

HTTP methods

GET

Response body for GET

[Shipping Profile Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_shipping_profile_collection.htm "Output representation of the shipping profile collection.")

## Code Examples

```
/commerce/webstores/webstoreId/shipping-profiles
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/webstores/0ZESG000001E9aj4AC/shipping-profiles
```

## Related Topics

- Shipping Profile Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_shipping_profile_collection.htm)
