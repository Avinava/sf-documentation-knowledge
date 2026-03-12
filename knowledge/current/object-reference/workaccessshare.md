---
title: "WorkAccessShare"
domain: object-reference
topic: workaccessshare
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:19.508Z
estimatedTokens: 674
keywords: [WorkAccessShare, control, Givers, WorkBadgeDefinition, records, Calls, Additional, Considerations, Objects]
---

# WorkAccessShare

> Used to control Givers of WorkBadgeDefinition
		records.

# WorkAccessShare

Used to control Givers of WorkBadgeDefinition records.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Additional Considerations and Related Objects

Related to [WorkAccess Object](https://docs.google.com/a/salesforce.com/document/d/11IkXSCNKBD_04YlyOPvWS94iyVeQ7zN98M03LdcW4eM/edit#bookmark=id.7idtv3rbjtcr). WorkAccess is the parent of WorkAccessShare.

## Fields

The properties available for some fields depend on the default organization-wide sharing settings. The properties listed are true for the default settings of such fields.

| Field Name | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionCRUD Access Level (picklist values: Read Only, Read/Write, Owner). |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID for WorkAccess record.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToWorkAccess |
| RowCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionReason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited.Values can include:Manual—The User or Group has access because a user with “All” access manually shared the WorkAccess with them.Owner—The User is the owner of the WorkAccess or is in a role above the WorkAccess owner in the role hierarchy. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionUser or Group ID for WorkAccess.This is a polymorphic relationship field.Relationship NameUserOrGroupRelationship TypeLookupRefers ToGroup, User |
