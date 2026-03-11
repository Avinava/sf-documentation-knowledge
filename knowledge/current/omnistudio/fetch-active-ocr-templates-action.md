---
title: "Fetch Active OCR Templates Action"
domain: omnistudio
topic: fetch-active-ocr-templates-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:10.312Z
keywords: [Fetch, Active, OCR, Templates, Action, Special, Access, Rules, Supported, REST, HTTP, Methods, Inputs, Outputs, Example]
---

# Fetch Active OCR Templates Action

# Fetch Active OCR Templates Action

Fetch all the active OCR templates in an org.

Use this action to automate OCR template selection for the text extracted from an uploaded document.

## Special Access Rules

This action is available in API version 58.0 and later for users with the AWSTextract1000LimitAddOn or IntelligentDocumentReaderAddOn license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/fetchActiveOcrTemplates

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| documentTypeId | TypestringDescriptionOptional. The ID of the document type associated with the OCR template.NoteYou can specify up to 20 document type IDs. |
| targetObjects | TypestringDescriptionOptional. The comma-separated list of target object API names associated with the OCR template. |

## Outputs

| Output | Details |
| --- | --- |
| ocrTemplates | TypestringDescriptionThe comma-separated list of OCR template records that match the specified document type ID and target objects. |

## Example

**Sample Request**

```

```

**Sample Response**

```

```