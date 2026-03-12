---
title: "Make Long-Running Callouts with Continuations"
domain: apex-guide
topic: make-long-running-callouts-with-continuations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.071Z
estimatedTokens: 2093
keywords: [Long-Running, Callouts, Continuations, asynchronous, callouts, long-running, requests, Visualforce, page, Lightning, component, external, Web, service, process, responses, callback, methods., Example, Note]
---

# Make Long-Running Callouts with Continuations

> Use asynchronous callouts to make long-running requests from a
      Visualforce page or a Lightning component to an external Web service and process responses in
      callback methods.

# Make Long-Running Callouts with Continuations

Use asynchronous callouts to make long-running requests from a Visualforce page or a Lightning component to an external Web service and process responses in callback methods.

An asynchronous callout is a callout that is made from a Visualforce page or a Lightning component for which the response is returned through a callback method. An asynchronous callout is also referred to as a continuation.

## Visualforce Example

This diagram shows the execution path of an asynchronous callout, starting from a Visualforce page. A user invokes an action on a Visualforce page that requests information from a Web service (step 1). The app server hands the callout request to the Continuation server before returning to the Visualforce page (steps 2–3). The Continuation server sends the request to the Web service and receives the response (steps 4–7), then hands the response back to the app server (step 8). Finally, the response is returned to the Visualforce page (step 9).

Execution Flow of an Asynchronous Callout

![Diagram for the execution flow of a continuation](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fapex_continuations_diagram.png&folder=apexcode)

A typical Salesforce application that benefits from asynchronous callouts contains a Visualforce page with a button. Users click that button to get data from an external Web service. For example, a Visualforce page that gets warranty information for a certain product from a Web service. Thousands of agents in the organization can use this page. Therefore, a hundred of those agents can click the same button to process warranty information for products at the same time. These hundred simultaneous actions exceed the [limit of concurrent long-running requests](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm#in_topic_per_transaction_cert_pkg_limits_section) . But by using asynchronous callouts, the requests aren’t subjected to this limit and can be executed.

In the following example application, the button action is implemented in an Apex controller method. The action method creates a Continuation and returns it. After the request is sent to the service, the Visualforce request is suspended. The user must wait for the response to be returned before proceeding with using the page and invoking new actions. When the external service returns a response, the Visualforce request resumes and the page receives this response.

This is the Visualforce page of our sample application. This page contains a button that invokes the startRequest method of the controller that’s associated with this page. After the continuation result is returned and the callback method is invoked, the button renders the outputText component again to display the body of the response.

```

```

The following is the Apex controller that’s associated with the Visualforce page. This controller contains the action and callback methods.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Before you can call an external service, you must add the remote site to a list of authorized remote sites in the Salesforce user interface. From Setup, enter Remote Site Settings in the Quick Find box, then select **Remote Site Settings**, and then click **New Remote Site**.

If the callout specifies a named credential as the endpoint, you don’t need to configure remote site settings. A named credential specifies the URL of a callout endpoint and its required authentication parameters in one definition. To set up named credentials, see Define a Named Credential in Salesforce Help. In your code, specify the named credential URL instead of the long-running service URL. A named credential URL contains the scheme callout:, the name of the named credential, and an optional path. For example: callout:My\_Named\_Credential/some\_path.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

-   You can make up to three asynchronous callouts in a single continuation. Add these callout requests to the same continuation by using the addHttpRequest method of the Continuation class. The callouts run in parallel for this continuation and suspend the Visualforce request. Only after the external service returns all callouts, the Visualforce process resumes.
-   Asynchronous callouts are supported only through a Visualforce page. Making an asynchronous callout by invoking the action method outside a Visualforce page, such as in the Developer Console, isn’t supported.
-   Asynchronous callouts are available for Apex controllers and Visualforce pages saved in version 30.0 and later. If JavaScript remoting is used, version 31.0 or later is required.
-   Asynchronous callouts, including callouts that specify named credentials as the callout endpoint, aren’t supported over Private Connect.

-   **[Process for Using Asynchronous Callouts](atlas.en-us.apexcode.meta/apexcode/apex_continuation_process.htm)**
    To use asynchronous callouts, create a Continuation object in an action method of a controller, and implement a callback method.
-   **[Testing Asynchronous Callouts](atlas.en-us.apexcode.meta/apexcode/apex_continuation_testing.htm)**
    Write tests to test your controller and meet code coverage requirements for deploying or packaging Apex. Because Apex tests don’t support making callouts, you can simulate callout requests and responses. When you’re simulating a callout, the request doesn’t get sent to the external service, and a mock response is used.
-   **[Asynchronous Callout Limits](atlas.en-us.apexcode.meta/apexcode/apex_continuation_limits.htm)**
    When a continuation is executing, the continuation-specific limits apply. When the continuation returns and the request resumes, a new Apex transaction starts. All Apex and Visualforce limits apply and are reset in the new transaction, including the Apex callout limits.
-   **[Making Multiple Asynchronous Callouts](atlas.en-us.apexcode.meta/apexcode/apex_continuation_multiple_callouts.htm)**
    To make multiple callouts to a long-running service simultaneously from a Visualforce page, you can add up to three requests to the Continuation instance. An example of when to make simultaneous callouts is when you’re making independent requests to a service, such as getting inventory statistics for two products.
-   **[Chaining Asynchronous Callouts](atlas.en-us.apexcode.meta/apexcode/apex_continuation_chained_callouts.htm)**
    If the order of the callouts matters, or when a callout is conditional on the response of another callout, you can chain callout requests. Chaining callouts means that the next callout is made only after the response of the previous callout returns. For example, you might need to chain a callout to get warranty extension information after the warranty service response indicates that the warranty expired. You can chain up to three callouts.
-   **[Making an Asynchronous Callout from an Imported WSDL](atlas.en-us.apexcode.meta/apexcode/apex_continuation_callout_soap.htm)**
    In addition to HttpRequest\-based callouts, asynchronous callouts are supported in Web service calls that are made from WSDL-generated classes. The process of making asynchronous callouts from a WSDL-generated class is similar to the process for using the HttpRequest class.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_callouts_timeouts.htm "Callout Limits and Limitations")

#### See Also

-   [Named Credentials as Callout Endpoints](atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm "A named credential specifies the URL of a callout endpoint and its required authentication parameters in one definition. Salesforce manages all authentication for Apex callouts that specify a named credential as the callout endpoint so that your code doesn’t have to. You can also skip remote site settings, which are otherwise required for callouts to external sites, for the site defined in the named credential.")

-   [*Lightning Web Components Developer Guide*: Make Long-Running Callouts with Continuations](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.apex_continuations "Lightning Web Components Developer Guide: Make Long-Running Callouts with Continuations - HTML (New Window)")

## Code Examples

```
<apex:page controller="ContinuationController" showChat="false" showHeader="false">
   <apex:form >
      <!-- Invokes the action method when the user clicks this button. -->
      <apex:commandButton action="{!startRequest}" 
              value="Start Request" reRender="result"/> 
   </apex:form>

   <!-- This output text component displays the callout response body. -->
   <apex:outputText id="result" value="{!result}" />
</apex:page>
```

```apex
public with sharing class ContinuationController {
    // Unique label corresponding to the continuation
    public String requestLabel;
    // Result of callout
    public String result {get;set;}
    // Callout endpoint as a named credential URL 
    // or, as shown here, as the long-running service URL
    private static final String LONG_RUNNING_SERVICE_URL = 
        '<Insert your service URL>';
   
   // Action method
    public Object startRequest() {
      // Create continuation with a timeout
      Continuation con = new Continuation(40);
      // Set callback method
      con.continuationMethod='processResponse';
      
      // Create callout request
      HttpRequest req = new HttpRequest();
      req.setMethod('GET');
      req.setEndpoint(LONG_RUNNING_SERVICE_URL);
      
      // Add callout request to continuation
      this.requestLabel = con.addHttpRequest(req);
      
      // Return the continuation
      return con;  
    }
    
    // Callback method 
    public Object processResponse() {   
      // Get the response by using the unique label
      HttpResponse response = Continuation.getResponse(this.requestLabel);
      // Set the result variable that is displayed on the Visualforce page
      this.result = response.getBody();
      
      // Return null to re-render the original Visualforce page
      return null;
    }
}
```

## Related Topics

- limit of concurrent long-running requests (atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm)
- Process for Using Asynchronous Callouts (atlas.en-us.apexcode.meta/apexcode/apex_continuation_process.htm)
- Testing Asynchronous Callouts (atlas.en-us.apexcode.meta/apexcode/apex_continuation_testing.htm)
- Asynchronous Callout Limits (atlas.en-us.apexcode.meta/apexcode/apex_continuation_limits.htm)
- Making Multiple Asynchronous Callouts (atlas.en-us.apexcode.meta/apexcode/apex_continuation_multiple_callouts.htm)
- Chaining Asynchronous Callouts (atlas.en-us.apexcode.meta/apexcode/apex_continuation_chained_callouts.htm)
- Making an Asynchronous Callout from an Imported WSDL (atlas.en-us.apexcode.meta/apexcode/apex_continuation_callout_soap.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_callouts_timeouts.htm)
- Named Credentials as Callout Endpoints (atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm)
