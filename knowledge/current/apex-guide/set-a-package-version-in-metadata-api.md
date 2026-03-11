---
title: "Set a Package Version in Metadata API"
domain: apex-guide
topic: set-a-package-version-in-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:47.347Z
keywords: [Set, Package, Version, Metadata, API, Associate, Apex, class, trigger, specific, package, version, API., Example, Note]
---

# Set a Package Version in Metadata API

> Associate an Apex class or trigger with a specific package version by using Metadata
  API.

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