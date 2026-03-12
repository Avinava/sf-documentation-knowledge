---
title: "AuthorizationFormConsent"
domain: object-reference
topic: authorizationformconsent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.328Z
estimatedTokens: 1367
keywords: [AuthorizationFormConsent, date, way, user, consented, authorization, form, API, version, 46.0, later, Calls, Special, Access, Rules]
---

# AuthorizationFormConsent

> Represents the date and way in which a user consented to an
			authorization form. This object is available in API version 46.0 and
		later.

# AuthorizationFormConsent

Represents the date and way in which a user consented to an authorization form. This object is available in API version 46.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Data Protection and Privacy is enabled.

## Fields

| Field Name | Details |
| --- | --- |
| AuthorizationFormTextId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The authorization form text that the Individual consented to.This is a relationship field.Relationship NameAuthorizationFormTextRelationship TypeLookupRefers ToAuthorizationFormText |
| ConsentCapturedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRequired. The date and time that consent was given. |
| ConsentCapturedSource | TypestringPropertiesCreate, Filter, Group, Nillable Sort, UpdateDescriptionRequired. The source through which consent was captured. For example, user@example.com, www.example.com. |
| ConsentCapturedSourceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. The source type through which consent was captured. For example, phone, email, or website. |
| ConsentGiverId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the person consenting to the authorization form.This is a polymorphic relationship field.Relationship NameConsentGiverRelationship TypeLookupRefers ToAccount, CareProgramEnrollee, Contact, Individual, User |
| DocumentVersionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the document version for which consent is given.This is a relationship field.Relationship NameDocumentVersionRelationship TypeLookupRefers ToContentVersion |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the authorization form consent. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the owner of the account associated with this customer.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of a record showing consent of an authorization form.This is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToAccount, Visit |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the authorization form.Possible values are:RejectedSeenSigned |
| PartyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThis field was removed in API version 47.0. UseConsentGiverId instead. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AuthorizationFormConsentChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 47.0)

Change events are available for the object.

[AuthorizationFormConsentHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AuthorizationFormConsentOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AuthorizationFormConsentShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AuthorizationFormConsentChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- AuthorizationFormConsentHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- AuthorizationFormConsentOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- AuthorizationFormConsentShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
