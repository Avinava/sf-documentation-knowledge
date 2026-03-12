---
title: "StandardObjectNameShare"
domain: loyalty
topic: standardobjectnameshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.808Z
estimatedTokens: 538
keywords: [StandardObjectNameShare, model, share, objects, associated, standard, represent, sharing, entry, Calls, Special, Access, Rules]
---

# StandardObjectNameShare

> StandardObjectNameShare is the model for all
			share objects associated with standard objects. These objects represent a sharing entry
			on the standard object.

# StandardObjectNameShare

StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.

The object name is variable and uses StandardObjectNameShare syntax. For example, AccountBrandShare is a sharing entry on an account brand. For specific version information, see the standard object documentation.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

For specific special access rules, if any, see the documentation for the standard object. For example, for AccountBrandShare, see the special access rules for AccountBrand.

## Fields

| Field Name | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe level of access allowed. Values are:All (owner)Edit (read/write)Read (read only) |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the parent record. |
| RowCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionReason that the sharing entry exists. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the user or group that has been given access to the object. |
