---
title: "HealthcareFacilityNetwork"
domain: life-sciences-dev-guide
topic: healthcarefacilitynetwork
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.977Z
estimatedTokens: 1773
keywords: [HealthcareFacilityNetwork, junction, identifying, insurance, network, location, business, entity, part, participation, records, stored, Calls, Associated, Objects]
---

# HealthcareFacilityNetwork

> Represents a junction object identifying the insurance network that a
			location or business entity is a part of. Network participation records are also stored
			in this object.

# HealthcareFacilityNetwork

Represents a junction object identifying the insurance network that a location or business entity is a part of. Network participation records are also stored in this object.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount associated with this facility network. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the facility network. |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which this facility network is effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which this facility network is no longer effective. |
| GenderRestriction | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether this facility network only applies to male or female patients or members instead of all patients or members. |
| HealthcareFacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the HealthcareFacility record associated with the network. Use this field if the associated provider is a business account.This is a relationship field.Relationship TypeLookupRefers ToHealthcareFacility |
| HealthcareProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHealthcare provider associated with this facility network.Relationship TypeLookupRefers ToHealthcareProvider |
| HighestValidAge | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the highest age of patient that this facility network is applicable for. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is active. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LowestValidAge | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the lowest age of patient that this facility network is applicable for. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the facility network record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. |
| PanelLimit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the maximum number of patients in the practitioner's panel for this payer network and practitioner location. |
| PanelStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the practitioner is accepting new patients based on the status of their patient panel. |
| PayerNetworkId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPayer network associated with this facility network. |
| PractitionerFacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPractitioner facility associated with this facility network. Use this field if the provider associated with the network is an individual practitioner. |
| PractitionerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual practitioner associated with the facility network. |
| ProviderNetworkContractId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionProvider network contract associated with this facility networkThis is a relationship field.Relationship TypeLookupRefers ToProviderNetworkContract |
| ProviderNetworkTierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionProvider network tier associated with this facility network.This is a relationship field.Relationship TypeLookupRefers ToProviderNetworkTier |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem from which the record was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the system from which the record was sourced. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[HealthcareFacilityNetworkChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[HealthcareFacilityNetworkFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[HealthcareFacilityNetworkHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[HealthcareFacilityNetworkOwnerSharingRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[HealthcareFacilityNetworkShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- HealthcareFacilityNetworkChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- HealthcareFacilityNetworkFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- HealthcareFacilityNetworkHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- HealthcareFacilityNetworkOwnerSharingRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- HealthcareFacilityNetworkShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
