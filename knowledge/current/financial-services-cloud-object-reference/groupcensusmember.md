---
title: "GroupCensusMember"
domain: financial-services-cloud-object-reference
topic: groupcensusmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.402Z
estimatedTokens: 2308
keywords: [GroupCensusMember, personal, member, employee, association, their, dependents, estimate, insurance, plan, cost, group, enrollment, process, retrieve]
---

# GroupCensusMember

> Represents personal information about a member, for example employee or association member, or their dependents. GroupCensusMember is used to estimate the insurance plan cost for the group. This object is also used in the enrollment process to retrieve the member and dependent details. Child object of GroupCensus. This object is available in API version 55.0 and later.

# GroupCensusMember

Represents personal information about a member, for example employee or association member, or their dependents. GroupCensusMember is used to estimate the insurance plan cost for the group. This object is also used in the enrollment process to retrieve the member and dependent details. Child object of GroupCensus. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person account associated with the census member.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe census member's address. |
| AnnualEligibleSalary | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe census member's annual eligible salary, which is used to determine life insurance coverage. |
| Birthdate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe census member's birthdate. |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city detail for the address. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact associated with the census member.This is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country detail for the address. |
| DependentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of the census member's dependents. Children, parents, and parents-in-law are included in the number of dependents. Spouse isn't included in the number of dependents. |
| Email | TypeemailPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe census member's email address. |
| FirstName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe census member's first name. |
| FullTimeEquivalent | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCensus member’s hours divided by the employer’s hours for a full-time work week. 1 is equal to full-time hours, 0.5 is 50% of the full-time equivalent. |
| Gender | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe census member's gender. |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the address.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| GroupCensusId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe group census associated with the member.This is a relationship field.Relationship NameGroupCensusRelationship TypeLookupRefers ToGroupCensus |
| GroupClassId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe group class associated with the census member.This is a relationship field.Relationship NameGroupClassRelationship TypeLookupRefers ToGroupClass |
| IsOptOutAllPlans | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the census member has opted out of all plans. Used to calculate OptOutCount for GroupCensus when RelationshipType is 'Self'.The default value is 'false'. |
| IsPortalUser | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the census member is created as a portal user.The default value is 'false'. |
| JoinDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe census member's hire date. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Lastname | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe census member's last name. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address. |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address. |
| MemberKey | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe hash key that’s used for identifying duplicate group census member records. By default, the hash key is a combination of First Name, Last Name, and Email ID. |
| MemberType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of member. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the census member. |
| OptOutPlanTypes | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the plan types the census member opts out of.Possible values are:DentalLifeMedicalMedical Savings AccountRetirementVision |
| PhoneNumber | TypephonePropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe census member's phone number. |
| PolicyStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe policy's start date. |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code for the address. |
| PrimaryGroupCensusMemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary group census member associated with the census member.This is a relationship field.Relationship NamePrimaryGroupCensusMemberRelationship TypeLookupRefers ToGroupCensusMember |
| PrimaryMemberCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the category of the primary census member. |
| PrimaryMemberSource | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExternal identifier of the primary member. Maximum size is 255 characters. |
| RelationshipToPrimaryMember | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe census member's relationship to the primary member. |
| SmokerStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the smoking status of the user |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionSource System external ID of the group census member. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state detail for the address. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the group census member.Possible values are:CompletedIncompletedNot Determined |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street detail for the address. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GroupCensusMemberChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[GroupCensusMemberFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[GroupCensusMemberHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- GroupCensusMemberChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- GroupCensusMemberFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- GroupCensusMemberHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
