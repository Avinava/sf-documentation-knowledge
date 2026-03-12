---
title: "Loyalty Contact Input"
domain: loyalty
topic: loyalty-contact-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.916Z
estimatedTokens: 273
keywords: [Loyalty, Contact, Input, representation, program, member’s, person, account]
---

# Loyalty Contact Input

> Input representation of the loyalty program member’s person
      account.

# Loyalty Contact Input

Input representation of the loyalty program member’s person account.

Root XML tag

<loyaltyContactInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalContact​FieldValues | Map<String, String> | The additional attributes that must be saved in the person account. | Optional | 55.0 |
| allowDuplicate​Records | Boolean | Indicates if a duplicate person account record can be created for a member when an existing person account record exists. This parameter works in conjunction with your Duplicate Rules. A Duplicate Rule's Action on Create setting determines if Salesforce allows or blocks a potential duplicate. For instructions on configuring these rules, see Manage Duplicate Records.The default value is True. | Optional | 55.0 |
| email | String | Email ID of the person account. | Optional | 55.0 |
| firstName | String | First name of the person account. | Optional | 55.0 |
| lastName | String | Last name of the person account. | Required | 55.0 |

## Code Examples

```
{
  "enrollmentDate" : "2021-01-01T00:00:00",
  "membershipNumber" : "Member1",
  "associatedContactDetails" : {
    "firstName" : "Name1",
    "lastName" : "Name2",
    "email" : "ab@gmail.com",
    "allowDuplicateRecords" : "false",
    "additionalContactFieldValues" : {
      "attributes" : {
        "PersonMailingCity" : "Delhi",
        "CustomNumber__c" : "20.0"      }
    }
```
