---
title: "DynamicDataCapture"
domain: object-reference
topic: dynamicdatacapture
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.303Z
estimatedTokens: 1357
keywords: [DynamicDataCapture, junction, adds, Form, tab, Work, Order, line, item, service, appointment, mobile, app, API, version]
---

# DynamicDataCapture

> DynamicDataCapture is a junction object that adds a Form tab to Work Order
         Overview, and to the related list of a work order, work order line item, or service
         appointment in the Field Service mobile app.  This object is available in API version
      62.0 and later.

# DynamicDataCapture

DynamicDataCapture is a junction object that adds a Form tab to Work Order Overview, and to the related list of a work order, work order line item, or service appointment in the Field Service mobile app. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionDefinition | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe associated Data Capture Flow to execute. |
| ActionType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of platform action that the form is associated with. Possible values are:Possible values are:FlowThe default value is Flow. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the form. |
| ExecutionOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order in which the Data Capture flow is executed. Positive integer values or null are supported. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionBoolean value that specifies if this form needs to be completed before moving on to the next form. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe order in which the Data Capture flow is executed. Positive integer values or null are supported. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the form. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID that refers to user who owns the Dynamic Data Capture object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToServiceAppointment, WorkOrder, WorkOrderLineItem (the parent object), Timesheet |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID that refers to a work order, work order line item, or service appointment that serves as the parent record for junction object.This field is a polymorphic relationship field.Relationship NameParentRecordRelationship TypeParent-childRefers ToServiceAppointment, WorkOrder, WorkOrderLineItem (the parent object) |
| ParentRecordType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of parent object associated with the junction object.Possible values are:Work OrderWork Order Line ItemService Appointment |
| PausedFlowInterviewId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the flow interview that has been paused by a user.This field is a relationship field.Relationship NamePausedFlowInterviewRefers ToFlowInterview |
| ProcessType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe flow process type for the form.Possible values are:DataCaptureFlow—Data Capture FlowThe default value is DataCaptureFlow. |
| ServiceDocumentTemplate | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| ServiceReportLanguage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescription |
| StatusCategory | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe category that each status value belongs to.Possible values are:CompletedInProgress—In ProgressNewNotApplicable—Not ApplicablePausedThe default value is New. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DynamicDataCaptureChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")(API Version 64.0)

Change events are available for the object.

[DynamicDataCaptureOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API Version 64.0)

Sharing rules are available for the object.

[DynamicDataCaptureShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API Version 64.0)

Sharing is available for the object.

## Related Topics

- DynamicDataCaptureChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- DynamicDataCaptureOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- DynamicDataCaptureShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
