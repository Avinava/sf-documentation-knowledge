---
title: "Property Input"
domain: financial-services-cloud-object-reference
topic: property-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.412Z
estimatedTokens: 464
keywords: [Input, loan, application, finances]
---

# Property Input

> Represents details of the property the loan application
      finances.

# Property Input

Represents details of the property the loan application finances.

Root XML tag

<properties>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| esMonthlyRentalIncome | Double | Estimated gross monthly rental income per unit if application property is a two to four unit primary residence or investment property. | Optional | 48.0 |
| esNetMonthlyRentalIncome | Double | Estimated net monthly rental income per unit if application property is a two-to-four unit primary residence or investment property. | Optional | 48.0 |
| extendedFields | Extended Fields Input[] | Custom fields related to the property. | Optional | 48.0 |
| externalId | String | Identifier assigned to imported property data by external data source (if applicable). | Optional | 48.0 |
| id | String | ID of the property. | Optional | 48.0 |
| isManufacturedHome | Boolean | Indicates whether application property is a manufactured home. | Optional | 48.0 |
| isMixedUseProperty | Boolean | Indicates whether application property includes commercial space set aside for business use. | Optional | 48.0 |
| loanPurposeType | String | What the borrower will use the loan for. | Optional | 48.0 |
| name | String | Name of loan application property. | Optional | 48.0 |
| propertyAddress | Address Input[] | Physical address of the property to be financed. | Optional | 48.0 |
| propertyUseType | String | Borrower's stated use for the property. | Optional | 48.0 |
| propertyValue | Double | Estimated present market value of the application property. | Optional | 48.0 |
| requestedLoanAmount | Double | Total loan amount the borrower is applying for. | Optional | 48.0 |
| unitsFinancedCount | Integer | Number of units being financed at this address. | Optional | 48.0 |

## Code Examples

```
{
  "properties": [
    {
      "esMonthlyRentalIncome": 400506,
      "esNetMonthlyRentalIncome": 304056,
      "extendedFields": [],
      "externalId": "a57f5b81-477b-41a3-a647-5852562913e5",
      "isManufacturedHome": true,
      "isMixedUseProperty": true,
      "loanPurposeType": "Purchase",
      "name": "Prop1",
      "propertyUseType": "Primary Residence",
      "propertyValue": 50500555,
      "requestedLoanAmount": 5005000,
      "unitsFinancedCount": 5
    }
  ]
}
```

## Related Topics

- Extended Fields Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_extended_fields_input.htm)
- Address Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_address_input.htm)
