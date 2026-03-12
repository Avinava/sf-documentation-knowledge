---
title: "AuthorizationFormText"
domain: object-reference
topic: authorizationformtext
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.347Z
estimatedTokens: 980
keywords: [AuthorizationFormText, authorization, form’s, text, language, settings, API, version, 46.0, later, Calls, Special, Access, Rules, Associated]
---

# AuthorizationFormText

> Represents an authorization form’s text and language settings.
		This object is available in API version 46.0 and later.

# AuthorizationFormText

Represents an authorization form’s text and language settings. This object is available in API version 46.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Data Protection and Privacy is enabled.

## Fields

| Field Name | Details |
| --- | --- |
| AuthorizationFormId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the associated authorization form record.This is a relationship field.Relationship NameAuthorizationFormRelationship TypeLookupRefers ToAuthorizationForm |
| ContentDocumentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ContentDocument that provides the authorization form’s text.This is a relationship field.Relationship NameContentDocumentRelationship TypeLookupRefers ToContentDocument |
| DetailAuthorizationFormText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA detailed version of the authorization form. |
| FullAuthorizationFormUrl | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL where the full text of the authorization form is located. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Locale | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code that control the language of the authorization form text. Locale and LocaleSelection have the same function.NoteLocale can contain custom values not included in the picklist if added before version 47.0. |
| LocaleSelection | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code that control the language of the authorization form text. Locale and LocaleSelection have the same function. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the authorization form text. |
| SummaryAuthFormText | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA shortened version of the authorization form that is displayed to the user. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[AuthorizationFormTextChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

[AuthorizationFormTextHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AuthorizationFormTextChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- AuthorizationFormTextHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
