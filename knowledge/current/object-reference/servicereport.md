---
title: "ServiceReport"
domain: object-reference
topic: servicereport
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.852Z
estimatedTokens: 1224
keywords: [ServiceReport, report, summarizes, work, order, line, item, service, appointment, Calls, Special, Access, Rules, Associated, Objects]
---

# ServiceReport

> Represents a report that summarizes a work order, work order line
			item, or service appointment.

# ServiceReport

Represents a report that summarizes a work order, work order line item, or service appointment.

The fields that appear on a service report are determined by its service report template. Service reports can be signed by the customer and shared as a PDF.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()update( )

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| ContentVersionDocumentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the service report version, used for storage. |
| DocumentBody | Typebase64PropertiesCreate, NillableDescriptionThe report output. DocumentBody can’t be retrieved via REST API. |
| DocumentContentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of data used for the report output.. Possible values are:audio/oggtext/calendarvideo/3gpp2video/3gppimage/aviftext/calendaraudio/x-cafimage/webp |
| DocumentLength | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe length of the report output. |
| DocumentName | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe name of the report output, always set to Service Report. |
| DocumentTemplate | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe template used to generate service documents for the Document Builder feature.ImportantDocumentTemplate is different from Template. The document template needs to reference a flexipage that is of type serviceDocument and must target the object used to generate the service document. For example, you can't use an Account flexipage for a service report tied to a work order. |
| IsSigned | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the service report contains one or more signatures. This field isn’t supported for Document Builder.TipAdd this field to the Service Reports related list on work orders, work order line items, and service appointments. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the service appointment, work order, or work order line item that the service report summarizes. For example, if you click Create Service Report on a service appointment, this field lists the service appointment’s record ID. |
| ServiceReportLanguage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, Restricted picklistDescriptionThe language used for the service report. The language is selected in the ServiceReportLanguage field on the associated work order. If the work order doesn’t specify a service report language, the report is translated in the default language in Salesforce of the person generating the report. |
| ServiceReportNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionAn auto-generated number identifying the service report. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the service report. Available in API version 53.0 and later.Possible values are:CompletedFailedGeneratingIn ProgressNoneQueuedThe default value is None. |
| Template | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe service report template used to generate the service report.NoteIf the person creating the service report doesn’t have access to certain objects or fields that are included in the service report template, those fields aren’t visible in the report they create. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ServiceReportChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object. Available in API version 55.0 and later.

[ServiceReportHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ServiceReportChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ServiceReportHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
