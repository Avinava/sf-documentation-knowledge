---
title: "Using Salesforce Features with Apex"
domain: apex-guide
topic: using-salesforce-features-with-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.159Z
keywords: [Salesforce, Features, Apex]
---

# Using Salesforce Features with Apex

# Using Salesforce Features with Apex

Many features of the Salesforce user interface are exposed in Apex so that you can access them programmatically in the Lightning Platform. For example, you can write Apex code to post to a Chatter feed, or use the approval methods to submit and approve process requests.

-   **[Actions](atlas.en-us.apexcode.meta/apexcode/apex_quickaction.htm)**  
    Create quick actions, and add them to your Salesforce Classic home page, to the Chatter tab, to Chatter groups, and to record detail pages. Choose from standard quick actions, such as create and update actions, or create custom actions based on your company’s needs.
-   **[Apex Cursors](atlas.en-us.apexcode.meta/apexcode/apex_cursors.htm)**  
    Use Apex cursors to break up the processing of a SOQL query result into pieces that can be processed within the bounds of a single transaction. Cursors provide you with the ability to work with large query result sets, while not actually returning the entire result set. You can traverse a query result in parts, with the flexibility to navigate forward and back in the result set. Package developers and advanced developers can use cursors to work with high-volume and high-resource processing jobs. Cursors combined with chained queueable Apex jobs are a powerful alternative to batch Apex and address some of batch Apex’s limitations.
-   **[Approval Processing](atlas.en-us.apexcode.meta/apexcode/apex_process.htm)**  
    An approval process automates how records are approved in Salesforce. An approval process specifies each step of approval, including from whom to request approval and what to do at each point of the process.
-   **[Authentication](atlas.en-us.apexcode.meta/apexcode/authentication.htm)**  
    Salesforce provides various ways to authenticate users. Build a combination of authentication methods to fit the needs of your org and your users’ use patterns.
-   **[Chatter Answers and Ideas](atlas.en-us.apexcode.meta/apexcode/apex_forcecom_zones_communities.htm)**  
    In Chatter Answers and Ideas, use zones to organize ideas and answers into groups. Each zone can have its own focus, with unique ideas and answers topics to match that focus.
-   **[Use Cases for the CommercePayments Namespace](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_use_cases.htm)**  
    Review walkthroughs, use cases, and reference material for the CommercePayments platform.
-   **[Connect in Apex](atlas.en-us.apexcode.meta/apexcode/connectAPI_overview.htm)**  
    Use Connect in Apex to develop custom experiences in Salesforce. Connect in Apex provides programmatic access to B2B Commerce, CMS managed content, Experience Cloud sites, topics, and more. Create Apex pages that display Chatter feeds, post feed items with mentions and topics, and update user and group photos. Create triggers that update Chatter feeds.
-   **[Moderate Chatter Private Messages with Triggers](atlas.en-us.apexcode.meta/apexcode/apex_chattermessage_triggers.htm)**  
    Write a trigger for ChatterMessage to automate the moderation of private messages in an org or Experience Cloud site. Use triggers to ensure that messages conform to your company’s messaging policies and don’t contain blocklisted words.
-   **[Data Cloud In Apex](atlas.en-us.apexcode.meta/apexcode/DataCloudInApex.htm)**  
    You can use Apex with Data Cloud objects, with constraints and considerations that are detailed in this topic . Further, you can mock SOQL query responses for Data Cloud data model objects (DMOs) in Apex testing by using SOQL stub methods and a test class.
-   **[DataWeave in Apex](atlas.en-us.apexcode.meta/apexcode/DataWeaveInApex.htm)**  
    DataWeave in Apex uses the Mulesoft DataWeave library to read and parse data from one format, transform it, and export it in a different format. You can create DataWeave scripts as metadata and invoke them directly from Apex. Like Apex, DataWeave scripts are run within Salesforce application servers, enforcing the same heap and CPU limits on the executing code.
-   **[Moderate Feed Items with Triggers](atlas.en-us.apexcode.meta/apexcode/apex_feedItem_triggers.htm)**  
    Write a trigger for FeedItem to automate the moderation of posts in an org or Experience Cloud site. Use triggers to ensure that posts conform to your company’s communication policies and don’t contain unwanted words or phrases.
-   **[Experience Cloud Sites](atlas.en-us.apexcode.meta/apexcode/apex_forcecom_communities.htm)**  
    Experience Cloud sites are branded spaces for your employees, customers, and partners to connect. You can customize and create sites to meet your business needs, then transition seamlessly between them.
-   **[Email](atlas.en-us.apexcode.meta/apexcode/apex_forcecom_email.htm)**  
    You can use Apex to work with inbound and outbound email.
-   **[External Services](atlas.en-us.apexcode.meta/apexcode/apex_external_services.htm)**  
    External Services connect your Salesforce org to a service outside of Salesforce, such as an employee banking service. After you register the external service, you can call it natively in your Apex code. Objects and operations defined in the external service's registered API specification become Apex classes and methods in the ExternalService namespace. The registered service's schema types map to Apex types, and are strongly typed, making the Apex compiler do the heavy lifting for you. For example, you can make a type safe callout to an external service from Apex without needing to use the Http class or perform transforms on JSON strings.
-   **[Flows](atlas.en-us.apexcode.meta/apexcode/apex_forcecom_visualworkflow.htm)**  
    Flow Builder lets admins build applications, known as flows, that automate a business process by collecting data and doing something in your Salesforce org or an external system.
-   **[Formula Evaluation in Apex](atlas.en-us.apexcode.meta/apexcode/apex_formulaeval.htm)**  
    Formula evaluation in Apex helps avoid unnecessary DML statements to recalculate formula field values and evaluate dynamic formula expressions. Dynamic formulas in Apex support SObjects and Apex objects as context objects. The context type that corresponds to the Apex class used in the FormulaBuilder.withType() method must be a global, user-defined Apex class. Any fields, properties, or methods that the formula references must also be global.
-   **[Metadata](atlas.en-us.apexcode.meta/apexcode/apex_metadata.htm)**  
    Salesforce uses metadata types and components to represent org configuration and customization. Metadata is used for org settings that admins control, or configuration information applied by installed apps and packages.
-   **[Permission Set Groups](atlas.en-us.apexcode.meta/apexcode/apex_permission_set_group_testing.htm)**  
    To provide Apex test coverage for permission set groups, write tests using the calculatePermissionSetGroup() method in the System.Test class.
-   **[Platform Cache](atlas.en-us.apexcode.meta/apexcode/apex_cache_namespace_overview.htm)**  
    The Lightning Platform Cache layer provides faster performance and better reliability when caching Salesforce session and org data. Specify what to cache and for how long without using custom objects and settings or overloading a Visualforce view state. Platform Cache improves performance by distributing cache space so that some applications or operations don’t steal capacity from others.
-   **[Salesforce Knowledge](atlas.en-us.apexcode.meta/apexcode/apex_forcecom_knowledge.htm)**  
    Salesforce Knowledge is a knowledge base where users can easily create and manage content, known as articles, and quickly find and view the articles they need.
-   **[Salesforce Files](atlas.en-us.apexcode.meta/apexcode/apex_salesforce_files.htm)**  
    Use Apex to customize the behavior of Salesforce Files.
-   **[Salesforce Connect](atlas.en-us.apexcode.meta/apexcode/apex_connector_top.htm)**  
    Apex code can access external object data via any Salesforce Connect adapter. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. The custom adapter can retrieve data from external systems and synthesize data locally. Salesforce Connect represents that data in Salesforce external objects, enabling users and the Lightning Platform to seamlessly interact with data that’s stored outside the Salesforce org.
-   **[Salesforce Reports and Dashboards API via Apex](atlas.en-us.apexcode.meta/apexcode/apex_analytics_intro.htm)**  
    The Salesforce Reports and Dashboards API via Apex gives you programmatic access to your report data as defined in the report builder.
-   **[Salesforce Sites](atlas.en-us.apexcode.meta/apexcode/apex_forcecom_sites.htm)**  
    Salesforce Sites lets you build custom pages and Web applications by inheriting Lightning Platform capabilities including analytics, workflow and approvals, and programmable logic.
-   **[Support Classes](atlas.en-us.apexcode.meta/apexcode/apex_forcecom_support.htm)**  
    Support classes allow you to interact with records commonly used by support centers, such as business hours and cases.
-   **[Territory Management 2.0](atlas.en-us.apexcode.meta/apexcode/Territory2.htm)**  
    With trigger support for the Territory2 and UserTerritory2Association standard objects, you can automate actions and processes related to changes in these territory management records.