---
title: "Additional Fields Map Value"
domain: insurance-developer-guide
topic: additional-fields-map-value
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.659Z
estimatedTokens: 101
keywords: [Additional, Map, Input, representation, AdditionalFieldsMapValue, wrapper, that's, child, AdditionalFieldsMap]
---

# Additional Fields Map Value

> Input representation for the AdditionalFieldsMapValue wrapper object that's used as child
      wrapper of AdditionalFieldsMap.

# Additional Fields Map Value

Input representation for the AdditionalFieldsMapValue wrapper object that's used as child wrapper of AdditionalFieldsMap.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields​MapValue | Object | JSON map that contains the fields to be updated. | Required | 63.0 |

## Code Examples

```
additionalFields":{
      "additionalFieldsList":[
         {
            "additionalFieldsMapValue":{
               "instanceKey":"autoRoot",
               "fields":{
                  "Checkbox__c":"true",
                  "Currency__c":123456,
                  "Date__c":"2024-11-30",
                  "DateTime__c":"2024-12-31T01:34:00.000Z",
                  "Email__c":"testuser@sf.com"
               }
            }
         }

  {
           "additionalFieldsMapValue":{
             "instanceKey":"autoDriver",
              "fields":{
                 "TextEncr__c":"233345675676",
                 "Url__c":"https://thisistest.com",
                  "Time__c":"12:05:00.000Z"
           }
        }
     }
      ]
   }
```

```
{
  "key": "EmployeeNumber__c",
  "value": "E12345"
}
```
