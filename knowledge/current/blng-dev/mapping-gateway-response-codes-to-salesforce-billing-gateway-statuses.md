---
title: "Mapping Gateway Response Codes to Salesforce Billing Gateway Statuses"
domain: blng-dev
topic: mapping-gateway-response-codes-to-salesforce-billing-gateway-statuses
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.953Z
estimatedTokens: 1150
keywords: [Mapping, Gateway, Codes, Salesforce, Billing, Statuses, Payment, gateways, operations, categorizes, seven, Status, transaction, record, lets]
---

# Mapping Gateway Response Codes to Salesforce Billing Gateway Statuses

> Payment gateways have many response codes for payment operations. Salesforce Billing
  categorizes these codes into one of seven Gateway Status field values on your payment transaction
  record. The gateway status lets you know the result of a gateway call and whether you must correct
  anything. When you configure a payment gateway package, create metadata that maps your chosen
  gateway’s response codes to one of the statuses.

# Mapping Gateway Response Codes to Salesforce Billing Gateway Statuses

Payment gateways have many response codes for payment operations. Salesforce Billing categorizes these codes into one of seven Gateway Status field values on your payment transaction record. The gateway status lets you know the result of a gateway call and whether you must correct anything. When you configure a payment gateway package, create metadata that maps your chosen gateway’s response codes to one of the statuses.

First, let’s look at the values for the payment transaction’s Status field in Salesforce Billing. When your gateway integration sets Status to a value, Salesforce Billing attempts to perform the action listed in the Salesforce Billing Action column in the following table.

| Response | Definition | Salesforce Billing Action |
| --- | --- | --- |
| Success | The gateway call succeeded. | Attempt payment creation and allocation. |
| Decline | The gateway call failed, but it can still work if you try again. For example, the customer had insufficient funds or briefly lost their connection to the internet. This response is also known as a “soft decline.” | Update the payment run’s decline count. Create payment transaction with gateway status of Decline. |
| Validation Error | Customer payment data is incorrect, such a misspelling in the credit card address or incorrect CVV. | Create a payment transaction with a gateway status of Validation Error. |
| Permanent Fail | The gateway call failed and won’t work even if you try again. If you receive this response, don’t make further payments using the related payment method. | Create a payment transaction with a gateway status of Permanent Fail. |
| Requires Review | The customer bank requires additional information before completing the payment. | Create a payment transaction with gateway status of Requires Review. |
| Indeterminate | The gateway didn’t respond to the call. This response usually happens when Salesforce Billing times out waiting for the response. This response doesn’t increase the payment run’s failure count. | Lock the invoice from further payment runs. Create a payment transaction with a gateway status of Indeterminate. Allow users to autovoid or manually create a payment. |
| System Fail | Salesforce Billing ended the payment request call before receiving a response. For example, Salesforce Billing lost credentials or lost access to its server. This response increases the payment run’s failure count. Salesforce Billing ends payment calls if it doesn’t receive a response from the gateway in two minutes. | Create a payment transaction with a gateway status of System Fail. Allow users to autovoid or manually create a payment. |

Response codes and descriptions vary between payment gateway providers. Let’s look at a few examples and see how they can map to a gateway status.

| Gateway | Code | Gateway’s Description | Salesforce Billing Equivalent |
| --- | --- | --- | --- |
| Payeezy | 100 | “Approved” | Success |
| CyberSource | 151 | “The request was received, but a server timeout occurred. This error doesn’t include timeouts between the client and the server.”“To avoid duplicating the transaction, don’t resend the request until you have reviewed the transaction status at the Business Center. See the documentation for your CyberSource client for more information.” | Indeterminate |
| PayFlowPro | 4 | “Invalid amount format. Use the format '#####.##' Don’t include currency symbols or commas.” | System |
| AuthorizeDotNet | E00057 | “The user doesn’t have permissions to submit requests from a mobile device.” | Fail |

-   **[Configure Response Code Metadata in Your Payment Gateway Package](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_configure_response_code_metadata.htm)**
    Payment gateway packages require a custom metadata type file to communicate with Salesforce Billing. The custom metadata type defines the custom object and fields that the gateway package uses to store request and response information sent from the payment gateway. Your custom metadata type file evaluates the value of your gateway package’s custom gateway field. Then, the file must convert the gateway field to a value that Salesforce Billing sends to the payment transaction’s Status field.
-   **[Configuring Salesforce Billing to Read Your Mapping Metadata](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_configure_billing_read_metadata.htm)**
    After you’ve set up your mapping metadata, configure your payment gateway adapter Apex class to read the gateway status and assign it to TransactionResult.

## Related Topics

- Configure Response Code Metadata in Your Payment Gateway Package (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_configure_response_code_metadata.htm)
- Configuring Salesforce Billing to Read Your Mapping Metadata (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_configure_billing_read_metadata.htm)
