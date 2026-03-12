---
title: "Create and Upload an Unmanaged Package"
domain: pkg1-dev
topic: create-and-upload-an-unmanaged-package
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:25.627Z
estimatedTokens: 431
keywords: [Upload, Unmanaged, Package, procedure, Tooling, API, sample, code, PackageUploadRequest, Developer, Considerations, Uninstalling, Packages]
---

# Create and Upload an Unmanaged Package

> Use the following procedure to upload an unmanaged package through the UI. You can also
  upload a package using the Tooling API. For sample code and more details, see the
  PackageUploadRequest object in the Tooling API Developer Guide.

# Create and Upload an Unmanaged Package

Use the following procedure to upload an unmanaged package through the UI. You can also upload a package using the Tooling API. For sample code and more details, see the PackageUploadRequest object in the Tooling API Developer Guide.

1.  Create the package:
    1.  From Setup, enter Package Manager in the Quick Find box, then select **Package Manager**.
    2.  Click **New**.
    3.  Fill in the details of the package.
    4.  Click **Save**.
2.  On the Components tab, click **Add**.
3.  From the Component Type dropdown list, choose a component.
4.  Select the component you want to add.
5.  Click **Add To Package**.
6.  Repeat these steps until you’ve added all the components you want in your package.
7.  Click **Upload**.

You will receive an email that includes an installation link when your package has been uploaded successfully. Wait a few moments before clicking the installation link or distributing it to others, as it might take a few minutes for it to become active.

## Considerations for Uninstalling Unmanaged Packages

If your unmanaged package has dependencies on metadata in another package, remove any dependencies before attempting to uninstall either package.

If you’re working in a sandbox org, you must first remove the package dependencies in your production org.

1.  Locate the unmanaged package in your production org and remove the dependencies to the package you plan to uninstall.
2.  [Create or refresh your sandbox org](https://help.salesforce.com/s/articleView?id=platform.data_sandbox_create_parent.htm&type=5&language=en_US).
3.  In your sandbox org, you can now uninstall the package that your unmanaged package previously depended on.
