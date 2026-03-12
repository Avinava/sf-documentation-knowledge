---
title: "Core Data Types Used in API Calls"
domain: api
topic: core-data-types-used-in-api-calls
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.890Z
estimatedTokens: 18764
keywords: [Core, Data, API, Calls, extensive, error-handling, objects, sObject, Fault, Element, ExceptionCode, Error, StatusCode, ExtendedErrorDetails, ExtendedErrorCode]
---

# Core Data Types Used in API Calls

> An extensive list of core data types and error-handling objects used in API calls.

# Core Data Types Used in API Calls

An extensive list of core data types and error-handling objects used in API calls.

Many calls in the API use these data types.

-   [sObject](#sobject_topic)
-   ID (String). See [ID Field Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm#i1435616).

The API also uses several error-handling objects. If an error occurs during a SOAP request, the API returns a SOAP fault message. The message contains different content, depending on the type of error:

-   If an error affects the entire request, an [API Fault Element](#api_fault_element), is returned, containing an [ExceptionCode](#exception_code_topic) and the associated error message text.
-   If the error affects some records and not others, an [Error](#error_topic) is returned, containing a [StatusCode](#statuscode_topic). These errors typically occur during bulk operations, such as creating, updating, or deleting multiple records with a single call.

You can see the list of exception codes, status codes, and extended error codes in the WSDL file for your org. Some codes don’t appear in your WSDL, depending on the features enabled. See [Generating the WSDL File for Your Organization](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_quickstart_steps_generate_wsdl.htm).

## sObject

An sObject represents an object, such as an [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)") or [Campaign](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_campaign.htm "HTML (New Window)"). For a list of standard objects, see [Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_list.htm "HTML (New Window)").

An sObject has these properties:

| Name | Type | Description |
| --- | --- | --- |
| fieldsToNull | string[] | Array of one or more field names whose value you want to explicitly set to null.When used with update() or upsert(), you can specify only those fields that you can update and that have the nillable property. When used with create(), you can specify only those fields that you can create and that have the nillable or the default on create property.For example, if specifying an ID field or required field results in a runtime error, you can specify that field name in fieldsToNull. Similarly, if a picklist field has a default value and you want to set the value to null instead, specify the field in fieldsToNull. |
| ID | ID | Unique ID for this individual object. For the create() call, this value is null. For all other API calls, this value must be specified. |

## API Fault Element

An ApiFault element contains information about a fault that occurs when processing a service request. The ApiFault element has these properties.

| Name | Type | Description |
| --- | --- | --- |
| exceptionCode | ExceptionCode | A code that characterizes the exception. |
| exceptionMessage | string | Exception message text. |
| extendedErrorDetails | ExtendedErrorDetails | Additional details about the exception, including an extended error code and extra error properties, when available. |

The following table lists the API fault elements that represent all the API faults that can occur.

| Fault | Description |
| --- | --- |
| ApiQueryFault | The row and column numbers where the problem occurred. |
| LoginFault | An error occurred during the login() call. |
| InvalidSObjectFault | An invalid sObject in a describeSObject(), describeSObjects(), describeLayout(), describeDataCategoryGroups(), describeDataCategoryGroupStructures(), create(), update(), retrieve(), or query() call. |
| InvalidFieldFault | An invalid field in a retrieve() or query() call. |
| InvalidOrNullForRestrictedPicklist | An invalid appMenuType in a describeAppMenu() call. |
| MalformedQueryFault | A problem in the queryString passed in a query() call. |
| InvalidQueryLocatorFault | A problem in the queryLocator passed in a queryMore() call. |
| MalformedSearchFault | A problem in the search passed in a search() call. |
| InvalidIdFault | A specified ID was invalid in a setPassword() or resetPassword() call. |
| UnexpectedErrorFault | An unexpected error occurred. The error isn’t associated with any other API fault. |

## ExceptionCode

These exception codes can be returned with an error.

APEX\_REST\_SERVICES\_DISABLED

Apex REST Services permission isn’t enabled for the user. Enable the user permission to access Apex classes and methods as REST web services.

API\_CURRENTLY\_DISABLED

Because of a system problem, API functionality is temporarily unavailable.

APPLICATION\_ALREADY\_EXISTS

The application already exists.

PI\_DISABLED\_FOR\_ORG

API access isn’t enabled for the org. Contact Salesforce to enable API access.

BIG\_OBJECT\_UNSUPPORTED\_OPERATION

This operation isn’t supported for big objects.

BILLING\_ENTITIES\_NO\_ACCESS

This user requires at least Modify All Records access to billing schedule groups.

CANNOT\_UPDATE\_IS\_THIRD\_PARTY

A contact address can’t be updated because it belongs to a third party.

CANNOT\_UPDATE\_PAYMENT\_METHOD\_SET

A payment method set can’t be updated.

CANT\_ADD\_STANDARD\_PORTAL\_USER\_TO\_TERRITORY

A user with a standard portal license can’t be added to a territory.

CART\_ITEM\_NOT\_FOUND

A user tried to access a cart item, but the system couldn’t find the cart item, or the user had insufficient permissions.

CART\_NOT\_FOUND

A user tried to access a cart, but the system couldn’t find the cart, or the user had insufficient permissions.

CATEGORY\_NOT\_FOUND

The product category can’t be found.

CHECKOUT\_CONFLICT

A user tried to perform an action that conflicts with the current state of the cart or checkout session.

CHECKOUT\_EXPIRED

A checkout session is no longer available because its time to live has expired.

CHECKOUT\_INVALIDATED

The store administrator invalidated a checkout session.

CHECKOUT\_LOCKED

A user tried to perform an action that the system can’t perform until another concurrent operation is completed.

CHECKOUT\_NOT\_FOUND

A user tried to access a checkout session, but the system couldn’t find the session, or the user had insufficient permissions.

CIRCULAR\_OBJECT\_GRAPH

The request failed because it contained a circular object reference.

CLIENT\_NOT\_ACCESSIBLE\_FOR\_USER

The current user doesn’t have permission to access the specified client.

CLIENT\_REQUIRE\_UPDATE\_FOR\_USER

The current user is required to use a newer version of the specified client and doesn’t have access until the client is updated.

CLONE\_NOT\_SUPPORTED

This entity doesn’t support the clone operation.

CLONE\_FIELD\_INTEGRITY\_EXCEPTION

A field integrity exception occurred during the clone operation.

COMMERCE\_ADMIN\_MISCONFIGURATION

A configuration set by a Commerce admin is causing an error.

CONTENT\_ALREADY\_AN\_ASSET\_EXCEPTION

This file is already an asset.

CONTENT\_HUB\_AUTHENTICATION\_EXCEPTION

The authentication token expired.

CONTENT\_HUB\_FILE\_HAS\_NO\_URL\_EXCEPTION

Can’t open the file.

CONTENT\_HUB\_FILE\_NOT\_FOUND\_EXCEPTION

Object not found.

CONTENT\_HUB\_INVALID\_PAGE\_NUMBER\_EXCEPTION

This document has no content.

CONTENT\_CUSTOM\_DOWNLOAD\_EXCEPTION

Create a custom error message for this ExceptionCode in your Apex implementation.

CONTENT\_HUB\_INVALID\_OBJECT\_TYPE\_EXCEPTION

Invalid object type.

CONTENT\_HUB\_INVALID\_RENDITION\_PAGE\_NUMBER\_EXCEPTION

Not a valid rendition of the page number.

CONTENT\_HUB\_ITEM\_TYPE\_NOT\_FOUND\_EXCEPTION

Item type not found.

CONTENT\_HUB\_OBJECT\_NOT\_FOUND\_EXCEPTION

Object not found.

CONTENT\_HUB\_OPERATION\_NOT\_SUPPORTED\_EXCEPTION

Operation not supported.

CONTENT\_HUB\_SECURITY\_EXCEPTION

Unauthorized operation.

CONTENT\_HUB\_TIMEOUT\_EXCEPTION

Operation timed out.

CONTENT\_HUB\_UNEXPECTED\_EXCEPTION

An error occurred while performing this operation.

CONTENT\_IMAGE\_SCALING\_INVALID\_ARGUMENTS\_EXCEPTION

Invalid argument type for the operation.

CONTENT\_IMAGE\_SCALING\_INVALID\_IMAGE\_EXCEPTION

The specified image isn’t valid.

CONTENT\_IMAGE\_SCALING\_MAX\_RENDITIONS\_EXCEPTION

You reached the maximum number of renditions for the image.

CONTENT\_IMAGE\_SCALING\_TIMEOUT\_EXCEPTION

The image scaling operation timed out.

CONTENT\_IMAGE\_SCALING\_UNKNOWN\_EXCEPTION

The system encountered an internal error during image scaling. Report this problem to Salesforce.

CONTENT\_TYPE\_DISABLED\_FOR\_API

The content type is disabled for the API.

DELETE\_REQUIRED\_ON\_CASCADE

The delete operation triggers a cascade delete on a record, but the logged-in user doesn’t have delete permission on that related object.

DEPENDENCY\_API\_UNSUPPORTED\_EXCEPTION

This operation isn’t supported by the Dependency API.

DUPLICATE\_COMM\_NICKNAME

You can’t create a user with the same nickname as another user.

DUPLICATE\_VALUE

You can’t supply a duplicate value for a field that must be unique. For example, you can’t submit two copies of the same session ID in a invalidateSessions() call.

EMAIL\_BATCH\_SIZE\_LIMIT\_EXCEEDED

A method tried to process more email records than the maximum batch size.

EMAIL\_TO\_CASE\_INVALID\_ROUTING

An Email-to-Case record was submitted for processing but the feature isn’t enabled.

EMAIL\_TO\_CASE\_LIMIT\_EXCEEDED

The daily converted email limit for the Email-to-Case feature was exceeded.

EMAIL\_TO\_CASE\_NOT\_ENABLED

The Email-to-Case feature isn’t enabled.

ENTITY\_NOT\_QUERYABLE

The object you’re querying isn’t supported. Use an object that User Interface API supports.

EXCEEDED\_ID\_LIMIT

Too many IDs were specified in a call. For example, more than 2000 IDs were requested in a [retrieve()](atlas.en-us.api.meta/api/sforce_api_calls_retrieve.htm "Retrieves one or more records based on the specified IDs.") call, or more than 200 session IDs were specified in a [logout()](atlas.en-us.api.meta/api/sforce_api_calls_logout.htm "Ends the session of the logged-in user.") call.

EXCEEDED\_LEAD\_CONVERT\_LIMIT

Too many IDs were sent to a [convertLead()](atlas.en-us.api.meta/api/sforce_api_calls_convertlead.htm "Converts a Lead into another object.") call.

EXCEEDED\_MAX\_SEMIJOIN\_SUBSELECTS

Too many topic filters were applied to a list view.

EXCEEDED\_MAX\_SIZE\_REQUEST

The size of the message sent to the API exceeded 50 MB.

EXCEEDED\_MAX\_TYPES\_LIMIT

The number of object types to describe is too large.

EXCEEDED\_QUOTA

The size limit for org data storage was exceeded during a [create()](atlas.en-us.api.meta/api/sforce_api_calls_create.htm "Adds one or more new records to your organization’s data.") call.

EXTERNAL\_SERVICE\_CONNECTION\_EXCEPTION

The application can’t connect to an external service and an HTTP error is returned. For example, you can receive this exception code when the server returns a 502 Bad Gateway error, 403 Forbidden error, or 503 Service Unavailable error.

EXTERNAL\_SERVICE\_EXCEPTION

The external service returned an error.

EXTERNAL\_SERVICE\_INVALID\_STATE\_EXCEPTION

The service is in an invalid state. For example, when using External Services, you receive this exception code if a validation error occurs when invoking an external service action.

FIELD\_INTEGRITY\_EXCEPTION

An attempt was made to pass an incorrect value to a field.

FUNCTIONALITY\_NOT\_ENABLED

Functionality has been temporarily disabled. Other calls continue to work.

GONE

The requested resource or operation is retired or removed. Delete or update any references to the resource or operation.

GUEST\_INSUFFICIENT\_ACCESS

The guest user doesn’t have sufficient access to perform the operation.

IAS\_TIMEOUT\_EXCEPTION

Operation timeout.

IAS\_NOT\_FOUND

The reservation ID doesn’t exist.

ID\_REQUIRED

Queries of the SubscriberPackageVersion Tooling API object require an ID.

IDEMPOTENCY\_FEATURE\_NOT\_ENABLED

Idempotent record writes aren’t enabled in your org. Contact Salesforce to enable this feature.

IDEMPOTENCY\_NOT\_SUPPORTED

The resource or HTTP method for the current request isn’t supported for idempotency.

INACTIVE\_OWNER\_OR\_USER

he user or record owner isn’t active.

INACTIVE\_PORTAL

The referenced portal is inactive.

INDEX\_NOT\_FOUND

The search index can’t be found.

INSTALL\_KEY\_INVALID

The installation key specified in the query of the SubscriberPackageVersion Tooling API object is invalid.

INSTALL\_KEY\_REQUIRED

The queried SubscriberPackageVersion Tooling API object is protected by a package installation key.

INSUFFICIENT\_ACCESS

The user doesn’t have sufficient access to perform the operation.

INSUFFICIENT\_ACCESS\_APEX\_METADATA\_DEPLOY

The current context doesn’t have the necessary permissions to use Metadata API in Apex. For permissions and packaging considerations, see [Metadata API Edit Access](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_metadata_perm.htm) and [Security Considerations](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_metadata_security.htm).

INSUFFICIENT\_BENEFIT\_REMAINING

The remaining amount for the specified benefit assignment {id} is less than the disbursement amount.

INTERNAL\_ERROR

The system encountered an internal error. Report this problem to Salesforce.

INVALID\_ACCOUNTING\_SET

The Accounting Set isn’t active or doesn’t exist.

INVALID\_ACTION\_VERSION

The version of the action is invalid.

INVALID\_ASSIGNMENT\_RULE

An invalid [AssignmentRuleHeader](atlas.en-us.api.meta/api/sforce_api_header_assignmentruleheader.htm "The AssignmentRuleHeader must be specified in the create() or update() call of a Case or Lead for the specified assignment rule to be applied, and it must be specified in the update() call of an Account for the territory assignment rules to be applied.") value was specified.

INVALID\_BATCH\_REQUEST

The batch record operation isn’t valid. See [Create a Batch of Records](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_resources_records_batch_post.xml "HTML (New Window)").

INVALID\_BATCH\_SIZE

The query options have an invalid batch size value.

INVALID\_BUSINESS\_HOURS\_NAME

The name of the business hours is invalid.

INVALID\_CLIENT

The client is invalid.

INVALID\_CROSS\_REFERENCE\_KEY

An invalid foreign key can’t be set on a field. For example, an object share, such as AccountShare, can’t be deleted because the share row is a result of a sharing rule.

INVALID\_DEFINITION

The DPE Definition associated with the Accounting Set isn’t active.

INVALID\_EVB\_OPERATION

The operation based on expression-based visibility rules is invalid.

INVALID\_FIELD

The specified field name is invalid.

INVALID\_FILTER\_LANGUAGE

The specified language can’t be used as a filter.

INVALID\_FILTER\_VALUE

A SOQL query with LIKE specified an invalid character, for example, an incorrectly placed asterisk (\*). Correct the query and resubmit.

INVALID\_GOOGLE\_DOCS\_URL

An invalid Salesforce record URL was used when trying to associate a Google Doc to that record. Correct the URL before trying the operation again.

INVALID\_ID\_FIELD

The specified ID is correctly formatted but isn’t valid. For example, the ID is of the wrong type.

INVALID\_IDEMPOTENCY\_KEY

The idempotency key in the request header must follow the UUID V4 format.

INVALID\_INPUT

The batch record input isn’t valid. See [Create a Batch of Records](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_resources_records_batch_post.xml "HTML (New Window)").

INVALID\_LOCATOR

The locator is invalid.

INVALID\_LOGIN

The [login()](atlas.en-us.api.meta/api/sforce_api_calls_login.htm "Logs in to the login server and starts a client session.") credentials aren’t valid, or the maximum number of logins have been exceeded. Contact your administrator for more information.

INVALID\_NEW\_PASSWORD

The new password doesn’t conform with the password policies of the org.

INVALID\_OPERATION

The client application tried to modify a record that an approval process has locked.

INVALID\_OPERATION\_WITH\_EXPIRED\_PASSWORD

Due to password expiration, a valid password must be set using [setPassword()](atlas.en-us.api.meta/api/sforce_api_calls_setpassword.htm "Sets the specified user's password to the specified value.") before the call can be invoked.

INVALID\_QUERY\_FILTER\_OPERATOR

An invalid operator was used in the [query()](atlas.en-us.api.meta/api/sforce_api_calls_query.htm "Executes a query against the specified object and returns data that matches the stated conditions.") filter clause, at least for that field.

INVALID\_QUERY\_KEY

The query key provided is invalid.

INVALID\_QUERY\_LOCATOR

The query locator in the call is invalid or doesn’t exist. More results using the queryMore() call (SOAP API) or the nextRecordUrl call (REST API) weren’t found. Try the call again with a different query locator.

INVALID\_QUERY\_SCOPE

The specified search scope is invalid.

INVALID\_QUERY\_VALUE

The query value provided is invalid.

INVALID\_REPLICATION\_DATE

The date for replication is out of the allowed range, such as before the org was created.

INVALID\_RECORD\_ATTRIBUTE\_VALUE

The specified Record Attribute isn’t valid.

INVALID\_RUNTIME\_VALUE

The specified Runtime isn’t valid.

INVALID\_SETUP\_OWNER

The setup owner must be an Organization, Profile, or User.

INVALID\_SEARCH

The [search()](atlas.en-us.api.meta/api/sforce_api_calls_search.htm "Executes a text search in your organization's data.") call has invalid syntax or grammar. For more information, see the [Salesforce SOQL and SOSL Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").

INVALID\_SEARCH\_SCOPE

The specified search scope is invalid.

INVALID\_SESSION\_ID

The specified [sessionId](atlas.en-us.api.meta/api/sforce_api_calls_login_loginresult.htm#i1429237) is malformed (incorrect length or format) or has expired. Log in again to start a new session.

INVALID\_SOAP\_HEADER

There’s an error in the SOAP header. If you’re migrating from an earlier version of the API, be advised that the SaveOptions header can’t be used with API version 6.0 or later. Use [AssignmentRuleHeader](atlas.en-us.api.meta/api/sforce_api_header_assignmentruleheader.htm "The AssignmentRuleHeader must be specified in the create() or update() call of a Case or Lead for the specified assignment rule to be applied, and it must be specified in the update() call of an Account for the territory assignment rules to be applied.") instead.

INVALID\_SSO\_GATEWAY\_URL

The URL provided to configure the Single Sign-On gateway wasn’t a valid URL.

INVALID\_TYPE

The specified [sObject](#sobject_topic) type is invalid.

INVALID\_TYPE\_FOR\_OPERATION

The specified [sObject](#sobject_topic) type is invalid for the specified operation.

INVALID\_VERSION

The requested resource no longer exists. Confirm that the API version number used in the request is supported, and update if needed.

KEY\_HAS\_BEEN\_DESTROYED

We couldn’t access your files and attachments because they’re encrypted with a key that has been destroyed. For more information, contact your Salesforce admin.

LIMIT\_EXCEEDED

An array is too long. For example, there are too many BCC addresses, targets, or email messages.

LOGIN\_CHALLENGE\_ISSUED

An email containing a security token was sent to the user’s email address because the user logged in from an untrusted IP address. The user can’t log in until the security token is added to the end of the password.

LOGIN\_CHALLENGE\_PENDING

The user logged in from an untrusted IP address, but a security token hasn’t yet been issued.

LOGIN\_DURING\_RESTRICTED\_DOMAIN

The user isn’t allowed to log in from this IP address.

LOGIN\_DURING\_RESTRICTED\_TIME

The user isn’t allowed to log in during this time period.

LOGIN\_MUST\_USE\_SECURITY\_TOKEN

The user must add a security token to the end of the password to log in.

MALFORMED\_ID

An invalid ID string was specified. For information about IDs, see [ID Field Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm#i1435616).

MALFORMED\_QUERY

An invalid query string was specified. For example, the query string was longer than 100,000 characters or exceeds the limit of 500 junction IDs allowed in a single query.

MALFORMED\_SEARCH

An invalid search string was specified. For example, the search string was longer than 100,000 characters.

MISMATCHING\_VERSIONS

The subscriber org is using an API version that’s lower than the API version of the SubscriberPackageVersion you attempted to install. When installing a SubscriberPackageVersion, the installation org must be set to the same or a higher API version as the package you’re installing.

MISSING\_ARGUMENT

A required argument is missing.

MIXED\_DML\_OPERATION

There are limits on what kinds of DML operations can be performed in the same transaction. For more information, see [Data Manipulation Language](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/pages/langCon_apex_dml.htm "HTML (New Window)") in the Apex Developer Guide.

MODEL\_NOT\_ACTIVE

The model isn’t active.

MODIFIED

The describe call response has changed since the specified date.

MULTIPLE\_RECORDS\_FOUND

Multiple records are found during the process.

NO\_DEFINITION\_ASSOCIATED

The Accounting Set doesn’t have a DPE Definition.

NO\_BUSINESS\_HOURS\_FOUND

Business hours aren’t defined.

NOT\_ACCEPTABLE

An XML file is blocked.

NOT\_MODIFIED

The describe call response hasn’t changed since the specified date.

NO\_SOFTPHONE\_LAYOUT

If an org has the CTI feature enabled, but no softphone layout has been defined, this exception is returned when a describe call is issued. This exception is most often caused because no call center has been defined. A default softphone layout is created during call center definition.

If an org doesn’t have the CTI feature enabled, FUNCTIONALITY\_NOT\_ENABLED is returned instead.

NO\_RECIPIENTS

No recipients specified.

NUMBER\_OUTSIDE\_VALID\_RANGE

The number specified is outside the valid range for the field.

OPERATION\_TOO\_LARGE

The query returned too many results. If a user without the View All Data permission runs certain queries and many records are returned, the queries require sharing rule checking. For example, consider queries that are run on objects, such as [Task](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_task.htm "HTML (New Window)"), that use a polymorphic foreign key. These queries return this exception because the operation requires too many resources. To correct, add filters to the query to narrow the scope, or use filters such as date ranges to break up the query into a series of smaller queries.

OPERATION\_WITH\_CALLBACK\_ENQUEUED

The operation with callback is enqueued.

ORDER\_MANAGEMENT\_ACTION\_NOT\_ALLOWED

The requested action isn’t allowed.

ORG\_LOCKED

The org is locked. Contact Salesforce to unlock the org.

ORG\_NOT\_OWNED\_BY\_INSTANCE

The user tried to log in to the wrong server instance. Choose another server instance, use your org’s My Domain login URL, or log in at https://login.salesforce.com.

PARAMETER\_TOO\_LARGE

A user provided a parameter value that exceeded the maximum size.

PASSWORD\_LOCKOUT

The user has exceeded the allowed number of login attempts. The user must contact an administrator to regain login access.

PAYLOAD\_ITEM\_MAP\_ERROR

A catalog payload related to a given productId and IndexInfoId can’t be found.

PORTAL\_NO\_ACCESS

Access to the specified portal isn’t available.

PRODUCT\_NOT\_FOUND

The product can’t be found.

QUERY\_TIMEOUT

The query timed out. For more information on query limits and how to avoid them, see [SOQL and SOSL Limits for Search Queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_soslsoql.htm) in the Developer Limits and Allocations Quick Reference and [SOQL SELECT Syntax](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select.htm "HTML (New Window)") in the Salesforce SOQL and SOSL Reference Guide.

QUERY\_TOO\_COMPLICATED

SOQL query is either selecting too many fields or there are too many filter conditions. Try reducing the number of formula fields referenced in the query.

REALTIME\_PROCESSING\_TIME\_EXCEEDED\_LIMIT

The limit for real-time processing has been exceeded.

RECORD\_NOT\_FOUND

The record can’t be found.

REFRESH\_FAILED

The refresh failed.

REPORT\_EXPORT\_LIMIT\_EXCEEDED

The limit for exporting Lightning reports has been exceeded.

REQUEST\_LIMIT\_EXCEEDED

The request exceeded either the concurrent request limit or the request rate limit for your org. For details on API request limits, see [API Usage Metering](atlas.en-us.api.meta/api/implementation_considerations.htm "Before you build an integration app or other client app, consider the issues explained in this section.").

REQUEST\_RUNNING\_TOO\_LONG

A request took too long to be processed.

SERVER\_UNAVAILABLE

A server that’s necessary for this call is unavailable. Other types of requests could still work.

SPECIFICATION\_GENERAL\_EXCEPTION

There was a problem generating the top-level OpenAPI 3 (OAS3) specification. Review your input data and try again.

SSO\_SERVICE\_DOWN

The service was unavailable, and an authentication call to the org’s specified Single Sign-On server failed.

STATE\_TRANSITION\_NOT\_ALLOWED

The requested transition isn’t allowed.

TOO\_MANY\_APEX\_REQUESTS

Too many Apex requests were issued. If this exception persists, contact Salesforce Customer Support.

TRIAL\_EXPIRED

The trial period for the org has expired. A representative from the company must contact Salesforce to re-enable the org.

TXN\_SECURITY\_APEX\_ERROR

We can’t complete the action due to an Apex exception in your org’s Transaction Security policy. For help, contact your Salesforce admin.

TXN\_SECURITY\_METERING\_ERROR

We can’t complete the action because enabled transaction security policies took too long to complete. For help, contact your Salesforce admin.

TXN\_SECURITY\_NO\_ACCESS

We can’t complete the action because you don’t have access. For help, contact your Salesforce admin.

TXN\_SECURITY\_RUNTIME\_ERROR

We can’t complete the action due to an unexpected error while executing your org’s Transaction Security policy. Contact Salesforce Support and provide the following error information.

UNPROCESSABLE\_REQUEST

The request couldn’t be processed.

UNSUPPORTED\_API\_VERSION

A method call was made that doesn’t exist in the accessed API version, for example, trying to use [upsert()](atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm "Creates records and updates existing records; uses a custom field to determine the presence of existing records. In most cases, we recommend that you use upsert() instead of create() to avoid creating unwanted duplicate records (idempotent). This call is available in API version 7.0 and later.") (new in 8.0) against version 5.0.

UNSUPPORTED\_CLIENT

This version of the client is no longer supported.

WEBSTORE\_NOT\_FOUND

The webstore can’t be found.

## Error

An Error contains information about an error that occurred during a [create()](atlas.en-us.api.meta/api/sforce_api_calls_create.htm "Adds one or more new records to your organization’s data."), [merge()](atlas.en-us.api.meta/api/sforce_api_calls_merge.htm "Combines up to three records of the same type into one record. The input is an array of MergeRequest elements, each of which specifies the records to combine. The output is a MergeResult object that contains information about the result of the merge."), [process()](atlas.en-us.api.meta/api/sforce_api_calls_process.htm "Submits an array of approval process instances for approval, or processes an array of approval process instances to be approved, rejected, or removed. For more information, see Set Up an Approval Process in Salesforce Help."), [update()](atlas.en-us.api.meta/api/sforce_api_calls_update.htm "Updates one or more existing records in your organization's data."), [upsert()](atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm "Creates records and updates existing records; uses a custom field to determine the presence of existing records. In most cases, we recommend that you use upsert() instead of create() to avoid creating unwanted duplicate records (idempotent). This call is available in API version 7.0 and later."), [delete()](atlas.en-us.api.meta/api/sforce_api_calls_delete.htm "Deletes one or more records from your organization's data."), or [undelete()](atlas.en-us.api.meta/api/sforce_api_calls_undelete.htm "Undeletes records from the Recycle Bin.") call. For more information, see [Error Handling](atlas.en-us.api.meta/api/sforce_api_concepts_errorhandling.htm "The API calls return error data that your client application can use to identify and resolve runtime errors."). An Error has these properties:

| Name | Type | Description |
| --- | --- | --- |
| statusCode | StatusCode | A code that describes the error. |
| message | string | Error message text. |
| fields | string[] | Array of one or more field names. Identifies which fields in the object, if any, affected the error condition. |
| extendedErrorDetails | ExtendedErrorDetails | More details about the error, including an extended error code and extra error properties, when available. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

If your org has active duplicate rules and a duplicate is detected, the SaveResult includes an error with a data type of [DuplicateError](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_duplicateerror.htm "HTML (New Window)").

## StatusCode

An error can return any of these API status codes.

APEX\_DATA\_ACCESS\_RESTRICTION

The DML operations aren’t allowed on the user object in parallel Apex tests. Consider creating a user in the test class instead.

ALL\_OR\_NONE\_OPERATION\_ROLLED\_BACK

The bulk operation was rolled back because one of the records wasn’t processed successfully. See [AllOrNoneHeader](atlas.en-us.api.meta/api/sforce_api_header_allornoneheader.htm "Allows a call to roll back all changes unless all records are processed successfully.").

ALREADY\_APPLIED

The promotion coupon has already been applied to the cart.

ALREADY\_IN\_PROCESS

You can’t submit a record that is already in an approval process. Wait for the previous approval process to complete before resubmitting a request with this record.

ASSIGNEE\_TYPE\_REQUIRED

Designate an assignee for the approval request (ProcessInstanceStep or ProcessInstanceWorkitem).

AURA\_COMPILE\_ERROR

A Lightning component contains an error and isn’t compiling.

AUTH\_PROVIDER\_NEEDS\_AUTH

The authentication provider can’t connect without proper authentication.

AUTH\_PROVIDER\_NOT\_FOUND

The authentication provider can’t be found.

BAD\_CUSTOM\_ENTITY\_PARENT\_DOMAIN

The changes you’re trying to make can’t be completed because changes to the associated master-detail relationship can’t be made.

BAD\_REQUEST

Invalid or syntax errors in the API request. Check the request body and the parameters.

BCC\_NOT\_ALLOWED\_IF\_BCC\_COMPLIANCE\_ENABLED

Your client application blind carbon-copied an email address even though the org’s Compliance BCC Email option is enabled. This option specifies a particular email address that automatically receives a copy of all outgoing email. When this option is enabled, you can’t BCC any other email address. To disable the option, log in to the user interface and from Setup, enter Compliance BCC Email in the Quick Find box, then select **Compliance BCC Email**.

BCC\_SELF\_NOT\_ALLOWED\_IF\_BCC\_COMPLIANCE\_ENABLED

Your client application blind carbon-copied the logged-in user’s email address even though the org’s BCC COMPLIANCE option is set to true. This option specifies a particular email address that automatically receives a copy of all outgoing email. When this option is enabled, you can’t BCC any other email address. To disable the option, log in to the user interface and from Setup, enter Compliance BCC Email in the Quick Find box, then select **Compliance BCC Email**.

CANNOT\_CASCADE\_PRODUCT\_ACTIVE

An update to a product caused by a cascade can’t be done because the associated product is active.

CANNOT\_CHANGE\_FIELD\_TYPE\_OF\_APEX\_REFERENCED\_FIELD

You can’t change the type of a field that is referenced in an Apex script.

CANNOT\_CREATE\_ANOTHER\_MANAGED\_PACKAGE

You can create only one managed package in an org.

CANNOT\_DEACTIVATE\_DIVISION

You can’t deactivate Divisions if an assignment rule references divisions or if the DefaultDivision field on a user record isn’t set to null.

CANNOT\_DELETE\_LAST\_DATED\_CONVERSION\_RATE

If dated conversions are enabled, you must have at least one DatedConversionRate record.

CANNOT\_DELETE\_MANAGED\_OBJECT

You can’t modify components that are included in a managed package.

CANNOT\_DISABLE\_LAST\_ADMIN

You must have at least one active administrator user.

CANNOT\_ENABLE\_IP\_RESTRICT\_REQUESTS

If you exceed the limit of five IP ranges specified in a profile, you can’t enable restriction of login by IP addresses. Reduce the number of specified ranges in the profile and try the request again.

CANNOT\_EXECUTE\_FLOW\_TRIGGER

The flow trigger or the flow failed to execute. Try again. If the issue persists, debug the flow in Flow Builder.

CANNOT\_INSERT\_UPDATE\_ACTIVATE\_ENTITY

You don’t have permission to create, update, or activate the specified record.

CANNOT\_MODIFY\_MANAGED\_OBJECT

You can’t modify components that are included in a managed package.

CANNOT\_RENAME\_APEX\_REFERENCED\_FIELD

You can’t rename a field that is referenced in an Apex script.

CANNOT\_RENAME\_APEX\_REFERENCED\_OBJECT

You can’t rename an object that is referenced in an Apex script.

CANNOT\_REPARENT\_RECORD

You can’t define a new parent record for the specified record.

CANNOT\_RESOLVE\_NAME

A sendEmail() call couldn’t resolve an object name.

CANNOT\_UPDATE\_CONVERTED\_LEAD

A converted lead couldn’t be updated.

CANNOT\_POST\_TO\_ARCHIVED\_GROUP

If the group is archived, you can’t post to a group.

CANT\_DISABLE\_CORP\_CURRENCY

You can’t disable the corporate currency for an org. To disable a currency that is set as the corporate currency, first use the user interface to change the corporate currency to a different currency. Then disable the original currency.

CANT\_UNSET\_CORP\_CURRENCY

You can’t change the corporate currency for an org from the API. Use the user interface to change the corporate currency.

CHECKOUT\_UNAUTHORIZED

You don’t have access to the checkout resource. Only customers with access to the store and cart can access the checkout resource.

CHILD\_SHARE\_FAILS\_PARENT

If you don’t have appropriate permissions on a parent record, you can’t change the owner of or define sharing rules for a child record. For example, you can’t change the owner of a contact record if you can’t edit its parent account record.

CIRCULAR\_DEPENDENCY

You can’t create a circular dependency between metadata objects in your org. For example, public group A can’t include public group B, if public group B already includes public group A.

COMMUNITY\_NOT\_ACCESSIBLE

You don’t have permission to access the Experience Cloud site that this entity belongs to. You must be given permission to access the site before you can access this entity.

CONFLICT

You have a request conflict with the current state of the target resource.

CONFLICTING\_ENVIRONMENT\_HUB\_MEMBER

The specified org is already a member of a different Environment Hub.

CONFLICTING\_SSO\_USER\_MAPPING

This org is already a member of this Environment Hub via a different user.

CONTENT\_NOT\_FOUND

We couldn’t find the requested content.

CONTENT\_TYPE\_NOT\_FOUND

The content type can’t be found.

COUPON\_REDEMPTION\_LIMIT\_EXCEEDED

You’ve reached the maximum number of times this coupon can be redeemed.

CUSTOM\_CLOB\_FIELD\_LIMIT\_EXCEEDED

You can’t exceed the maximum size for a CLOB field.

CUSTOM\_ENTITY\_OR\_FIELD\_LIMIT

You’ve reached the maximum number of custom objects or custom fields for your org.

CUSTOM\_FIELD\_INDEX\_LIMIT\_EXCEEDED

You’ve reached the maximum number of indexes on a field for your org.

CUSTOM\_INDEX\_EXISTS

You can create only one custom index per field.

CUSTOM\_LINK\_LIMIT\_EXCEEDED

You’ve reached the maximum number of custom links for your org.

CUSTOM\_METADATA\_LIMIT\_EXCEEDED

Your org has reached its custom metadata maximum limit.

CUSTOM\_SETTINGS\_LIMIT\_EXCEEDED

Your org has reached its custom settings maximum limit.

CUSTOM\_TAB\_LIMIT\_EXCEEDED

You’ve reached the maximum number of custom tabs for your org.

DATACLOUDADDRESS\_NO\_RECORDS\_FOUND

Records for the Data Cloud address can’t be found.

DATACLOUDADDRESS\_PROCESSING\_ERROR

An error occurred when processing the Data Cloud address.

DATACLOUDADDRESS\_SERVER\_ERROR

The system encountered a server error.

DELETE\_FAILED

You can’t delete a record because it is in use by another object.

DEPENDENCY\_EXISTS

You can’t perform the requested operation because of an existing dependency on the specified object or field.

DUPLICATE\_CASE\_SOLUTION

You can’t create a relationship between the specified case and the solution because there’s currently an existing one.

DUPLICATE\_CUSTOM\_ENTITY\_DEFINITION

Custom object or custom field IDs must be unique.

DUPLICATE\_CUSTOM\_TAB\_MOTIF

Custom tab motif names must be unique.

DUPLICATE\_DEVELOPER\_NAME

You can’t create a custom object or custom field with a duplicate developer name.

DUPLICATES\_DETECTED

Duplicate records have been detected. Used for an Error object with a data type of [DuplicateError](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_duplicateerror.htm "HTML (New Window)").

DUPLICATE\_EXTERNAL\_ID

A user-specified external ID matches more than one record during an upsert.

DUPLICATE\_MASTER\_LABEL

You can’t create a custom object or custom field with a duplicate name.

DUPLICATE\_SENDER\_DISPLAY\_NAME

A sendEmail() call couldn’t choose between OrgWideEmailAddress.DisplayName or senderDisplayName. Define only one of the two fields.

DUPLICATE\_USERNAME

A create, update, or upsert failed because of a duplicate username.

DUPLICATE\_VALUE

You can’t supply a duplicate value for a field that must be unique. For example, you can’t submit two copies of the same session ID in a invalidateSessions() call.

EMAIL\_ADDRESS\_BOUNCED

Emails to one or more recipients have bounced. Check the email addresses to make sure that they’re valid.

EMAIL\_EXTERNAL\_TRANSPORT\_PERMISSION\_ERROR

You don’t have permission to access the Gmail or Outlook365 service.

EMAIL\_EXTERNAL\_TRANSPORT\_TOO\_MANY\_REQUESTS\_ERROR

Gmail or Outlook365 has determined that too many requests are sent in a given amount of time.

EMAIL\_NOT\_PROCESSED\_DUE\_TO\_PRIOR\_ERROR

Because of an error earlier in the call, the current email wasn’t processed.

EMAIL\_OPTED\_OUT

A single email message was sent with the REJECT setting in the optOutPolicy field to recipients that have opted out from receiving email. To avoid this error, set the optOutPolicy field to another value.

EMAIL\_TEMPLATE\_FORMULA\_ERROR

The email template is invalid and can’t be rendered. Check the template for incorrectly specified merge fields.

EMAIL\_TEMPLATE\_MERGEFIELD\_ACCESS\_ERROR

You don’t have access to one or more merge fields in this template. To request access, contact your Salesforce administrator.

EMAIL\_TEMPLATE\_MERGEFIELD\_ERROR

One or more merge fields don’t exist. Check the spelling of field names.

EMAIL\_TEMPLATE\_MERGEFIELD\_VALUE\_ERROR

One or more merge fields have no value. To provide values, update the records before sending the email.

EMAIL\_TEMPLATE\_PROCESSING\_ERROR

The merge fields in this email template can’t be processed. Ensure that your template body is valid.

EMPTY\_SCONTROL\_FILE\_NAME

The Scontrol file name was empty, but the binary wasn’t empty.

ENTITY\_FAILED\_IFLASTMODIFIED\_ON\_UPDATE

If the value in a record’s LastModifiedDate field is later than the current date, you can’t update the record.

ENTITY\_IS\_ARCHIVED

If a record has been archived, you can’t access it.

ENTITY\_IS\_DELETED

You can’t reference an object that has been deleted. This status code occurs only in API version 10.0 and later. Previous releases of the API use INVALID\_ID\_FIELD for this error.

ENTITY\_IS\_LOCKED

You can’t edit a record because an approval process has locked it.

ENVIRONMENT\_HUB\_MEMBERSHIP\_CONFLICT

You can’t add an org to more than one Environment Hub.

ERROR\_IN\_MAILER

An email address is invalid, or another error occurred during an email-related transaction.

EXCEEDED\_MAX\_SEMIJOIN\_SUBSELECTS\_WRITE

Too many topic filters were applied to a list view.

EXCHANGE\_WEB\_SERVICES\_URL\_INVALID

The Exchange web services URL is invalid.

EXTERNAL\_RESOURCE\_FORBIDDEN

You don’t have access to the necessary external resources, such as OAuth doesn’t have the proper permissions.

FAILED\_ACTIVATION

The activation of a Contract failed.

FIELD\_CUSTOM\_VALIDATION\_EXCEPTION

You can’t define a custom validation formula that violates a field integrity rule.

FIELD\_FILTER\_VALIDATION\_EXCEPTION

You can’t violate field integrity rules.

FIELD\_KEYWORD\_LIST\_MATCH\_LIMIT

The comment or message contains too many keyword matches for unacceptable content.

FILE\_EXTENSION\_NOT\_ALLOWED

The specified file extension isn’t allowed. If you include multiple file extensions, separate them with a comma.

FILE\_SIZE\_LIMIT\_EXCEEDED

The file size has exceeded the limit.

FILTERED\_LOOKUP\_LIMIT\_EXCEEDED

The creation of the lookup filter failed because it exceeds the maximum number of lookup filters allowed per object.

FIELD\_MAPPING\_ERROR

A field-mapping error has occurred.

FIELD\_MODERATION\_RULE\_BLOCK

The comment or message matches a moderation rule criteria and can’t be published.

FLOW\_EXCEPTION

An error that occurs when you attempt to save a flow. The severity of the error can be info, warning, block activation, blocking save, and more.

FUNCTIONALITY\_NOT\_ENABLED

The specified feature is disabled.

HAS\_PUBLIC\_REFERENCES

The custom metadata record can’t be set as protected while public records refer to it.

HTML\_FILE\_UPLOAD\_NOT\_ALLOWED

Your attempt to upload an HTML file failed. If the Disallow HTML documents and attachments checkbox is selected on the HTML Documents and Attachments Settings page, HTML attachments and documents, including HTML attachments to a [Solution](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_solution.htm "HTML (New Window)"), can’t be uploaded.

IMAGE\_TOO\_LARGE

The image exceeds the maximum width, height, and file size.

IAS\_UNCOMITTED\_WORK

You can’t make calls to Omnichannel Inventory while uncommitted database changes are pending within the same transaction.

INACTIVE\_OWNER\_OR\_USER

The owner of the specified item is an inactive user. To reference this item, either reactivate the owner or reassign ownership to another active user.

INPUTPARAM\_INCOMPATIBLE\_DATATYPE

The type for the input parameter doesn’t match the type for the assigned value.

INSERT\_UPDATE\_DELETE\_NOT\_ALLOWED\_DURING\_MAINTENANCE

Starting with version 32.0, you can’t create, update, or delete data while the instance where your org resides is being upgraded to the latest release. Try again after the release has completed. For release schedules, see [trust.salesforce.com](https://trust.salesforce.com "HTML (New Window)"). Before version 32.0, the code is INVALID\_READ\_ONLY\_USER\_DML.

INSUFFICIENT\_ACCESS

You don’t have sufficient permissions to access a resource.

INSUFFICIENT\_ACCESS\_ON\_CROSS\_REFERENCE\_ENTITY

An operation affects an object that the specified object cross-references, but the logged-in user doesn’t have sufficient permissions on the cross-referenced object. For example, a logged-in user attempts to modify an account record, and the update creates a ProcessInstanceWorkitem. If the user doesn’t have permission to approve, reject, or reassign the ProcessInstanceWorkitem, this exception occurs.

INSUFFICIENT\_ACCESS\_OR\_READONLY

You can’t perform the specified action because you don’t have sufficient permissions.

INSUFFICIENT\_ACCESS\_TO\_INSIGHTSEXTERNALDATA

You don’t have access to the InsightsExternalData object.

INSUFFICIENT\_BALANCE

You can’t debit points from a loyalty program member because the member doesn’t have a sufficient points balance.

INVALID\_ACCESS\_LEVEL

You can’t define a new sharing rule that provides less access than the specified org-wide default.

INVALID\_ACCESS\_TOKEN

The access token to the connected email account is invalid or expired. Log in again or ask your admin for access.

INVALID\_ACCOUNT

You specified an account that’s null, not a valid account, missing required fields, or setting non-writeable fields.

INVALID\_ARGUMENT\_TYPE

You supplied an argument that is of the wrong type for the operation being attempted.

INVALID\_ASSIGNEE\_TYPE

You specified an assignee type that isn’t a valid integer between one and six.

INVALID\_ASSIGNMENT\_RULE

You specified an assignment rule that’s invalid or that isn’t defined in the org.

INVALID\_AUTH\_HEADER

The authorization header on the request isn’t valid. For REST API, use an HTTP authorization header with the format: Authorization: Bearer Access\_Token. For SOAP API, use the SessionHeader SOAP authorization header. The access token is placed in the header.

INVALID\_BATCH\_OPERATION

The specified batch operation is invalid.

INVALID\_CHECKOUT\_INPUT

The input isn’t promotion-specific.

INVALID\_CONTENT\_TYPE

The outgoing email has anEmailFileAttachment with an invalid contentType property. See [RFC2045 - Internet Message Format](http://tools.ietf.org/html/rfc2045 "HTML (New Window)").

INVALID\_COUPON

The coupon entered is either not valid or has expired.

INVALID\_CREDIT\_CARD\_INFO

The specified credit card information isn’t valid.

INVALID\_CROSS\_REFERENCE\_KEY

A record with the specified ID does not exist in the database.

INVALID\_CROSS\_REFERENCE\_TYPE\_FOR\_FIELD

The specified cross-reference type isn’t valid for the specified field.

INVALID\_CONTACT

The specified contact isn’t valid.

INVALID\_CURRENCY\_CONV\_RATE

Specify a positive, non-zero value for the currency conversion rate.

INVALID\_CURRENCY\_CORP\_RATE

You can’t modify the corporate currency conversion rate.

INVALID\_CURRENCY\_ISO

The specified [currency ISO code](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_currencytype.htm#isocode_field "HTML (New Window)") isn’t valid.

INVALID\_EMAIL\_ADDRESS

A specified email address is invalid.

INVALID\_EMPTY\_KEY\_OWNER

You can’t set the value for owner to null.

INVALID\_ENTITY\_FOR\_UPSERT

The specified object is invalid for the upsert operation.

INVALID\_ENVIRONMENT\_HUB\_MEMBER

An Environment Hub member can’t be created with the specified user.

INVALID\_EVENT\_DELIVERY

The event delivery ID isn’t valid.

INVALID\_EVENT\_SUBSCRIPTION

Parameter values exceed the 765 character limit when subscribing to an event.

INVALID\_EXTERNAL\_ID\_FIELD\_NAME

The field name of the externalIdFieldName parameter on the target entity isn’t valid. Specify a valid field name.

INVALID\_FIELD

You specified an invalid field name when trying to update or upsert a record.

INVALID\_FIELD\_FOR\_INSERT\_UPDATE

You can’t combine a person account record type change with any other field update.

INVALID\_FIELD\_WHEN\_USING\_TEMPLATE

You can’t use an email template with an invalid field name.

INVALID\_FILTER\_ACTION

The specified filter action can’t be used with the specified object. For example, an alert isn’t a valid filter action for a Task.

INVALID\_ID\_FIELD

The specified ID field (ID, ownerId), or cross-reference field is invalid.

INVALID\_INET\_ADDRESS

A specified Inet address isn’t valid.

INVALID\_LINEITEM\_CLONE\_STATE

You can’t clone a Pricebook2 or PricebookEntry record that isn’t active.

INVALID\_MARKUP

The specified markup includes an unsupported tag or attribute.

INVALID\_MERCHANT\_ACCOUNT\_MODE

The merchant account is in a non-production org, so it must be in Test mode to accept payments.

INVALID\_MERCHANT\_ACCOUNT\_MODE\_OR\_STATUS

For the merchant account to accept payments, it must be in Live mode or the status must be enabled. To receive payments, complete the merchant account’s business profile at the payment provider.

INVALID\_MERGE\_RECORD

The specified records couldn’t be merged.

INVALID\_MASTER\_OR\_TRANSLATED\_SOLUTION

The solution is invalid. For example, this exception occurs if you try to associate a translated solution with a solution that’s associated with another translated solution.

INVALID\_MESSAGE\_ID\_REFERENCE

The outgoing email’s References or In-Reply-To fields are invalid. These fields must contain valid Message-IDs. See [RFC2822 - Internet Message Format](http://tools.ietf.org/html/rfc2822#section-3.6.4 "HTML (New Window)").

INVALID\_NAMESPACE\_PREFIX

The specified namespace isn’t valid.

INVALID\_OPERATION

There’s no applicable approval process for the specified object.

INVALID\_OPERATOR

The specified operator isn’t applicable for the field type when used as a workflow filter.

INVALID\_OR\_NULL\_FOR\_RESTRICTED\_PICKLIST

You specified an invalid or null value for a restricted picklist.

INVALID\_PACKAGE\_LICENSE

The specified package license doesn’t exist for this org.

INVALID\_PARTNER\_NETWORK\_STATUS

The specified partner network status is invalid for the specified template field.

INVALID\_PERSON\_ACCOUNT\_OPERATION

You can’t delete a person account.

INVALID\_PROFILE

You specified a profile that isn’t associated with an external user license.

INVALID\_READ\_ONLY\_USER\_DML

Version 31.0 and earlier: You can’t create, update, or delete data while the instance where your org resides is being upgraded to the latest release. Try again after the release has completed. For release schedules, see [trust.salesforce.com](https://trust.salesforce.com "HTML (New Window)"). After version 31.0, the code is INSERT\_UPDATE\_DELETE\_NOT\_ALLOWED\_DURING\_MAINTENANCE.

INVALID\_RECEIVEDDOCUMENTID\_ATTACHMENT

The received document record contains more than one attachment.

INVALID\_RECORD\_TYPE

The specified record type isn’t valid.

INVALID\_REFRESH\_TOKEN

The refresh token to the connected email account is invalid. Log in again or ask your admin for access.

INVALID\_SAVE\_AS\_ACTIVITY\_FLAG

Specify true or false for the saveAsActivity flag.

INVALID\_SCS\_INBOUND\_USER

The specified SCS inbound user isn’t valid.

INVALID\_SESSION\_ID

The specified [sessionId](atlas.en-us.api.meta/api/sforce_api_calls_login_loginresult.htm#i1429237) is malformed (incorrect length or format) or has expired. Log in again to start a new session.

INVALID\_SERVER\_ERROR

An unexpected condition occurred that prevented the API operation.

INVALID\_SIGNUP\_OPTION

You provided an incorrect set of values to the SignupRequest object.

INVALID\_STATUS

The specified org status change isn’t valid.

INVALID\_TARGET\_OBJECT\_NAME

The API name of the target entity isn’t valid. Specify a valid API name.

INVALID\_TYPE

The specified type isn’t valid for the specified object.

INVALID\_TYPE\_FOR\_OPERATION

The specified type isn’t valid for the specified operation.

INVALID\_TYPE\_ON\_FIELD\_IN\_RECORD

The specified value isn’t valid for the specified field’s type.

INVALID\_UNMERGE\_RECORD

The specified record wasn’t unmerged from the record it was previously merged with.

INVALID\_USERID

The specified user isn’t an active member of this org.

INVALID\_USER\_OBJECT

The specified user object isn’t valid.

IP\_RANGE\_LIMIT\_EXCEEDED

The specified IP address is outside the IP range specified for the org.

JIGSAW\_IMPORT\_LIMIT\_EXCEEDED

The number of records you attempted to purchase from Data.com exceeds your available record addition limit.

LICENSE\_LIMIT\_EXCEEDED

You’ve exceeded the number of licenses assigned to your org.

LIGHT\_PORTAL\_USER\_EXCEPTION

You attempted an action with a customer portal that’s not allowed. For example, trying to add the user to a case team.

LIMIT\_EXCEEDED

You’ve exceeded a limit on a field size or value, license, platform event publishing, or other component.

MALFORMED\_ID

An ID must be either 15 characters, or 18 characters with a valid case-insensitive extension. There’s also an exception code of the same name.

MANAGER\_NOT\_DEFINED

A manager hasn’t been defined for the specified approval process.

MASSMAIL\_RETRY\_LIMIT\_EXCEEDED

A mass mail retry failed because your org has exceeded its mass mail retry limit.

MASS\_MAIL\_LIMIT\_EXCEEDED

The org has exceeded its daily limit for mass email. Mass email messages can’t be sent again until the next day.

MATCH\_PRECONDITION\_REQUIRED

An ETag validation has failed. The request must include an If-Match header to ensure data integrity with optimistic concurrency control.

MATCH\_PRECONDITION\_FAILED

An ETag validation has failed.

MAXIMUM\_CCEMAILS\_EXCEEDED

You’ve exceeded the maximum number of specified CC addresses in a workflow email alert.

MAXIMUM\_DASHBOARD\_COMPONENTS\_EXCEEDED

You’ve exceeded the document size limit for a dashboard.

MAXIMUM\_HIERARCHY\_CHILDREN\_REACHED

You’ve reached the maximum number of children in the asset hierarchy.

MAXIMUM\_HIERARCHY\_LEVELS\_REACHED

You’ve reached the maximum number of levels in a hierarchy.

MAXIMUM\_SIZE\_OF\_ATTACHMENT

You’ve exceeded the maximum size of an attachment.

MAXIMUM\_SIZE\_OF\_DOCUMENT

You’ve exceeded the maximum size of a document.

MAX\_ACTIONS\_PER\_RULE\_EXCEEDED

You’ve exceeded the maximum number of actions per rule.

MAX\_ACTIVE\_RULES\_EXCEEDED

You exceeded the maximum number of active rules.

MAX\_APPROVAL\_STEPS\_EXCEEDED

Youexceeded the maximum number of approval steps for an approval process.

MAX\_DEPTH\_IN\_FLOW\_EXECUTION

An error occurred while executing a flow trigger action.

MAX\_FORMULAS\_PER\_RULE\_EXCEEDED

You exceeded the maximum number of formulas per rule.

MAX\_RULES\_EXCEEDED

You exceeded the maximum number of rules for an object.

MAX\_RULE\_ENTRIES\_EXCEEDED

Youexceeded the maximum number of entries for a rule.

MAX\_TASK\_DESCRIPTION\_EXCEEEDED

The task description is too long.

MAX\_TM\_RULES\_EXCEEDED

You exceeded the maximum number of rules per Territory.

MAX\_TM\_RULE\_ITEMS\_EXCEEDED

You exceeded the maximum number of rule criteria per rule for a Territory.

MAX\_TRIGGERS\_EXCEEDED

The number of triggers per workflow rule or for Salesforce exceeds the maximum limit.

MERGE\_FAILED

A merge operation failed.

METHOD\_NOT\_ALLOWED

The target resource doesn’t support this method.

METADATA\_FIELD\_UPDATE\_ERROR

An error occurred while updating the specified metadata field.

MISMATCHING\_TYPES

The specified records or its related records aren’t of the same type.

MISSING\_ARGUMENT

You didn’t specify a required argument.

MISSING\_OMNI\_PROCESS\_ID

The Get Assessment Response Summary invocable action calls an Assessment object that lacks a valid OmniScript ID.

NONUNIQUE\_SHIPPING\_ADDRESS

If the original order shipping address is different from the shipping address of other items in the reduction order, you can’t insert a reduction order item.

NO\_APPLICABLE\_PROCESS

A process() request failed because the record submitted doesn’t satisfy the entry criteria of any active approval processes for which the user has permission.

NO\_ATTACHMENT\_PERMISSION

Your org doesn’t permit email attachments.

NO\_INACTIVE\_DIVISION\_MEMBERS

You can’t add members to an inactive Division.

NO\_MASS\_MAIL\_PERMISSION

You don’t have permission to send the email. You must have “Mass Email” to send mass mail or “Send Email” to send individual email.

NOT\_FOUND

A resource referenced by this method can’t be located.

NO\_PARTNER\_PERMISSION

The org doesn’t have ISV partner functionality.

NUMBER\_OUTSIDE\_VALID\_RANGE

The number specified is outside the valid range of values.

NUM\_HISTORY\_FIELDS\_BY\_SOBJECT\_EXCEEDED

The number of history fields specified for the sObject exceeds the allowed limit.

OP\_WITH\_INVALID\_USER\_TYPE\_EXCEPTION

The operation you attempted can’t be performed for one or more users. For example, you can’t add high-volume portal users to a group.

OPERATION\_ENQUEUED

The asynchronous platform event publishing operation is enqueued. The platform event is published when system resources become available.

OPTED\_OUT\_OF\_MASS\_MAIL

An email can’t be sent because the specified User has opted out of mass mail.

ORDER\_MANAGEMENT\_ACTION\_NOT\_ALLOWED

The requested action isn’t allowed.

ORDER\_MANAGEMENT\_INVALID\_RECORD

The record is invalid.

ORDER\_MANAGEMENT\_RECORD\_EXISTS

You can’t create the record because it currently exists.

ORDER\_MANAGEMENT\_RECORD\_NOT\_FOUND

We couldn’t find the requested record.

PA\_API\_EXCEPTION

The system encountered an internal error. Report this problem to Salesforce.

PA\_AXIS\_FAULT

The system encountered an internal error. Report this problem to Salesforce.

PA\_INVALID\_ID\_EXCEPTION

The specified ID for the Platform Action is invalid.

PA\_NO\_ACCESS\_EXCEPTION

You don’t have permission to access the Action Platform.

PA\_NO\_DATA\_FOUND\_EXCEPTION

We couldn’t find the requested Platform Action.

PA\_URI\_SYNTAX\_EXCEPTION

The URI syntax for the Platform Action query is invalid.

PA\_VISIBLE\_ACTIONS\_FILTER\_ORDERING\_EXCEPTION

The system encountered an internal error. Report this problem to Salesforce.

PACKAGE\_DISABLED

The package is disabled.

PACKAGE\_LICENSE\_REQUIRED

The logged-in user can’t access an object that is in a licensed package without a license for the package.

PAL\_INVALID\_ASSISTANT\_RECOMMENDATION\_TYPE\_ID

The specified type ID for the assistant recommendation is invalid.

PAL\_INVALID\_ENTITY\_ID

The specified object ID for the Platform Action List is invalid.

PAL\_INVALID\_FLEXIPAGE\_ID

The specified page ID for the Platform Action List is invalid.

PAL\_INVALID\_LAYOUT\_ID

The specified layout ID for the Platform Action List is invalid.

PAL\_INVALID\_PARAMETERS

The specified parameter for the Platform Action List is invalid.

PALI\_INVALID\_ACTION\_ID

The specified action ID for the Platform Action List is invalid.

PALI\_INVALID\_ACTION\_NAME

The specified action name for the Platform Action List is invalid.

PALI\_INVALID\_ACTION\_TYPE

The specified action type is invalid for the Platform Action List context.

PARTICIPANT\_RELATIONSHIP\_EXISTS

A user tries to delete a ParticipantGroup but a record was shared to this group using Compliant Data Sharing. The group is assigned as a participant to one or more parent records through Compliant Data Sharing. You can remove the participant records and try again.

PLATFORM\_EVENT\_ENCRYPTION\_ERROR

The platform event messages couldn’t be published due to a problem with encryption. A misconfiguration in your Salesforce org or a general encryption service error can cause this problem.

PLATFORM\_EVENT\_PUBLISHING\_UNAVAILABLE

Publishing platform event messages failed due to a service being temporarily unavailable. Try again later.

PLATFORM\_EVENT\_PUBLISH\_FAILED

The platform event message couldn’t be published after one or more attempts because of a system error. Try again later.

PORTAL\_USER\_ALREADY\_EXISTS\_FOR\_CONTACT

A create [User](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_user.htm "HTML (New Window)") operation failed because you can’t create a second portal user under a Contact.

PORTAL\_USER\_CREATION\_RESTRICTED\_WITH\_ENCRYPTION

The portal user can’t be created from a contact record containing encrypted standard fields by a user without View Encrypted Data permission.

PRIVATE\_CONTACT\_ON\_ASSET

You can’t have a private contact on an asset.

PROCESSING\_HALTED

A related operation failed and the transaction is rolled back. This error can occur in a composite request in which one of the subrequests fails.

QA\_INVALID\_CREATE\_FEED\_ITEM

The feed item can’t be created. You can only create a feed item for "Create" and "Log a Call".

QA\_INVALID\_SUCCESS\_MESSAGE

The success message is invalid. Update can have a success message, but can’t create a feed item. All other types must have an empty success message and not create a feed item.

QUICK\_ACTION\_LIST\_ITEM\_NOT\_ALLOWED

The quick action list item can’t be saved for the Quick Action type Lightning component.

QUICK\_ACTION\_LIST\_NOT\_ALLOWED

The quick action list can only be saved for an object that allows quick actions.

RECORD\_IN\_USE\_BY\_WORKFLOW

You can’t access a record that’s in use by a workflow or approval process.

RELATED\_ENTITY\_FILTER\_VALIDATION\_EXCEPTION

If the campaign scope isn’t set, you can’t save a list view that the campaign member status already filtered.

REL\_FIELD\_BAD\_ACCESSIBILITY

The custom metadata type can’t be set to protected when public types refer to it, or it can’t be set to public when it refers to protected types.

REPUTATION\_MINIMUM\_NUMBER\_NOT\_REACHED

You didn’t reach the lower threshold number for a reputation level in an Experience Cloud site.

REQUEST\_RUNNING\_TOO\_LONG

A request that has been running too long is canceled.

REQUIRE\_CONNECTED\_APP\_SCS

The connected app for Social Customer Service isn’t installed.

REQUIRE\_CONNECTED\_APP\_SESSION\_SCS

The Social Connected Service call requires an active authenticated connected app session.

REQUIRE\_RUNAS\_USER

A Run As user must be configured on the Social Customer Setup page in your org under the Inbound Settings tab.

REQUIRED\_FIELD\_MISSING

A call requires a field that wasn’t specified.

RETRIEVE\_EXCHANGE\_ATTACHMENT\_FAILED

The attachment failed to upload or download from your Exchange service account.

RETRIEVE\_EXCHANGE\_EMAIL\_FAILED

The email can’t be retrieved from your Exchange service account.

RETRIEVE\_EXCHANGE\_EVENT\_FAILED

An Exchange service event has failed.

RETRIEVE\_USER\_CONFIG\_ERROR

The user’s Lightning Sync or Einstein Activity Capture configuration can’t be retrieved.

ROUTES\_EVALUATION\_LIMIT\_EXCEEDED

The limit for route evaluation was met. We couldn’t evaluate any more routes.

SALESFORCE\_INBOX\_TRANSPORT\_CONNECTION\_ERROR

Invalid user ID or password for the Inbox account. Update your credentials in Inbox and try again.

SALESFORCE\_INBOX\_TRANSPORT\_TOKEN\_ERROR

Unable to connect your Inbox account to Salesforce.

SALESFORCE\_INBOX\_TRANSPORT\_UNKNOWN\_ERROR

An error occurred sending an email with Inbox.

SELF\_REFERENCE\_FROM\_TRIGGER

You can’t recursively update or delete the same object from an Apex trigger. This error often occurs when:

-   You try to update or delete an object from within its before trigger.
-   You try to delete an object from within its after trigger.

This error occurs with both direct and indirect operations. Here’s an example of an indirect operation.

-   A request is submitted to update Object A.
-   A before update trigger on object A creates an object B.
-   Object A is updated.
-   An after insert trigger on object B queries object A and updates it. This update is an indirect update of object A because of the before trigger of object A, so an error is generated.

SHARE\_NEEDED\_FOR\_CHILD\_OWNER

If a parent record has a child record that needs a sharing rule, you can’t delete the sharing rule for the parent record.

SINGLE\_EMAIL\_LIMIT\_EXCEEDED

(API version 18.0 and later) The org has exceeded its daily limit for individual emails. Individual email messages can’t be sent again until the next day.

SLACK\_API\_ERROR

An unexpected condition occurred that prevented the Slack API from completing the request. This value is available in API version 36.0 and later.

SOCIAL\_ACCOUNT\_NOT\_FOUND

You don’t have access to the social account or no managed social account with the given ID was found.

SOCIAL\_POST\_INVALID

The given social post isn’t applicable for the given operation. For example, a required field is missing or the status isn’t appropriate.

SOCIAL\_POST\_NOT\_FOUND

You don’t have access to the post or no post with the given ID was found.

STANDARD\_PRICE\_NOT\_DEFINED

Custom prices can’t be defined without corresponding standard prices.

STORAGE\_LIMIT\_EXCEEDED

You exceeded your org’s storage limit.

STRING\_TOO\_LONG

The specified string exceeds the maximum allowed length.

TABSET\_LIMIT\_EXCEEDED

Youexceeded the number of tabs allowed for a tabset.

TEMPLATE\_NOT\_ACTIVE

The template specified is unavailable. Specify another template or make the template available for use.

TERRITORY\_REALIGN\_IN\_PROGRESS

An operation can’t be performed because a territory realignment is in progress.

TEXT\_DATA\_OUTSIDE\_SUPPORTED\_CHARSET

The specified text uses a character set that isn’t supported.

TEXT\_TO\_PICKLIST\_VALUES\_EXCEEDED

You’ve exceeded the number of picklist values in the specified text.

TOO\_MANY\_APEX\_REQUESTS

Too many Apex requests have been sent. This error is transient. Resend your request after a short wait.

TOO\_MANY\_ENUM\_VALUE

A request failed because too many values were passed in for a multi-select picklist. You can select a maximum of 100 values for a multi-select picklist.

TOO\_MANY\_JOBS

The organization has too many live jobs.

TRANSFER\_REQUIRES\_READ

You can’t assign the record to the specified User because the user doesn’t have read permission.

UISF\_ENTITY\_QUERY\_FAILED

The changes you’re trying to make can’t be completed. Reasons can include:

-   We’re unable to find the Slack application in the registry
-   We can’t find the user or bot authorization
-   We encountered an exception when querying or upserting Slack setup entities
-   The user or bot token is null

UISF\_NO\_MAPPINGS\_FOUND

We couldn’t find a Slack user mapped to the Salesforce user ID.

UISF\_TOKEN\_NOT\_FOUND

We couldn’t find a token for the Slack application.

UISF\_UNKNOWN\_EXCEPTION

The system encountered an internal error. Report this problem to Salesforce.

UISF\_USER\_MAPPING\_FAILED

We couldn’t map a Slack user to the Salesforce user ID.

UNAVAILABLE\_REF

If the custom metadata record references an unavailable object or field, it can’t be installed.

UNABLE\_TO\_LOCK\_ROW

A deadlock or timeout condition has been detected.

-   A deadlock involves at least two transactions that are attempting to update overlapping sets of objects. If the transaction involves a summary field, the parent objects are locked, making these transactions especially prone to deadlocks. To debug, check your code for deadlocks and correct. Deadlocks aren’t typically the result of a Salesforce operations issue.
-   A timeout occurs when a transaction takes too long to complete, such as when replacing a value in a picklist or changing a custom field definition. The timeout state is temporary. No corrective action is needed.

If an object in a batch can’t be locked, the entire batch fails with this error. Errors with this status code contain the IDs of the records that couldn’t be locked, when available, in the error message.

UNAVAILABLE\_RECORDTYPE\_EXCEPTION

The appropriate default record type couldn’t be found.

UNDELETE\_FAILED

An object couldn’t be undeleted because it doesn’t exist or hasn’t been deleted.

UNKNOWN\_EXCEPTION

The system encountered an internal error. Report this problem to Salesforce.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Don’t report this exception code to Salesforce if it results from a sendEmail() call. The sendEmail() call returns this exception code when it’s used to send an email to one or more recipients who have the **Email Opt Out** option selected.

UNQUALIFIED\_CART

The cart contents don’t meet the promotion qualification criteria associated with the coupon.

UNSPECIFIED\_EMAIL\_ADDRESS

The specified user doesn’t have an email address.

UNSUPPORTED\_APEX\_TRIGGER\_OPERATON

You can’t save recurring events with an Apex trigger.

UNSUPPORTED\_DML

DML operation is unsupported due to mixed transaction types.

UNSUPPORTED\_MODE

You can’t use that mode. Use a supported mode.

UNSUPPORTED\_PAYMENT\_REQUEST\_TYPE

Salesforce Payments doesn’t support the payment request type.

UNSUPPORTED\_QUERY

Your query uses GROUP BY, NULLS FIRST/LAST, or other query features that aren’t supported for big objects.

UNVERIFIED\_SENDER\_ADDRESS

A sendEmail() call attempted to use an unverified email address defined in the OrgWideEmailAddress object.

USER\_WITHOUT\_WEM\_PERMISSION

The user lacks Workforce Engagement permissions.

VARIANT\_NOT\_FOUND

We couldn’t find the requested variant.

VF\_COMPILE\_ERROR

There’s a compile error in the Visualforce Page, Component, or EmailTemplate you’re trying to save.

WEBLINK\_SIZE\_LIMIT\_EXCEEDED

The size of a WebLink URL or JavaScript code exceeds the limit.

WEBLINK\_URL\_INVALID

The WebLink URL failed the URL string validation check.

WEM\_USER\_NOT\_ORG\_ADMIN

The user has Workforce Engagement permissions but isn’t an administrator.

WORKSPACE\_NOT\_FOUND

We couldn’t find the requested workspace.

WRONG\_CONTROLLER\_TYPE

The controller type for your Visualforce email template doesn’t match the object type being used.

If you receive a status code not listed in the previous table, contact Customer Support.

## ExtendedErrorDetails

An ExtendedErrorDetails element contains additional information about an error. The ExtendedErrorDetails element can include these properties.

| Name | Type | Description |
| --- | --- | --- |
| extendedErrorCode | ExtendedErrorCode | A code that characterizes the extended error details. |
| extended error property | Varies | An extended error property that contains more information about the error. The property name and value vary based on the extended error code. For example, in a limits-related error, the property limit contains the value of a limit and input contains the submitted value that reaches or exceeds the limit. |

## ExtendedErrorCode

Each ExtendedErrorDetails contains an error code and its related properties. The codes and descriptions included here are examples of extended errors. You can see other extended error codes depending on the error you encounter.

FLOW\_CANNOT\_BE\_REACTIVATED

If the current flow version is canceled or completed, the user can’t reactivate the same version. The only option is to save the flow as a new version.

FLOW\_NOT\_FOUND

The flow isn’t available. This value is available in API version 39.0 and later.

FLOW\_TEST\_CONDITION\_INVALID\_DATATYPE\_MAPPING

The test point for the start or end of the flow contains a condition with incompatible data types.

FLOW\_TEST\_INVALID\_LHS\_REFERENCE

Invalid reference found in a flow test condition.

FLOW\_TEST\_NOT\_SUPPORTED

Flow Test isn’t supported for a process type.

FLOW\_TEST\_PARAMETER\_LEFTVALUEREFERENCE\_INVALID

The flow test metadata for the start of the flow must have its leftValueReference set to ScheduledPathApiName.

FLOW\_TEST\_PARAMETER\_TYPE\_INVALID

The scheduled path is valid but the path type isn’t ScheduledPath.

FLOW\_TEST\_PARAMETER\_VALUE\_INVALID

The flow test metadata for the start of the flow references an invalid value for the scheduled path.

FLOW\_TEST\_PARAMETER\_VALUE\_MISSING

The flow test metadata for the start of the flow is missing its scheduled path API name.

FLOW\_TEST\_PARAMS\_REQUIRED

The test point for the start or end of the flow is missing a parameter.

FORM\_ALREADY\_IN\_USE\_BY\_DRAFT\_VERSION

The form you selected is already associated with a draft flow version. You can’t associate a form to more than one draft flow version. This value is available in API version 60.0 and later.

FORM\_ALREADY\_IN\_USE\_BY\_FLOW

The form you selected is already associated with a flow. You can’t associate a form to more than one flow. This value is available in API version 60.0 and later.

INPUTPARAM\_INCOMPATIBLE\_DATATYPE

Specify a {0} value for the {1} parameter. For example, specify a String value for the programId parameter.

INVALID\_QUERY\_LOCATOR\_FORMAT

The format of the query locator isn’t valid or correct.

INVALID\_SEGMENT\_STATUS\_FOR\_ACTIVATION

The flow can’t be activated because the segment being used has an inactive or error status, which isn’t allowed for flow activation.

LOCATOR\_LOCATION\_EXCEEDS\_SIZE

The location specified by the query locator exceeds the number of records returned by the original query.

MAX\_STATEMENT\_SIZE

The query exceeds the character limit. See [SOQL SELECT Syntax](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select.htm).

MAX\_XDS\_IMPLICIT\_SUBQUERIES

The query exceeds the number of joins allowed across external objects. [Understanding Relationship Query Limitations](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_limits.htm#sforce_api_calls_soql_relationships_query_limits).

PROGRAM\_PROGRESS\_NOT\_ACTIVE

We couldn’t run this loyalty program process because it hasn’t been activated. Activate the program process and try again. Or, ask your Salesforce admin for help.

QUERY\_LOCATOR\_EXPIRED

The query locator has expired.

QUERY\_LOCATOR\_NOT\_FOUND

The query locator doesn’t exist, or the user executing the query isn’t the same user who created the cursor.

SCREENFIELD\_OBJECTPROVIDED\_INVALID\_DATATYPE

When fieldType on FlowSceenField is set to objectProvided, objectFieldReference is set to an unsupported data type.

SURVEY\_INVALID\_MATRIX\_QUESTION\_CONFIGURATION

The matrix question configuration is invalid or the user doesn’t have permission to create the matrix question.

TEMPORARY\_QUERY\_MORE\_FAILURE

We can’t retrieve additional query results right now. Try again later.

UNAUTHORIZED\_USER\_FOR\_CURSOR

The user executing the call can’t access the additional query results. Only the user who executed the original query can access additional results.

## Related Topics

- update() (atlas.en-us.api.meta/api/sforce_api_calls_update.htm)
- upsert() (atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm)
- create() (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- login() (atlas.en-us.api.meta/api/sforce_api_calls_login.htm)
- describeSObject() (atlas.en-us.api.meta/api/sforce_api_calls_describesobject.htm)
- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- describeLayout() (atlas.en-us.api.meta/api/sforce_api_calls_describelayout.htm)
- describeDataCategoryGroups() (atlas.en-us.api.meta/api/sforce_api_calls_describedatacategorygroups.htm)
- describeDataCategoryGroupStructures() (atlas.en-us.api.meta/api/sforce_api_calls_describedatacategorygroupstructures.htm)
- retrieve() (atlas.en-us.api.meta/api/sforce_api_calls_retrieve.htm)
