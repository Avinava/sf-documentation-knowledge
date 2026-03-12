---
title: "ODSR Detailed Output"
domain: omnistudio
topic: odsr-detailed-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.073Z
estimatedTokens: 221
keywords: [ODSR, Detailed, Output, representation, OCR, document, scan, result]
---

# ODSR Detailed Output

> Output representation of the OCR document scan
  result.

# ODSR Detailed Output

Output representation of the OCR document scan result.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| keyValuePairs | Key Value Pair[] | Represents the key-value pairs present in document. | Small, 55.0 | 55.0 |
| ocrDocument​ScanResult​Id | String | ID of the OCR document scan result. | Small, 55.0 | 55.0 |
| ocrService | String | Name of the service that gets the extraction results.Valid values are:AMAZON_TEXTRACT—Indicates AWS Document service.AMAZON_TEXTRACT_ANALYZED_ID—Indicates AWS Analyze ID service.The default value is AMAZON_TEXTRACT. | Small, 58.0 | 58.0 |
| pageNumber | Integer | Page number of the document with which the OCR document scan result is associated. | Small, 55.0 | 55.0 |
| status | String | Status of the OCR document scan result. | Small, 55.0 | 55.0 |

## Related Topics

- Key Value Pair (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_key_value_pai.htm)
- Key Value Pair (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_key_value_pair.htm)
