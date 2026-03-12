---
title: "API Call Basics"
domain: api
topic: api-call-basics
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:56.694Z
estimatedTokens: 2968
keywords: [API, Call, Basics, development, environment, construct, Web, service, client, applications, standard, protocols, programmatically, Characteristics, Calls]
---

# API Call Basics

> Using your development environment, you can construct Web service client applications that
      use standard Web service protocols to programmatically:

# API Call Basics

API calls represent specific operations that your client applications can invoke at runtime to perform tasks, for example:

-   Query data in your organization.
-   Add, update, and delete data.
-   Obtain metadata about your data.
-   Run utilities to perform administration tasks.

Using your development environment, you can construct Web service client applications that use standard Web service protocols to programmatically:

-   Log in to the login server (login()) and receive authentication information to be used for subsequent calls
-   Query your organization’s information (query(), queryAll(), queryMore(), and retrieve() calls)
-   Perform text searches across your organization’s information (search() call)
-   Create, update, and delete data (create(), merge(), update(), upsert(), delete(), and undelete() calls)
-   Perform administrative tasks, such as retrieving user information (getUserInfo() call), changing passwords (setPassword() and resetPassword() calls), and getting the system time (getServerTimestamp() call)
-   Replicate data locally (getDeleted() and getUpdated() calls)
-   Obtain and navigate metadata about your organization’s data (describeGlobal(), describeSObject(), describeSObjects(), describeLayout(), and describeTabs() calls)
-   Work with approval processes (process())
-   Return category groups and categories from your organization (describeDataCategoryGroups() and describeDataCategoryGroupStructures()).

See [Core Calls](atlas.en-us.api.meta/api/sforce_api_calls_list.htm "A list of supported calls in the API in alphabetical order, and provides a brief description for each. Click a call name to see syntax, usage, and more information for that call."), [Describe Calls](atlas.en-us.api.meta/api/sforce_api_calls_list_describe.htm "Lists supported describe calls in the API."), and [Utility Calls](atlas.en-us.api.meta/api/utility_calls.htm "This topic describes API calls that your client applications can invoke to obtain the system timestamp, user information, and change user passwords.") for complete details about each call.

#### See Also

-   [*Salesforce Help*: User Permissions](https://help.salesforce.com/s/articleView?id=platform.admin_userperms.htm&type=5&language=en_US "Salesforce Help: User Permissions - HTML (New Window)")


## Characteristics of API Calls

All API calls are:

-   **Service Requests and Responses**—Your client application prepares and submits a service request to the Lightning Platform Web Service via the API, the Lightning Platform Web Service processes the request and returns a response, and the client application handles the response.
-   **Synchronous**—After the API call is invoked, your client application waits until it receives a response from the service. Asynchronous calls are not supported.
-   **Committed Automatically Versus Rollback on Error**—By default, every operation that writes to a Salesforce object is committed automatically. This is analogous to the AUTOCOMMMIT setting in SQL. For create(), update(), and delete() calls that attempt to write to multiple records for an object, the write operation for each record is treated as a separate transaction. For example, if a client application attempts to create two new accounts, they’re created using mutually exclusive insert operations that succeed or fail individually, not as a group.

    For API version 20.0 and later, there is an AllOrNoneHeader header that allows a call to roll back all changes unless all records are processed successfully. This header is supported by the create(), delete(), undelete(), update(), and upsert() calls.


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

The default behavior means that client applications may need to handle some failures: for example, if you create an opportunity that has shipments (a custom object), and the opportunity line item gets created but the shipment creation fails, if your business rules required all opportunities be created with shipment, your client application would need to roll back the opportunity creation. The easiest way to do this is to use AllOrNoneHeader.

## Factors that Affect Data Access

When using the API, the following factors affect access to your organization’s data:

Access

Your organization must be enabled for API access.

Objects may not be available until you contact Salesforce and request access. For example, Territory2 is visible only if Enterprise Territory Management has been enabled in the application. Such requirements are in the “Usage” section for each object.

Sometimes a feature must be used once before objects related to it can be accessed with the API. For example, the recordTypeIds is available only after at least one record type has been created for your organization in the user interface.

To investigate data access issues, you can start by inspecting the WSDL:

-   **Enterprise WSDL**: The generated enterprise WSDL file contains all of the objects that are available to your organization. By using the API, a client application can access objects that are defined in your enterprise WSDL file.
-   **Partner WSDL**: When using the generated partner WSDL file, a client application can access objects that are returned in the describeGlobal() call.

Object-Level and Field-Level Security

The API respects object-level and field-level security configured in the user interface. You can access objects and fields only if the logged-in user's permissions and access settings allow such access. For example, fields that are not visible to a given user are not returned in a query() or describeSObjects() call. Similarly, read-only fields can't be updated.

User Permissions

A user attempting to access the API must have the permission “API Enabled” selected. It’s selected by default.

Your client application logs in as a user called a logged-in user. The logged-in user's permissions grant or deny access to specific objects and fields in your organization:

-   **Read**—Users can only view objects of this type.
-   **Create**—Users can read and create objects of this type.
-   **Edit**—Users can read and update objects of this type.
-   **Delete**—Users can read, edit, and delete objects of this type.

User permissions do not affect field-level security. If field-level security specifies that a field is hidden, users with “Read” on that object can view only those fields that are not hidden on the record. In addition, users with “Read” on an object can view only those records that sharing settings allow. The one exception is the “Edit Read Only Fields” permission, which gives users the ability to edit fields marked as read only via field-level security.

Sharing

For most API calls, data that is outside of the logged-in user’s sharing model is not returned. Users are granted the most permissive access that is available to them, either through organization-wide defaults or manual record sharing, just as in the application.

User Permissions that Override Sharing

-   **View All Records**—Users can view all records associated with this object regardless of sharing settings.
-   **View All Data**—Users can view all records regardless of sharing settings. This permission is a user permission, not an object-level permission like View All Records.
-   **Modify All Records**—Users can read, edit, delete, transfer, and approve all records associated with this object, regardless of sharing settings.
-   **Modify All Data**—Users can read, edit, delete, transfer, and approve all records regardless of sharing settings. This permission is a user permission, not an object-level permission like Modify All Records.

To protect the security of your data, give the logged-in user only the permissions needed to successfully execute all the calls made by the application. For large integration applications, “Modify All Data” may speed up call response times. If you are loading a large number of records, use [Bulk API 2.0](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_asynch.meta/api_asynch/bulk_api_2_0.htm) instead.

Related Objects

Some objects depend on other objects for permission. For example, AccountTeamMember follows sharing on the associated permission-assigned object such as the Account record. Similarly, a Partner depends on the permissions in the associated .

Ownership changes to a record do not automatically cascade to related records. For example, if ownership changes for a given Account, ownership does not then automatically change for any Contract associated with that Account—each ownership change must be made separately and explicitly by the client application.

Object Properties

To create an object with the create() call, the object's createable attribute must be set to true. To determine what operations are allowed on a given object, your client application can invoke the describeSObjects() call on the object and inspect the properties in the DescribeSObjectResult.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

replicatable allowsgetUpdated() and getDeleted() calls.

Page Layouts and Record Types

Requirements defined in the Salesforce user interface for page layouts and record types are not enforced by the API:

-   Page layouts can specify whether a given field is required, but the API does not enforce such layout-specific field restrictions or validations in create() and update() calls. It’s up to the client application to enforce any such constraints, if applicable.
-   Record types can control which picklist values can be chosen in a given record and which page layouts users with different profiles can see. However, such rules that are configured and enforced in the user interface are not enforced in the API. For example, the API does not validate whether the value in a picklist field is allowed per any record type restrictions associated with the profile of the logged-in user. Similarly, the API does not prevent a client application from adding data to a particular field simply because that field does not appear in a layout associated with the profile of the logged-in user.

Referential Integrity

To ensure referential integrity, the API forces or prevents certain behaviors:

-   [ID](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm#i1435616) values in [reference fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm#i1435823) are validated in create() and update() calls.
-   If a client application deletes a record, then its children are automatically deleted as part of the call if the cascadeDelete property on ChildRelationship for that child has a value of true. For example, if a client application deletes an Opportunity, then any associated OpportunityLineItem records are also deleted. However, if an OpportunityLineItem is not deletable or is currently being used, then deletion of the parent Opportunity fails. For example, if a client application deletes an Invoice\_Statement, then any associated Line\_Item records are also deleted. However, if a Line\_Item is not deletable or is currently being used, then deletion of the parent Invoice\_Statement fails. Use DescribeSObjectResult to view the ChildRelationship value if you want to be sure what will be deleted.

    There are certain exceptions that prevent the execution of a cascadeDelete. For example, you can't delete an account if it has associated cases, if it has related opportunities that are owned by other users, or if associated contacts are enabled for the Customer Portal. In addition, if you attempt to delete an account that has closed/won opportunities owned by you or has active contracts, then the delete request for that record will fail.

## Related Topics

- Core Calls (atlas.en-us.api.meta/api/sforce_api_calls_list.htm)
- Describe Calls (atlas.en-us.api.meta/api/sforce_api_calls_list_describe.htm)
- Utility
        Calls (atlas.en-us.api.meta/api/utility_calls.htm)
