---
title: "vpls360Csr-FormatProductList"
domain: media-developer-guide
topic: vpls360csr-formatproductlist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.287Z
estimatedTokens: 116
keywords: [vpls360Csr-FormatProductList, Omnistudio, Data, Mapper, agent, console, transform, product, change, base, pack, flow, Sample, Input, Output]
---

# vpls360Csr-FormatProductList

> This Omnistudio Data Mapper is used in the agent console to
    format or transform the product list in the change base pack flow.

# vpls360Csr-FormatProductList

This Omnistudio Data Mapper is used in the agent console to format or transform the product list in the change base pack flow.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| records | Required |

## Sample Output

```

```

## Called By

-   Workflow: Agent console Change Base Package

    -   Omniscript: vpls360csrChangeBasePackage

        -   Integration Procedure: VPL360\_CsrBasepackretrieve

## Code Examples

```
{
  "records": [
    {
      "vlocity_cmt__RecurringPrice__c": {
        "label": "Recurring Price",
        "value": 0
      },
      "Id": {
        "label": "Price Book Entry ID",
        "value": "01u4W000009znoaQAA"
      },
      "IsActive": {
        "label": "Active",
        "value": true
      },
      "Name": {
        "label": "Product Name",
        "value": "Test-Product"
      },
      "Product2": {
        "vlocity_cmt__GlobalGroupKey__c": "dd577312-39be-f39d-c06e-04a47be71d61",
        "vlocity_cmt__IsConfigurable__c": false,
        "vlocity_cmt__SellingStartDate__c": "2020-07-19T18:30:00.000+0000",
        "vlocity_cmt__SpecificationType__c": "Product",
        "vlocity_cmt__SubType__c": "ADD-ON",
        "vlocity_cmt__Type__c": "SPORTS",
        "vlocity_cmt__VersionLabel__c": "V1",
        "Description": "Watch Cricket World Cup",
        "Id": "01t4W00000BwmtVQAR",
        "Name": "Play Cricket World Cup",
        "RecordTypeId": "0124W000001HALSQA4",
        "attributes": {
          "type": "Product2",
          "url": "/services/data/v50.0/sobjects/Product2/01t4W00000BwmtVQAR"
        }
      },
      "Product2Id": {
        "label": "Product ID",
        "value": "01t4W00000BwmtVQAR"
      },
      "ProductCode": {
        "label": "Product Code",
        "value": "VPL-PlayCricketWorldCup"
      },
      "SellingPeriod": "Present",
      "UnitPrice": {
        "label": "List Price",
        "value": "0.00"
      }
    }
  ]
}
```

```
{
  "Product": [
    {
      "UnitPrice": "0.00",
      "ProductCode": "Test-Product",
      "Type": "None",
      "SubType": "None",
      "Id": "01t4W00000BgMN7QAN",
      "Name": "Test-Product",
      "IsActive": true,
      "PriceBookEntryId": "01u4W000009znoaQAA",
      "RecurringPrice": 0
    },
    {
      "UnitPrice": "0.00",
      "ProductCode": "VPL-Play",
      "Type": "PACKAGE",
      "SubType": "BASE",
      "Id": "01t4W00000BwmtLQAR",
      "Description": "An extensive amount of the most popular channels that people love.",
      "Name": "Play",
      "IsActive": true,
      "PriceBookEntryId": "01u4W00000ALFWhQAP",
      "RecurringPrice": "$15"
    }
  ]
}
```
