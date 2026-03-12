---
title: "ConnectApi.GroupCensusMemberInputRepresentation"
domain: insurance-developer-guide
topic: connectapigroupcensusmemberinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.207Z
estimatedTokens: 1016
keywords: [Input, representation, group, census, member]
---

# ConnectApi.GroupCensusMemberInputRepresentation

> Input representation for a group census member.

# ConnectApi.GroupCensusMemberInputRepresentation

Input representation for a group census member.

This class contains properties for all the fields on the Group Census Member object.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Person account ID. | Optional | 65.0 |
| additionalFields | List<ConnectApi.AdditionalFieldsMapValue> | List of key-value pairs for populating custom fields or other fields. | Optional | 65.0 |
| annualEligibleSalary | Double | Annual salary that's eligible for benefits calculations. | Optional | 65.0 |
| associationWithPrimaryMbr | String | Association to primary member for dependents, such as Spouse, Child. | Optional | 65.0 |
| birthdate | String | Member's date of birth in YYYY-MM-DD format. | Optional | 65.0 |
| city | String | City of the member's address. | Optional | 65.0 |
| contactId | String | ID of the Contact record of the member. | Optional | 65.0 |
| country | String | Country of the member's address. | Optional | 65.0 |
| dependentCount | Integer | Number of dependents that are associated with the member. | Optional | 65.0 |
| email | String | Email address of the member. | Optional | 65.0 |
| firstName | String | First name of the member. | Required to add a member | 65.0 |
| fullTimeEquivalent | Double | Work capacity of the member, where 1.0 indicates a full-time employee. | Optional | 65.0 |
| gender | String | Gender of the member. | Optional | 65.0 |
| groupCensusId | String | ID of the Group Census that the member belongs to. | Optional | 65.0 |
| groupClassId | String | ID for the specific class or category within the group that the member belongs to. | Optional | 65.0 |
| groupClassName | String | Name of the group class. | Optional | 65.0 |
| grpCensusGrpClassSummaryId | String | ID of the related group census group class summary record. | Optional | 65.0 |
| id | String | ID of the group census member. | Required to update member details | 65.0 |
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
| primaryGroupCensusMemberId | String | ID of the primary group census member the dependents are associated with. | Optional | 65.0 |
| primaryMemberCategory | String | Category of the primary member. | Optional | 65.0 |
| primaryMemberSource | String | System or source from which the member's data originated. | Optional | 65.0 |
| relationshipToPrimaryMember | String | Member's relationship to the primary insured. | Optional | 65.0 |
| smokerStatus | String | Smoking status of the member, such as Smoker or Non-smoker. | Optional | 65.0 |
| sourceSystemIdentifier | String | ID from an external source system, that's used for integration purposes. | Optional | 65.0 |
| state | String | State or province the member belongs to. | Optional | 65.0 |
| status | String | Current status of the member. | Optional | 65.0 |
| street | String | Street address of the member. | Optional | 65.0 |

## Related Topics

- ConnectApi.AdditionalFieldsMapValue (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_additional_fields_map_valu.htm)
