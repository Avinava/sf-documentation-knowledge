---
title: "CSRBaseItemFormat"
domain: media-developer-guide
topic: csrbaseitemformat
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.990Z
estimatedTokens: 115
keywords: [CSRBaseItemFormat, Omnistudio, Data, Mapper, transforms, getCartItem, gives, items, cart, Sample, Input, Output]
---

# CSRBaseItemFormat

> This Omnistudio Data Mapper transforms the getCartItem
    response and gives the details of the items in the cart.

# CSRBaseItemFormat

This Omnistudio Data Mapper transforms the getCartItem response and gives the details of the items in the cart.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| messages | Required |
| records | Required |

## Sample Output

```

```

## Called By

-   Workflow: Agent console Change Base Package
    -   Omniscript: vpls360csrChangeBasePackage
        -   Integration Procedure: VPL360\_CsrBasePackPosttocart

## Code Examples

```
{
  "messages": [],
  "records": [
    {
      "exp_media__Action__c": {
        "actions": {},
        "alternateValues": null,
        "dataType": "PICKLIST",
        "editable": true,
        "fieldName": "exp_media__Action__c",
        "hidden": false,
        "label": "Action",
        "messages": [],
        "originalValue": null,
        "previousValue": null,
        "value": "Add"
      },
      "exp_media__AssetReferenceId__c": {
        "actions": {},
        "alternateValues": null,
        "dataType": "STRING",
        "editable": true,
        "fieldName": "exp_media__AssetReferenceId__c",
        "hidden": true,
        "label": "Asset Reference Id",
        "messages": [],
        "originalValue": null,
        "previousValue": null,
        "value": "2005974c-5844-33f8-81a9-f15ac09e2c48"
      },
  ],
  "totalSize": 2
}
```

```
{
  "CartItems": [
    {
      "Price": 15,
      "ItemName": "Play",
      "Action": "Add",
      "Description": "An extensive amount of the most popular channels that people love.",
      "cartId": "8014W000001ZFjHQAW",
      "AccountId": "0014W000029eKO8QAM"
    },
    {
      "Price": 0,
      "ItemName": "Play Plus",
      "Action": "Disconnect",
      "Description": "An extensive amount of the most popular channels, plus HBO, Showtime and other premium channels.",
      "cartId": "8014W000001ZFjHQAW",
      "AccountId": "0014W000029eKO8QAM"
    }
  ]
}
```
