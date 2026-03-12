---
title: "Custom Object __c __c"
domain: object-reference
topic: custom-object-c-c
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.642Z
estimatedTokens: 1431
keywords: [Custom, __c, Calls]
---

# Custom Object __c __c

> Represents a custom object.

# Custom Object \_\_c \_\_c

Represents a custom object.

The custom object name is a variable with the syntax Custom Object\_\_c, where Custom Object is the object’s Name associated with the record, followed by two underscores and c. For example, a custom object labeled “Issue” in the Salesforce user interface is Issue\_\_c in that organization’s WSDL.

System fields and properties behave the same on custom objects as they do on standard objects, unless otherwise noted in the following details.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ConnectionReceivedId | TypereferencePropertiesFilter, NillableDescriptionID of the PartnerNetworkConnection that shared this record with your organization. This field is available if you enabled Salesforce to Salesforce. |
| ConnectionSentId | TypereferencePropertiesFilter, NillableDescriptionID of the PartnerNetworkConnection that you shared this record with. This field is available if you enabled Salesforce to Salesforce. This field is supported using API versions earlier than 15.0. In all other API versions, this field’s value is null. You can use the new PartnerNetworkRecordConnection object to forward records to connections. |
| CreatedById | TypereferencePropertiesAggregatable, Defaulted on create, Filter, Group, SortDescriptionID of the User who created this record. |
| CreatedDate | TypedateTimePropertiesAggregatable, Defaulted on create, Filter, SortDescriptionDate and time when this record was created. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on createFilter, Group, Restricted picklist, SortDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| Id | TypeIdPropertiesAggregatable, Defaulted on create, Filter, Group, idLookup, SortDescriptionGlobally unique string that identifies a record. For information on IDs, see ID Field Type. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| LastActivityDate | TypedateTimePropertiesFilter, Group, Nillable, SortDescriptionValue is one of the following, whichever is the most recent:Due date of the most recent event logged against the object.Due date of the most recently closed task associated with the object. |
| LastModifiedDate | TypedateTimePropertiesAggregatable, Defaulted on create, Filter, SortDescriptionDate and time when a user last modified this record. |
| LastModifiedById | TypereferencePropertiesAggregatable, Defaulted on create, Filter, Group, SortDescriptionID of the User who last updated this object. |
| LastReferencedDate | TypedateTimePropertiesAggregatable, Filter, Sort, NillableDescriptionDate and time when the current user last viewed or modified this record, a record related to this record, or a list view. If this value is null, the current user has never viewed or modified a record related to this object.This field doesn’t exist on records for a custom object unless a custom object tab is created for that object. See Use LastReferencedDate and LastViewedDate fields in a SOQL query. |
| LastViewedDate | TypedateTimePropertiesAggregatable, Filter, Sort, NillableDescriptionDate and time when the current user last viewed or modified this record. If this value is null, the current user has never viewed or modified this record.This field doesn’t exist on records for a custom object unless a custom object tab is created for that object. See Use LastReferencedDate and LastViewedDate fields in a SOQL query. |
| Name | TypestringPropertiesAggregatable, Create, Defaulted on create, Filter, Group, idLookup, Sort, UpdateDescriptionLabel is Object Name. Name of the object. Maximum size is 80 characters.When the object is created using an API update() call, and the Name field is null, Salesforce sets the value to the record ID. When the object is created using an API create() call, Salesforce sets the initial value to the record ID. You can’t set the Name field to null. |
| OwnerId | TypereferencePropertiesAggregatable, Create, Defaulted on create, Filter, Group, Namepointing, Sort, UpdateDescriptionThe ID of the user who currently owns this object. Default value is the user logged in to the API to perform the create() call. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionID of the record type assigned to this object. Create at least one record type before this field appears for custom or standard objects. |
| SystemModStamp | TypedateTimePropertiesAggregatable, Defaulted on create, Filter, SortDescriptionDate and time when a user or automated process such as a trigger last modified this record. In this context, trigger refers to Salesforce code that runs to implement standard functionality, and not an Apex trigger. |

#### See Also

-   [System Fields](atlas.en-us.object_reference.meta/object_reference/system_fields.htm "System fields are read-only fields found on most objects. These fields are automatically updated during API operations. For example, the ID field is automatically generated during a create operation and the LastModifiedDate is automatically updated when a user modifies a record.")

-   [Field Types](atlas.en-us.object_reference.meta/object_reference/field_types.htm "In addition to the primitive data types, the API defines the following data types for fields.")

-   [API Field Properties](atlas.en-us.object_reference.meta/object_reference/access_for_fields.htm)

## Related Topics

- User (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_user.htm)
- ID Field Type (atlas.en-us.object_reference.meta/object_reference/field_types.htm)
- System Fields (atlas.en-us.object_reference.meta/object_reference/system_fields.htm)
- Field Types (atlas.en-us.object_reference.meta/object_reference/field_types.htm)
- API Field Properties (atlas.en-us.object_reference.meta/object_reference/access_for_fields.htm)
