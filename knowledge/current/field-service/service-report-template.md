---
title: "Service Report Template"
domain: field-service
topic: service-report-template
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.267Z
keywords: [Service, Report, Template, Response, Body, Example]
---

# Service Report Template

# Service Report Template

Returns information corresponding to one or more service report templates in field service. This resource is available in REST API version 40.0 and later.

This resource allows users to input one or more service report template IDs, and responds with information about the templates. Service reports can be generated for work orders, work order line items, and service appointments.

ServiceReportTemplate is available to API users in orgs where Field Service is enabled. It is also enabled for Experience Builder sites.

URI

/services/data/vXX.X/support/fieldservice/ServiceReportTemplate

Formats

JSON

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| templateIds | The list of service report template IDs, provided as comma-separated string values. The API response shows a failure if any template ID is invalid. |
| showDefault | A boolean parameter indicating whether the default service report template is returned in the response. If true, the default template is included; if false (default), the default template is not included. For example, if a request lists the IDs of two non-default templates and showDefault=true, the response will include information for three templates. |
| templateTypes | The type of record that the report template can be used for: ServiceAppointment, WorkOrder, or WorkOrderLineItem. Service report templates include four customizable sub-templates:WO—Work OrderWOLI—Work Order Line ItemWO_SA—Service Appointment for Work OrderWOLI_SA—Service Appointment for Work Order Line Item |

## Response Body

A service report has three main areas which cannot be deleted: **Header**, **Body** and **Footer**. Each area must contain at least one component—a **section**, **related list**, or **signature**—though the component can be empty. The Header and Footer come with a predefined section, and additional components cannot be added to them. The Body can contain one or more of each component.

**Section** components have the following properties:

-   title: String
-   hideTitle: Boolean
-   hideFieldLabels: Boolean
-   columns: Enum {1, 2}
-   rightAlignment: Enum {true,false}
-   fields: Array of {Field}

A **field** can be added to a section, related list, or signature. Columns in related lists are transformed into fields in the API. Field components have the following properties:

-   fieldType: Enum {rta, entityField, blank}
-   Attributes:
    -   If the field type is rta, the field also contains {“richTextValue” : “<html value>”}
    -   If the field type is entityField, the field also contains {“entityName” : “<WorkOrder>”, “fieldName” : “Account”}
    -   If the field type is blank, no other information is required
-   Position:
    -   row
    -   column

**Related list** components have the following properties:

-   title: String
-   hideTitle: Boolean
-   entityName: String
-   relatedListName: String
-   relatedEntityName: String
-   fields: Array of {Field Name (String), Column Position (Integer)}

**Signature** components have the following properties:

-   title: String
-   hideTitle: Boolean
-   hideFieldLabels: Boolean
-   columns: Enum {1, 2}
-   rightAlignment: Enum {true,false}
-   signatureType: Dynamic Enum {<technician 1>, <dispatcher 1>}
-   fields: Array of {Field Name (String), Position (Row,Column)}

## Example

This example request uses two service report template IDs.

Request

GET

/services/data/v42.0/support/fieldservice/ServiceReportTemplate?templateIds=0SLxx0000000ABC, 0SLR000000001QtOAI&showDefault=false&templateTypes=ServiceAppointment

Response

```

```