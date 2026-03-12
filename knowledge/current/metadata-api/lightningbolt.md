---
title: "LightningBolt"
domain: metadata-api
topic: lightningbolt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:40.317Z
estimatedTokens: 1056
keywords: [LightningBolt, definition, Lightning, Bolt, Solution, include, custom, apps, flow, categories, Experience, Builder, templates, extends, Metadata]
---

# LightningBolt

> Represents the definition of a Lightning Bolt Solution, which
    can include custom apps, flow categories, and Experience Builder templates. This type extends
    the Metadata metadata type and inherits its fullName field.

# LightningBolt

Represents the definition of a Lightning Bolt Solution, which can include custom apps, flow categories, and Experience Builder templates. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

LightningBolt components have the suffix .lightningBolt and are stored in the lightningBolts folder.

## Version

LightningBolt components are available in API version 43.0 and later.

## Special Access Rules

To add Experience Builder templates to a Lightning Bolt Solution, enable digital experiences in your org.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| category | LightningBoltCategory (enumeration of type string) | Required. The primary industry that the Lightning Bolt Solution is aimed at. Valid values are:CommunicationsEducationFinancialServicesGeneralBusinessGovernmentHealthcareLifeSciencesHighTechManufacturingMediaNonprofitsProfessionalServicesRealEstateRetailTravelTransportationHospitality |
| lightningBoltFeatures | LightningBoltFeatures[] | The list of feature descriptions of this Lightning Bolt Solution. |
| lightningBoltImages | LightningBoltImages[] | The list of images of this Lightning Bolt Solution. |
| lightningBoltItems | LightningBoltItems[] | The list of items (custom apps, flow categories, and Experience Builder templates) that comprise this Lightning Bolt Solution. |
| masterLabel | string | Required. The label of the Lightning Bolt Solution, which appears on the solution detail page. |
| publisher | string | Required. The name of the partner org associated with this Lightning Bolt Solution. |
| summary | string | Required. The summary description of the Lightning Bolt Solution. |

## LightningBoltFeatures

Represents the list of feature descriptions of a Lightning Bolt Solution.

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | A description of the feature of the Lightning Bolt Solution. |
| order | int | Required. An integer specifying the position of this feature relative to others in the list. 1 is the first position, and 4 is the max position. |
| title | string | Required. The title of the feature, which appears on the solution detail page. |

## LightningBoltImages

Represents the list of images of a Lightning Bolt Solution.

| Field Name | Field Type | Description |
| --- | --- | --- |
| image | string | Required. The developer name of the ContentAsset type, which is used as a preview image for this Lightning Bolt Solution. |
| order | int | Required. An integer specifying the position of this image relative to others in the list. 1 is the first position, and 3 is the max position. |

## LightningBoltItems

Represents the list of items (custom apps, flow categories, and Experience Builder templates) that comprise a Lightning Bolt Solution.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Required. The name of the item, which appears on the solution detail page. |
| type | string | Required. The type of the item included in the Lightning Bolt Solution. Valid values are:CommunityTemplateDefinitionCustomApplicationFlowCategory |

## Declarative Metadata Sample Definition

The following is an example of a LightningBolt component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<LightningBolt xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <category>Sales</category>
    <lightningBoltFeatures>
        <description>bb</description>
        <order>1</order>
        <title>aa</title>
    </lightningBoltFeatures>
    <lightningBoltImages>
        <image>prm1</image>
        <order>1</order>
    </lightningBoltImages>
    <lightningBoltItems>
        <name>PolaConsole</name>
        <type>CustomApplication</type>
    </lightningBoltItems>
    <lightningBoltItems>
        <name>Banking_Service_Console</name>
        <type>CustomApplication</type>
    </lightningBoltItems>
    <lightningBoltItems>
        <name>Banking_Service_Portal</name>
        <type>CommunityTemplateDefinition</type>
    </lightningBoltItems>
    <lightningBoltItems>
        <name>Banking_Sales_Portal</name>
        <type>CommunityTemplateDefinition</type>
    </lightningBoltItems>
    <lightningBoltItems>
        <name>myorgdev__updatebenefits</name>
        <type>FlowCategory</type>
    </lightningBoltItems>
    <masterLabel>BoltTe</masterLabel>
    <publisher>aaaa</publisher>
    <summary>This is a summary.</summary>

</LightningBolt>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>BoltTe</members>
        <name>LightningBolt</name>
    </types>
    <version>43.0</version>
</Package>
```

## Related Topics

- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- ContentAsset (atlas.en-us.api_meta.meta/api_meta/meta_contentasset.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
