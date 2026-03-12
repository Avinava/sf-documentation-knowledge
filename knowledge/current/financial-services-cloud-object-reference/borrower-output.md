---
title: "Borrower Output"
domain: financial-services-cloud-object-reference
topic: borrower-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.545Z
estimatedTokens: 1148
keywords: [Borrower, Output, co-borrower, loan, application]
---

# Borrower Output

> Represents details of the borrower or co-borrower for the loan
      application.

# Borrower Output

Represents details of the borrower or co-borrower for the loan application.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| addresses | Borrower Address Output[] | Borrower’s addresses. | Big, 48.0 | 48.0 |
| asianRaceSubType | String | Borrower's Asian race. | Small, 48.0 | 48.0 |
| borrowerType | String | Applicant's borrower type. | Small, 48.0 | 48.0 |
| citizenshipStatus | String | Borrower's citizenship status. | Small, 48.0 | 48.0 |
| contactId | String | Contact associated with this borrower. | Small, 48.0 | 48.0 |
| createdById | String | ID of the user who created this record. | Small, 48.0 | 48.0 |
| createdDate | String | Date and time when this record was created. | Small, 48.0 | 48.0 |
| declarations | Borrower Declaration Output[] | Borrower’s declarations. | Big, 48.0 | 48.0 |
| dependentCount | Integer | Borrower's number of dependents. | Small, 48.0 | 48.0 |
| dependentsAge | String | Ages of borrower's dependents in a comma-separated list. | Small, 48.0 | 48.0 |
| employments | Borrower Employment Output[] | Borrower’s employments. | Big, 48.0 | 48.0 |
| ethnicitySubType | String | Borrower's ethnicity. | Small, 48.0 | 48.0 |
| ethnicityType | String | Borrower's ethnicity origin. | Small, 48.0 | 48.0 |
| extendedFields | Extended Fields Output[] | Custom fields. | Big, 48.0 | 48.0 |
| externalId | String | ID that uniquely identifies imported data in an external data source (if applicable). | Small, 48.0 | 48.0 |
| genderType | String | Borrower's gender. | Small, 48.0 | 48.0 |
| hasMilitaryService | Boolean | Indicates whether the borrower is serving in the United States Armed Forces or the borrower or the borrower's deceased spouse served in the past. | Small, 48.0 | 48.0 |
| id | String | ID of the Borrower. | Small, 48.0 | 48.0 |
| incomes | Borrower Income Output[] | Borrower’s incomes. | Big, 48.0 | 48.0 |
| isActiveMilitary | Boolean | Indicates whether borrower is currently on active duty with the United States Armed Forces. | Small, 48.0 | 48.0 |
| isDeleted | Boolean | Indicates whether the title holder record is deleted. | Small, 48.0 | 48.0 |
| isJointCredit | Boolean | Indicates whether borrower is applying for joint credit. | Small, 48.0 | 48.0 |
| isSurvivingMilitarySpouse | Boolean | Indicates whether borrower is a surviving spouse of a veteran. | Small, 48.0 | 48.0 |
| lastModifiedById | String | ID of the user who last modified this record. | Small, 48.0 | 48.0 |
| lastModifiedDate | String | Date and time when a user last modified this record. | Small, 48.0 | 48.0 |
| lastReferencedDate | String | Date and time when a user last referenced this record. | Small, 48.0 | 48.0 |
| lastViewedDate | String | Date and time when a user last viewed this record. | Small, 48.0 | 48.0 |
| loanApplicationId | String | ID of the loan application record. | Small, 48.0 | 48.0 |
| maritalStatus | String | Borrower's marital status. | Small, 48.0 | 48.0 |
| militaryTourExpirationMonth | Integer | Month that borrower's tour of service expires. | Small, 48.0 | 48.0 |
| militaryTourExpirationYear | Integer | Year that borrower's tour of service expires. | Small, 48.0 | 48.0 |
| name | String | Name of the borrower. | Small, 48.0 | 48.0 |
| otherAsianRaceSubType | String | Borrower's Asian race if other is specified. | Small, 48.0 | 48.0 |
| otherEthnicitySubType | String | Borrower’s ethnicity if other is specified. | Small, 48.0 | 48.0 |
| otherPacIslandSubType | String | Borrower's native Hawaiian or Pacific Islander race if other is specified. | Small, 48.0 | 48.0 |
| ownerId | String | ID of the user who owns the record. | Small, 48.0 | 48.0 |
| pacificIslanderSubType | String | Borrower's native Hawaiian or Pacific Islander race. | Small, 48.0 | 48.0 |
| preferredLanguage | String | Borrower's preferred communication language. | Small, 48.0 | 48.0 |
| raceType | String | Borrower's race. | Small, 48.0 | 48.0 |
| systemModstamp | String | Date and time when a user or automated process (such as a trigger) last modified this record. | Small, 48.0 | 48.0 |
| tribeName | String | Name of borrower's enrolled or principal tribe. | Small, 48.0 | 48.0 |
| wasActiveMilitary | Boolean | Indicates whether borrower is currently retired, discharged, or separated from active military duty. | Small, 48.0 | 48.0 |
| wasNonActivatedService | Boolean | Indicates whether borrower's only military service was as a non-activated Reserve soldier or as a non-activated member of the National Guard. | Small, 48.0 | 48.0 |

## Related Topics

- Borrower Address Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_borrower_address_output.htm)
- Borrower Declaration Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_borrower_declaration_output.htm)
- Borrower Employment Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_borrower_employment_output.htm)
- Extended Fields Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_extended_fields_output.htm)
- Borrower Income Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_borrower_income_output.htm)
