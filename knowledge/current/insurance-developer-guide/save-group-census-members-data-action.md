---
title: "Save Group Census Members Data Action"
domain: insurance-developer-guide
topic: save-group-census-members-data-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.728Z
estimatedTokens: 462
keywords: [Save, Group, Census, Members, Data, Action, member, records, primary, IDs, dependent, groups, REST, HTTP, Inputs]
---

# Save Group Census Members Data Action

> Create or update the group census member records for primary members, update the IDs
        of the dependent members, and create or update groups census member records for the
        dependent members.

# Save Group Census Members Data Action

Create or update the group census member records for primary members, update the IDs of the dependent members, and create or update groups census member records for the dependent members.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/saveGroupCensusMembersData

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| asyncBulkRequestItemId | TypestringDescriptionID of the async bulk request item to use as reference for creating insurance async bulk record details records. |
| groupCensusId | TypestringDescriptionID of the parent group census record that's associated with the group census member records. |
| groupCensusMembers | TypesobjectDescriptionCollection of group census member records to be save.Maximum limit size is 2000. |
| operation | TypestringDescriptionRequired if asyncBulkRequestItemId isn't specified.Operation to perform on the group census member records. Valid values are Add and Update. |
| shouldLogErrors | TypebooleanDescriptionIndicates whether errors that occur while saving group census member plans must be recorded in a content document (true) or not (false).The default values is false. |

## Outputs

| Output | Details |
| --- | --- |
| errorsData | TypeApex-definedDescriptionCollection of error records for synchronous Add Members and Update Members services.Maximum limit is 2000. |
| savedGroupCensusMembers | TypesobjectDescriptionCollection of group census member records that are created or updated during the execution of the action. It contains both primary and dependent members that are successfully processed.Maximum limit is 2000. |

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
  "inputs": [
    {
      "asyncBulkRequestItemId": "15Uxx0000004CfoEAE",
      "groupCensusId": "0rfxx0000000005AAA",
      "groupCensusMembers": [
        {
          "Name": "IronMan",
          "FirstName": "Iron",
          "Lastname": "Man",
          "Gender": "Male",
          "GroupClassId": "0rExx0000000001EAA",
          "GroupClassName": "Executive",
          "GroupCensusId": "0rfxx0000000005AAA",
          "Email": "test1@gtest.com",
          "AssociationWithPrimaryMbr": "Self",
          "MemberKey": "c01c21aecc57e259f2faeb9484149c8e"
        }
      ]
    }
  ]
}
```

```
{
  "actionName": "saveGroupCensusMembersData",
  "savedGroupCensusMembers": [
    {
      "attributes": {
        "type": "GroupCensusMember"
      },
      "Email": "test2@gtest.com",
      "AssociationWithPrimaryMbr": "Spouse",
      "FirstName": "Pepper",
      "MemberKey": "ad8b415683d7e6b6cc8d5a975c8cf75b",
      "Lastname": "Potts",
      "Gender": "Female",
      "GroupCensusId": "0rfxx0000000005AAA",
      "Name": "PepperPotts"
    }
  ]
}
```
