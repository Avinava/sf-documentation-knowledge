---
title: "GroupCensusMember"
domain: sfFieldRef
topic: groupcensusmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:59.884Z
estimatedTokens: 868
keywords: [GroupCensusMember, personal, member, employee, association, their, dependents, estimate, insurance, plan, cost, group, enrollment, process, retrieve]
---

# GroupCensusMember

> Represents personal information about a member, for example employee or association member, or their dependents. GroupCensusMember is used to estimate the insurance plan cost for the group. This object is also used in the enrollment process to retrieve the member and dependent details. Child object of GroupCensus. This object is available in API version 55.0 and later.

# GroupCensusMember

Represents personal information about a member, for example employee or association member, or their dependents. GroupCensusMember is used to estimate the insurance plan cost for the group. This object is also used in the enrollment process to retrieve the member and dependent details. Child object of GroupCensus. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see GroupCensusMember in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| Address | Address | address |  |  |  |  |
| AnnualEligibleSalary | Annual Eligible Salary | currency |  |  | 18 | 2 |
| AssociationWithPrimaryMbr | Association with Primary Member | picklist |  | 255 |  |  |
| Birthdate | Birthdate | date |  |  |  |  |
| City | City | string |  | 40 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| Country | Country | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DependentCount | Dependent Count | int | 9 |  |  |  |
| Email | Email | email |  | 80 |  |  |
| FirstName | First Name | string |  | 50 |  |  |
| FullTimeEquivalent | Full Time Equivalent | double |  |  | 2 | 1 |
| Gender | Gender | picklist |  | 40 |  |  |
| GeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| GroupCensusId | Group Census ID | reference |  | 18 |  |  |
| GroupClassId | Group Class ID | reference |  | 18 |  |  |
| Id | Group Census Member ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsOptOutAllPlans | Is Opt-out All Plans | boolean |  |  |  |  |
| IsPortalUser | Is Portal User | boolean |  |  |  |  |
| JoinDate | Join Date | date |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Lastname | Last Name | string |  | 50 |  |  |
| Latitude | Latitude | double |  |  | 18 | 15 |
| Longitude | Longitude | double |  |  | 18 | 15 |
| MemberKey | Member Key | string |  | 50 |  |  |
| MemberType | Member Type | picklist |  | 40 |  |  |
| Name | Name | string |  | 255 |  |  |
| OptOutPlanTypes | Opt-out Plan Types | multipicklist |  | 4099 | 0 |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PhoneNumber | Phone Number | phone |  | 40 |  |  |
| PolicyStartDate | Policy Start Date | date |  |  |  |  |
| PostalCode | Postal Code | string |  | 20 |  |  |
| PrimaryGroupCensusMemberId | Group Census Member ID | reference |  | 18 |  |  |
| PrimaryMemberCategory | Primary Member Category | picklist |  | 40 |  |  |
| PrimaryMemberSource | Primary Member Source | string |  | 255 |  |  |
| RelationshipToPrimaryMember | Relationship to Primary Member | picklist |  | 40 |  |  |
| SmokerStatus | Smoker Status | picklist |  | 40 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| State | State | string |  | 80 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| Street | Street | textarea |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
