---
title: "InvolvementGroupMember"
domain: edu-cloud-dev-guide
topic: involvementgroupmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.319Z
estimatedTokens: 1128
keywords: [InvolvementGroupMember, member, institution's, involvement, group, API, version, 64.0, later, Calls, Associated, Objects]
---

# InvolvementGroupMember

> Represents a member in an institution's involvement group. This object
      is available in API version 64.0 and later.

# InvolvementGroupMember

Represents a member in an institution's involvement group. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe contact related to the involvement group member.This field is a relationship field.Relationship NameContactRefers ToContact |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency related to the involvement group member.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the involvement group member. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the member left the involvement group. |
| InvolvementGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe involvement group related to the involvement group member.This field is a relationship field.Relationship NameInvolvementGroupRefers ToInvolvementGroup |
| InvolvementLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the member's level of involvement in the involvement group.Possible values are:HighLowMiddle |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the member is active in the involvement group (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the involvement group member. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RelatedToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe resource related to the involvement group member.This field is a polymorphic relationship field.Relationship NameRelatedToRefers ToAcademicTerm, AcademicYear |
| Role | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe role of the member in the involvement group. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date the member joined the involvement group. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InvolvementGroupMemberHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InvolvementGroupMemberOwnerSharingRule](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[InvolvementGroupMemberShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InvolvementGroupMemberHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- InvolvementGroupMemberOwnerSharingRule (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- InvolvementGroupMemberShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
