---
title: "Deep Linking Schema for the Field Service Mobile App"
domain: field-service
topic: deep-linking-schema-for-the-field-service-mobile-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.218Z
keywords: [Deep, Linking, Schema, Field, Service, Mobile, App, URI, Format, Supported, Schemes, Parameter, Passing]
---

# Deep Linking Schema for the Field Service Mobile App

# Deep Linking Schema for the Field Service Mobile App

Use the predefined URI schema for the Field Service mobile app on Android and iOS devices.

## URI Schema Format

The available URI schema formats are:

-   <com.salesforce.fieldservice>://v1/sObject/<id>/<action>?<params>
-   <com.salesforce.fieldservice>://v1/globalaction/<api\_name>?<params>

Let’s break down each parameter of the URI scheme format.

-   com.salesforce.fieldservice—The supported Salesforce schema name.
-   v1—The current version of deep linking. The version is a static value.
-   sObject—Indicates a single instance of a Salesforce object. The schema supports all object types that are supported in the Field Service app, such as work order, service appointment, and assets.
-   id—The unique single instance of a Salesforce object. id lengths of 15 and 18 characters are supported.
-   action—A supported URI schema operation. Valid actions are listed in the Supported URI Schemes section. If no action is specified, URIs direct the work orders, service appointments, and other object types to the Overview or Details tab.
-   globalaction—The name of the global quick action.
-   api\_name—Some deep links require an API name in order to perform their function. For instance, the quick action URI requires a quick action API name, and the flow URI requires a flow API name.
-   params—The field and value pairs used in the global quick action.

## Supported URI Schemes

com.salesforce.fieldservice://v1/sObject/<id>

Links to the Overview or Details tab.

-   Work order and work order line item IDs are directed to the Overview tab.
-   Service appointment IDs are directed to the Details tab, with these exceptions.
    -   If the service appointment parent is a work order, the deep link is directed to the work order Overview tab for iOS and the service appointment Details tab for Android.
    -   If the service appointment parent is a work order line item, the deep link is directed to the work order line item Overview tab for iOS and the service appointment Details tab for Android.
-   All other object types are directed to the object’s Details tab.

**Example:** com.salesforce.fieldservice://v1/sObject/0WO5500000001UZGAA

This example links to the Overview tab for a work order.

com.salesforce.fieldservice://v1/sObject/<id>/details

Links to the Details tab for all object types.

**Example:** com.salesforce.fieldservice://v1/sObject/0WO5500000001UZGAA/details

This example links to the Details tab for a work order.

com.salesforce.fieldservice://v1/sObject/<id>/related

Links to the Related tab for all object types.

**Example:** com.salesforce.fieldservice://v1/sObject/0WO5500000001UZGAA/related

This example links to the Related tab for a work order.

com.salesforce.fieldservice://v1/sObject/<id>/products

Links to the Products tab for all applicable object types. If an object doesn’t have a Products tab, it links to the Details tab instead.

**Example:** com.salesforce.fieldservice://v1/sObject/0WO5500000001UZGAA/products

This example links to the Products tab for a work order.

com.salesforce.fieldservice://v1/sObject/<id>/feed

Links to the Feed tab for all applicable object types. If an object doesn’t have a Feed tab, it links to the Details tab instead.

**Example:** com.salesforce.fieldservice://v1/sObject/0WO5500000001UZGAA/feed

This example links to the Feed tab for a work order.

com.salesforce.fieldservice://v1/sObject/<id>/location

Links to the Location tab for all applicable object types. If an object doesn’t have a Location tab, it links to the Details tab instead.

**Example:** com.salesforce.fieldservice://v1/sObject/0WO5500000001UZGAA/location

This example links to the Location tab for a work order.

com.salesforce.fieldservice://v1/sObject/<id>/edit

Links to the edit page for the specified Salesforce record.

**Example:** com.salesforce.fieldservice://v1/sObject/0WO5500000001UZGAA/edit?Subject=Example%20Subject

This example links to the edit page for this record and fills the Subject field with the Example Subject value.

com.salesforce.fieldservice://v1/sObject/<id>/flow/<api\_name>

Launches a Field Service Mobile Flow from within the mobile app. For example, you can use this URL to launch a custom service closure flow. To use this feature, the app extension must reference this flow. You can find the extension in Setup under Field Service Mobile Settings. Verify that an extension in the App Extension section includes this flow. To learn more, see [Connect a Flow to the Field Service Mobile App](https://help.salesforce.com/articleView?id=mfs_flow_connect.htm&type=5&language=en_US). Use the URL-encoded name of the extension in the URI.

**Example:** com.salesforce.fieldservice://v1/sObject/0WO5500000001UZGAA/flow/service\_response\_flow?Subject=Example%20Subject

This example launches the “service\_response\_flow” flow passing in “Example Subject” as the value for the “Subject” input variable.

com.salesforce.fieldservice://v1/sObject/<id>/quickaction/<api\_name>

Launches a quick action from within the mobile app. These quick action types are supported: Create a Record, Update a Record, and Field Service Mobile Extension. You can pass inputs into the quick action using parameters on this URL.

**Example:** com.salesforce.fieldservice://v1/sObject/0WO5500000001UZGAA/quickaction/close\_order

This example launches the close\_order quick action.

com.salesforce.fieldservice://v1/globalaction/<api\_name>?<params>

Launches a global quick action from within the mobile app. These global quick action types are supported: Create a Record, Update a Record, and Field Service Mobile Extension. You can pass inputs into the global quick action using parameters on this URL.

**Example:** com.salesforce.fieldservice://v1/globalaction/Create\_Work\_Order?Subject=Example%20Subject

This example launches a global quick action to create a work order.

com.salesforce.fieldservice://v1/login/<server\_name>/<server\_url>

Adds a connection to a server using the supplied URL. To access the server, users click the deep link and enter their existing login credentials. The server is saved to the Change Server list, which gives users quick access because it eliminates the need for repeated log-in attempts.

**Parameters:**

-   <server\_name> is a user-friendly name used to identify the server. Avoid spaces, punctuation, and other “illegal” characters, especially if workers must log in to multiple sites.
-   <server\_url> is the URL used by the Salesforce Field Service Mobile app to log in. Don’t include "http" or "https" when specifying the URL.

**Example:** com.salesforce.fieldservice://v1/login/employee/my.site.com/contractor/login

This example sets the login URI, sends users directly to https://my.site.come/contractor/login, and saves it in the Change Server list as employee.

**Security Considerations:**

-   Ensure that you trust the source of a link before clicking it, especially when adding usernames and passwords. For this reason, we recommend that your workers are trained on best practices and that the login link isn’t sent directly via email.
-   In many email clients and messaging apps, regardless of the mobile operating system, the text body doesn’t support active links to mobile apps. Opening the app when a link is launched is supported, but it depends on your technology and distribution choices. If you encounter issues with your link, first, try testing it in a web browser. If the link opens in the app, it is formatted properly. In cases where the web link works but your chosen distribution method doesn't, find a different way to share the link. For a seamless experience, use a web link that redirects to the app works. Other options like QR codes, website link, PDF, or text message work well, depending on the app and the operating system used to open the link. It isn’t guaranteed that all third-party apps on iOS and Android support opening the links.

## Parameter Passing for Deep Linking

To pass parameters in a deep linking schema such as a quick action or flow URL, these parameter types are valid.

-   URL-encoded text parameters. For example, Short%20text%20input.
-   Numbers or currency. For example, 1 or 1.45.
-   Boolean values. For example, true or false. These values aren’t case-sensitive. If no parameter is passed, the default is false.
-   URL-encoded date and dateTime parameters. For example, 2019-12-11T17%3A01%3A00.000%2B0000. Include a URL-encoded timezone, such as +0000 for GMT or -0400 for AST.

Other parameters aren’t supported in deep linking URI schema.

To pass more than one parameter, use an ampersand (&) between them. For example, firstname=John&lastname=Doe.

We don’t limit the number of parameters, and each parameter value can contain up to 100,000 characters. While deep links can encode up to 1 MB, it’s best practice to encode smaller amounts of data.