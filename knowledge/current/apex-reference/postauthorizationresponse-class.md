---
title: "PostAuthorizationResponse Class"
domain: apex-reference
topic: postauthorizationresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.034Z
estimatedTokens: 298
namespace: CommercePayments
keywords: [PostAuthorizationResponse, Response, sent, payment, gateway, adapter, postauthorization, service., Usage]
---

# PostAuthorizationResponse Class

> Response sent by the payment gateway adapter for a
            postauthorization service.

**Namespace:** `CommercePayments`

# PostAuthorizationResponse Class

Response sent by the payment gateway adapter for a postauthorization service.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

This class extends [AbstractTransactionResponse](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm). The constructor of this class takes no arguments. For example:

CommercePayments.PostAuthorizationResponse authr = new CommercePayments.PostAuthorizationResponse();

Contains information about the payment gateway’s response following an authorization transaction. The gateway adapter uses the payment gateway’s response to populate the PostAuthorizationResponse fields. The payments platform uses the information from this class to settle the transaction.

-   **[PostAuthorizationResponse Methods](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_methods.htm)**
    Lists the methods for the PostAuthorizationResponse.

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- PostAuthorizationResponse Methods (atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationResponse_methods.htm)
