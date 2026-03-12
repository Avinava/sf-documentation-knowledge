---
title: "Composite Product"
domain: chatterapi
topic: composite-product
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.900Z
estimatedTokens: 181
keywords: [Composite, Product, Representation, upsert]
---

# Composite Product

> Representation of the composite product create or upsert request.

# Composite Product

Representation of the composite product create or upsert request.

JSON example

Here’s an example if the request is successful:

```

```

Here's an example if the request has errors:

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response[] | The list of errors that were returned, including the error code and error message. | Small, 61.0 | 61.0 |
| productId | String | The Salesforce ID of the product record created after the request was successful. | Small, 61.0 | 61.0 |
| success | Boolean | Indicates whether the product was successfully created (true) or not (false). | Small, 61.0 | 61.0 |

## Code Examples

```
{
  "productId": "generatedProductId123",
  "success": true,
  "error": []
}
```

```
{
  "productId": null,
  "success": false,
  "errors": [
    {
      "errorCode": "Invalid_Input",
      "message": "Failed to create/update the product"
    },
    {
      "errorCode": "Invalid_Input",
      "message": "Failed to create/update the price"
    }
  ]
}
```
