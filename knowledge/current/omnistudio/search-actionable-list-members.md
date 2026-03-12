---
title: "Search
    Actionable List Members"
domain: omnistudio
topic: search-actionable-list-members
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.360Z
estimatedTokens: 140
keywords: [Search, Actionable, Members, Output, representation, searching]
---

# Search
    Actionable List Members

> Output representation of the request for searching for actionable list
    members.

# Search Actionable List Members

Output representation of the request for searching for actionable list members.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fields | Field[] | List of metadata of the Actionable List Member fields | Small, 57.0 | 57.0 |
| nextPageToken | String | Pointer to the last record in the current pagination request | Small, 57.0 | 57.0 |
| records | Record[] | List of queried actionable list member records | Small, 57.0 | 57.0 |

## Code Examples

```
{
  "fields": [
    {
      "apiName": "ActionableListMemberStatusId",
      "calculated": false,
      "compound": false,
      "compoundComponentName": null,
      "compoundFieldName": null,
      "controllerName": null,
      "controllingFields": [],
      "createable": true,
      "custom": false,
      "dataType": "Reference",
      "extraTypeInfo": null,
      "filterable": true,
      "filteredLookupInfo": null,
      "highScaleNumber": false,
      "htmlFormatted": false,
      "inlineHelpText": null,
      "label": "Actionable List Member Status",
      "length": 18,
      "nameField": false,
      "polymorphicForeignKey": false,
      "precision": 0,
      "reference": true,
      "referenceTargetField": null,
      "referenceToInfos": [
        {
          "apiName": "ActionableListMemberStatus",
          "nameFields": []
        }
      ],
      "relationshipName": "ActionableListMemberStatus",
      "required": false,
      "scale": 0,
      "searchPrefilterable": false,
      "sortable": true,
      "unique": false,
      "updateable": true
    },
    {
      "apiName": "ReferenceRecordId",
      "calculated": false,
      "compound": false,
      "compoundComponentName": null,
      "compoundFieldName": null,
      "controllerName": null,
      "controllingFields": [],
      "createable": true,
      "custom": false,
      "dataType": "Reference",
      "extraTypeInfo": null,
      "filterable": true,
      "filteredLookupInfo": null,
      "highScaleNumber": false,
      "htmlFormatted": false,
      "inlineHelpText": null,
      "label": "Reference Record",
      "length": 18,
      "nameField": false,
      "polymorphicForeignKey": true,
      "precision": 0,
      "reference": true,
      "referenceTargetField": null,
      "referenceToInfos": [
        {
          "apiName": "Account",
          "nameFields": [
            "Name"
          ]
        },
        {
          "apiName": "Contact",
          "nameFields": [
            "FirstName",
            "LastName",
            "Name"
          ]
        }
      ],
      "relationshipName": "ReferenceRecord",
      "required": true,
      "scale": 0,
      "searchPrefilterable": false,
      "sortable": true,
      "unique": false,
      "updateable": true
    },
    {
      "apiName": "OwnerId",
      "calculated": false,
      "compound": false,
      "compoundComponentName": null,
      "compoundFieldName": null,
      "controllerName": null,
      "controllingFields": [],
      "createable": true,
      "custom": false,
      "dataType": "Reference",
      "extraTypeInfo": null,
      "filterable": true,
      "filteredLookupInfo": null,
      "highScaleNumber": false,
      "htmlFormatted": false,
      "inlineHelpText": null,
      "label": "Assignee",
      "length": 18,
      "nameField": false,
      "polymorphicForeignKey": true,
      "precision": 0,
      "reference": true,
      "referenceTargetField": null,
      "referenceToInfos": [
        {
          "apiName": "Group",
          "nameFields": [
            "Name"
          ]
        },
        {
          "apiName": "User",
          "nameFields": [
            "FirstName",
            "LastName",
            "Name"
          ]
        }
      ],
      "relationshipName": "Owner",
      "required": true,
      "scale": 0,
      "searchPrefilterable": false,
      "sortable": true,
      "unique": false,
      "updateable": true
    },
    {
      "apiName": "ActionableListId",
      "calculated": false,
      "compound": false,
      "compoundComponentName": null,
      "compoundFieldName": null,
      "controllerName": null,
      "controllingFields": [],
      "createable": true,
      "custom": false,
      "dataType": "Reference",
      "extraTypeInfo": null,
      "filterable": true,
      "filteredLookupInfo": null,
      "highScaleNumber": false,
      "htmlFormatted": false,
      "inlineHelpText": null,
      "label": "Actionable List",
      "length": 18,
      "nameField": false,
      "polymorphicForeignKey": false,
      "precision": 0,
      "reference": true,
      "referenceTargetField": null,
      "referenceToInfos": [
        {
          "apiName": "ActionableList",
          "nameFields": [
            "Name"
          ]
        }
      ],
      "relationshipName": "ActionableList",
      "required": true,
      "scale": 0,
      "searchPrefilterable": false,
      "sortable": true,
      "unique": false,
      "updateable": false
    },
    {
      "apiName": "Name",
      "calculated": false,
      "compound": false,
      "compoundComponentName": null,
      "compoundFieldName": null,
      "controllerName": null,
      "controllingFields": [],
      "createable": false,
      "custom": false,
      "dataType": "String",
      "extraTypeInfo": null,
      "filterable": true,
      "filteredLookupInfo": null,
      "highScaleNumber": false,
      "htmlFormatted": false,
      "inlineHelpText": null,
      "label": "Name",
      "length": 255,
      "nameField": true,
      "polymorphicForeignKey": false,
      "precision": 0,
      "reference": false,
      "referenceTargetField": null,
      "referenceToInfos": [],
      "relationshipName": null,
      "required": true,
      "scale": 0,
      "searchPrefilterable": false,
      "sortable": true,
      "unique": false,
      "updateable": false
    }
  ],
  "nextPageToken": "djE6MTk=",
  "records": [
    {
      "apiName": "ActionableListMember",
      "childRelationships": {},
      "eTag": "6c4f106b488feff2ecb64758daf202f7",
      "fields": {
        "Owner": {
          "displayValue": null,
          "value": {
            "apiName": "Owner",
            "childRelationships": {},
            "eTag": "389e6df77a824032aaf4d6d57099b916",
            "fields": {
              "Id": {
                "displayValue": null,
                "value": "005xx000001X7sHAAS"
              },
              "Name": {
                "displayValue": null,
                "value": "Admin User"
              }
            },
            "id": "005xx000001X7sHAAS",
            "lastModifiedById": null,
            "lastModifiedDate": null,
            "recordTypeId": null,
            "recordTypeInfo": null,
            "systemModstamp": null,
            "weakEtag": 0
          }
        },
        "ActionableList": {
          "displayValue": null,
          "value": {
            "apiName": "ActionableList",
            "childRelationships": {},
            "eTag": "63439e779f0ceda0e6978c5f22162431",
            "fields": {
              "Priority": {
                "displayValue": "High",
                "value": "High"
              },
              "Id": {
                "displayValue": null,
                "value": "0woxx000000028IAAQ"
              },
              "Name": {
                "displayValue": null,
                "value": "Homeloans"
              },
              "ActionableListDefinitionId": {
                "displayValue": null,
                "value": null
              }
            },
            "id": "0woxx000000028IAAQ",
            "lastModifiedById": null,
            "lastModifiedDate": null,
            "recordTypeId": null,
            "recordTypeInfo": null,
            "systemModstamp": null,
            "weakEtag": 0
          }
        },
        "Id": {
          "displayValue": null,
          "value": "0wzxx00000002TjAAI"
        },
        "ReferenceRecord": {
          "displayValue": null,
          "value": {
            "apiName": "ReferenceRecord",
            "childRelationships": {},
            "eTag": "9df10988eff0de6a66136922d75f3643",
            "fields": {
              "Id": {
                "displayValue": null,
                "value": "001xx000003GbvDAAS"
              },
              "Name": {
                "displayValue": null,
                "value": "jaxon Frost"
              }
            },
            "id": "001xx000003GbvDAAS",
            "lastModifiedById": null,
            "lastModifiedDate": null,
            "recordTypeId": null,
            "recordTypeInfo": null,
            "systemModstamp": null,
            "weakEtag": 0
          }
        },
        "Name": {
          "displayValue": null,
          "value": "ALM-00000441"
        }
      },
      "id": "0wzxx00000002TjAAI",
      "lastModifiedById": null,
      "lastModifiedDate": null,
      "recordTypeId": null,
      "recordTypeInfo": null,
      "systemModstamp": null,
      "weakEtag": 0
    }
  ]
}
```
