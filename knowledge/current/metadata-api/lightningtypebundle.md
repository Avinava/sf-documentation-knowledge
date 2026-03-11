---
title: "LightningTypeBundle"
domain: metadata-api
topic: lightningtypebundle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.340Z
keywords: [LightningTypeBundle, Important, Parent, Type, File, Structure, Directory, Location, Version, Fields, LightningTypeBundleResource, Declarative, Metadata, Sample, Definition, Note, Wildcard, Support, Manifest, See]
---

# LightningTypeBundle

# LightningTypeBundle

Represents a custom Lightning type. Use this type to override the default user interface to create a customized appearance based on your business requirements. Deploy this bundle to your organization to implement the overrides.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Structure and Directory Location

LightningTypeBundle components are stored in the lightningTypes folder.

Here’s an example of the LightningTypeBundle structure.

```

```

The bundle includes these resources.

-   The lightningTypes folder (1) contains a folder for each created custom Lightning type in the format {typeName} (2).
-   Each custom lightning type folder contains a schema.json file (3) that defines the JSON schema that drives the custom Lightning type validation.
-   Optional channel-specific folders (4). To override the default UI for a specific Salesforce application, the bundle contains a folder named after that channel. The supported channel folders are:
    
    -   lightningDesktopGenAi (Agentforce Employee agent in Lightning Experience)
    -   enhancedWebChat (Agentforce Service agent via Enhanced Chat v2)
    -   experienceBuilder (Experience Builder)
    
    Inside the {channelName} folder, you can configure:
    
    -   The editor.json file (5) containing custom user interface and editor information
    -   The renderer.json file (6) containing custom user interface and renderer information
        
        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)
        
        #### Note
        
        This file isn’t supported in experienceBuilder.
        

## Version

LightningTypeBundle components are available in API version 64.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionDescribes the lightning type. |
| masterLabel | Field TypestringDescriptionRequired. Represents the name of a LightningTypeBundle which is defined when the LightningTypeBundle is created. |
| resources | Field TypeLightningTypeBundleResource[]DescriptionThe list of resource files in the lightningTypes folder. |

## LightningTypeBundleResource

Represents a resource inside a LightningTypeBundle.

| Field Name | Description |
| --- | --- |
| fileName | Field TypestringDescriptionRequired. Name of the resource file. |
| filePath | Field TypestringDescriptionRequired. Path of the resource file. |
| source | Field Typebase64BinaryDescriptionRequired. The JSON content of the resource. |

## Declarative Metadata Sample Definition

This package.xml file retrieves all the LightningTypeBundle components in an org.

```

```

In the retrieved .zip file, each custom Lightning type is nested under a lightningTypes folder.

This example shows the directory structure in the .zip file of a custom Lightning type named flightResponse:

```

```

In this example, the custom Lightning type flightResponse is a complex type that references an Apex class named Flight.

```

```

Here are the contents of the files in the flightResponse directory. This sample code shows the contents of the schema.json file.

```

```

The lightningDesktopGenAi folder (optional) includes a renderer.json file that overrides the default UI of the custom Lightning type flightResponse when you use the Flight Apex class as an output parameter for an agent action.

Contents of the renderer.json file.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

flightDetails is a custom LWC component referenced in renderer.json file.

This example shows the directory structure in the .zip file of a custom Lightning type named flightFilter:

```

```

In this example, the custom Lightning type flightFilter is a complex type that references an Apex class named FlightRequestFilter.

```

```

Here are the contents of the files in the flightFilter directory. This sample code shows the contents of the schema.json file.

```

```

The lightningDesktopGenAi folder (optional) includes an editor.json file that overrides the default UI of the custom Lightning type flightFilter when you use the Flight Apex class as an input parameter for an agent action.

Contents of the editor.json file.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

flightFilter is a custom LWC component referenced in editor.json file.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [Lightning Types Developer Guide](https://developer.salesforce.com/docs/platform/lightning-types/guide/lightning-types.html "Lightning Types Developer Guide - html (New Window)")
    
-   [Custom Lightning Type Examples](https://developer.salesforce.com/docs/einstein/genai/guide/lightning-types-examples.html "Custom Lightning Type Examples - html (New Window)")