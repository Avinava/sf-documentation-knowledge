---
title: "TaxTransactionRequest(addresses, currencyIsoCode,
      customerDetails, description, documentCode, referenceDocumentCode, transactionDate,
      effectiveDate, lineItems, referenceEntityId, sellerDetails,
    customTaxAttributes)"
domain: apex-reference
topic: taxtransactionrequestaddresses-currencyisocode-customerdetails-description-docum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.375Z
keywords: [TaxTransactionRequest, addresses, currencyIsoCode, customerDetails, description, documentCode, referenceDocumentCode, transactionDate, effectiveDate, lineItems, referenceEntityId, sellerDetails, customTaxAttributes, Initializes, request, tax, transaction., constructor, intended, test]
---

# TaxTransactionRequest(addresses, currencyIsoCode,
      customerDetails, description, documentCode, referenceDocumentCode, transactionDate,
      effectiveDate, lineItems, referenceEntityId, sellerDetails,
    customTaxAttributes)

> Initializes the request for the tax transaction. This constructor is
      intended for test usage and throws an exception if used outside of the Apex test
    context.

### TaxTransactionRequest(addresses, currencyIsoCode, customerDetails, description, documentCode, referenceDocumentCode, transactionDate, effectiveDate, lineItems, referenceEntityId, sellerDetails, customTaxAttributes)

Initializes the request for the tax transaction. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global TaxTransactionRequest(commercetax.HeaderTaxAddressesRequest addresses, String currencyIsoCode, commercetax.TaxCustomerDetailsRequest customerDetails, String description, String documentCode, String referenceDocumentCode, Datetime transactionDate, Datetime effectiveDate, List<commercetax.TaxLineItemRequest> lineItems, String referenceEntityId, commercetax.TaxSellerDetailsRequest sellerDetails,Map<String,Object\> customTaxAttributes)

#### Parameters

addresses

Type: [HeaderTaxAddressesRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_HeaderTaxAddressesRequest.htm#apex_class_commercetax_HeaderTaxAddressesRequest "Captures the address values that are applicable for the quote or order transaction.")

Tax addresses, such as Ship To and Bill From.

currencyIsoCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Three-letter ISO 4217 currency code associated with the TaxTransactionRequest.

customerDetails

Type: [TaxCustomerDetailsRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxCustomerDetailsRequest.htm#apex_class_commercetax_TaxCustomerDetailsRequest "Contains customer details used in tax calculation.")

Customer information used in tax calculation.

description

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Optional user-defined description for providing more information about the tax transaction request.

documentCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Code for documents that are used to provide more information in the tax calculation process.

referenceDocumentCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifier that combines the original invoice ID, previous tax transaction type, and tax engine ID, used in tax calculations for negative invoice lines. For example, a referenceDocumentCode parameter value 3ttxx00000004Bh\_Debit-4wAxx0000000001EAA indicates 3ttxx00000004Bh is the original invoice ID and 4wAxx0000000001EAA is the tax engine ID.

transactionDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The date that the tax transaction occurred.

effectiveDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The date that the tax transaction takes effect. User-defined and used only for reporting purposes.

lineItems

Type: List<[TaxLineItemRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxLineItemRequest.htm#apex_class_commercetax_TaxLineItemRequest "Contains line item details of a tax request.")\>

A list of line items on which tax is calculated.

referenceEntityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of an object related to the line items sent for tax calculation.

sellerDetails

Type: [TaxSellerDetailsRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxSellerDetailsRequest.htm#apex_class_commercetax_TaxSellerDetailsRequest "Contains tax code details used in the tax calculation request.")

Contains tax code information used in a tax calculation request.

customTaxAttributes

Type: Map<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>

Customised tax contract to include additional attributes at the header level.