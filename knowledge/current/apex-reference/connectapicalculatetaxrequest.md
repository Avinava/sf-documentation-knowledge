---
title: "ConnectApi.CalculateTaxRequest"
domain: apex-reference
topic: connectapicalculatetaxrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:24.703Z
estimatedTokens: 704
keywords: [ConnectApi.CalculateTaxRequest, sent, tax, adapter, external, engine, Inputs, TaxTransactionType, Debit, represent, calculation, Credit, cancellation]
---

# ConnectApi.CalculateTaxRequest

> Request to sent through the tax adapter to the external tax engine.
      Inputs with a TaxTransactionType of Debit represent a tax
      calculation request. Inputs with a TaxTransactionType of
      Credit represent a tax cancellation request.

# ConnectApi.CalculateTaxRequest

Request to sent through the tax adapter to the external tax engine. Inputs with a TaxTransactionType of Debit represent a tax calculation request. Inputs with a TaxTransactionType of Credit represent a tax cancellation request.

Subclass of [ConnectApi.TaxTransactionRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_tax_transaction.htm "Information about the tax transaction sent to the tax adapter as part of a tax calculation request.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isCommit | Boolean | Commits the transaction for tax calculation. | Required | 55.0 |
| isHeaderTaxRequested | Boolean | Indicates whether header tax is enabled in the tax engine (true) or not (false). | Optional | 66.0 |
| shouldVoidTax | Boolean | Indicates whether to void the tax transaction associated with a document that's mentioned as the referenceDocumentCode property value with taxTypeproperty value as Actual and isCommit property value set to true.Keep these considerations in mind when you use this property.If the shouldVoidTax property value is set to true, then the operation returns a response with documentCode property value updated to referenceDocumentCode property value that was originally sent in the request payload. The response also includes the taxTransactionType property value as Void. This indicates that the document specified in the referenceDocumentCode property value is voided.If document is locked or you can't void the tax transaction for any reason, then you can use the Tax Calculation request to perform another transaction such as a Credit Tax request. In this scenario, the response includes the documentCode property value that was sent in the request payload.If the document that's mentioned in the referenceDocumentCode property value isn't available in the tax engine, then an error response occurs with ResultCode value as ReferenceDocumentCodeMissing. | Optional | 65.0 |
| taxEngineId | String | ID of the Salesforce tax engine entity used to represent the external tax engine. | Required | 55.0 |
| taxTransactionType | ConnectApi.​TaxTransaction​Type | Type of tax transaction. Values are:Credit—Transaction is a credit transaction.Debit—Transaction is a debit transaction.Void—Reserved for internal use in case of input. In case of output, this value specifies that the tax engine has voided the document that's mentioned as the referenceDocumentCode property value. | Required | 55.0 |
| taxType | ConnectApi.​CalculateTax​Type | Type of tax calculation. Values are:Actual—Calculated tax represents the final taxed amount for the transaction.Estimated—Calculated tax represents only an estimated value before the transaction is finalized. | Required | 55.0 |

## Related Topics

- ConnectApi.TaxTransactionRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_tax_transaction.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ResultCode (atlas.en-us.apexref.meta/apexref/apex_enum_commercetax_ResultCode.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​TaxTransaction​Type (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​CalculateTax​Type (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
