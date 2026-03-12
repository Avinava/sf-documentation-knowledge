---
title: "Request Bodies"
domain: nonprofit-cloud
topic: request-bodies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.281Z
estimatedTokens: 391
keywords: [Bodies, Group, Membership, Households, APIs, Fundraising, API]
---

# Request Bodies

> Learn more about the available Fundraising API request bodies.

# Request Bodies

Learn more about the available Fundraising API request bodies.

-   **[Address Details](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_address_detail.htm)**
    Input representation of the donor's address details.
-   **[Campaign Details Input](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_campaign_detail.htm)**
    Input representation of the campaign that's associated with the gift transaction.
-   **[Commitment Payment Updates Input](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_commitment_payment_updates_input.htm)**
    Input representation of the details of the payment update to the fundraising commitments.
-   **[Commitment Payment Updates Request Input](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_commitment_payment_updates_request.htm)**
    Input representation of the details of the gift commitment and payment instrument.
-   **[Create Commitment Input](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_create_commitment_input.htm)**
    Input representation of the request to create commitments.
-   **[Create Commitment Request Input](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_create_commitment_request.htm)**
    Input representation of the request to create a recurring gift commitment. This request body accepts an array of commitment requests. However, for the API version 60.0, up to 100 commitments is supported per request.<
-   **[Create Gift Input](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_create_gift_input.htm)**
    Input representation of the request to create gifts, including donor details, amount, and payment method.
-   **[Create Gift Request Input](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_create_gift_request.htm)**
    Input representation of the data required to create a new gift. This request body accepts both standard and custom fields for donor account and gift transaction. If a standard field does not appear in the request body, you can include it in the customFields section for the relevant object.
-   **[Custom Field Details Input](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_custom_field_detail.htm)**
    Input representation of the custom fields for the request to incorporate custom attributes into records.
-   **[Designation Details Input](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_designation_detail.htm)**
    Input representation of the designations that are associated with the request.
-   **[Donor Details Input](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_donor_detail.htm)**
    Input representation of the donor details that’s associated with the gift transaction.
-   **[Donor Options Details Input](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_donor_options_detail.htm)**
    Input representation of the available donor processing options that includes targeted update logic for the donor-related components of the commitment transaction.
-   **[Outreach Source Code Details Input](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_outreach_source_code_detail.htm)**
    Input representation of the outreach source code that's associated with the request.
-   **[Payment Instrument Details Input](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_payment_instrument_detail.htm)**
    Input representation of the payment instrument used for the request.
-   **[Processing Options Details Input](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_processing_options_detail.htm)**
    Input representation of the donor processing options.
-   **[Transaction Details Input](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_transaction_detail.htm)**
    Input representation of the transaction details.
-   **[Transaction Payment Update Request Input](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_transaction_payment_update_request.htm)**
    Input representation of the details of the gateway and processor metadata to update the transaction payment. If you include any other standard or custom fields in the request body beyond the specified properties, an error is shown.
-   **[Transaction Payment Updates Input](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_transaction_payment_updates_input.htm)**
    Input representation of the gateway and processor metadata to update the transaction payment. If you include any other standard or custom fields in the request body beyond the specified properties, an error is shown.
-   **[Update Commitment Input](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_update_commitment_input.htm)**
    Input representation of the request to update a commitment.

## Related Topics

- Address Input (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_address_input.htm)
- Account Input (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_account_input.htm)
- Account Relation Input (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_account_relation_input.htm)
- Group Definition Input (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_group_definition_input.htm)
- Group Input (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_group_input.htm)
- Group Merge Input (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_group_merge_input.htm)
- Member Record Input (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_member_record_input.htm)
- Relationships Input (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_relationships_input.htm)
- Address Details (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_address_detail.htm)
- Campaign Details Input (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_campaign_detail.htm)
