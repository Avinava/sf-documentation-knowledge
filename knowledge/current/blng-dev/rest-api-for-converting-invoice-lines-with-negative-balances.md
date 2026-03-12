---
title: "REST API for Converting Invoice Lines with Negative Balances"
domain: blng-dev
topic: rest-api-for-converting-invoice-lines-with-negative-balances
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.880Z
estimatedTokens: 493
keywords: [REST, API, Converting, Invoice, Lines, Negative, Balances, service, blng__NegativeInvoiceToCreditNoteAction, evaluate, invoices, bulk, credit, notes, containing]
---

# REST API for Converting Invoice Lines with Negative Balances

> Use the REST API service blng__NegativeInvoiceToCreditNoteAction to evaluate invoices in bulk and create credit
  notes for each invoice containing invoice lines with negative balances.

# REST API for Converting Invoice Lines with Negative Balances

Use the REST API service blng\_\_NegativeInvoiceToCreditNoteAction to evaluate invoices in bulk and create credit notes for each invoice containing invoice lines with negative balances.

This object is available in API version 48.0 and later.

## Supported REST HTTP Methods

URI

/services/data/XX.X/actions/custom/apex/blng\_\_NegativeInvoiceToCreditNoteAction

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Parameters

| Parameter | Description |
| --- | --- |
| invoiceId | TypeIDDescriptionThe REST service evaluates this invoice for invoice lines with a negative balance. For each invoice, it creates a credit note containing one credit note line for each negative invoice line, unless an error occurs during credit note line creation. If even one of the -ve invoice line conversions errors out, all of them fail. No partial conversion can occur.Each credit note line has a balance that’s the positive equivalent of the corresponding negative invoice line. The credit note lines are unallocated, so users must manually allocate them as needed. |

## Response Body

| Parameter | Description |
| --- | --- |
| invoiceId | TypeStringDescriptionThe invoice that the REST service evaluated. |
| isSuccess | TypeBooleanDescriptionIndicates whether the invoice was successfully evaluated (True) or could not be evaluated (False). |
| errorMessage | TypeStringDescriptionError message indicating why the REST service couldn’t convert any negative invoice lines on the provided invoice. For example, the invoice did not have any negative invoice lines. |
|  |  |

## Samples

Sample Request Body

This payload passes two invoice IDs to the negative invoice line conversion service.

```

```

Sample Response Body

In this case, we receive a response with one error because the sample payload contained an invoice that didn’t have any negative invoice lines.

```

```

## Code Examples

```
{
"inputs":[
        {
            "invoiceId":"a1oS0000001NEixIAG"
        },
        {
            "invoiceId":"a1oS0000001NEixIAE"
        }
    ]
}
```

```
[
    {
        "actionName" : "blng__NegativeInvoiceToCreditNoteAction",
        "errors" : null,
        "isSuccess" : true,
        "outputValues" : {
            "errorMessage" : "Null"
            "invoiceId" : "a1oS0000001NEixIAG"
            "isSuccess" : "true" 
        }
    }

 {
        "actionName" : "blng__NegativeInvoiceToCreditNoteAction",
        "errors" : null,
        "isSuccess" : true,
        "outputValues" : {
            "errorMessage" : "The invoice does not have any negative invoice lines."
            "invoiceId" : "a1oS0000001NEixIAE"
            "isSuccess" : "false" 
        }
    }

]
```
