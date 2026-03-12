---
title: "Constructing a Project Manifest"
domain: daas
topic: constructing-a-project-manifest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.030Z
estimatedTokens: 658
keywords: [Constructing, Project, Manifest, Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions, isn’t]
---

# Constructing a Project Manifest

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Constructing a Project Manifest

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

The package.xml file is a project manifest that lists all the components you want to retrieve or deploy in a single request. You can retrieve or deploy only a single package at a time.

The following elements may be defined in package.xml:

| Name | Description |
| --- | --- |
| <fullName> | The name of the server-side package to deploy into. If the <fullName> field is omitted, components will not be assigned to a package when deployed, and will be in the unpackaged package. This field is not used for retrieve. |
| <types> | This element contains one or more <members> tags and one <name> tag, and is used to list the metadata components of a certain type to retrieve or deploy. |
| <members> | The full name of a component. There is one <members> element defined for each component in the directory. You can replace the value in this member with the wildcard character * (asterisk) instead of listing each member separately. This is a child element of <types>. |
| <name> | Contains the type of the component, for example CustomObject or Profile. There is one name defined for each component type in the directory. This is a child element of <types>. |
| <version> | The Metadata API version number of the files being retrieved or deployed. When deploying, all the files must conform to the same version of the Metadata API. |

**Component Types**

For a complete list of the component types that can be defined by the <name\> element in package.xml, see [Metadata Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_types_list.htm) in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/).

## Specifying Standard Objects

To retrieve standard objects and/or custom fields on standard objects, you must name the component in package.xml. The following package.xml file will retrieve a single field EngineeringReqNumber\_\_c, on the Case object, as well as the entire Account object.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

Custom objects and standard objects should be specified in the same <types\> section, the one containing <name\>CustomObject</name\>.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Case.EngineeringReqNumber__c</members>
        <name>CustomField</name>
    </types>
    <types>
        <members>Account</members>
        <name>CustomObject</name>
    </types>
    <version>66.0</version>
</Package>
```
