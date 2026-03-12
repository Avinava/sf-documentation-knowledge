---
title: "Insurance Person Accounts and Users Creation Input"
domain: insurance-developer-guide
topic: insurance-person-accounts-and-users-creation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.771Z
estimatedTokens: 366
keywords: [Insurance, Person, Accounts, Users, Creation, Input, representation, creating, portal, group, census, members]
---

# Insurance Person Accounts and Users Creation Input

> Input representation for creating person accounts and portal users from group census members.

# Insurance Person Accounts and Users Creation Input

Input representation for creating person accounts and portal users from group census members.

JSON example

This is a sample JSON example with GroupCensusId.

```

```

This is a sample JSON example with GroupCensusMembers.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldMappings | Map<String, String> | Map of field API names from the Group Census Member object (key) to the Account object (value). | Optional | 65.0 |
| groupCensusId | String | ID of the group census that contains the members to process. | Optional | 65.0 |
| groupCensusMember​IdList | String[] | IDs of the group census members for whom you want to create person accounts and users.If not provided, all members of the specified group census are processed. | Optional | 65.0 |
| matchingKeyList | String[] | List of field API names on the Group Census Member object that are used to identify and prevent the creation of duplicate person accounts.The default fields are FirstName, LastName, PersonBirthdate, PersonEmail, and PersonGender. | Optional | 65.0 |
| personAccount​RecordType | String | Developer name of the person account record type to use for the new accounts. | Optional | 65.0 |
| userDetails | Portal User Creation Input | Details to create portal users. | Required if the createPortalUsers request parameter is set to true. | 65.0 |

## Code Examples

```
{
  "groupCensusId": "0rfxx0000000007AAA",
  "matchingKeyList": {
    "values": [
      "FirstName",
      "LastName"
    ]
  },
  "fieldMappings": {
    "data": {
      "FirstName": "FirstName",
      "Lastname": "LastName"
    }
  },
  "userDetails": {
    "profileId": "00exx000000mzxC",
    "localeSidKey": "en_US",
    "timeZoneSidKey": "America/New York",
    "languageLocaleKey": "en_US",
    "emailEncodingKey": "UTF-8"
  }
}
```

```
{
  "groupCensusMemberIdList": {
    "values": [
      "0r6xx0000000002AAA",
      "0r6xx000000004rAAA"
    ]
  },
  "matchingKeyList": {
    "values": [
      "FirstName",
      "LastName"
    ]
  },
  "fieldMappings": {
    "data": {
      "FirstName": "FirstName",
      "Lastname": "LastName"
    }
  },
  "userDetails": {
    "profileId": "00exx000000mzxC",
    "localeSidKey": "en_US",
    "timeZoneSidKey": "America/New York",
    "languageLocaleKey": "en_US",
    "emailEncodingKey": "UTF-8"
  }
}
```

## Related Topics

- Portal User Creation Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_portal_user_creation_input.htm)
