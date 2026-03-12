---
title: "Asset Input"
domain: financial-services-cloud-object-reference
topic: asset-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.372Z
estimatedTokens: 541
keywords: [Asset, Input, borrower's, co-borrower's, current, personal, real]
---

# Asset Input

> Represents details about the borrower's and co-borrower's current
      personal and real property.

# Asset Input

Represents details about the borrower's and co-borrower's current personal and real property.

Root XML tag

<assets>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountNumber | String | Account number associated with financial institution holding asset. | Optional | 48.0 |
| accountType | String | Identifies asset account type. | Optional | 48.0 |
| assetClass | String | Identifies which asset class total to include the asset's value in. | Optional | 48.0 |
| assetType | String | Identifies type of other asset. | Optional | 48.0 |
| borrowersExternalIds | String[] | External IDs of borrower and co-borrowers. | Optional | 48.0 |
| borrowersIds | String[] | IDs of borrower and co-borrowers. | Optional | 48.0 |
| cashOrMarketValue | Double | Asset's cash or current market value. | Optional | 48.0 |
| dispositionType | String | Real estate asset's planned future use. | Optional | 48.0 |
| extendedFields | Extended Fields Input[] | Custom fields related to the asset. | Optional | 48.0 |
| externalId | String | Identifier assigned to imported asset data by external data source (if applicable). | Optional | 48.0 |
| financialInstitutionName | String | Name of financial institution where financial account is held. | Optional | 48.0 |
| grossMonthlyRentalIncome | Double | Borrower's monthly rent income collected on real estate asset. | Optional | 48.0 |
| id | String | ID of the asset. | Optional | 48.0 |
| isJointAsset | Boolean | Indicates whether asset is held jointly. | Optional | 48.0 |
| name | String | Name of the loan application asset. | Optional | 48.0 |
| netMonthlyRentalIncome | Double | Borrower's net monthly income on real estate asset. | Optional | 48.0 |
| presentMarketValue | Double | Cash value of real estate asset if sold today. | Optional | 48.0 |
| realEstateAddress | Address Input[] | Real estate asset's address. | Optional | 48.0 |
| realEstateMonthlyExpense | Double | Borrower's monthly real estate asset expenses including insurance, maintenance, taxes, and miscellaneous costs. | Optional | 48.0 |

## Code Examples

```
{
  "assets": [
    {
      "accountNumber": "849393",
      "accountType": "Checking",
      "assetClass": "Financial",
      "assetType": "Earnest Money",
      "borrowersExternalIds": [
        "0fc5e4d6-de5d-4954-9d21-3c628ad8809a",
        "732c3d7e-78ae-4b5e-944d-f411fb4011d4"
      ],
      "cashOrMarketValue": 434934903,
      "dispositionType": "Pending Sale",
      "extendedFields": [],
      "externalId": "df126729-19c0-4dc9-80c6-322bc6fb994c",
      "financialInstitutionName": "BOFA",
      "grossMonthlyRentalIncome": 355395355,
      "name": "Asset1",
      "netMonthlyRentalIncome": 2535345,
      "presentMarketValue": 7937399,
      "realEstateAddress": {
        "city": "San Francisco",
        "country": "CA",
        "street": "234 1st Street"
      },
      "realEstateMonthlyExpense": 3413131
    },
    {
      "accountNumber": "2424242424",
      "accountType": "Checking",
      "assetClass": "Real Estate",
      "assetType": "Earnest Money",
      "borrowersExternalIds": [
        "0fc5e4d6-de5d-4954-9d21-3c628ad8809a",
        "732c3d7e-78ae-4b5e-944d-f411fb4011d4"
      ],
      "cashOrMarketValue": 24424525,
      "dispositionType": "Sold",
      "extendedFields": [],
      "externalId": "a57f5b81-477b-41a3-a647-5852562913e5",
      "financialInstitutionName": "wells",
      "grossMonthlyRentalIncome": 24242224,
      "name": "Asset2",
      "netMonthlyRentalIncome": 242424234,
      "presentMarketValue": 2423131313,
      "realEstateAddress": {
        "city": "San Francisco",
        "country": "CA",
        "street": "123 2nd Street"
      },
      "realEstateMonthlyExpense": 2242423424
    }
  ]
}
```

## Related Topics

- Extended Fields Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_extended_fields_input.htm)
- Address Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_address_input.htm)
