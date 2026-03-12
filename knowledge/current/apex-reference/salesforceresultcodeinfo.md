---
title: "SalesforceResultCodeInfo"
domain: apex-reference
topic: salesforceresultcodeinfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.132Z
estimatedTokens: 683
namespace: CommercePayments
keywords: [SalesforceResultCodeInfo, Stores, Salesforce, result, code, information, payment, gateway, adapters., Usage, customMetadataTypeInfo, salesforceResultCode]
---

# SalesforceResultCodeInfo

> Stores Salesforce result code information from payment gateway
      adapters.

**Namespace:** `CommercePayments`

# SalesforceResultCodeInfo

Stores Salesforce result code information from payment gateway adapters.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

The constructor of this class takes no arguments. For example:

CommercePayments.SalesforceResultCodeInfo srci = new CommercePayments.SalesforceResultCodeInfo();

Gateways can return the transaction result as either CustomMetadata or SalesforceResultCode.

-   **[SalesforceResultCodeInfo Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm#apex_commerce_payments_SalesforceResultCodeInfo_constructors)**


## SalesforceResultCodeInfo Constructors

The following are constructors for SalesforceResultCodeInfo.

-   **[SalesforceResultCodeInfo(customMetadataTypeInfo)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm#apex_commerce_payments_SalesforceResultCodeInfo_ctor)**
    Constructor for providing the customMetadataTypeInfo for the result of the transaction.
-   **[SalesforceResultCodeInfo(salesforceResultCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm#apex_commerce_payments_SalesforceResultCodeInfo_ctor_2)**
    Constructor that provides the salesforceResultCode for the transaction result.

### SalesforceResultCodeInfo(customMetadataTypeInfo)

Constructor for providing the customMetadataTypeInfo for the result of the transaction.

#### Signature

global SalesforceResultCodeInfo(commercepayments.CustomMetadataTypeInfo customMetadataTypeInfo)

#### Parameters

customMetadataTypeInfo

Type: [CustomMetadataTypeInfo](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CustomMetadataTypeInfo.htm#apex_class_commerce_payments_CustomMetadataTypeInfo "Access information about custom metadata. The PaymentGatewayAdapter can send CustomMetadataTypeInfo to transaction requests through the response object’s SalesforceResultCodeInfo.")

Information about the metadata type.

### SalesforceResultCodeInfo(salesforceResultCode)

Constructor that provides the salesforceResultCode for the transaction result.

#### Signature

global SalesforceResultCodeInfo(commercepayments.SalesforceResultCode salesforceResultCode)

#### Parameters

salesforceResultCode

Type: [SalesforceResultCode](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_SalesforceResultCode.htm "Defines the gateway call status values in Salesforce based on the call status values that the payment gateway returned.")

The enum value for the result code.

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- SalesforceResultCodeInfo Constructors (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm)
- SalesforceResultCodeInfo(customMetadataTypeInfo) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm)
- SalesforceResultCodeInfo(salesforceResultCode) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm)
- CustomMetadataTypeInfo (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CustomMetadataTypeInfo.htm)
- SalesforceResultCode (atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_SalesforceResultCode.htm)
