---
title: "Insurance Contacts and Users Creation Input"
domain: insurance-developer-guide
topic: insurance-contacts-and-users-creation-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:39.804Z
estimatedTokens: 318
keywords: [Insurance, Contacts, Users, Creation, Input, representation, creating, portal, group, census, members]
---

# Insurance Contacts and Users Creation Input

> Input representation for creating contacts and portal users from group census members.

# Insurance Contacts and Users Creation Input

Input representation for creating contacts and portal users from group census members.

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
| fieldMappings | Map | Map of field API names from the Group Census Member object (key) to the Contact object (value). | Optional | 65.0 |
| groupCensusId | String | ID of the group census. | Optional | 65.0 |
| groupCensusMember​IdList | String[] | IDs of the group census members for whom you want to create contacts and users.If not provided, all members of the specified group census are processed. | Optional | 65.0 |
| matchingKeyList | String[] | List of field API names on the Group Census Member object that are used to identify and prevent the creation of duplicate contact records.The default fields are FirstName, LastName, Birthdate, Email, and Gender. | Optional | 65.0 |
| userDetails | Portal User Creation Input | Details to create portal users.This property is required if the createPortalUsers parameter in the method call is set to true. | Optional | 65.0 |

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
