---
title: "CustomFieldMember"
domain: tooling-api
topic: customfieldmember
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.143Z
estimatedTokens: 474
keywords: [CustomFieldMember, working, copy, editing, saving, MetadataContainer, API, version, 33.0, later, SOAP, Calls, REST, HTTP, Special]
---

# CustomFieldMember

> Represents the working copy of a field for editing or saving in a
   MetadataContainer. This object is available in API version 33.0 and later.

# CustomFieldMember

Represents the working copy of a field for editing or saving in a MetadataContainer. This object is available in API version 33.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API HTTP Methods

Query, GET, POST, PATCH, DELETE

## Special Access Rules

To access CustomFieldMember, you must have both the View All Data and Customize Application user permissions.

## Fields

| Field Name | Details |
| --- | --- |
| Content | TypestringPropertiesNoneDescriptionA string representation of CustomField that contains the field’s metadata. |
| ContentEntityId | TypeIDPropertiesCreate, Filter, Group, SortDescriptionA reference to a custom field.There can be only one ContentEntityId per CustomField, otherwise, an error is reported. |
| FullName | TypestringPropertiesGroup, NillableDescriptionThe full name of the associated object in the Metadata API. Use to avoid race conditions on create, before you have IDs.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsDeleted | TypebooleanPropertiesGroup, NillableDescriptionIndicates whether the object is marked as deleted (true) or not (false). |
| LastSyncDate | TypedateTimePropertiesFilter, SortDescriptionThe date that this CustomField was replicated from the underlying entity. |
| Metadata | TypeCustomFieldPropertiesNoneDescriptionAn object that describes the version, status, and packaged versions of the corresponding CustomField.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
