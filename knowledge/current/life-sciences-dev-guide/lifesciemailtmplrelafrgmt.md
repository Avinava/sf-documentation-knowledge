---
title: "LifeSciEmailTmplRelaFrgmt"
domain: life-sciences-dev-guide
topic: lifesciemailtmplrelafrgmt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.333Z
estimatedTokens: 939
keywords: [LifeSciEmailTmplRelaFrgmt, connectors, link, email, templates, fragments, together, API, version, 65.0, later, Calls, Associated, Objects]
---

# LifeSciEmailTmplRelaFrgmt

> Represents the connectors that link email templates and fragments
         together. This object is available in API version 65.0 and later.

# LifeSciEmailTmplRelaFrgmt

Represents the connectors that link email templates and fragments together. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LifeSciEmailTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. Indicates which life science email template is associated with the record.This field is a relationship field.Relationship NameLifeSciEmailTemplateRelationship TypeMaster-detailRefers ToLifeSciEmailTemplate (the detail object) |
| LifeSciEmailTmplFragmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. Indicates which life science email template fragment is associated with the record.This field is a relationship field.Relationship NameLifeSciEmailTmplFragmentRelationship TypeMaster-detailRefers ToLifeSciEmailTmplFragment (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. An automatically generated unique identifier for the record in the format ETF-{0000000000}. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LifeSciEmailTmplRelaFrgmtChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[LifeSciEmailTmplRelaFrgmtFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LifeSciEmailTmplRelaFrgmtHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LifeSciEmailTmplRelaFrgmtChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- LifeSciEmailTmplRelaFrgmtFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- LifeSciEmailTmplRelaFrgmtHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
