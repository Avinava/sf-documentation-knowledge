---
title: "FlowInterviewShare"
domain: object-reference
topic: flowinterviewshare
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:10.305Z
estimatedTokens: 855
keywords: [FlowInterviewShare, sharing, entry, FlowInterview, API, version, 33.0, later, Calls, Usage]
---

# FlowInterviewShare

> Represents a sharing entry on a FlowInterview. This object is
      available in API version 33.0 and later.

# FlowInterviewShare

Represents a sharing entry on a FlowInterview. This object is available in API version 33.0 and later.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

The properties available for some fields depend on the default organization-wide sharing settings. The properties listed are true for the default settings of such fields.

| Field | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionLevel of access that the User or Group has to the FlowInterview. The possible values are:ReadEdit—In API version 42.0 and later, when Let users resume shared flow interviews is enabled for your org, users can resume all flow interviews that they have edit access to.All—This value is not valid for creating or deleting records. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the FlowInterview associated with this sharing entry.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToFlowInterview |
| RowCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionReason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited.Valid values include:Manual—The User or Group has access because a user with “All” access manually shared the FlowInterview with them.Owner—The User is the owner of the FlowInterview.Rule—The User or Group has access via a FlowInterview sharing rule.GuestRule—The User or Group has access via a FlowInterview guest user sharing rule. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the User or Group that has been given access to the FlowInterview. This field can't be updated.This is a polymorphic relationship field.Relationship NameUserOrGroupRelationship TypeLookupRefers ToGroup, User |

## Usage

This object lets you determine which users and groups can view and edit flow interviews that are owned by other users.

In API version 42.0 and later, when **Let users resume shared flow interviews** is enabled for your org, users can resume all flow interviews that they have edit access to. When that setting is disabled, only the owner or a flow admin can resume a flow interview. To disable this setting, go to your org’s Process Automation Settings in Setup.
