---
title: "Deleting Files from an Organization"
domain: daas
topic: deleting-files-from-an-organization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.025Z
estimatedTokens: 1121
keywords: [Deleting, Files, Organization, Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions, isn’t]
---

# Deleting Files from an Organization

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Deleting Files from an Organization

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

The package.xml file is a project manifest that lists all the components to retrieve or deploy. Although you can use package.xml to add components, it’s not sufficient to delete them. To delete files, create a delete manifest that’s called destructiveChanges.xml. The format of the delete manifest is the same as package.xml, except that wildcards aren’t supported.

## Deleting Components in a Deployment

To delete components, use the same procedure as with deploying components, but also include a delete manifest file that’s named destructiveChanges.xml and list the components to delete in this manifest. The format of this manifest is the same as package.xml except that wildcards aren’t supported.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

You can’t use destructiveChanges.xml to delete items that are associated with an active Lightning page, such as a custom object, a component on the page, or the page itself. First, you must remove the page's action override by deactivating it in the Lightning App Builder.

The following sample destructiveChanges.xml file names a single custom object to be deleted:

```

```

To deploy the destructive changes, you must also have a package.xml file that lists no components to deploy, includes the API version, and is in the same directory as destructiveChanges.xml:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

-   To bypass the Recycle Bin, set the purgeOnDelete option to true.
-   When you delete a roll-up summary field using Metadata API, the field isn't saved in the Recycle Bin. The field is purged even if you don’t set the purgeOnDelete deployment option to true.
-   If you try to delete some components that don’t exist in the organization, the rest of the deletions are still attempted.

## Adding and Deleting Components in a Single Deployment

You can perform a deployment that specifies components to delete in destructiveChanges.xml and components to add or update in package.xml. The process is the same as with performing a delete-only deployment except that package.xml contains the components to add or update.

By default, deletions are processed before component additions. In API version 33.0 and later, you can specify components to be deleted before and after component additions. The process is the same as with performing a delete-only deployment except that the name of the deletion manifest file is different.

-   To delete components *before* adding or updating other components, create a manifest file that’s named destructiveChangesPre.xml and include the components to delete.
-   To delete components *after* adding or updating other components, create a manifest file that’s named destructiveChangesPost.xml and include the components to delete.

The ability to specify when deletions are processed is useful when you’re deleting components with dependencies. For example, if a custom object is referenced in an Apex class, you can’t delete it unless you modify the Apex class first to remove the dependency on the custom object. In this example, you can perform a single deployment that updates the Apex class to clear the dependency and then deletes the custom object by using destructiveChangesPost.xml. The following are samples of the package.xml and destructiveChangesPost.xml manifests that would be used in this example.

Sample package.xml, which specifies the class to update:

```

```

Sample destructiveChangesPost.xml, which specifies the custom object to delete after the class update:

```

```

Post destructive changes are processed before running any tests.

When deleting Apex classes or triggers, Salesforce recommends that as part of the deployment, you run all local tests from the namespace in order to detect any remaining references to the deleted class or trigger.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The API version that the deployment uses is the API version that’s specified in package.xml.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>MyCustomObject__c</members>
        <name>CustomObject</name>
    </types>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <version>66.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>SampleClass</members>
        <name>ApexClass</name>
    </types>
    <version>66.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>MyCustomObject__c</members>
        <name>CustomObject</name>
    </types>
</Package>
```
