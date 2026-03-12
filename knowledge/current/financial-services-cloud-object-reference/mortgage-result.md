---
title: "Mortgage Result"
domain: financial-services-cloud-object-reference
topic: mortgage-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.676Z
estimatedTokens: 297
keywords: [Mortgage, Result, POST, PATCH]
---

# Mortgage Result

> Represents the result of the POST or PATCH method.

# Mortgage Result

Represents the result of the POST or PATCH method.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| assets | Asset Result[] | Represents details about the borrower's and co-borrower's current personal and real property. | Big, 48.0 | 48.0 |
| borrowers | Borrower Result[] | Represents details about the borrowers and co-borrowers. | Big, 48.0 | 48.0 |
| externalId | String | Identifier assigned to imported title holder data by external data sourceif applicable). | Small, 48.0 | 48.0 |
| financials | Financial Result[] | Represents transaction details for a loan application. | Big, 48.0 | 48.0 |
| id | String | ID of the loan application. | Small, 48.0 | 48.0 |
| liabilities | Liability Result[] | Represents details about the borrower and co-borrower current liabilities. | Big, 48.0 | 48.0 |
| properties | Property Result[] | Represents details of the property the loan application finances. | Big, 48.0 | 48.0 |
| titleHolders | Title Holder Result[] | Represents details of borrowers who are applying to hold title to the property the loan application finances. | Big, 48.0 | 48.0 |

## Related Topics

- Asset Result (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_mortgage_asset_result.htm)
- Borrower Result (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_borrower_result.htm)
- Financial Result (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_mortgage_financial_result.htm)
- Liability Result (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_mortgage_liability_result.htm)
- Property Result (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_mortgage_property_result.htm)
- Title Holder Result (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_mortgage_title_holder_result.htm)
