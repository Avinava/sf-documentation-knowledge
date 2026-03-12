---
title: "Salesforce Billing Global Payment API"
domain: blng-dev
topic: salesforce-billing-global-payment-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.939Z
estimatedTokens: 799
keywords: [Salesforce, Billing, Payment, API, transactions, you’re, working, transaction, gateway, review, guidelines]
---

# Salesforce Billing Global Payment API

> Salesforce Billing exposes payment transactions as global API. When you’re working with
  our transaction API in your payment gateway, review important guidelines.

# Salesforce Billing Global Payment API

Salesforce Billing exposes payment transactions as global API. When you’re working with our transaction API in your payment gateway, review important guidelines.

Salesforce Billing acts as a pass-through layer for transactions. It routes the processing of input parameters to a payment gateway package and then returns the result of the transaction to the API caller.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Salesforce Billing doesn’t perform any implicit operations as a result of calling the transaction API. Our global methods provide only a layer to interact with a payment gateway to process a payment transaction. For example, calling the chargeTransaction global API on its own doesn’t create a payment transaction object or a payment object.

All global methods in the blng namespace use the following input parameter structure.

Input - Map<String, TransactionParameter> mapOfTransactionParameterById

The map represents a unique string, such as an invoice number. The value is an instance of the TransactionParameter class, which contains the information needed to build a payment request.

All global methods in the blng namespace use the following output parameter structure.

Output - List<TransactionResult>

When a payment gateway sends a response following a transaction request, your payment gateway package evaluates the response and stores the information in the TransactionResult class.

Salesforce Billing global payment API includes the following methods.

| API Method Name | Description |
| --- | --- |
| generateToken | Generates a token for a given input. |
| authorizeTransaction | Authorizes a transaction. |
| captureTransaction | Captures an unauthorized transaction. |
| voidRefundTransaction | Voids a refund transaction. |
| chargeTransaction | Charges a transaction. |
| voidTransaction | Voids a payment transaction (charge or capture). |
| refundTransaction | Refunds a payment transaction for a payment that was made previously in the same gateway. |
| voidTokenTransaction | Voids a token. |
| getPaymentStatus | Identifies the status of a payment transaction. |
| getRefundStatus | Identifies the status of a refund transaction. |
| nonReferredRefund | Performs a nonreference refund. |

-   **[Sending Transaction Information with TransactionParameter](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_transaction_parameter_overview.htm)**
    The transaction parameter class represents a list of transaction field values that Salesforce Billing sends to the payment gateway package. You can set the class’s attributes through Salesforce Billing global API, the Payment Center, or a payment run.
-   **[Mapping Gateway Responses to Payment Transactions with TransactionResult](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_transaction_result_overview.htm)**
    The TransactionResult class contains a list of information that the payment gateway sends in response to a transaction request. For charge transactions, your payment gateway package evaluates this information and maps it to a Payment Transaction record in Salesforce Billing.

## Related Topics

- Sending Transaction Information with TransactionParameter (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_transaction_parameter_overview.htm)
- Mapping Gateway Responses to Payment Transactions with TransactionResult (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_transaction_result_overview.htm)
