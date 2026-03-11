---
title: "LightningComponentBundle"
domain: metadata-api
topic: lightningcomponentbundle
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:53.309Z
keywords: [LightningComponentBundle, Important, Special, Access, Rules, Fields, Capabilities, LwcResources, LwcResource, Targets, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest, File]
---

# LightningComponentBundle

# LightningComponentBundle

Represents a Lightning web component bundle. A bundle contains Lightning web component resources.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Special Access Rules

LightningComponentBundle components can be created only in orgs with defined namespaces.

As of Summer ’20 and later, only your Salesforce org's internal users can access this type.

For more information on packaging a Lightning web component bundle, see the [Second-Generation Managed Packaging Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_packageable_components.htm#mdc_lightning_component).

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| ai (Beta) | base64Binary | An internal AI description of the Lightning web component. This description is supported only in orgs that have Setup with Agentforce (Beta) enabled. This description enables Agentforce to analyze the component for inclusion in agent-generated Lightning pages. For more information, see Configure a Component for Use in Setup with Agentforce (Beta).<ai>     <description>AI component description Example: The component enables users to add and style text content for dashboards, supporting features such as hyperlinks, bullet points, and text alignment. Ideal for adding formatted text sections such as instructions</description>     <property name="prop1" aiDescription="AI description for prop1"/>     <property name="prop2" aiDescription="AI description for prop2"/> </ai>Available in API version 66.0 and later. |
| apiVersion | double | A double value that binds the component to a Salesforce API version. |
| capabilities | Capabilities[] | A list of capabilities. A capability is something that a component can do, as opposed to a target, which defines where you can use a component. Available in API version 48.0 and later. |
| description | string | A user-facing description of the Lightning web component. This description appears in list views, like the list of Lightning Components in Setup, and as a tooltip in the builders like Lightning App Builder and Experience Builder. |
| isExplicitImport | boolean | Indicates whether imports between files are done explicitly by the developer (true) or implicitly by the framework (false). |
| isExposed | boolean | If true, the component is available to other namespaces. If true and a targets value is also provided, the component is available to Salesforce builders such as Lightning App Builder and Experience Builder. If false, the component isn't available to builders and other namespaces. |
| lwcResources | LwcResources[] | A list of resources inside a bundle. |
| masterLabel | string | The component title that appears in the list view. |
| targetConfigs | base64Binary | Configurations for each target. Each target is a Lightning page type. For example, this configuration allows a Lightning web component to be used on a Contact record page in Lightning App Builder.<targetConfigs>     <targetConfig targets="lightning__RecordPage">         <objects>             <object>Contact</object>         </objects>     </targetConfig> </targetConfigs> |
| targets | Targets[] | A list of targets where the Lightning web component can be used, such as in Lightning App Builder or Experience Builder sites. |

## Capabilities

Represents a list of capabilities. A capability is something that a component can do, as opposed to a target, which defines where you can use a component. Available in API version 48.0 and later. For more information, see [XML Configuration File Elements](https://developer.salesforce.com/docs/platform/lwc/guide/reference-configuration-tags.html).

| Field | Field Type | Description |
| --- | --- | --- |
| capability | string | Specifies something that a component can do. Valid values are:lightningCommunity__RelaxedCSPlightning__dynamicComponentlightning__ServerRenderablelightning__ServerRenderableWithHydrationlightning__ServiceCloudVoiceToolkitApi |

## LwcResources

Represents a list of resources inside a LightningComponentBundle.

| Field | Field Type | Description |
| --- | --- | --- |
| lwcResource | LwcResource | A resource inside a LightningComponentBundle. |

## LwcResource

Represents a resource inside a LightningComponentBundle.

| Field | Field Type | Description |
| --- | --- | --- |
| filePath | string | Required. The file path of a resource. |
| source | base64Binary | Required. The content of a resource. |

## Targets

Represents a list of supported containers for a Lightning web component. For more information, see [XML Configuration File Elements](https://developer.salesforce.com/docs/platform/lwc/guide/reference-configuration-tags.html).

| Field | Field Type | Description |
| --- | --- | --- |
| target | string | Specifies the type of Lightning page the component can be added to in the builders, such as in Lightning App Builder, Experience Builder, Flow Builder, or Document Builder.For valid values, see XML Configuration File Elements: target. |

## Declarative Metadata Sample Definition

This package.xml file retrieves all the LightningComponentBundle components in an org.

```

```

In the retrieved zip file, each Lightning web component is nested under an lwc folder.

This example shows the directory structure in the zip file of one component with a name of hello.

```

```

Here are the contents of the files in the hello directory.

Content of hello.html:

```

```

Content of hello.js:

```

```

Content of hello.js-meta.xml.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").