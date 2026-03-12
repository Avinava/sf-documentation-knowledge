---
title: "Fetch Extracted Text Action"
domain: psc-api
topic: fetch-extracted-text-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:31.596Z
estimatedTokens: 431
keywords: [Fetch, Extracted, Text, Action, uploaded, document, Special, Access, Rules, REST, HTTP, Inputs, Outputs]
---

# Fetch Extracted Text Action

> Fetch the text extracted from an uploaded document.

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

## Code Examples

```
{
   "inputs":[
      {
         "contentDocumentId":"069T10000004FnoIAE",
         "startPageIndex":1,
         "endPageIndex":20
      }
   ]
}
```

```
[
   {
      "actionName":"fetchExtractedText",
      "errors":null,
      "isSuccess":true,
      "outputValues":{
         "ocrDocumentScanResultDetails":{
            "ocrDocumentScanResultDetails":[
               {
                  "status":"SUCCESS",
                  "pageNumber":1,
                  "ocrService":"AMAZON_TEXTRACT",
                  "ocrDocumentScanResultId":"0ixT100000000bv",
                  "keyValuePairs":[
                     {
                        "value":{
                           "value":"30 NOV 2009",
                           "confidence":51.1217041015625
                        },
                        "key":{
                           "value":"Issued On",
                           "confidence":51.1217041015625
                        }
                     },
                     {
                        "value":{
                           "value":"F",
                           "confidence":62.40586471557617
                        },
                        "key":{
                           "value":"Sex",
                           "confidence":62.40586471557617
                        }
                     },
                     {
                        "value":{
                           "value":"C03004786",
                           "confidence":29.852550506591797
                        },
                        "key":{
                           "value":"Passport Card no",
                           "confidence":29.852550506591797
                        }
                     },
                     {
                        "value":{
                           "value":"NEW YORK U.S.A.",
                           "confidence":44.244361877441406
                        },
                        "key":{
                           "value":"Place of Birth",
                           "confidence":44.244361877441406
                        }
                     },
                     {
                        "value":{
                           "value":"1 JAN 1981",
                           "confidence":71.45907592773438
                        },
                        "key":{
                           "value":"Date of Birth",
                           "confidence":71.45907592773438
                        }
                     },
                     {
                        "value":{
                           "value":"29 NOV 2019",
                           "confidence":57.35758590698242
                        },
                        "key":{
                           "value":"Expires On",
                           "confidence":57.35758590698242
                        }
                     },
                     {
                        "value":{
                           "value":"HAPPY",
                           "confidence":34.885074615478516
                        },
                        "key":{
                           "value":"Given Names",
                           "confidence":34.885074615478516
                        }
                     }
                  ]
               },
               {
                  "status":"SUCCESS",
                  "pageNumber":1,
                  "ocrService":"AMAZON_TEXTRACT_ANALYZED_ID",
                  "ocrDocumentScanResultId":"0ixT100000000c0",
                  "keyValuePairs":[
                     {
                        "value":{
                           "value":"HAPPY",
                           "confidence":82.33665466308594
                        },
                        "key":{
                           "value":"FIRST_NAME",
                           "confidence":100.0
                        }
                     },
                     {
                        "value":{
                           "value":"TRAVELER",
                           "confidence":80.86970520019531
                        },
                        "key":{
                           "value":"LAST_NAME",
                           "confidence":100.0
                        }
                     },
                     {
                        "value":{
                           "value":"",
                           "confidence":99.19149780273438
                        },
                        "key":{
                           "value":"MIDDLE_NAME",
                           "confidence":0.0
                        }
                     },
                     {
                        "value":{
                           "value":"",
                           "confidence":99.17862701416016
                        },
                        "key":{
                           "value":"SUFFIX",
                           "confidence":0.0
                        }
                     },
                     {
                        "value":{
                           "value":"",
                           "confidence":99.21914672851562
                        },
                        "key":{
                           "value":"CITY_IN_ADDRESS",
                           "confidence":0.0
                        }
                     },
                     {
                        "value":{
                           "value":"",
                           "confidence":99.13475036621094
                        },
                        "key":{
                           "value":"ZIP_CODE_IN_ADDRESS",
                           "confidence":0.0
                        }
                     },
                     {
                        "value":{
                           "value":"",
                           "confidence":99.09383392333984
                        },
                        "key":{
                           "value":"STATE_IN_ADDRESS",
                           "confidence":0.0
                        }
                     },
                     {
                        "value":{
                           "value":"",
                           "confidence":99.17210388183594
                        },
                        "key":{
                           "value":"STATE_NAME",
                           "confidence":0.0
                        }
                     },
                     {
                        "value":{
                           "value":"C03004786",
                           "confidence":94.59364318847656
                        },
                        "key":{
                           "value":"DOCUMENT_NUMBER",
                           "confidence":100.0
                        }
                     },
                     {
                        "value":{
                           "value":"29 NOV 2019",
                           "confidence":95.38605499267578
                        },
                        "key":{
                           "value":"EXPIRATION_DATE",
                           "confidence":100.0
                        }
                     },
                     {
                        "value":{
                           "value":"1 JAN 1981",
                           "confidence":97.8244857788086
                        },
                        "key":{
                           "value":"DATE_OF_BIRTH",
                           "confidence":100.0
                        }
                     },
                     {
                        "value":{
                           "value":"30 NOV 2009",
                           "confidence":86.14622497558594
                        },
                        "key":{
                           "value":"DATE_OF_ISSUE",
                           "confidence":100.0
                        }
                     },
                     {
                        "value":{
                           "value":"DRIVER LICENSE FRONT",
                           "confidence":93.44902038574219
                        },
                        "key":{
                           "value":"ID_TYPE",
                           "confidence":100.0
                        }
                     },
                     {
                        "value":{
                           "value":"",
                           "confidence":99.12863159179688
                        },
                        "key":{
                           "value":"ENDORSEMENTS",
                           "confidence":0.0
                        }
                     },
                     {
                        "value":{
                           "value":"",
                           "confidence":99.17374420166016
                        },
                        "key":{
                           "value":"VETERAN",
                           "confidence":0.0
                        }
                     },
                     {
                        "value":{
                           "value":"",
                           "confidence":99.16364288330078
                        },
                        "key":{
                           "value":"RESTRICTIONS",
                           "confidence":0.0
                        }
                     },
                     {
                        "value":{
                           "value":"",
                           "confidence":99.1679458618164
                        },
                        "key":{
                           "value":"CLASS",
                           "confidence":0.0
                        }
                     },
                     {
                        "value":{
                           "value":"",
                           "confidence":99.17534637451172
                        },
                        "key":{
                           "value":"ADDRESS",
                           "confidence":0.0
                        }
                     },
                     {
                        "value":{
                           "value":"",
                           "confidence":99.17364501953125
                        },
                        "key":{
                           "value":"COUNTY",
                           "confidence":0.0
                        }
                     },
                     {
                        "value":{
                           "value":"NEW YORK U.S.A.",
                           "confidence":94.59681701660156
                        },
                        "key":{
                           "value":"PLACE_OF_BIRTH",
                           "confidence":100.0
                        }
                     },
                     {
                        "value":{
                           "value":"",
                           "confidence":97.52543640136719
                        },
                        "key":{
                           "value":"MRZ_CODE",
                           "confidence":0.0
                        }
                     }
                  ]
               }
            ]
         }
      },
      "version":1
   }
]
```
