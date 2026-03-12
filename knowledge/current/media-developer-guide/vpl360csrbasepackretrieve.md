---
title: "VPL360_CsrBasepackretrieve"
domain: media-developer-guide
topic: vpl360csrbasepackretrieve
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.151Z
estimatedTokens: 165
keywords: [VPL360_CsrBasepackretrieve, Integration, Procedure, retrieves, filters, products, customer, purchased, VPL360, _CsrBasepackretrieve, Sample, Input, Output, Calls]
---

# VPL360_CsrBasepackretrieve

> This Integration Procedure retrieves and filters products
    that the customer has not purchased before.

# VPL360\_CsrBasepackretrieve

This Integration Procedure retrieves and filters products that the customer has not purchased before.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| AccountId | Required |
| cartId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Agent console: Change Base Package

-   Components:

    -   Omniscript: vpls360csrChangeBasePackage


## Calls

-   Remote Action:

    -   Class: vlocity\_cmt.CpqAppHandler

    -   Method: getCartsProducts

-   Remote Action:

    -   Class: VPL360ShopAddOn

    -   Method: filterProducts

-   Data Mapper: vpls360Csr-FormatProductList

## Code Examples

```
{
    "AccountId": "0014W000029kBVyQAM",
    "cartId": "8014W000000lIYFQA2"
}
```

```
{
  "results": {
    "removedProductList": [
      "VPL-ShippingFee",
      "VPL-PlayPlus",
      "VPL-Platform",
      "VPL-STBStandard",
      "VPL-ActivationFee",
          ],
    "filteredResult": [
      {
        "Type": "PACKAGE",
        "SubType": "BASE",
        "Id": "01t4W00000CYESvQAP",
        "Description": "An extensive amount of the most popular channels that people love.",
        "RecurringPrice": "$15",
        "IsActive": true,
        "Name": "Play",
        "UnitPrice": "0.00",
        "ProductCode": "VPL-Play",
        "PriceBookEntryId": "01u4W00000B994jQAB"
      }
],
    "errorCode": "INVOKE-200",
    "error": "OK"
  }
}
```
