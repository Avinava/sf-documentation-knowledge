---
title: "Create Contract Document Generation Action"
domain: omnistudio
topic: create-contract-document-generation-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.271Z
estimatedTokens: 303
keywords: [Create, Contract, Document, Generation, Action, contract, specified, record., Supported, REST, HTTP, Inputs, Output, Usage]
---

# Create Contract Document Generation Action

> Create a contract for a specified record.

# Create Contract Document Generation Action

Create a contract for a specified record.

This action is available in API version 61.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createClmContract

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| contractRecordType | TypeStringDescriptionRequiredAPI name of the contract record type |
| documentTemplateName | TypeStringDescriptionRequiredName of the document template to use when creating the contract |
| sourceRecordId | TypeIDDescriptionRequiredID of the record to use to populate the fields on the contract |
| isCreateContractDocument | TypeBooleanDescriptionRequiredIndicates whether to create a contract document in addition to the contract (true) or not (false). |

## Output

| Output | Details |
| --- | --- |
| contractId | TypeStringDescriptionCollection that contains the ID of the contract that was created |

## Usage

Sample Input

This sample request is for the Create Contract Document Generation action.

```

```

Sample Output

This sample response is for the Create Contract Document Generation action.

```

```

## Code Examples

```
{
  "sourceRecordId": "13ZSB0000000OYxxAM",
  "contractRecordType": "ContractLifecycleManagement",
  "documentTemplateName": "SAMPLE_LoanApprovalTemplate",
  "isCreateContractDocument": true
}
```

```
{
  "contractId": [
    "800SB00000KLbHxxA1"
  ]
}
```
