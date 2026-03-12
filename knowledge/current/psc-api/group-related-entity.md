---
title: "Group Related Entity"
domain: psc-api
topic: group-related-entity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.065Z
estimatedTokens: 115
keywords: [Group, Entity, Output, representation, fetch, records, party, relationship]
---

# Group Related Entity

> Output representation of the request to fetch the related records of a
         party relationship group.

# Group Related Entity

Output representation of the request to fetch the related records of a party relationship group.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| relatedEntities | Map<String, String[]> | Map of the related objects and their record IDs. For example, case participants, tasks, cases, contacts, and public complaints. | Small, 58.0 | 58.0 |

## Code Examples

```
{
   "relatedEntities":{
      "Task":[
            "00Txx000003rIRU",
         "00Txx000003rIUi"
      ],
      "CaseParticipant":[
         "1caxx00000000BL"
      ],
      "ContentDocumentLink":[
         "06Axx0000004C93"
      ],
      "Case":[
         "500xx000000bod7",
         "500xx000000boej"
      ],
      "Contact":[
         "003xx000004Wi5Q"
      ],
      "PublicComplaint":[
         "0fhxx000000006T"
      ],
      "WorkOrder":[
         "0WOxx0000000001"
      ],
      "CarePlan":[
         "1spxx000000003F"
      ],
      "Opportunity":[
         "006xx000001a332",
         "006xx000001a34e",
         "006xx000001a36G"
      ],
      "Lead":[
         "00Qxx000002TRbO"
      ],
      "Entity1__c":[
         "a01xx000003GaSF"
      ],
      "Asset":[
         "02ixx0000004HHi"
      ],
      "Allegation__c":[
         "a00xx000000bobV"
      ],
      "Contract":[
         "800xx000000bohx"
      ]
   }
}
```
