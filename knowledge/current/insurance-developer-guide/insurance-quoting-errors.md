---
title: "Insurance Quoting Errors"
domain: insurance-developer-guide
topic: insurance-quoting-errors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.998Z
estimatedTokens: 433
keywords: [Insurance, Quoting, Errors, error, codes, code, messages, applicable, APIs]
---

# Insurance Quoting Errors

> Contains the error codes and error code messages that are applicable to the
      Insurance Quoting APIs.

# Insurance Quoting Errors

Contains the error codes and error code messages that are applicable to the Insurance Quoting APIs.

| Error Code | HTTP Response Code | Message |
| --- | --- | --- |
| SF-0002-0001 | 400 | For the contextId and quoteInputs parameters, specify a value and try again. |
| SF-0002-0002 | 400 | Specify the relatedRecordId and relatedRecordObjName parameters in the relatedRecords array and try again. |
| SF-0002-0003 | 400 | More than one related record mapping found for {entityName}. Ensure that you specify only one related record mapping for {entityName} and try again. |
| SF-0002-0004 | 400 | {attributeList} not found for product {productCode}. Specify supported values for the attributes object and try again. |
| SF-0002-0005 | 400 | Values of the instance key arrays are not unique {instanceKey}. Specify unique instance key arrays and try again. |
| SF-0002-0006 | 400 | More than one instance key array found {instanceKey}. Specify unique instance key arrays and try again. |
| SF-0002-0007 | 400 | Value {inputValue} is invalid for {inputField}. Specify unique values for the instance key array and try again. |
| SF-0002-0008 | 400 | The instance {instanceKey} you are trying to delete doesn't exist. |
| SF-0002-0009 | 400 | The instance {instanceKey} you are trying to update doesn't exist. |
| SF-0002-0010 | 400 | Specify the configuration parameters in the configOptions object and try again. |
| SF-0002-0011 | 400 | Product with product code {productCode} failed the qualification criteria. Specify a valid product and try again. |
| SF-0002-0012 | 400 | The {instanceKey} instance key has conflicting values for attributes or relatedRecords. Specify identical values and try again. |
