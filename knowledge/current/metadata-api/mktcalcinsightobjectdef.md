---
title: "MktCalcInsightObjectDef"
domain: metadata-api
topic: mktcalcinsightobjectdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.564Z
keywords: [MktCalcInsightObjectDef, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# MktCalcInsightObjectDef

# MktCalcInsightObjectDef

Represents Calculated Insight definition such as expression.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

MktCalcInsightObjectDef components have the suffix mktCalcInsightObjectDef and are stored in the mktCalcInsightObjectDefs folder.

## Version

MktCalcInsightObjectDef components are available in API version 52.0 and later.

## Special Access Rules

You need the Salesforce CustomizeApplication permission to access this object.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| builderExpression | string | Reserved for internal use. |
| creationType | CalculatedInsightCreationType(enumeration of type string) | Required. Describes whether this Calculated Insight Object Definition was added was added by the customer. Valid values include: Custom. |
| description | string | The description for this Calculated Insight Object Definition. |
| expression | string | Required when the Calculated Insight Object Definition is for internal insight type. This is the SQL query to generate the calculated insight. |
| masterLabel | string | Required. App name for this Calculated Insight Object Definition. |
| system | string | Required. Indicates how this calculated insight object definition was added, by the customer or by the system. Valid values are:CustomSystem (API version 61.0 and later) |

## Declarative Metadata Sample Definition

The following is an example of a MktCalcInsightObjectDef component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").