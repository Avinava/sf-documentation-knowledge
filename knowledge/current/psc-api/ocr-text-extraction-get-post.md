---
title: "OCR Text Extraction (GET, POST)"
domain: psc-api
topic: ocr-text-extraction-get-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:31.658Z
estimatedTokens: 541
keywords: [OCR, Text, Extraction, POST, Retrieve, extracted, key-value, pairs, document, latest, version, scan, result, record]
---

# OCR Text Extraction (GET, POST)

> Retrieve details of the extracted key-value pairs for a document from
   the latest version of the OCR document scan result. Create an OCR document scan result record
   using the extracted text from the latest version of a document.

# OCR Text Extraction (GET, POST)

Retrieve details of the extracted key-value pairs for a document from the latest version of the OCR document scan result. Create an OCR document scan result record using the extracted text from the latest version of a document.

Resource

```

```

Examples for GET

```

```

```

```

```

```

```

```

Example for POST

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

GET, POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| endPageIndex | Integer | Page number in the document to end extraction. | Optional | 55.0 |
| isCalledFromInvocableAction | Boolean | Indicates whether the Connect API was invoked from an invocable action (true) or not (false).The default value is false.NoteFor internal use only. | Optional | 58.0 |
| startPageIndex | Integer | Page number in the document to start extraction. | Optional | 55.0 |

Response body for GET

[Document Extraction Output](atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_connect_responses_document_extraction_output.htm "Output representation of the status and details of the OCR document scan result.")

Request body for POST

**JSON examples**

```

```

```

```

```

```

```

```

```

```

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| endPageIndex | Integer | Page number in the document to end extraction. | Optional | 55.0 |
| ocrService | String | Name of the service that gets the extraction results.Valid values are:AMAZON_TEXTRACT—Indicates AWS Document service.AMAZON_TEXTRACT_ANALYZED_ID—Indicates AWS Analyze ID service.The default value is AMAZON_TEXTRACT. | Optional | 58.0 |
| startPageIndex | Integer | Page number in the document to start extraction. | Optional | 55.0 |

Response body for POST

[Trigger Text Extraction Output](atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_connect_responses_trigger_text_extraction_output.htm "Output representation of the text extraction request on the most recent version of the document.")

## Code Examples

```
/connect/form-reader/contentDocuments/${contentDocumentId}/ocrDocumentScanResults
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect
/form-reader/contentDocuments/069RM0000001ex5YAA/ocrDocumentScanResults
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect
/form-reader/contentDocuments/069RM0000001ex5YAA/ocrDocumentScanResults?startPageIndex=1
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect
/form-reader/contentDocuments/069RM0000001ex5YAA/ocrDocumentScanResults?endPageIndex=1
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect
/form-reader/contentDocuments/069RM0000001ex5YAA/ocrDocumentScanResults?startPageIndex=1&endPageIndex=1
```

## Related Topics

- Document Extraction Output (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_connect_responses_document_extraction_output.htm)
- Trigger Text Extraction Output (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_connect_responses_trigger_text_extraction_output.htm)
