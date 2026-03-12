---
title: "ConnectApi.LineItemResponse"
domain: apex-reference
topic: connectapilineitemresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.710Z
estimatedTokens: 252
keywords: [ConnectApi.LineItemResponse, stores, line, items, tax, engine, calculated]
---

# ConnectApi.LineItemResponse

> Response class that stores information about a list of one or more
      line items on which the tax engine has calculated tax.

# ConnectApi.LineItemResponse

Response class that stores information about a list of one or more line items on which the tax engine has calculated tax.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| addresses | ConnectApi.​TaxAddresses​Response | The Ship From, Ship To, and Sold To addresses used during tax calculation. | 55.0 |
| amountDetails | ConnectApi.​TaxAmount​DetailsResponse | Information about tax amount values on the line item. | 55.0 |
| effectiveDate | Datetime | The date that the tax calculation takes effect. | 55.0 |
| lineNumber | String | System-generated number used to identify the tax line. | 55.0 |
| productCode | String | Product code for the product related to the taxed line item. | 55.0 |
| quantity | Double | Quantity of the taxed line item. | 55.0 |
| taxCode | String | Tax code for the taxed line item. | 55.0 |
| taxes | List<ConnectApi.​TaxDetails​Response> | Tax details for each line item in a tax line item output. | 55.0 |

## Related Topics

- ConnectApi.​TaxAddresses​Response (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_addresses_output.htm)
- ConnectApi.​TaxAmount​DetailsResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_tax_amount_details_output.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​TaxDetails​Response (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_tax_details_output.htm)
