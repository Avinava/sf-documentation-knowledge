---
title: "Service Report Template"
domain: field-service
topic: service-report-template
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.854Z
estimatedTokens: 915
keywords: [Service, Report, Template, corresponding, templates, resource, REST, API, version, 40.0, later]
---

# Service Report Template

> Returns information corresponding to one or more service report templates in field
  service. This resource is available in REST API version 40.0 and later.

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

## Code Examples

```
{
  "serviceReportTemplates": [
    {
      "defaultTemplate": false,
      "error": {
        "errorCode": "INVALID_TEMPLATE_ID",
        "errorMessage": "The Service Report Template ID is invalid."
      },
      "subTemplates": [],
      "templateId": "0SLxx0000000ABC"
    },
    {
      "defaultTemplate": false,
      "error": null,
      "subTemplates": [
        {
          "regions": [
            {
              "sections": [
                {
                  "columns": 2,
                  "hideFieldLabels": false,
                  "hideTitle": false,
                  "items": [
                    {
                      "position": {
                        "column": 0,
                        "row": 0
                      },
                      "richText": "<img alt="User-added image" src="https://mobile1.file.force.com/servlet/rtaImage?eid=0QRR000000008oZ&amp;feoid=Data&amp;refid=0EMR00000000DGK"></img>",
                      "type": "rta"
                    },
                    {
                      "position": {
                        "column": 1,
                        "row": 0
                      },
                      "richText": "<u><i>Salesforce.com</i></u>",
                      "type": "rta"
                    }
                  ],
                  "position": 0,
                  "rightAlign": false,
                  "title": "Service Report",
                  "type": "section"
                }
              ],
              "type": "HEADER"
            },
            {
              "sections": [
                {
                  "columns": 2,
                  "hideFieldLabels": false,
                  "hideTitle": true,
                  "items": [],
                  "position": 0,
                  "rightAlign": false,
                  "showPageNumber": false,
                  "title": "Footer Section",
                  "type": "section"
                }
              ],
              "type": "FOOTER"
            },
            {
              "sections": [
                {
                  "columns": 2,
                  "hideFieldLabels": false,
                  "hideTitle": false,
                  "items": [
                    {
                      "entityName": "ServiceAppointment",
                      "label": "Account",
                      "name": "AccountId",
                      "position": {
                        "column": 0,
                        "row": 0
                      },
                      "type": "entityField"
                    },
                    ...
                    {
                      "position": {
                        "column": 1,
                        "row": 0
                      },
                      "richText": "Prepared By:",
                      "type": "rta"
                    }
                  ],
                  "position": 0,
                  "rightAlign": false,
                  "title": "Account & Contact Information",
                  "type": "section"
                },
                {
                  "entityName": "WorkOrder",
                  "filterCriteria": {
                    "conditions": [
                      {
                        "field": "Status",
                        "operation": "includes",
                        "position": 0,
                        "values": [
                          "In Progress",
                          "Completed"
                        ]
                      }
                    ]
                  },
                  "hideTitle": false,
                  "items": [
                    {
                      "column": 0,
                      "label": "Work Order Line Item Number",
                      "name": "LineItemNumber"
                    },
                    ...
                    {
                      "column": 6,
                      "label": "Unit Price",
                      "name": "UnitPrice"
                    }
                  ],
                  "position": 5,
                  "relatedEntityName": "WorkOrderLineItem",
                  "relatedListName": "WorkOrderLineItems",
                  "title": "Work Order Line Items",
                  "type": "relatedList"
                },
                {
                  "columns": 1,
                  "hideFieldLabels": false,
                  "hideTitle": false,
                  "items": [
                    {
                      "entityName": "DigitalSignature",
                      "label": "Signature",
                      "name": "Document",
                      "position": {
                        "column": 0,
                        "row": 0
                      },
                      "type": "entityField"
                    },
                    {
                      "entityName": "DigitalSignature",
                      "label": "Signed By",
                      "name": "SignedBy",
                      "position": {
                        "column": 0,
                        "row": 1
                      },
                      "type": "entityField"
                    },
                    {
                      "entityName": "DigitalSignature",
                      "label": "Date",
                      "name": "SignedDate",
                      "position": {
                        "column": 0,
                        "row": 2
                      },
                      "type": "entityField"
                    }
                  ],
                  "position": 9,
                  "rightAlign": false,
                  "signatureType": "Default",
                  "signatureTypeLabel": "Default",
                  "title": "Customer Signature",
                  "type": "signature"
                }
              ],
              "type": "BODY"
            }
          ],
          "subTemplateType": "WO_SA"
        },
        {
          ...
          "subTemplateType": "WOLI_SA"
        }
      ],
      "templateId": "0SLR000000001QtOAI"
    }
  ]
}
```
