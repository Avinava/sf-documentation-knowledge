---
title: "ActiveScratchOrg"
domain: object-reference
topic: activescratchorg
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.992Z
estimatedTokens: 1624
namespace: Type
keywords: [ActiveScratchOrg, active, scratch, org, API, version, 41.0, later, Calls, Usage, Associated, Objects]
---

# ActiveScratchOrg

> Represents an active scratch org. This object is available in
		API version 41.0 and later.

**Namespace:** `Type`

# ActiveScratchOrg

Represents an active scratch org. This object is available in API version 41.0 and later.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of this scratch org. |
| Edition | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe org edition of this scratch org. Possible values are Group, Developer, Enterprise, and Professional. This field is read only. |
| ExpirationDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionDate when the scratch org expires. This field is read only. |
| Features | TypetextareaPropertiesNillableDescriptionThe features enabled in this scratch org, such as MultiCurrency. See the Salesforce DX Developer Guide for the full list of valid features. This field is read only. |
| HasSampleData | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionSpecifies whether the scratch org contains sample data. If set to true, the sample data is similar to the data in a Salesforce free trial org. |
| LastLoginDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date of the last user login to the scratch org. This field is read only. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. This field is read only. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. This field is read only. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionThe auto-generated ID of this scratch org. This field is read only. |
| Namespace | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace associated with this scratch org. This field is read only. |
| OrgName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the scratch org. This field is read only. |
| OwnerId | TypereferencePropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this scratch org. This field is read only. |
| ScratchOrg | TypestringPropertiesFilter, Group, SortDescriptionThe org ID of the scratch org. This field is read only. |
| ScratchOrgInfoId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe id of the associated ScratchOrgInfo object. This field is read only. |
| SignupEmail | TypeemailPropertiesFilter, Group, Nillable, SortDescriptionThe email address of the Administration user. This field is read only. |
| SignupInstance | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe Salesforce instance on which this scratch org resides. This field is read only. |
| SignupTrialDays | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of days between the scratch org's creation and expiration. This field is read only. |
| SignupUsername | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe username of the Administration user of the scratch org. This field is read only. |
| Snapshot | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf this scratch org was created from a scratch org snapshot, then this field contains either the name or ID of the snapshot. Specifically, the name corresponds to the Name field of the snapshot’s record in the OrgSnapshot standard object; the ID corresponds to the record ID.If this scratch org wasn’t created from a snapshot, this field is empty. This field is read only.This field is available in API version 61.0 and later. |

## Usage

Salesforce automatically creates an instance of this object after a ScratchOrgInfo record moves to the Active state. The new ActiveScratchOrg gets many of its field values from the ScratchOrgInfo object with which it’s associated.

When you delete an ActiveScratchOrg record, its associated scratch org is deleted and its associated ScratchOrgInfo record is moved to the Deleted state.

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[ActiveScratchOrgFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ActiveScratchOrgHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ActiveScratchOrgShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [ScratchOrgInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_scratchorginfo.htm "Represents a scratch org and its audit log. Use this object to create a scratch org and keep a log of its creation and deletion. This object is available in API version 41.0 and later.")

-   [NamespaceRegistry](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_namespaceregistry.htm "Represents a namespace that you can link to scratch orgs that were created from your org’s Dev Hub. You use the namespace when developing, packaging, and releasing an app. You can’t create this object with the API. Use the Link Namespace action in the Dev Hub graphical interface to insert a NamespaceRegistry record. This object is available in API version 41.0 and later.")

-   [*Salesforce DX Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev "
    Salesforce DX Developer Guide
    - HTML (New Window)")

## Related Topics

- ActiveScratchOrgFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ActiveScratchOrgHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ActiveScratchOrgShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- ScratchOrgInfo (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_scratchorginfo.htm)
- NamespaceRegistry (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_namespaceregistry.htm)
