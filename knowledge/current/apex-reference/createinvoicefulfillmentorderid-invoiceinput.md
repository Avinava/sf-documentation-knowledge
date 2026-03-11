---
title: "createInvoice(fulfillmentOrderId,
    invoiceInput)"
domain: apex-reference
topic: createinvoicefulfillmentorderid-invoiceinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.131Z
keywords: [createInvoice, fulfillmentOrderId, invoiceInput, Create, invoice, FulfillmentOrder, doesn’t, one., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Example]
---

# createInvoice(fulfillmentOrderId,
    invoiceInput)

> Create an invoice for a FulfillmentOrder that doesn’t have
    one.

### createInvoice(fulfillmentOrderId, invoiceInput)

Create an invoice for a FulfillmentOrder that doesn’t have one.

#### API Version

48.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.FulfillmentOrderInvoiceOutputRepresentation createInvoice(String fulfillmentOrderId, ConnectApi.FulfillmentOrderInvoiceInputRepresentation invoiceInput)

#### Parameters

fulfillmentOrderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the FulfillmentOrder.

invoiceInput

Type: [ConnectApi.FulfillmentOrderInvoiceInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_fulfillment_order_invoice.htm "Instantiate and include this object with no properties when creating an invoice.")

Required input with no data.

#### Return Value

Type: [ConnectApi.FulfillmentOrderInvoiceOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_fulfillment_order_invoice_output.htm "ID of the created invoice.")

#### Example

```

```