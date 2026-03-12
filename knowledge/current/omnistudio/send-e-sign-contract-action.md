---
title: "Send e-Sign Contract Action"
domain: omnistudio
topic: send-e-sign-contract-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.345Z
estimatedTokens: 347
keywords: [Send, e-Sign, Contract, Action, contract, specified, recipients, e-signature., Supported, REST, HTTP, Inputs, Output, Usage]
---

# Send e-Sign Contract Action

> Send a contract to specified recipients for
  e-signature.

# Send e-Sign Contract Action

Send a contract to specified recipients for e-signature.

This action is available in API version 61.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/sendContractForESignature

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| contractId | TypeStringDescriptionRequired.ID of the contract to be sent to the recipients for e-signature. |
| emailTemplateName | TypeStringDescriptionRequired.Developer name of the email template to send to the recipients. |
| eSignatureVendorName | TypeStringDescriptionRequired.Name of the vendor providing the e-signature service. |
| getDocumentsApexClassName | TypeStringDescriptionAPI name of the customer-created Apex class used to get a collection of Apex document records to send for e-signature. |
| getRecipientsApexClassName | TypeStringDescriptionAPI name of the customer-created Apex class used to get a collection of Apex recipient records to send for e-signature. |

## Output

| Output | Details |
| --- | --- |
| sentContractId | TypeStringDescriptionID of the contract that was sent to the recipients. |

## Usage

Sample Input

This sample request is for the Send e-Sign Contract action.

```

```

Sample Output

This sample response is for the Send e-Sign Contract action.

```

```

## Code Examples

```
{
  "contractId": "800SG00000HtyxxYAB",
  "eSignatureVendorName": "SampleVendor",
  "emailTemplateName": "SampleVendorEmailTemplate",
  "getDocumentsApexClassName": "GetEsignDocuments",
  "getRecipientsApexClassName": "GetEsignRecipients"
}
```

```
{
  "sentContractId": "800SG00000Hty4zYAB"
}
```
