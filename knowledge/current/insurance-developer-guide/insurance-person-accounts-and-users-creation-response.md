---
title: "Insurance Person Accounts and Users Creation Response"
domain: insurance-developer-guide
topic: insurance-person-accounts-and-users-creation-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.512Z
estimatedTokens: 273
keywords: [Insurance, Person, Accounts, Users, Creation, Output, representation, account, user, process]
---

# Insurance Person Accounts and Users Creation Response

> Output representation of the person account and user creation process.

# Insurance Person Accounts and Users Creation Response

Output representation of the person account and user creation process.

JSON example

This is a sample JSON example for a successful API request.

```

```

This is a sample JSON example with error.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountsAnd​UsersDetails | Insurance Member Account and User Details[] | Details of the objects that contain the IDs of the person accounts and users that are created and mapped to their source group census members. | Small, 65.0 | 65.0 |
| errors | Insurance Error[] | Details of errors that occurred during the operation. Each error includes details about why a specific group census member failed to process. | Small, 65.0 | 65.0 |
| groupCensusId | String | ID of the group census that's processed. | Small, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the overall operation was successful (true) or not (false). If any member fails to process, this value is false. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "accountsAndUsersDetails": [
    {
      "groupCensusId": "0rfxx00000001Qv",
      "groupCensusMemberId": "0r6xx00000002uR",
      "personAccountId": "001xx000003GeCV"
    },
    {
      "groupCensusId": "0rfxx00000001Qv",
      "groupCensusMemberId": "0r6xx00000002uU",
      "personAccountId": "001xx000003GeCW"
    }
  ],
  "errors": [],
  "isSuccess": true
}
```

```
{
  "accountsAndUsersDetails": [
    {
      "groupCensusId": "0rfxx00000001Qr",
      "groupCensusMemberId": "0r6xx00000002sB",
      "personAccountId": "001xx000003GeE7"
    },
    {
      "groupCensusId": "0rfxx00000001Qr",
      "groupCensusMemberId": "0r6xx00000002sC",
      "personAccountId": "001xx000003GeE8"
    }
  ],
  "errors": [
    {
      "additionalInfo": {},
      "code": "SF-0004-0047",
      "message": "Ensure to set the isPortalUser flag to true for group census members 0r6xx00000002sB,0r6xx00000002sC."
    }
  ],
  "isSuccess": true
}
```

## Related Topics

- Insurance Member Account and User Details[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_member_account_and_user_details_output.htm)
- Insurance Error[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_error_output.htm)
