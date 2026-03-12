---
title: "LiveChatTranscriptShare"
domain: object-reference
topic: livechattranscriptshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.424Z
estimatedTokens: 711
keywords: [LiveChatTranscriptShare, sharing, entry, LiveChatTranscript, API, version, 24.0, later, Calls, Usage]
---

# LiveChatTranscriptShare

> Represents a sharing entry on a LiveChatTranscript object. This
  object is available in API version 24.0 and later.

# LiveChatTranscriptShare

Represents a sharing entry on a LiveChatTranscript object. This object is available in API version 24.0 and later.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

create(), delete(), query(), retrieve()update(), upsert()

## Fields

The properties available for some fields depend on the default organization-wide sharing settings. The properties listed are true for the default settings of such fields.

| Field Name | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionLevel of access that the User or Group has to the LiveChatTranscript. The possible values are:ReadEditAll (This value is not valid for create() or update() calls.)This value must be set to an access level that is higher than the organization’s default access level for live chat transcripts. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the parent object, if any |
| RowCause | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionReason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited.Values can include:Manual—The User or Group has access because a user with “All” access manually shared the LiveChatTranscript with them.Owner—The User is the owner of the LiveChatTranscript or is in a role above the LiveChatTranscript owner in the role hierarchy. |
| UserOrGroupID | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the User or Group that has been given access to the LiveChatTranscript. |

## Usage

This object lets you determine which users and groups can view and edit LiveChatTranscript records owned by other users.

If you attempt to create a new record that matches an existing record, the create() call updates any modified fields and returns the existing record.
