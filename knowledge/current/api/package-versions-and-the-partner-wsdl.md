---
title: "Package Versions and the Partner WSDL"
domain: api
topic: package-versions-and-the-partner-wsdl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.836Z
estimatedTokens: 496
keywords: [Package, Versions, Partner, WSDL, loosely, typed, flexible, partners, want, integrate, multiple, organizations, API, calls, provide]
---

# Package Versions and the Partner WSDL

> The partner WSDL is loosely typed. This makes it more flexible for
  partners who want to integrate with multiple organizations. Default package
  versions for API calls provide fallback settings if package versions are not
  provided by an API call.

# Package Versions and the Partner WSDL

The partner WSDL is loosely typed. This makes it more flexible for partners who want to integrate with multiple organizations. Default package versions for API calls provide fallback settings if package versions are not provided by an API call.

The behavior of a package in partner API calls is defined by the latest installed package version if the default value (Not Specified) is selected for the installed package. This means that behavior of package components, such as an Apex trigger, could change when a package is upgraded and that change would immediately impact the integration. Subscribers may want to select a specific version for an installed package for all partner API calls from client applications to ensure that subsequent installations of package versions do not affect their existing integrations.

An API client developer should communicate with the administrator of the default partner package version settings if these are two different roles in your organization and the developer recommends changing the settings. Alternatively, an API client developer can set the package versions in the [PackageVersionHeader](atlas.en-us.api.meta/api/sforce_api_header_packageversionheader.htm "Specifies the package version for each installed managed package.") SOAP header for the client.

A partner that is developing a package that references another package should always supply version information for the base package in their partner API calls. This ensures that the extension package is not affected by a component being deprecated in the base package.

The package version information for partner API calls is determined by the first match in the following settings.

-   The PackageVersionHeader SOAP header.
-   The default partner package version settings.

To configure default package versions for API calls with the partner WSDL, see [Package Version Settings](atlas.en-us.api.meta/api/calls_package_versions.htm).

## Related Topics

- PackageVersionHeader (atlas.en-us.api.meta/api/sforce_api_header_packageversionheader.htm)
- Package Version Settings (atlas.en-us.api.meta/api/calls_package_versions.htm)
