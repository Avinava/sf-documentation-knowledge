---
title: "Mapping Gateway Responses to Payment Transactions with TransactionResult"
domain: blng-dev
topic: mapping-gateway-responses-to-payment-transactions-with-transactionresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.002Z
estimatedTokens: 400
keywords: [Mapping, Gateway, Responses, Payment, Transactions, TransactionResult, transaction, charge, package, evaluates, maps, record, Salesforce, Billing]
---

# Mapping Gateway Responses to Payment Transactions with TransactionResult

> The TransactionResult class contains a list of
  information that the payment gateway sends in response to a transaction request. For charge
  transactions, your payment gateway package evaluates this information and maps it to a Payment
  Transaction record in Salesforce Billing.

# Mapping Gateway Responses to Payment Transactions with TransactionResult

The TransactionResult class contains a list of information that the payment gateway sends in response to a transaction request. For charge transactions, your payment gateway package evaluates this information and maps it to a Payment Transaction record in Salesforce Billing.

For complete reference information on the TransactionResult class’s methods and parameters, review [TransactionResult Class](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionResult.htm#apex_class_blng_TransactionResult "Holds the result of the transaction.").

TransactionResult methods map their output to specific fields on the payment transaction object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=blng_dev)

#### Note

The payment gateway package doesn’t create a payment transaction for tokenization and refund transactions.

| Field Label | API Name | TransactionResult Method |
| --- | --- | --- |
| Card Code Response | blng__CardCodeResponse__c | setCardCodeResponse() |
| Gateway Status | blng__GatewayStatus__c | setGatewayStatus() |
| Request-Type of Payment | blng__RequestTypeOfPayment__c | Internal |
| Response | blng__Response__c | Internal |
| Response Code | blng__ResponseCode__c | setResponseCode() |
| Response Gateway ID | blng__GatewayID__c | setGatewayId() |
| Response Message | blng__ResponseMessage__c | setResponseMessage() |
| Response Status | blng__ResponseStatus__c | Internal |
| Status | blng__Status__c | Internal |
| Type | blng__Type__c | Charge, Refund, Void |

## Related Topics

- TransactionResult Class (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionResult.htm)
