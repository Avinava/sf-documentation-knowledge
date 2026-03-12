---
title: "Configure Default Package Versions for API Calls"
domain: pkg1-dev
topic: configure-default-package-versions-for-api-calls
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.715Z
estimatedTokens: 1071
keywords: [Configure, Package, Versions, API, Calls, specify, enterprise, partner]
---

# Configure Default Package Versions for API Calls

> You can specify the default package versions for enterprise API and partner API
    calls.

# Configure Default Package Versions for API Calls

You can specify the default package versions for enterprise API and partner API calls.

| Available in: Salesforce Classic |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer, Editions |


| User Permissions Needed |
| --- |
| To configure default package versions for API calls: | Customize Application |

A package version is a number that identifies the set of components uploaded in a package. The version number has the format majorNumber.minorNumber.patchNumber (for example, 2.1.3). The major and minor numbers increase to a chosen value during every major release. The patchNumber is generated and updated only for a patch release. Publishers can use package versions to evolve the components in their managed packages gracefully by releasing subsequent package versions without breaking existing customer integrations using the package.

Default package versions for API calls provide fallback settings if package versions aren’t provided by an API call. Many API clients don’t include package version information, so the default settings maintain existing behavior for these clients.

You can specify the default package versions for enterprise API and partner API calls. The enterprise WSDL is for customers who want to build an integration with their Salesforce organization only. It’s strongly typed, which means that calls operate on objects and fields with specific data types, such as int and string. The partner WSDL is for customers, partners, and ISVs who want to build an integration that can work across multiple Salesforce organizations, regardless of their custom objects or fields. It is loosely typed, which means that calls operate on name-value pairs of field names and values instead of specific data types.

You must associate the enterprise WSDL with specific package versions to maintain existing behavior for clients. There are options for setting the package version bindings for an API call from client applications using either the enterprise or partner WSDL. The package version information for API calls issued from a client application based on the enterprise WSDL is determined by the first match in the following settings.

1.  The PackageVersionHeader SOAP header.
2.  The SOAP endpoint contains a URL with a format of serverName/services/Soap/c/api\_version/ID where api\_version is the version of the API, such as 66.0, and ID encodes your package version selections when the enterprise WSDL was generated.
3.  The default enterprise package version settings.

The partner WSDL is more flexible as it’s used for integration with multiple organizations. If you choose the Not Specified option for a package version when configuring the default partner package versions, the behavior is defined by the latest installed package version. This means that behavior of package components, such as an Apex trigger, could change when a package is upgraded and that change would immediately impact the integration. Subscribers may want to select a specific version for an installed package for all partner API calls from client applications to ensure that subsequent installations of package versions don’t affect their existing integrations.

The package version information for partner API calls is determined by the first match in the following settings.

1.  The PackageVersionHeader SOAP header.
2.  An API call from a Visualforce page uses the package versions set for the Visualforce page.
3.  The default partner package version settings.

To configure default package versions for API calls:

1.  From Setup, enter API in the Quick Find box, then select **API**.
2.  Click **Configure Enterprise Package Version Settings** or **Configure Partner Package Version Settings**. These links are only available if you have at least one managed package installed in your organization.
3.  Select a Package Version for each of your installed managed packages. If you’re unsure which package version to select, you should leave the default selection.
4.  Click **Save**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Installing a new version of a package in your organization doesn’t affect the current default settings.
