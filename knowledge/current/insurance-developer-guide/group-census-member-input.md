---
title: "Group Census Member Input"
domain: insurance-developer-guide
topic: group-census-member-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.743Z
estimatedTokens: 1007
keywords: [Group, Census, Member, Input, representation]
---

# Group Census Member Input

> Input representation for the details of the group census member.

# Group Census Member Input

Input representation for the details of the group census member.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Person account ID. | Optional | 65.0 |
| additionalFields | Additional Fields Map Value[] | List of key-value pairs for populating custom fields or other fields. | Optional | 65.0 |
| annualEligibleSalary | Double | Annual salary that's eligible for benefits calculations. | Optional | 65.0 |
| association​WithPrimaryMbr | String | Association to primary member for dependents, such as Spouse, Child. | Optional | 65.0 |
| birthdate | String | Date of birth of the member, in YYYY-MM-DD format. | Optional | 65.0 |
| city | String | City of the member's address. | Optional | 65.0 |
| contactId | String | ID of the Contact record of the member. | Optional | 65.0 |
| country | String | Country of the member's address. | Optional | 65.0 |
| dependentCount | Integer | Number of dependents that are associated with the member. | Optional | 65.0 |
| email | String | Email address of the member. | Optional | 65.0 |
| firstName | String | First name of the member. | Required to add member | 65.0 |
| fullTimeEquivalent | Double | Work capacity of the member, where 1.0 indicates a full-time employee. | Optional | 65.0 |
| gender | String | Gender of the member. | Optional | 65.0 |
| groupCensusId | String | ID of the Group Census that the member belongs to. | Optional | 65.0 |
| groupClassId | String | ID for the specific class or category within the group that the member belongs to. | Optional | 65.0 |
| groupClassName | String | Name of the group class. | Optional | 65.0 |
| grpCensus​GrpClass​SummaryId | String | ID of the related group census group class summary record. | Optional | 65.0 |
| id | String | ID of the group census member to update the member details. | Required to update member | 65.0 |
| isOptOutAllPlans | Boolean | Indicates whether the member has opted out of all available insurance plans (true) or not (false). | Optional | 65.0 |
| isPortalUser | Boolean | Indicates whether a community portal user must be created for this member (true) or not (false). | Optional | 65.0 |
| joinDate | String | Date the member joined the group or company. | Optional | 65.0 |
| lastname | String | Last name of the member. | Required to add member | 65.0 |
| memberKey | String | Unique, externally defined key that's used for identifying and preventing duplicate members, often created by concatenating several fields. | Optional | 65.0 |
| memberType | String | Type of member, such as Primary or Dependent. | Optional | 65.0 |
| name | String | Full name of the member. | Optional | 65.0 |
| optOutPlanTypes | String | Types of plans the member has opted out of. | Optional | 65.0 |
| phoneNumber | String | Phone number of the member. | Optional | 65.0 |
| policyStartDate | String | Date when the member's policy coverage begins. | Optional | 65.0 |
| postalCode | String | Postal or ZIP code of the member's address. | Optional | 65.0 |
| primary​GroupCensus​MemberId | String | ID of the primary group census member the dependents are associated with. | Optional | 65.0 |
| primaryMember​Category | String | Category of the primary member. | Optional | 65.0 |
| primaryMember​Source | String | System or source from which the member's data originated. | Optional | 65.0 |
| relationship​To​PrimaryMember | String | Member's relationship to the primary insured. | Optional | 65.0 |
| smokerStatus | String | Smoking status of the member, such as Smoker or Non-smoker. | Optional | 65.0 |
| sourceSystem​Identifier | String | ID from an external source system, that's used for integration purposes. | Optional | 65.0 |
| state | String | State or province the member belongs to. | Optional | 65.0 |
| status | String | Current status of the member. | Optional | 65.0 |
| street | String | Street address of the member. | Optional | 65.0 |

## Code Examples

```
{
  "members": [
    {
      "accountId": "0015j00000AbCdEfGHI",
      "additionalFields": [
        {
          "key": "EmployeeNumber__c",
          "value": "E12345"
        }
      ],
      "annualEligibleSalary": 82000.5,
      "associationWithPrimaryMbr": null,
      "birthdate": "1990-08-25",
      "city": "Austin",
      "contactId": "0035j00000KlMnOpQR",
      "country": "USA",
      "dependentCount": 0,
      "email": "alex.taylor@example.com",
      "firstName": "Alex",
      "fullTimeEquivalent": 1,
      "gender": "Non-Binary",
      "groupCensusId": "0r65j00000StUvWxYZ",
      "groupClassId": "a015j00000XyZ12aBC",
      "groupClassName": "Full-Time Salaried",
      "grpCensusGrpClassSummaryId": "a025j00000GhIjKkLM",
      "id": "0r65j00000StUvWxYZ",
      "isOptOutAllPlans": false,
      "isPortalUser": false,
      "joinDate": "2023-03-15",
      "lastname": "Taylor",
      "memberKey": "TAYLOR-ALEX-19900825",
      "memberType": "Primary",
      "name": "Alex Taylor",
      "optOutPlanTypes": null,
      "phoneNumber": "512-555-0199",
      "policyStartDate": "2025-01-01",
      "postalCode": "78701",
      "primaryGroupCensusMemberId": null,
      "primaryMemberCategory": "Full-Time",
      "primaryMemberSource": "Workday",
      "relationshipToPrimaryMember": "Self",
      "smokerStatus": "Non-Smoker",
      "sourceSystemIdentifier": "WD-EMP-67890",
      "state": "TX",
      "status": "Active",
      "street": "456 Congress Ave"
    }
  ]
}
```

## Related Topics

- Additional Fields Map Value (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_ins_additional_fields_map_value.htm)
