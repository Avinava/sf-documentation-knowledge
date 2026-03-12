---
title: "Generate an Enterprise WSDL with Managed Packages"
domain: pkg1-dev
topic: generate-an-enterprise-wsdl-with-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.728Z
estimatedTokens: 854
keywords: [Generate, Enterprise, WSDL, Managed, Packages, you’re, downloading, first-generation, installed, org, take, extra, step, select, version]
---

# Generate an Enterprise WSDL with Managed Packages

> If you’re downloading an enterprise WSDL and you have first-generation managed packages
    installed in your org, you must take an extra step to select the version of each installed
    package to include in the generated WSDL.

# Generate an Enterprise WSDL with Managed Packages

If you’re downloading an enterprise WSDL and you have first-generation managed packages installed in your org, you must take an extra step to select the version of each installed package to include in the generated WSDL.

| Available in: Salesforce Classic |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer, Editions |


| User Permissions Needed |
| --- |
| To download a WSDL: | Customize Application |

The enterprise WSDL is strongly typed, which means that it contains objects and fields with specific data types, such as int and string.

A package version is a number that identifies the set of components uploaded in a package. The version number has the format majorNumber.minorNumber.patchNumber (for example, 2.1.3). The major and minor numbers increase to a chosen value during every major release. The patchNumber is generated and updated only for a patch release. Publishers can use package versions to evolve the components in their managed packages gracefully by releasing subsequent package versions without breaking existing customer integrations using the package. A subscriber can select a package version for each installed managed package to allow their API client to continue to function with specific, known behavior even when they install subsequent versions of a package. Each package version can have variations in the composition of its objects and fields, so you must select a specific version when you generate the strongly typed WSDL.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

This is only available to first-generation managed packages.

To download an enterprise WSDL when you have managed packages installed:

1.  From Setup, enter API in the Quick Find box, then select **API**.
2.  Click **Generate Enterprise WSDL**.
3.  Select the Package Version for each of your installed managed packages. If you’re unsure which package version to select, you should leave the default, which is the latest package version.
4.  Click **Generate**.
5.  Use the **File** menu in your browser to save the WSDL to your computer.
6.  On your computer, import the local copy of the WSDL document into your development environment.

Note the following in your generated enterprise WSDL:

-   Each of your managed package version selections is included in a comment at the top of the WSDL.
-   The generated WSDL contains the objects and fields in your organization, including those available in the selected versions of each installed package. If a field or object is added in a later package version, you must generate the enterprise WSDL with that package version to work with the object or field in your API integration.
-   The SOAP endpoint at the end of the WSDL contains a URL with a format of serverName/services/Soap/c/api\_version/ID where api\_version is the version of the API, such as 52.0, and ID encodes your package version selections when you communicate with Salesforce.

You can also select the default package versions for the enterprise WSDL without downloading a WSDL from the API page in Setup. Default package versions for API calls provide fallback settings if package versions aren’t provided by an API call. Many API clients don’t include package version information, so the default settings maintain existing behavior for these clients.
