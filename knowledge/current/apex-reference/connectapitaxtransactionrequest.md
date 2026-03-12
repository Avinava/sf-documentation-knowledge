---
title: "ConnectApi.TaxTransactionRequest"
domain: apex-reference
topic: connectapitaxtransactionrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.637Z
estimatedTokens: 446
keywords: [ConnectApi.TaxTransactionRequest, Information, tax, transaction, sent, adapter, part, calculation, request.]
---

# ConnectApi.TaxTransactionRequest

> Information about the tax transaction sent to the tax adapter as part
      of a tax calculation request.

# ConnectApi.TaxTransactionRequest

Information about the tax transaction sent to the tax adapter as part of a tax calculation request.

This class is abstract.

Superclass of [ConnectApi.CalculateTaxRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_calculate_tax.htm "Request to sent through the tax adapter to the external tax engine. Inputs with a TaxTransactionType of Debit represent a tax calculation request. Inputs with a TaxTransactionType of Credit represent a tax cancellation request.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addresses | ConnectApi.​TaxAddresses​Request | Addresses, including the Bill To address, Ship From address, Ship to address, and Sold To address. | Optional | 55.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the payment group record. | Optional | 55.0 |
| customerDetails | ConnectApi.​TaxCustomer​DetailsRequest | Customer details for the tax calculation. | Optional | 55.0 |
| description | String | Information about whether the tax transaction failed or was successful. | Optional | 55.0 |
| documentCode | String | Document code. | Optional | 55.0 |
| effectiveDate | Datetime | The date that tax is applied to the taxed entity. | Required | 55.0 |
| lineItems | List<ConnectApi.​TaxLine​ItemRequest> | The line items on which tax was calculated. | Required | 55.0 |
| referenceDocumentCode | String | The original document code. Used in case of subsequent transactions such as credit tax. | Optional | 55.0 |
| referenceEntityId | String | ID of the reference entity used during tax calculation. | Optional | 55.0 |
| transactionDate | Datetime | The date that the tax transaction occurred. | Optional | 53.0 |

## Related Topics

- ConnectApi.CalculateTaxRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_calculate_tax.htm)
- ConnectApi.​TaxAddresses​Request (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_addresses.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​TaxCustomer​DetailsRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_customer_details.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​TaxLine​ItemRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_line_item.htm)
