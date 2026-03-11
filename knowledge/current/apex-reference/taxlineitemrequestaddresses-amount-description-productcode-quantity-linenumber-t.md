---
title: "TaxLineItemRequest(addresses, amount, description,
      productCode, quantity, lineNumber, taxCode, effectiveDate)"
domain: apex-reference
topic: taxlineitemrequestaddresses-amount-description-productcode-quantity-linenumber-t
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.346Z
keywords: [TaxLineItemRequest, addresses, amount, description, productCode, quantity, lineNumber, taxCode, effectiveDate, Initializes, request, tax, line, item., constructor, intended, test, usage, throws, exception]
---

# TaxLineItemRequest(addresses, amount, description,
      productCode, quantity, lineNumber, taxCode, effectiveDate)

> Initializes the request for the tax line item. This constructor is
      intended for test usage and throws an exception if used outside of the Apex test
    context.

### TaxLineItemRequest(addresses, amount, description, productCode, quantity, lineNumber, taxCode, effectiveDate)

Initializes the request for the tax line item. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global TaxLineItemRequest(commercetax.LineTaxAddressesRequest addresses, Double amount, String description, String productCode, Double quantity, String lineNumber, String taxCode, Datetime effectiveDate)

```

```

#### Parameters

addresses

Type: [LineTaxAddressesRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineTaxAddressesRequest.htm#apex_class_commercetax_LineTaxAddressesRequest "Stores details of the addresses applied per line item in a tax calculation request.")

Information about the addresses applied to each line item in a tax calculation request.

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

Total amount (in a given currency) represented by a line item sent for tax calculation.

description

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

User-defined description for a tax line item.

productCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Catalog code for the product represented by the tax line item.

quantity

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

Number of units of a given product that the tax line item represents.

lineNumber

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Unique number used to identify a tax line item.

taxCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Code used to identify how tax is calculated for a tax line item.

effectiveDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

This is a user-defined date used for reporting only. For negative invoice lines, this parameter represents the invoice date from the original invoice. In other cases, it represents the date when the tax transaction takes effect on the line item. The previous tax transaction type is always Debit for negative invoice lines.