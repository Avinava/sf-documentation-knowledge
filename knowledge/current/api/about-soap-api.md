---
title: "About SOAP API"
domain: api
topic: about-soap-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.845Z
estimatedTokens: 2623
keywords: [SOAP, API, Salesforce, programmatic, access, org’s, simple, powerful, secure, application, programming, interfaces, reading, basic, familiarity]
---

# About SOAP API

> Salesforce provides programmatic access to your org’s information using simple, powerful, and secure application programming interfaces. Before reading more about SOAP API, you should have
			a basic familiarity with software development, web services, and the Salesforce user interface.

# About SOAP API

Salesforce provides programmatic access to your org’s information using simple, powerful, and secure application programming interfaces. Before reading more about SOAP API, you should have a basic familiarity with software development, web services, and the Salesforce user interface.

Any functionality described in this guide is available if your org has the API feature enabled. This feature is enabled by default for Performance, Unlimited, Enterprise, and Developer Editions. Some Professional Edition orgs have the API enabled. If you can’t access the features you see in this guide, contact Salesforce.

Salesforce offers several APIs in addition to SOAP API. If you’re wondering whether SOAP API is the right tool to use, check out [Which API Do I Use?](https://help.salesforce.com/s/articleView?id=platform.integrate_what_is_api.htm&type=5&language=en_US) in Salesforce Help.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api)

#### Tip

Salesforce SOAP API is designed to work with Salesforce objects. See the [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_concepts.htm) for an introduction and more information about Salesforce objects.

## Customize, Integrate, and Extend Your Salesforce Solutions

The Lightning Platform allows you to customize, integrate, and extend your Salesforce organization using the language and platform of your choice:

-   **Customize Salesforce** with custom fields, links, objects, page layouts, buttons, record types, s-controls, and tabs to meet specific business requirements.
-   **Integrate Salesforce** with your org’s ERP and finance systems. Deliver real-time sales and support information to company portals and populate critical business systems with customer information.
-   **Extend Salesforce** in presentation, business logic, and data services with new functionality that reflects the business requirements of your org.

For more information about Lightning Platform solutions and developer resources, go to [Salesforce Developers](https://developer.salesforce.com/ "HTML (New Window)").

## Supported Editions and Required Permissions

To use SOAP API, your org must use Enterprise Edition, Performance Edition, Unlimited Edition, or Developer Edition. If you’re an existing Salesforce customer and want to upgrade to Enterprise, Unlimited, or Performance Edition, contact your account representative.

To protect the configuration and live data in your production org, we recommend building and testing all solutions and changes in an isolated environment, such as a Developer Edition, sandbox, or scratch org.

Developer Edition provides access to all features available with Enterprise Edition, but is constrained by the number of users and the amount of storage space in each org. Sign up for a free [Developer Edition](https://developer.salesforce.com/signup). Sandboxes create copies of your existing org into separate environments. For more information, see [Sandboxes: Staging Environments for Customizing and Testing](https://help.salesforce.com/articleView?id=deploy_sandboxes_parent.htm&language=en_US "html (New Window)"). A scratch org is a source-driven and disposable deployment that’s fully configurable, allowing you to emulate different Salesforce editions with different features and preferences. For more information, see [Scratch Orgs](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm "html (New Window)")

In all supported editions, a user must have the API Enabled permission turned on in the user profile they’re assigned. This permission is enabled by default on some profiles, including many profiles available in Developer Edition orgs. In supported editions, you can also use the Salesforce Integration user license to grant system-to-system integration users org access while limiting them to API-only operations. For more information, see Salesforce Help: [Give Integration Users API Only Access](https://help.salesforce.com/s/articleView?id=platform.integration_user.htm&type=5&language=en_US).

## Standards Compliance

SOAP API is implemented to comply with the following specifications:

| Standard Name | Website |
| --- | --- |
| Simple Object Access Protocol (SOAP) 1.1 | https://www.w3.org/TR/2000/NOTE-SOAP-20000508/ |
| Web Service Description Language (WSDL) 1.1 | http://www.w3.org/TR/2001/NOTE-wsdl-20010315 |
| WS-I Basic Profile 1.1 | http://www.ws-i.org/Profiles/BasicProfile-1.1-2004-08-24.html |

## Development Platforms

SOAP API works with current SOAP development environments, including, but not limited to, Visual Studio .NET 2005. In this document, we provide examples in Java and C# (.NET). The Java examples are based on WSC 20.0 (WSC) and JDK 6 (Java Platform Standard Edition Development Kit 6). Other versions of WSC are available at [https://github.com/forcedotcom/wsc](https://github.com/forcedotcom/wsc "HTML (New Window)") and [https://mvnrepository.com/artifact/com.force.api/force-wsc](https://mvnrepository.com/artifact/com.force.api/force-wsc). To see a complete list of compatible development platforms and more sample code, go to [developer.salesforce.com](https://developer.salesforce.com/ "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Development platforms vary in their SOAP implementations. Implementation differences in certain development platforms might prevent access to some or all features of the API. If you’re using Visual Studio for .NET development, we recommend that you use Visual Studio 2003 or higher.

## SOAP API Support Policy

Salesforce recommends that your new client applications use the most recent version of the Lightning Platform WSDL file to fully exploit the benefits of richer features and greater efficiency. You can navigate to the most recent WSDL for your organization from Setup by entering API in the Quick Find box, then selecting **API**. When a new version is released, use the following steps in [Quick Start](atlas.en-us.api.meta/api/sforce_api_quickstart_steps.htm) to update your WSDL:

-   Regenerate the WSDL file (see [Step 2: Generate or Obtain the Web Service WSDL](atlas.en-us.api.meta/api/sforce_api_quickstart_steps_generate_wsdl.htm "To access the Lightning Platform Web service, you need a Web Service Description Language (WSDL) file. The WSDL file defines the Web service that is available to you."))
-   Import it into your environment (see [Step 3: Import the WSDL File Into Your Development Platform](atlas.en-us.api.meta/api/sforce_api_quickstart_steps_import_wsdl.htm))

### Compatibility

Each new Salesforce release consists of two components:

-   A new release of platform software that resides on Salesforce systems
-   A new version of SOAP API

For example, the Winter ’24 release included SOAP API version 59.0 and the Spring ’24 release included SOAP API version 60.0. For more information about API versions, see [Find Salesforce Edition and API version](https://help.salesforce.com/s/articleView?id=000386929&type=1&language=en_US "HTML (New Window)").

Salesforce does not guarantee that an application written against one SOAP API version will work with future SOAP API versions: Changes in method signatures and data representations are often required as we continue to enhance SOAP API. However, we strive to keep SOAP API consistent from version to version with minimal, if any, changes required to port applications to newer SOAP API versions.

For information about Salesforce Platform API versions that are deprecated or retired, see [Salesforce Platform API Versions 21.0 through 30.0 Retirement](https://help.salesforce.com/s/articleView?id=000389618&type=1&language=en_US "HTML (New Window)") .

## Choosing a WSDL

There are two Lightning Platform Web services for which you can obtain WSDL files for API access:

-   **Lightning Platform Enterprise WSDL**—This API is for most enterprise users who are developing client applications for their org. The enterprise WSDL file is a strongly typed representation of your org’s data. It provides information about your schema, data types, and fields to your development environment, allowing for a tighter integration between it and the Lightning Platform Web service. This WSDL changes if custom fields or custom objects are added to, renamed, or removed from, your org’s Salesforce configuration. If you are downloading an enterprise WSDL and you have managed packages installed in your organization, you need to take an extra step to select the version of each installed package to include in the generated WSDL.

    Note the following when generating the enterprise WSDL:

    -   If new custom fields or objects are added to, renamed, or removed from your org’s information, you must regenerate the WSDL file to access them.
    -   The generated WSDL contains the objects and fields in your org, including those available in the selected versions of each installed package. If a field or object is added in a later package version, you must generate the enterprise WSDL with that package version to work with the object or field in your API integration.

-   **Lightning Platform Partner WSDL**—This API is for Salesforce partners who are developing client applications for multiple orgs. As a loosely-typed representation of the Salesforce object model, the partner WSDL can be used to access data within any org.

## Related Resources

The Salesforce developer website provides a full suite of developer toolkits, sample code, sample SOAP messages, community-based support, and other resources to help you with your development projects. Be sure to visit [developer.salesforce.com](https://developer.salesforce.com/gettingstarted "html (New Window)") for more information, or visit [developer.salesforce.com/signup](https://developer.salesforce.com/signup) to sign up for a free Developer Edition account.

You can visit these websites to find out more about Salesforce applications:

-   [Salesforce](https://salesforce.com) for information about the Salesforce application.
-   [Salesforce AppExchange](https://appexchange.salesforce.com/) for access to apps created for Salesforce.
-   [Trailblazer Community](https://trailhead.salesforce.com/en/trailblazer-community/feed) for services to ensure Salesforce customer success.

## Related Topics

- Quick
					Start (atlas.en-us.api.meta/api/sforce_api_quickstart_steps.htm)
- Step 2: Generate or Obtain
						the Web Service WSDL (atlas.en-us.api.meta/api/sforce_api_quickstart_steps_generate_wsdl.htm)
- Step 3: Import the WSDL
						File Into Your Development Platform (atlas.en-us.api.meta/api/sforce_api_quickstart_steps_import_wsdl.htm)
