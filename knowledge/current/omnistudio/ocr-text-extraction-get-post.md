---
title: "OCR Text Extraction (GET, POST)"
domain: omnistudio
topic: ocr-text-extraction-get-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:10.361Z
keywords: [OCR, Text, Extraction, GET, POST]
---

# OCR Text Extraction (GET, POST)

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

[Document Extraction Output](atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_document_extraction_output.htm "Output representation of the status and details of the OCR document scan result.")

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

[Trigger Text Extraction Output](atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_trigger_text_extraction_output.htm "Output representation of the text extraction request on the most recent version of the document.")