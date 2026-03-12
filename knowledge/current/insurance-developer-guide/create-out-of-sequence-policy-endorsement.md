---
title: "Create Out of Sequence Policy Endorsement"
domain: insurance-developer-guide
topic: create-out-of-sequence-policy-endorsement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.028Z
estimatedTokens: 1349
keywords: [Sequence, Policy, Endorsement, Perform, backdated, change, past, current, future, term, another, version, effective, date, later]
---

# Create Out of Sequence Policy Endorsement

> Perform a backdated change on a policy in the past, current, or future policy term, even
  when another policy version with an effective date later than the endorsement date already exists.
  The impacted policy versions are canceled and replaced with new, repriced versions that include
  the change. The premium impact for each affected policy term is captured in an individual
  out-of-sequence endorsement transaction.

# Create Out of Sequence Policy Endorsement

Perform a backdated change on a policy in the past, current, or future policy term, even when another policy version with an effective date later than the endorsement date already exists. The impacted policy versions are canceled and replaced with new, repriced versions that include the change. The premium impact for each affected policy term is captured in an individual out-of-sequence endorsement transaction.

Make sure you have the following details.

-   Policy ID of the active insurance policy to be endorsed.
-   Context ID of the endorsement quote created from the policy version that needs modification.
-   Effective date for the endorsement must fall within a valid policy term.
-   (Optional) FieldSetIds to copy selected fields (policy, asset, participant, coverage) from the cancelled versions to the new versions.

**Example**

If a policy has three active versions (V1, V2, and V3) within a single term, and you need to make a change from an effective date which lies in the tenure of V2. You can prepare the context for OOSE using the Quote API. Get the context from policy V2. Use this context to make changes and create an updated quote with the createUpdateQuote APIs. Retrieve the quote context, and then pass this context to OOSE.

**Important**

When you retrieve the policy context and run a product-rating call, it uses the effective date from the policy context to calculate premiums and taxes. If you later endorse the policy with a different effective date or start date, the endorsed policy still consumes the tax calculations from the earlier product-rating call. To avoid incorrect results, the effective date in the product-rating call must align with the effective date range of the endorsed policy. This ensures that the premiums and taxes are calculated correctly for the endorsement’s term.

This diagram outlines the sequence for creating an out-of-sequence policy endorsement using a quote.

![oose_with_quote](/docs/resources/img/en-us/260.0?doc_id=insurance%2Fimages%2Foutofseq_endorse_with_quote.png&folder=insurance_developer_guide)

1.  **Get Policy Context**—Use the policy ID to get the context either by:
    -   Making a GET request on the [Insurance Policy Details](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_get_policy.htm "HTML (New Window)") Connect API, or
    -   Using the [Get Insurance Policy](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_get_insurance_policy.htm "HTML (New Window)") invocable action.
2.  **Create Endorsement Quote**—Use the policy context to create a renewal quote either by:

    -   Making a POST request on the [Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_quote.htm "HTML (New Window)") Connect API, or
    -   Using the [Create Insurance Quote Action](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_create_quote.htm "HTML (New Window)") invocable action.

    Specify the contextId, effectiveDate,and pricebookId during the API call.

    A new quote record is generated for the policy renewal.

3.  **(Optional)Modify Endorsement Quote**—If policyholders want to modify the endorsement quote, make a PATCH request on the [Insurance Quote Details](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_quote_details.htm "HTML (New Window)") Connect API with the required changes.

    An updated, price-adjusted context is returned in the response.

4.  **Submit out of sequence endorsement request**—Use the retrieved context to endorse a policy either by:

    -   Making a POST request on the Out-of-Sequence Endorsement Connect API, or
    -   Using the Create Out of Sequence Policy Endorsement invocable action.

    Specify the policyId, contextId,and effectiveDate and optional details such as custom transaction name, policy name, policy number, and fieldSetIds during the API call.

    This request returns a jobIdentifier that you can use to track the async process through a custom report.

    -   Identifies and fetches the impacted policy versions.
    -   Locks impacted policy versions to prevent any other operation on the impacted policies when the OOSE request is in progress.
    -   Applies deltas (add, update, delete) across all impacted versions and reprices the context.
    -   Unlocks the impacted policy versions and sends a success or failure notification.
    -   Publishes a platform event that subscribers can use for tracking status.


**Expected Results:**

-   Creates a new policy starting from the effective date of the OOSE endorsement.
-   Cancels impacted future versions and replaces them with updated versions.
-   Sets the effective-to date of older versions to endorsementDate – 1 and resets the term premiums and taxes to zero.
-   Recalculates premiums and taxes on the new versions and prorates them based on the endorsement date.
-   Creates a transaction record for each policy term and links it to the original policy version of that term for auditing and financial tracking.
