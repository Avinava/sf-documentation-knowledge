---
title: "Package Connected Apps in Second-Generation Managed Packaging"
domain: pkg2-dev
topic: package-connected-apps-in-second-generation-managed-packaging
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.008Z
estimatedTokens: 702
keywords: [Package, Connected, Apps, Second-Generation, Managed, Packaging, Add, app, Sample, Source, File]
---

# Package Connected Apps in Second-Generation Managed Packaging

> Add a connected app to a second-generation managed package.

# Package Connected Apps in Second-Generation Managed Packaging

Add a connected app to a second-generation managed package.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

Consider using External Client Apps instead. External Client Apps are the new and improved generation of connected apps. For details, see [Package External Client Apps In Second-Generation Managed Packages](https://help.salesforce.com/s/articleView?id=release-notes.rn_packaging_external_client_app.htm&release=250&language=en_US)

Prerequisites: [Create a connected app](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm "HTML (New Window)").

1.  Create a first-generation managed package (1GP) and add the connected app. It’s fine if the connected app is the only component in the package. Use the same namespace as the 2GP package for the 1GP package.

    Take note of the version number of the connected app; you’ll use this number later.

2.  From your packaging org, upload the 1GP package to create a package version.
3.  Promote the 1GP version to the released state.

    Promoting the 1GP version allows the connected app to be included in a second-generation managed package. You don’t need to install the 1GP version into an org.

4.  Navigate to the source for your connected app, or pull the source from the org where the connected app is being developed.
5.  Create a source .xml file in your 2GP directory and reference the connected app you want to include. See the Sample Source File section.
6.  Create a second-generation managed package and add in the source code for the connected app. Add the source code manually. You can’t use sf project retrieve start or the retrieve() Metadata API call to add the source code.

## Sample Source File

```

```

The developerName is the combination of your namespace (db\_0110\_ns4) and the name of your connected app (A\_Connected\_App).

The version specified in the source file is the version number of the connected app. Use decimal formatting when specifying the version number. The version number must match the version number of the connected app before it was added to the 1GP managed package.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

When you add a connected app to a 1GP package, and upload the package, the version number of the connected app is auto incremented. For example, when version 4.0 of a connected app is added to a 1GP package, the package version increments the version number of the connected app from 4.0 to 5.0. When creating the source file for your 2GP package, specify the version number of the connected app before it was uploaded into a 1GP package, in this case, 4.0.

## Code Examples

```
<ConnectedApp xmlns="http://soap.sforce.com/2006/04/metadata">
    <developerName>db_0110_ns4__A_Connected_App</developerName>
    <label>A Connected App</label>
    <version>1.0</version>
</ConnectedApp>
```
