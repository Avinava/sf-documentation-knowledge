---
title: "ContactPointEmail"
domain: object-reference
topic: contactpointemail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.928Z
estimatedTokens: 1374
keywords: [ContactPointEmail, contact’s, email, associated, individual, person, account, API, version, 48.0, later, Calls, Objects]
---

# ContactPointEmail

> Represents a contact’s email, which is  associated with an individual
      or person account. This object is available in API version 48.0 and later.

# ContactPointEmail

Represents a contact’s email, which is associated with an individual or person account. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActiveFromDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the contact’s email became active. |
| ActiveToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the contact’s email is no longer active. |
| BestTimeToContactEndTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latest time to contact the individual. |
| BestTimeToContactStartTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe earliest time to contact the individual. |
| BestTimeToContactTimezone | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe timezone applied to the best time to contact the individual. |
| EmailAddress | TypeemailPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The email address of the contact. |
| EmailDomain | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe domain of the contact’s email, which is everything after the @ sign. |
| EmailLatestBounceDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when an email failed to reach its recipient. |
| EmailLatestBounceReasonText | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason why the email didn’t reach its recipient. |
| EmailMailBox | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA subset of the contact’s email, which is everything before the @ sign. |
| IsPrimary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a contact’s email is their primary email (true) or not (false). |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionRequired. The name of the contact point email record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the account’s owner associated with this contact.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the contact’s parent. Only an individual or account can be a contact’s parent.This is a polymorphic relationship field.Relationship NameParentRelationship TypeLookupRefers ToAccount, Individual |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecify the usage type of this email. For instance, whether it’s a work email or a temporary email.Possible values are:HomeTempWork |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContactPointConsentChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ContactPointEmailHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ContactPointEmailOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ContactPointEmailShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ContactPointConsentChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ContactPointEmailHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ContactPointEmailOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ContactPointEmailShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
