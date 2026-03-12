---
title: "Deploying and Retrieving Metadata with the Zip File"
domain: metadata-api
topic: deploying-and-retrieving-metadata-with-the-zip-file
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:36.227Z
estimatedTokens: 1794
keywords: [Deploying, Retrieving, Metadata, Zip, File, deploy, retrieve, calls, project, manifest, package.xml, XML, components, organized, folders]
---

# Deploying and Retrieving Metadata with the Zip File

> The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the
            .zip file is a project manifest (package.xml) that lists what to
            retrieve or deploy, and one or more XML components that are organized into folders.

# Deploying and Retrieving Metadata with the Zip File

The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

A component is an instance of a metadata type. For example, CustomObject is a metadata type for custom objects, and the MyCustomObject\_\_c component is an instance of a custom object.

The files that are retrieved or deployed in a .zip file might be unpackaged components that reside in your org (such as standard objects) or packaged components that reside within named packages.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

You can deploy or retrieve up to 10,000 files at once. The maximum size of the deployed or retrieved .zip file is 39 MB. If the files are uncompressed in an unzipped folder, the size limit is 600 MB or 629,145,600 bytes. The size limit in bytes is calculated as 600 x 1024 x 1024.

Managed packages use different limits: First-generation managed packages that have passed AppExchange Security Review can contain up to 35,000 files. Second-generation managed packages can contain up to 10,000 files.

-   Metadata API base-64 encodes components after they’re compressed. The resulting .zip file can't exceed 50 MB, which is the limit for SOAP messages. Base-64 encoding increases the size of the payload, so your compressed payload can't exceed approximately 39 MB before encoding.
-   You can perform a retrieve() call for a big object only if its index is defined. If a big object is created in Setup and doesn’t yet have an index defined, you can’t retrieve it.
-   Limits can change without notice.

Every .zip file contains a project manifest, a file that’s named package.xml, and a set of directories that contain the components. The manifest file defines the components that you're trying to retrieve or deploy in the .zip file. The manifest also defines the API version that's used for the deployment or retrieval.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

You can edit the project manifest, but be careful if you modify the list of components it contains. When you deploy or retrieve components, Metadata API references the components listed in the manifest, not the directories in the .zip file.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Note: If you’re retrieving any components that have dependencies by using the rootTypesWithDependencies parameter in the RetrieveRequest object, the dependent metadata components are added to the returned .zip file and package.xml file in the same directory as the root type that’s being retrieved. This directory has a JSON file for each component with dependencies in the format ComponentName.roottype.dependencies-meta.json.

The following is a sample package.xml file. You can retrieve an individual component for a metadata type by specifying its fullName field value in a members element. You can also retrieve all components of a metadata type by using <members\>\*</members\>.

```

```

The following elements can be defined in package.xml.

-   <fullName\> contains the name of the server-side package. If no <fullName\> exists, the package.xml defines a client-side unpackaged package.
-   <types\> contains the name of the metadata type (for example, CustomObject) and the named members (for example, myCustomObject\_\_c) to be retrieved or deployed. You can add multiple <types\> elements in a manifest file.
-   <members\> contains the fullName of the component, for example MyCustomObject\_\_c. The [listMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_listmetadata.htm "This call retrieves property information about metadata components in your organization. Data is returned for the components that match the criteria specified in the queries parameter. The queries array can contain up to three ListMetadataQuery queries for each call. This call supports every metadata type: both top-level, such as CustomObject and ApexClass, and child types, such as CustomField and RecordType.") call is useful for determining the fullName for components of a particular metadata type if you want to retrieve an individual component. For many metadata types, you can replace the value in members with the wildcard character \* (asterisk) instead of listing each member separately. See the reference topic for a specific type to determine whether that type supports wildcards.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

    #### Note

    You specify Security in the <members\> element and Settings in the name element when retrieving the SecuritySettings component type.

-   <name\> contains the metadata type, for example CustomObject or Profile. There is one name defined for each metadata type in the directory. Any metadata type that extends [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") is a valid value. The name that’s entered must match a metadata type that’s defined in the Metadata API WSDL. See [Metadata Types](atlas.en-us.api_meta.meta/api_meta/meta_types_list.htm "Metadata API enables you to access some entities and feature settings that you can customize in the user interface.") for a list.
-   <version\> is the API version number that’s used when the .zip file is deployed or retrieved. Currently the valid value is 66.0.

For more sample package.xml manifest files that show you how to work with different subsets of metadata, see [Sample package.xml Manifest Files](atlas.en-us.api_meta.meta/api_meta/manifest_samples.htm "This section includes sample package.xml manifest files that show you how to work with different subsets of metadata. A manifest file can include multiple <types> elements so you could combine the individual samples into one package.xml manifest file if you want to work with all the metadata in one batch.").

To delete components, see [Deleting Components from an Organization](atlas.en-us.api_meta.meta/api_meta/meta_deploy_deleting_files.htm "To delete components, perform a deployment with the deploy() call by using a destructive changes manifest file that lists the components to remove from your organization. You can perform a deployment that only deletes components, or a deployment that deletes and adds components. In API version 33.0 and later, you can specify components to delete before and after other components are added or updated. In earlier API versions, if deletions and additions are specified for the same deployment, the deploy() call performs the deletions first.").

#### See Also

-   [Metadata Types](atlas.en-us.api_meta.meta/api_meta/meta_types_list.htm "Metadata API enables you to access some entities and feature settings that you can customize in the user interface.")

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

- listMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_listmetadata.htm)
- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Metadata Types (atlas.en-us.api_meta.meta/api_meta/meta_types_list.htm)
- Sample package.xml Manifest
            Files (atlas.en-us.api_meta.meta/api_meta/manifest_samples.htm)
- Deleting Components from an
                Organization (atlas.en-us.api_meta.meta/api_meta/meta_deploy_deleting_files.htm)
