---
title: "Title Holder Output"
domain: financial-services-cloud-object-reference
topic: title-holder-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.668Z
estimatedTokens: 464
keywords: [Title, Holder, Output, borrowers, applying, hold, loan, application, finances]
---

# Title Holder Output

> Represents details of borrowers who are applying to hold title to
      the property the loan application finances.

# Title Holder Output

Represents details of borrowers who are applying to hold title to the property the loan application finances.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| createdById | String | ID of the user who created this record. | Small, 48.0 | 48.0 |
| createdDate | String | Date and time when this record was created. | Small, 48.0 | 48.0 |
| extendedFields | Extended Fields Output[] | Custom fields related to the title holder. | Big, 48.0 | 48.0 |
| externalId | String | Identifier assigned to imported title holder data by external data source (if applicable). | Small, 48.0 | 48.0 |
| id | String | ID of the title holder. | Small, 48.0 | 48.0 |
| isCurrentTitleHolder | Boolean | Indicates whether person is a current title holder on property to be refinanced. | Small, 48.0 | 48.0 |
| isDeleted | Boolean | Indicates whether the title holder record is deleted. | Small, 48.0 | 48.0 |
| lastModifiedById | String | ID of the user who last modified this record. | Small, 48.0 | 48.0 |
| lastModifiedDate | String | Date and time when a user last modified this record. | Small, 48.0 | 48.0 |
| lastReferencedDate | String | Date and time when a user last referenced this record. | Small, 48.0 | 48.0 |
| lastViewedDate | String | Date and time when a user last viewed this record. | Small, 48.0 | 48.0 |
| loanApplicationId | String | ID of the loan application record. | Small, 48.0 | 48.0 |
| name | String | Name of the loan application title holder. | Small, 48.0 | 48.0 |
| systemModstamp | String | Date and time when a user or automated process (such as a trigger) last modified this record. | Small, 48.0 | 48.0 |
| titleHolderName | String | Name of the person on the title for the property associated with the loan application. | Small, 48.0 | 48.0 |

## Related Topics

- Extended Fields Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_extended_fields_output.htm)
