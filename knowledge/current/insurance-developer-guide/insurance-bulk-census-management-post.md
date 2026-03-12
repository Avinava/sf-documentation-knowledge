---
title: "Insurance Bulk Census Management (POST)"
domain: insurance-developer-guide
topic: insurance-bulk-census-management-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.163Z
estimatedTokens: 542
keywords: [Insurance, Bulk, Census, Management, POST, Process, group, data]
---

# Insurance Bulk Census Management (POST)

> Process group census data in bulk.

# Insurance Bulk Census Management (POST)

Process group census data in bulk.

This API efficiently manages large volumes of member data that are linked to a specific group census ID, simplifying the enrollment and update process for group insurance plans. When processing enrollment census data, this API also updates the member plan details.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Path parameter for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| groupCensusId | String | ID of the group census. | Required | 65.0 |

Request body for POST

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

Response body for POST

[Bulk Group Census Management](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_bulk_census_mgmt_output.htm "Output representation for the bulk processing of employee census data.")

## Code Examples

```
/connect/insurance/census-management/group-censuses/groupCensusId/group-census-members/bulk-process
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/census-management/group-censuses/0rlxx000000001aEAA/group-census-members/bulk-process
```

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

## Related Topics

- Bulk Group Census
       Management (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_bulk_census_mgmt_output.htm)
