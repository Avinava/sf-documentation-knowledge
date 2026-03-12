---
title: "Generate Work Orders on Maintenance Plans with Apex"
domain: field-service
topic: generate-work-orders-on-maintenance-plans-with-apex
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:55.406Z
estimatedTokens: 413
keywords: [Generate, Work, Orders, Maintenance, Plans, Apex, action, maintenance, plans, called, code., following, code, sample, creates, work, order, records, making, callout]
---

# Generate Work Orders on Maintenance Plans with Apex

> The Generate Work Orders action on maintenance plans can also
        be called using Apex code. The following code sample creates work order records by making an
        Apex callout to the generateWorkOrder action REST API
        resource.

# Generate Work Orders on Maintenance Plans with Apex

The **Generate Work Orders** action on maintenance plans can also be called using Apex code. The following code sample creates work order records by making an Apex callout to the generateWorkOrder action REST API resource.

You can use this code sample in several different ways:

-   Add it to Apex controller code for an Aura component, and tie it to a custom UI or app functionality
-   Use it in an Apex trigger to semi-automate the creation of the work orders (for example, whenever a maintenance plan is created or updated)
-   Use it in an Apex REST service to create work orders when called from an external integration service

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

-   This code sample assumes that you have remote site settings enabled to make REST callouts. For more information, see [Adding Remote Site Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts_remote_site_settings.htm "HTML (New Window)").
-   The mock maintenance plan ID in the code sample is 1MPR000000000Bu.
-   This code sample references API version 45.0, but can be used with any version from 40.0 onward.

**API Endpoint (v45.0):** /services/data/v45.0/actions/standard/generateWorkOrders

```

```

#### See Also

-   [Salesforce Actions Developer Guide: Generate Work Orders Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_action.meta/api_action/actions_obj_generate_work_orders.htm "Salesforce Actions Developer Guide: Generate Work Orders Actions - HTML (New Window)")

## Code Examples

```apex
String salesforceHost = System.Url.getSalesforceBaseURL().toExternalForm();
String url = salesforceHost + '/services/data/v45.0/actions/standard/generateWorkOrders';
// Create HTTP request
HttpRequest request = new HttpRequest();
request.setEndpoint(url);
request.setMethod('POST');
request.setHeader('Content-Type', 'application/json;charset=UTF-8');
request.setHeader('Authorization', 'OAuth ' + UserInfo.getSessionId());
// Set the body as a JSON object
request.setBody('{"inputs" : [{"recordId" : "1MPR000000000Bu"}]}');
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
