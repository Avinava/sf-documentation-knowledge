---
title: "CarePgmProvHealthcareProvider"
domain: life-sciences-dev-guide
topic: carepgmprovhealthcareprovider
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.304Z
estimatedTokens: 1003
keywords: [CarePgmProvHealthcareProvider, junction, identifying, primary, healthcare, professional, associated, care, program, provider, look, professionals, providers, API, version]
---

# CarePgmProvHealthcareProvider

> Represents a junction object identifying the primary healthcare professional
      associated with a care program provider and to look up all healthcare professionals for care
      program providers.  This object is available in API version 49.0 and later.

# CarePgmProvHealthcareProvider

Represents a junction object identifying the primary healthcare professional associated with a care program provider and to look up all healthcare professionals for care program providers. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareProgramProviderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the care program provider that is associated with the healthcare provider (healthcare professional). |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when this association record is effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when this association record is no longer effective. |
| HealthcareProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the healthcare provider (healthcare professional) that is associated with the care program provider. |
| IsPrimaryProvider | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the healthcare provider (healthcare professional) is the primary provider for the care program provider. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for this association between a care program provider and a healthcare provider (healthcare professional). |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system from which the record was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the system from which the record was sourced. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[CarePgmProvHealthcareProviderChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[CarePgmProvHealthcareProviderFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CarePgmProvHealthcareProviderHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CarePgmProvHealthcareProviderChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- CarePgmProvHealthcareProviderFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- CarePgmProvHealthcareProviderHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
