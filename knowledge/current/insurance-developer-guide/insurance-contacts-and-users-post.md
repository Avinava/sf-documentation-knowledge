---
title: "Insurance Contacts and Users (POST)"
domain: insurance-developer-guide
topic: insurance-contacts-and-users-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.184Z
estimatedTokens: 565
keywords: [Insurance, Contacts, Users, POST, portal, group, census, members, Contact, record, linking, appropriate, policy, association, corresponding]
---

# Insurance Contacts and Users (POST)

> Create contacts and portal users for group census members. The Contact
   record is used for linking to the appropriate policy for policy association, and the
   corresponding portal user is created to allow the member to log in to the community
  portal.

# Insurance Contacts and Users (POST)

Create contacts and portal users for group census members. The Contact record is used for linking to the appropriate policy for policy association, and the corresponding portal user is created to allow the member to log in to the community portal.

Special Access Rule

To use this API, the org must be enabled with Person Account and you must have Census Management user access.

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

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| createPortalUsers | Boolean | Indicates whether to create portal users for the new contacts (true) or not (false).The default value is true. | Optional | 65.0 |

Request body for POST

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

Response body for POST

[Insurance Contacts and Users Creation Response](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_contacts_and_users_creation_output.htm "Output representation of the contact and user creation process.")

## Code Examples

```
/connect/insurance/contacts
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/contacts?createPortalUsers=false
```

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
- Insurance Contacts and Users
       Creation Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_contacts_and_users_creation_output.htm)
