---
title: "ConnectApi.TaxTransactionResponse"
domain: apex-reference
topic: connectapitaxtransactionresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:29.131Z
estimatedTokens: 368
keywords: [ConnectApi.TaxTransactionResponse, Tax, transaction, output, representation]
---

# ConnectApi.TaxTransactionResponse

> Tax transaction output representation

# ConnectApi.TaxTransactionResponse

Tax transaction output representation

This class is abstract.

Superclass of [ConnectApi.CalculateTaxResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_calculate_tax_output.htm "Shows the results of a tax calculation request.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| addresses | ConnectApi.​TaxAddresses​Response | The Ship From, Ship To, and Sold To addresses used during tax calculation. | 55.0 |
| amountDetails | ConnectApi.​TaxAmount​DetailsResponse | Information about tax amount values on the line item. | 55.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the payment group record. | 55.0 |
| description | String | Information about whether the tax transaction failed or was successful. | 55.0 |
| documentCode | String | Document code. | 55.0 |
| effectiveDate | Datetime | The date that tax is applied to the taxed entity. | 55.0 |
| lineItems | List<ConnectApi.​LineItem​Response> | A list of line items on which tax was calculated. | 55.0 |
| referenceDocumentCode | String | The original document code. Used in case of subsequent transactions such as credit tax. | 55.0 |
| referenceEntityId | String | ID of the reference entity used during tax calculation. | 55.0 |
| taxTransactionId | String | ID of the tax transaction. | 55.0 |
| transactionDate | Datetime | The date that the tax transaction occurred. | 55.0 |

## Related Topics

- ConnectApi.CalculateTaxResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_calculate_tax_output.htm)
- ConnectApi.​TaxAddresses​Response (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_addresses_output.htm)
- ConnectApi.​TaxAmount​DetailsResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_tax_amount_details_output.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​LineItem​Response (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_line_item_output.htm)
