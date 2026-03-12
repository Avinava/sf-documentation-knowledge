---
title: "CampaignShare"
domain: object-reference
topic: campaignshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.074Z
estimatedTokens: 830
keywords: [CampaignShare, sharing, entry, Campaign, Calls, Special, Access, Rules, Usage]
---

# CampaignShare

> Represents a sharing entry on a Campaign.

# CampaignShare

Represents a sharing entry on a Campaign.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, only users with access to the Campaign object can access this object.

## Fields

The properties available for some fields depend on the default organization-wide sharing settings. The properties listed are true for the default settings of such fields.

| Field | Details |
| --- | --- |
| CampaignId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the Campaign associated with this sharing entry. This field can't be updated.This is a relationship field.Relationship NameCampaignRelationship TypeLookupRefers ToCampaign |
| CampaignAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionLevel of access that the User or Group has to the Campaign. The possible values are:ReadEditAll (This value is not valid for creating or updating records.)This field must be set to an access level that is higher than the organization’s default access level for Campaign. |
| RowCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionReason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited.Valid values:Rule—The User or Group has access via a Campaign sharing rule.GuestRule—The User or Group has access via a Campaign guest user sharing rule.Manual—The User or Group has access because a User with “All” access manually shared the Campaign with them.Owner—The User is the owner of the Campaign.LpuImplicit—The User has access to records owned by high-volume Experience Cloud site users via a share group.ARImplicit—The User, who belongs to a partner or customer account, has access to the Campaign via an account relationship data sharing rule. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the User or Group that has been given access to the Campaign. This field can't be updated.This is a polymorphic relationship field.Relationship NameUserOrGroupRelationship TypeLookupRefers ToGroup, User |

## Usage

This object allows you to determine which users and groups can view or edit Campaign records owned by other users.
