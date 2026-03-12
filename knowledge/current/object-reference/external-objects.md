---
title: "External Objects"
domain: object-reference
topic: external-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:09.876Z
estimatedTokens: 1392
keywords: [External, Objects, API, version, 32.0, later, similar, custom, record, data, stored, outside, Salesforce, organization, perhaps]
---

# External Objects

> External objects are supported in API version 32.0 and later. External objects are
    similar to custom objects, but external object record data is stored outside your Salesforce
    organization. For example, perhaps you have data that’s stored on premises in an enterprise
    resource planning (ERP) system. Instead of copying the data into your org, you can use external
    objects to access the data in real time via web service callouts.

# External Objects

External objects are supported in API version 32.0 and later. External objects are similar to custom objects, but external object record data is stored outside your Salesforce organization. For example, perhaps you have data that’s stored on premises in an enterprise resource planning (ERP) system. Instead of copying the data into your org, you can use external objects to access the data in real time via web service callouts.

External objects are available with Salesforce Connect and Files Connect. Each external object is associated with an external data source definition in your Salesforce organization.

An external data source specifies how to access an external system. Salesforce Connect uses external data sources to access data that's stored outside your Salesforce organization. Files Connect uses external data sources to access third-party content systems. External data sources have associated external objects, which your users and the Lightning Platform use to interact with the external data and content.

By accessing record data on demand, external objects always reflect the current state of the external data. You don't have to manage a copy of that data in Salesforce, so you're not wasting storage and resources keeping data in sync.

External objects are best used when you have a large amount of data that you can’t or don’t want to store in your Salesforce organization, and you need to use only a small amount of data at any one time.

See [Define External Objects](https://help.salesforce.com/s/articleView?id=platform.external_object_define.htm&language=en_US) in Salesforce Help for how to create and modify external objects.

## Naming Conventions for External Objects

Object names must be unique across all standard, custom, and external objects in the org.

In the API, the names of external objects are identified by a suffix of two underscores immediately followed by a lowercase “x” character. For example, an external object named “ExtraLogInfo” in the Salesforce user interface is seen as ExtraLogInfo\_\_x in that organization's WSDL.

We recommend that you make object labels unique across all standard, custom, and external objects in the org.

## External Object Relationships

External objects support standard lookup relationships, which use the 18-character Salesforce record IDs to associate related records with each other. However, data that’s stored outside your Salesforce org often doesn’t contain those record IDs. Therefore, two special types of lookup relationships are available for external objects: external lookups and indirect lookups. See [External Object Relationships](https://help.salesforce.com/s/articleView?id=platform.external_object_relationships.htm&language=en_US) in Salesforce Help for details.

## Feature Support for External Objects

Most of the Salesforce features that support custom objects also support external objects. However, there are exceptions, and some features have special limitations and considerations for external objects. See the following topics in the Salesforce Help.

-   [External Objects in Salesforce Connect](https://help.salesforce.com/s/articleView?id=platform.platform_connect_considerations_compatibility.htm&language=en_US)
-   [Salesforce Platform Features Supported by Salesforce Connect](https://help.salesforce.com/s/articleView?id=platform.platform_connect_considerations.htm&language=en_US)

## Salesforce Connect Adapters

Salesforce Connect uses a protocol-specific adapter to connect to an external system and access its data. This table describes the available adapters.

| Salesforce Connect Adapter | Description | When to Use |
| --- | --- | --- |
| Cross-org | Uses the Lightning Platform REST API to access data that’s stored in other Salesforce orgs. | To seamlessly connect data between your Salesforce orgs. For example, provide your service representatives a unified view of customer transactions by integrating data from different Salesforce orgs. |
| OData 2.0OData 4.0 | Uses Open Data Protocol to access data that’s stored outside Salesforce. The external data must be exposed via OData producers. | To integrate external data sources into your org that support the ODATA protocol and publish an OData provider. For example, give your account executives a unified data view by pulling data from legacy systems such as SAP, Microsoft, and Oracle in real time. |
| Custom adapter created via Apex | You use the Apex Connector Framework to develop your own custom adapter when the other available adapters aren’t suitable for your needs.A custom adapter can obtain data from anywhere. For example, some data can be retrieved from anywhere in the Internet via callouts, while other data can be manipulated or even generated programmatically. | To develop your own adapter with the Apex Connector Framework when the other available adapters aren’t suitable for your needs. For example, when you want to retrieve data via callouts from a REST API. |

## Files Connect Adapters

Several Files Connect adapters are also available:

-   Google Drive
-   Box
-   SharePoint Online
-   OneDrive for Business

For more information about Salesforce Connect, see [Salesforce Connect](https://help.salesforce.com/s/articleView?id=platform.platform_connect_about.htm&language=en_US) in the Salesforce Help.

For details on using the Apex Connector Framework, see “Salesforce Connect” and “DataSource Namespace” in the [Apex Code Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/).
