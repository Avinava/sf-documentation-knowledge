---
title: "Developer Community Triggered Send Scenario"
domain: mc-apis
topic: developer-community-triggered-send-scenario
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.549Z
estimatedTokens: 2107
keywords: [Developer, Community, Triggered, Send, Scenario, Jen, develops, software, Northern, Trail, Outfitters, latest, project, involves, working]
---

# Developer Community Triggered Send Scenario

> Jen develops software for Northern Trail Outfitters, and her latest project involves working with her team to develop a new ecommerce site. Her tasks include integrating the ecommerce site with the Northern Trail Outfitters account to send the following types of message:

# Developer Community Triggered Send Scenario

## Scenario

Jen develops software for Northern Trail Outfitters, and her latest project involves working with her team to develop a new ecommerce site. Her tasks include integrating the ecommerce site with the Northern Trail Outfitters account to send the following types of message:

-   A welcome email when the customer first creates an account
-   Purchase confirmations and receipts
-   Opt-in emails for those wishing to receive marketing email

All of the above examples represent transactional emails. Northern Trail Outfitters marketers continues to handle all marketing emails, and they also develop all of the necessary content for transactional emails. Jen handles the API code that calls the correct email message and creates and executes the sending of these transactional emails. She works with .NET/C# code and receives the applicable Marketing Cloud credentials from her supervisor.

![Jen1](/docs/resources/img/en-us/noversion?doc_id=images%2Fjen1new.jpg&folder=mc-apis)

Before doing anything else, Jen must successfully connect her development environment to the Marketing Cloud SOAP API. Since she is writing .NET/C# code, Jen connects using Visual Studio and successfully executes a call to retrieve the availability status of the API.

## Understanding the Data Model

Now that Jen has successfully connected her development environment, she needs to understand how Marketing Cloud stores the data necessary execute the email sends previously listed. Because this is a new ecommerce site, Jen has the opportunity to work with others involved in implementing Marketing Cloud and decide how they identify individual users and store the applicable information.

At this point, Jen relies on documentation to understand more about the application. She also learns about triggered sends and realizes that these email messages perform the function she has been assigned to implement. The ecommerce site triggers these sends when certain actions take place. She also learns about both subscriber lists and data extensions, as she must understand exactly how Marketing Cloud stores information in order to better design how Northern Trail Outfitters information is stored and processed when sending triggered emails. Jen won't be the only person using this information, but she does have a stake in making the final decision.

Jen also takes the time to familiarize herself with the available API best practices to understand how to best write her code against Marketing Cloud. Because the new ecommerce site relies on email to communicate with customers, Jen decides to make the email address the primary identifier for all customers. She also decides to store this information in data extensions, per the best practice recommendations. Finally, she decides to write her code to take advantage of both the synchronous and asynchronous API calls as recommended by the best practices.

![TriggeredSendProcess.jpg](/docs/resources/img/en-us/noversion?doc_id=images%2FTriggeredSendProcess.jpg&folder=mc-apis)

The marketers for Northern Trail Outfitters handle the actual creation of the email content and messages. However, they must provide Jen with the external keys for these email messages so she can retrieve these items into the email send definitions.

## Creating and Starting the Triggered Send Definition

Jen discovers that triggered send definitions must be created and then started in order to make them functional within Marketing Cloud. Initially, Jen has to create triggered send definitions for two different interactions:

1.  A welcome email thanking customers for creating an account with Northern Trail Outfitters
2.  A confirmation email thanking customers for a purchase

Once she creates those triggered send definitions, she starts them to ensure they can accept incoming calls.

## Handling Errors and Exceptions

Jen must also learn how to handle error codes associated with triggered send definitions and the triggered send itself.

For synchronous processing, Jen casts the CreateResult to a TriggeredSendCreateResult to gain access to the SubscriberFailures array.

For asynchronous processing, the ResultMessage object represents the focal point for exception handling. Jen retrieves the ResultMessage for each request using the retrieve method, read from an email attachment or available as a HTTP post variables. The ResultDetailXML property contains a serialized TriggeredSendCreateResult that can be interrogated to get the desired.

## Retrieving Triggered Send Definition Information and Tracking

Jen wants to review how her triggered sends are performing, and the marketing department wants to know how customers are interacting with the emails sent as part of the triggered sends. Jen retrieves a tracking send summary to get the information needed and act accordingly.

## Scaling the Implementation

After initial testing and implementation, Jen and the team want to expand their efforts to handle increased load and more features.

### Creating Email Messages

Jen also recommends creating more email messages and personalizing them to the specific customer. Until this point, the email messages used fixed content to welcome the customer and let them know that the transaction had cleared. Jen recommends that marketing include dynamic content in their email messages to include the following attributes:

-   First Name
-   Last Name
-   Item(s) Purchased

Jen also creates more triggered send definitions to accomodate customers wishing to change their username and password for the ecommerce site. These definitions include HTML email messages that have been created by marketing and sent to Jen for inclusion in the triggered send definition. These HTML email contain references to information in the data extension for use in the email message.

### Using the Asynchronous API

In order to ensure that all API calls are properly handled, Jen decides to use the asynchronous API for further development on the ecommerce site. While this does involves rewriting existing functionality, Jen feels the solution scales better using the asynchronous API and allow for better management of her API calls.

### Integrating AMPscript

Jen also considers building a landing page for the marketers to view the triggered send tracking information she retrieves via the API. She stores this information in a data extension and builds a landing page using AMPscript that returns the tracking information for easy viewing.

## Related Items

-   [Connect to the API using WCF](atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_web_service_api_using_wcf.htm)
-   [Retrieve the Availability Status of a Marketing Cloud Account](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_the_availability_status_of_an_exacttarget_account.htm)
-   [Data Extensions](https://help.salesforce.com/articleView?id=mc_es_data_extension_data_relationships_classic.htm&type=5)
-   [Subscriber Lists](https://help.salesforce.com/articleView?id=mc_es_lists_classic_subscriber.htm&type=5)
-   [SOAP API Best Practices](atlas.en-us.noversion.mc-apis.meta/mc-apis/soap_api_best_practices.htm)
-   [Retrieve an Email](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_an_email_via_the_soap_api.htm)
-   [Create Triggered Send Definition](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_send_definition.htm)
-   [Start Triggered Send Definition](atlas.en-us.noversion.mc-apis.meta/mc-apis/starting_a_triggered_send_definition_via_the_web_service_api.htm)
-   [Error Codes](atlas.en-us.noversion.mc-apis.meta/mc-apis/error_codes.htm)
-   [CreateResult Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/createresult.htm)
-   [TriggeredSendCreateResult Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/triggeredsendcreateresult.htm)
-   [ResultMessage Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/resultmessage.htm)
-   [Retrieve a Triggered Send Summary](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_a_triggered_send_summary.htm)
-   [Dynamic Content](https://help.salesforce.com/articleView?id=mc_es_dynamic_content.htm&type=5)
-   [Asynchronous Processing](atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing.htm)
-   [Retrieve Rows from a Data Extension Using AMPscript](https://developer.salesforce.com/docs/atlas.en-us.mc-programmatic-content.meta/mc-programmatic-content/retrieveRows.htm)

## Related Topics

- Connect to the API using WCF (atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_web_service_api_using_wcf.htm)
- Retrieve the Availability Status of a Marketing Cloud Account (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_the_availability_status_of_an_exacttarget_account.htm)
- SOAP API Best Practices (atlas.en-us.noversion.mc-apis.meta/mc-apis/soap_api_best_practices.htm)
- Retrieve an Email (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_an_email_via_the_soap_api.htm)
- Create Triggered Send Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_send_definition.htm)
- Start Triggered Send Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/starting_a_triggered_send_definition_via_the_web_service_api.htm)
- Error Codes (atlas.en-us.noversion.mc-apis.meta/mc-apis/error_codes.htm)
- CreateResult Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/createresult.htm)
- TriggeredSendCreateResult Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/triggeredsendcreateresult.htm)
- ResultMessage Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/resultmessage.htm)
