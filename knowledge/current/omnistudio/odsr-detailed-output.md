---
title: "ODSR Detailed Output"
domain: omnistudio
topic: odsr-detailed-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:10.429Z
keywords: [ODSR, Detailed, Output]
---

# ODSR Detailed Output

# ODSR Detailed Output

Output representation of the OCR document scan result.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| keyValuePairs | Key Value Pair[] | Represents the key-value pairs present in document. | Small, 55.0 | 55.0 |
| ocrDocument​ScanResult​Id | String | ID of the OCR document scan result. | Small, 55.0 | 55.0 |
| ocrService | String | Name of the service that gets the extraction results.Valid values are:AMAZON_TEXTRACT—Indicates AWS Document service.AMAZON_TEXTRACT_ANALYZED_ID—Indicates AWS Analyze ID service.The default value is AMAZON_TEXTRACT. | Small, 58.0 | 58.0 |
| pageNumber | Integer | Page number of the document with which the OCR document scan result is associated. | Small, 55.0 | 55.0 |
| status | String | Status of the OCR document scan result. | Small, 55.0 | 55.0 |