---
title: "CommSubscriptionConsent"
domain: object-reference
topic: commsubscriptionconsent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:06.707Z
estimatedTokens: 1912
keywords: [CommSubscriptionConsent, customer’s, consent, communication, subscription, API, version, 48.0, later, Calls, Associated, Objects]
---

# CommSubscriptionConsent

> Represents a customer’s consent to a communication subscription. This
    object is available in API version 48.0 and later.

# CommSubscriptionConsent

Represents a customer’s consent to a communication subscription. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

With certain page layout and field-level security settings, some fields aren't visible or editable.

| Field | Details |
| --- | --- |
| BusinessBrandId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Business Brand that the individual has given consent to for a communication subscription. This is a relationship field. This field is available in API version 53.0 and later.Relationship NameBusinessBrandRelationship TypeLookupRefers ToBusinessBrand |
| CommSubscriptionChannelTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the associated communication subscription channel type record.This is a relationship field.Relationship NameCommSubscriptionChannelTypeRelationship TypeLookupRefers ToCommSubscriptionChannelType |
| ConsentCapturedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRequired. Date when the customer’s consent was captured. |
| ConsentCapturedSource | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. Source through which consent was captured. For example, user@example.com or www.example.com. |
| ConsentGiverId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the person who gave consent to the communication subscription on behalf of the contact point.NoteIf the contact point gave consent, don't use ConsentGiverId.This is a polymorphic relationship field.Relationship NameConsentGiverRelationship TypeLookupRefers ToAccount, Contact, Individual, User |
| ContactPointId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the contact point, such as an Individual or person account, associated with the communication subscription consent.This is a polymorphic relationship field.Relationship NameContactPointRelationship TypeLookupRefers ToContactPointAddress, ContactPointEmail, ContactPointPhone |
| DataUsePurposeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the record for data use purpose that you want to associate this consent with. This field is available in API version 57.0 and later.This is a relationship field.Relationship NameDataUsePurposeRelationship TypeLookupRefers ToDataUsePurpose |
| EffectiveFromDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Date when consent starts. |
| EffectiveToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when consent ends. This field is restricted by field-level security. |
| EngagementChannelTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the contact method you want to apply consent to. This field is available in API version 57.0 and later.This is a relationship field.Relationship NameEngagementChannelTypeRelationship TypeLookupRefers ToEngagementChannelType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of the communication subscription consent record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the account owner associated with this customer.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRepresents the record based on the Individual object that you want to associate consent with. This field is available in API version 57.0 and later.This is a relationship field.Relationship NamePartyRelationship TypeLookupRefers ToIndividual |
| PartyRoleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Party Role for the individual you want to associate consent with. This is a polymorphic relationship field. This field is available in API version 53.0 and later.Relationship NamePartyRoleRelationship TypeLookupRefers ToCustomer, Seller |
| PrivacyConsentStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIdentifies whether the individual or person account associated with this record agrees to this form of contact.Possible values are:NotSeenOptInOptInPending—Available in API version 58.0 and later.OptOutOptOutPending—Available in API version 58.0 and later.SeenThe default value is NotSeen. This field is available in API version 57.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CommSubscriptionConsentChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 49.0)

Change events are available for the object.

[CommSubscriptionConsentFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CommSubscriptionConsentHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CommSubscriptionConsentOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CommSubscriptionConsentShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CommSubscriptionConsentChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- CommSubscriptionConsentFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- CommSubscriptionConsentHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- CommSubscriptionConsentOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CommSubscriptionConsentShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
