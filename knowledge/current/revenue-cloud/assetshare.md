---
title: "AssetShare"
domain: revenue-cloud
topic: assetshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.545Z
estimatedTokens: 853
keywords: [AssetShare, Represents, sharing, entry, Asset., API, version, 33.0, later., Note, Supported, Calls, Special, Access, Rules, Fields, Usage]
---

# AssetShare

> Represents a sharing entry on an Asset. This object is available
      in API version 33.0 and later.

# AssetShare

Represents a sharing entry on an Asset. This object is available in API version 33.0 and later.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Customer Portal users can’t access this object.

## Fields

The properties available for some fields depend on the default organization-wide sharing settings. The properties listed are true for the default settings of such fields.

| Field | Details |
| --- | --- |
| AssetAccessLevel | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionLevel of access that the User or Group has to the Asset. The possible values are:ReadEditAll This value is not valid for creating or deleting records.This field must be set to an access level that is higher than the organization’s default access level for cases. |
| AssetId | TypereferencePropertiesFilter, Group, SortDescriptionID of the Asset associated with this sharing entry. This field can't be updated.This is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| RowCause | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionReason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited.Valid values include:Manual—The User or Group has access because a user with “All” access manually shared the Asset with them.Owner—The User is the owner of the Asset.Rule—The User or Group has access via an Asset sharing rule.GuestRule—The User or Group has access via an Asset guest user sharing rule.LpuImplicit—The User has access to records owned by high-volume Experience Cloud site users via a share group. |
| UserOrGroupId | TypereferencePropertiesFilter, Group, SortDescriptionID of the User or Group that has been given access to the Asset. This field can't be updated.This is a polymorphic relationship field.Relationship NameUserOrGroupRelationship TypeLookupRefers ToGroup, User |

## Usage

This object allows you to determine which users and groups can view and edit Asset records owned by other users.

If you attempt to create a new record that matches an existing record, request updates any modified fields and returns the existing record.
