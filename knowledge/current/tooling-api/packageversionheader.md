---
title: "PackageVersionHeader"
domain: tooling-api
topic: packageversionheader
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:43.632Z
estimatedTokens: 426
keywords: [PackageVersionHeader, package, version, installed, managed, Associated, API, Calls, PackageVersion, Sample, Code—Java]
---

# PackageVersionHeader

> Specifies the package version for each installed
            managed package.

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

## Code Examples

```apex
import com.sforce.soap.apex.SoapConnection;

import com.sforce.soap.apex.PackageVersion;

import com.sforce.soap.apex.ExecuteAnonymousResult;



public void PackageVersionHeaderSample(SoapConnection connection, String code) throws Exception {

  com.sforce.soap.apex.PackageVersion pv = new com.sforce.soap.apex.PackageVersion();

  pv.setNamespace("installedPackageNamespaceHere");

  pv.setMajorNumber(1);

  pv.setMinorNumber(5);



  PackageVersion[] pvs = new PackageVersion[]{pv};

  connection.setPackageVersionHeader(pvs);



  ExecuteAnonymousResult result = connection.executeAnonymous(apexCode);



  if (result.isCompiled()) {

    System.out.println("Compiled successfully.");

    System.out.println("Execution result: " + (result.isSuccess() ? "SUCCESS" : "FAILED!"));

    if (!result.isSuccess()) {

      System.out.println("Cause: " + result.getExceptionMessage());

      System.out.println(result.getExceptionStackTrace());

    }

  } else {

    System.out.println("Failed to compile: " + result.getCompileProblem());

  }

}
```
