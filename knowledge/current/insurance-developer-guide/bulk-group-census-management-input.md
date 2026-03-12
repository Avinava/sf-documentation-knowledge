---
title: "Bulk Group Census Management Input"
domain: insurance-developer-guide
topic: bulk-group-census-management-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.791Z
estimatedTokens: 338
keywords: [Bulk, Group, Census, Management, Input, representation, bulk-process, data, CSV, file]
---

# Bulk Group Census Management Input

> Input representation to bulk-process group census data from a CSV file.

# Bulk Group Census Management Input

Input representation to bulk-process group census data from a CSV file.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| batchSize | Integer | Number of CSV records to process in each batch.The default size for Quote Census is 2000.The default size for Enrollment Census is 25. | Optional | 65.0 |
| content​DocumentId | String | ID of the content document (CSV file) to process. | Required | 65.0 |
| contentDocument​VersionId | String | ID of the specific version of the content document. | Optional | 65.0 |
| csvColumnMapping | Map<String, String> | Map where the key is the CSV column header and the value is the API name of the corresponding field in the GroupCensusMember object. | Required | 65.0 |
| duplicate​Detection​Fields | String[] | List of field API names that are used to generate a unique key for identifying duplicate members along with the default values.The default fields that are used to detect duplication are FirstName, LastName, groupCensusId, and AssociationWithPrimaryMbr. | Optional | 65.0 |
| shouldExecute​Configuration​Rule | Boolean | Indicates whether to execute the configuration rules after processing the data (true) or not (false).The default value is false. | Optional | 65.0 |

## Code Examples

```
{
  "batchSize": 200,
  "contentDocumentId": "069SG000003gLazYAE",
  "contentDocumentVersionId": "0688d0000025fA3AAI",
  "duplicateDetectionFields": {
    "values": [
      "FirstName",
      "Lastname"
    ]
  },
  "csvColumnMapping": {
    "data": {
      "First Name": "FirstName",
      "Last Name": "Lastname",
      "Email": "Email",
      "Birthdate": "Birthdate",
      "Gender": "Gender",
      "Relationship to Primary Member": "AssociationWithPrimaryMbr",
      "Medical": "ContractGroupPlan",
      "Dental": "ContractGroupPlan",
      "Group Class": "GroupClassName"
    }
  },
  "shouldExecuteConfigurationRule": false
}
```
