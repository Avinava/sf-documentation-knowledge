---
title: "Fetch Active OCR Templates Action"
domain: omnistudio
topic: fetch-active-ocr-templates-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:51.177Z
estimatedTokens: 289
keywords: [Fetch, Active, OCR, Templates, Action, active, templates, org., Special, Access, Rules, Supported, REST, HTTP, Inputs, Outputs, Example]
---

# Fetch Active OCR Templates Action

> Fetch all the active OCR templates in an org.

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

## Code Examples

```
{
   "inputs":[
      {
         "documentTypeId":"0deT10000004CCbIAM,0ghT11000004CCbIF",
         "targetObjects":"Account,Contact"
      }
   ]
}
```

```
[
   {
      "actionName":"fetchActiveOcrTemplates",
      "errors":null,
      "isSuccess":true,
      "outputValues":{
         "ocrTemplates":{
            "ocrTemplates":[
               {
                  "ocrTemplateId":"48tT1000000004IIAQ",
                  "ocrTargetObjects":[
                     {
                        "targetObjectRecordType":null,
                        "targetObject":"Account",
                        "ocrTargetObjectId":"97hT100000000HjIAI"
                     },
                     {
                        "targetObjectRecordType":null,
                        "targetObject":"CareDiagnosis",
                        "ocrTargetObjectId":"97hT100000000HoIAI"
                     }
                  ],
                  "name":"bb",
                  "documentTypeId":"0deT10000004CCbIAM",
                  "developerName":"bb"
               },
               {
                  "ocrTemplateId":"48tT10000004CF1IAM",
                  "ocrTargetObjects":[
                     {
                        "targetObjectRecordType":null,
                        "targetObject":"Account",
                        "ocrTargetObjectId":"97hT10000004CelIAE"
                     }
                  ],
                  "name":"scrlicense",
                  "documentTypeId":"0deT10000004CCbIAM",
                  "developerName":"scrlicense"
               },
               {
                  "ocrTemplateId":"48tT1000000004NIAQ",
                  "ocrTargetObjects":[
                     {
                        "targetObjectRecordType":null,
                        "targetObject":"Contact",
                        "ocrTargetObjectId":"97hT100000000HtIAI"
                     }
                  ],
                  "name":"bb2",
                  "documentTypeId":"0ghT11000004CCbIF",
                  "developerName":"bb2"
               }
            ]
         }
      },
      "version":1
   }
]
```
