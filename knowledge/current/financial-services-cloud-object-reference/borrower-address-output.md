---
title: "Borrower Address Output"
domain: financial-services-cloud-object-reference
topic: borrower-address-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.498Z
estimatedTokens: 548
keywords: [Borrower, Address, Output, addresses]
---

# Borrower Address Output

> Represents Borrower addresses.

# Borrower Address Output

Represents Borrower addresses.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| addressOwnership | String | Identifies borrower's status at residence. | Small, 48.0 | 48.0 |
| createdById | String | ID of the user who created this record. | Small, 48.0 | 48.0 |
| createdDate | String | Date and time when this record was created. | Small, 48.0 | 48.0 |
| extendedFields | Extended Fields Output[] | Custom fields related to the borrower’s address. | Big, 48.0 | 48.0 |
| externalId | String | Identifier assigned to imported borrower’s address data by external data source. (if applicable) | Small, 48.0 | 48.0 |
| id | String | ID of the borrower’s address | Small, 48.0 | 48.0 |
| isDeleted | Boolean | Indicates whether the borrower record is deleted. | Small, 48.0 | 48.0 |
| lastModifiedById | String | ID of the user who last modified this record. | Small, 48.0 | 48.0 |
| lastModifiedDate | String | Date and time when a user last modified this record. | Small, 48.0 | 48.0 |
| lastReferencedDate | String | Date and time when a user last referenced this record. | Small, 48.0 | 48.0 |
| lastViewedDate | String | Date and time when a user last viewed this record. | Small, 48.0 | 48.0 |
| loanApplicantId | String | ID of the borrower record. | Small, 48.0 | 48.0 |
| loanApplicationId | String | ID of the loan application record. | Small, 48.0 | 48.0 |
| monthlyRentPayment | Double | Borrower's monthly rent payment (if applicable). | Small, 48.0 | 48.0 |
| name | String | Name of the borrower’s address. | Small, 48.0 | 48.0 |
| residenceAdditionalMonthCount | Integer | Additional months borrower lived at this residence. | Small, 48.0 | 48.0 |
| residenceAddress | Address Output[] | Residence's physical address. | Small, 48.0 | 48.0 |
| residenceYearCount | Integer | Years borrower lived at this residence. | Small, 48.0 | 48.0 |
| residencyType | String | Identifies borrower's current residency status. | Small, 48.0 | 48.0 |
| systemModstamp | String | Date and time when a user or automated process (such as a trigger) last modified this record. | Small, 48.0 | 48.0 |

## Related Topics

- Extended Fields Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_extended_fields_output.htm)
- Address Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_address_output.htm)
