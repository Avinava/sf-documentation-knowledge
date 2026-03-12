---
title: "Loyalty Account Input"
domain: loyalty
topic: loyalty-account-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.912Z
estimatedTokens: 276
keywords: [Loyalty, Account, Input, representation, creating, business, member]
---

# Loyalty Account Input

> Input representation for creating a business account for the
      member.

# Loyalty Account Input

Input representation for creating a business account for the member.

Root XML tag

<loyaltyAccountInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalAccount​FieldValues | Map<String, String> | The additional attribute values that must be saved in the account record. | Optional | 55.0 |
| allowDuplicateRecords | Boolean | Indicates whether a duplicate member record can be created, when an existing record with identical details exists in the org. This parameter works in conjunction with your Duplicate Rules. A Duplicate Rule's Action on Create setting determines if Salesforce allows or blocks a potential duplicate. For instructions on configuring these rules, see Manage Duplicate Records.The default value is True. | Optional | 55.0 |
| name | String | Name of the account. | Required | 55.0 |
| phone | String | The phone number associated with the account. | Optional | 55.0 |
| website | String | The website associated with the account. | Optional | 55.0 |

## Code Examples

```
{
  "associatedAccountDetails": {
    "name": "Name1",
    "phone": "908989898",
    "website": "www.ab.com",
    "allowDuplicateRecords": "false",
    "additionalAccountFieldValues": {
      "attributes": {
        "CustomNumber__c": "20.0"
      }
    }
  }
}
```
