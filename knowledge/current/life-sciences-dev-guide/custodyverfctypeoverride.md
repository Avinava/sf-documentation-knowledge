---
title: "CustodyVerfcTypeOverride"
domain: life-sciences-dev-guide
topic: custodyverfctypeoverride
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:45.729Z
estimatedTokens: 1450
keywords: [CustodyVerfcTypeOverride, verification, entry, chain, custody, API, version, 59.0, later, Calls, Associated, Objects]
---

# CustodyVerfcTypeOverride

> Represents information about the verification of an entry in the chain of
         custody. This object is available in API version 59.0 and later.

# CustodyVerfcTypeOverride

Represents information about the verification of an entry in the chain of custody. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CountryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country for which the custody event is configured.This field is a relationship field.Relationship NameCountryRelationship TypeLookupRefers ToGeoCountry |
| CustodyVerificationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of verification required for a custody event.Possible values are:DualSignatureFiveSignaturesFourSignaturesNoSignatureNotApplicableSingleSignatureThreeSignatures |
| DigitalVerificationSetupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe digital verification setup associated with the override.This field is a relationship field.Relationship NameDigitalVerificationSetupRelationship TypeLookupRefers ToDigitalVerificationSetup |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the custody verification override record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the custody verification override record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Priority | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe priority number assigned to the conditions that apply to the custody verification. |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service territory for which custody is being configured.This field is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| TaskName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe task for which the custody event is being configured. |
| WorkProcedureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work procedure for which custody is being configured.This field is a relationship field.Relationship NameWorkProcedureRelationship TypeLookupRefers ToWorkProcedure |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work type for which custody is being configured.This field is a relationship field.Relationship NameWorkTypeRelationship TypeLookupRefers ToWorkType |
| WorkTypeStepId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work type step for which custody is being configured.This field is a relationship field.Relationship NameWorkTypeStepRelationship TypeLookupRefers ToWorkTypeStep |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CustodyVerfcTypeOverrideChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[CustodyVerfcTypeOverrideFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CustodyVerfcTypeOverrideHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CustodyVerfcTypeOverrideOwnerSharingRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CustodyVerfcTypeOverrideShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CustodyVerfcTypeOverrideChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- CustodyVerfcTypeOverrideFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- CustodyVerfcTypeOverrideHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- CustodyVerfcTypeOverrideOwnerSharingRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- CustodyVerfcTypeOverrideShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
