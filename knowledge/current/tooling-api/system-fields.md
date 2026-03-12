---
title: "System Fields"
domain: tooling-api
topic: system-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:47.196Z
estimatedTokens: 475
keywords: [System, Fields, fields, system-generated., They, most, Tooling, API, objects, read-only.]
---

# System Fields

> Some fields are system-generated. They are on most Tooling API objects, and are
    read-only.

# System Fields

Some fields are system-generated. They are on most Tooling API objects, and are read-only.

These fields are automatically updated during API operations. For example, the Id field is automatically generated when a record is created, and the LastModifiedDate is automatically updated during any operation on an object.

| Field | Field Type | Description |
| --- | --- | --- |
| Id | ID | Globally unique string that identifies a record. Id fields have Defaulted on create and Filter access. |
| IsDeleted | boolean | Indicates whether the record has been moved to the Recycle Bin (true) or not (false). Because this field does not appear in all objects, it is listed in the field table for each object. |
| CreatedBy | User | The user who created the record. CreatedBy fields have Defaulted on create, Filter, Group, and Sort access. |
| CreatedById | reference | ID of the User who created this record. CreatedById fields have Defaulted on create, Filter, Group, and Sortaccess. |
| CreatedDate | dateTime | Date and time when this record was created. CreatedDate fields have Defaulted on create, Filter, and Sort access. |
| LastModifiedBy | User | The user who last modified this record. LastModifiedBy fields have Defaulted on create, Filter, Group, and Sort access. |
| LastModifiedById | reference | ID of the User who last updated this record. LastModifiedById fields have Defaulted on create, Filter, Group, and Sortaccess. |
| LastModifiedDate | dateTime | Date and time when a user last modified this record. LastModifiedDate fields have Defaulted on create, Filter, and Sort access. |
| SystemModstamp | dateTime | Date and time when this record was last modified by a user or by an automated process (such as a trigger). SystemModstamp fields have Defaulted on create and Filter access. |

To verify which fields are available for an object, check the Tooling API WSDL.
