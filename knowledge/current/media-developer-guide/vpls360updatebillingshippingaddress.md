---
title: "VPLS360UpdateBillingShippingAddress"
domain: media-developer-guide
topic: vpls360updatebillingshippingaddress
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.333Z
estimatedTokens: 165
keywords: [VPLS360UpdateBillingShippingAddress, Integration, Procedure, process, Google, API, address, record, Account, Contact, Sample, Input, Output, Calls]
---

# VPLS360UpdateBillingShippingAddress

> This Integration Procedure is used to process the Google
        API address record and update the Account and Contact Address fields.

# VPLS360UpdateBillingShippingAddress

This Integration Procedure is used to process the Google API address record and update the Account and Contact Address fields.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| billingAccountId | Required |
| formatted_address | Required |
| result | Required |
| updateShipping | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Web shop: New User Onboarding


## Calls

-   Data Mapper: DRTransformAddress

-   Data Mapper: DRTransform

-   Remote Action: updateBillingAddress

    -   Class: vlocity\_cmt.MediaCmexAppHandler

    -   Method: updateBillingAddress

## Code Examples

```
{
    "billingAccountId": "0013t00001byeKyAAI",
    "result": {
        "address_components": [
            {
                "long_name": "Pisa",
                "short_name": "Pisa",
                "types": [
                    "locality",
                    "political"
                ]
            },
            {
                "long_name": "Pisa",
                "short_name": "Pisa",
                "types": [
                    "administrative_area_level_3",
                    "political"
                ]
            },
            {
                "long_name": "Province of Pisa",
                "short_name": "PI",
                "types": [
                    "administrative_area_level_2",
                    "political"
                ]
            },
            {
                "long_name": "Tuscany",
                "short_name": "Tuscany",
                "types": [
                    "administrative_area_level_1",
                    "political"
                ]
            },
            {
                "long_name": "Italy",
                "short_name": "IT",
                "types": [
                    "country",
                    "political"
                ]
            }
        ],
        "formatted_address": "Pisa, Province of Pisa, Italy"
    },
    "updateShipping": "TRUE"
}
```

```
{  "response": {
    "BillingCity": "Pisa",
    "BillingCountry": "Italy",
    "BillingPostalCode": "",
    "BillingState": "Tuscany",
    "BillingStreet": "Province of Pisa,Pisa"  
 },
  "ResponseStatus": true,
  "updateBillingAddress": {
    "success": false,
    "exception": "Invalid conversion from runtime type String to Boolean 522",
    "errorCode": "INVOKE-200",
    "error": "OK"
  },
"updateBillingAddressStatus": true,
  "SetStreet": {
    "street": "Province of Pisa,Pisa"  },
  "SetStreetStatus": true,
  "LoopBlock1": [
    {
      "DRTransform": {
        "Address": {
          "BillingCity": "Pisa"
        }
      },
      "DRTransformStatus": true,
      "LoopBlockIterationStatus": true,
      "LoopBlockIterationIndex": 1
    },
    {      
"DRTransform": {
        "Address": {
          "BillingStreet2": "Pisa"
        }
      },
      "DRTransformStatus": true,
      "LoopBlockIterationStatus": true,
      "LoopBlockIterationIndex": 2
    },
    {
      "DRTransform": {
        "Address": {
          "BillingStreet1": "Province of Pisa"
        }
      },
      "DRTransformStatus": true,
      "LoopBlockIterationStatus": true,
      "LoopBlockIterationIndex": 3
    },
    {
      "DRTransform": {
        "Address": {
          "BillingState": "Tuscany"
        }
      },
      "DRTransformStatus": true,
      "LoopBlockIterationStatus": true,
      "LoopBlockIterationIndex": 4
    },
    {
      "DRTransform": {
        "Address": {
          "BillingCountry": "Italy"
        }
      },
      "DRTransformStatus": true,
      "LoopBlockIterationStatus": true,
      "LoopBlockIterationIndex": 5
    }
  ],
"LoopBlock1Status": true,
  "DRtransformAddress": {
    "Address": [
      {
        "Value": "Pisa",
        "type": "locality"
      },
      {
        "Value": "Pisa",
        "type": "administrative_area_level_3"
      },
      {
        "Value": "Province of Pisa",
        "type": "administrative_area_level_2"
      },
      {
        "Value": "Tuscany",
        "type": "administrative_area_level_1"
      },
      {
        "Value": "Italy",
        "type": "country"
      }
    ]
  },
  "DRtransformAddressStatus": true,
  "SetInputAddress": {
    "AccountId": "0013t00001byeKyAAI",
    "Address": {
      "formatted_address": "Pisa, Province of Pisa, Italy",
      "address_components": [
        {
          "types": [
            "locality",
            "political"
          ],
          "short_name": "Pisa",
          "long_name": "Pisa"
        },
        {
          "types": [
            "administrative_area_level_3",
            "political"
          ],
          "short_name": "Pisa",
          "long_name": "Pisa"
        },
        {
          "types": [
            "administrative_area_level_2",
            "political"
          ],
          "short_name": "PI",
          "long_name": "Province of Pisa"
        },
        {
          "types": [
            "administrative_area_level_1",
            "political"
          ],
          "short_name": "Tuscany",
          "long_name": "Tuscany"
        },
        {
          "types": [
            "country",
            "political"
          ],
          "short_name": "IT",
          "long_name": "Italy"
        }
      ]
    },
    "updateShipping": "TRUE"
  },
  "SetInputAddressStatus": true,
  "options": {
    "useQueueableApexRemoting": false,
    "queueableChainable": false,
    "ignoreCache": true,
    "resetCache": false,
    "chainable": false
  },
  "updateShipping": "TRUE",
  "result": {
    "formatted_address": "Pisa, Province of Pisa, Italy",
    "address_components": [
      {
        "types": [
          "locality",
          "political"
        ],
        "short_name": "Pisa",
        "long_name": "Pisa"
      },
      {
        "types": [
          "administrative_area_level_3",
          "political"
        ],
        "short_name": "Pisa",
        "long_name": "Pisa"
      },
      {
        "types": [
          "administrative_area_level_2",
          "political"
        ],
        "short_name": "PI",
        "long_name": "Province of Pisa"
      },
      {
        "types": [
          "administrative_area_level_1",
          "political"
        ],
        "short_name": "Tuscany",
        "long_name": "Tuscany"
      },
      {
        "types": [
          "country",
          "political"
        ],
        "short_name": "IT",
        "long_name": "Italy"
      }
    ]
  },
  "billingAccountId": "0013t00001byeKyAAI"
}
```
