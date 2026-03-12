---
title: "Tooling API Examples"
domain: caf-dev-guide
topic: tooling-api-examples
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.258Z
estimatedTokens: 386
keywords: [Tooling, API, Examples, retrieve, created, Custom, Address, developer, Record, Query]
---

# Tooling API Examples

> To retrieve information about fields created with Custom Address Fields, such as the
    developer name, use Tooling API.

# Tooling API Examples

To retrieve information about fields created with Custom Address Fields, such as the developer name, use Tooling API.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=caf_dev_guide)

#### Note

Before you enable custom address fields, review the [Custom Address Fields Requirements and Limitations](atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_limitations.htm "Before you enable Custom Address Fields, configure State and Country/Territory picklists and review the limitations of this feature."). To discuss the feature and ask questions, join the [Custom Address Fields Discussion](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000H3KISA0) group on the Trailblazer Community.

## Get Information About a Custom Address Field on a Record

This example uses the CustomField REST HTTP GET method to retrieve information about the Mailing\_Address\_\_c custom address field, with the CustomField ID 00NXXXXXXXXXXXXXXX.

HTTP GET example to retrieve information about a custom address field on a record

```

```

Example response

```

```

## Query Information About a Custom Address Field on a Record

This example uses the CustomField REST HTTP Query method to retrieve the developer name of the Mailing\_Address\_\_c custom address field with CustomField ID 00NXXXXXXXXXXXXXXX.

Example query to retrieve the DeveloperName for a custom address field

```

```

HTTP Query example to retrieve information using the query

```

```

Example response

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/66.0/tooling/sobjects/CustomField/00NXXXXXXXXXXXXXXX -H "Authorization: Bearer token
```

```
{
  "attributes": {
    "type": "CustomField",
    "url": "https://MyDomainName.my.salesforce.com/services/dataa66.0/tooling/sobjects/CustomField/00NXXXXXXXXXXXXXXX"
  },
  "Id": "00NXXXXXXXXXXXXXXX",
  "TableEnumOrId": "Account",
  "DeveloperName": "caf",
  "Description": null,
  "Length": null,
  "Precision": 18,
  "Scale": 15,
  "RelationshipLabel": null,
  "SummaryOperation": null,
  "InlineHelpText": null,
  "MaskType": null,
  "MaskChar": null,
  "NamespacePrefix": null,
  "ManageableState": "unmanaged",
  "CreatedDate": "2021-04-07T06:57:22.000+0000",
  "CreatedById": "005XXXXXXXXXXXXXXX",
  "LastModifiedDate": "2021-04-07T06:57:22.000+0000",
  "LastModifiedById": "005XXXXXXXXXXXXXXX",
  "EntityDefinitionId": "Account",
  "Metadata": {
    "businessOwnerGroup": null,
    "businessOwnerUser": null,
    "businessStatus": null,
    "caseSensitive": null,
    "complianceGroup": null,
    "customDataType": null,
    "defaultValue": null,
    "deleteConstraint": null,
    "deprecated": null,
    "description": null,
    "displayFormat": null,
    "displayLocationInDecimal": null,
    "encryptionScheme": null,
    "escapeMarkup": null,
    "externalDeveloperName": null,
    "externalId": false,
    "formula": null,
    "formulaTreatBlanksAs": null,
    "inlineHelpText": null,
    "isAIPredictionField": null,
    "isConvertLeadDisabled": null,
    "isFilteringDisabled": null,
    "isNameField": null,
    "isSortingDisabled": null,
    "label": "caf",
    "length": null,
    "lookupFilter": null,
    "maskChar": null,
    "maskType": null,
    "metadataRelationshipControllingField": null,
    "mktDataLakeFieldAttributes": null,
    "mktDataModelFieldAttributes": null,
    "populateExistingRows": null,
    "precision": null,
    "readOnlyProxy": null,
    "referenceTargetField": null,
    "referenceTo": null,
    "relationshipLabel": null,
    "relationshipName": null,
    "relationshipOrder": null,
    "reparentableMasterDetail": null,
    "required": null,
    "restrictedAdminField": null,
    "scale": null,
    "securityClassification": null,
    "startingNumber": null,
    "stripMarkup": null,
    "summarizedField": null,
    "summaryFilterItems": null,
    "summaryForeignKey": null,
    "summaryOperation": null,
    "trackFeedHistory": false,
    "trackHistory": null,
    "trackTrending": null,
    "translateData": null,
    "type": "Address",
    "unique": null,
    "urls": null,
    "valueSet": null,
    "visibleLines": null,
    "writeRequiresMasterRead": null
  },
  "FullName": "Account.caf__c"
}
```

```
Select+id,DeveloperName+from+CustomField+where+Id='00NXXXXXXXXXXXXXXX'
```

```
curl https://MyDomainName.my.salesforce.com/services/data/66.0/tooling/query?q=Select+id,DeveloperName+from+CustomField+where+Id='00NXXXXXXXXXXXXXXX -H "Authorization: Bearer token"
```

```
{
  "size": 1,
  "totalSize": 1,
  "done": true,
  "queryLocator": null,
  "entityTypeName": "CustomField",
  "records": [
    {
      "attributes": {
        "type": "CustomField",
        "url": "/services/data/v54.0/tooling/sobjects/CustomField/00NXXXXXXXXXXXXXXX"
      },
      "Id": "00NXXXXXXXXXXXXXXX",
      "DeveloperName": "Mailing_Address"
    }
  ]
}
```

## Related Topics

- Custom Address Fields Requirements and Limitations (atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_limitations.htm)
