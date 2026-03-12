---
title: "PartyCreditProfileAlert"
domain: automotive-cloud
topic: partycreditprofilealert
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.384Z
estimatedTokens: 796
keywords: [PartyCreditProfileAlert, alerts, triggers, raised, against, borrower's, credit, activities, sudden, score, changes, new, accounts, payment, defaults]
---

# PartyCreditProfileAlert

> Represents the alerts and triggers raised against a borrower's credit
         activities, such as sudden score changes, new accounts, and payment defaults. Aids in
         detecting fraud, identifying borrower errors, and facilitating verification processes.
      This object is available in API version 65.0 and later.

# PartyCreditProfileAlert

Represents the alerts and triggers raised against a borrower's credit activities, such as sudden score changes, new accounts, and payment defaults. Aids in detecting fraud, identifying borrower errors, and facilitating verification processes. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the alert. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| PartyCreditProfileId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe party credit profile associated with the alert.This field is a relationship field.Relationship NamePartyCreditProfileRelationship TypeMaster-detailRefers ToPartyCreditProfile (the master object) |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of alert.Possible values are:Address MismatchFraudIdentity MismatchOFAC |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyCreditProfileAlertChangeEvent](atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[PartyCreditProfileAlertHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[PartyCreditProfileAlertOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[PartyCreditProfileAlertShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

## Related Topics

- PartyCreditProfileAlertChangeEvent (atlas.en-us.automotive_cloud.meta/automotive_cloud/sforce_api_associated_objects_change_event.htm)
