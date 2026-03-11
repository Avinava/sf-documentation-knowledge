---
title: "PackageVersionHeader"
domain: tooling-api
topic: packageversionheader
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.084Z
keywords: [PackageVersionHeader, Associated, API, Calls, Fields, PackageVersion, Sample, Code—Java]
---

# PackageVersionHeader

# PackageVersionHeader

Specifies the package version for each installed managed package.

A managed package can have several versions with different content and behavior. This header allows you to specify the version used for each package referenced by your API client.

If a package version isn't specified, the API client uses the version of the package specified in Setup. From Setup, enter API in the Quick Find box, select **API**, and then click **Configure Enterprise Package Version Settings** under Enterprise Package Version Settings.

This header is available in API version 16.0 and later.

## Associated API Calls

convertLead(), create(), delete(), describeGlobal(), describeLayout(), describeSObject(), describeSObjects(), describeSoftphoneLayout(), describeTabs(), executeAnonymous(), merge(), process(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| packageVersions | PackageVersion[] | A list of package versions for installed managed packages referenced by your API client. |

## PackageVersion

Specifies a version of an installed managed package. A package version is majorNumber.minorNumber, for example 2.1.

Fields

| Field | Type | Description |
| --- | --- | --- |
| majorNumber | int | The major version number of a package version. |
| minorNumber | int | The minor version number of a package version. |
| namespace | string | The unique namespace of the managed package. |

## Sample Code—Java

This sample sets the package version for one installed package in the PackageVersionHeader. Next, it executes the code passed into this method via the executeAnonymous Apex method.

```

```