---
title: "OpportunitySplit"
domain: object-reference
topic: opportunitysplit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.611Z
estimatedTokens: 1182
keywords: [OpportunitySplit, credits, opportunity, team, members, portion, amount, API, version, 16.0, later, pilot, customers, 28.0, others]
---

# OpportunitySplit

> OpportunitySplit credits one or more opportunity team members with a
      portion of the opportunity amount. This object is available in API version 16.0 and later
      for pilot customers, and version 28.0 and later for others.

# OpportunitySplit

OpportunitySplit credits one or more opportunity team members with a portion of the opportunity amount. This object is available in API version 16.0 and later for pilot customers, and version 28.0 and later for others.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ArchivedTerritoryName | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the associated territory that’s on an archived territory model. If the OpportunityLineItemSplit isn’t associated with a territory on an archived territory model, the field value is null. This field is available in API version 62.0 and later. |
| HasOpportunityLineItemSplit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRead-only. Indicates whether the opportunity split has a split on the opportunity line item level (true) or not (false).The default value is false. This field is available in API version 58.0 and later. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the opportunity for which the split is being created.This field is a relationship field.Relationship NameOpportunityRelationship TypeLookupRefers ToOpportunity |
| Split | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRead-only. Automatically generated number identifying the split within the opportunity. |
| SplitAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionMonetary amount of the split.Label is Split Amount. |
| SplitNote | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnter any notes or comments about the split. The character limit is 255.Label is Split Note. |
| SplitOwnerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe opportunity owner.This field is a relationship field.Relationship NameSplitOwnerRelationship TypeLookupRefers ToUser |
| SplitPercentage | TypepercentPropertiesCreate, Filter, Sort, UpdateDescriptionSplit percentage that this team member receives. If the split type is validated to a 100% total, this number can range from 0 to 100. If the total isn’t validated, this number can range from 0 to 1,000.Label is Split (%). |
| SplitTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAuto-generated, numeric ID for the split type defined by the OpportunitySplitType object. This field is available in API version 28 and later.If this field is blank, the system automatically specifies the default split type for the opportunity amount, which is validated to 100%.This field is a relationship field.Relationship NameSplitTypeRelationship TypeLookupRefers ToOpportunitySplitType |
| Territory2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the associated territory. This field is a relationship field, and is available in API version 62.0 and later.Relationship NameTerritory2Relationship TypeLookupRefers ToTerritory2 |

## Usage

Use the OpportunitySplit object to manage splits for an opportunity.

If you change the opportunity owner using the API, the old owner remains on the opportunity team with either Read-only access, or the level of access specified in your organization-wide defaults.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OpportunitySplitChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

[OpportunitySplitHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.") (API version 59.0)

History is available for tracked fields of the object.

## Related Topics

- OpportunitySplitChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- OpportunitySplitHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
