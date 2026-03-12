---
title: "Create Person Accounts and Users from Group Census Members Action"
domain: insurance-developer-guide
topic: create-person-accounts-and-users-from-group-census-members-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.551Z
estimatedTokens: 733
keywords: [Person, Accounts, Users, Group, Census, Members, Action, portal, supports, bulk, processing, custom, mapping, duplicate, detection]
---

# Create Person Accounts and Users from Group Census Members Action

> Create person accounts and portal users for group census or group census members. This
    action supports bulk processing, custom field mapping, and duplicate detection.

# Create Person Accounts and Users from Group Census Members Action

Create person accounts and portal users for group census or group census members. This action supports bulk processing, custom field mapping, and duplicate detection.

This action supports bulk processing, custom field mapping, and duplicate record detection. It converts insurance group census members to Salesforce Person Accounts, enables member self-service through portal users, supports B2C enrollment workflows, and maintains relationship data for benefits administration and household grouping.

This action is available in API version 65.0 and later.

## Special Access Rules

The org must have Person Accounts and Digital Insurance Group Benefits enabled. To use this action, you need Census Management user access.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createAcctUsrFrGrpCens

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| accountFieldsMapping | TypeApex-definedDescriptionMap of Group Census Member Object fields to Account fields. |
| createPortalUsers | TypebooleanDescriptionIndicates whether portal users must be created (true) or not (false). |
| emailEncodingKey | TypestringDescriptionRequired if createPortalUsers is set to true.Email encoding key to use to create the user records. For example, ISO-8859-1 or UTF-8. |
| groupCensusId | TypestringDescriptionRequired if a list of groupCensusMembers isn't specified.ID of the group census to create person accounts and portal users for the associated group census members. |
| groupCensusMembers | TypesobjectDescriptionRequired if groupCensusId isn't specified.Group census member records to create person accounts and portal users. |
| languageLocaleKey | TypestringDescriptionRequired if createPortalUsers is set to true.Language to use to create the user records. For example, fr for French or zh_Cw for Chinese (Traditional). |
| localeSidKey | TypestringDescriptionRequired if createPortalUsers is set to true.Locale for the user, which affects the format of dates, times, and numbers. |
| matchingKeysList | TypestringDescriptionComma-separated list of account object fields to detect duplicate account records. |
| profileId | TypestringDescriptionRequired if createPortalUsers is set to true.ID of the profile to create the user records for. |
| recordTypeName | TypestringDescriptionAPI name of the record type to create the person accounts for. |
| timeZoneSidKey | TypestringDescriptionRequired if createPortalUsers is set to true.Time zone for the user, such as America or Los_Angeles. |

## Outputs

| Output | Details |
| --- | --- |
| createAccountsOutputRep | TypeApex-definedDescriptionAn Apex ind_ins_grpben__AccountsAndUsersCreationOutput record that contains the details of the results. |

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
      "groupCensusId": "0rfxx000000006dAAA",
      "recordTypeName": "IndividualMember",
      "matchingKeysList": ["PersonEmail", "LastName", "PersonBirthdate"],
      "accountFieldsMapping": [
        { "key": "FirstName__c", "value": "FirstName" },
        { "key": "LastName__c", "value": "LastName" },
        { "key": "Email__c", "value": "PersonEmail" },
        { "key": "Birthdate__c", "value": "PersonBirthdate" }
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
      "AccountsAndUsersCreationOutput": {
        "groupCensusId": "0rfxx000000006dAAA",
        "memberAccountDetails": [
          {
            "groupCensusMemberId": "0r6xx00000001tqAAA",
            "accountId": "001xx000003Ga7KAAS",
            "userId": "005xx000001X8vwAAC"
          }
        ],
        "errors": [
          {
            "code": "SF-0004-0054",
            "message": "Person Account already exists for member",
            "additionalInfo": [
              {
                "key": "memberId",
                "value": "0r6xx00000001u4AAA"
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
