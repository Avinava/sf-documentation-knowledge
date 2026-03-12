---
title: "PackageVersionHeader"
domain: api
topic: packageversionheader
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.744Z
estimatedTokens: 1137
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

convertLead(), [create()](atlas.en-us.api.meta/api/sforce_api_calls_create.htm "Adds one or more new records to your organization’s data."), [delete()](atlas.en-us.api.meta/api/sforce_api_calls_delete.htm "Deletes one or more records from your organization's data."), [describeGlobal()](atlas.en-us.api.meta/api/sforce_api_calls_describeglobal.htm "Retrieves a list of available objects for your organization's data."), [describeLayout()](atlas.en-us.api.meta/api/sforce_api_calls_describelayout.htm "Retrieves metadata about page layouts for the specified object type."), [describeSObject()](atlas.en-us.api.meta/api/sforce_api_calls_describesobject.htm "Describes metadata (field list and object properties) for the specified object."), [describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject()."), [describeSoftphoneLayout()](atlas.en-us.api.meta/api/sforce_api_calls_describesoftphonelayout.htm "Retrieves layout information for a Salesforce CRM Call Center Softphone."), [describeTabs()](atlas.en-us.api.meta/api/sforce_api_calls_describetabs.htm "Returns information about the Salesforce Classic standard and custom apps available to the logged-in user."), [executeAnonymous()](atlas.en-us.api.meta/api/sforce_api_calls_executeanonymous.htm), [merge()](atlas.en-us.api.meta/api/sforce_api_calls_merge.htm "Combines up to three records of the same type into one record. The input is an array of MergeRequest elements, each of which specifies the records to combine. The output is a MergeResult object that contains information about the result of the merge."), [process()](atlas.en-us.api.meta/api/sforce_api_calls_process.htm "Submits an array of approval process instances for approval, or processes an array of approval process instances to be approved, rejected, or removed. For more information, see Set Up an Approval Process in Salesforce Help."), [query()](atlas.en-us.api.meta/api/sforce_api_calls_query.htm "Executes a query against the specified object and returns data that matches the stated conditions."), [retrieve()](atlas.en-us.api.meta/api/sforce_api_calls_retrieve.htm "Retrieves one or more records based on the specified IDs."), [search()](atlas.en-us.api.meta/api/sforce_api_calls_search.htm "Executes a text search in your organization's data."), [undelete()](atlas.en-us.api.meta/api/sforce_api_calls_undelete.htm "Undeletes records from the Recycle Bin."), [update()](atlas.en-us.api.meta/api/sforce_api_calls_update.htm "Updates one or more existing records in your organization's data."), [upsert()](atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm "Creates records and updates existing records; uses a custom field to determine the presence of existing records. In most cases, we recommend that you use upsert() instead of create() to avoid creating unwanted duplicate records (idempotent). This call is available in API version 7.0 and later.")

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

## Related Topics

- create() (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- delete() (atlas.en-us.api.meta/api/sforce_api_calls_delete.htm)
- describeGlobal() (atlas.en-us.api.meta/api/sforce_api_calls_describeglobal.htm)
- describeLayout() (atlas.en-us.api.meta/api/sforce_api_calls_describelayout.htm)
- describeSObject() (atlas.en-us.api.meta/api/sforce_api_calls_describesobject.htm)
- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- describeSoftphoneLayout() (atlas.en-us.api.meta/api/sforce_api_calls_describesoftphonelayout.htm)
- describeTabs() (atlas.en-us.api.meta/api/sforce_api_calls_describetabs.htm)
- executeAnonymous() (atlas.en-us.api.meta/api/sforce_api_calls_executeanonymous.htm)
- merge() (atlas.en-us.api.meta/api/sforce_api_calls_merge.htm)
