---
title: "ContactPointTypeConsent"
domain: object-reference
topic: contactpointtypeconsent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:06.954Z
estimatedTokens: 1674
keywords: [ContactPointTypeConsent, consent, contact, point, email, phone, API, version, 45.0, later, Calls, Special, Access, Rules, Associated]
---

# ContactPointTypeConsent

> Represents consent for a contact point type, such as email or
			phone. This object is available in API version 45.0 and later.

# ContactPointTypeConsent

Represents consent for a contact point type, such as email or phone. This object is available in API version 45.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Data Protection and Privacy is enabled.

## Fields

With certain page layout and field-level security settings, some fields aren't visible or editable.

| Field Name | Details |
| --- | --- |
| BusinessBrandId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Business Brand that the individual has given consent to for a contact point type. this is a relationship field. This field is available in API version 53.0 and later.Relationship NameBusinessBrandRelationship TypeLookupRefers ToBusinessBrand |
| CaptureContactPointType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. Indicates how you captured consent. Possible values are:EmailMailingAddressPhoneSocialWeb |
| CaptureDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRequired. Date when consent was captured. |
| CaptureSource | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. Indicates how you captured consent. For example, a website or online form. |
| ContactPointType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. Represents the contact method you want to apply consent to. Possible values are:EmailMailingAddressPhoneSocialWeb |
| DataUsePurposeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the record for data use purpose that you want to associate this consent with.This is a relationship field.Relationship NameDataUsePurposeRelationship TypeLookupRefers ToDataUsePurpose |
| DoubleConsentCaptureDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when double opt-in was captured. |
| EffectiveFrom | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when consents starts. |
| EffectiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when consent ends. |
| EngagementChannelType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired if a ContactPointType isn’t selected. Represents the contact method you want to apply consent to. Possible values are:BillboardEmailMailingAddressPhoneSMSSocialWebThis is a relationship field.Relationship NameEngagementChannelTypeRelationship TypeLookupRefers ToEngagementChannelType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the contact point type consent record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the account associated with this customer.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Represents the record based on the Individual object you want to associate consent with.This is a relationship field.Relationship NamePartyRelationship TypeLookupRefers ToIndividual |
| PartyRoleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Party Role for the individual you want to associate consent with. This is a polymorphic relationship field. This field is available in API version 53.0 and later.Relationship NamePartyRoleRelationship TypeLookupRefers ToCustomer, Seller |
| PrivacyConsentStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Identify whether the individual associated with this record agrees to this form of contact. Possible values are:NotSeenSeenOptInOptInPending—Available in API version 58.0 and later.OptOutOptOutPending—Available in API version 58.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContactPointConsentChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 47.0)

Change events are available for the object.

[ContactPointTypeConsentHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ContactPointTypeConsentOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ContactPointTypeConsentShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ContactPointConsentChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ContactPointTypeConsentHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ContactPointTypeConsentOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ContactPointTypeConsentShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
