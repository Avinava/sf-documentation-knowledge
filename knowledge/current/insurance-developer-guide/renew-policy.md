---
title: "Renew Policy"
domain: insurance-developer-guide
topic: renew-policy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.107Z
estimatedTokens: 1055
keywords: [Renew, Policy, renewal, process, extending, insurance, coverage, additional, term, typically, current, approaches, effective-to, date, key, extends, creating, new, record, journey]
---

# Renew Policy

> Policy renewal is the process of extending insurance coverage for an additional policy
    term, typically as the current policy approaches its effective-to date. A key part of renewal is
    that a renewed policy creates a new policy record.

# Renew Policy

Policy renewal is the process of extending insurance coverage for an additional policy term, typically as the current policy approaches its effective-to date. A key part of renewal is that a renewed policy creates a new policy record.

Make sure you have these details.

-   Policy ID of the active insurance policy that’s to be renewed.
-   Pricebook ID as it's a required input for generating an endorsement quote.

If the policyholder changes their information, it affects the terms or prices of the renewed policy. This journey describes renewing a policy where a formal renewal quote is generated. After the customer confirms the renewal quote, a new policy record is created for the new renewal term.

This diagram outlines the sequence of renewing an existing policy.

![A flow diagram representing the sequence of renewing a policy.](/docs/resources/img/en-us/260.0?doc_id=insurance%2Fimages%2Frenew_policy_with_quote.png&folder=insurance_developer_guide)

1.  **Get Policy Context**—Use the policy ID to get the context either by:
    -   Making a GET request on the [Insurance Policy Details](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_get_policy.htm "HTML (New Window)") Connect API, or
    -   Using the [Get Insurance Policy](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_get_insurance_policy.htm "HTML (New Window)") invocable action.
2.  **Create Renewal Quote**—Use the policy context to create a renewal quote either by:

    -   Making a POST request on the [Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_quote.htm "HTML (New Window)") Connect API, or
    -   Using the [Create Insurance Quote Action](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_create_quote.htm "HTML (New Window)") invocable action.

    Specify the pricebookId during the API call. You can change the header-level fields of the quote, such as the quote name or the start date of the renewal term by specifying these values as the input parameters during the API call.

    A new quote record is generated for the policy renewal. After the customer confirms the updated quote price, proceed with the next steps in the renewal workflow.

3.  **(Optional)Modify Renewal Quote**—If policyholders want to modify the endorsement quote, make a PATCH request on the [Insurance Quote Details](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_quote_details.htm "HTML (New Window)") Connect API with the desired changes.

    An updated, price-adjusted context is returned in the response.

4.  **Renew Policy**—Use the retrieved context to create a new policy record for the renewal term either by:

    -   Making a POST request on the [Renew Insurance Policy](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_renew_policy.htm "HTML (New Window)") Connect API, or
    -   Using the [Renew Insurance Policy Action](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_renew_insurance_policy.htm "HTML (New Window)") invocable action.

    You can change or confirm the policy name, policy number, and effective start and end dates for the renewed policy directly during the API call. Additionally, you can also specify a name for the transaction record that's created along with the renewal record. This transaction record captures the financial details or the audit information related to the renewal record.


**Expected Results:**

-   A brand new policy record is created in Salesforce, representing the coverage for the new policy term. The new policy record includes the details, such as any changed terms, coverages, prices, and the new start and end dates.
-   A transaction record is created and linked to the new policy.
