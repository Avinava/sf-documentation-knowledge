---
title: "Validate Group Census Members Action"
domain: insurance-developer-guide
topic: validate-group-census-members-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.755Z
estimatedTokens: 358
keywords: [Validate, Group, Census, Members, Action, member, records, assign, REST, HTTP, Inputs, Outputs]
---

# Validate Group Census Members Action

> Validate the specified group census member records and assign default values to the
        specified fields.

# Validate Group Census Members Action

Validate the specified group census member records and assign default values to the specified fields.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/validateGroupCensusMembers

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| duplicateDetectionKeysList | TypestringDescriptionComma-separated list of field names that are used to identify the unique group census member records. For example, FirstName, LastName, GroupCensusId, and AssociationWithPrimaryMbr. |
| groupCensusId | TypestringDescriptionID of the parent group census record that's associated with the group census member records. |
| groupCensusMembers | TypesobjectDescriptionCollection of group census member records that must be validated.Maximum list size is 2000. |

## Outputs

| Output | Details |
| --- | --- |
| errorsData | TypeApex-definedDescriptionDetails of the validation errors that occurred while validating the group census member records.Maximum limit is 2000. |
| validatedGroupCensusMembers | TypesobjectDescriptionCollection of group census member records that are validated and assigned with default values. Records with validation errors aren't shown.Maximum limit is 2000. |

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
      "groupCensusId": "0rfDR0000000Cn6YAE",
      "groupCensusMembers": [
        {
          "Name": "RossFarley",
          "FirstName": "Ross",
          "Lastname": "Farley",
          "Gender": "Male",
          "GroupClassName": "Manager",
          "Email": "ross.farley_0001@insgroup.co.in",
          "AssociationWithPrimaryMbr": "Self"
        },
        {
          "Name": "Fakeem Huber",
          "FirstName": "Fakeem",
          "Lastname": "Huber",
          "Gender": "Male",
          "GroupClassName": "Associate",
          "Email": "fakeem.huber_0432@insgroup.co.in",
          "AssociationWithPrimaryMbr": "Self"
        }
      ]
    }
  ]
}
```

```
{
  "validatedGroupCensusMembers": [
    {
      "attributes": {
        "type": "GroupCensusMember"
      },
      "Email": "ross.farley_0001@insgroup.co.in",
      "AssociationWithPrimaryMbr": "Self",
      "FirstName": "Ross",
      "MemberKey": "a66e329bd537b9b0be9d04f326eeed94",
      "RelationshipToPrimaryMember": "Self",
      "Lastname": "Farley",
      "Gender": "Male",
      "GroupClassId": "0rEDR000000085k2AA",
      "GroupCensusId": "0rfDR0000000Cn6YAE",
      "Name": "RossFarley"
    },
    {
      "attributes": {
        "type": "GroupCensusMember"
      },
      "Email": "fakeem.huber_0432@insgroup.co.in",
      "AssociationWithPrimaryMbr": "Self",
      "FirstName": "Fakeem",
      "MemberKey": "fa26049af8a10b70bd68ce9a6912425f",
      "RelationshipToPrimaryMember": "Self",
      "Lastname": "Huber",
      "Gender": "Male",
      "GroupClassId": "0rEDR000000085p2AA",
      "GroupCensusId": "0rfDR0000000Cn6YAE",
      "Name": "Fakeem Huber"
    }
  ]
}
```
