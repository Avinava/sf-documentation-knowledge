---
title: "Borrower Result"
domain: financial-services-cloud-object-reference
topic: borrower-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.548Z
estimatedTokens: 182
keywords: [Borrower, Result, POST, PATCH]
---

# Borrower Result

> Borrower result of the POST or PATCH request.

# Borrower Result

Borrower result of the POST or PATCH request.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| addresses | Borrower Address Result[] | Borrower’s addresses. | Big, 48.0 | 48.0 |
| declarations | Borrower Declaration Result[] | Borrower’s declarations. | Big, 48.0 | 48.0 |
| employments | Borrower employment Result[] | Borrower’s employments. | Big, 48.0 | 48.0 |
| externalId | String | ID that uniquely identifies imported data in an external data source (if applicable). | Small, 48.0 | 48.0 |
| id | String | ID of the orrower. | Small, 48.0 | 48.0 |
| incomes | Borrower Income Result[] | Borrower’s incomes. | Big, 48.0 | 48.0 |

## Related Topics

- Borrower Address Result (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_borrower_address_result.htm)
- Borrower Declaration Result (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_borrower_declaration_result.htm)
- Borrower employment Result (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_borrower_employment_result.htm)
- Borrower Income Result (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_borrower_income_result.htm)
