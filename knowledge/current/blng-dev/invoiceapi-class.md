---
title: "InvoiceAPI Class"
domain: blng-dev
topic: invoiceapi-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.048Z
estimatedTokens: 695
keywords: [InvoiceAPI, API, Apex, Salesforce, Billing, call, cancel, rebill, invoice, credit, Usage, creditInvoice, invoiceId, action]
---

# InvoiceAPI Class

> Global API Apex class for Salesforce Billing. Contains methods
            that you can call to cancel and rebill an invoice, or to credit an
        invoice.

# InvoiceAPI Class

Global API Apex class for Salesforce Billing. Contains methods that you can call to cancel and rebill an invoice, or to credit an invoice.

## Namespace

blng

## Usage

The InvoiceAPI class contains the creditInvoice method, which can be used to cancel and rebill an invoice, or to credit an invoice for a specified invoice ID.

-   **[InvoiceAPI Methods](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_InvoiceAPI.htm#apex_blng_InvoiceAPI_methods)**
    Learn more about the methods available with the InvoiceAPI class.

## InvoiceAPI Methods

Learn more about the methods available with the InvoiceAPI class.

The InvoiceAPI class includes these methods.

-   **[creditInvoice(invoiceId, action)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_InvoiceAPI.htm#apex_blng_InvoiceAPI_creditInvoice)**
    Use this method to cancel or rebill an invoice, or to credit an invoice.

### creditInvoice(invoiceId, action)

Use this method to cancel or rebill an invoice, or to credit an invoice.

#### Signature

global static String creditInvoice(Id invoiceId, String action)

#### Parameters

invoiceId

Type: String

ID of the invoice.

action

Type: String

Action to perform against the invoice. For example, Credit or Cancel and Rebill.

Valid values are:

-   Credit—The invoice must be in the Posted status.
-   Cancel and Rebill—

    If the invoice is in Posted status, then this action creates a credit note equal to the invoice’s total balance. The credit note contains credit note lines that are allocated in full to each of the invoice lines. This action also reverts the billing fields of an order product to their previous values. The status of the invoice is changed to Rebilled.

    If the invoice is in Draft status, then Salesforce Billing sets the status to Cancelled for the invoice and all invoice lines. This action also sets the**Invoice Run Processing Status** field of the order products to Pending Billing status.

    See [Cancel and Rebill an Invoice](https://help.salesforce.com/s/articleView?id=sales.blng_cancel_and_rebill.htm&type=5&language=en_US "HTML (New Window)").


#### Return Value

Type: String

#### Usage

Keep these considerations in mind when using this method.

-   The invoice must not have any allocations before the credit invoice action is requested.
-   The associated CreditNote, CreditNoteLine, and CreditNoteAllocation records are created against the posted invoice for both Credit and Cancel and Rebill actions. The status of the invoice is changed to Credited.

For more information about Cancel and Rebill, as well as Credit actions, see [Issuing Credits](https://help.salesforce.com/s/articleView?id=sales.blng_credit_notes.htm&language=en_US "HTML (New Window)").

#### Example

```

```

```

```

## Code Examples

```
blng.InvoiceAPI.creditInvoice('aF15t000000GmjKCAS', 'Cancel and Rebill');
```

```
blng.InvoiceAPI.creditInvoice('aF15t000000GmjKCAS', 'Credit');
```

## Related Topics

- InvoiceAPI Methods (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_InvoiceAPI.htm)
- creditInvoice(invoiceId, action) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_InvoiceAPI.htm)
