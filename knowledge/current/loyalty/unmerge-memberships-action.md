---
title: "Unmerge Memberships Action"
domain: loyalty
topic: unmerge-memberships-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.058Z
estimatedTokens: 471
keywords: [Unmerge, Memberships, Action, Unmerges, loyalty, program, member, records, Merged, status, membership, previously, Merge, record, created]
---

# Unmerge Memberships Action

> Unmerges loyalty program member records have a Merged status. The
   action unmerges memberships that are in the Merged status from the membership that it was
   previously merged with. After the unmerge is complete, the status of the Loyalty Program
  Member Merge record that was created during the merge is changed to Unmerged. The members are
  reassigned to the tier that was assigned to them before the merge. They are also credited with the
  points and transferred the vouchers they had before the membership was merged.

# Unmerge Memberships Action

Unmerges loyalty program member records have a Merged status. The action unmerges memberships that are in the Merged status from the membership that it was previously merged with. After the unmerge is complete, the status of the Loyalty Program Member Merge record that was created during the merge is changed to Unmerged. The members are reassigned to the tier that was assigned to them before the merge. They are also credited with the points and transferred the vouchers they had before the membership was merged.

For more information about how the unmergeLoyaltyProgramMembership action unmerges loyalty program memberships, see [Unmerge Memberships](https://help.salesforce.com/articleView?id=merge_membership_unmerge_action.htm&language=en_US "HTML (New Window)") in Salesforce Help.

This action is available in API version 56.0 and later for users in orgs where Loyalty Management is enabled.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/unmergeLoyaltyProgramMembership

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| mergedLoyaltyProgramMemberId | TypeIDDescriptionRequired.The ID of the merged loyalty program member record to be unmerged. |

## Outputs

| Output | Details |
| --- | --- |
| errors | TypeList<String>DescriptionA list of error messages if the operation fails. |
| isSuccess | TypeBooleanDescriptionIndicates whether the operation is successful or not. |

## Examples

**Sample Request**

```

```

**Sample Response**

```

```

#### See Also

-   [SOAP API Developer Guide: Core Data Types Used in API Calls](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm "SOAP API Developer Guide: Core Data Types Used in API Calls - HTML (New Window)")

## Code Examples

```
{
   "inputs": [ {
      "mergedLoyaltyProgramMemberId":"0lMT100000001JnMAK"
   } ]
}
```

```
[ {
  "actionName" : "unmergeLoyaltyProgramMembership",
  "errors" : null,
  "isSuccess" : true
} ]
```
