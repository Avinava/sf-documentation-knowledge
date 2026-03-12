---
title: "Create Service Report Actions"
domain: api-action
topic: create-service-report-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.978Z
estimatedTokens: 562
keywords: [Service, Report, Actions, Creates, appointment, work, order, line, item, REST, HTTP, Inputs, Usage]
---

# Create Service Report Actions

> Creates a service report for a service appointment, work order, or work order line
  item.

# Create Service Report Actions

Creates a service report for a service appointment, work order, or work order line item.

This object is available in API version 39.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_action)

#### Note

The Create Service Report action can't be triggered from a flow. To automatically launch the report preview and signature interface in the Salesforce Field Service Mobile app, create an app extension named Service\_Report\_Flow. For more information, see [Build Flows for the Field Service Mobile App](https://help.salesforce.com/s/articleView?id=service.mfs_flow_build.htm&type=5&language=en_US).

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/createServiceReport

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| entityId | TypereferenceDescriptionRequired. The ID of the service appointment, work order, or work order line item that the service report is created for. |
| signatures | TypestringDescriptionOptional. A list of JSON definitions for a digital signature.data—(Required) The base64 code for an image.contentType—(Required)The file type of the signature.signatureType—(Required) The role of the person signing; for example, “Customer.” Salesforce admin defines Signature Type picklist values ahead of time. Each signature block must use a different signature type, and the signature types you define in your call must match the service report template’s signature types.name—The signature block title. This value appears on the generated service report.place—The place of signing. This value appears on the generated service report.signedBy—The name of the person signing. This value appears on the generated service report.signedDate—The date of signing. This value appears on the generated service report. |
| templateId | TypereferenceDescriptionRequired. The ID of the standard or custom service report template that is used to create the service report. |

## Usage

Sample Input

The following code sample creates a service report with two signatures by making an Apex callout to the createServiceReport action REST API resource.

```

```

## Code Examples

```
{
       "inputs" : [ {
          "entityId" : "0WOxx000000001E",
             "signatures" : [
                      {"data":"Base64 code for the captured signature image",
                      "contentType":"image/png",
                      "name":"Customer Signature",
                      "signatureType":"Customer",
                      "place":"San Francisco",
                      "signedBy":"John Doe",
                      "signedDate":"Thu Jul 13 22:34:43 GMT 2017"               
                      },
                      {"data":"Base64 code for the captured signature image",
                      "contentType":"image/png",
                      "name":"Technician Signature",
                      "signatureType":"Technician"
                      }],
             "templateId" : "0SLR00000004DBFOA2"
       } ]
    }
```
