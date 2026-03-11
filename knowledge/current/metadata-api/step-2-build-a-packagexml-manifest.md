---
title: "Step 2: Build a Package.xml Manifest"
domain: metadata-api
topic: step-2-build-a-packagexml-manifest
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:54.197Z
keywords: [Step, Build, Package.xml, Manifest, Structure, Retrieve, Custom, Objects, See]
---

# Step 2: Build a Package.xml Manifest

# Step 2: Build a Package.xml Manifest

The package.xml manifest file lists the components to retrieve from your org.

## Package.xml Manifest Structure

The package.xml manifest uses Extensible Markup Language (XML) to identify and migrate metadata components. The basic framework of the package.xml manifest is built with <types> elements. A <types> element specifies which metadata type you want to work with. You can add multiple <types> to a package.xml file.

Inside the <types> element is the <name> element and the <members> element. The <members> element selects for individual components of a specific type, and the <name> element selects for metadata component types. To work with a specific component, input the fullName of the component in the <members> element.

For example, to retrieve Account components, add Account in the <members> element and CustomObject in the <name> element in your package.xml. When you issue a retrieve call, you retrieve only the Account component from your org.

```

```

## Retrieve Custom Objects

To retrieve all components of a metadata type, you don’t specify the fullName of a component. Instead, use the wildcard character \* (asterisk) in the <members> tag. Some components, such as standard objects, don’t support \* (asterisk) as a specifier.

To retrieve all custom objects from your org:

1.  (Optional) If you do not have a project folder, use Salesforce CLI to create a new directory that organizes your project. Run this command with your specified project name:
    
    sf project generate --name YourProjectName
    
2.  Create a file called package.xml in your project.
3.  In your text editor, open the file and paste in this script:

```

```

Now you have a package.xml file that we can use to retrieve all custom objects. When you develop more on your own, you can retrieve more components from your org with multiple <types> elements.

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_quickstart_retrieve_add_components.htm "Step 1: (Optional) Add Metadata Components to an Org Using the UI")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_quickstart_retrieve_use_retrieve.htm "Step 3: Retrieve Components with Metadata API")

#### See Also

-   [Sample package.xml Manifest Files](atlas.en-us.api_meta.meta/api_meta/manifest_samples.htm "This section includes sample package.xml manifest files that show you how to work with different subsets of metadata. A manifest file can include multiple <types> elements so you could combine the individual samples into one package.xml manifest file if you want to work with all the metadata in one batch.")
    
-   [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.")