---
title: "Create Service Document Actions"
domain: api-action
topic: create-service-document-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.972Z
estimatedTokens: 724
keywords: [Service, Document, Actions, documents, work, orders, order, line, items, appointments, REST, HTTP, Inputs, Outputs, Usage]
---

# Create Service Document Actions

> Create service documents from work orders, work order line items, or service
  appointments.

# Create Service Document Actions

Create service documents from work orders, work order line items, or service appointments.

This object is available in API version 60.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v60.0/actions/standard/createServiceDocument

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| recordId | TypestringDescriptionRequired. The record ID of a work order, work order line item, or service appointment used to generate the service document. Create a Lightning web component to use a Custom Property Editor (CPE) to validate the recordId to avoid deployment issues. |
| templateId | TypestringDescriptionRequired, if the recordId is a work order, work order line item, or service appointment. The ID of the service document template to use when generating the document. |
| locale | TypestringDescriptionOptional. Specifies the language for service document localization. The default is the user’s language. Used when generating a document in a different language from the user’s language. See a list of supported languages in Supported Languages.You can only input language for locale. For example, use es for Spanish. Using language and country, for example es_ES for Spanish associated with Spain, results in error. |
| title | TypestringDescriptionOptional. The value used to populate the Label field in the generated service report. |
| documentType | TypestringDescriptionOptional. Value that allows users to generate different types of documents by using the service. Valid values are:SERVICE_DOCUMENT—Type of service document, such as service agreement or service contract.QUOTE_DOCUMENT—Type of quote document, such as sales quote or service quote.SFS_QUOTE_DOCUMENT—Type of quote document for Salesforce Field Service (SFS), suitable for mobile use. This document is stored in the QuoteDocument object, and is generated through flow-based processes that link to related service documents.The default value is ServiceDocument. |
| pdfReportId | TypestringDescriptionOptional value corresponding to recordId and templateId. However, the value is required if you aren’t generating the document from the default pdfRecord record. For the Document Builder feature, this is a service report ID for a report that is in progress, queued, or failed. It must be used to generate a service document from failed state. |

## Outputs

| Inputs | Details |
| --- | --- |
| pdfReportId | TypestringDescriptionRequired. The report’s record ID that holds the generated PDF. For service documents, the pdfReportId is a service report, and the record is created if the work order, work order line item, or service appointment is passed as the recordId. |

## Usage

Sample Input

This sample generates a PDF of a service document with a specific recordId and templateId.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "recordId": "08pOG00000023anYAA",
      "templateId": "0M0OG0000005Na40AE",
      "locale": "en_US",
      "title": "Sample PDF"
    }
  ]
}
```
