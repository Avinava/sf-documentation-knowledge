---
title: "Endorse Multi-Root Policy"
domain: insurance-developer-guide
topic: endorse-multi-root-policy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.777Z
estimatedTokens: 1003
keywords: [Endorse, Multi-Root, Policy, Modifies, active, insurance, creating, new, versions, parent, child, policies, regardless, changed, resulting, Perform, mid-term, adjustment, pricing, handled]
---

# Endorse Multi-Root Policy

> Modifies an active multi-root insurance policy by creating new versions of the parent
  policy and all child policies, regardless of which child policy is changed. The resulting policy
  versions include recalculated standard and prorated premiums based on the endorsement effective
  date.

# Endorse Multi-Root Policy

Modifies an active multi-root insurance policy by creating new versions of the parent policy and all child policies, regardless of which child policy is changed. The resulting policy versions include recalculated standard and prorated premiums based on the endorsement effective date.

Make sure you have these details before endorsing a multi-root policy

-   The Policy ID of the active parent insurance policy to be endorsed.
-   The Pricebook ID required to generate the endorsement quote.
-   Details of the modifications to apply to the policy, such as coverages to add or remove and updated limit amounts.
-   For multi-root quotes configured through the Quote UI, click the Reprice All button on the Transaction Line Item Table (TLT) after all products are configured to ensure pricing and aggregate amounts are correctly reflected at the quote level.

1.  Get Policy Context—Retrieve the policy context by using the policy ID through one of the following methods:
    -   Make a GET request to the [Insurance Policy Details](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_get_policy.htm) Connect API.
    -   Use the [Get Insurance Policy](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_get_insurance_policy.htm) invocable action.
2.  Create Endorsement Quote—Use the policy context to create the endorsement quote container by using one of the following methods:

    -   Make a POST request to the [CreateUpdateQuote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_quote.htm) Connect API.
    -   Use the [Create Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_create_quote.htm) invocable action.

    Specify the contextId and pricebookId during the API call.

    Creates an endorsement quote associated with the active policy. After the policyholder confirms the updated quote price, proceed with the next steps in the endorsement workflow.

3.  Create or Update Quote (PATCH)—Configure and price the endorsement changes by making a PATCH request to the [CreateUpdateQuote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_quote_details.htm) API using the quoteId and user inputs.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=insurance_developer_guide)

    #### Note

    For multi-root policies, ensure pricing is recalculated across all root products to accurately compute aggregate totals and prorated term premiums.

4.  Endorse Multi-Root Policy—Use the updated context to endorse the policy by using one of the following methods:
    -   Make a POST request to the [Multi-Root Policy Endorsement](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_multi_root_endorsement_policy.htm) Connect API.
    -   Use the [Endorse Multi-Root Policy](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_endorse_multi_root_insurance_policy.htm) invocable action.

-   Returns an Async Request ID in the response to track the job status.
-   Creates a new version of the parent policy and all associated child policies.
-   Recalculates standard and prorated premiums based on the endorsement effective date and rolls them up to the parent policy.
-   Creates a corresponding transaction record for each child policy. In addition, creates a parent policy transaction that represents the rolled-up premium from all associated child policy transactions.
-   Generates transaction records that document the financial impact of the endorsement.
