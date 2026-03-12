---
title: "AuraDefinitionBundle"
domain: metadata-api
topic: auradefinitionbundle
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:36.900Z
estimatedTokens: 1111
keywords: [AuraDefinitionBundle, Aura, definition, bundle, component, resources, JavaScript, controller, application, event, tokens, collection, File, Suffix, Directory]
---

# AuraDefinitionBundle

> Represents an Aura definition bundle. A bundle contains an Aura
      definition, such as an Aura component, and its related resources, such as a JavaScript
      controller. The definition can be a component, application, event, interface, or a tokens
      collection.

# AuraDefinitionBundle

Represents an Aura definition bundle. A bundle contains an Aura definition, such as an Aura component, and its related resources, such as a JavaScript controller. The definition can be a component, application, event, interface, or a tokens collection.

## File Suffix and Directory Location

An AuraDefinitionBundle component is a folder that contains definition files. Unlike most other metadata components, an AuraDefinitionBundle component isn’t a single file, it’s a collection of files. Each file represents a resource in a bundle, such as markup, applications, code files (including controllers and helpers), events, documentation, and interfaces. For example, this directory structure shows the hierarchy of the folders and files for two bundles: bundle1 and bundle2.

```

```

Aura definition bundles must be under a top-level folder named aura. Each bundle must have its own subfolder under the aura folder. The name of each definition file must start with the bundle name.

A bundle doesn’t have a suffix. Definition files can have one of these suffixes:

| Suffix | Component Type |
| --- | --- |
| .app | Application |
| .cmp | Component |
| .design | Design |
| .evt | Event |
| .intf | Interface |
| .js | Controller, Helper, or Renderer |
| .svg | SVG image |
| .css | Style |
| .auradoc | Documentation |
| .tokens | Tokens collection |

Each bundle can have only one file each with a suffix of .app, .cmp, .design, .evt, .intf, or .tokens.

## Version

AuraDefinitionBundle components are available in API version 32.0 and later.

Design and SVG components are available in API version 33.0 and later.

In API version 45.0 and later, there are two types of Lightning component: Aura components and Lightning web components. This metadata type describes an Aura component.

## Special Access Rules

Definitions can be created only in organizations with defined namespaces.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| apiVersion | double | The API version for this definition bundle. When you create an Aura bundle, you can specify the API version to save it with. Available in API version 35.0 and later. |
| auraDefinitions | AuraDefinitions | Reserved for internal use. |
| controllerContent | base64Binary | The content of a JavaScript client-side controller. |
| description | string | The specification of the Aura bundle. Available in API version 35.0 and later. |
| designContent | base64Binary | The content of a design definition. Only valid inside a component bundle. |
| documentationContent | base64Binary | The content of a documentation definition. |
| helperContent | base64Binary | The content of a JavaScript helper. |
| markup | base64Binary | The content of the markup for a definition. |
| modelContent | base64Binary | Deprecated. Do not use. |
| packageVersions | PackageVersion[] | The list of installed managed package versions that this Aura definition bundle references. Available in API version 35.0 and later. |
| rendererContent | base64Binary | The content of a JavaScript client-side renderer. |
| styleContent | base64Binary | The CSS for the definition. |
| SVGContent | base64Binary | The SVG image for the definition. |
| testsuiteContent | base64Binary | Reserved for internal use. |
| type | AuraBundleType (enumeration of type string) | The definition type. Valid values are:ApplicationComponentEventInterfaceTokens |

## Declarative Metadata Sample Definition

This example shows the directory structure of an AuraDefinitionBundle component.

```

```

The following samples show the contents of the metadata definition files that correspond to the sample aura directory.

Content of sampleCmp.cmp:

```

```

Content of sampleCmpController.js:

```

```

This package.xml references the definitions of all Lightning components that are present in the sampleCmp bundle.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
aura
    bundle1
        bundle1.cmp
        bundle1Controller.js
    bundle2
        bundle2.app
        bundle2Controller.js
        bundle2.auradoc
```

```
aura
    sampleCmp
        sampleCmp.cmp
        sampleCmpController.js
```

```
<aura:component>
    <aura:attribute name="val1" type="String" default="Value"/>
    <aura:attribute name="val2" type="String" />
    <aura:handler name="init" value="{!this}" action="{!c.myAction}"/>
        <ui:outputText value='Hello world!'/>
        <ui:outputText value='{!v.val1}'/>
        <ui:outputText value='{!v.val2}'/>
</aura:component>
```

```
({  
  myAction : function(component) {
    component.set('v.val1','Value1');
    component.set('v.val2','Value2');
  }
})
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>sampleCmp</members>
        <name>AuraDefinitionBundle</name>
    </types>
    <version>66.0</version>
</Package>
```

## Related Topics

- PackageVersion (atlas.en-us.api_meta.meta/api_meta/meta_classes.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
