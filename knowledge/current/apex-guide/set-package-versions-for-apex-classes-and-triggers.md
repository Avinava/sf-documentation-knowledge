---
title: "Set Package Versions for Apex Classes and Triggers"
domain: apex-guide
topic: set-package-versions-for-apex-classes-and-triggers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.720Z
estimatedTokens: 2382
keywords: [Package, Versions, Apex, Classes, Triggers, managed, subscriber, specify, version, Setup, metadata, deployments, API, requests]
---

# Set Package Versions for Apex Classes and Triggers

> As a managed package subscriber, you can specify which package version that your managed
    Apex classes and triggers use. Set the package version in Setup, through metadata deployments,
    or with API requests.

# Set Package Versions for Apex Classes and Triggers

As a managed package subscriber, you can specify which package version that your managed Apex classes and triggers use. Set the package version in Setup, through metadata deployments, or with API requests.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

In Summer ’25 and later, package subscribers can use version settings to specify the version of a migrated second-generation managed package (2GP) that an Apex class or trigger depends on. This functionality is already available to first-generation managed packages (1GP), but isn’t yet supported in 2GP packages that weren’t converted from a 1GP package. See [Apex Version Settings in Migrated Second-Generation Managed Packages (2GP)](https://help.salesforce.com/s/articleView?id=005101483&type=1&language=en_US).

A package version is a number that identifies the set of components uploaded in a package. The version number has the format majorNumber.minorNumber.patchNumber (for example, 2.1.3). The major and minor numbers increase to a chosen value during every major release. The patchNumber is generated and updated only for a patch release.

If you install a new package version, only one instance of each component exists in the package, but the components can emulate older versions. Say that you use a managed package that contains an Apex class. If the publisher decides to deprecate a method in the Apex class and release a new package version, you still see only one instance of the Apex class after installing the new version. However, this Apex class can still emulate the previous version for any code that references the deprecated method in the older version.

By default, an Apex class or trigger that references a managed package is associated with the package version installed when that class or trigger was last saved or deployed. For example, say that you install version 1.0 of Package A, and then create and deploy an Apex class that references that managed package. If you upgrade to version 2.0 of Package A but don’t redeploy the class, then the class remains associated with version 1.0. However, if you upgrade Package A to version 2.0 and then redeploy the class, then the class is now associated with version 2.0.

You can override the default package version settings for an Apex class or trigger. When set to a specific package version, the class or trigger views the package’s global Apex as if that version was installed. Explicitly setting a package version is useful if your class or trigger relies on an older shape of a packaged component. For an example where overriding the default package version is vital to maintain backwards compatibility, see [Safely Upgrade Packages from Developer and Subscriber Perspectives](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_safe_upgrades.htm "Learn how to upgrade a managed package safely through this extended example. See the actions that package developers and subscribers can take to ensure a smooth transition and safeguard the backwards compatibility of existing integrations.").

#### See Also

-   [Version Apex in Managed Packages (for package developers)](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_package_versions.htm "A managed package component can exhibit different behavior in different package versions. By versioning managed Apex, you can add and refine components in the managed package, while maintaining backwards compatibility for existing subscribers.")

-   [Safely Upgrade Packages from Developer and Subscriber Perspectives](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_safe_upgrades.htm "Learn how to upgrade a managed package safely through this extended example. See the actions that package developers and subscribers can take to ensure a smooth transition and safeguard the backwards compatibility of existing integrations.")


## Set a Package Version in Setup

Associate an Apex class or trigger with a specific package version in Setup.

To configure the package version settings for an Apex class or trigger:

1.  From Setup, enter Apex Classes or Apex Triggers in the Quick Find box, and then select **Apex Classes** or **Apex Triggers**.
2.  From the list, click **Edit** for the Apex class or trigger that you want to configure.
3.  Click the **Version Settings** tab.
4.  From the Version dropdown for the managed package, select the desired version referenced by the class or trigger.

    The class or trigger continues to use this version even if your install later versions of the managed package, unless you manually update the version setting.

5.  Click **Save**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If the package is referenced in the class or trigger, you can’t remove a class or trigger’s version setting for a managed package. To find where the class or trigger references a managed package, on the class or trigger’s Detail page, click **Show Dependencies**.

## Set a Package Version in Metadata API

Associate an Apex class or trigger with a specific package version by using Metadata API.

With the [PackageVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_classes.htm#PackageVersion "HTML (New Window)") field, you specify a managed package version in an Apex class or trigger’s metadata.

1.  Identify the managed package’s reference ID. This ID is either the subscriber package ID for migrated 2GP managed packages or the package namespace for 1GP managed packages.
    1.  From Setup, in the Quick Find box, enter Installed Packages, and select **Installed Packages**.
    2.  Locate the installed package that you want to reference and click the Package Name.
    3.  On the Installed Package Detail page, locate the Version Setting field. The field identifies the type of reference ID.
2.  In the Apex class or trigger’s metadata file, add a <packageVersions\> element. If your Apex class or trigger references multiple managed packages, include a separate <packageVersions\> element for each package.
3.  Within the <packageVersions\> element, add the required fields and the desired values.
    -   For migrated 2GP managed packages, add the packageId field.
    -   For 1GP managed packages, use the namespace field instead.

### Example

Here’s an example declarative metadata definition of an Apex class that references a migrated 2GP managed package.

```

```

Here’s an example declarative metadata definition of an Apex class that references a 1GP managed package.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

**Metadata Usage Note for Migrated 2GP Packages**

If you set a package version for an Apex class or trigger that references a 1GP managed package before Summer ’25, your existing version settings remain valid when the developer migrates the package to 2GP.

If you retrieve metadata using Salesforce API version 61.0 and earlier, <namespace\> is still used in the <packageVersions\> section of the meta.xml file to identify the referenced migrated 2GP package. If you retrieve metadata using API version 62.0 and later, <packageId\> is used in the <packageVersions> section instead.

An error can occur if you deploy metadata using <packageId\> to an org that still has the 1GP or 2GP pre-migrated version of the package installed. To resolve this issue, either upgrade the target org to the migrated package, or edit the <packageVersions\> section to use <namespace\> instead.

## Set a Package Version in API Requests

Specify a managed package version by using the package version header in your API request.

1.  Identify the managed package’s reference ID. This ID is either the subscriber package ID for migrated 2GP managed packages or the package namespace for 1GP managed packages.

    1.  From Setup, in the Quick Find box, enter Installed Packages, and select **Installed Packages**.
    2.  Locate the installed package that you want to reference and click the Package Name.
    3.  On the Installed Package Detail page, locate the Version Setting field. The field identifies the type of reference ID.

    If the Version Setting field is set to packageID, then the value of the Package field is the package’s reference ID. If the Version Setting field is set to namespace, then the value of the Namespace field is the package’s reference ID.

2.  Set the package version header according to the managed package’s reference ID and the desired package version.
    -   For REST API calls, use the x-sfdc-packageversion-\[packageId/namespace\] header. See [Package Version Header](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/headers_packageversion.htm "HTML (New Window)") in the REST API Developer Guide.
    -   For SOAP API calls, use the PackageVersionHeader header. See [PackageVersionHeader](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_header_packageversionheader.htm "HTML (New Window)") in the SOAP API Developer Guide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If a package version isn’t specified in a request header, the API client uses the version of the package specified in Setup. To set this value, from Setup, enter API in the Quick Find box and select **API**. Then click **Configure Enterprise Package Version Settings** under Enterprise Package Version Settings.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ApexClass xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>66.0</apiVersion>
    <packageVersions>
        <majorNumber>3</majorNumber>
        <minorNumber>0</minorNumber>
        <packageId>033xx0000000001</packageId>
    </packageVersions>
    <status>Active</status>
</ApexClass>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<ApexClass xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>66.0</apiVersion>
    <packageVersions>
        <majorNumber>3</majorNumber>
        <minorNumber>0</minorNumber>
        <namespace>pkg1</namespace>
    </packageVersions>
    <status>Active</status>
</ApexClass>
```

## Related Topics

- Safely Upgrade Packages
        from Developer and Subscriber Perspectives (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_safe_upgrades.htm)
- Version Apex in Managed Packages (for package developers) (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_package_versions.htm)
- Safely Upgrade Packages from Developer and Subscriber Perspectives (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_safe_upgrades.htm)
