---
title: "Get Group Census Members Action"
domain: insurance-developer-guide
topic: get-group-census-members-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.619Z
estimatedTokens: 641
keywords: [Group, Census, Members, Action, member, records, content, document, asynchronous, bulk, item, record, REST, HTTP, Inputs]
---

# Get Group Census Members Action

> Get the group census member records from the content document in the specified
        asynchronous bulk request item record.

# Get Group Census Members Action

Get the group census member records from the content document in the specified asynchronous bulk request item record.

The action processes bulk member data that are uploaded through census management workflows, validates the data, identifies duplicate records, and returns structured member records for saving or further processing. It returns all transformed member records along with detailed error information for any records that fail validation.

This action is available in API version 66.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getGroupCensusMembers

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| asyncBulkRequestItem | TypesobjectDescriptionRequired.Asynchronous bulk request item record that contains the metadata of the CSV file. This property must include the AdditionalInformation field with serialized JSON that contains these details.contentDocumentId—ID of the content documentcontentDocumentVersion—Version number of the content documentcsvColumnMapping—Mapping of CSV columns to target field namesduplicateDetectionFields—List of fields that are used to detect duplicatesgroupCensusId—ID of the parent group censuscsvHeader—Header row from the CSV filestartRowNumber—First CSV row to processendRowNumber—Last CSV row to processduplicateRowNumbersList—List of row numbers identified as duplicates |

## Outputs

| Output | Details |
| --- | --- |
| duplicateDetectionKeysList | TypestringDescriptionComma-separated list of group census member fields that are used to identify unique group census member records. It's shown if duplicate detection fields are configured in the request. |
| errorsData | TypeApex-definedDescriptionErrors for the records that failed validation or parsing. Each error includes the row number, error code, error message, and field-level details. |
| groupCensusId | TypestringDescriptionID of the group census record that's associated with the group census member records that the action returned. |
| groupCensusMembers | TypesobjectDescriptionGroup census member records that the action returns. Each record contains mapped field values from CSV columns. Records with errors include an error field with the error message. Maximum number of records that are returned is 2000. |

## Example

POST

This sample request is for the Get Group Census Members action.

```

```

This sample response is for the Get Group Census Members action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "AdditionalInformation": "{employeeBulkRequestInfo:{groupCensusId:0rfSG0000000vclYAA,contentDocumentName:Archit50Records With groupClass - Archit50Records With groupClass (1),contentDocumentId:069SG000004lwPdYAI,contentDocumentVersion:068SG000004PIp3YAG,duplicateDetectionFields:[Gender,FirstName,Lastname,AssociationWithPrimaryMbr,GroupCensusId],batchSize:null,csvColumnMapping:{First Name:FirstName,Last Name:Lastname,Gender:Gender,Birthdate:Birthdate,SmokerStatus:SmokerStatus,Relationship:AssociationWithPrimaryMbr,Group Class:GroupClassName},executeRules:false},startRowNumber:1,endRowNumber:27,startByteOffset:83,endByteOffset:1717,csvHeader:First Name,Last Name,Gender,Birthdate,Relationship,SmokerStatus,Group Class,Errors,duplicateRowNumbersList:[],shouldExecuteConfigurationRule:false}",
      "Id": "18cSG0000003DgfYAE"
    }
  ]
}
```

```
[
  {
    "actionName": "getGroupCensusMembers",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
      "duplicateDetectionKeysList": [],
      "groupCensusId": "0rfSG0000000zY9YAI",
      "groupCensusMembers": [
        {
          "Email": "ross.farley_0001@insgroup.co.in",
          "AssociationWithPrimaryMbr": "Self",
          "FirstName": "Ross",
          "Lastname": "Farley",
          "Country": "Health Comprehensive|Chronic Disease",
          "Gender": "Male",
          "Birthdate": "08/07/1981"
        },
        {
          "Email": "teagan.wallace_0001@gmail.com",
          "AssociationWithPrimaryMbr": "Spouse",
          "FirstName": "Teagan",
          "Lastname": "Wallace",
          "Country": "Health Comprehensive|Critical Illness & Surgery",
          "Gender": "Female",
          "Birthdate": "08/07/1986"
        }
      ]
    }
  }
]
```
