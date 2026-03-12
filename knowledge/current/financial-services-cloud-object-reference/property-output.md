---
title: "Property Output"
domain: financial-services-cloud-object-reference
topic: property-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.659Z
estimatedTokens: 694
keywords: [Output, loan, application, finances]
---

# Property Output

> Represents details of the property the loan application
      finances.

# Property Output

Represents details of the property the loan application finances.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| createdById | String | ID of the user who created this record. | Small, 48.0 | 48.0 |
| createdDate | String | Date and time when this record was created. | Small, 48.0 | 48.0 |
| esMonthlyRentalIncome | Double | Estimated gross monthly rental income per unit if application property is a two to four unit primary residence or investment property. | Small, 48.0 | 48.0 |
| esNetMonthlyRentalIncome | Double | Estimated net monthly rental income per unit if application property is a two-to-four unit primary residence or investment property. | Small, 48.0 | 48.0 |
| extendedFields | Extended Fields Output[] | Custom fields related to the property. | Big, 48.0 | 48.0 |
| externalId | String | Identifier assigned to imported property data by external data source (if applicable). | Small, 48.0 | 48.0 |
| id | String | ID of the property. | Small, 48.0 | 48.0 |
| isDeleted | Boolean | Indicates whether the property record is deleted. | Small, 48.0 | 48.0 |
| isManufacturedHome | Boolean | Indicates whether application property is a manufactured home. | Small, 48.0 | 48.0 |
| isMixedUseProperty | Boolean | Indicates whether application property includes commercial space set aside for business use. | Small, 48.0 | 48.0 |
| lastModifiedById | String | ID of the user who last modified this record. | Small, 48.0 | 48.0 |
| lastModifiedDate | String | Date and time when a user last modified this record. | Small, 48.0 | 48.0 |
| lastReferencedDate | String | Date and time when a user last referenced this record. | Small, 48.0 | 48.0 |
| lastViewedDate | String | Date and time when a user last viewed this record. | Small, 48.0 | 48.0 |
| loanApplicationId | String | ID of the loan application record. | Small, 48.0 | 48.0 |
| loanPurposeType | String | What the borrower will use the loan for. | Small, 48.0 | 48.0 |
| name | String | Name of loan application property. | Small, 48.0 | 48.0 |
| propertyAddress | Address Output | Physical address of the property to be financed. | Small, 48.0 | 48.0 |
| propertyUseType | String | Borrower's stated use for the property. | Small, 48.0 | 48.0 |
| propertyValue | Double | Estimated present market value of the application property. | Small, 48.0 | 48.0 |
| requestedLoanAmount | Double | Total loan amount the borrower is applying for. | Small, 48.0 | 48.0 |
| systemModstamp | String | Date and time when a user or automated process (such as a trigger) last modified this record. | Small, 48.0 | 48.0 |
| unitsFinancedCount | Integer | Number of units being financed at this address. | Small, 48.0 | 48.0 |

## Related Topics

- Extended Fields Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_extended_fields_output.htm)
- Address Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_address_output.htm)
