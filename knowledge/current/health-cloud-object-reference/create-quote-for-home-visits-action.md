---
title: "Create Quote for Home Visits Action"
domain: health-cloud-object-reference
topic: create-quote-for-home-visits-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.073Z
estimatedTokens: 705
keywords: [Quote, Home, Visits, Action, patient, visit, Special, Access, Rules, REST, HTTP, Inputs, Outputs]
---

# Create Quote for Home Visits Action

> Create a quote for patient home visits based on the specified visit
            details.

# Create Quote for Home Visits Action

Create a quote for patient home visits based on the specified visit details.

This action is available in API version 63.0 and later.

## Special Access Rules

The Create Quote for Home Visits action is available when Home Health is enabled. This action is available to users that have access to Home Health Quote perm set.

## Supported REST HTTP Methods

URI

/services/data/v63/actions/standard/createQuoteForHomeVisits

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| quoteName | TypeStringDescriptionRequiredThe name of the quote to be created for a patient's home visits. |
| priceBookId | TypeStringDescriptionRequiredThe ID of the price book to use to create the quote for a patient's home visits. |
| accountId | TypeStringDescriptionThe person account ID of the patient for whom the quote is to be created. |
| opportunityId | TypeStringDescriptionThe ID of the opportunity to use to create the quote for a patient's home visits. |
| startDateTime | TypeDateTimeDescriptionThe date and time when the quote takes effect. |
| endDateTime | TypeDateTimeDescriptionThe date and time after which the quote is no longer valid. |
| workTypeIds | TypeList<String>DescriptionThe collection of IDs of work types that the quote is created for. |
| visitCount | TypeIntegerDescriptionThe number of home visits that the quote is created for. |
| isTravelInventoryIncluded | TypeBooleanDescriptionIndicates whether the travel and inventory associated with the home visit are included in the quote. |
| resourceTravelDistance | TypeDoubleDescriptionThe distance that a care resource has to travel to provide home healthcare to the patient. |
| pricingPreference | TypeStringDescriptionThe attribute-based pricing preference that's used as an input in the PlaceQuote API for creating the quote.Possible values are:SystemForceSkip.The default value is System. |
| currencyCode | TypeStringDescriptionThe currency code to be used in the quote. |
| productPricingAttributeDetails | TypeList<Object>DescriptionA collection of Apex heathcloudext_productPricingAttributeDetails records that contain the pricing attribute details for the products included in the quote. |

## Outputs

| Output | Details |
| --- | --- |
| quoteId | TypeStringDescriptionThe ID of the quote record that was created for the patient's home visits. |
| errorMessage | TypeStringDescriptionThe description of the error encountered while creating the quote. |
| errorCode | TypeStringDescriptionThe code of the error encountered while creating the quote. |

## Example

POST

This sample request is for the Create Quote for Home Visits action.

```

```

This sample response is for the Create Quote for Home Visits action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "quoteName": "Quote For Charles",
      "priceBookId": "01sxx0000005qWXAAY",
      "accountId": "001xx000003GaC7AAK",
      "startDateTime": "2024-08-18T00:00:00.000Z",
      "endDateTime": "2024-08-25T00:00:00.000Z",
      "workTypeIds": [
        "08qxx0000004C92AAE"
      ],
      "visitCount": 2,
      "isTravelInventoryIncluded": false,
      "productPricingAttributeDetails": [
        {
          "productId": "08qxx0000004C92AAE",
          "unitCount": 1,
          "pricingAttributeList": [
            {
              "attributeDefinitionId": "dayBasedAttributeDefinitionId",
              "attributeValue": "Sunday"
            }
          ]
        }
      ]
    }
  ]
}
```

```
{
  "actionName": "createQuoteForHomeVisits",
  "isSuccess": true,
  "outputValues": {
    "quoteId": "0Q0XXXXXXXXXXXXXXX",
    "errorMessage": null,
    "errorCode": null
  }
}
```
