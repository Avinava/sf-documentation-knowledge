---
title: "Endorse Policy"
domain: insurance-developer-guide
topic: endorse-policy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.785Z
estimatedTokens: 1194
keywords: [Endorse, Policy, endorsement, known, Mid-Term, Adjustment, MTA, process, making, modifications, active, insurance, term, Common, include, change, changes, version, premiums, user]
---

# Endorse Policy

> Policy endorsement, also known as Mid-Term Adjustment (MTA), is the process of making
    modifications to an active insurance policy during its term. Common modifications include adding
    or removing coverage, or updating policy attributes, such as limits and deductibles.
    Endorsements usually affect the policy price and create a new policy version instead of updating
    the existing record. This new version includes the applied changes, along with a recalculated
    standard premium. It also contains a prorated term premium that’s calculated based on the
    effective date of the endorsement.

# Endorse Policy

Policy endorsement, also known as Mid-Term Adjustment (MTA), is the process of making modifications to an active insurance policy during its term. Common modifications include adding or removing coverage, or updating policy attributes, such as limits and deductibles. Endorsements usually affect the policy price and create a new policy version instead of updating the existing record. This new version includes the applied changes, along with a recalculated standard premium. It also contains a prorated term premium that’s calculated based on the effective date of the endorsement.

Make sure you have these details.

-   Policy ID of the active insurance policy to be endorsed.
-   Pricebook ID is a required input for generating an endorsement quote.
-   Details of the modifications to be made to the policy, such as specific coverages to add or remove, and new limit amounts.

This diagram outlines the sequence of endorsing a policy, where any changes are initially processed through a quote to assess the pricing impact.

![A flow diagram representing the sequence of endorsing a policy based on a quote.](/docs/resources/img/en-us/260.0?doc_id=insurance%2Fimages%2Fendorse_policy_with_salesforce_quote.png&folder=insurance_developer_guide)

1.  **Get Policy Context**—Use the policy ID to get the context either by:
    -   Making a GET request on the [Insurance Policy Details](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_get_policy.htm "HTML (New Window)") Connect API, or
    -   Using the [Get Insurance Policy](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_get_insurance_policy.htm "HTML (New Window)") invocable action.
2.  **Create Endorsement Quote**—Use the policy context to create the endorsement quote either by:

    -   Making a POST request on the [Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_quote.htm "HTML (New Window)") Connect API, or
    -   Using the [Create Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_create_quote.htm "HTML (New Window)") invocable action.

    Specify the contextId and pricebookId during the API call. You can update the header-level fields of the quote, such as the quote name or effective date for the endorsement, by specifying these values as the input parameters during the API call.

    A new quote record is generated for the endorsement. After the policyholder confirms the updated quote price, proceed with the next steps in the endorsement workflow.

3.  **(Optional)Modify Endorsement Quote**—If policyholders want to modify the endorsement quote, make a PATCH request on the [Insurance Quote Details](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_quote_details.htm "HTML (New Window)") Connect API with the required changes.

    An updated, price-adjusted context is returned in the response.

4.  **Endorse Policy**—Use the retrieved context to endorse a policy either by:

    -   Making a POST request on the [Endorse Insurance Policy](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_endorse_policy.htm "HTML (New Window)") Connect API, or
    -   Using the [Endorse Insurance Policy](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_endorse_insurance_policy.htm "HTML (New Window)") invocable action.

    You can change the context fields, such as the policy name or policy number, directly during the API call. You can also provide a name for the transaction record that's created along with the endorsement.

    This transaction record documents the financial details and audit information associated with the MTA.

    A new endorsed policy version is created.


**Expected Results:**

-   A new policy version record is created in Salesforce, which includes the endorsed changes.
-   A new policy version is created with an updated effective-from date. The effective-to date of the existing policy version is adjusted to an end date just before the new version begins, ensuring continuous but non-overlapping coverage.
-   The new policy version has the updated premium information, including the new standard premium and the prorated term premium, accurately calculated and stored.
-   A transaction record is created and linked to the endorsement activity.
