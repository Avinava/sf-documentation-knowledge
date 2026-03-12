---
title: "ConnectApi.CalculateTaxResponse"
domain: apex-reference
topic: connectapicalculatetaxresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.249Z
estimatedTokens: 337
keywords: [ConnectApi.CalculateTaxResponse, Shows, results, tax, calculation, request.]
---

# ConnectApi.CalculateTaxResponse

> Shows the results of a tax calculation request.

# ConnectApi.CalculateTaxResponse

Shows the results of a tax calculation request.

Subclass of [ConnectApi.TaxTransactionResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_tax_transaction_output.htm "Tax transaction output representation").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| adapterError | ConnectApi.​ErrorResponse | Adapter error. | 55.0 |
| status | ConnectApi.​TaxTransaction​Status | Status of a tax transaction. Values are:Committed—Tax has been committed to the transaction.Uncommitted—Tax hasn’t been committed to the transaction. | 55.0 |
| taxEngineLogs | List<ConnectApi.​TaxEngine​LogResponse> | Tax engine logs. | 55.0 |
| taxTransactionType | ConnectApi.​TaxTransaction​Type | Type of tax transaction. Values are:Credit—Transaction is a credit transaction.Debit—Transaction is a debit transaction.Void—Reserved for internal use in case of input. In case of output, this value specifies that the tax engine has voided the document that's mentioned as the referenceDocumentCode property value. | 55.0 |
| taxType | ConnectApi.​CalculateTax​Type | Type of tax calculation. Values are:Actual—Calculated tax represents the final taxed amount for the transaction.Estimated—Calculated tax represents only an estimated value before the transaction is finalized. | 55.0 |

## Related Topics

- ConnectApi.TaxTransactionResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_tax_transaction_output.htm)
- ConnectApi.​ErrorResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm)
- ConnectApi.​TaxTransaction​Status (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​TaxEngine​LogResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_tax_engine_log_output.htm)
- ConnectApi.​TaxTransaction​Type (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​CalculateTax​Type (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
