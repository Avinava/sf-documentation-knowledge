---
title: "Deleting Components from an Organization"
domain: metadata-api
topic: deleting-components-from-an-organization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.409Z
estimatedTokens: 1124
keywords: [Deleting, Components, Organization, perform, deployment, deploy, call, destructive, changes, manifest, file, remove, deletes, adds, API]
---

# Deleting Components from an Organization

> To delete components, perform a deployment with the deploy() call by using a destructive changes manifest file that lists the
        components to remove from your organization. You can perform a deployment that only deletes
        components, or a deployment that deletes and adds components. In API version 33.0 and later,
        you can specify components to delete before and after other components are added or updated.
        In earlier API versions, if deletions and additions are specified for the same deployment,
        the deploy() call performs the deletions
        first.

# Deleting Components from an Organization

To delete components, perform a deployment with the deploy() call by using a destructive changes manifest file that lists the components to remove from your organization. You can perform a deployment that only deletes components, or a deployment that deletes and adds components. In API version 33.0 and later, you can specify components to delete before and after other components are added or updated. In earlier API versions, if deletions and additions are specified for the same deployment, the deploy() call performs the deletions first.

## Deleting Components in a Deployment

To delete components, use the same procedure as with deploying components, but also include a delete manifest file that’s named destructiveChanges.xml and list the components to delete in this manifest. The format of this manifest is the same as package.xml except that wildcards aren’t supported.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

You can’t use destructiveChanges.xml to delete items that are associated with an active Lightning page, such as a custom object, a component on the page, or the page itself. First, you must remove the page's action override by deactivating it in the Lightning App Builder.

The following sample destructiveChanges.xml file names a single custom object to be deleted:

```

```

To deploy the destructive changes, you must also have a package.xml file that lists no components to deploy, includes the API version, and is in the same directory as destructiveChanges.xml:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

-   To bypass the Recycle Bin, set the [purgeOnDelete](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm#option_purgeOnDelete_desc) option to true.
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

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The API version that the deployment uses is the API version that’s specified in package.xml.

-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm "checkDeployStatus()")

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

## Related Topics

- purgeOnDelete (atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)
- Next → (atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm)
