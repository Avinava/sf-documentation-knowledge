---
title: "InvoiceDocument"
domain: sfFieldRef
topic: invoicedocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.861Z
estimatedTokens: 406
keywords: [InvoiceDocument, Tracks, displays, status, documents, generated, invoices, Invoice, entity, records, API, version, 61.0, later]
---

# InvoiceDocument

> Tracks and displays the status of documents generated for invoices. Invoice
         documents are available in the related lists of invoice entity records. This object is
      available in API version 61.0 and later.

# InvoiceDocument

Tracks and displays the status of documents generated for invoices. Invoice documents are available in the related lists of invoice entity records. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [InvoiceDocument](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_invoicedocument.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContentDocumentId | ContentDocument ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DateGenerated | Date Generated | date |  |  |  |  |
| DocumentGenerationProcessId | Document Generation Process ID | reference |  | 18 |  |  |
| DocumentNumber | Invoice Document Name | string |  | 255 |  |  |
| ErrorMessage | Error Message | string |  | 255 |  |  |
| Id | Invoice Document ID | id |  | 18 |  |  |
| InvoiceId | Invoice ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
