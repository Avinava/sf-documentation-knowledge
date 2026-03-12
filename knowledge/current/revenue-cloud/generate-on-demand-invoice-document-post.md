---
title: "Generate On-Demand Invoice Document (POST)"
domain: revenue-cloud
topic: generate-on-demand-invoice-document-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.841Z
estimatedTokens: 407
keywords: [Generate, On-Demand, Invoice, Document, POST, invoice, document, record, update, any, junction, record.]
---

# Generate On-Demand Invoice Document (POST)

> Generate an invoice document for a record, and update any junction
      object record.

# Generate On-Demand Invoice Document (POST)

Generate an invoice document for a record, and update any junction object record.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| documentTemplateId | String | Document template ID to use for PDF generation. The document template must be active with UsageType as INVOICEIf you don't specify this value, the system auto-resolves by using the default template. | Optional | 66.0 |
| documentTitle | String | Custom title for the generated document. If you don't specify a value, the value is auto-generated. | Optional | 66.0 |
| recordId | String | Record ID of the object the document is generated for. You can specify invoice ID only. | Required | 66.0 |
| shouldForceRegenerate | Boolean | Indicates whether to regenerate the document (true) or not (false). If set to true, this API generates a document, replacing any existing ones. If set to false, this API skips the generation of document if invoice already has an associated document. The default value is false. | Optional | 66.0 |
| tokenData | String | Token data to generate the document. | Optional | 66.0 |

Response body for POST

[On-Demand Document Generation Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_on_demand_doc_gen_output.htm "Output representation of the details of the generated document along with error response.")

## Code Examples

```
/revenue/billing/document/actions/generate
```

```
https://yourInstance.salesforce.com/services/data/v66.0/revenue/billing/document/actions/generate
```

```
{
  "recordId": "3ttasd98776266777",
  "shouldForceRegenerate": true,
  "documentTemplateId": "0694x000000XyzABC",
  "documentTitle": "DOC-00000012",
  "tokenData": "{"InvoiceLines":{"StartDate":"02/21/2025","IsUsageBasedInvoiceLine":false,"UnitPrice":"$7.99","ProductName":"Mouse","UsageProductId":"01tSG00000BHFPSYA5","Subtotal":"$7.99","Quantity":"1","Tax":"$0.00","Id":"5TVSG000000DU3V4AW","CurrencyIsoCode":"USD","EndDate":"02/21/2025"},"NetCreditsApplied":"$0.00","CompanyEmail":"rsamantaray@salesforce.com","CompanyState":"CA","DocumentNumber":"DOC-000000001","SubTotal":"$7.99","CompanyStreet":"1 Market St","CompanyName":"260.1","TotalAmnt":"$7.99","TotalTax":"$0.00","InvoiceDueDate":"10/08/2025","CompanyPostalCode":"94105","InvoiceDate":"09/08/2025","CompanyCity":"San Francisco","CompanyCountry":"US","AccountName":"Sonia BAT Account"}"
}
```

## Related Topics

- On-Demand Document
              Generation Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_on_demand_doc_gen_output.htm)
