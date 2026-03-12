---
title: "EmbeddedServiceFieldService"
domain: metadata-api
topic: embeddedservicefieldservice
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:38.866Z
estimatedTokens: 719
keywords: [EmbeddedServiceFieldService, setup, node, creating, embedded, Appointment, Management, deployment, extends, Metadata, inherits, fullName, File, Suffix, Directory]
---

# EmbeddedServiceFieldService

> Represents a setup node for creating an
      embedded Appointment Management deployment.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# EmbeddedServiceFieldService

Represents a setup node for creating an embedded Appointment Management deployment. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

EmbeddedServiceFieldService components are stored in a developer\_name.EmbeddedServiceFieldService file in the EmbeddedServiceFieldService folder.

## Version

EmbeddedServiceFieldService is available in API version 43.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| appointmentBookingFlowName | string | Name of the appointment booking flow for this embedded Appointment Management (beta) deployment. |
| cancelApptBookingFlowName | string | Name of the appointment cancellation flow for this embedded Appointment Management (beta) deployment. |
| embeddedServiceConfig | string | Required. The name of the Embedded Service configuration node. |
| enabled | boolean | Required. Indicates whether this embedded Appointment Management deployment is enabled (true). |
| fieldServiceConfirmCardImg | string | URL of the image used for the confirmation card in embedded Appointment Management (beta). |
| fieldServiceHomeImg | string | URL of the image used for the home screen in embedded Appointment Management (beta). |
| fieldServiceLogoImg | string | URL of the logo used for the home screen in embedded Appointment Management (beta). |
| masterLabel | string | Required. Name of the embedded Appointment Management (beta) deployment. |
| modifyApptBookingFlowName | string | Name of the appointment modification flow for this embedded Appointment Management (beta) deployment. |
| shouldShowExistingAppointment | boolean | Specifies whether to display a button on the home screen for customers to access their existing appointments (true) or not (false). This field is false by default. |
| shouldShowNewAppointment | boolean | Specifies whether to display a button on the home screen for customers to create a new appointment (true) or not (false). This field is false by default. |

## Declarative Metadata Sample Definition

The following is an example of an EmbeddedServiceFieldService file.

```

```

## Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Any changes you make to the image fields override what you’ve entered in Setup. We recommend setting your image URLs in Setup.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<EmbeddedServiceFieldService xmlns="http://soap.sforce.com/2006/04/metadata">
    <appointmentBookingFlowName>ESW_FS_BookAppt_Main_Flow</appointmentBookingFlowName>
    <cancelApptBookingFlowName>ESW_FS_CancelAppt_Flow</cancelApptBookingFlowName>
    <embeddedServiceConfig>EswFS</embeddedServiceConfig>
    <enabled>true</enabled>
    <fieldServiceConfirmCardImg>https://google.com/AppointmentConfirmationImg.png</fieldServiceConfirmCardImg>
    <fieldServiceHomeImg>https://google.com/HeroImg.png</fieldServiceHomeImg>
    <fieldServiceLogoImg>https://google.com/logo.png</fieldServiceLogoImg>
    <masterLabel>EmbeddedServiceFieldService_Parent04IRM000000007p2AA_162d4270834</masterLabel>
    <modifyApptBookingFlowName>ESW_FS_ModifyAppt_Main_Flow</modifyApptBookingFlowName>
    <shouldShowExistingAppointment>true</shouldShowExistingAppointment>
    <shouldShowNewAppointment>true</shouldShowNewAppointment>
</EmbeddedServiceFieldService>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
