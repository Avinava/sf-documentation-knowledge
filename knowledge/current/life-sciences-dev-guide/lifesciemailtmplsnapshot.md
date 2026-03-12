---
title: "LifeSciEmailTmplSnapshot"
domain: life-sciences-dev-guide
topic: lifesciemailtmplsnapshot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.345Z
estimatedTokens: 1256
keywords: [LifeSciEmailTmplSnapshot, Stores, different, versions, email, template, tracking, purposes, API, version, 65.0, later, Calls, Associated, Objects]
---

# LifeSciEmailTmplSnapshot

> Stores the different versions of an email template for tracking
         purposes. This object is available in API version 65.0 and later.

# LifeSciEmailTmplSnapshot

Stores the different versions of an email template for tracking purposes. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivatedDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The date when the template version is activated. Template version becomes active immediately after uploading. |
| CalendarFileDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description to include in the .ics attachment that's sent with the email. |
| DeactivatedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the template version is deactivated. The template version becomes inactive when a new version is uploaded. |
| EmailBody | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe body of the email template, when the email is an invitation. |
| EmailSubject | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The email subject. |
| EmailTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The related email template.This field is a relationship field.Relationship NameEmailTemplateRelationship TypeMaster-detailRefers ToLifeSciEmailTemplate (the master object) |
| FileIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique key that identifies email templates files for retrieval when stored in Content Document records. |
| FileName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email template .zip file name. |
| Language | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe combined language and locale ISO code, which controls the language of the LifeSciEmailTmplSnapshot. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. An automatically generated unique identifier for the record in the format ET-{0000000000}. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Determines if the email template version is active or inactive.Possible values are:ActiveInactive |
| VersionNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The version of the email template. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LifeSciEmailTmplSnapshotChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[LifeSciEmailTmplSnapshotFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LifeSciEmailTmplSnapshotHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LifeSciEmailTmplSnapshotChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- LifeSciEmailTmplSnapshotFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- LifeSciEmailTmplSnapshotHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
