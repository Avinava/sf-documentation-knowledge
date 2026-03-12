---
title: "Document Extraction Output"
domain: omnistudio
topic: document-extraction-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.784Z
estimatedTokens: 134
keywords: [Document, Extraction, Output, representation, status, OCR, scan, result]
---

# Document Extraction Output

> Output representation of the status and details of the OCR document
   scan result.

# Document Extraction Output

Output representation of the status and details of the OCR document scan result.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| ocr​Document​Scan​Results | ODSR Detailed Output[] | Represents the details of the OCR document scan result. | Small, 55.0 | 55.0 |
| status | Status | Indicates whether the request succeeded or failed, and in the case of failure, it also provides the reason. | Small, 55.0 | 55.0 |

## Code Examples

```
{
  "ocrDocumentScanResults": [
    {
      "keyValuePairs": [
        {
          "key": {
            "confidence": 23,
            "polygon": [
              {
                "xCoordinate": 0.6499073505401611,
                "yCoordinate": 0.8838216662406921
              },
              {
                "xCoordinate": 0.694475531578064,
                "yCoordinate": 0.8838216662406921
              },
              {
                "xCoordinate": 0.694475531578064,
                "yCoordinate": 0.8919549584388733
              },
              {
                "xCoordinate": 0.6499073505401611,
                "yCoordinate": 0.8919549584388733
              }
            ],
            "text": "Cat. No."
          },
          "value": {
            "confidence": 23,
            "polygon": [
              {
                "xCoordinate": 0.6966586112976074,
                "yCoordinate": 0.8839852809906006
              },
              {
                "xCoordinate": 0.7384559512138367,
                "yCoordinate": 0.8839852809906006
              },
              {
                "xCoordinate": 0.7384559512138367,
                "yCoordinate": 0.8920071125030518
              },
              {
                "xCoordinate": 0.6966586112976074,
                "yCoordinate": 0.8920071125030518
              }
            ],
            "text": "11862M"
          }
        }
      ],
      "ocrDocumentScanResultId": "0ixRM0000004DPl",
      "ocrService": "AMAZON_TEXTRACT",
      "pageNumber": 1,
      "status": "SUCCESS"
    }
  ],
  "status": {
    "code": "SUCCESS",
    "message": "API call has been executed Successfully."
  }
}
```

```
{
  "ocrDocumentScanResults": [
    {
      "keyValuePairs": [
        {
          "key": {
            "confidence": 23,
            "polygon": [
              {
                "xCoordinate": 0.6499073505401611,
                "yCoordinate": 0.8838216662406921
              },
              {
                "xCoordinate": 0.694475531578064,
                "yCoordinate": 0.8838216662406921
              },
              {
                "xCoordinate": 0.694475531578064,
                "yCoordinate": 0.8919549584388733
              },
              {
                "xCoordinate": 0.6499073505401611,
                "yCoordinate": 0.8919549584388733
              }
            ],
            "text": "Cat. No."
          },
          "value": {
            "confidence": 23,
            "polygon": [
              {
                "xCoordinate": 0.6966586112976074,
                "yCoordinate": 0.8839852809906006
              },
              {
                "xCoordinate": 0.7384559512138367,
                "yCoordinate": 0.8839852809906006
              },
              {
                "xCoordinate": 0.7384559512138367,
                "yCoordinate": 0.8920071125030518
              },
              {
                "xCoordinate": 0.6966586112976074,
                "yCoordinate": 0.8920071125030518
              }
            ],
            "text": "11862M"
          }
        }
      ],
      "ocrDocumentScanResultId": "0ixRM0000004DPl",
      "ocrService": "AMAZON_TEXTRACT",
      "pageNumber": 1,
      "status": "SUCCESS"
    }
  ],
  "status": {
    "code": "SUCCESS",
    "message": "API call has been executed successfully."
  }
}
```

## Related Topics

- ODSR Detailed Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_o_d_s_r_detailed_outpu.htm)
- ODSR Detailed Output (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_odsr_detailed_output.htm)
