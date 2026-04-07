---
title: "Use Case Examples for Enhanced Content Search"
domain: mc-apis
topic: use-case-examples-for-enhanced-content-search
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:21.023Z
estimatedTokens: 4672
keywords: [Case, Examples, Enhanced, Content, Search, fictitious, Northern, Trail, Outfitters, company, show, how, Marketing, Cloud, feature, Partial, Exact, Words, Filter, Created, Date]
---

> The following examples use the fictitious Northern Trail Outfitters company to show you how to use the Marketing Cloud Enhanced Content Search feature.

# Use Case Examples for Enhanced Content Search

The following examples use the fictitious Northern Trail Outfitters company to show you how to use the Marketing Cloud Enhanced Content Search feature.

For reference details related to these use cases, see [POST /asset/v1/content/assets/query](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/assetAdvancedQuery.htm).

## Use Case 1 - Partial Exact Search on Name

Northern Trail Outfitters (NTO) uses this naming taxonomy for their message campaigns:

\[Messaging Channel\] \[CALL TO ACTION\] \[Fiscal Year\] \[Quarter Number\] \[Month Number\] \[Week Number\]

Using this taxonomy, NTO has these messages:

```
EMAIL FLASHSALE FY20 Q2 05 WK4
EMAIL FLASHSALE FY20 Q3 08 WK4
SMS FLASHSALE FY20 Q2 05 WK4
SMS FLASHSALE FY20 Q3 08 WK4
PUSH FLASHSALE FY20 Q2 05 WK4
PUSH FLASHSALE FY20 Q3 08 WK4
```

NTO received feedback that the coupon codes in their flash sale messages in fiscal year 20, Q3, week 4 messages in August are not working, and they need to replace the code. To find all affected messages, they perform a search that returns all messages, regardless of channel, for that timeframe, based on the name taxonomy. NTO wants a search query that can return these messages:

```
EMAIL FLASHSALE FY20 Q3 08 WK4
SMS FLASHSALE FY20 Q3 08 WK4
PUSH FLASHSALE FY20 Q3 08 WK4
```

With the like operator, NTO finds results with an exact match of a partial string.

### Example Request for Use Case 1:

```
POST: /asset/v1/content/assets/query

{
   "query": {
           "property": "name",
           "simpleOperator": "like",
           "value": "FLASHSALE FY20 Q3 08 WK4"
       },
   "fields": [
       "id",
       "name"
       ]
}
```

### Example Response for Use Case 1:

```
{
   "count": 3,
   "page": 1,
   "pageSize": 50,
   "links": {},
   "items": [
       {
           "id": 214752,
           "customerKey": "8b16bea2-5446-4ba0-8902-d87f88e0d008",
           "assetType": {
               "id": 230,
               "name": "jsonmessage",
               "displayName": "JSON Message"
           },
           "name": "PUSH FLASHSALE FY20 Q3 08 WK4",
           "modelVersion": 2
       },
       {
           "id": 214747,
           "customerKey": "e0ffc227-328c-43d9-b93d-3a99019beb1d",
           "assetType": {
               "id": 230,
               "name": "jsonmessage",
               "displayName": "JSON Message"
           },
           "name": "SMS FLASHSALE FY20 Q3 08 WK4",
           "modelVersion": 2
       },
       {
           "id": 214742,
           "customerKey": "875eb1b6-2f4d-48fc-be95-bae5adc6a1b0",
           "assetType": {
               "id": 207,
               "name": "templatebasedemail",
               "displayName": "Template-Based Email"
           },
           "name": "EMAIL FLASHSALE FY20 Q3 08 WK4",
           "data": {
               "email": {
                   "options": {
                       "characterEncoding": "utf-8"
                   },
                   "attributes": [
                       {
                           "displayName": "AdditionalEmailAttribute1",
                           "name": "AdditionalEmailAttribute1",
                           "value": "",
                           "order": 1,
                           "channel": "email",
                           "attributeType": "AdditionalEmailAttribute"
                       },
                       {
                           "displayName": "AdditionalEmailAttribute2",
                           "name": "AdditionalEmailAttribute2",
                           "value": "",
                           "order": 2,
                           "channel": "email",
                           "attributeType": "AdditionalEmailAttribute"
                       },
                       {
                           "displayName": "AdditionalEmailAttribute3",
                           "name": "AdditionalEmailAttribute3",
                           "value": "",
                           "order": 3,
                           "channel": "email",
                           "attributeType": "AdditionalEmailAttribute"
                       },
                       {
                           "displayName": "AdditionalEmailAttribute4",
                           "name": "AdditionalEmailAttribute4",
                           "value": "",
                           "order": 4,
                           "channel": "email",
                           "attributeType": "AdditionalEmailAttribute"
                       },
                       {
                           "displayName": "AdditionalEmailAttribute5",
                           "name": "AdditionalEmailAttribute5",
                           "value": "",
                           "order": 5,
                           "channel": "email",
                           "attributeType": "AdditionalEmailAttribute"
                       }
                   ],
                   "legacy": {
                       "legacyId": 144522,
                       "legacyKey": "875eb1b6-2f4d-48fc-be95-bae5adc6a1b0",
                       "legacyType": "email",
                       "legacyCategoryId": 11260
                   }
               }
           },
           "legacyData": {
               "legacyId": 144522,
               "legacyKey": "875eb1b6-2f4d-48fc-be95-bae5adc6a1b0",
               "legacyType": "email",
               "legacyCategoryId": 11260
           },
           "modelVersion": 2
       }
   ]
}
```

## Use Case 2 - Exact Search on Name

NTO received feedback that there is a typo in their email ad message in fiscal year 20, Q3, week 4 message in August, and they want to update the message. To find the affected message, they perform a search that returns only that message. NTO wants a search query than only returns this message:

```
EMAIL AD FY20 Q3 08 WK4
```

With the equals operator, NTO can search to find an exact match for the name of the asset.

### Example Request for Use Case 2

```
POST: /asset/v1/content/assets/query
{
   "query": {
           "property": "name",
           "simpleOperator": "equals",
           "value": "EMAIL AD FY20 Q3 08 WK4"
       },
   "fields": [
       "id",
       "name"
       ]
}
```

### Example Response for Use Case 2

```
{
   "count": 1,
   "page": 1,
   "pageSize": 50,
   "links": {},
   "items": [
       {
           "id": 214757,
           "customerKey": "1365cf4a-b84a-4962-a4e7-a94f65a29fcc",
           "assetType": {
               "id": 207,
               "name": "templatebasedemail",
               "displayName": "Template-Based Email"
           },
           "name": "EMAIL AD FY20 Q3 08 WK4",
           "data": {
               "email": {
                   "options": {
                       "characterEncoding": "utf-8"
                   },
                   "attributes": [
                       {
                           "displayName": "AdditionalEmailAttribute1",
                           "name": "AdditionalEmailAttribute1",
                           "value": "",
                           "order": 1,
                           "channel": "email",
                           "attributeType": "AdditionalEmailAttribute"
                       },
                       {
                           "displayName": "AdditionalEmailAttribute2",
                           "name": "AdditionalEmailAttribute2",
                           "value": "",
                           "order": 2,
                           "channel": "email",
                           "attributeType": "AdditionalEmailAttribute"
                       },
                       {
                           "displayName": "AdditionalEmailAttribute3",
                           "name": "AdditionalEmailAttribute3",
                           "value": "",
                           "order": 3,
                           "channel": "email",
                           "attributeType": "AdditionalEmailAttribute"
                       },
                       {
                           "displayName": "AdditionalEmailAttribute4",
                           "name": "AdditionalEmailAttribute4",
                           "value": "",
                           "order": 4,
                           "channel": "email",
                           "attributeType": "AdditionalEmailAttribute"
                       },
                       {
                           "displayName": "AdditionalEmailAttribute5",
                           "name": "AdditionalEmailAttribute5",
                           "value": "",
                           "order": 5,
                           "channel": "email",
                           "attributeType": "AdditionalEmailAttribute"
                       }
                   ],
                   "legacy": {
                       "legacyId": 144529,
                       "legacyKey": "1365cf4a-b84a-4962-a4e7-a94f65a29fcc",
                       "legacyType": "email",
                       "legacyCategoryId": 11260
                   }
               }
           },
           "legacyData": {
               "legacyId": 144529,
               "legacyKey": "1365cf4a-b84a-4962-a4e7-a94f65a29fcc",
               "legacyType": "email",
               "legacyCategoryId": 11260
           },
           "modelVersion": 2
       }
   ]
```

## Use Case 3 - Partial Search in Content, All Words

A user is looking for an older email that she wants to duplicate as a starting point for a new email. She doesn’t remember what the exact name of the email was, but she knows that it contained these words: flash, sale, happy, new, year.

With the mustcontain operator, NTO performs a search for assets that contains all words included in the search.

### Example Request for Use Case 3

```
POST: /asset/v1/content/assets/query
{
   "query": {
       "property": "content",
       "simpleOperator": "mustcontain",
       "value": "flash sale happy new year"
   },
   "fields": [
       "id",
       "name"
       ]
}
```

### Example Response for Use Case 3

```
{
"count": 1,
"page": 1,
"pageSize": 50,
"links": {},
"items": [
{
"id": 214788,
"customerKey": "705efa56-9712-4dee-8667-92668047a83e",
"objectID": "59200555-b438-427f-8b99-a3963a7b3a9c",
"contentType": "application/vnd.etmc.email.Message; kind=template",
"assetType": {
"id": 207,
"name": "templatebasedemail",
"displayName": "Template-Based Email"
},
"name": "EMAIL FLASHSALE FY20 Q1 01 WK1",
"description": "",
"owner": {
"id": 8213973,
"email": "email@example.com",
"name": "Sean Smith",
"userId": "6247779"
},
"createdDate": "2020-07-20T13:36:50.06-06:00",
"createdBy": {
"id": 8213973,
"email": "email@example.com",
"name": "Sean Smith",
"userId": "6247779"
},
"modifiedDate": "2020-07-20T13:38:07.537-06:00",
"modifiedBy": {
"id": 8213973,
"email": "email@example.com",
"name": "Sean Smith",
"userId": "6247779"
},
"enterpriseId": 8202565,
"memberId": 8202565,
"status": {
"id": 1,
"name": "Draft"
},
"thumbnail": {
"thumbnailUrl": "/v1/assets/214788/thumbnail"
},
"category": {
"id": 330268,
"name": "Flashsales",
"parentId": 330267
},
"meta": {
"globalStyles": {
"isLocked": false,
"template": {
"background-color": "#FFFFFF",
"border-color": "",
"border-width": "0px",
"border-style": "solid"
},
"body": {
"background-color": "#EFEFEF",
"font-family": "Arial,helvetica,sans-serif",
"font-size": "16px",
"color": "#808080",
"line-height": 1,
"margin": "0px",
"padding": "20px",
"content-padding-top": "10px",
"content-padding-right": "10px",
"content-padding-bottom": "10px",
"content-padding-left": "10px"
},
"h1": {
"font-family": "Arial,helvetica,sans-serif",
"font-size": "28px",
"color": "#202020",
"line-height": 1,
"font-weight": "bold",
"font-style": "normal"
},
"h2": {
"font-family": "Arial,helvetica,sans-serif",
"font-size": "22px",
"color": "#202020",
"line-height": 1,
"font-weight": "bold",
"font-style": "normal"
},
"h3": {
"font-family": "Arial,helvetica,sans-serif",
"font-size": "20px",
"color": "#202020",
"line-height": 1,
"font-weight": "bold",
"font-style": "normal"
},
"links": {
"font-weight": "normal",
"color": "#808080",
"text-decoration": "none"
},
"buttons": {
"font-family": "Arial,helvetica,sans-serif",
"font-size": "16px",
"color": "#FFFFFF",
"background-color": "#5D5D5D",
"border-radius": "3px",
"padding": "10px",
"border-color": "#5D5D5D",
"border-width": "1px",
"border-style": "solid"
},
"mobile": {
"body": {
"padding": "0px",
"font-size": "16px",
"line-height": 1.5
},
"h1": {
"font-size": "22px",
"line-height": 1
},
"h2": {
"font-size": "20px",
"line-height": 1
},
"h3": {
"font-size": "18px",
"line-height": 1
},
"buttons": {
"font-family": "Arial,helvetica,sans-serif",
"font-size": "16px",
"color": "#FFFFFF",
"padding": "10px"
}
}
}
},
"views": {
"subjectline": {
"contentType": "application/vnd.etmc.email.View; kind=subjectline",
"content": "Your first flash sale of the new year!",
"meta": {},
"availableViews": [],
"data": {
"email": {
"options": {
"generateFrom": ""
}
}
},
"modelVersion": 2
},
"preheader": {
"availableViews": [],
"data": {
"email": {
"options": {
"generateFrom": ""
}
}
},
"modelVersion": 2
},
"html": {
[TRUNCATED FOR SPACE],
"data": {
"email": {
"options": {
"characterEncoding": "utf-8"
},
"attributes": [
{
"displayName": "AdditionalEmailAttribute1",
"name": "AdditionalEmailAttribute1",
"value": "",
"order": 1,
"channel": "email",
"attributeType": "AdditionalEmailAttribute"
},
{
"displayName": "AdditionalEmailAttribute2",
"name": "AdditionalEmailAttribute2",
"value": "",
"order": 2,
"channel": "email",
"attributeType": "AdditionalEmailAttribute"
},
{
"displayName": "AdditionalEmailAttribute3",
"name": "AdditionalEmailAttribute3",
"value": "",
"order": 3,
"channel": "email",
"attributeType": "AdditionalEmailAttribute"
},
{
"displayName": "AdditionalEmailAttribute4",
"name": "AdditionalEmailAttribute4",
"value": "",
"order": 4,
"channel": "email",
"attributeType": "AdditionalEmailAttribute"
},
{
"displayName": "AdditionalEmailAttribute5",
"name": "AdditionalEmailAttribute5",
"value": "",
"order": 5,
"channel": "email",
"attributeType": "AdditionalEmailAttribute"
}
],
"legacy": {
"legacyId": 144541,
"legacyKey": "705efa56-9712-4dee-8667-92668047a83e",
"legacyType": "email",
"legacyCategoryId": 11260
}
}
},
"legacyData": {
"legacyId": 144541,
"legacyKey": "705efa56-9712-4dee-8667-92668047a83e",
"legacyType": "email",
"legacyCategoryId": 11260
},
"modelVersion": 2
}
]
}
```

## Use Case 4 - Filter by Created By and Created Date

A user resumes work on an email a coworker created in her NTO account last week, but does not remember the email name. She filters all emails so that she only sees emails created by her coworker last week.

### Example Request for Use Case 4

```
POST: /asset/v1/content/assets/query
{
   "query": {
       "rightOperand":{
           "property": "createdDate",
           "simpleOperator": "greaterthan",
           "value": "2020-07-13"
       },
       "logicalOperator":"AND",
       "leftOperand":{
           "property": "createdDate",
           "simpleOperator": "lessthan",
           "value": "2020-07-18"
       }
   },
   "where": {
       "property": "owner.userId",
       "simpleOperater": "equals",
       "value": "8213973"
   },
   "fields": [
       "id",
       "name",
       "owner"
       ]
}
```

### Example Response for Use Case 4

```
{
   "count": 1,
   "page": 1,
   "pageSize": 50,
   "links": {},
   "items": [
       {
           "id": 214757,
           "customerKey": "1365cf4a-b84a-4962-a4e7-a94f65a29fcc",
           "assetType": {
               "id": 207,
               "name": "templatebasedemail",
               "displayName": "Template-Based Email"
           },
           "name": "EMAIL AD FY20 Q3 08 WK4",
           "owner": {
               "id": 8675309,
               "email": "marketing_user@ntoretail.com",
               "name": "Marketing User",
               "userId": "8675309"
           },
           "data": {
               "email": {
                   "options": {
                       "characterEncoding": "utf-8"
                   },
                   "attributes": [
                       {
                           "displayName": "AdditionalEmailAttribute1",
                           "name": "AdditionalEmailAttribute1",
                           "value": "",
                           "order": 1,
                           "channel": "email",
                           "attributeType": "AdditionalEmailAttribute"
                       },
                       {
                           "displayName": "AdditionalEmailAttribute2",
                           "name": "AdditionalEmailAttribute2",
                           "value": "",
                           "order": 2,
                           "channel": "email",
                           "attributeType": "AdditionalEmailAttribute"
                       },
                       {
                           "displayName": "AdditionalEmailAttribute3",
                           "name": "AdditionalEmailAttribute3",
                           "value": "",
                           "order": 3,
                           "channel": "email",
                           "attributeType": "AdditionalEmailAttribute"
                       },
                       {
                           "displayName": "AdditionalEmailAttribute4",
                           "name": "AdditionalEmailAttribute4",
                           "value": "",
                           "order": 4,
                           "channel": "email",
                           "attributeType": "AdditionalEmailAttribute"
                       },
                       {
                           "displayName": "AdditionalEmailAttribute5",
                           "name": "AdditionalEmailAttribute5",
                           "value": "",
                           "order": 5,
                           "channel": "email",
                           "attributeType": "AdditionalEmailAttribute"
                       }
                   ],
                   "legacy": {
                       "legacyId": 144529,
                       "legacyKey": "1365cf4a-b84a-4962-a4e7-a94f65a29fcc",
                       "legacyType": "email",
                       "legacyCategoryId": 11260
                   }
               }
           },
           "legacyData": {
               "legacyId": 144529,
               "legacyKey": "1365cf4a-b84a-4962-a4e7-a94f65a29fcc",
               "legacyType": "email",
               "legacyCategoryId": 11260
           },
           "modelVersion": 2
       }
   ]
}
```
