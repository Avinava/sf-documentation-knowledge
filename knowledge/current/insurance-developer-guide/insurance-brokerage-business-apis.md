---
title: "Insurance Brokerage Business APIs"
domain: insurance-developer-guide
topic: insurance-brokerage-business-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.812Z
estimatedTokens: 615
keywords: [Insurance, Brokerage, Business, APIs, manage, policy, lifecycle, commissions, plan, benefits]
---

# Insurance Brokerage Business APIs

> Use the Insurance Brokerage Business APIs to manage policy lifecycle, brokerage
    commissions, and plan benefits.

# Insurance Brokerage Business APIs

Use the Insurance Brokerage Business APIs to manage policy lifecycle, brokerage commissions, and plan benefits.

This table lists the available Insurance Brokerage resources.

| Resource | Description |
| --- | --- |
| /connect/insurance/brokerage/policies/bulk-cancel (POST) | Bulk cancel policies with the same for specified insurance policy IDs. |
| /connect/insurance/brokerage/policies/bulk-renew (POST) | Bulk renew policies for specified insurance policy IDs. |
| /connect/insurance/brokerage/commission/process (POST) | Process commission statements in an asynchronous manner using a preconfigured batch job. |
| /connect/insurance/brokerage/policies/policyId/expected-rates (PATCH) | Calculate the premium, fee, or premium-equivalent amount at InsuranceRatePlanLineItem based on the underlying rate plan. |
| /connect/insurance/brokerage/policies/policyId/expected-revenue (PATCH) | Calculate the expected revenue, which is derived both from an Insurance Rate Plan Commission object, such as a flat fee and percentage premium, and the premium, fee, or premium equivalent amount on Insurance Rate Plan. |
| /connect/insurance/brokerage/coverages/coverageId/benefits (POST) | Get, create, update and delete Insurance Policy Coverage Networks and Insurance Policy Coverage Benefits of an Insurance Policy Coverage. |
| /connect/insurance/brokerage/coverages/coverageId/benefits/product (GET) | Get the product model details along with child components and their attributes for a given insurance policy coverage. |
| /connect/insurance/brokerage/policies/policyId/renew (POST) | Renew policy for the specified insurance policy ID. |
| /connect/insurance/billing/billing-schedules (POST) | Create billing schedules from insurance policy transactions to generate financial records for policy lifecycle events. |

-   **[Resources](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/insurance_brokerage_business_apis_resources.htm)**
    Learn about the available Insurance Brokerage API resources.
-   **[Requests](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/insurance_brokerage_business_apis_requests.htm)**
    Learn about the available Insurance Brokerage API requests.
-   **[Responses](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/insurance_brokerage_business_apis_responses.htm)**
    Learn about the response bodies of Insurance Brokerage APIs.

## Related Topics

- /connect/insurance/brokerage/policies/bulk-cancel (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_brokerage_bulk_cancel_policy.htm)
- /connect/insurance/brokerage/policies/bulk-renew (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_brokerage_bulk_renew_policy.htm)
- /connect/insurance/brokerage/commission/process (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_commission_processing.htm)
- /connect/insurance/brokerage/policies/policyId/expected-rates (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_cost_calculation.htm)
- /connect/insurance/brokerage/policies/policyId/expected-revenue (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_expected_revenue.htm)
- /connect/insurance/brokerage/coverages/coverageId/benefits (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_plan_benefits.htm)
- /connect/insurance/brokerage/coverages/coverageId/benefits/product (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_plan_benefits_product_model.htm)
- /connect/insurance/brokerage/policies/policyId/renew (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_brokerage_renew_policy.htm)
- /connect/insurance/billing/billing-schedules (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_billing.htm)
- Resources (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/insurance_brokerage_business_apis_resources.htm)
