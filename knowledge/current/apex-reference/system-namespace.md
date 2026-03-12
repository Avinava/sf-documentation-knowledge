---
title: "System Namespace"
domain: apex-reference
topic: system-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:31.624Z
estimatedTokens: 7166
namespace: System
keywords: [System, provides, classes, core, Apex, functionality.]
---

# System Namespace

> The System namespace provides classes and
  methods for core Apex functionality.

**Namespace:** `System`

# System Namespace

The System namespace provides classes and methods for core Apex functionality.

The following are the classes in the System namespace.

-   **[AccessLevel Class](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel)**
    Defines the different modes, such as system or user mode, that Apex database operations execute in.
-   **[AccessType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_System_AccessType.htm)**
    Specifies the access check type for the fields of an sObject.
-   **[Address Class](atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm#apex_class_system_Address)**
    Contains methods for accessing the component fields of address compound fields.
-   **[Answers Class](atlas.en-us.apexref.meta/apexref/apex_classes_answers.htm#apex_classes_answers)**
    Represents zone answers.
-   **[ApexPages Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_apexpages.htm#apex_methods_system_apexpages)**
    Use ApexPages to add and check for messages associated with the current page, as well as to reference the current page.
-   **[Approval Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm#apex_methods_system_approval)**
    Contains methods for processing approval requests and setting approval-process locks and unlocks on records.
-   **[Assert Class](atlas.en-us.apexref.meta/apexref/apex_class_System_Assert.htm#apex_class_System_Assert)**
    Contains methods to assert various conditions with test methods, such as whether two values are the same, a condition is true, or a variable is null.
-   **[AsyncInfo Class](atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncInfo.htm#apex_class_System_AsyncInfo)**
    Provides methods to get the current stack depth, maximum stack depth, and the minimum queueable delay for Queueable transactions, and to determine if maximum stack depth is set.
-   **[AsyncOptions Class](atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncOptions.htm#apex_class_System_AsyncOptions)**
    Contains maximum stack depths for queueable transactions and the minimum queueable delay in minutes. Passed as parameter to the System.enqueueJob() method to define a unique queueable job signature, the maximum stack depth for queueable transactions and the minimum queueable delay in minutes.
-   **[Blob Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob)**
    Contains methods for the Blob primitive data type.
-   **[Boolean Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean)**
    Contains methods for the Boolean primitive data type.
-   **[BusinessHours Class](atlas.en-us.apexref.meta/apexref/apex_classes_businesshours.htm#apex_classes_businesshours)**
    Use the BusinessHours methods to set the business hours at which your customer support team operates.
-   **[CallbackStatus Enum](atlas.en-us.apexref.meta/apexref/apex_enum_System_CallbackStatus.htm)**
    Specifies the status of asynchronous requests to an external system.
-   **[Callable Interface](atlas.en-us.apexref.meta/apexref/apex_interface_System_Callable.htm#apex_interface_System_Callable)**
    Enables developers to use a common interface to build loosely coupled integrations between Apex classes or triggers, even for code in separate packages. Agreeing upon a common interface enables developers from different companies or different departments to build upon one another’s solutions. Implement this interface to enable the broader community, which might have different solutions than the ones you had in mind, to extend your code’s functionality.
-   **[Cases Class](atlas.en-us.apexref.meta/apexref/apex_class_system_cases.htm)**
    Use the Cases class to interact with case records.
-   **[Collator Class](atlas.en-us.apexref.meta/apexref/apex_class_System_Collator.htm#apex_class_System_Collator)**
    Contains methods to get locale-specific instances that can be used for comparisons and sorting. Use the getInstance() method to obtain the Collator instance for a given locale and pass the Collator as the Comparator parameter to the list.sort() method.
-   **[Comparable Interface](atlas.en-us.apexref.meta/apexref/apex_comparable.htm#apex_comparable)**
    Adds sorting support for Lists that contain non-primitive types, that is, Lists of user-defined types. Your implementation must explicitly handle null inputs in the compareTo() method to avoid a null pointer exception.
-   **[Comparator Interface](atlas.en-us.apexref.meta/apexref/apex_interface_System_Comparator.htm#apex_interface_System_Comparator)**
    Implement different sort orders with the Comparator interface’s compare() method, and pass the Comparator as a parameter to List.sort(). Your implementation must explicitly handle null inputs in the compare() method to avoid a null pointer exception.
-   **[Continuation Class](atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_class_System_Continuation)**
    Use the Continuation class to make callouts asynchronously to a SOAP or REST Web service.
-   **[Cookie Class](atlas.en-us.apexref.meta/apexref/apex_classes_sites_cookie.htm#apex_classes_sites_cookie)**
    The Cookie class lets you access cookies for your Salesforce site using Apex.
-   **[Crypto Class](atlas.en-us.apexref.meta/apexref/apex_classes_restful_crypto.htm#apex_classes_restful_crypto)**
    Provides methods for creating digests, message authentication codes, and signatures, as well as encrypting and decrypting information.
-   **[Custom Metadata Type Methods](atlas.en-us.apexref.meta/apexref/apex_methods_system_custom_metadata_types.htm#test)**
    Custom metadata types are customizable, deployable, packageable, and upgradeable application metadata. All custom metadata is exposed in the application cache, which allows access without repeated queries to the database. The metadata is then available for formula fields, validation rules, flows, Apex, and SOAP API. All methods are static.
-   **[Custom Settings Methods](atlas.en-us.apexref.meta/apexref/apex_methods_system_custom_settings.htm#apex_methods_system_custom_settings)**
    Custom settings are similar to custom objects and enable application developers to create custom sets of data, as well as create and associate custom data for an organization, profile, or specific user. All custom settings data is exposed in the application cache, which enables efficient access without the cost of repeated queries to the database. This data is then available for formula fields, validation rules, flows, Apex, and the SOAP API.
-   **[Database Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_methods_system_database)**
    Contains methods for creating and manipulating data.
-   **[Date Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date)**
    Contains methods for the Date primitive data type.
-   **[Datetime Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime)**
    Contains methods for the Datetime primitive data type.
-   **[Decimal Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal)**
    Contains methods for the Decimal primitive data type.
-   **[Domain Class](atlas.en-us.apexref.meta/apexref/apex_class_System_Domain.htm#apex_class_System_Domain)**
    Represents an existing domain hosted by Salesforce that serves the org or its content. Contains methods to obtain information about these domains, such as the domain type, My Domain name, and sandbox name.
-   **[DomainCreator Class](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_class_System_DomainCreator)**
    Use the DomainCreator class to return a hostname specific to the org. For example, get the org’s Visualforce hostname. Values are returned as a hostname, such as MyDomainName.lightning.force.com.
-   **[DomainParser Class](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainParser.htm#apex_class_System_DomainParser)**
    Use the DomainParser class to parse a domain that Salesforce hosts for the org and extract information about the domain.
-   **[DomainType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_System_DomainType.htm)**
    Specifies the domain type for a System.Domain.
-   **[Double Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double)**
    Contains methods for the Double primitive data type.
-   **[EmailMessages Class](atlas.en-us.apexref.meta/apexref/apex_class_system_emailmessages.htm)**
    Use the methods in the EmailMessages class to interact with emails and email threading.
-   **[EncodingUtil Class](atlas.en-us.apexref.meta/apexref/apex_classes_restful_encodingUtil.htm#apex_classes_restful_encodingutil)**
    Use the methods in the EncodingUtil class to encode and decode URL strings, and convert strings to hexadecimal format.
-   **[Enum Methods](atlas.en-us.apexref.meta/apexref/apex_methods_system_enum.htm)**
    An enum is an abstract data type with values that each take on exactly one of a finite set of identifiers that you specify. Apex provides built-in enums, such as LoggingLevel, and you can define your own enum.
-   **[EventBus Class](atlas.en-us.apexref.meta/apexref/apex_class_System_eventbus.htm#apex_class_System_eventbus)**
    Contains methods for publishing platform events.
-   **[Exception Class and Built-In Exceptions](atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm)**
    An exception denotes an error that disrupts the normal flow of code execution. You can use Apex built-in exceptions or create custom exceptions. All exceptions have common methods.
-   **[ExternalServiceTest Class](atlas.en-us.apexref.meta/apexref/apex_class_System_ExternalServiceTest.htm#apex_class_System_ExternalServiceTest)**
    Provides methods to test an external service's asynchronous callouts, enables sending a mock request, asserts the expected request payload, then triggers the mocked external service’s asynchronous callback response.
-   **[FlexQueue Class](atlas.en-us.apexref.meta/apexref/apex_class_System_FlexQueue.htm#apex_class_System_FlexQueue)**
    Contains methods that reorder batch jobs in the Apex flex queue.
-   **[FeatureManagement Class](atlas.en-us.apexref.meta/apexref/apex_class_System_FeatureManagement.htm#apex_class_System_FeatureManagement)**
    Use the methods in the System.FeatureManagement class to check and modify the values of feature parameters, and to show or hide custom objects and custom permissions in your subscribers’ orgs.
-   **[Formula Class](atlas.en-us.apexref.meta/apexref/apex_class_System_Formula.htm#apex_class_System_Formula)**
    Contains methods to get a builder for creating a formula instance and to update all formula fields on the input SObjects.
-   **[FormulaRecalcFieldError Class](atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcFieldError.htm#apex_class_System_FormulaRecalcFieldError)**
    The return type of the FormulaRecalcResult.getErrors method.
-   **[FormulaRecalcResult Class](atlas.en-us.apexref.meta/apexref/apex_class_System_FormulaRecalcResult.htm#apex_class_System_FormulaRecalcResult)**
    The return type of the Formula.recalculateFormulas method.
-   **[Http Class](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_http.htm#apex_classes_restful_http_http)**
    Use the Http class to initiate an HTTP request and response.
-   **[HttpCalloutMock Interface](atlas.en-us.apexref.meta/apexref/apex_interface_httpcalloutmock.htm#apex_interface_httpcalloutmock)**
    Enables sending fake responses when testing HTTP callouts.
-   **[HttpRequest Class](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_classes_restful_http_httprequest)**
    Use the HttpRequest class to programmatically create HTTP requests like GET, POST, PATCH, PUT, and DELETE.
-   **[HttpResponse Class](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_classes_restful_http_httpresponse)**
    Use the HttpResponse class to handle the HTTP response returned by the Http class.
-   **[Id Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id)**
    Contains methods for the ID primitive data type.
-   **[Ideas Class](atlas.en-us.apexref.meta/apexref/apex_classes_ideas.htm#apex_classes_ideas)**
    Represents zone ideas.
-   **[InstallHandler Interface](atlas.en-us.apexref.meta/apexref/apex_install_handler.htm#apex_install_handler)**
    Enables custom code to run after a managed package installation or upgrade.
-   **[Integer Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer)**
    Contains methods for the Integer primitive data type.
-   **[JSON Class](atlas.en-us.apexref.meta/apexref/apex_class_System_Json.htm#apex_class_System_Json)**
    Contains methods for serializing Apex objects into JSON format and deserializing JSON content that was serialized using the serialize method in this class.
-   **[JSONGenerator Class](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonGenerator.htm#apex_class_System_JsonGenerator)**
    Contains methods used to serialize objects into JSON content using the standard JSON encoding.
-   **[JSONParser Class](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_class_System_JsonParser)**
    Represents a parser for JSON-encoded content.
-   **[JSONToken Enum](atlas.en-us.apexref.meta/apexref/apex_enum_System_JsonToken.htm)**
    Contains all token values used for parsing JSON content.
-   **[Label Class](atlas.en-us.apexref.meta/apexref/apex_class_System_Label.htm#apex_class_System_Label)**
    Provides methods to retrieve a custom label or to check if translation exists for a label in a specific language and namespace. Label names are dynamically resolved at run time, overriding the user’s current language if a translation exists for the requested language. You can’t access labels that are protected in a different namespace.
-   **[Limits Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_limits.htm#apex_methods_system_limits)**
    Contains methods that return limit information for specific resources.
-   **[List Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list)**
    Contains methods for the List collection type.
-   **[Location Class](atlas.en-us.apexref.meta/apexref/apex_class_system_Location.htm#apex_class_system_Location)**
    Contains methods for accessing the component fields of geolocation compound fields.
-   **[LoggingLevel Enum](atlas.en-us.apexref.meta/apexref/apex_enum_System_LoggingLevel.htm)**
    Specifies the logging level for the System.debug method.
-   **[Long Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long)**
    Contains methods for the Long primitive data type.
-   **[Map Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map)**
    Contains methods for the Map collection type.
-   **[Matcher Class](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_matcher_methods.htm#apex_classes_pattern_and_matcher_matcher_methods)**
    Matchers use Patterns to perform match operations on a character string.
-   **[Math Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_math.htm#apex_system_methods_math)**
    Contains methods for mathematical operations.
-   **[Messaging Class](atlas.en-us.apexref.meta/apexref/apex_classes_email_outbound_messaging.htm#apex_classes_email_outbound_messaging)**
    Contains messaging methods used when sending a single or mass email.
-   **[MultiStaticResourceCalloutMock Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_multistaticresourcecalloutmock.htm#apex_methods_system_multistaticresourcecalloutmock)**
    Utility class used to specify a fake response using multiple resources for testing HTTP callouts.
-   **[Network Class](atlas.en-us.apexref.meta/apexref/apex_classes_network.htm#apex_classes_network)**
    Manage Experience Cloud sites.
-   **[Object Class](atlas.en-us.apexref.meta/apexref/apex_class_System_Object.htm#apex_class_System_Object)**
    Contains methods that are implemented by all Apex types.
-   **[OrgLimit Class](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm#apex_class_System_OrgLimit)**
    Contains methods that provide the name, maximum value, and current value of an org limit.
-   **[OrgLimits Class](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimits.htm#apex_class_System_OrgLimits)**
    Contains methods that provide a list or map of all OrgLimit instances for Salesforce your org, such as SOAP API requests, Bulk API requests, and Streaming API limits.
-   **[PageReference Class](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm)**
    A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.
-   **[Packaging Class](atlas.en-us.apexref.meta/apexref/apex_class_system_Packaging.htm#apex_class_system_Packaging)**
    Contains a method for obtaining information about managed and unlocked packages.
-   **[Pattern Class](atlas.en-us.apexref.meta/apexref/apex_classes_pattern_and_matcher_pattern_methods.htm#apex_classes_pattern_and_matcher_pattern_methods)**
    Represents a compiled representation of a regular expression.
-   **[Queueable Interface](atlas.en-us.apexref.meta/apexref/apex_class_System_Queueable.htm#apex_class_System_Queueable)**
    Enables the asynchronous execution of Apex jobs that can be monitored.
-   **[QueueableContext Interface](atlas.en-us.apexref.meta/apexref/apex_interface_system_queueablecontext.htm#apex_interface_system_queueablecontext)**
    Represents the parameter type of the execute() method in a class that implements the Queueable interface and contains the job ID. This interface is implemented internally by Apex.
-   **[QueueableDuplicateSignature Class](atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature.htm#apex_class_System_QueueableDuplicateSignature)**
    Used in the AsyncOptions class to store the queueable job signature in the DuplicateSignature property.
-   **[QueueableDuplicateSignature.Builder Class](atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature_Builder.htm#apex_class_System_QueueableDuplicateSignature_Builder)**
    Build a unique signature for your queueable job using this inner builder class. The build() class method builds a QueueableDuplicateSignature object, with input from the addId(), addInteger(), and addString() methods. Use the DuplicateSignature property in the AsyncOptions class to store the queueable job signature. Enqueue your job by using the System.enqueueJob() with the AsyncOptions parameter.
-   **[QuickAction Class](atlas.en-us.apexref.meta/apexref/apex_class_system_quickaction.htm#apex_class_system_quickaction)**
    Use Apex to request and process actions on objects that allow custom fields, on objects that appear in a Chatter feed, or on objects that are available globally.
-   **[Quiddity Enum](atlas.en-us.apexref.meta/apexref/apex_enum_System_Quiddity.htm)**
    Specifies a Quiddity value used by the methods in the System.Request class
-   **[RemoteObjectController](atlas.en-us.apexref.meta/apexref/apex_class_system_remoteobjectcontroller.htm#apex_methods_system_remoteobjectcontroller)**
    Use RemoteObjectController to access the standard Visualforce Remote Objects operations in your Remote Objects override methods.
-   **[Request Class](atlas.en-us.apexref.meta/apexref/apex_class_System_Request.htm#apex_class_System_Request)**
    Contains methods to obtain the request ID and Quiddity value of the current Salesforce request.
-   **[ResetPasswordResult Class](atlas.en-us.apexref.meta/apexref/apex_class_System_ResetPasswordResult.htm#apex_class_System_ResetPasswordResult)**
    Represents the result of a password reset.
-   **[RestContext Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_restcontext.htm#apex_methods_system_restcontext)**
    Contains the RestRequest and RestResponse objects.
-   **[RestRequest Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_methods_system_restrequest)**
    Use the System.RestRequest class to access and pass request data in a RESTful Apex method.
-   **[RestResponse Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_methods_system_restresponse)**
    Represents an object used to pass data from an Apex RESTful Web service method to an HTTP response.
-   **[SandboxPostCopy Interface](atlas.en-us.apexref.meta/apexref/apex_interface_System_SandboxPostCopy.htm#apex_interface_System_SandboxPostCopy)**
    To make your sandbox environment business ready, automate data manipulation or business logic tasks. Extend this interface and add methods to perform post-copy tasks, then specify the class during sandbox creation.
-   **[Schedulable Interface](atlas.en-us.apexref.meta/apexref/apex_interface_system_schedulable.htm#apex_interface_system_schedulable)**
    The class that implements this interface can be scheduled to run at different intervals.
-   **[SchedulableContext Interface](atlas.en-us.apexref.meta/apexref/apex_interface_system_schedulablecontext.htm#apex_interface_system_schedulablecontext)**
    Represents the parameter type of a method in a class that implements the Schedulable interface and contains the scheduled job ID. This interface is implemented internally by Apex.
-   **[Schema Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_schema.htm#apex_methods_system_schema)**
    Contains methods for obtaining schema describe information.
-   **[Search Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_search.htm#apex_methods_system_search)**
    Use the methods of the Search class to perform dynamic SOSL queries.
-   **[Security Class](atlas.en-us.apexref.meta/apexref/apex_class_System_Security.htm#apex_class_System_Security)**
    Contains methods to securely implement Apex applications.
-   **[SelectOption Class](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_pages_selectoption)**
    A SelectOption object specifies one of the possible values for a Visualforce selectCheckboxes, selectList, or selectRadio component.
-   **[Set Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_methods_system_set)**
    Represents a collection of unique elements with no duplicate values.
-   **[Site Class](atlas.en-us.apexref.meta/apexref/apex_classes_sites.htm#apex_classes_sites)**
    Use the Site Class to manage your sites. Change, reset, validate, and check the expiration of passwords. Create site users, person accounts, and portal users. Get the admin email and ID. Get various URLs, the path prefix, the ID, the template, and the type of the site. Log in to the site.
-   **[SObject Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject)**
    Contains methods for the sObject data type.
-   **[SObjectAccessDecision Class](atlas.en-us.apexref.meta/apexref/apex_class_System_SObjectAccessDecision.htm#apex_class_System_SObjectAccessDecision)**
    Contains the results of a call to the Security.stripInaccessible method and methods to retrieve those results.
-   **[SoqlStubProvider Class](atlas.en-us.apexref.meta/apexref/apex_class_System_SoqlStubProvider.htm#apex_class_System_SoqlStubProvider)**
    Contains a method to create a mock test class for handling SOQL query responses for Data Cloud data model objects (DMOs).
-   **[StaticResourceCalloutMock Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_staticresourcecalloutmock.htm#apex_methods_system_staticresourcecalloutmock)**
    Utility class used to specify a fake response for testing HTTP callouts.
-   **[String Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string)**
    Contains methods for the String primitive data type.
-   **[StubProvider Interface](atlas.en-us.apexref.meta/apexref/apex_interface_System_StubProvider.htm#apex_interface_System_StubProvider)**
    StubProvider is a callback interface that you can use as part of the Apex stub API to implement a mocking framework. Use this interface with the Test.createStub() method to create stubbed Apex objects for testing.
-   **[System Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_system.htm#apex_methods_system_system)**
    Contains methods for system operations, such as writing debug messages and scheduling jobs.
-   **[Test Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_test.htm#apex_methods_system_test)**
    Contains methods related to Apex tests.
-   **[Time Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_methods_system_time)**
    Contains methods for the Time primitive data type.
-   **[TimeZone Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_timezone.htm#apex_methods_system_timezone)**
    Represents a time zone. Contains methods for creating a new time zone and obtaining time zone properties, such as the time zone ID, offset, and display name.
-   **[Trigger Class](atlas.en-us.apexref.meta/apexref/apex_class_System_Trigger.htm)**
    Use the Trigger class to access run-time context information in a trigger, such as the type of trigger or the list of sObject records that the trigger operates on.
-   **[TriggerOperation Enum](atlas.en-us.apexref.meta/apexref/apex_enum_System_TriggerOperation.htm)**
    System.TriggerOperation enum values are associated with trigger events.
-   **[Type Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_methods_system_type)**
    Contains methods for getting the Apex type that corresponds to an Apex class and for instantiating new types.
-   **[UninstallHandler Interface](atlas.en-us.apexref.meta/apexref/apex_uninstall_handler.htm#apex_uninstall_handler)**
    Enables custom code to run after a managed package is uninstalled.
-   **[URL Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_methods_system_url)**
    Represents a uniform resource locator (URL) and provides access to parts of the URL. Enables access to the base URL used to access your Salesforce org.
-   **[UserInfo Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_methods_system_userinfo)**
    Contains methods for obtaining information about the context user.
-   **[UserManagement Class](atlas.en-us.apexref.meta/apexref/apex_class_System_UserManagement.htm#apex_class_System_UserManagement)**
    Contains methods to manage end users, for example, to register their verification methods, verify their identity, or remove their personal information.
-   **[UUID Class](atlas.en-us.apexref.meta/apexref/apex_class_System_UUID.htm#apex_class_System_UUID)**
    Contains methods to randomly generate a version 4 universally unique identifier (UUID), compare UUIDs, and convert UUID instance to a string.
-   **[Version Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_methods_system_version)**
    Use the Version methods to get the version of a first-generation managed package (1GP) or a migrated second-generation managed package (2GP), and to compare package versions.
-   **[WebServiceCallout Class](atlas.en-us.apexref.meta/apexref/apex_class_System_WebServiceCallout.htm#apex_class_System_WebServiceCallout)**
    Enables making callouts to SOAP operations on an external Web service. This class is used in the Apex stub class that is auto-generated from a WSDL.
-   **[WebServiceMock Interface](atlas.en-us.apexref.meta/apexref/apex_interface_webservicemock.htm#apex_interface_webservicemock)**
    Enables sending fake responses when testing Web service callouts of a class auto-generated from a WSDL.
-   **[XmlStreamReader Class Class](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_reader.htm#apex_classes_xml_XmlStream_reader)**
    The XmlStreamReader class provides methods for forward, read-only access to XML data. You can pull data from XML or skip unwanted events. You can parse nested XML content that’s up to 50 nodes deep.
-   **[XmlStreamWriter Class](atlas.en-us.apexref.meta/apexref/apex_classes_xml_XmlStream_writer.htm#apex_classes_XmlStream_writer)**
    The XmlStreamWriter class provides methods for writing XML data.

## Related Topics

- AccessLevel Class (atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm)
- AccessType Enum (atlas.en-us.apexref.meta/apexref/apex_enum_System_AccessType.htm)
- Address Class (atlas.en-us.apexref.meta/apexref/apex_class_system_Address.htm)
- Answers Class (atlas.en-us.apexref.meta/apexref/apex_classes_answers.htm)
- ApexPages Class (atlas.en-us.apexref.meta/apexref/apex_methods_system_apexpages.htm)
- Approval Class (atlas.en-us.apexref.meta/apexref/apex_methods_system_approval.htm)
- Assert Class (atlas.en-us.apexref.meta/apexref/apex_class_System_Assert.htm)
- AsyncInfo Class (atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncInfo.htm)
- AsyncOptions Class (atlas.en-us.apexref.meta/apexref/apex_class_System_AsyncOptions.htm)
- Blob Class (atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm)
