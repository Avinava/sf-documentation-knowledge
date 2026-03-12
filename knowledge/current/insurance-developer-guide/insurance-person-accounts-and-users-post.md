---
title: "Insurance Person Accounts and Users (POST)"
domain: insurance-developer-guide
topic: insurance-person-accounts-and-users-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.148Z
estimatedTokens: 746
keywords: [Insurance, Person, Accounts, Users, POST, portal, group, census, members, Account, linking, appropriate, policy, association, corresponding]
---

# Insurance Person Accounts and Users (POST)

> Create person accounts and portal users for group census members. The
   Person Account is used for linking to the appropriate policy for policy association, and the
   corresponding portal user is created to allow the member to log in to the community
  portal.

# Insurance Person Accounts and Users (POST)

Create person accounts and portal users for group census members. The Person Account is used for linking to the appropriate policy for policy association, and the corresponding portal user is created to allow the member to log in to the community portal.

After the records are created and required permission sets are assigned, members can log into the customer community portal to select plans and complete their individual enrollment based on the digital workflow that's configured by the carrier.

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
| createPortalUsers | Boolean | Indicates whether to create portal users for the new person accounts (true) or not (false).The default value is true. | Optional | 65.0 |

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
| fieldMappings | Map<String, String> | Map of field API names from the Group Census Member object (key) to the Account object (value). | Optional | 65.0 |
| groupCensusId | String | ID of the group census that contains the members to process. | Optional | 65.0 |
| groupCensusMember​IdList | String[] | IDs of the group census members for whom you want to create person accounts and users.If not provided, all members of the specified group census are processed. | Optional | 65.0 |
| matchingKeyList | String[] | List of field API names on the Group Census Member object that are used to identify and prevent the creation of duplicate person accounts.The default fields are FirstName, LastName, PersonBirthdate, PersonEmail, and PersonGender. | Optional | 65.0 |
| personAccount​RecordType | String | Developer name of the person account record type to use for the new accounts. | Optional | 65.0 |
| userDetails | Portal User Creation Input | Details to create portal users. | Required if the createPortalUsers request parameter is set to true. | 65.0 |

Response body for POST

[Insurance Person Accounts and Users Creation Response](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_accounts_and_users_creation_output.htm "Output representation of the person account and user creation process.")

#### See Also

-   [*Insurance*: Configure Group Benefits Enrollment](https://help.salesforce.com/s/articleView?id=ind.insurance_group_benefits_core_enrollment_configure_intro.htm&language=en_US "Insurance: Configure Group Benefits Enrollment - HTML (New Window)")

## Code Examples

```
/connect/insurance/accounts
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/accounts?createPortalUsers=false
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
- Insurance Person Accounts
       and Users Creation Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_accounts_and_users_creation_output.htm)
