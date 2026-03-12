---
title: "Write Off Invoices Action"
domain: revenue-cloud
topic: write-off-invoices-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.205Z
estimatedTokens: 481
keywords: [Write, Off, Invoices, Action, partially, paid, unpaid, manage, pending, debts, maintain, accurate, financial, records, calls]
---

# Write Off Invoices Action

> Write off partially paid or unpaid invoices to manage pending debts
            and to maintain accurate financial records. This action calls the Posted Invoice List
            Write-Off (POST) API.

# Write Off Invoices Action

Write off partially paid or unpaid invoices to manage pending debts and to maintain accurate financial records. This action calls the Posted Invoice List Write-Off (POST) API.

This action is available in API version 64.0 and later.

## Special Access Rules

The Write Off Invoices action is available in Enterprise, Developer, and Unlimited Editions where Billing is enabled. To use this action, you need the Billing Operations User and Credit Memo Operations User permission sets.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/writeOffInvoices

Formats

JSON, XML

HTTP Methods

GET

Authentication

Authorization: Bearertoken

Notes

You can also call the associated Connect REST API endpoint or InvoiceWriteOff Apex methods. See [Posted Invoice List Write-Off (POST)](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_write_off_invoices.htm) API or [InvoiceWriteOff Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_InvoiceWriteOff.htm).

## Inputs

| Input | Details |
| --- | --- |
| writeOffInvoiceInputList | TypeApex-definedDescriptionRequired. A collection of Apex input records that contain details about the invoices to be written off. See InvoiceWriteOff Namespace for the list of input parameters. |

## Outputs

| Output | Details |
| --- | --- |
| writeOffInvoiceResponseList | TypeApex-definedDescriptionA collection of Apex output records that contain details about the invoices that were written off. See InvoiceWriteOff Namespace for the list of output parameters. |

## Example

GET

This sample request is for the Write Off Invoices action.

```

```

This sample response is for the Write Off Invoices action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "apexClass": "InvoiceWriteOff__WriteOffInvoiceInputList",
      "bytelength": 0,
      "configuration": false,
      "defaultValue": null,
      "description": "A collection of Apex WriteOffInvoiceInputList records that contain details about the invoices to be written-off.",
      "label": "WriteOffInvoiceInputList",
      "maxOccurs": 1,
      "name": "writeOffInvoiceInputList",
      "picklistValues": null,
      "placeholderText": null,
      "required": true,
      "sObjectType": null,
      "setupReferenceType": null,
      "toolingType": null,
      "type": null
    }
  ]
}
```

```
{
  "outputs": [
    {
      "additionalAttributes": null,
      "apexClass": "InvoiceWriteOff__WriteOffInvoiceResponseList",
      "description": "A collection Apex WriteOffInvoiceResponseList records that contain details about the invoices that were written off.",
      "label": "WriteOffInvoiceResponseList",
      "maxOccurs": 1,
      "name": "writeOffInvoiceResponseList",
      "picklistValues": null,
      "sobjectType": null,
      "type": null
    }
  ]
}
```
