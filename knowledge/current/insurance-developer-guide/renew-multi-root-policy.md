---
title: "Renew Multi-Root Policy"
domain: insurance-developer-guide
topic: renew-multi-root-policy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.078Z
estimatedTokens: 819
keywords: [Renew, Multi-Root, Policy, new, term, parent, associated, child, policies, parent–child, structure, preserved, renewed, Creates, pricing, handled, Rating, API, instead, quote]
---

# Renew Multi-Root Policy

> Renew a multi-root policy to create a new policy term for the parent policy and all
  associated child policies. The parent–child policy structure is preserved in the renewed
  term.

# Renew Multi-Root Policy

Renew a multi-root policy to create a new policy term for the parent policy and all associated child policies. The parent–child policy structure is preserved in the renewed term.

Make sure you have these details before renewing a multi-root policy:

-   The Policy ID of the active parent insurance policy to be renewed.
-   The Pricebook ID required to generate the renewal quote.

1.  Get Policy Context—Retrieve the policy context by using the policy ID through one of the following methods:

    -   Make a GET request to the [Insurance Policy Details](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_get_policy.htm) Connect API.
    -   Use the [Get Insurance Policy](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_get_insurance_policy.htm) invocable action.

    Returns the context required to generate the renewal quote.

2.  Create Renewal Quote—Use the policy context to create the renewal quote by using one of the following methods:

    -   Make a POST request to the [CreateUpdateQuote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_quote.htm) Connect API.
    -   Use the [Create Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_create_quote.htm) invocable action and specify the contextId and pricebookId.

    Creates a renewal quote associated with the active policy.

3.  Modify Renewal Quote (Optional)—Configure changes to the renewal terms by making a PATCH request to the [CreateUpdateQuote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_quote_details.htm) Connect API with the desired updates.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=insurance_developer_guide)

    #### Note

    For multi-root policies, ensure pricing is recalculated across all root products to accurately compute aggregate totals and prorated term premiums.

4.  Renew Multi-Root Policy—Use the updated context to renew the policy by using one of the following methods:
    -   Make a POST request to the [Multi-Root Policy Renewal](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_policy_multi_root_renew.htm) Connect API.
    -   Use the [Renew Multi-Root Policy](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_renew_multi_root_insurance_policy.htm) invocable action.

-   Returns an Async Request ID in the response to track the job status.
-   Creates a new parent policy record and corresponding child policy records for the new term.
-   Creates a corresponding transaction record for each child policy. In addition, creates a parent policy transaction that represents the rolled-up premium from all associated child policy transactions.
-   Consolidates financial details at the parent policy level.
