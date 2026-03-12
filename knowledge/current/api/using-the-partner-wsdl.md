---
title: "Using the Partner WSDL"
domain: api
topic: using-the-partner-wsdl
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.817Z
estimatedTokens: 758
keywords: [Partner, WSDL, API, two, WSDLs, choose, High, Precision, Versions]
---

# Using the Partner WSDL

> The API provides two WSDLs to choose from:

# Using the Partner WSDL

The API provides two WSDLs to choose from:

-   **Enterprise Web Services WSDL**—Used by enterprise developers to build client applications for a single Salesforce organization. The enterprise WSDL is strongly typed, which means that it contains objects and fields with specific data types, such as int and string. Customers who use the enterprise WSDL document must download and re-consume it when changes are made to the custom objects or fields in their org or when they want to use a different version of the API. To access the current WSDL for your organization, log in to your Salesforce organization and from Setup, enter API in the Quick Find box. Then, on the API page, select **Generate Enterprise WSDL**.
-   **Partner Web Services WSDL**—Used for client applications that are metadata-driven and dynamic in nature. It is particularly—but not exclusively—useful to Salesforce partners who are building client applications for multiple organizations. As a loosely typed representation of the Salesforce data model that works with name-value pairs of field names and values instead of specific data types, it can be used to access data within any organization. This WSDL is most appropriate for developers of clients that can issue a query call to get information about an object before the client acts on the object. The partner WSDL document needs to be downloaded and consumed only once per version of the API. To access the current WSDL for your organization, log in to your Salesforce organization and from Setup, enter API in the Quick Find box. Then, on the API page, select **Generate Partner WSDL**.

In general, the enterprise WSDL is more straightforward to use, while the partner WSDL is more flexible and dynamically adaptable to different organizations, allowing you to write a single application that can be used for multiple users and multiple organizations.

## High Precision Versions

If you require higher precision than the regular WSDLs provide, ask your account team about the “High Precision API” feature. When this feature is enabled, the WSDLs that you download (both Enterprise and Partner) use higher precision data types. For example, this feature is useful if your organization uses complex numerical formulas that are prone to rounding errors.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

This feature is a limited pilot and is not currently a generally available feature.

If you have been using the regular version of the WSDL and change to the high precision version, perform the following checks:

1.  Download the new WSDL.
2.  Regenerate the stub code. (See [Setting Up Your Java Developer Environment](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_overview.htm).)
3.  Verify that the type of variables used to store numeric values in your code can accommodate the new types.
