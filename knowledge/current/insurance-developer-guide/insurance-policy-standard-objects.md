---
title: "Insurance Policy Standard Objects"
domain: insurance-developer-guide
topic: insurance-policy-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.972Z
estimatedTokens: 618
keywords: [Insurance, Policy, Standard, Objects, data, model, manage, transactions]
---

# Insurance Policy Standard Objects

> The Insurance Policy data model provides objects and fields to manage insurance policy
  transactions.

# Insurance Policy Standard Objects

The Insurance Policy data model provides objects and fields to manage insurance policy transactions.

-   **[InsProductClauseVariableMap](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/sforce_api_objects_insproductclausevariablemap.htm)**
    Represents the mapping between a token defined in an insurance clause and the product attributes that populate the token value at runtime. For example, a Free Look clause allows a customer to cancel a policy within a certain number of days. The number of days is a variable (or, token) that's populated using product-specific attributes. This object is available in API version 65.0 and later.
-   **[InsuranceClause](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/sforce_api_objects_insuranceclause.htm)**
    Defines the terms and conditions associated with a product. For example, an Avocation Clause excludes coverage if the insured engages in a risky hobby. This object is available in API version 65.0 and later.
-   **[InsurancePolicyProductClause](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/sforce_api_objects_insurancepolicyproductclause.htm)**
    Represents all clauses associated with the products that are applicable to a specific insurance policy. The object contains one record for each clause associated with a product that is applicable to a policy. This object is available in API version 65.0 and later.
-   **[InsuranceProductClause](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/sforce_api_objects_insuranceproductclause.htm)**
    Represents a junction between a product and an insurance clause. This association defines the clauses applicable for the specific products. For example, an Excluded Driver clause applies to auto and motorcycle insurance products, but not to home insurance products. This object is available in API version 65.0 and later.
-   **[QuoteLineItemInsProductClause](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/sforce_api_objects_quotelineiteminsproductclause.htm)**
    Represents all clauses associated with the products that are applicable to a specific quote line item. For example, if auto insurance quote "ABC" includes both a Free Look clause and an Excluded Driver clause, the object will have two records, one for each clause applicable to the quote line item. This object is available in API version 65.0 and later.

## Related Topics

- InsProductClauseVariableMap (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/sforce_api_objects_insproductclausevariablemap.htm)
- InsuranceClause (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/sforce_api_objects_insuranceclause.htm)
- InsurancePolicyProductClause (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/sforce_api_objects_insurancepolicyproductclause.htm)
- InsuranceProductClause (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/sforce_api_objects_insuranceproductclause.htm)
- QuoteLineItemInsProductClause (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/sforce_api_objects_quotelineiteminsproductclause.htm)
