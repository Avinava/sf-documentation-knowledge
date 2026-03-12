---
title: "Insurance Contacts and Users Creation Response"
domain: insurance-developer-guide
topic: insurance-contacts-and-users-creation-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.547Z
estimatedTokens: 205
keywords: [Insurance, Contacts, Users, Creation, Output, representation, contact, user, process]
---

# Insurance Contacts and Users Creation Response

> Output representation of the contact and user creation process.

# Insurance Contacts and Users Creation Response

Output representation of the contact and user creation process.

JSON example

This is a sample JSON example for a successful API request.

```

```

This is a sample JSON example with error.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contactsAnd​UsersDetails | Insurance Member Contact and User Details[] | Details of contacts and users that are created. | Small, 65.0 | 65.0 |
| errors | Insurance Error[] | Errors that occurred during the process. | Small, 65.0 | 65.0 |
| groupCensusId | String | ID of the group census that's processed. | Small, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the operation is successful (true) or not (false). | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "isSuccess": true,
  "groupCensusId": "0rfAbcDefGhiJklMno",
  "contactsAndUsersDetails": [
    {
      "groupCensusId": "0rfAbcDefGhiJklMno",
      "groupCensusMemberId": "0r6PrimaryMemberId",
      "contactId": "003abc123DEF456ghi"
    },
    {
      "groupCensusId": "0rfAbcDefGhiJklMno",
      "groupCensusMemberId": "0r6DependentMemberId",
      "contactId": "003stu456VWX789yz"
    }
  ],
  "errors": []
}
```

```
{
  "contactsAndUsersDetails": [
    {
      "groupCensusId": "0rfxx00000001Qr",
      "groupCensusMemberId": "0r6xx00000002sB",
      "contactId": "001xx000003Gdl5AAC"
    },
    {
      "groupCensusId": "0rfxx00000001Qr",
      "groupCensusMemberId": "0r6xx00000002sC",
      "contactId": "001xx000003Gdl5BAC"
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

- Insurance Member Contact and User Details[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_member_contact_and_user_details_output.htm)
- Insurance Error[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_error_output.htm)
