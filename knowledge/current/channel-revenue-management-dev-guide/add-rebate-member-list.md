---
title: "Add Rebate Member List"
domain: channel-revenue-management-dev-guide
topic: add-rebate-member-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:10.060Z
estimatedTokens: 302
keywords: [Add, Rebate, Member, members, program, accounts, account, view, REST, HTTP, Inputs, Usage]
---

# Add Rebate Member List

> Add a list of members to a rebate program. The list of rebate members
         is based on the accounts in the specified account list view.

# Add Rebate Member List

Add a list of members to a rebate program. The list of rebate members is based on the accounts in the specified account list view.

This object is available in API version 51.0 and later for users with Rebate Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/addRebateMemberList

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| listViewId | TypestringDescriptionRequired. The ID of the account list that’s specified to add rebate members. |
| notificationPreference | TypestringDescriptionA text value that indicates whether notifications should be sent for successful and unsuccessful rebate member additions. Valid values include BlockSuccessEmails, BlockFailureEmails, BlockAllEmails, and AllowAllNotifications. |
| rebateProgramId | TypestringDescriptionRequired. The ID of the rebate program to which specified account list view is added. |
| status | TypestringDescriptionRequired. The status of the rebate members for the accounts in the specified list view. |

## Usage

**Sample Request**

```

```

**Sample Response**

```

```

## Code Examples

```
{
   "inputs":[{
   "listViewId":"a07B0000007qbQOIAY",
   "rebateProgramId":"x18Z1236547qbQOBCV",
   "status": "Active"
   "notificationPreference": "BlockAllEmails"
}]
}
```

```
{
   "isSuccess":true
}
```
