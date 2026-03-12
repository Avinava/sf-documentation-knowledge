---
title: "LoyaltyPgmGroupMbrRlnsp"
domain: loyalty
topic: loyaltypgmgroupmbrrlnsp
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.138Z
estimatedTokens: 1191
keywords: [LoyaltyPgmGroupMbrRlnsp, junction, Corporate, Individual, loyalty, program, member, part, group, API, version, 53.0, later, Calls, Associated]
---

# LoyaltyPgmGroupMbrRlnsp

> Represents a junction between a Corporate or Individual type loyalty program
         member who is part of a group and the Group type loyalty program member. This object
      is available in API version 53.0 and later.

# LoyaltyPgmGroupMbrRlnsp

Represents a junction between a Corporate or Individual type loyalty program member who is part of a group and the Group type loyalty program member. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account with which the loyalty program member is associated.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| CanMemberRedeemFromGroup | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the member can redeem points from a group. This field isn’t used. You can customize and use this field based on your org's requirements.The default value is 'false'. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the contact with which the loyalty program member is associated.This field is a relationship field.Relationship NameContactRefers ToContact |
| ContributionCalculationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the basis on which the member’s point contribution to a group is calculated.Possible values are:Percentage |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramGroupMemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the Group type loyalty program member that the related Individual or Corporate type loyalty program member is a part of.This is a relationship field.Relationship NameLoyaltyProgramGroupMemberRelationship TypeMaster-detailRefers ToLoyaltyProgramMember |
| MemberName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the related loyalty program member record. For an Individual type loyalty program member, it's the first name and the last name of the contact record associated with loyalty program member record. For a Corporate type loyalty program member, it's the name of the account record associated with the loyalty program member record. This field is read-only. |
| MemberPointContributionPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of a group member's total accrued points that’s transferred to the group. |
| MemberRole | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the role of the loyalty program member in a group. You can add values to the picklist. This field isn't used. You can customize and use this field based on your org's requirements.Possible values are:PrimarySecondary |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the loyalty program member group relationship record. |
| RelatedLoyaltyProgramMemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe related Individual or Corporate type loyalty program member associated with the loyalty program group member relationship.This is a relationship field.Relationship NameRelatedLoyaltyProgramMemberRelationship TypeLookupRefers ToLoyaltyProgramMember |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyPgmGroupMbrRlnspChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[LoyaltyPgmGroupMbrRlnspHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

## Related Topics

- LoyaltyPgmGroupMbrRlnspChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
