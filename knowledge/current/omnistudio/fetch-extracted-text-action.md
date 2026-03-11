---
title: "Fetch Extracted Text Action"
domain: omnistudio
topic: fetch-extracted-text-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:10.317Z
keywords: [Fetch, Extracted, Text, Action, Special, Access, Rules, Supported, REST, HTTP, Methods, Inputs, Outputs, Example]
---

# Fetch Extracted Text Action

# Fetch Extracted Text Action

Fetch the text extracted from an uploaded document.

## Special Access Rules

This action is available in API version 58.0 and later for users with the AWSTextract1000LimitAddOn or IntelligentDocumentReaderAddOn license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/fetchExtractedText

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| contentDocumentId | TypestringDescriptionRequired. The unique content document ID of the uploaded document to get the extracted text.NoteYou can specify up to 20 content Document IDs. |
| endPageIndex | TypeIntegerDescriptionOptional. The page number up to which the extracted text must be retrieved. The default value is the last page number in the specified document. |
| startPageIndex | TypeIntegerDescriptionOptional. The page number to start fetching the extracted text. The default value is 1.NoteYou can fetch the extracted text from up to 20 pages in a specified document. |

## Outputs

| Output | Details |
| --- | --- |
| ocrDocumentScanResultDetails | TypestringDescriptionThe details of the extracted document including key value pairs of the extracted text, bounding box coordinates, and extraction confidence for the specified documents.This output is an Apex output type that contains nested arrays in JSON format. The ocrDocumentScanResultDetails output contains an array of the OcrDocumentScanResultDetailsList Apex class. Each element in this array corresponds to an input contentDocumentId in the same order as they were provided in the request. |

## Example

**Sample Request**

```

```

**Sample Response**

```

```