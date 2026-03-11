---
title: "Apex Reference Guide"
domain: apex-reference
topic: apex-reference-guide
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-11T15:42:42.308Z
keywords: [Apex, Reference, Guide, Note]
---

# Apex Reference Guide

# Apex Reference Guide

Apex is a strongly typed, object-oriented programming language that allows developers to execute flow and transaction control statements on the Salesforce Platform server, in conjunction with calls to the API. This reference guide includes built-in Apex classes, interfaces, enums, and exceptions, grouped by namespace. It also includes Apex DML statements to insert, update, merge, delete, and restore data in Salesforce.

For information on the Apex development process, see [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

In API version 51.0 and earlier, Apex Reference information was included in the Apex Developer Guide in the **Apex Language Reference** section.

-   **[Apex Release Notes](atlas.en-us.apexref.meta/apexref/apex_releasenotes.htm)**  
    Use the Salesforce Release Notes to learn about the most recent updates and changes to Apex.
-   **[Apex DML Operations](atlas.en-us.apexref.meta/apexref/apex_dml_section.htm#apex_dml_section)**  
    You can perform DML operations using the Apex DML statements or the methods of the Database class. For lead conversion, use the convertLead method of the Database class. There is no DML counterpart for it.
-   **[ApexPages Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_ApexPages.htm)**  
    The ApexPages namespace provides classes used in Visualforce controllers.
-   **[AppLauncher Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_applauncher.htm)**  
    The AppLauncher namespace provides methods for managing the appearance of apps in the App Launcher, including their visibility and sort order.
-   **[Approval Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Approval.htm)**  
    The Approval namespace provides classes and methods for approval processes.
-   **[Auth Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)**  
    The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.
-   **[Cache Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_cache.htm)**  
    The Cache namespace contains methods for managing the platform cache.
-   **[Canvas Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Canvas.htm)**  
    The Canvas namespace provides an interface and classes for canvas apps in Salesforce.
-   **[ChatterAnswers Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_ChatterAnswers.htm)**  
    The ChatterAnswers namespace provides an interface for creating Account records.
-   **[CommerceBuyGrp Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_CommerceBuyGrp.htm)**  
    The CommerceBuyGrp namespace provides classes and methods for retrieving information about the buyer groups associated with a user.
-   **[CommerceExtension Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_CommerceExtension.htm)**  
    Use the CommerceExtension namespace to define resolution strategies for registered Commerce extensions.
-   **[CommerceOrders Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_commerceorders.htm)**  
    The CommerceOrders namespace provides classes and methods to place orders with integrated pricing, configuration, and validation.
-   **[CommercePayments Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)**  
    Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.
-   **[CommerceTax Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm)**  
    Manage the communication between Salesforce and an external tax engine.
-   **[ComplianceMgmt Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_compliancemgmt.htm)**  
    The ComplianceMgmt namespace provides classes and methods to implement rule processors for compliance control.
-   **[Compression Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_compression.htm)**  
    The Compression namespace provides classes and methods to create and extract zip files.
-   **[ConnectApi Namespace](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)**  
    The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.
-   **[Context Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_context.htm)**  
    The Context namespace provides classes and methods to manage the sharing and consumption of business application data by using Context Service.
-   **[Database Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm)**  
    The Database namespace provides classes used with DML operations.
-   **[Datacloud Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_datacloud.htm)**  
    The Datacloud namespace provides classes and methods for retrieving information about duplicate rules. Duplicate rules let you control whether and when users can save duplicate records within Salesforce.
-   **[DataRetrieval Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_DataRetrieval.htm)**  
    The DataRetrieval namespace provides classes and methods to record details of customer-agent engagements, as well as transcripts of their conversations.
-   **[DataSource Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)**  
    The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.
-   **[DataWeave Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_dataweave.htm)**  
    The DataWeave namespace provides classes and methods to support the invocation of DataWeave scripts from Apex.
-   **[Dom Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Dom.htm)**  
    The Dom namespace provides classes and methods for parsing and creating XML content.
-   **[embeddedai Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_embeddedai.htm)**  
    The embeddedai namespace provides classes and methods to manage and represent records and data in Apex to support embedded AI features.
-   **[EventBus Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_eventbus.htm)**  
    The EventBus namespace provides classes and methods for platform events and Change Data Capture events.
-   **[ExternalService Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_ExternalService.htm)**  
    The ExternalService namespace provides dynamically generated Apex service interfaces and Apex classes for complex object data types.
-   **[Flow Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Flow.htm)**  
    The Flow namespace provides a class for advanced access to flows from Apex such as from Visualforce controllers and asynchronous Apex.
-   **[Flowtesting Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_flowtesting.htm)**  
    The flowtesting namespace provides dynamically generated Apex classes for flow tests that are created in Flow Builder.
-   **[flowuiruntime Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_flowuiruntime.htm)**  
    The classes and methods in this namespace are reserved for internal use only or future use.
-   **[FormulaEval Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_formulaeval.htm)**  
    The FormulaEval namespace provides classes and methods to evaluate dynamic formulas for SObjects and Apex objects. Use the methods to avoid unnecessary DML statements to recalculate formula field values or evaluate dynamic formula expressions.
-   **[fsccashflow Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_fsccashflow.htm)**  
    The fsccashflow namespace provides classes used in the FSCCashFlow Flexcards and its child Flexcards.
-   **[Functions Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_functions.htm)**  
    The Functions namespace provides classes and methods used to invoke and manage Salesforce Functions.
-   **[ise\_bots\_apex Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_ise_bots_apex.htm)**  
    The ise\_bots\_apex namespace provides classes and properties to facilitate dynamic content generation and data handling for menu-driven bot interactions. Create and manage dynamic menu items that adapt to user inputs, context, and underlying object data.
-   **[industriesNlpSvc](atlas.en-us.apexref.meta/apexref/apex_namespace_industriesNlpSvc.htm)**  
    Stores the objects used in Industries Einstein Natural Language Processing (NLP) services.
-   **[IndustriesDigitalLending Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_industriesDigitalLending.htm)**  
    The industriesDigitalLending namespace provides classes used in the Digital Lending OmniScripts and Integration Procedures.
-   **[Invocable Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Invocable.htm)**  
    The Invocable namespace provides classes for calling invocable actions from Apex.
-   **[InvoiceWriteOff Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_invoicewriteoff.htm)**  
    The InvoiceWriteOff namespace provides classes to create credit memos with the total charge amount on the invoice as the write-off amount.
-   **[IsvPartners Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_IsvPartners.htm)**  
    The IsvPartners namespace provides a class associated with Salesforce ISV partner use cases, such as optimizing code, providing great customer trial experiences, and driving feature adoption.
-   **[KbManagement Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_KbManagement.htm)**  
    The KbManagement namespace provides a class for managing knowledge articles.
-   **[LxScheduler Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_lxscheduler.htm)**  
    The LxScheduler namespace provides an interface and classes for integrating Salesforce Scheduler with external calendars.
-   **[Messaging Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm)**  
    The Messaging namespace provides classes and methods for Salesforce outbound and inbound email functionality.
-   **[Metadata Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Metadata.htm)**  
    The Metadata namespace provides classes and methods for working with custom metadata in Salesforce
-   **[PlaceQuote Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_placequote.htm)**  
    The PlaceQuote namespace provides classes and methods to create or update quotes with pricing preferences and configuration options.
-   **[Pref\_center Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_pref_center.htm)**  
    The Pref\_center namespace provides an interface, classes, and methods to create and retrieve data in forms in Preference Manager. Preference Manager, previously called Preference Center, is a feature within the Privacy Center app.
-   **[Process Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_process.htm)**  
    The Process namespace provides an interface and classes for passing data between your organization and a flow.
-   **[QuickAction Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm)**  
    The QuickAction namespace provides classes and methods for quick actions.
-   **[Reports Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)**  
    The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.
-   **[RevSignaling Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_RevSignaling.htm)**  
    The RevSignaling namespace provides classes to extend the standard procedure plan implementation through custom logic. A procedure plan helps you set up your procedures, configure the procedure execution settings, and relate them to a context definition in one centralized location based on your requirements.
-   **[RevSalesTrxn Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_revsalestrxn.htm)**  
    The RevSalesTrxn namespace provides classes and methods to create a sales transaction, such as a quote or an order, with integrated pricing and configuration.
-   **[RichMessaging Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm)**  
    Provides objects and methods for handling content in enhanced Messaging channels.
-   **[RulesAppln Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_rulesappln.htm)**  
    The RulesAppln namespace contains output classes that store details about a rules-based application of payments and credits.
-   **[runtime\_industries\_insurance Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_runtime_industries_insurance.htm)**  
    The runtime\_industries\_insurance namespace provides options classes for insurance operations, such as creating and updating insurance quotes, generating insurance clauses, and running insurance rating.
-   **[Schema Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm)**  
    The Schema namespace provides classes and methods for schema metadata information.
-   **[Search Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Search.htm)**  
    The Search namespace provides classes for getting search results and suggestion results.
-   **[setup\_flow\_performance Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_setup_flow_performance.htm)**  
    The class and methods in this namespace are for internal use only.
-   **[Sfc Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Sfc.htm)**  
    The Sfc namespace contains classes used in Salesforce Files.
-   **[Sfdc\_Checkout Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_checkout.htm)**  
    The Sfdc\_Checkout namespace provides an interface and classes for B2B Commerce apps in Salesforce.
-   **[Sfdc\_Enablement Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_enablement.htm)**  
    The sfdc\_enablement namespace provides classes for creating custom learning items to implement custom exercise types in Enablement programs. Lightning web components are used to render the custom exercises on Program Builder.
-   **[sfdc\_surveys Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_surveys.htm)**  
    The sfdc\_surveys namespace provides an interface for shortening survey invitations.
-   **[Site Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Site.htm)**  
    The Site namespace provides an interface for rewriting Sites URLs.
-   **[Slack Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Slack.htm)**  
    The Slack Namespace provides tools designed to accelerate and ease the process of developing Slack apps on the Salesforce platform.
-   **[Support Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_Support.htm)**  
    The Support namespace provides an interface used for Case Feed.
-   **[System Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)**  
    The System namespace provides classes and methods for core Apex functionality.
-   **[TerritoryMgmt Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_TerritoryMgmt.htm)**  
    The TerritoryMgmt namespace provides an interface used for territory management.
-   **[TxnSecurity Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_TxnSecurity.htm)**  
    The TxnSecurity namespace provides an interface used for transaction security.
-   **[UserProvisioning Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_UserProvisioning.htm)**  
    The UserProvisioning namespace provides methods for monitoring outbound user provisioning requests.
-   **[VisualEditor Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_VisualEditor.htm)**  
    The VisualEditor namespace provides classes and methods for interacting with the Lightning App Builder. The classes and methods in this namespace operate on Lightning components, which include Lightning web components and Aura components.
-   **[Wave Namespace Namespace](atlas.en-us.apexref.meta/apexref/apex_namespace_wave.htm)**  
    The classes in the Wave namespace are part of the CRM Analytics Analytics SDK, designed to facilitate querying CRM Analytics data from Apex code.
-   **[Appendices](atlas.en-us.apexref.meta/apexref/apex_appendices.htm)**