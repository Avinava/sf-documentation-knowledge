---
title: "ServiceAppointmentStatus"
domain: field-service
topic: serviceappointmentstatus
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:47:12.891Z
keywords: [ServiceAppointmentStatus, Supported, Calls, Special, Access, Rules, Fields, Usage, Important, Note]
---

# ServiceAppointmentStatus

# ServiceAppointmentStatus

Represents a possible status of a service appointment in field service.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe API name of the status value. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates that the status value is the default status on service appointments. Only one status value can be the default. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label for the picklist value that appears in the UI. |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe value’s position in the drop-down list of values in the UI. |
| StatusCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe status category that the value corresponds to. The Status Category field has seven values which are identical to the default Status values. |

## Usage

The Status field on service appointments comes with the following values:

-   None—Default value.
-   Scheduled—Appointment has been assigned to a service resource.
-   Dispatched—Assigned service resource has been notified about their assignment.
-   In Progress—Work has begun.
-   Completed—Work is complete.
-   Cannot Complete—Work could not be completed.
-   Canceled—Work is canceled, typically before any work began
-   CheckedIn—The customer has arrived for their scheduled appointment.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=field_service_dev)

#### Important

While you can set the status to null via the API, setting the status to null returns an error. To prevent errors, use one of the documented picklist values.

The ServiceAppointmentStatus object corresponds to the Status field. Adding a value to the Status field—for example, Waiting—creates a service appointment status record, and vice versa.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

Service appointments also come with a StatusCategory field whose values are identical to the default Status values. If you create custom Status values, you must indicate which category it belongs to. For example, if you create a Customer Absent value, you may decide that it belongs in the Cannot Complete category. To learn which processes reference StatusCategory, see [How are Status Categories Used?](https://help.salesforce.com/articleView?id=fs_status_categories.htm&language=en_US)