---
title: "runtime_industries_insurance Namespace"
domain: insurance-developer-guide
topic: runtimeindustriesinsurance-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:39.642Z
estimatedTokens: 803
namespace: The
keywords: [runtime_industries_insurance, Options, classes, control, input, managing, insurance, operations, creating, updating, quotes, generating, clauses, running, ratings]
---

# runtime_industries_insurance Namespace

> The runtime_industries_insurance namespace provides Options classes to control optional
    input parameters for managing insurance operations, such as creating and updating insurance
    quotes, generating insurance clauses, and running insurance ratings. Use these classes when
    calling Insurance APIs from Apex to control pricing, configuration rules, qualification rules,
    and product catalog validation.

**Namespace:** `The`

# runtime\_industries\_insurance Namespace

The runtime\_industries\_insurance namespace provides Options classes to control optional input parameters for managing insurance operations, such as creating and updating insurance quotes, generating insurance clauses, and running insurance ratings. Use these classes when calling Insurance APIs from Apex to control pricing, configuration rules, qualification rules, and product catalog validation.

The runtime\_industries\_insurance namespace includes these classes.

## Usage

You can access the runtime\_industries\_insurance classes if your org has the Insurance feature. These Options classes are used with group insurance quoting, product configuration, and policy administration workflows.

-   **[AddEligibleInsuranceClausesOptions Class](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_AddEligibleInsuranceClausesOptions.htm#apex_class_runtime_industries_insurance_AddEligibleInsuranceClausesOptions)**
    Contains options for adding eligible product clauses to an insurance product. Use this class when configuring which clauses, such as exclusions or coverage terms, are available for selection on an insurance product.
-   **[CreateInsuranceQuoteOptions Class](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm#apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions)**
    Contains options for creating an insurance quote. Use this class to control pricing execution, product catalog validation, configuration and qualification rules, quote persistence, and the product selling model when creating group or individual insurance quotes.
-   **[CreateInsuranceRatingOptions Class](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm#apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions)**
    Contains options for creating an insurance rating. Use this class to control pricing execution, configuration rules, and the response data, such as context JSON, product details, rating results, when running a rating operation.
-   **[GenerateInsuranceClausesOptions Class](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions.htm#apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions)**
    Contains options for generating insurance clauses. Use this class to control context saving, manual clause generation, and asynchronous clause generation when generating product clauses for insurance products.
-   **[UpdateInsuranceQuoteOptions Class](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm#apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions)**
    Contains options for updating an existing insurance quote. Use this class to control pricing execution, configuration and qualification rules, product catalog validation, and quote persistence when updating insurance quotes.

## Related Topics

- AddEligibleInsuranceClausesOptions Class (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_AddEligibleInsuranceClausesOptions.htm)
- CreateInsuranceQuoteOptions Class (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm)
- CreateInsuranceRatingOptions Class (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm)
- GenerateInsuranceClausesOptions Class (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions.htm)
- UpdateInsuranceQuoteOptions Class (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm)
