---
title: "Create a Service Report with Apex"
domain: field-service
topic: create-a-service-report-with-apex
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:53.723Z
estimatedTokens: 774
keywords: [Service, Report, Apex, action, work, orders, order, line, items, appointments, code, shown, creates, two, signatures]
---

# Create a Service Report with Apex

> The Create Service Report action on work orders, work order line items, and service
  appointments can also be called using Apex code. The code example shown creates a service report
  with two signatures by making an Apex callout to the createServiceReport action REST API resource.

# Create a Service Report with Apex

The Create Service Report action on work orders, work order line items, and service appointments can also be called using Apex code. The code example shown creates a service report with two signatures by making an Apex callout to the createServiceReport action REST API resource.

Each service report contains data from its parent record and signatures from customers, technicians, or others who must sign off on the work. In your API call, you can define one or more signatures to be used in the report. The number and type of signatures must match the service report template's signature settings.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

-   This code example applies to API version 41.0 and later. Service reports generated with API version 40.0 can contain only one signature.
-   This code example assumes that you have remote site settings enabled to make REST callouts. For more information, see [Adding Remote Site Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts_remote_site_settings.htm).
-   The mock record ID in the code example is 0WOxx000000001E. The mock service report template ID is 0SLR00000004DBFOA2.

**API Endpoint (v41.0):** /services/data/v41.0/actions/standard/createServiceReport

```

```

This code example creates a payload with two signatures.

```

```

## Field Descriptions

-   entityId: The ID of the work order, work order line item, or service report that you want to create the service report for.
-   signatures: A list of JSON definitions for a digital signature.
    -   data: (Required) The base64 code for an image.
    -   contentType: (Required)The file type of the signature.
    -   signatureType: (Required) The role of the person signing such as Customer. Signature Type picklist values are defined by the Salesforce admin ahead of time. Each signature block must use a different signature type, and the signature types that you define in your call must match the service report template’s signature types.
    -   name: The signature block title. This value appears on the generated service report.
    -   place: The place of signing. This value appears on the generated service report.
    -   signedBy: The name of the person signing. This value appears on the generated service report.
    -   signedDate: The date of signing. This value appears on the generated service report.
-   templateId: The ID of the service report template used for the report. To find the ID, run a SOQL query on the ServiceReportLayout object.

## Limitations

If you’re a guest user and are using Future annotation, the ContentDocument object can’t be created and you can’t create the Service Document.

#### See Also

-   [Salesforce Actions Developer Guide: Create Service Report Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_action.meta/api_action/actions_obj_create_service_report.htm "Salesforce Actions Developer Guide: Create Service Report Actions - HTML (New Window)")

## Code Examples

```apex
String salesforceHost = System.Url.getSalesforceBaseURL().toExternalForm();
String url = salesforceHost + '/services/data/v41.0/actions/standard/createServiceReport';
// Create HTTP request
HttpRequest request = new HttpRequest();
request.setEndpoint(url);
request.setMethod('POST');
request.setHeader('Content-Type', 'application/json');
request.setHeader('Authorization', 'OAuth ' + UserInfo.getSessionId());
// Set the body as a JSON object
request.setBody('{"inputs" : [ {"entityId" : "0WOxx000000001E","signatures" : [{"data":"Base64 code for the captured signature image","contentType":"image/png","name":"Customer Signature","signatureType":"Default","place":"San Francisco","signedBy":"John Doe","signedDate":"2019-06-05 12:00:00"}],"templateId" : "0SLR00000004DBFOA2"} ]}');
Http http = new Http();
HttpResponse response = http.send(request);
// Parse the JSON response
if (response.getStatusCode() != 201) {
    System.debug('The status code returned was not expected: ' +
                 response.getStatusCode() + ' ' + response.getStatus());
} else {
    System.debug(response.getBody());
}
```

```
{
   "inputs":[
      {
         "entityId":"0WOxx000000001E",
         "signatures":[
            {
               "data":"Base64 code for the captured signature image",
               "contentType":"image/png",
               "name":"Customer Signature",
               "signatureType":"Customer",
               "place":"San Francisco",
               "signedBy":"John Doe",
               "signedDate":"Thu Jul 13 22:34:43 GMT 2017"
            },
            {
               "data":"Base64 code for the captured signature image",
               "contentType":"image/png",
               "name":"Technician Signature",
               "signatureType":"Technician"
            }
         ],
         "templateId":"0SLR00000004DBFOA2"
      }
   ]
}
```
