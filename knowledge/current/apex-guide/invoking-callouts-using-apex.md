---
title: "Invoking Callouts Using Apex"
domain: apex-guide
topic: invoking-callouts-using-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.309Z
estimatedTokens: 829
keywords: [Invoking, Callouts, Apex, Before, any, callout, call, external, site, must, registered, Remote, Site, Settings, page, fails., Salesforce, prevents, calls, unauthorized]
---

# Invoking Callouts Using Apex

> Before any Apex callout can call an external site, that site
        must be registered in the Remote Site Settings page, or the callout fails. Salesforce
        prevents calls to unauthorized network addresses.

# Invoking Callouts Using Apex

An Apex callout enables you to tightly integrate your Apex with an external service by making a call to an external Web service or sending a HTTP request from Apex code and then receiving the response. Apex provides integration with Web services that utilize SOAP and WSDL, or HTTP services (RESTful services).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Before any Apex callout can call an external site, that site must be registered in the Remote Site Settings page, or the callout fails. Salesforce prevents calls to unauthorized network addresses.

If the callout specifies a named credential as the endpoint, you don’t need to configure remote site settings. A named credential specifies the URL of a callout endpoint and its required authentication parameters in one definition. To set up named credentials, see “Define a Named Credential” in the Salesforce Help.

To learn more about the types of callouts, see:

-   [SOAP Services: Defining a Class from a WSDL Document](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex.htm)
-   [Invoking HTTP Callouts](atlas.en-us.apexcode.meta/apexcode/apex_callouts_http.htm)
-   [Asynchronous Callouts for Long-Running Requests](atlas.en-us.apexcode.meta/apexcode/apex_continuation_overview.htm "Use asynchronous callouts to make long-running requests from a Visualforce page or a Lightning component to an external Web service and process responses in callback methods.")

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

Callouts enable Apex to invoke external web or HTTP services. [Apex Web services](atlas.en-us.apexcode.meta/apexcode/apex_web_services.htm "You can expose your Apex methods as SOAP web services so that external applications can access your code and your application.") allow an external application to invoke Apex methods through Web services.

1.  [Adding Remote Site Settings](atlas.en-us.apexcode.meta/apexcode/apex_callouts_remote_site_settings.htm)

2.  [Named Credentials as Callout Endpoints](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm)
    A named credential specifies the URL of a callout endpoint and its required authentication parameters in one definition. Salesforce manages all authentication for Apex callouts that specify a named credential as the callout endpoint so that your code doesn’t have to. You can also skip remote site settings, which are otherwise required for callouts to external sites, for the site defined in the named credential.
3.  [SOAP Services: Defining a Class from a WSDL Document](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex.htm)

4.  [Invoking HTTP Callouts](atlas.en-us.apexcode.meta/apexcode/apex_callouts_http.htm)

5.  [Using Certificates](atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs.htm)

6.  [Callout Limits and Limitations](atlas.en-us.apexcode.meta/apexcode/apex_callouts_timeouts.htm)

7.  [Make Long-Running Callouts with Continuations](atlas.en-us.apexcode.meta/apexcode/apex_continuation_overview.htm)
    Use asynchronous callouts to make long-running requests from a Visualforce page or a Lightning component to an external Web service and process responses in callback methods.

## Related Topics

- SOAP Services: Defining a Class from a WSDL Document (atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex.htm)
- Invoking HTTP Callouts (atlas.en-us.apexcode.meta/apexcode/apex_callouts_http.htm)
- Asynchronous
          Callouts for Long-Running Requests (atlas.en-us.apexcode.meta/apexcode/apex_continuation_overview.htm)
- Apex Web services (atlas.en-us.apexcode.meta/apexcode/apex_web_services.htm)
- Adding Remote Site Settings (atlas.en-us.apexcode.meta/apexcode/apex_callouts_remote_site_settings.htm)
- Named Credentials as Callout Endpoints (atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm)
- Using Certificates (atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs.htm)
- Callout Limits and Limitations (atlas.en-us.apexcode.meta/apexcode/apex_callouts_timeouts.htm)
- Make Long-Running Callouts with Continuations (atlas.en-us.apexcode.meta/apexcode/apex_continuation_overview.htm)
