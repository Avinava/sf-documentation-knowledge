---
title: "ContactPointConsent"
domain: object-reference
topic: contactpointconsent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.917Z
estimatedTokens: 1538
keywords: [ContactPointConsent, customer's, consent, contacted, via, specific, contact, point, email, address, phone, number, API, version, 48.0]
---

# ContactPointConsent

> Represents a customer's consent to be contacted via a specific contact point,
      such as an email address or phone number. This object is available in API version 48.0
    and later.

# ContactPointConsent

Represents a customer's consent to be contacted via a specific contact point, such as an email address or phone number. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

With certain page layout and field-level security settings, some fields aren't visible or editable.

| Field | Details |
| --- | --- |
| BusinessBrandId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Business Brand that the individual has given consent to for a contact point. This is a relationship field. This field is available in API version 53.0 and later.Relationship NameBusinessBrandRelationship TypeLookupRefers ToBusinessBrand |
| CaptureContactPointType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. Indicates how you captured consent.Possible values are:EmailMailingAddressPhoneSocialWeb |
| CaptureDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRequired. Date when consent was captured. |
| CaptureSource | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. Indicates how you captured consent. For example, a website or online form. |
| ContactPointId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the contact point record through which the customer is consenting to be contacted.This is a polymorphic relationship field.Relationship NameContactPointRelationship TypeLookupRefers ToContactPointAddress, ContactPointEmail, ContactPointPhone |
| DataUsePurposeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the data use purpose record that you want to associate this consent with.This is a relationship field.Relationship NameDataUsePurposeRelationship TypeLookupRefers ToDataUsePurpose |
| DoubleConsentCaptureDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when double opt-in was captured. |
| EffectiveFrom | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when consents starts. |
| EffectiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when consent ends. |
| EngagementChannelTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the engagement channel record through which the customer is consenting to be contacted. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the contact point type consent record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the account owner associated with this customer.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartyRoleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Party Role for the individual you want to associate consent with. This is a polymorphic relationship field. This field is available in API version 53.0 and later.Relationship NamePartyRoleRelationship TypeLookupRefers ToCustomer, Seller |
| PrivacyConsentStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Identifies whether the individual or person account associated with this record agrees to this form of contact.Possible values are:NotSeenOptInOptInPending—Available in API version 58.0 and later.OptOutSeen |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContactPointConsentChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ContactPointConsentHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ContactPointConsentOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ContactPointConsentShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ContactPointConsentChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ContactPointConsentHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ContactPointConsentOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ContactPointConsentShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
