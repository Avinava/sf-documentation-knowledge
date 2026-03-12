---
title: "Working with Open CTI"
domain: api-cti
topic: working-with-open-cti
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.069Z
estimatedTokens: 1192
keywords: [Working, Open, CTI, increase, agent, efficiency, configure, softphone, tasks]
---

# Working with Open CTI

> You can use Open CTI to increase agent efficiency, configure your softphone, and
    complete many more tasks.

# Working with Open CTI

You can use Open CTI to increase agent efficiency, configure your softphone, and complete many more tasks.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_cti)

#### Important

Open CTI is in maintenance mode and is scheduled for retirement in February 2028. No new features or enhancements are being added to Open CTI. Effective immediately, Open CTI is deprecated and unavailable for newly created Agentforce Service orgs. To ensure long-term compatibility and access to the latest innovations, we recommend transitioning your development efforts to Service Cloud Voice. For more information, see this [Knowledge Article](https://help.salesforce.com/s/articleView?id=005306437&type=1&language=en_US).

To enable your contact center users to take advantage of the latest phone channel innovations, Salesforce recommends that you modernize your experience by moving to Service Cloud Voice. Service Cloud Voice offers many of the Open CTI features that you love and more. Unlike Open CTI, Service Cloud Voice is natively integrated with Omni-Channel and Command Center for Service, providing a seamless experience for contact center reps and supervisors across all digital channels. See [Get to Know Service Cloud Voice](https://help.salesforce.com/s/articleView?id=service.voice_getting_to_know.htm&language=en_US).

With Open CTI, you can:

-   Set the height or width of a softphone
-   Enable or disable click-to-dial
-   Return a call center definition file’s settings
-   Determine if a user is in the Salesforce console
-   Show or hide a softphone in the Salesforce console
-   Return information about a page
-   Execute an Apex method from an Apex class that’s exposed in Salesforce
-   Save or update an object in Salesforce
-   Search keywords in Salesforce and screen pop any matching records as defined in a softphone layout

Before developing an Open CTI implementation, learn how to connect to Open CTI and review the best practices.

-   **[Connect to Open CTI](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_connecting.htm)**
    The first portion of any JavaScript code that uses the Open CTI must make the toolkit available to the JavaScript code. The syntax for this is different depending on whether you are embedding JavaScript in a Visualforce page or a page developed using any web technologies and served from a third-party domain.
-   **[Open CTI Demo Adapter](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_demo_adapter.htm)**
    We’ve put together a demo adapter package that lets you test drive Open CTI for Lightning Experience. The package provides a demo softphone that highlights and demonstrates the main features of Open CTI for Lightning Experience without even connecting to a phone system.
-   **[Open CTI and Security](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_security.htm)**
    We recommend that all Open CTI implementations use HTTPS in the reqAdapterUrl element in their call center definition file. Using HTTPS ensures that traffic between your telephony server and Salesforce is encrypted.
-   **[Asynchronous Calls with](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_asynch_calls.htm)**
    Open CTI lets you issue asynchronous calls. Asynchronous calls allow the client-side process to continue instead of waiting for a callback from the server.
-   **[Sample HTML Page Using Open CTI Using Open CTI](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_sample_js.htm)**
    Each implementation of Open CTI can look different. This example shows you how to add CTI functionality to the Salesforce user interface using an HTML page.
-   **[Sample Code for Using Lightning Message Service with Open CTI](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_sample_lex_message_service.htm)**
    You can use the Lightning Message Service API to communicate with an Open CTI softphone. This example displays three buttons that subscribe, publish, and remove a message channel servicedev1\_SampleMC\_\_c.
-   **[Work with Canvas](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_canvas.htm)**
    To integrate Open CTI with external applications that require authentication methods, such as signed requests or OAuth 2.0 protocols, Salesforce recommends that you use Canvas.
-   **[Work with the Console APIs for Open CTI](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_console.htm)**
    There are console-specific methods that you can use to interact with Open CTI. Use the Salesforce Console Integration Toolkit JavaScript APIs to interact with Salesforce Classic console apps.
-   **[Best Practices](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_best_practices.htm)**
    When working with Open CTI, keep the following best practices in mind.

## Related Topics

- Connect to Open CTI (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_connecting.htm)
- Open CTI Demo Adapter (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_demo_adapter.htm)
- Open CTI and Security (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_security.htm)
- Asynchronous Calls with (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_asynch_calls.htm)
- Sample HTML Page Using Open CTI Using Open CTI (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_sample_js.htm)
- Sample Code for Using Lightning Message Service with Open CTI (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_sample_lex_message_service.htm)
- Work with Canvas (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_canvas.htm)
- Work with the Console APIs for Open CTI (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_console.htm)
- Best Practices (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_best_practices.htm)
