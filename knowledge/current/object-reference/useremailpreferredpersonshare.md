---
title: "UserEmailPreferredPersonShare"
domain: object-reference
topic: useremailpreferredpersonshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.798Z
estimatedTokens: 640
keywords: [UserEmailPreferredPersonShare, sharing, entry, UserEmailPreferredPerson, customizable, records.This, API, version, 44.0, later, Calls]
---

# UserEmailPreferredPersonShare

> Represents a sharing entry on a UserEmailPreferredPerson object.
         Sharing is not customizable for UserEmailPreferredPerson records.This object is available in API version 44.0
					and later.

# UserEmailPreferredPersonShare

Represents a sharing entry on a UserEmailPreferredPerson object. Sharing is not customizable for UserEmailPreferredPerson records.This object is available in API version 44.0 and later.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter,Group, Restricted picklist, Sort, UpdateDescriptionRequired. The level of access allowed. Values can be:AllEditRead. |
| ParentId | TypereferencePropertiesCreate, Filter,Group, Sort,DescriptionId of the parent record, if any.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToUserEmailPreferredPerson |
| RowCause | TypepicklistPropertiesCreate, Filter,Group, Nillable, Restricted picklist, Sort,DescriptionRequired. Reason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited. Valid values can include:Manual—The User or Group has access because a user with All access manually shared the record with them.Owner—The User is the owner of the record or is in a role above the record owner in the role hierarchy. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter,Group, Sort,DescriptionRequired. ID of the user or group that has been given access to the UserEmailPreferredPerson record. The UserOrGroupID is polymorphic. The label is User/Group Id.This is a polymorphic relationship field.Relationship NameUserOrGroupRelationship TypeLookupRefers ToGroup, User |
