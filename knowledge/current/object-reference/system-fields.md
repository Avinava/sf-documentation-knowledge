---
title: "System Fields"
domain: object-reference
topic: system-fields
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.894Z
estimatedTokens: 1267
keywords: [System, read-only, found, objects, automatically, updated, API, operations, generated, operation, LastModifiedDate, user, modifies, record, Parent]
---

# System Fields

> System fields are read-only fields found on most objects. These fields are
    automatically updated during API operations. For example, the ID field is
    automatically generated during a create operation and the LastModifiedDate
    is automatically updated when a user modifies a record.

# System Fields

System fields are read-only fields found on most objects. These fields are automatically updated during API operations. For example, the ID field is automatically generated during a create operation and the LastModifiedDate is automatically updated when a user modifies a record.

| Field | Field Type | Description |
| --- | --- | --- |
| Id | ID | Globally unique string that identifies a record. For information on IDs, see ID Field Type. Because this field exists in every object, it is not listed in the field table for each object. Id fields have Defaulted on create and Filter access. |
| IsDeleted | boolean | Indicates whether the record has been moved to the Recycle Bin (true) or not (false). |
| LastReferencedDate | dateTime | Date and time when the current user last viewed or modified this record, a record related to this record, or a list view. If this value is null, the current user has never viewed or modified a record related to this object.This field doesn’t exist on records for a custom object unless a custom object tab is created for that object. See Use LastReferencedDate and LastViewedDate fields in a SOQL query. |
| LastViewedDate | dateTime | Date and time when the current user last viewed or modified this record. If this value is null, the current user has never viewed or modified this record.This field doesn’t exist on records for a custom object unless a custom object tab is created for that object. See Use LastReferencedDate and LastViewedDate fields in a SOQL query. |
| Audit Fields |
| CreatedById | reference | ID of the User who created this record. CreatedById fields have Defaulted on create and Filter access. |
| CreatedDate | dateTime | Date and time when this record was created. CreatedDate fields have Defaulted on create and Filter access. |
| LastModifiedById | reference | ID of the User who last updated this record. LastModifiedById fields have Defaulted on create and Filter access. |
| LastModifiedDate | dateTime | Date and time when a user last modified this record. LastModifiedDate fields have Defaulted on create and Filter access. |
| SystemModstamp | dateTime | Date and time when a user or automated process (such as a trigger) last modified this record. In this context, "trigger" refers to Salesforce code that runs to implement standard functionality, and not an Apex trigger. SystemModstamp fields have Defaulted on create and Filter access.NoteIn general, SystemModstamp shows the date and time when a user or automated process last modified the record. However, in certain cases, SystemModstamp doesn’t capture every field change. For example, if object A retrieves values from object B, then the changes to field values in records on object B are reflected in the SystemModstamp field for records on object B, but not on object A. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Audit Fields with the dateTime field type have a certain range of valid dates. Unlike other dateTime fields, the earliest valid date is 1970-01-01T00:00:00Z GMT, or just after midnight on January 1, 1970. The latest valid date is 4000-12-31T00:00:00Z GMT, or just after midnight on December 31, 4000. These values are offset by your time zone. For example, in the Pacific time zone, the earliest valid date is 1969-12-31T16:00:00, or 4:00 PM on December 31, 1969.

If you import data into Salesforce and want to retain the audit field values of the source system, you can set the values for audit fields on the following objects: Account, ArticleVersion, Attachment, CampaignMember, Case, CaseComment, Contact, ContentVersion, Contract, Event, Idea, IdeaComment, Lead, Opportunity, Question, Task, Vote, and custom objects. The only audit field you cannot set a value for is systemModstamp.

1.  From Setup, enter User Interface in the Quick Find box, then select **User Interface** under Customize.
2.  Under Setup, select **Enable “Set Audit Fields upon Record Creation” and “Update Records with Inactive Owners” User Permissions**.
3.  In the permission set or profile that you want to set audit fields with, enable the permission **Set Audit Fields upon Record Creation**.
4.  Using the API, create a record and set its audit fields.

Not all standard objects have all audit fields. Check the Enterprise WSDL to verify which audit fields are available for a given object.

## Parent Reference Fields

If an object has a relationship to a parent object, two fields are added.

-   Parent\_Name contains the object name of the parent. For example, Case has a Contact field that contains a reference to the contact parent of the case.
-   Parent\_NameId contains the ID of the parent. For example, Case has a ContactId field that refers to the contact parent of the case. This field is used in SOQL relationship queries such as the following:

    ```

    ```


Even if the object can parent itself, these fields occur. For example, the Campaign object has a CampaignName and CampaignId field for referencing the parent Campaign.

## Code Examples

```
SELECT Case.ContactId, Case.Contact.Name FROM Case
```

## Related Topics

- ID
                Field Type (atlas.en-us.object_reference.meta/object_reference/field_types.htm)
- Defaulted on create (atlas.en-us.object_reference.meta/object_reference/access_for_fields.htm)
- Filter (atlas.en-us.object_reference.meta/object_reference/access_for_fields.htm)
- boolean (atlas.en-us.object_reference.meta/object_reference/primitive_data_types.htm)
- dateTime (atlas.en-us.object_reference.meta/object_reference/primitive_data_types.htm)
- reference (atlas.en-us.object_reference.meta/object_reference/field_types.htm)
