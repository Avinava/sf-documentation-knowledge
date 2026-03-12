---
title: "Issue Policy"
domain: insurance-developer-guide
topic: issue-policy
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:41.014Z
estimatedTokens: 818
keywords: [Issue, Policy, issuance, process, begins, policyholder, accepts, quote, provided, insurance, company, new, quoting, managed, outside, Salesforce, third-party, system, results, creation]
---

# Issue Policy

> Issue a new insurance policy when quoting is managed outside Salesforce, by a
    third-party system. This process results in the creation of a policy record in Salesforce,
    formally establishing coverage for the customer.

# Issue Policy

Issue a new insurance policy when quoting is managed outside Salesforce, by a third-party system. This process results in the creation of a policy record in Salesforce, formally establishing coverage for the customer.

Use the Rating API to generate a price-adjusted context. This price-adjusted context contains the calculated premium and other relevant details that are required to issue a policy. This process bypasses the need for a formal Salesforce Quote record for pricing.

This diagram outlines the sequence of issuing a policy without using Salesforce quote, rather by using the Rating API to generate a price-adjusted context that's used to issue a policy.

![A flow diagram representing the user journey for issuing a policy by using the Rating API.](/docs/resources/img/en-us/260.0?doc_id=insurance%2Fimages%2Fissue_policy_without_quote.png&folder=insurance_developer_guide)

1.  **(Optional)Run Qualification Rules**—If customers want to determine the policyholder’s eligibility for a product, run the qualification rules either by:

    -   Making a POST request on the [Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_quote.htm "HTML (New Window)") Connect API, or
    -   Using the [Create Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_create_quote.htm "HTML (New Window)") invocable action.

    Set the saveQuote parameter to false. It doesn't save the quote and returns an updated context with the eligibility details.

2.  **Generate Price-adjusted Context**—Make a POST request on the [Insurance Product Ratings](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_product_rating.htm) Connect API.

    You must include additionalFields in the request payload with either a QuoteAccount or an Opportunity ID that's linked to an account to generate the context.

3.  **Issue Policy**—Use the price-adjusted context record to issue a policy either by:

    -   Making a POST request on the [Issue Insurance Policy](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_issue_policy.htm "HTML (New Window)") Connect API, or
    -   Using the [Issue Insurance Policy](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_issue_insurance_policy.htm "HTML (New Window)") invocable action.

    You can override the context data, such as policy name, policy number, effective-from date, effective-to date, and any other additional fields to provide the values for the custom fields during the API call. You can also specify a name for the transaction record that’s created as part of the policy issuance process. This transaction record is used to track an audit or as a financial marker.

    This request creates a new policy record.


**Expected Results:**

-   A new policy record is created and saved in Salesforce. The policy record includes the details, such as the policy name, number (if provided or created during the API call), policy start date, the coverage you chose, and the price.
-   Any custom field values that are provided during the API call are saved to the new policy record.
-   A transaction record is created and linked to the policy.
