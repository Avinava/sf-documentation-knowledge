---
title: "Get Layouts and Descriptions for a Specified Object"
domain: rest-api
topic: get-layouts-and-descriptions-for-a-specified-object
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.997Z
estimatedTokens: 95
keywords: [Get, Layouts, Descriptions, Specified, Retrieves, lists, layouts, their, descriptions, single, object., Syntax, Example]
---

# Get Layouts and Descriptions for a Specified Object

> Retrieves lists of layouts and their descriptions for a single object.

# Get Layouts and Descriptions for a Specified Object

Retrieves lists of layouts and their descriptions for a single object.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/describe/layouts/

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

None required

## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Battle_Station__c/describe/layouts/ -H "Authorization: Bearer token"
```

```
{
  "layouts" : [ {
    "buttonLayoutSection" : {
      "detailButtons" : [
          ...
      ]
    },
    "detailLayoutSections" : [
        ...
    ],
    "editLayoutSections" : [
        ...
    ],
    "feedView" : null,
    "highlightsPanelLayoutSection" : null,
    "id" : "00ho000000BKMebAAH",
    "multirowEditLayoutSections" : [ ],
    "offlineLinks" : [ ],
    "quickActionList" : {
      "quickActionListItems" : [
          ...
      ]
    },
    "relatedContent" : null,
    "relatedLists" : [
        ...
    ],
    "saveOptions" : [ ]
  } ],
  "recordTypeMappings" : [
      ...
  ],
  "recordTypeSelectorRequired" : [ false ]
}
```
