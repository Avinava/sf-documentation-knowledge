---
title: "HealthcareProvider"
domain: psc-api
topic: healthcareprovider
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.912Z
estimatedTokens: 1984
keywords: [HealthcareProvider, business-level, provider, organization, practitioner, Calls, Special, Access, Rules, Associated, Objects]
---

# HealthcareProvider

> Represents business-level details about the provider organization or the
         practitioner.

# HealthcareProvider

Represents business-level details about the provider organization or the practitioner.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Provider Management is enabled in your org. To access the object, you need the Provider Management Access permission set or the Provider Management permission set license. Partner users need the Provider Management for Partner permission set or permission set license.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount that this healthcare provider is associated with.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| CaqhIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionProvider's unique ID assigned by the Council for Affordable Quality Healthcare (CAQH).Available only if View Healthcare Details is enabled under Provider Management Settings. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the service provider. |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which this provider is effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which this provider is no longer effective. |
| EhrSystem | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionName of the EHR system used at this facility or organization.Available only if View Healthcare Details is enabled under Provider Management Settings. |
| InitialStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate that the facility first became operational or the practitioner first started practicing. |
| IsNotSearchable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionExclude this provider from search results.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of the provider. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PractitionerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPractitioner that this healthcare provider record is associated with.This field is a relationship field.Relationship NamePractitionerRelationship TypeLookupRefers ToContact |
| ProviderClass | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionClass of facility, such as a provider organization, provider employee, or individual provider.Possible values are:Individual ProviderProvider EmployeeProvider Org |
| ProviderPhotoId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Content Document file that is a photo of the Healthcare Provider. This field is a relationship field.This field is a relationship field.Relationship NameProviderPhotoRelationship TypeLookupRefers ToContentDocument |
| ProviderType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of provider or facility.Possible values are:At Home Service ProviderHospitalMedical DoctorOnsite Service ProviderTransportation Service ProviderVirtual Service Provider |
| ReferredByContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionProvider that originated the referral.This field is a relationship field.Relationship NameReferredByContactRelationship TypeLookupRefers ToContact |
| RelatedUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe User record that relates to the Healthcare Provider record. This field is a relationship field.This field is a relationship field.Relationship NameRelatedUserRelationship TypeLookupRefers ToUser |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem from which the record was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID of the system from which the record was sourced. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCurrent status of the provider.Possible values are:ActiveInactivePending |
| TerminationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTermination date for this provider. |
| TerminationReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReason for termination. |
| TotalLicensedBeds | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTotal number of licensed beds at this facility, if applicable.Available only if View Healthcare Details is enabled under Provider Management Settings. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[HealthcareProviderChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 59.0)

Change events are available for the object.

[HealthcareProviderFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[HealthcareProviderHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[HealthcareProviderOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[HealthcareProviderShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- HealthcareProviderChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- HealthcareProviderFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- HealthcareProviderHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- HealthcareProviderOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- HealthcareProviderShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
