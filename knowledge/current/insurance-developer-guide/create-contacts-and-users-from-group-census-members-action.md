---
title: "Create Contacts and Users from Group Census Members Action"
domain: insurance-developer-guide
topic: create-contacts-and-users-from-group-census-members-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.522Z
estimatedTokens: 671
keywords: [Contacts, Users, Group, Census, Members, Action, portal, Special, Access, Rules, REST, HTTP, Inputs, Outputs]
---

# Create Contacts and Users from Group Census Members Action

> Create contacts and portal users for group census or group census members.

# Create Contacts and Users from Group Census Members Action

Create contacts and portal users for group census or group census members.

This action supports bulk processing, custom field mapping, and duplicate record detection. It converts insurance group census members to Salesforce Contacs, enables member self-service through portal users, supports B2C enrollment workflows, and maintains relationship data for benefits administration and household grouping.

This action is available in API version 65.0 and later.

## Special Access Rules

The org must have Digital Insurance Group Benefits enabled. To use this action, you need Census Management user access.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createCtctUsrFrGrpCens

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| contactFieldsMapping | TypeApex-definedDescriptionMap of Group Census Member Object fields to Contact fields. |
| createPortalUsers | TypebooleanDescriptionIndicates whether the portal users must be created (true) or not (false). |
| emailEncodingKey | TypestringDescriptionRequired if createPortalUsers is set to true.Email encoding key to use to create the user records. For example, ISO-8859-1 or UTF-8. |
| groupCensusId | TypestringDescriptionRequired if groupCensusMembers isn't specified.ID of the group census to create contacts and portal users for the associated group census members. |
| groupCensusMembers | TypesobjectDescriptionRequired if groupCensusId isn't specified.Group census member records to create contacts and portal users for. |
| localeSidKey | TypestringDescriptionRequired if createPortalUsers is set to true.Locale for the user, which affects the format of dates, times, and numbers. |
| languageLocaleKey | TypestringDescriptionRequired if createPortalUsers is set to true.Language to use to create the user records. For example, fr for French or zh_Cw for Chinese (Traditional). |
| matchingKeysList | TypestringDescriptionComma-separated list of contact object fields to detect duplicate contact records. |
| profileId | TypestringDescriptionRequired if createPortalUsers is set to true.ID of the profile to create the user records for. |
| timeZoneSidKey | TypestringDescriptionRequired if createPortalUsers is set to true.Time zone for the user, such as America or Los_Angeles. |

## Outputs

| Output | Details |
| --- | --- |
| createContactsOutputRep | TypeApex-definedDescriptionAn apex ind_ins_grpben__ContactsAndUsersCreationOutput record that contains the details of the results. |

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
      "groupCensusMembers": [
        {
          "Id": "0r6xx00000001tuAAA"
        },
        {
          "Id": "0r6xx00000001tvAAA"
        }
      ],
      "matchingKeysList": [
        "Email",
        "LastName"
      ],
      "contactFieldsMapping": [
        {
          "key": "FirstName__c",
          "value": "FirstName"
        },
        {
          "key": "Email__c",
          "value": "Email"
        }
      ],
      "createPortalUsers": true,
      "profileId": "00exx000000n0ywAAA",
      "timeZoneSidKey": "America/New_York",
      "localeSidKey": "en_US",
      "emailEncodingKey": "UTF-8",
      "languageLocaleKey": "en_US"
    }
  ]
}
```

```
{
  "outputs": [
    {
      "createContactsOutputRep": {
        "memberContactDetails": [
          {
            "groupCensusMemberId": "0r6xx00000001tuAAA",
            "contactId": "003xx000004WhsgAAC",
            "userId": "005xx000001X8vwAAC"
          }
        ],
        "errors": [
          {
            "code": "SF-0004-0058",
            "message": "Contact already exists for member",
            "additionalInfo": [
              {
                "key": "memberId",
                "value": "0r6xx00000001tvAAA"
              }
            ]
          }
        ]
      },
      "isSuccess": true
    }
  ]
}
```
