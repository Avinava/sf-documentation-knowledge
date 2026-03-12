---
title: "CmplControlVersionTest"
domain: omnistudio
topic: cmplcontrolversiontest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.703Z
estimatedTokens: 598
keywords: [CmplControlVersionTest, Represents, association, between, Compliance, Control, Version, Test., API, version, 66.0, later., Supported, Calls, Fields, Associated, Objects]
---

# CmplControlVersionTest

> Represents the association between a Compliance Control Version and
         Compliance Control Test. This object is available in API version 66.0 and later.

# CmplControlVersionTest

Represents the association between a Compliance Control Version and Compliance Control Test. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ComplianceControlVersionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the associated compliance control version.This field is a relationship field.Relationship NameComplianceControlVersionRelationship TypeMaster-detailRefers ToComplianceControlVersion (the master object) |
| ComplianceTestId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the associated compliance test.This field is a relationship field.Relationship NameComplianceTestRefers ToComplianceTest |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the compliance control version test. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CmplControlVersionTestChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CmplControlVersionTestHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CmplControlVersionTestChangeEvent (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)
- CmplControlVersionTestHistory (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)
