---
title: "SOAP API Best Practices"
domain: mc-apis
topic: soap-api-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:20.347Z
estimatedTokens: 4726
keywords: [General, Planning, Security, SOAP, API, Best, Practices, broad, conceptual, Marketing, Cloud, understand, how, interact, Cloud's, application, accomplish, specific, tasks, Workflow, Sending, Email, Subscriber, Extension, Triggered, Send, Importing, via, Interaction, Standard, Users, Enterprise, Embedded, Architecture, Coding, Maintaining, Service, Level, Agreements, Monitoring, Retrieving, Connection, Failures, Timeouts, Give, User, Separate, Credentials, Restrict, Integration, Partner, Necessary, Functions, Strong, Passwords, Management, NET, Synchronous, Asynchronous, PartnerKey, PartnerClientKey, Items]
---

> This page contains a broad conceptual overview of the Marketing Cloud SOAP API you can use to understand how the SOAP API can be used to interact with Marketing Cloud's application and accomplish specific tasks.

# SOAP API Best Practices

This page contains a broad conceptual overview of the Marketing Cloud SOAP API you can use to understand how the SOAP API can be used to interact with Marketing Cloud's application and accomplish specific tasks.

## Workflow Best Practices

You can use the SOAP API to interact with Marketing Cloud and accomplish the following tasks:

| Pre-send | Send | Post-send |
| --- | --- | --- |
| Create SubscribersCreate ListsAdd Subscribers to ListsAdd Attributes to SubscribersCreate Email Send DefinitionsCreate Data ExtensionsAdd Information to Data ExtensionsImporting Data | Schedule an Email Send DefinitionStart an Email Send DefinitionStarting a Triggered Send DefinitionSending an SMS Message | Refreshing groupsRetrieve email tracking details |

This list does not present the complete capabilities of the SOAP API, but it illustrates a common workflow for SOAP API users. You can view more specific examples of workflows:

### Sending an Email to a Subscriber List

![List_Based_Send.jpg](/docs/resources/img/en-us/noversion?doc_id=images%2Flist_based_send.jpg&folder=mc-apis)

### Sending an Email to a Data Extension

![Send_to_Date_Extension.jpg](/docs/resources/img/en-us/noversion?doc_id=images%2Fsend_to_date_extension.jpg&folder=mc-apis)

### Sending a Triggered Send

![Triggered_Send.jpg](/docs/resources/img/en-us/noversion?doc_id=images%2Ftriggered_send.jpg&folder=mc-apis)

### Importing Data via the SOAP API

| Prepare Information | Create Import Definition | Start Import Definition |
| --- | --- | --- |
| Create Portfolio ObjectsCreate CSV FilesCreate Tab-Delimited FilesGet File Import Locations | Create an Import Definition | Starting an Import DefinitionRetrieve the Results of an Import Definition |

When you define an import activity for a data file, you provide the following information about the source file to import and the destination of the data:

-   The **location** where the import gets the file to import. By default, this is the Import folder of your FTP account.
-   The **name of the import file**. You can choose to enter a static name--such as **subscribers.csv**\--or you can choose to include placeholder for the date. Including placeholders for the date lets you have a unique filename for each import file without changing the import activity definition before each import. For example, if you create the file naming pattern subscribers%%Month%%%%Day%%.csv, then on November 20 the import looks for a file named subscribers1120.csv.
-   The **file type**. You can import comma-delimited or tab-delimited files, or you can define your own delimiter.
-   The **destination type**. You can import the data into a subscriber list, or data extension. If your Marketing Cloud account uses the AIM package (which is enabled by default for Enterprise 2.0 accounts) you can also import data into a publication list. Subscriber attributes are not supported for publication list imports. The system only supports the following:
    -   **Email Address**
    -   **Subscriber Key** (if the Subscriber Key feature is enabled)
    -   **Status** (active or unsub)
    -   **Reason** (The unsub/opt-out reason)

When you define an import activity for a Salesforce report or object, you provide the following information:

-   Whether you are importing an Object or a Report.
-   The Object or Report to import.
-   Whether to import all data or only new data. If you select new data, you enter the date and time after which the data is imported.

When you save an import definition configured to import a Salesforce object or report, the system auto-creates the data extension according to the schema of the object or report. After the data extension is created, you cannot change the data source.

## Interaction Best Practices

You can access the SOAP API using several different languages:

-   C#/.NET
    -   [WSE 3.0 and .NET 2.0](atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_web_service_api_using_wse_30_and_net_20.htm "Connecting_to_the_Web_Service_API_Using_WSE_3.0_and_.NET_2.0")
    -   [WCF](atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_web_service_api_using_wcf.htm "Connecting_to_the_Web_Service_API_using_WCF")
-   [PHP](atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_api_using_php.htm "Connecting_to_the_API_using_PHP")
-   [Java](atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_api_using_java_and_axis2.htm "Connecting_to_the_API_using_Java_and_Axis2")
-   [Ruby on Rails](atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_api_using_ruby_on_rails.htm "Connecting_to_the_API_using_Ruby_on_Rails")

The linked articles include instructions and sample code. See the list of technical articles in this guide for code samples by product area.

### Standard API Users

Standard API users can interact with the API to accomplish all tasks outlined above.

### Enterprise API Users

In addition to the tasks that can be accomplished by standard API users, enterprise API users can use the API to work with different business units and account users. This includes the ability to perform the following actions:

-   Create, modify, and delete business units
-   Create, modify, and delete users
-   Set permissions and roles for users
-   Associate subscribers and lists with different business units

### Embedded API Users

Embedded API users can interact with the SOAP API in the same manner as standard API users, but they can also utilize more functionality that allows them to control the accounts and sub-accounts of their clients. That functionality includes the following example: [Create an Agency Client Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_an_agency_client_object.htm "Creating_an_Agency_Client_Object").

## Architecture and Coding Best Practices

This section outlines the best practices (both in general and for specific languages) for interacting with the SOAP API.

### General

These best practices apply in all instances, regardless of language.

#### Planning

Use the best practices below to plan for the eventualities that could be encountered with your use of the SOAP API.

-   Use the fewest amount of steps possible when moving or updating data in your SOAP API calls.
-   Use asynchronous processing whenever possible to ensure the best response to your calls.
-   Plan and map out the data flow of your API calls in order to maximize the effectiveness of your API interactions.
-   Make sure to account for future growth when implementing your API solution
-   Plan for peaks in traffic to your website or system and know what happens when you reach the upper limits of your system's capabilities.
-   Queue API calls and pull off data from those calls at a defined rate.
-   Perform any stress tests in the production support environment instead of the production environment.
-   Include code in your calls that retrieves the results of your call (such as the information in the CreateResult object) and responds appropriately, such as notifying you when an error occurs or taking a specific action when a successful Create call finishes.

You can use multiple concurrent API sessions to increase overall throughput. However, note that a large number of sessions may result in diminishing returns. Test your API calls thoroughly to ensure that you are using the optimum number of concurrent API sessions.

#### Maintaining Service Level Agreements

Marketing Cloud agrees to maintain consistent levels of service through the use of service level agreements (SLA). To ensure the performance outlined in your SLA, observe these best practices.

-   Avoid sending a completely rendered email in high-volume or triggered sends.
-   Use dynamic content instead of starting a send definition, pausing it, changing the message, and restarting the send definition. This practice delivers inconsistent tracking information, no aggregate tracking data, and adds data rows to your tracking information.
-   Avoid using high-volume triggered send calls using the synchronous SOAP API. Consider using asynchronous API calls to reduce server strain.
-   Store message content in content areas instead of data extensions.
-   Use send logging instead of send-time attributes where possible.
-   Restrict the number of synchronous threads in your calls to 20 or fewer.
-   Restrict your API requests to 50 objects per synchronous call or 100 objects per asynchronous call.

#### Monitoring Sends Through the SOAP API

The best way to monitor sends through the API is by polling the Send object on the following properties:

1.  SendID (identifier for the send)
2.  SentTime (time the send completed)
3.  NumberSent (number of emails sent)

NumberSent increments as the send is processing. Processing completes once SentTime has a value.

#### Triggered Sends

Use the best practices outlined below to improve the performance of your triggered sends via the SOAP API. This logic allows you take advantage of the instant notifications of the synchronous API and the solid reliability of the asynchronous API.

-   Use data extensions with your triggered sends to store relevant subscriber information instead of subscriber lists.
-   Refrain from using unlimited-length text columns in data extension used for triggered sends.
-   Keep your triggered send batches of Subscriber objects to numbers smaller than 100 for asynchronous calls and less than 50 for synchronous calls.
-   Keep your maximum payload per call at less than 5MB.
-   Pass less than 10 attributes to avoid decreased performances.
-   Retrieve information for an HTTPGet from your own site before the triggered send in order to prevent connectivity issues and problem-causing surges of traffic.
-   Use applicable Owner information and send classifications to set the From name and email address for a triggered send instead of passing those values in at the time of the send.
-   You can use the following workflow to take advantage of both the synchronous and asynchronous SOAP API and make sure your calls process effectively:
    -   Send your initial API request via the synchronous API, allowing you to receive immediate feedback if either the subscriber or request has issues
    -   Retry that call up to three (3) times to account for potential timeouts or connectivity issues
    -   Send failed call via asynchronous AP

#### Retrieving Data from the Application

Use data extracts to retrieve information from the system whenever possible.

#### Connection Failures and Timeouts

Configure your code to handle potential problems with connecting to the SOAP API. Use the best practices outlined below to help your system handle these connectivity issues:

-   Use the [CorrelationID](atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing.htm "Asynchronous_Processing") property to make sure that the SOAP API can evaluate whether a call is a continuation of a series of API calls or a repeat call made due to connection failures.
-   Make sure to set client-side timeouts in your calls. Use the following examples as models:
    -   Asynchronous operations - 30 seconds
    -   Synchronous operations (not including tracking retrieves) - 120 seconds
    -   Synchronous operations retrieving large sets of data - 300 seconds
-   Enable client-side logging of errors so you can evaluate the reasons behind the failure of a call, even if connectivity to the SOAP API remains problematic.

#### Security

When interacting with the SOAP API, observe these best practices in order to maintain a secure connection between your integration or development environment and Marketing Cloud.

##### Give Each User Separate API Credentials

Make sure that each user interacting with the SOAP API has their own username and password. You can set separate permissions for each user, ensuring that users have access to only those features that they need to complete their tasks using the SOAP API. Do not share credentials between users. Use a shared API user only for system-based processes. Give the shared user only essential permissions.

Always store your API endpoint, username, and password in a configuration file. This allows you to change this information quickly without requiring you to redeploy this code.

##### Restrict Integration Partner Access to Necessary Functions Only

All integration partners to access only those functions that are absolutely necessary to make the integration function. To prevent potential security issues, restrict all other functions.

##### Use Strong Passwords

All users with API access should use strong passwords.

-   Include special characters
-   Include numbers
-   Make the string as long as possible
-   Avoid predictable strings of characters

No matter how strong your password is, change it regularly.

##### Data Management

Use the best practices outlined below to best maintain your data.

-   Avoid simultaneously updating a list or data extension using multiple API calls.
-   Use the customer key (if available) instead of waiting to obtain an ID from a call.
-   Because SubscriberID is not exposed to batch functions, do not use it as a unique identifier.
-   Avoid using partner properties if possible due to sunsetting of this functionality.
-   Use Key properties instead of ID properties whenever possible, as Key properties support asynchronous processing and high-availability functionality.
-   Import information in batches whenever possible.
-   If your import definition fails validation during a Delete call, run an Update call on that import definition and use the details from that call to correct the definition.
-   If you pass an attribute in a call that doesn't exist on the subscriber list or data extension, the code does not error out. However, the value for that attribute are not passed and a new attribute is not created. You do not receive any indication of the failure to pass the attribute and value.
-   While you can create a data extension with an external key larger than 36 characters, doing so may cause problems when using the data extension in conjunction with other processes (especially if working with the UI, which truncates the external key to the first 36 characters). Be sure to limit your data extension external keys to 36 characters to help ensure all further processes function correctly.
-   For the best results when dealing with data/time values in your code, use a Coordinated Universal Time (UTC) offset. When retrieving dates, convert the dates to the UTC offset to ensure dates are in the format suitable for your application.
-   When retrieving information on a sub-object, be sure to specify the properties on that sub-object you wish to retrieve. For example, you must specify the ID of the Client sub-object of a Send object.

#### .NET

All optional, value-type properties of an object (such as the Int, bool, and enum types) have another Boolean property defined with **Specified** appended to the name. This property is used to tell the XML Serializer whether to include the corresponding property when generating the XML that is sent. When deserializing, this property indicates whether the corresponding property was included in the XML. For example, the Subscriber object has an optional property called Status. When the proxy class is generated, a "StatusSpecified" property is also created. When sending an object, if you specified a value for "Status", you must also set "StatusSpecified=true". If you don't, the value of "Status" is not serialized and sent to the server. When receiving an object, check if "StatusSpecified=true". If it is, then you know that a "Status" value was received and the data in the "Status" property is valid. If "StatusSpecified=false", the value in "Status" is the default value for that properties data type.

In the following table, if you use the code in the first column, the second column shows the XML that is generated. If you start with the XML in the second column, the third column shows what the properties are set to.

| .NET Code Before Serialization | XML | .NET Code After Serialization |
| --- | --- | --- |
| Subscriber.Status = SubscriberStatus.BouncedSubscriber.StatusSpecified = true | <Subscriber><Status>Bounced</Status></Subscriber> | Subscriber.Status = SubscriberStatus.BouncedSubscriber.StatusSpecified = true |
| Subscriber.Status = SubscriberStatus.Bounced | <Subscriber></Subscriber> | Subscriber.Status = SubscriberStatus.ActiveSubscriber.StatusSpecified = false |
| Subscriber.Status = SubscriberStatus.BouncedSubscriber.StatusSpecified = false | <Subscriber></Subscriber> | Subscriber.Status = SubscriberStatus.ActiveSubscriber.StatusSpecified = false |
| Subscriber.StatusSpecified = true | <Subscriber><Status>Active</Status></Subscriber> | Subscriber.Status = SubscriberStatus.ActiveSubscriber.StatusSpecified = true |

To avoid confusion and possible bugs in your code, always be explicit as indicated in the first row. When processing received objects, use the following pattern:

```
if (subscriber.StatusSpecified)
{
    Console.WriteLine(subscriber.Status);
}
else
{
    Console.WriteLine("The subscriber.Status property was not set");
}
```

### Synchronous vs. Asynchronous SOAP API

You can interact with the SOAP API in either a synchronous or asynchronous manner. The SOAP API processes synchronous calls at the time they are received, while it queues asynchronous calls and processes them in a specified order. Marketing Cloud recommends interacting with the SOAP API asynchronously as much as possible in order to ensure that API calls can be processed in the order you desire (supporting conversations) and avoid accidentally reprocessing calls due to connection interruption.

You can find more information about interacting asynchronously with the SOAP API in the [Asynchronous Processing](atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing.htm "Asynchronous_Processing") technical article.

### PartnerKey and PartnerClientKey

Marketing Cloud maintains the PartnerClientKey property for legacy functionality and backwards compatibility. To avoid performance issues, we discourage the use of this property in new code or integrations. Replace this property with ClientID whenever possible.

## Related Items

-   [Enterprise 2.0 Accounts](https://help.salesforce.com/articleView?id=mc_es_enterprise_20_overview.htm&type=5)
-   [CreateResult Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/createresult.htm)
-   [Send Logging](https://help.salesforce.com/articleView?id=mc_es_send_logging.htm&type=5)
-   [Automation Studio](https://help.salesforce.com/articleView?id=mc_as_automation_studio.htm&type=5)
-   [Perform a Campaign Via the SOAP API](atlas.en-us.noversion.mc-apis.meta/mc-apis/performing_a_campaign_via_the_web_service_api.htm)
-   [Extract Method](atlas.en-us.noversion.mc-apis.meta/mc-apis/extract.htm)

## Related Topics

- Create Subscribers (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_subscriber.htm)
- Create Lists (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_list.htm)
- Add Subscribers to Lists (atlas.en-us.noversion.mc-apis.meta/mc-apis/adding_subscribers_to_a_list.htm)
- Add Attributes to Subscribers (atlas.en-us.noversion.mc-apis.meta/mc-apis/adding_an_attribute_via_the_web_service_api.htm)
- Create Email Send Definitions (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_an_email_send_definition_using_the_web_service_api.htm)
- Create Data Extensions (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_data_extension_using_web_service_api.htm)
- Add Information to Data Extensions (atlas.en-us.noversion.mc-apis.meta/mc-apis/adding_data_to_data_extension_object.htm)
- Schedule an Email Send Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/scheduling_an_email_send_definition.htm)
- Start an Email Send Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/starting_an_email_send_definition.htm)
- Starting a Triggered Send Definition (atlas.en-us.noversion.mc-apis.meta/mc-apis/starting_a_triggered_send_definition_via_the_web_service_api.htm)
