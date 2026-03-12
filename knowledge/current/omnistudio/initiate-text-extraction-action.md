---
title: "Initiate Text Extraction Action"
domain: omnistudio
topic: initiate-text-extraction-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:51.191Z
estimatedTokens: 587
keywords: [Initiate, Text, Extraction, Action, Extract, text, uploaded, document, Amazon, Textract, API., Special, Access, Rules, Supported, REST, HTTP, Inputs, Outputs, Example]
---

# Initiate Text Extraction Action

> Extract text from an uploaded document by using the Amazon Textract
   API.

# Initiate Text Extraction Action

Extract text from an uploaded document by using the Amazon Textract API.

You can automate the Intelligent Document Reader’s text detection and extraction steps using this invocable action.

## Special Access Rules

This action is available in API version 58.0 and later for users with the AWSTextract1000LimitAddOn or IntelligentDocumentReaderAddOn license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/initiateTextExtraction

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| configurationAPIName | TypestringDescriptionFor internal use only. |
| contentDocumentId | TypestringDescriptionRequired. The unique content document ID of the uploaded document to initiate text extraction.You can specify up to 20 content Document IDs. |
| documentTypeId | TypestringDescriptionOptional. The ID of the document type that contains the queries. These queries are used to retrieve the OCR Service. Available in API version 60.0 and later. |
| endPageIndex | TypeintegerDescriptionOptional. The page number up to which the text must be extracted. The default value is the last page number in the specified document. |
| ocrService | TypepicklistDescriptionOptional. The name of the OCR service that extracts text from the document. Valid values are:AMAZON_TEXTRACT—Indicates the AWS Document service.AMAZON_TEXTRACT_ANALYZE_ID—Indicates the AWS Analyze ID service.AMAZON_TEXTRACT_DETECT_TEXT—Indicates the AWS Detect service that displays the text detected in a document.PDF_DOCX_EXTRACT_TEXT—Indicates the AWS Extract service that automatically extracts content from PDF files.Required if the documentTypeId property isn’t specified. The ocrService is retrieved based on the documentTypeId property. |
| startPageIndex | TypeintegerDescriptionOptional. The page number to start text extraction. By default, the starting page number is 1.You can extract text from up to 20 pages in a specified document. |

## Outputs

| Output | Details |
| --- | --- |
| ocrDocumentScanResultDetails | TypestringDescriptionA comma-separated list containing an OcrDocumentScanResult ID and a page number for each extracted page of the specified document. |

## Example

**Sample Request**

```

```

**Sample Response**

```

```

## Code Examples

```
{
  "inputs": [
    {
      "contentDocumentId": "069T10000004FnoIAE",
      "startPageIndex": 1,
      "endPageIndex": 20,
      "ocrService": "AMAZON_TEXTRACT",
      "documentTypeId": "0deT10000004CCbIAM"
    }
  ]
}
```

```
[
   {
      "actionName":"initiateTextExtraction",
      "errors":null,
      "isSuccess":true,
      "outputValues":{
         "ocrDocumentScanResultDetails":{
            "ocrDocumentScanResults":[
               {
                  "pageNumber":1,
                  "ocrDocumentScanResultId":"0ixT100000000bv"
               }
            ]
         }
      },
      "version":1
   }
]
```
