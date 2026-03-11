---
title: "SalesforceResultCodeInfo"
domain: apex-reference
topic: salesforceresultcodeinfo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.165Z
keywords: [SalesforceResultCodeInfo, Constructor, provides, salesforceResultCode, transaction, result., Signature, Parameters]
---

# SalesforceResultCodeInfo

> Constructor that provides the
        salesforceResultCode for the transaction
    result.

### SalesforceResultCodeInfo(salesforceResultCode)

Constructor that provides the salesforceResultCode for the transaction result.

#### Signature

global SalesforceResultCodeInfo(commercepayments.SalesforceResultCode salesforceResultCode)

#### Parameters

salesforceResultCode

Type: [SalesforceResultCode](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_SalesforceResultCode.htm "Defines the gateway call status values in Salesforce based on the call status values that the payment gateway returned.")

The enum value for the result code.