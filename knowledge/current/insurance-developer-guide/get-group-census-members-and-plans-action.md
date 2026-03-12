---
title: "Get Group Census Members and Plans Action"
domain: insurance-developer-guide
topic: get-group-census-members-and-plans-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.626Z
estimatedTokens: 685
keywords: [Group, Census, Members, Plans, Action, member, records, associated, content, document, asynchronous, bulk, item, record, REST]
---

# Get Group Census Members and Plans Action

> Get the group census member records and associated plans from the content document in
  the specified asynchronous bulk request item record.

# Get Group Census Members and Plans Action

Get the group census member records and associated plans from the content document in the specified asynchronous bulk request item record.

The action processes bulk member data that are uploaded through census management workflows. This action validates the data, identifies duplicates, and returns structured member records for further processing. This action returns all transformed records, along with detailed error information for any records that fail validation.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getGroupCensusMembersAndPlans

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| asyncBulkRequestItem | TypesobjectDescriptionRequired.Asynchronous bulk request item record that contains the metadata about the CSV upload.This property must have the AdditionalInformation field with serialized JSON that contains these details.contentDocumentId—ID of content documentcontentDocumentVersion—Version of content documentcsvColumnMapping—Map of CSV column to field nameduplicateDetectionFields—List of fields for duplicate detectiongroupCensusId—Parent Group Census IDcsvHeader—CSV header rowstartRowNumber—Starting row to processendRowNumber—Ending row to processduplicateRowNumbersList—Pre-identified duplicate rows |

## Outputs

| Output | Details |
| --- | --- |
| duplicateDetectionKeysList | TypestringDescriptionComma-separated list of group census member fields that can be used to identify unique group census member records.This property is returned if duplicate detection fields are configured in the request. |
| errorsData | TypeApex-definedDescriptionError records that occurred during the retrieval of group census member and plan records. |
| groupCensusId | TypestringDescriptionSalesforce ID of the GroupCensus record which these members belong to. This property is used to associate members with their parent census. |
| groupCensusMembers | TypesobjectDescriptionCollection of transformed GroupCensusMember SObject records that are parsed from the CSV file. Each record includes field values that are mapped from the corresponding CSV columns. Records with errors include an error field containing the error message.The maximum limit size is 2000. |
| groupCensusMemberPlans | TypesobjectCollection of plan records for group census members. |
| shouldExecuteConfigurationRule | TypebooleanDescriptionIndicates whether the product configuration rules must be executed for member plans in the enrollment census (true) or not (false). |

## Example

Sample Request

```

```

Sample Response

```

```

## Code Examples

```
{
  "AdditionalInformation": {
    "employeeBulkRequestInfo": {
      "groupCensusId": "0rfSG0000000vclYAA",
      "contentDocumentName": "Archit50Records With groupClass - Archit50Records With groupClass (1)",
      "contentDocumentId": "069SG000004lwPdYAI",
      "contentDocumentVersion": "068SG000004PIp3YAG",
      "duplicateDetectionFields": [
        "Gender",
        "FirstName",
        "Lastname",
        "AssociationWithPrimaryMbr",
        "GroupCensusId"
      ],
      "batchSize": null,
      "csvColumnMapping": {
        "First Name": "FirstName",
        "Last Name": "Lastname",
        "Gender": "Gender",
        "Birthdate": "Birthdate",
        "SmokerStatus": "SmokerStatus",
        "Relationship": "AssociationWithPrimaryMbr",
        "Group Class": "GroupClassName"
      },
      "executeRules": false
    },
    "startRowNumber": 1,
    "endRowNumber": 27,
    "startByteOffset": 83,
    "endByteOffset": 1717,
    "csvHeader": "First Name,Last Name,Gender,Birthdate,Relationship,SmokerStatus,Group Class,Errors",
    "duplicateRowNumbersList": [],
    "shouldExecuteConfigurationRule": false
  },
  "Id": "18cSG0000003DgfYAE"
}
```

```
[
  {
    "actionName": "getGroupCensusMembersAndPlans",
    "errors": null,
    "isSuccess": true,
    "outputValues": [
      {
        "GroupClassName": "Test_MGR",
        "AssociationWithPrimaryMbr": "Self",
        "FirstName": "Employee1",
        "Lastname": "Salesforce1",
        "Gender": "Male",
        "Birthdate": "1987-12-04",
        "SmokerStatus": "Tobacco"
      },
      {
        "AssociationWithPrimaryMbr": "Spouse",
        "FirstName": "Employee2",
        "Lastname": "Salesforce2",
        "Gender": "Female",
        "Birthdate": "1982-11-30",
        "SmokerStatus": "Tobacco"
      },
      {
        "AssociationWithPrimaryMbr": "Child",
        "FirstName": "Employee3",
        "Lastname": "Salesforce3",
        "Gender": "Male",
        "Birthdate": "1988-11-18",
        "SmokerStatus": "NonTobacco"
      }
    ]
  }
]
```
