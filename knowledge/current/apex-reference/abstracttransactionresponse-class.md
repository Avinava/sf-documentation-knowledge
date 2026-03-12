---
title: "AbstractTransactionResponse Class"
domain: apex-reference
topic: abstracttransactionresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.126Z
estimatedTokens: 2199
namespace: CommercePayments
keywords: [AbstractTransactionResponse, Abstract, storing, normalized, sent, payment, gateways, transaction, Holds, common, authorization, sale, capture, refund, transactions, setting, tax, external, provider's, classes]
---

# AbstractTransactionResponse Class

> Abstract class that contains methods for setting tax fields based on
      the external tax provider's response. Response classes that extend AbstractTransactionResponse inherit these methods.

**Namespace:** `CommercePayments`

# AbstractTransactionResponse Class

Abstract class that contains methods for setting tax fields based on the external tax provider's response. Response classes that extend AbstractTransactionResponse inherit these methods.

## Namespace

[CommerceTax](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

-   **[AbstractTransactionResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AbstractTransactionResponse.htm#apex_commercetax_AbstractTransactionResponse_methods)**
    Learn more about the methods for AbstractTransactionResponse class.

## AbstractTransactionResponse Methods

Learn more about the methods for AbstractTransactionResponse class.

The AbstractTransactionResponse class includes these methods.

-   **[setAddresses(addresses)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AbstractTransactionResponse.htm#apex_commercetax_AbstractTransactionResponse_setAddresses)**
    Uses an instance of AddressesResponse to set the values of tax address fields.
-   **[setAmountDetails(amountDetails)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AbstractTransactionResponse.htm#apex_commercetax_AbstractTransactionResponse_setAmountDetails)**
    Uses an instance of AmountDetailsResponse to set tax amount fields such as exemption amount and tax amount.
-   **[setCurrencyIsoCode(currencyIsoCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AbstractTransactionResponse.htm#apex_commercetax_AbstractTransactionResponse_setCurrencyIsoCode)**
    Sets the currencyIsoCode field.
-   **[setCustomTaxAttributes(customTaxAttributes)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AbstractTransactionResponse.htm#apex_commercetax_AbstractTransactionResponse_setCustomTaxAttributes)**
    Uses an instance of CustomTaxAttributesResponse class to include additional attributes in the tax response at the header level.
-   **[setDescription(dscptn)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AbstractTransactionResponse.htm#apex_commercetax_AbstractTransactionResponse_setDescription)**
    Sets the Description field.
-   **[setDocumentCode(documentCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AbstractTransactionResponse.htm#apex_commercetax_AbstractTransactionResponse_setDocumentCode)**
    Sets the DocumentCode field. Document codes are often used to reference tax documents that the external tax engine uses in the tax calculation process. Document code acts as a unique link to chain-related transactions, such as amendment or refunds.
-   **[setEffectiveDate(effectiveDate)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AbstractTransactionResponse.htm#apex_commercetax_AbstractTransactionResponse_setEffectiveDate)**
    Sets the EffectiveDate field. Effective Date fields are optional fields that store the date that a transaction takes effect. We provide these fields only for recordkeeping purposes – for example, if you must report an effective date to an external general ledger system. Salesforce doesn't use them to calculate any tax or payment values.
-   **[setLineItems(lineItems)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AbstractTransactionResponse.htm#apex_commercetax_AbstractTransactionResponse_setLineItems)**
    Uses an instance of the LineItemResponse class to set a list of line items. Each line item represents an item sent to an external tax engine for tax calculation.
-   **[setReferenceDocumentCode(referenceDocumentCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AbstractTransactionResponse.htm#apex_commercetax_AbstractTransactionResponse_setReferenceDocumentCode)**
    Sets the ReferenceDocumentCode field. Use this field to store the code of an additional document used in the tax calculation process. For example, use this field in case of a refund for a previously taxed purchase.
-   **[setReferenceEntityId(referenceEntityId)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AbstractTransactionResponse.htm#apex_commercetax_AbstractTransactionResponse_setReferenceEntityId)**
    Sets the ID of a reference entity. In Commerce Tax, a reference entity represents a record related to the items sent to the external tax engine for tax calculation. For example, if you sent order items for tax calculation, you could define the parent order as the reference entity.
-   **[setTaxTransactionId(taxTrxnId)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AbstractTransactionResponse.htm#apex_commercetax_AbstractTransactionResponse_setTaxTransactionId)**
    Sets the TaxTransactionId field using the ID of a tax transaction record. In Commerce Tax, a tax transaction record stores information about a specific tax calculation process.
-   **[setTransactionDate(transactionDate)](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AbstractTransactionResponse.htm#apex_commercetax_AbstractTransactionResponse_setTransactionDate)**
    Sets the TransactionDate field.

### setAddresses(addresses)

Uses an instance of AddressesResponse to set the values of tax address fields.

#### Signature

global void setAddresses(commercetax.AddressesResponse addresses)

#### Parameters

addresses

Type: [AddressesResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AddressesResponse.htm#apex_class_commercetax_AddressesResponse "Sets the tax address fields based on a response from the external tax engine. Contains setter methods for the Ship From, Ship To, and Sold To addresses.")

Class that contains methods to set the Ship To, Ship From, and Sold To address information.

#### Return Value

Type: void

### setAmountDetails(amountDetails)

Uses an instance of AmountDetailsResponse to set tax amount fields such as exemption amount and tax amount.

#### Signature

global void setAmountDetails(commercetax.AmountDetailsResponse amountDetails)

#### Parameters

amountDetails

Type: [AmountDetailsResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AmountDetailsResponse.htm#apex_class_commercetax_AmountDetailsResponse "Sets tax amount fields based on a response from the external tax engine.")

Class that contains methods to set the tax exemption amount, tax amount, total amount, and total amount with tax.

#### Return Value

Type: void

### setCurrencyIsoCode(currencyIsoCode)

Sets the currencyIsoCode field.

#### Signature

global void setCurrencyIsoCode(String currencyIsoCode)

#### Parameters

currencyIsoCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Three-letter ISO 4217 currency code associated with a tax object.

#### Return Value

Type: void

### setCustomTaxAttributes(customTaxAttributes)

Uses an instance of CustomTaxAttributesResponse class to include additional attributes in the tax response at the header level.

#### Signature

global void setCustomTaxAttributes(commercetax.CustomTaxAttributesResponse customTaxAttributes)

#### Parameters

customTaxAttributes

Type: [CustomTaxAttributesResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_CustomTaxAttributesResponse.htm#apex_class_commercetax_CustomTaxAttributesResponse "Sets additional data or custom attributes in the tax response.")

Additional data or custom attributes to include in the tax response.

#### Return Value

Type: void

### setDescription(dscptn)

Sets the Description field.

#### Signature

global void setDescription(String dscptn)

#### Parameters

dscptn

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Optional field for providing additional information about a record.

#### Return Value

Type: void

### setDocumentCode(documentCode)

Sets the DocumentCode field. Document codes are often used to reference tax documents that the external tax engine uses in the tax calculation process. Document code acts as a unique link to chain-related transactions, such as amendment or refunds.

#### Signature

global void setDocumentCode(String documentCode)

#### Parameters

documentCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Code for a tax document used in the tax calculation process.

#### Return Value

Type: void

### setEffectiveDate(effectiveDate)

Sets the EffectiveDate field. Effective Date fields are optional fields that store the date that a transaction takes effect. We provide these fields only for recordkeeping purposes – for example, if you must report an effective date to an external general ledger system. Salesforce doesn't use them to calculate any tax or payment values.

#### Signature

global void setEffectiveDate(Datetime effectiveDate)

#### Parameters

effectiveDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

Optional field that stores the date that a transaction takes effect.

#### Return Value

Type: void

### setLineItems(lineItems)

Uses an instance of the LineItemResponse class to set a list of line items. Each line item represents an item sent to an external tax engine for tax calculation.

#### Signature

global void setLineItems(List<commercetax.LineItemResponse> lineItems)

#### Parameters

lineItems

Type: List<[LineItemResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineItemResponse.htm#apex_class_commercetax_LineItemResponse "Response class that stores details of a list of one or more line items on which the tax engine has calculated tax.")\>

A list of line items sent to an external tax engine for tax calculation.

#### Return Value

Type: void

### setReferenceDocumentCode(referenceDocumentCode)

Sets the ReferenceDocumentCode field. Use this field to store the code of an additional document used in the tax calculation process. For example, use this field in case of a refund for a previously taxed purchase.

#### Signature

global void setReferenceDocumentCode(String referenceDocumentCode)

#### Parameters

referenceDocumentCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The code for a document used in the tax calculation process.

#### Return Value

Type: void

### setReferenceEntityId(referenceEntityId)

Sets the ID of a reference entity. In Commerce Tax, a reference entity represents a record related to the items sent to the external tax engine for tax calculation. For example, if you sent order items for tax calculation, you could define the parent order as the reference entity.

#### Signature

global void setReferenceEntityId(String referenceEntityId)

#### Parameters

referenceEntityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of a record related to the items sent for tax calculation.

#### Return Value

Type: void

### setTaxTransactionId(taxTrxnId)

Sets the TaxTransactionId field using the ID of a tax transaction record. In Commerce Tax, a tax transaction record stores information about a specific tax calculation process.

#### Signature

global void setTaxTransactionId(String taxTrxnId)

#### Parameters

taxTrxnId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of a tax transaction record in Commerce Tax.

#### Return Value

Type: void

### setTransactionDate(transactionDate)

Sets the TransactionDate field.

#### Signature

global void setTransactionDate(Datetime transactionDate)

#### Parameters

transactionDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

Date that a tax transaction occurred.

#### Return Value

Type: void

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- AbstractTransactionResponse Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm)
- setAmount(amount) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm)
- setGatewayAvsCode(gatewayAvsCode) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm)
- setGatewayDate(gatewayDate) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm)
- setGatewayMessage(gatewayMessage) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm)
- setGatewayReferenceDetails(gatewayReferenceDetails) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm)
- setGatewayReferenceNumber(gatewayReferenceNumber) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm)
- setGatewayResultCode(gatewayResultCode) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm)
- setGatewayResultCodeDescription(gatewayResultCodeDescription) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm)
