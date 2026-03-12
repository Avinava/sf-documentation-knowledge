---
title: "WorkBadgeDefinition"
domain: object-reference
topic: workbadgedefinition
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:19.526Z
estimatedTokens: 1702
keywords: [WorkBadgeDefinition, attributes, badge, including, image, WorkBadge, record, lookup, since, derived, Calls, Additional, Considerations, Objects, Associated]
---

# WorkBadgeDefinition

> Represents the attributes of a badge including the badge name,
			description, and image. Each WorkBadge record must have a lookup to a
			WorkBadgeDefinition since badge attributes (like badge name) are derived from the
			WorkBadgeDefinition object.

# WorkBadgeDefinition

Represents the attributes of a badge including the badge name, description, and image. Each WorkBadge record must have a lookup to a WorkBadgeDefinition since badge attributes (like badge name) are derived from the WorkBadgeDefinition object.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Additional Considerations and Related Objects

WorkBadgeDefinition has a field called ImageUrl that references a DocumentID. This is a required field for creating a Badge.

To grant “giver” access to a WorkBadgeDefinition, you must also create the [WorkAccess](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workaccess.htm "Used to grant or restrict user access to give badge definitions. Each badge definition record must have one WorkAccess record.") (and the related WorkAccessShare records.

Each WorkBadgeDefinition has an ImageUrl field that must be populated with a DocumentID of the Document record containing the badge image.

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, UpdateDescriptionRequired. Limit: 4000 characters. The description of the badge and what it means to receive this badge. |
| GivenBadgeCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of badges given per user or across all users.NoteThis field can’t be added in a list view or referenced in a formula field. |
| ImageUrl | TypeurlPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. This is the badge image that will be displayed in the UI. Use DocumentID or ImageURL. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRepresents whether a WorkBadgeDefinition is active and available in the UI and API. |
| IsCompanyWide | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRepresents a special class of badges known as Company Badges. Company badges are visible to the entire company and visible in specific list view filters.NoteIf this field is selected, everyone within the user’s network will be able to give the badge automatically. If this field is not selected, people with sharing must be added to the badge’s access list in order to give the badge. |
| IsLimitPerUser | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the badge limit is per user (true) or across all users (false). The default value is false. |
| IsRewardBadge | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the badge is a reward badge (true) or not (false). |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp that indicates when the current user last viewed a record that is related to this WorkBadgeDefinition. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp that indicates when the current user last viewed this WorkBadgeDefinition. If this value is null, this record might have been only referenced (LastReferencedDate) and not viewed. |
| LimitNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe badge limit per user or across all users. |
| LimitStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the badge limit. The date can be reset to the current date. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of the Badge. Label: Badge Title. |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the community that this WorkBadgeDefinition is associated with. This field is available only if digital experiences is enabled in your org. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSalesforce User ID for User who is the Owner of the WorkBadgeDefinition record (usually the creator of the record)This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RewardFundId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSalesforce unique ID for the WorkRewardFund that is associated with this WorkBadgeDefinition. WorkBadgeDefinition records with a RewardFundID indicate a Reward Badge. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[WorkBadgeDefinitionChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[WorkBadgeDefinitionFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[WorkBadgeDefinitionHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[WorkBadgeDefinitionOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[WorkBadgeDefinitionShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkAccess (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_workaccess.htm)
- WorkBadgeDefinitionChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- WorkBadgeDefinitionFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- WorkBadgeDefinitionHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- WorkBadgeDefinitionOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WorkBadgeDefinitionShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
