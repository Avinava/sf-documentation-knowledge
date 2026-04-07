---
title: "Triggered Email Scenario Guide For Developers"
domain: mc-apis
topic: triggered-email-scenario-guide-for-developers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.752Z
estimatedTokens: 9380
keywords: [Content, HTMLAttributes, Scenarios, Results, Triggered, Email, Scenario, Developers, documentation, managed, Studio, transactional, messaging, REST, API, review, Send, Process, Triggering, Events, Interaction, Classification, Destination, Management, Options, Test, Reports, Detective, Processing, Priority, Asynchronous, Retention, Policy, Support, Obscuring, Why, Tools, Prerequisites, Owner, Restriction, Cases, SOAP, Sample, Determining, Time, invalid, address, passed, Creating, Pausing, Updating, Publishing, Changes, Starting, Examples, Retrieving, Appendix, TriggeredSend, Error, Codes, TriggeredSendDefinitionCanNotBeCanceled, TriggeredSendDefinitionCanNotBeUpdated, TriggeredSendDefinitionCanNotBeDeleted, TriggeredSendTypeNotFound, TriggeredSendDefinitionObjectIDFound, TriggeredSendDefinitionNotFound, TriggeredSendDefinitionEmailNotFound, TriggeredSendDefinitionListNotFound, TriggeredSendDefinitionFromNameNotFound, TriggeredSendDefinitionListRequired, TriggeredSendDefinitionNameInvalid, TriggeredSendDefinitionFromNameInvalid, TriggeredSendDefinitionKeywordInvalid, TriggeredSendDefinitionBccEmailInvalid, TriggeredSendDefinitionEmailInvalid, InvalidPersonalizationString, SendSpeedGovernorNotEnabled, BCCEmailNotEnabled, MultiPartMimeNotEnabled, DynamicContentNotEnabled, AllSubscribersAccessNotEnabled, TriggeredSendObjectNotFound, TriggeredSendUnableToCreateRequest, TriggeredSendSubscribersNotQueuedForOMM, TriggeredSendErrorNotifyingOMM, TriggeredSendSubscriberProcessingError, TriggeredSendSubscribersNotFound, TriggeredSendNoValidSubscriberToProcess, Zone, Strings, Items]
---

> This documentation applies only to triggered sends that are managed in Email Studio. To use the transactional messaging REST API, review Transactional Messaging API.

# Triggered Email Scenario Guide For Developers

> This documentation applies only to triggered sends that are managed in Email Studio. To use the transactional messaging REST API, review [Transactional Messaging API](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/transactional-messaging-api.htm).

This page contains conceptual, scenario, and procedural information that you can use in preparing to use triggered send emails. It discusses API calls you can use to trigger send emails created in the application. The content of the emails and the interaction to trigger to send the emails can be created in the application. See the Triggered Emails Guide for more information. The Marketing Cloud SOAP API is the preferred method to integrate triggered send emails with your business applications due to its superior error-handling capability and the ability to retrieve tracking data.

This page discusses email messages. You can also create triggered messages for delivery through SMS functionality. Use the REST API to send triggered SMS messages via MobileConnect.

## What Is a Triggered Email

A triggered email is an email communication sent to an individual (subscriber) in response to a subscriber action. For example, sending a confirmation message after a customer makes a purchase is a triggered email.

The following graphic illustrates the process to initiate a triggered email:

### Triggered Email Send Process

![triggeredemailsendprocess.jpg](/docs/resources/img/en-us/noversion?doc_id=images%2Ftriggeredemailsendprocess.jpg&folder=mc-apis)

To set up your integration to use this process, you must:

-   Identify the triggering events and create the code that triggers the email.
-   Create the triggered email message interaction.

### Triggering Events

You identify the events that trigger the email and create code outside of Marketing Cloud to call the triggered email interaction that sends the email. Examples of triggering events include:

-   Completing a web form
-   Purchasing a product through your website
-   Abandoning the shopping cart
-   Performing a search

Your code also captures any subscriber information necessary to send the message. At a minimum, the subscriber email address is required to send the triggered email. You then create code to cause the events that trigger an email to call the Marketing Cloud API and pass the subscriber information to Marketing Cloud.

The API call executes the interaction, which sends the email.

### Components of the Triggered Email Interaction

When you define a triggered email interaction (sometimes called a triggered send definition), you provide information that the system uses each time an email is triggered. Interactions have a unique External Key value that is used by the API calls to initiatethe interaction.

#### Send Classification

A send classification lets you define parameters for an email job in a central location and reuse those parameters for multiple triggered email interactions.

#### Content

The content is the message to send when the interaction is triggered. You create triggered email content with the screens on the **Content** tab within Marketing Cloud. You use the same tools that are available to create user-initiated email. For example, you can target the message using personalization and dynamic content. See the online help available in the application for more information.

#### Destination Management

You can select a subscriber list for the triggered email interaction. When a subscriber who is not already on the selected list triggers the interaction, you can choose to have the application add the subscriber to the list. When a subscriber who is already on the selected list triggers the interaction, you can choose to have the application update the subscriber information.

If your account has data extensions enabled, you can select a data extension for the triggered send instead of a subscriber list. The data extension behaves the same way as the list, except that the fields that are required to add a subscriber are based on the definition of the data extension instead of on the subscriber attributes. The data extension you use must be created from the TriggeredSendDataExtension template.

Do not identify any column as a primary key when you create a data extension from the TriggeredSendDataExtension. TriggeredSendDataExtensions are designed to have a single row for each triggered email request.

#### Send Options

The send options you specify on a triggered email interaction relate to how the interaction tracks statistics from the messages.

You can also specify a keyword to categorize the triggered email interaction. API calls can use the keyword to find one or more related triggered email interaction.

### Test Sends

Triggered email interactions must be started before you can use them to trigger live or test emails. You can use the send options on the interaction to prevent activity from your test sends from appearing in tracking and reports. Any more isolation of test sends from your production environment must be done using the code around the triggering events.

### Tracking and Reports

Marketing Cloud collects summary tracking and subscriber-level tracking for a triggered email. You can see this tracking in the application or retrieve the tracking with the API.

### List Detective

When a subscriber triggers an email, the List Detective tool scans the email address. The List Detective protects your deliverability by preventing the sending of email to bad addresses. See the application online help for more information on List Detective. If the email address of the person triggering the email is identified as bad by List Detective, the system does not send the email message, so the send does not appear in your tracking. If you collect the triggering email addresses in a data extension, the List Detective prevents bad email addresses from being collected.

### Processing Priority

If your account has message priority enabled, Marketing Cloud can allow you to choose the priority of triggered sends. Priority dictates the time a new triggered send request could remain queued for processing. Once processing is completed, the request is handed off to mail processing systems to evaluate message content and send the rendered message content via the Marketing Cloud sending engine. You can designate the following priorities:

-   **High:** Queued immediately.
-   **Medium:** Queued up to 3 minutes by default. It then takes up to 1 minute to send the email.
-   **Low:** Queued every 5 minutes. It then takes up to 5 minutes to send the email.

### Asynchronous Processing

Marketing Cloud offers the ability to use asynchronous processing at the API layer with triggered sends. Asynchronous processing allows your API calls to be queued in an async server before being processed. When using asynchronous processing, an instantaneous response lets your system know that the call has been queued. The response does not provide details on if the request was invalid due to missing required fields or other validation concerns. If you need immediate feedback on these types of errors, use standard synchronous processing.

### HTMLAttributes

HTML attributes are a type of attribute that can be used only with triggered sends. Subscriber attributes of this type can contain more than the 2000 characters are allowed in a normal subscriber attributes. HTML type attribute can contain Unicode characters to be delivered to an email template dynamically.

Ideal use cases for HTML attributes are passing preprocessed tabular data (like an order confirmation) along with other subscriber information when an event is triggered.

The name of an attribute indicates whether the attribute is of the HTML type. Attributes with the prefix HTML\_\_ (two underscores) are treated differently by the triggered send email engine. Using HTML attributes in the content of an email is similar to using other attributes:

```
%%HTML__table%%
```

HTML attributes don't have robust support for link tracking, so ideal use cases don't rely on the need to track links in the HTML content.

### Retention Policy Support for Triggered Sends

The data extension used to capture triggered send subscriber data supports automatic data retention policies. When defining a triggered send with a data extension, you specify how long to retain the data. The default is six months. You can select a retention period ranging from one day to forever. The system deletes the data at the end of the retention period. Subscriber data is not removed by the data retention policy; only the data extension data is removed.

You can delete data from the data extension, as well as import the data back in using AMPscript.

### Obscuring Data for Triggered Sends

This feature obscures any information permanently stored in Marketing Cloud (other than the subscriber key) that would personally identify a subscriber. This includes email address and subscriber name. Marketing Cloud one-way hashes the information that comes into our system, and Marketing Cloud has the only hash key. Data is encrypted and decrypted by Marketing Cloud. For future reconciliation purposes, customers are encouraged to keep a copy of all their subscriber records.

Please contact your account representative if you would like to activate the data retention or data obscuring features.

## Why Use a Triggered Email

Use triggered emails to provide automated, personalized responses to your customers' activities on your website. Emails are trackable, targeted, and sent in real time. With triggered emails, you can:

-   Track your opens, clicks, and emails.
-   Capture subscribers to give the option to opt-in to mailing lists.
-   Target the content of emails by using tools such as personalization, dynamic content, and
-   AMPscript.
-   Achieve high deliverability and scalability.
-   Maintain the ability to change content over time.

Use auto-forward and auto-reply with messages processed by Reply Mail Management.

-   Define and send a message triggered by an event within Marketing Cloud, such as a subscriber adding themselves to a list using Web Collect, or by an event outside of Marketing Cloud, such as an action on your website.

## Tools and Prerequisites

Before you can use the Marketing Cloud API to trigger emails, you need the following information:

-   You need a user on your account that is enabled to use the API. You use the API user's name and password to log in to your account programmatically. Contact your Marketing Cloud account manager to create an API user for your account.
-   Your organization must identify the events that trigger the email message.
-   You need to capture the subscriber attributes that are needed in the content of the email message for personalization and dynamic content.

You need the External Key of the interaction to trigger. The interaction can be created within the application or by using the API.

Use the following location to create and test your triggered emails. For the SOAP API, you need the WSDL (Web Service Description Language) file that resides at this location: [https://YOUR\_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl](https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl)

## Scenarios

The following scenarios cover the most common business processes around triggering emails with code samples.

If you choose to create and manage your triggered email interaction and view tracking in the application, you use the API to trigger an email when the triggering event occurs. You use only the first two scenarios:

-   Triggering an Email
-   Determining the From Information at Send Time

If you choose to create and manage your triggered email interaction and retrieve tracking with the API, you also use the remaining scenarios:

-   Creating a Triggered Email Interaction
-   Pausing an Interaction
-   Updating a Triggered Email Interaction
-   Publishing Changes to an Interaction
-   Starting a Triggered Email Interaction
-   Retrieving Tracking Data

You must start the triggered email interaction after you create it in order for the interaction to send emails. To change the interaction after you start it, you must pause the interaction. After you make the updates, you must publish changes and restart the triggered email interaction.

### Owner Name Restriction

If you use the feature to determine the from email address at send time, the system uses the subscriber owner as the from address. In this case, the owner email address cannot be the same email address used by Reply Mail Management (RMM).

### Properties for Special Cases

The **Subscriber.Owner property** on the TriggeredSend object is primarily for dynamically changing from name / from address.

The **Subscriber.Owner.Client property** is used to specify an On Your Behalf account to associate the subscriber with.

### Triggering an Email

Use the following code to cause events in your website or application to trigger a Marketing Cloud email. If you work within an Enterprise 2.0 account, specify the ClientID property for the business unit in which the triggered send resides.

#### SOAP API Sample

For information on ETIntegrationFramework, review [Choose Your Programming Language](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/choose-programming-lang.htm).

```
TriggeredSendDefinition tsd = new TriggeredSendDefinition();
tsd.CustomerKey = "QuickTipsToStart"; // used for programmatic access using an external key  TriggeredSend ts = new TriggeredSend();
ts.TriggeredSendDefinition = tsd;
ts.Subscribers = new Subscriber[1]; ts.Subscribers[0] = new Subscriber();
ts.Subscribers[0].EmailAddress = "johndoe@example.com";
ts.Subscribers[0].SubscriberKey = "johndoe@example.com";
ts.Subscribers[0].Attributes = new ETIntegrationFramework.Attribute[2];
ts.Subscribers[0].Attributes[0] = new ETIntegrationFramework.Attribute();
ts.Subscribers[0].Attributes[0].Name = "HTML__Tips";
// HTML__connotes an HTML attribute
ts.Subscribers[0].Attributes[0].Value = "<ul><li>Log on.</li><li>Join the community.</li></ul>";
ts.Subscribers[0].Attributes[1] = new ETIntegrationFramework.Attribute();
ts.Subscribers[0].Attributes[1].Name = "Account Number";
ts.Subscribers[0].Attributes[1].Value = "254461";
CreateResult[] results = etIntegrationFramework.Create(new CreateOptions(), new APIObject[] { ts }, out requestID, out status);
Console.WriteLine("results[0].StatusCode:" + results[0].StatusCode);
Console.WriteLine("results[0].StatusMessage:" + results[0].StatusMessage);
```

### Determining the From Information at Send Time

You use the following code to cause events in your website or application to trigger a Marketing Cloud email with a From Name and From Address specific to a subscriber attribute. For example, you could use this functionality to send an email message that is from the regional sales manager responsible for the state the subscriber resides in.

#### SOAP API Example

```
TriggeredSendDefinition tsd = new TriggeredSendDefinition(); tsd.CustomerKey = "WelcomeEmail"; // used for programmatic access using an external key
TriggeredSend ts = new TriggeredSend();
ts.TriggeredSendDefinition = tsd;
ts.Subscribers = new Subscriber[1];
ts.Subscribers[0] = new Subscriber();
ts.Subscribers[0].EmailAddress = "invalid.com";
ts.Subscribers[0].SubscriberKey = "invalid.com";
ts.Subscribers[0].Owner = new Owner();
ts.Subscribers[0].Owner.FromAddress = "midwest@example.com";
ts.Subscribers[0].Owner.FromName = "Midwest Example";
ts.Subscribers[0].Attributes = new ETIntegrationFramework.Attribute[2];
ts.Subscribers[0].Attributes[0] = new ETIntegrationFramework.Attribute();
ts.Subscribers[0].Attributes[0].Name = "ExpDate";
ts.Subscribers[0].Attributes[0].Value = "12/12/2008";
ts.Subscribers[0].Attributes[1] = new ETIntegrationFramework.Attribute();
ts.Subscribers[0].Attributes[1].Name = "User_ID";
ts.Subscribers[0].Attributes[1].Value = "Talisman";
 CreateResult[] results = etIntegrationFramework.Create(new CreateOptions(), new
APIObject[] { ts }, out requestID, out status);
 // Cast CreateResult to TriggeredSendCreateResult to get detailed errors
TriggeredSendCreateResult tscr = (TriggeredSendCreateResult)results[0];
if (tscr.SubscriberFailures.Length >0)
{
    Console.WriteLine(tscr.SubscriberFailures[0].Subscriber.EmailAddress); // Email Address
    Console.WriteLine(tscr.SubscriberFailures[0].ErrorDescription); // Error Description
    Console.WriteLine(tscr.SubscriberFailures[0].ErrorCode); // Error Code
}
```

##### Response (If an invalid email address was passed)

```
invalid.com Error Code: 5 - The Email Address for this subscriber has invalid syntax. TriggeredSendSubscriberProcessingError
```

### Creating a Triggered Email Interaction

Creating a triggered email interaction through the API allows you to avoid using the application interface. For example, you might use this functionality if you have created your own interface for creating triggered email interactions.

You must start the triggered email interaction before the interaction sends emails.

#### SOAP API Example

```
TriggeredSendDefinition tsd = new TriggeredSendDefinition();
tsd.CustomerKey = "WelcomeEmail";
tsd.Name = "Created from SOAP API";
tsd.TriggeredSendType = TriggeredSendTypeEnum.Continuous;
tsd.TriggeredSendTypeSpecified = true;
tsd.Email = new Email();
tsd.Email.ID = 54568;
tsd.Email.IDSpecified = true;
tsd.SendClassification = new SendClassification();
 CreateResult[] results = etIntegrationFramework.Create(new
CreateOptions(), new APIObject[] { tsd }, out requestID, out status);
 Console.WriteLine("results[0].StatusCode:" + results[0].StatusCode);
Console.WriteLine("results[0].StatusMessage:" +
results[0].StatusMessage);
```

### Pausing an Interaction

You must pause the triggered email interaction before you can make changes to it. Pausing the interaction sets the status to Paused and prevents the interaction from sending emails. Requests for the triggered email are queued to be sent after you start the interaction.

#### SOAP API Example

To pause a TriggeredSendDefinition, set the state of the TriggeredSendDefinition to Inactive. In the Inactive state, the TriggeredSendDefinition is accepting and queuing TriggeredSend requests. In this state, a marketer can make modifications to the definition and associated email and content areas and publish changes by setting the RefreshContent property to True.

```
TriggeredSendDefinition tsd = new TriggeredSendDefinition();
tsd.CustomerKey = "WelcomeEmail";
tsd.RefreshContent = true;
tsd.RefreshContentSpecified = true;
 UpdateResult[] results = etIntegrationFramework.Update(new UpdateOptions(), new
APIObject[] { tsd }, out requestID, out status);
 Console.WriteLine(status);
Console.WriteLine(results[0].StatusCode);
Console.WriteLine(results[0].StatusMessage);
```

### Updating a Triggered Email Interaction

Updating the triggered email interaction is the process of changing the message content or other parameter of the interaction. You must pause the interaction before you can update it. You must publish changes after you update in order for the changes to be available to the interaction.

When updating a TriggeredSendDefinition, set only the properties you want to update and the key of the TriggeredSendDefinition.

#### SOAP API Example

```
TriggeredSendDefinition tsd = new TriggeredSendDefinition();
tsd.CustomerKey = "WelcomeEmail"; // used for programmatic access
tsd.Description = "Quick tips for new users";
tsd.Email = new Email();
tsd.Email.ID = 12345;
tsd.Email.IDSpecified = true;
tsd.TriggeredSendStatus = TriggeredSendStatusEnum.Inactive;
tsd.TriggeredSendStatusSpecified = true;
 UpdateResult[] results = etIntegrationFramework.Update(new UpdateOptions(), new
APIObject[] { tsd }, out requestID, out status);
 Console.WriteLine(status);
Console.WriteLine(results[0].StatusCode);
Console.WriteLine(results[0].StatusMessage);
```

### Publishing Changes to an Interaction

After you update a triggered email interaction, you must publish the changes to make them available. You publish changes by setting the RefreshContent property to True. After you publish the changes, you must start the interaction in order for it to resume sending emails.

#### SOAP API Example

```
TriggeredSendDefinition tsd = new TriggeredSendDefinition();
tsd.CustomerKey = "WelcomeEmail"; // used for programmatic access
tsd.RefreshContent = true;
tsd.RefreshContentSpecified = true;
 UpdateResult[] results = etIntegrationFramework.Update(new UpdateOptions(), new
APIObject[] { tsd }, out requestID, out status);
 Console.WriteLine(status);
Console.WriteLine(results[0].StatusCode);
Console.WriteLine(results[0].StatusMessage);
```

### Starting a Triggered Email Interaction

Starting a triggered email interaction sets the status to Active and allows the interaction to send emails in response to trigger events. You must start a triggered email interaction after you create it and after you publish changes to it.

#### SOAP API Examples

```
TriggeredSendDefinition tsd = new TriggeredSendDefinition();
tsd.CustomerKey = "WelcomeEmail"; // used for programmatic access
tsd.TriggeredSendStatus = TriggeredSendStatusEnum.Active;
tsd.TriggeredSendStatusSpecified = true;
 UpdateResult[] results = etIntegrationFramework.Update(null, new APIObject[] { tsd }, out
requestID, out status);
 Console.WriteLine(status);
Console.WriteLine(results[0].StatusCode);
Console.WriteLine(results[0].StatusMessage);
```

### Retrieving Tracking Data

You can view tracking data in the application or retrieve it using the SOAP API.

#### SOAP API Example

```
string requestID = null; APIObject[] results = null; RetrieveRequest request = new RetrieveRequest();  // Build filter for Retrieval of Triggered events SimpleFilterPart sfp = new SimpleFilterPart();
sfp.Property = "CustomerKey";
sfp.SimpleOperator = SimpleOperators.equals;
sfp.Value = new string[] { "WelcomeEmail" };
 // Retrieve TriggeredSendDefinition ObjectId
RetrieveRequest rr = new RetrieveRequest();
rr.ObjectType = "TriggeredSendDefinition";
rr.Filter = sfp;
rr.Properties = new string[] { "ObjectID" };
 string status = integrationFramework.Retrieve(rr, out requestID, out results);
 for (int i = 0; i < results.Length; i++)
{
    Console.WriteLine(string.Format("{0} ObjectID: {1}", i,
((TriggeredSendDefinition)results[i]).ObjectID));
}
 // We want click data: JobID, Subscriberkey, EventDate, and URL
request.ObjectType = "SentEvent";
request.Properties = new string[] { "SendID", "SubscriberKey", "EventDate" };
 // We want to filter by a specific TriggedSendID and a data range
 // First, the TriggeredSendID
SimpleFilterPart TriggeredSendFilter = new SimpleFilterPart();
TriggeredSendFilter.Property = "TriggeredSendDefinitionObjectID";
TriggeredSendFilter.SimpleOperator = SimpleOperators.equals;
TriggeredSendFilter.Value = new string[] {
((TriggeredSendDefinition)results[0]).ObjectID.ToString() };
 // Now, the date range
SimpleFilterPart dateFilter = new SimpleFilterPart();
dateFilter.Property = "EventDate";
dateFilter.SimpleOperator = SimpleOperators.between;
dateFilter.DateValue = new DateTime[2];
dateFilter.DateValue[0] = DateTime.UtcNow.AddDays(-1);
dateFilter.DateValue[1] = DateTime.UtcNow;
 // Put them together
ComplexFilterPart filter = new ComplexFilterPart();
filter.LeftOperand = TriggeredSendFilter;
filter.LogicalOperator = LogicalOperators.AND;
filter.RightOperand = dateFilter;
request.Filter = filter;
status = integrationFramework.Retrieve(request, out requestID, out results);
 Console.Write(status);
 // Loop through the results displaying them to the console
for (int cntr = 0; cntr < results.Length; cntr++)
{
    SentEvent se = results[cntr] as SentEvent;
    Console.WriteLine("{0} sent on {1}.",
    se.SubscriberKey, se.EventDate); }
```

##### Results

```
johndoe@example.com sent on 3/20/2008 3:31:52 PM. johndoe@example.com sent on 3/20/2008 3:38:49 PM.}
```

## Appendix A: API Objects

You use the following API objects when sending triggered emails.

### TriggeredSend Objects

-   TriggeredSendDefinition - The triggered email interaction
-   TriggeredSend - An instance of the email being triggered
-   TriggeredSendCreateResult - The result of creating a TriggeredSend object
-   TriggeredSendExclusionList - Used to exclude subscribers from a send definition
-   TriggeredSendType (Enum) - The triggered send type, represented by a numeric value
-   TriggeredSendStatus (Enum) - The triggered send status, represented by a numeric value
-   SendClassification - The send classification of the triggered email interaction
-   DeliveryProfile - The record that contains the IP address, domain, header inclusion, and footer inclusion information for the triggered email interaction
-   SenderProfile - The record that contains the from name and from email address for the triggered email interaction

### TriggeredSend Tracking Objects

-   OpenEvent - An instance of a subscriber opening an email
-   SentEvent - An instance of a subscriber being sent an email
-   NotSentEvent - An instance of an email not being sent to a subscriber due to an issue with the subscriber information-for example, the subscriber being unsubscribed
-   BounceEvent - An instance of an email bouncing
-   UnsubEvent - An instance of a subscriber unsubscribing
-   ClickEvent - An instance of a subscriber clicking a link in an email
-   ForwardedEmailEvent - An instance of a subscriber forwarding an email message using the Forward-to-a-Friend feature
-   ForwardedEmailOptinEvent - An instance of a new subscriber opting in to a mailing list after receiving an email forwarded using the Forward-to-a-Friend feature

## Appendix B: Error Codes

See the list of error codes for possible errors when sending triggered emails.

#### 17000 TriggeredSendDefinitionCanNotBeActivated

-   Type: System
-   Message
-   Triggered Send Definition Cannot Be Activated

#### 17001 TriggeredSendDefinitionCanNotBeCanceled

-   Type: System
-   Message
-   Triggered Send Definition Cannot Be Canceled

#### 17002 TriggeredSendDefinitionCanNotBeDeactivated

-   Type: System
-   Message
-   Triggered Send Definition Cannot Be Deactivated

#### 17003 TriggeredSendDefinitionCanNotBeUpdated

-   Type: System
-   Message
-   Triggered Send Definition Cannot Be Updated

#### 17004 TriggeredSendDefinitionCanNotBeDeleted

-   Type: System
-   Message
-   Triggered Send Definition Cannot Be Deleted

#### 17005 TriggeredSendDefinitionContentCanNotBeRefreshed

-   Type: System
-   Message
-   Triggered Send Definition Content Cannot Be Refreshed

#### 17010 TriggeredSendDefinitionObjectIdOrCustomerKeyNotFound

-   Type: Validation
-   Message
-   Triggered Send Definition Object ID or Customer Key Not Found

#### 17011 TriggeredSendTypeNotFound

-   Type: Validation
-   Message
-   Triggered Send Type Not Found

#### 17012 TriggeredSendDefinitionObjectIDFound

-   Type: Validation
-   Message
-   Triggered Send Definition Object ID Found

#### 17013 TriggeredSendDefinitionEmailIDOrPartnerKeyNotFound

-   Type: Validation
-   Message
-   Triggered Send Definition Email ID or Partner Key Not Found

#### 17014 TriggeredSendDefinitionSendClassificationNotFound

-   Type: Validation
-   Message
-   Triggered Send Definition Send Classification Not Found

#### 17015 TriggeredSendDefinitionNotFound

-   Type: Validation
-   Message
-   Triggered Send Definition Not Found

#### 17016 TriggeredSendDefinitionEmailNotFound

-   Type: Validation
-   Message
-   Triggered Send Definition Email Not Found

#### 17017 TriggeredSendDefinitionListNotFound

-   Type: Validation
-   Message
-   Triggered Send Definition List Not Found

#### 17018 TriggeredSendDefinitionHeaderContentNotFound

-   Type: Validation
-   Message
-   Triggered Send Definition Header Content Not Found

#### 17019 TriggeredSendDefinitionFooterContentNotFound

-   Type: Validation
-   Message
-   Triggered Send Definition Footer Content Not Found

#### 17020 TriggeredSendDefinitionFromNameNotFound

-   Type: Validation
-   Message
-   Triggered Send Definition From Name Not Found

#### 17021 TriggeredSendDefinitionFromAddressNotFound

-   Type: Validation
-   Message
-   Triggered Send Definition From Address Not Found

#### 17022 TriggeredSendDefinitionListRequired

-   Type: Validation
-   Message
-   Triggered Send Definition List Required

#### 17023 TriggeredSendDefinitionAutoAddOrAutoUpdateNotFound

-   Type: Validation
-   Message
-   Triggered Send Definition Auto Add or Auto Update Not Found

#### 17024 TriggeredSendDefinitionDeliverProfileHeaderContentNotFound

-   Type: Validation
-   Message
-   Triggered Send Definition Delivery Profile Header Content Not Found

#### 17025TriggeredSendDefinitionDeliverProfileFooterContentNotFound

-   Type: Validation
-   Message
-   Triggered Send Definition Delivery Profile Footer Content Not Found

#### 17100 TriggeredSendDefinitionCustomerKeyInvalid

-   Type: Validation
-   Message
-   Triggered Send Definition Customer Key Invalid

#### 17101 TriggeredSendDefinitionNameInvalid

-   Type: Validation
-   Message
-   Triggered Send Definition Name Invalid

#### 17102 TriggeredSendDefinitionEmailSubjectInvalid

-   Type: Validation
-   Message
-   Triggered Send Definition Email Subject Invalid

#### 17103 TriggeredSendDefinitionEmailPartnerKeyInvalid

-   Type: Validation
-   Message
-   Triggered Send Definition Email Partner Key Invalid

#### 17104 TriggeredSendDefinitionListPartnerKeyInvalid

-   Type: Validation
-   Message
-   Triggered Send Definition List Partner Key Invalid

#### 17105 TriggeredSendDefinitionFromNameInvalid

-   Type: Validation
-   Message
-   Triggered Send Definition From Name Invalid

#### 17106 TriggeredSendDefinitionFromAddressInvalid

-   Type: Validation
-   Message
-   Triggered Send Definition From Address Invalid

#### 17107 TriggeredSendDefinitionKeywordInvalid

-   Type: Validation
-   Message
-   Triggered Send Definition Keyword Invalid

#### 17108 TriggeredSendDefinitionBccEmailInvalid

-   Type: Validation
-   Message
-   Triggered Send Definition BCC Email Invalid

#### 17110 TriggeredSendDefinitionDynamicEmailSubjectInvalid

-   Type: Validation
-   Message
-   Triggered Send Definition Dynamic Email Subject Invalid

#### 17111 TriggeredSendDefinitionEmailInvalid

-   Type: Validation
-   Message
-   Triggered Send Definition Email Invalid

#### 17112 InvalidPersonalizationString

-   Type: Validation
-   Message
-   Invalid Personalization String

#### 17113 TriggeredSendDefinitionSendWindowOpenInvalid

-   Type: Validation
-   Message
-   Triggered Send Definition Send Window Open Invalid

#### 17114 TriggeredSendDefinitionSendWindowCloseInvalid

-   Type: Validation
-   Message
-   Triggered Send Definition Send Window Close Invalid

#### 17200 SendSpeedGovernorNotEnabled

-   Type: Validation
-   Message
-   Send Speed Governor Not Enabled

#### 17201 BCCEmailNotEnabled

-   Type: Validation
-   Message
-   BCC Email Not Enabled

#### 17203 MultiPartMimeNotEnabled

-   Type: Validation
-   Message
-   Multipart MIME Not Enabled

#### 17204 DynamicContentNotEnabled

-   Type: Validation
-   Message
-   Dynamic Content Not Enabled

#### 17205 AllSubscribersAccessNotEnabled

-   Type: Validation
-   Message
-   All Subscribers Access Not Enabled

The details of the error response include these error IDs and codes, but that response may not include the message associated with these errors.

#### 18000 TriggeredSendObjectNotFound

-   Type: Validation
-   Messages
-   Triggered Send Object not found
-   Resolution
-   Ensure you are passing a TriggeredSend object into the API call

#### 18001 TriggeredSendSubscriberProcessingParametersNotFound

-   Type: Validation
-   Messages
-   The Triggered Send Definition is not completely configured or in a new status. Please check Triggered Send Definition configuration. (Needs to be updated)
-   Resolution
-   Complete the configuration of the Triggered Send Definition or start the Triggered SendDefinition.

#### 18002 TriggeredSendUnableToCreateRequest

-   Type: Validation
-   Messages
-   Triggered Send Definition ID/Customer Key is invalid (misspelled in code)
-   Triggered Send Definition ID/Customer Key don't match (misspelled in code)
-   Triggered Send must be in an Active or Inactive status
-   No Triggered Send Definition ID or External key supplied (needs to be updated)
-   Triggered Send Definition ID is invalid (needs to be updated)
-   The Triggered Send Object must contain the Triggered Send ID or the Customer Key (Needs to be updated)
-   The TriggeredSendDefinitionID provided is not valid for this account. Please check Triggered Send Definition configuration (Needs to be updated)
-   Invalid Customer Key
-   The Triggered Send Definition is not completely configured or in a new status. Please check Triggered Send Definition configuration.
-   Resolution
-   Ensure the Triggered Send Definition is started.
-   Ensure the Triggered Send Definition object contains a populated CustomerKey or ObjectID property.
-   Ensure the Triggered Send Definition object CustomerKey or ObjectID property is valid.
-   If the message states "Exception occurred during \[CreateTriggeredSend\]", contact Marketing Cloud support.

#### 18003 TriggeredSendSubscribersNotQueuedForOMM

-   Type: System
-   Messages
-   Exception occurred during \[CreateTriggeredSend\]
-   Resolution
-   Contact Marketing Cloud support

#### 18004 TriggeredSendErrorNotifyingOMM

-   Type: System
-   Messages
-   Exception occurred during \[CreateTriggeredSend\]
-   Resolution
-   Contact Marketing Cloud support

#### 18005 TriggeredSendUnableToUpdateSubscriberProcessingResults

-   Type: System
-   Messages
-   Exception occurred during \[CreateTriggeredSend\]
-   Resolution
-   Contact Marketing Cloud support

#### 18006 TriggeredSendSubscriberProcessingError

-   Type: Validation
-   System
-   Messages
-   Unhandled exceptions related to TriggeredSend subscriber processing
-   Subscriber was excluded by domain exclusion list.
-   Subscriber Owner FromEmail property value is set to an invalid email address
-   Resolution
-   If using the FromEmail property on the Subscriber's Owner object, ensure the value is a valid email address
-   If this code is on the Subscriber in the SubscriberFailures array on the TriggeredSendCreateResult object, log the subscriber and mark them undeliverable (as the email address' domain in on the Marketing Cloud spam filter).
-   Contact Marketing Cloud support

#### 180007 TriggeredSendSubscribersNotFound

-   Type: Validation
-   Messages
-   The Triggered Send Object must have subscribers associated with it
-   Resolution
-   Add one or many Subscribers to the TriggeredSend object

#### 180008 TriggeredSendNoValidSubscriberToProcess

-   Type: Validation
-   Messages
-   Unable to queue Triggered Send request. There are no valid subscribers.
-   Triggered Send request was not queued. There are no valid subscribers.
-   Resolution
-   If using SOAP, check the SubscriberFailures array on the TriggeredSendCreateResult object
-   Ensure all required attributes of the subscriber are passed in

## Appendix C: Time Zone Strings

You can pass the following strings in as the value of the TimeZone parameter, and they are converted to the appropriate numeric strings.

| CentralEasternMountainPacificAbu Dhabi, Muscat, TblisiAlaskaArizonaAthensAtlantic Time (Canada)AucklandAustralia (East)Australia (Mid)Baghdad, Kuwait, NairobiBangkokBangladeshBerlinBrasiliaBuenos AiresCairoCentral TimeCentral Time (US & Canada)ChinaEastern EuropeEastern TimeEastern Time (US & Canada)FijiGMT +10:30GMT +11:30GMT +13GMT +14GMT +9:30GMT -8:30GMT 0GMT+1GMT+10GMT+11GMT+12GMT+2GMT+3GMT+3:30GMT+4GMT+4:30GMT+5GMT+5:30 | GMT+6GMT+6:30GMT+7GMT+8GMT+9GMT, LondonGMT-1GMT-10GMT-11GMT-12GMT-2GMT-3GMT-3:30GMT-4GMT-5GMT-6GMT-7GMT-8GMT-9GMT-9:30GuamHawaiiHong Kong, Taiwan, SingaporeIndiaIndiana (East)IslamabadIsraelKabulMexico CityMid-AtlanticMoscowMountain TimeMountain Time (US & Canada)NewfoundlandPacific TimePacific Time (US & Canada)ParisPerthPragueTehranTokyo |
| --- | --- |

## Related Items

-   [Triggered Emails Guide](https://help.salesforce.com/articleView?id=mc_es_triggered_emails.htm&type=5)
-   [Mobile Messages](https://help.salesforce.com/articleView?id=mc_es_sms_interactions.htm&type=5)
-   [MobileConnect API](atlas.en-us.noversion.mc-apis.meta/mc-apis/using-the-mobileconnect-api.htm)
-   [Send Classifications](https://help.salesforce.com/articleView?id=mc_es_send_classifications.htm&type=5)
-   [Data Extensions](https://help.salesforce.com/articleView?id=mc_es_data_extension_data_relationships_classic.htm&type=5)
-   [Triggered Emails Guide](https://help.salesforce.com/articleView?id=mc_es_triggered_emails.htm&type=5)
-   [What Happens When You Click Send?](https://help.salesforce.com/articleView?id=mc_es_system_guides.htm&type=5)
-   [AMPscript Guide](https://developer.salesforce.com/docs/atlas.en-us.mc-programmatic-content.meta/mc-programmatic-content/index.htm)
-   [Reply Mail Management Instruction Guide](https://help.salesforce.com/articleView?id=mc_es_reply_mail_management.htm&type=5)
-   [Error Codes](atlas.en-us.noversion.mc-apis.meta/mc-apis/error_codes.htm)
-   [Asynchronous Processing](atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing.htm)

## Related Topics

- MobileConnect API (atlas.en-us.noversion.mc-apis.meta/mc-apis/using-the-mobileconnect-api.htm)
- Error Codes (atlas.en-us.noversion.mc-apis.meta/mc-apis/error_codes.htm)
- Asynchronous Processing (atlas.en-us.noversion.mc-apis.meta/mc-apis/asynchronous_processing.htm)
