---
title: "Insurance Sales Transaction Item"
domain: insurance-developer-guide
topic: insurance-sales-transaction-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.674Z
estimatedTokens: 332
keywords: [Insurance, Sales, Transaction, Item, Output, representation]
---

# Insurance Sales Transaction Item

> Output representation for the insurance sales transaction item.

# Insurance Sales Transaction Item

Output representation for the insurance sales transaction item.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| childNodes | Insurance Sales Transaction Item[] | List of child sales transaction items. | Small, 66.0 | 66.0 |
| fields | Map<String, Object> | A key-value map that represents sales transaction item record. | Small, 66.0 | 66.0 |
| salesTransactionItemAttributes | Insurance Sales Transaction Item Attribute[] | List of dynamic attributes of the sales transaction item in key-value pairs. | Small, 66.0 | 66.0 |
| salesTransactionItemClauses | Insurance Sales Transaction Item Clause[] | List of clauses of the sales transaction item in key-value pairs. | Small, 66.0 | 66.0 |
| salesTransactionItemRelatedObjects | Insurance Sales Transaction Item Related Object[] | List of related objects of the sales transaction item in key-value pairs. | Small, 66.0 | 66.0 |
| salesTransactionItemRelationships | Insurance Sales Transaction Item Relationship[] | List of records that represent the relationship between the sales transaction items. | Small, 66.0 | 66.0 |
| salesTransactionItemTaxes | Insurance Sales Transaction Item Tax[] | List of tax records of the sales transaction items. | Small, 66.0 | 66.0 |

## Related Topics

- Insurance Sales Transaction Item Attribute (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_s_t_i_a_output.htm)
- Insurance Sales Transaction Item Clause (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_s_t_i_clause_output.htm)
- Insurance Sales Transaction Item Related
                Object (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_s_t_i_r_o_output.htm)
- Insurance Sales Transaction Item Relationship (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_s_t_i_relationship_output.htm)
- Insurance Sales Transaction Item Tax (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_s_t_i_tax_output.htm)
