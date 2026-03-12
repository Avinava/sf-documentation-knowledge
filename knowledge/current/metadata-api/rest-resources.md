---
title: "REST Resources"
domain: metadata-api
topic: rest-resources
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:42.468Z
estimatedTokens: 1424
keywords: [REST, Resources, resource, deployRequest, move, metadata, XML, files, between, Salesforce, organization, local, file, system., Working, Zip, File, Note]
---

# REST Resources

> Use the REST resource deployRequest to move
    metadata (XML files) between a Salesforce organization and a local file system.

# REST Resources

Use the REST resource deployRequest to move metadata (XML files) between a Salesforce organization and a local file system.

Data in XML files is formatted using the English (United States) locale. This approach ensures that fields that depend on locale, such as date fields, are interpreted consistently during data migrations between organizations using different languages. Organizations can support multiple languages for presentation to their users.

Metadata deployment is used primarily for the following development scenarios.

-   Development of a custom application (or customization) in a sandbox organization. After development and testing are completed, the application or customization is then deployed into a production organization using Metadata API.
-   Team development of an application in a Developer Edition organization. After development and testing are completed, you can then distribute the application via Lightning Platform AppExchange.

## Working with the Zip File

The deployRequest resource is used to deploy a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

A component is an instance of a metadata type. For example, CustomObject is a metadata type for custom objects, and the MyCustomObject\_\_c component is an instance of a custom object.

The files that are deployed in a .zip file can be unpackaged components that reside in your organization (such as standard objects). The files can also be packaged components that reside within named packages.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

You can deploy up to 10,000 files at once. (In API version 43.0 and later, AppExchange packages can contain up to 12,500 files.) The .zip file size limit that applies to SOAP calls doesn’t apply to the deployRequest REST resource. However, the 400-MB limit for components that are uncompressed into an unzipped folder after upload applies to both SOAP and REST deployments.

Every .zip file contains a project manifest, a file that’s named package.xml, and a set of directories that contain the components. The manifest file defines the components that you’re trying to retrieve or deploy and the API version used for the deployment or retrieval.

The following is a sample package.xml file.

```

```

The following elements can be defined in package.xml.

-   <fullName\> contains the name of the server-side package. If no <fullName\> exists, it’s a client-side unpackaged package.
-   <types\> contains the name of the metadata type (for example, CustomObject) and the named members (for example, myCustomObject\_\_c) to be deployed. You can add multiple <types\> elements in a manifest file.
-   <members\> contains the fullName of the component, such as MyCustomObject\_\_c. For many metadata types, you can replace the value in members with the wildcard character \* (asterisk) instead of listing each member separately. For a list of metadata types that allow the wildcard character, see the “Allows Wildcard (\*)?” column in [Metadata Types](atlas.en-us.api_meta.meta/api_meta/meta_types_list.htm "Metadata API enables you to access some entities and feature settings that you can customize in the user interface.").

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

    #### Note

    You specify Security in the <members\> element and Settings in the name element when retrieving the SecuritySettings component type.

-   <name\> contains the metadata type, for example CustomObject or Profile. There’s one name defined for each metadata type in the directory. Any metadata type that extends [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") is a valid value. The name that’s entered must match a metadata type that’s defined in the Metadata API WSDL. See [Metadata Types](atlas.en-us.api_meta.meta/api_meta/meta_types_list.htm "Metadata API enables you to access some entities and feature settings that you can customize in the user interface.") for a list.
-   <version\> is the API version number that’s used when the .zip file is deployed or retrieved. Currently the valid value is 66.0.

For more sample package.xml manifest files that show you how to work with different subsets of metadata, see [Sample package.xml Manifest Files](atlas.en-us.api_meta.meta/api_meta/manifest_samples.htm "This section includes sample package.xml manifest files that show you how to work with different subsets of metadata. A manifest file can include multiple <types> elements so you could combine the individual samples into one package.xml manifest file if you want to work with all the metadata in one batch.").

To delete components, see [Deleting Components from an Organization](atlas.en-us.api_meta.meta/api_meta/meta_deploy_deleting_files.htm "To delete components, perform a deployment with the deploy() call by using a destructive changes manifest file that lists the components to remove from your organization. You can perform a deployment that only deletes components, or a deployment that deletes and adds components. In API version 33.0 and later, you can specify components to delete before and after other components are added or updated. In earlier API versions, if deletions and additions are specified for the same deployment, the deploy() call performs the deletions first.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>MyCustomObject__c</members>
        <name>CustomObject</name>
    </types>
    <types>
        <members>*</members>
        <name>CustomTab</name>
    </types>
    <types>
        <members>Standard</members>
        <name>Profile</name>
    </types>
    <version>66.0</version>
</Package>
```

## Related Topics

- Metadata Types (atlas.en-us.api_meta.meta/api_meta/meta_types_list.htm)
- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Sample package.xml Manifest
          Files (atlas.en-us.api_meta.meta/api_meta/manifest_samples.htm)
- Deleting Components from an Organization (atlas.en-us.api_meta.meta/api_meta/meta_deploy_deleting_files.htm)
