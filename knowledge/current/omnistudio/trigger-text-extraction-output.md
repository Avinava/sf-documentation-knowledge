---
title: "Trigger Text Extraction Output"
domain: omnistudio
topic: trigger-text-extraction-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.826Z
estimatedTokens: 137
keywords: [Trigger, Text, Extraction, Output, representation, text, extraction, request, most, recent, version, document.]
---

# Trigger Text Extraction Output

> Output representation of the text extraction request on the most
      recent version of the document.

# Trigger Text Extraction Output

Output representation of the text extraction request on the most recent version of the document.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| ocrDocumentScanResultInfos | OCR Document Scan Result Info[] | Represents the details of the OCR document scan result. | Small, 55.0 | 55.0 |
| status | Status | Indicates whether the OCR document scan result record is created successfully or not. | Small, 55.0 | 55.0 |

## Code Examples

```
{
  "ocrDocumentScanResultInfos": [
    {
      "ocrDocumentScanResultId": "0ixRM0000004DY7",
      "pageNum": 1
    }
  ],
  "status": {
    "code": "POST_SUCCESS",
    "message": "API call has been executed Successfully."
  }
}
```

```
{
  "ocrDocumentScanResultInfos": [
    {
      "ocrDocumentScanResultId": "0ixRM0000004DY7",
      "pageNum": 1
    }
  ],
  "status": {
    "code": "SUCCESS",
    "message": "API call has been executed Successfully."
  }
}
```

## Related Topics

- OCR Document Scan Result Info (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_ocr_document_scan_result_inf.htm)
- OCR Document Scan Result Info (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_ocr_document_scan_result_info.htm)
