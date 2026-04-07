---
title: "Work with the SOAP API"
domain: mc-apis
topic: work-with-the-soap-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:25.876Z
estimatedTokens: 3793
keywords: [Work, SOAP, API, comprehensive, integration, flexibility, exposing, portions, functionality, Marketing, Cloud, interoperable, reusable, services, built]
---

# Work with the SOAP API

> The SOAP API provides comprehensive integration flexibility by exposing portions of functionality of Marketing Cloud as interoperable, reusable services. The API is built on web service standards that assure enterprise-level security and reliability. Because it is SOAP-based, developers can use lead

# Work with the SOAP API

The SOAP API provides comprehensive integration flexibility by exposing portions of functionality of Marketing Cloud as interoperable, reusable services. The API is built on web service standards that assure enterprise-level security and reliability. Because it is SOAP-based, developers can use leading integration processes and tools. The API is designed to:

-   Enable businesses to innovate their email strategy.
-   Provide alternative approaches to typical integration pain points. For example, you can manage your subscribers externally.
-   Enable behavioral data to be programmatically created and acted upon.

## Why Use the SOAP API

These examples illustrate some of the most common SOAP API uses.

When working with the SOAP API, you can only successfully complete calls that use features enabled for the account containing your API user login. If a feature has not been enabled for your account, you cannot use the SOAP API to perform that feature. Contact your Marketing Cloud representative for more information about identifying and enabling features for your account.

### Create Email

The SOAP API supports many different email creation scenarios. You can create emails in Marketing Cloud and operate on the emails with the API or perform the entire email creation process with the API.

### Retrieve Tracking Data

With the SOAP API, you can retrieve tracking data and use it to create reports and dashboards to see how your customers view and respond to your data. Note that you can filter tracking data based on actual data returned via the SOAP API. Dates returned in these tracking events represent the date on which the event occurred. By default, our system operates on CST (UTC-6:00). You can specify time ranges using different offsets.

In most production implementations, data volume in the account requires you to include specific JobIDs in the filter criteria of the request. If requests that don't specify a JobID time out during processing, add a JobID in the filter. If specifying a JobID is not possible, or if your implementation requires a broad range of JobIDs, use a data extract-based procedure instead.

Dates returned in these tracking events represent the date on which the event occurred. By default, our system operates on CST (UTC-6:00). You can specify time ranges using different offsets using the XSD DateTime standard. For example, the following value specifies 10:00 AM January 1st 2018 using EDT time: 2018-01-01T10:00:00-04:00

When retrieving OpenEvents and filtering on the OpenDate using a date range, you receive all events that occurred within the specified date range. These events include events from messages where the send occurred outside of the specified data range.

The SOAP API returns up to 2500 records at a time and indicates whether more data is available. You can perform more retrieves to access this data or continue where the prior identical retrieve request left off:

-   [More Retrieves in Sent Events](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve_sentevent_details_for_job.htm)
-   [Retrieve All Records Since Last Batch](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_all_records_since_last_batch.htm)

### Send Email

You can schedule and send emails with the SOAP API. You can identify message recipients using dynamic, rule-based segmentation of lists, events, and profiles. After the send, you can use the API to return aggregate statistics.

The SOAP API's scope does not include certain functions related to account configuration, such as configuring private IP addresses, dedicated domains, and file transfer locations. The API also offers little control over the creation and execution of file transfer activities, groups, and data filters.

### Development Platform Support for WS-Security 1.0

| Platform | Library / Module |
| --- | --- |
| .NET | WSE 3.0, WCF |
| Java | Axis2, CXF, Glassfish |
| C++ | Axis2/C |
| Perl | WSRF::Lite |
| Python | pyGridWare |
| PHP | soap-wsse.php, Axis2, Instantsvc |
| Ruby | wss4r |

-   [Connect to the API with .NET 3.0 or higher using WCF](atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_web_service_api_using_wcf.htm)
-   [Connect to the API with .NET 2.0 using WSE 3.0](atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_web_service_api_using_wse_30_and_net_20.htm)
-   [Connect to the API using Java and the Axis2 client](atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_soap_api_using_java_and_cxf.htm)
-   [Connect to the API using Java and other SOAP clients](https://developer.salesforce.com/docs/atlas.en-us.mc-sdks.meta/mc-sdks/getting-started-with-the-java-sdk.htm)
-   [Connect to the API using PHP](atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_api_using_php.htm)

### Asynchronous Processing

Your account can be configured to queue calls and process them asynchronously, rather than processing each call at the time it is made. Asynchronous processing prevents dropping calls that are made when the service is unavailable.

If you use asynchronous processing for your triggered emails, Marketing Cloud also offers a feature to allow you to set the priority of the email send. Contact Marketing Cloud if you are interested in enabling this functionality.

### Expected Response Times for Typical Synchronous Calls

Response times for calls vary depending on the types of calls and the amount of data handled by that call. These values represent expected and approximate times and are not guarantees.

| Call Type | Expected Response Time in Seconds |
| --- | --- |
| Triggered Sends | 3 |
| Single Subscriber Add | 3 |
| Single Email Send | 3 |
| Tracking Data Retrievals | 30 |

### Deliverability

When planning your integration, consider the following deliverability issues. If you have questions, contact your Marketing Cloud account manager.

#### Opt-in

Lists coming into Marketing Cloud must contain subscribers who have opted-in.

#### CAN-SPAM

Marketing emails must comply with CAN-SPAM (Controlling the Assault of Non-Solicited Pornography) and Marketing laws Transactional emails are less restricted by CAN-SPAM laws. If you have question about whether an email is commercial or transactional, contact Marketing Cloud's deliverability team.

#### Deliverability Reports

Deliverability reports for an account or subaccounts are sent to the email address associated with the main SOAP API account.

#### Private Domain and Private IP Address

SOAP API accounts must have a private domain and private IP address to protect your integration from potential abuse from other SOAP API enabled accounts.

#### From Address

As much as possible, require that your sub-accounts use From addresses that are not tied to free email providers like Hotmail, Yahoo, and Gmail. Using a free-email provider email address can decrease the deliverability of your customers' email messages (since Yahoo knows the email was not sent from Yahoo).

### Error Handling

The SOAP API commands can act on multiple objects in a single call. Layers of error handling support the flexibility offered by the API.

#### Command Level

Each command returns single string representing the overall status of the action. This status can help you understand of any error occurring during the processing of the command. For example:

```
String status =
integrationFramework.Execute(ref requestID, new ExecuteRequest[] { request }, out results);
// Command Level Status:
// status = OK, Has Error, or Error
```

#### Command-Level Status Values

-   **OK** - This status code states that all objects were successfully acted upon.
-   **Has Error**\- Valid for Create or Update calls with multiple APIObject objects-this status code states that some of the operations failed, while others succeeded.
-   **Error** - This status code states that all delete operations failed during validation or processing.

#### Object Level

```
CreateResult[] results =
integrationFramework.Create(new CreateOptions(), subscribers, out requestid, out status);
// Print out results for each new object created
foreach (CreateResult result in results) {
Console.WriteLine(string.Format("Results for object {0}: Status code: {1}.  Message: {2}.", result.OrdinalID, result.StatusCode, result.StatusMessage));
}
```

##### Output

```
Results for object 0: Status code: OK.  Message: Created Subscriber.
```

Each command also returns a collection of result objects. Each result object contains both an overall status and a status message. The status message contains details about the overall status. Object-Level status values:

-   **OK** - This status code states that the object was successfully acted upon.
-   **Error** - This status code states that the object was unsuccessfully acted upon.

## Internationalization

The SOAP API allows emails to be sent in a variety of character sets. However, this broad support does not guarantee that content is correctly displayed across international email clients. Test international emails extensively.

### Supported Encoding for Outbound Emails

The default encoding for outbound email is us-ascii. The default can be overridden with any of the following encoding types:

| Character Set | Encoding Type |
| --- | --- |
| Central European | iso-8859-2 |
| Chinese | big5 |
| Japanese | Shift-JIS |
| Japanese | iso-2022-JP |
| Korean | EUC-KR |
| Russian | koi8-r |
| Unicode | UTF-8 |
| United States | us-ascii |
| Western European | iso-8859-1 |

The character set of an email can be overridden when the Email object is created or when the email is associated with a Send object. For example:

```
Email email = new Email();
email.CharacterSet = "UTF-8";
Send send = new Send();
send.Email...
// other email information
send.Email.CharacterSet = "UTF-8";
```

### Email Creation and Internationalization

Unicode is supported for the email subject line, HTML body, and text body. For example:

```
Email email = new Email();
email.Subject = "Unicode Supported";
email.HTMLBody = "Unicode Supported";
email.TextBody = "Unicode Supported";
```

Unicode is also supported for attribute values if Marketing Cloud does not serve as database of record.

### Triggered Emails and Internationalization

It is possible to create different TriggeredSendDefinitions for each language - complete with different email content types and headers and footers. For example, if an application needs to support Chinese and Unicode content types for transactional emails, you can programmatically reference the associated TriggeredSendDefinitions as follows:

```
String encoding = "big5";
TriggeredSendDefinition tsd = new TriggeredSendDefinition ();
tsd.CustomerKey = encoding + " Order Confirmation";
TriggeredSend ts = new TriggeredSend();
TriggeredSend.TriggeredSendDefinition = tsd;
... // more triggered send information
```

The benefits of this approach include a single account for all content types and rollup reporting by language.

## Null Values

Depending on the development platform used in your integration and the WSDL proxy used, a generated object may have some more properties to handle null values. The following code samples are examples from .NET 2.0 (for the development environment) and WSE 3.0 (the proxy generator). Due to the way .NET (and other platforms such as Java) handles value types with a null value, the proxy generator outputs more properties to provide the null value granularity assumed by the WSDL. For example:

```
// Set a non-null value send.ID = 2345; send.IDSpecified = true;
```

## Retrieving Objects and Sub-Objects

Some WSDL objects include sub-objects with individual properties. In order to retrieve the information for those sub-objects, you must specify those properties on the sub-object in your call. For example, the Send object includes Client and Email sub-objects, and you can specify the ID of those sub-objects in order to retrieve that information. To get information on those sub-objects, perform a retrieve on the Send object and include the Send.Client.ID and Send.Email.ID properties in that call. Once you have retrieved that information, you can use the IDs to perform a second retrieve and get more information about those sub-objects.

Not all properties on all sub-objects are available to be retrieved. In general, you can perform retrieves using ID, ObjectID, and CustomerKey.

## Working with Dates

Marketing Cloud stores dates in Central Standard Time (CST) with no variation for Daylight Savings Time. When setting dates on objects, use a Coordinated Universal Time (UTC) offset for best results (UTC-6:00). When retrieving dates, convert the dates to the UTC offset to ensure dates are in the format suitable for your application.

## Managing Downtime

When building an integration with an external SOA service, it is useful to have a queuing mechanism in place as part of your architecture to handle any downtime related to Marketing Cloud or your application. Marketing Cloud provides an asynchronous architecture that can receive calls regardless of system status to handle issues related to Marketing Cloud systems. For Internet-related issues, having appropriate queues in place helps when delivering mission critical emails.

Effective use of the GetSystemStatus call can allow an application to gracefully handle any downtime related to Marketing Cloud, the internet, or your application. Below is an example of the GetSystemStatus call. Don't run this call prior to every API call, but only on exception scenarios. For example, if you receive a SOAP fault or another unexpected error, run this call to ensure the exception was not the result of Marketing Cloud system maintenance.

```
// 1. Invoke the GetSystemStatus Call
string message;
SystemStatusResult[] results =
integrationFramework.GetSystemStatus(null, out status, out message, out requestID);
// 2. Output the Overall Status of the Request
Console.WriteLine("Status: {0}", status);
// 3. Output the Status of the System
foreach (SystemStatusResult result in results)
{
   Console.WriteLine("_________________");
   Console.WriteLine(result.SystemStatus);
}
```

## Standards Supported by the SOAP API

-   [Simple Object Access Protocol (SOAP)](http://www.w3.org/TR/soap12-part1/)
-   [Web Service Description Language (WSDL)](http://www.w3.org/TR/2001/NOTE-wsdl-20010315)
-   [WS-I Basic Profile](http://www.ws-i.org/Profiles/BasicProfile-1.1.html)
-   [WS-Security 1.3](http://docs.oasis-open.org/ws-sx/ws-securitypolicy/v1.3/os/ws-securitypolicy-1.3-spec-os.html)

## Related Items

-   [Data Extracts](https://help.salesforce.com/articleView?id=mc_es_data_extract_activity.htm&type=5)
-   [Data Extracts Initiated with the SOAP API](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_data_extract_activity_with_the_soap_web_service_api.htm)
-   [Triggered Email Scenario Guide for Developers](atlas.en-us.noversion.mc-apis.meta/mc-apis/triggered_email_scenario_guide_for_developers.htm)
-   [Asynchronous Processing](atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing.htm)
-   [GetSystemStatus Method](atlas.en-us.noversion.mc-apis.meta/mc-apis/getsystemstatus.htm)

## Related Topics

- More Retrieves in Sent Events (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieve_sentevent_details_for_job.htm)
- Retrieve All Records Since Last Batch (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_all_records_since_last_batch.htm)
- Connect to the API with .NET 3.0 or higher using WCF (atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_web_service_api_using_wcf.htm)
- Connect to the API with .NET 2.0 using WSE 3.0 (atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_web_service_api_using_wse_30_and_net_20.htm)
- Connect to the API using Java and the Axis2 client (atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_soap_api_using_java_and_cxf.htm)
- Connect to the API using PHP (atlas.en-us.noversion.mc-apis.meta/mc-apis/connecting_to_the_api_using_php.htm)
- Data Extracts Initiated with the SOAP API (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_data_extract_activity_with_the_soap_web_service_api.htm)
- Triggered Email Scenario Guide for Developers (atlas.en-us.noversion.mc-apis.meta/mc-apis/triggered_email_scenario_guide_for_developers.htm)
- Asynchronous Processing (atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing.htm)
- GetSystemStatus Method (atlas.en-us.noversion.mc-apis.meta/mc-apis/getsystemstatus.htm)
