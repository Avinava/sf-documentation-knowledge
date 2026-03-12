---
title: "Solution"
domain: object-reference
topic: solution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.363Z
estimatedTokens: 1461
keywords: [Solution, detailed, customer, issue, resolution, Calls, Usage, Associated, Objects]
---

# Solution

> Represents a detailed description of a customer issue and the
   resolution of that issue.

# Solution

Represents a detailed description of a customer issue and the resolution of that issue.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| IsHtml | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the Solution is an HTML solution (true) or not (false). |
| IsOutOfDate | TypebooleanPropertiesDefaulted on create, FilterDescriptionRead-only field that indicates whether a solution master has been updated since the translated version was created (true) or not (false). Note that this field does not appear in the page layout of master solutions. |
| IsPublished | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Solution has been published (true) or not (false). A solution’s published state does not affect how it can be used, or whether you can query, update, or delete it. Label is Public. Prior to Spring ‘14, the label was Visible in Self-Service Portal |
| IsPublishedInPublicKb | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Solution has been published as a Public Solution (true) or not (false). Label is Visible in Public Knowledge Base.This field only applies to solutions, not articles in the public knowledge base. |
| IsReviewed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the Solution has been reviewed (true) or not (false). This flag can only be set indirectly via the Status picklist. Each predefined Status value implies an IsReviewed value. Label is Reviewed. |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the User who owns the Solution.This is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| ParentId | TypereferencePropertiesCreate, Defaulted on create, Filter, UpdateDescriptionID of the master solution, if this is the translation of a master solution. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionID of the RecordType to which the Solution is associated. |
| SolutionLanguage | TypepicklistPropertiesCreate, Filter, Restricted picklist, UpdateDescriptionThe language that the solution is written in, such as French or Chinese (Traditional). |
| SolutionName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. If a client application creates a new Solution and a value for this field is unspecified, a hyphen (-), the default value for this field, is used. Limit: 255 characters. Label is Title. |
| SolutionNote | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe details of the Solution record. Limit: 32,000 characters. Label is Solution Details. If you have HTML Solutions enabled, any HTML tags used in this field are verified before the object is created or updated. If invalid HTML is entered, an error is thrown. Any JavaScript used in this field is removed before the object is created or updated. |
| SolutionNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionAn identifying number that is assigned automatically when a solution is created. It can’t be set directly, and it can’t be modified. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The status of the solution. Directly controls the IsReviewed value. To obtain the status values in the picklist, a client application can query the SolutionStatus. |
| TimesUsed | TypeintPropertiesFilter, Group, SortDescriptionNumber of times this solution has been used. Label is Num Related Case. |

## Usage

Use this object to manage your organization’s solutions. Client applications can create, update, delete, and query Attachment records associated with a solution.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[SolutionFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (API version 18.0)

Feed tracking is available for the object.

[SolutionHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

#### See Also

-   [CategoryData](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_categorydata.htm "Represents a logical grouping of Solution records.")

-   [CategoryNode](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_categorynode.htm "Represents a tree of Solution categories.")

## Related Topics

- SolutionFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- SolutionHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- CategoryData (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_categorydata.htm)
- CategoryNode (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_categorynode.htm)
