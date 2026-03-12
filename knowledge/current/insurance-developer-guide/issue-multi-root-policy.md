---
title: "Issue Multi-Root Policy"
domain: insurance-developer-guide
topic: issue-multi-root-policy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.007Z
estimatedTokens: 1029
keywords: [Issue, Multi-Root, Policy, issuance, process, begins, policyholder, accepts, quote, provided, insurance, company, creates, parent–child, structure, Creates, new, quoting, managed, outside]
---

# Issue Multi-Root Policy

> The policy issuance process begins after the policyholder accepts the quote provided by
    the insurance company. This process creates a parent–child insurance policy structure in which a
    parent policy serves as a lifecycle container for one or more insured child
    policies.

# Issue Multi-Root Policy

The policy issuance process begins after the policyholder accepts the quote provided by the insurance company. This process creates a parent–child insurance policy structure in which a parent policy serves as a lifecycle container for one or more insured child policies.

Make sure you have these details before issuing a multi-root policy:

-   The Quote ID of the finalized multi-root quote.
-   A fully priced context to pass to the Multi-Root Policy Issuance API.
-   For multi-root quotes configured through the Quote UI, click the Reprice All button on the Transaction Line Item Table (TLT) after all products are configured to ensure pricing and aggregate amounts are correctly reflected at the quote level.

1.  Create Quote—Create a quote by using one of the following methods

    -   Make a POST request on the [Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_quote.htm) connect API.
    -   Use the [Create Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_create_quote.htm) invocable action.
    -   Use the [Salesforce Quote User Interface.](https://help.salesforce.com/s/articleView?id=ind.insurance_quoting_611021.htm&type=5&language=en_US)

    Creates the quote and generates the quote ID.

2.  Get Quote Context—Retrieve the quote context by using the quote ID through one of the following methods

    -   Make a GET request to the [Insurance Quote Details](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_quote_details.htm) Connect API
    -   Use the [Get Insurance Quote Details](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_quote_details.htm) invocable action.

    Returns the context ID that contains the quote context.

3.  Issue Multi-Root Policy—Use the context details, specifically the context ID, to issue multi-root policy by using one of the following methods

    -   Make a POST request to the [Multi-Root Policy Issuance](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_multi_root_issue_policy.htm) connect API.
    -   Use the [Issue Multiroot Policy](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_issue_multi_root_insurance_policy.htm) invocable action.

    -   You can override the context data, such as policy name, policy number, effective-from date, effective-to date, and any other additional fields, to provide values for the custom fields during the API call. You can also specify a name for the transaction record that’s created as part of the policy issuance process. This transaction record is used for audit tracking and financial reference.
    -   Pricing does not occur during this lifecycle event. The context that you pass to this request must already be fully priced.
    -   All policy lifecycle operations occur only on the parent policy and not on child policies. The parent policy isn't associated with any product and doesn't have any line items or attributes, except for its associated child policies.


-   Returns an Async Request ID as a response to track the job status.
-   Creates a multi-root policy with the following structure:
    -   A parent policy that represents the policy lifecycle.
    -   One or more insured child policies, created for each root product bundle and linked to the parent policy.
-   Rolls up premiums and taxes from child policies to the parent policy for a consolidated financial view.
-   Creates a corresponding transaction record for each child policy. In addition, creates a parent policy transaction that represents the rolled-up premium from all associated child policy transactions.
-   Sends a success or failure notification after the process completes.
