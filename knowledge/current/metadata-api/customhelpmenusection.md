---
title: "CustomHelpMenuSection"
domain: metadata-api
topic: customhelpmenusection
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:51.517Z
keywords: [CustomHelpMenuSection, Important, File, Suffix, Directory, Location, Version, Fields, CustomHelpMenuItems, Declarative, Metadata, Sample, Definition]
---

# CustomHelpMenuSection

# CustomHelpMenuSection

Represents the section of the Lightning Experience help menu that the admin added to display custom, org-specific help resources for the org. The custom section contains help resources added by the admin. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

CustomHelpMenuSection components have the suffix .customHelpMenuSection and are stored in the customHelpMenuSections folder.

## Version

CustomHelpMenuSection components are available in API version 45.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| customHelpMenuItems | CustomHelpMenuItems[] | Items included in the custom section. Specify up to 15 items. |
| masterLabel | string | Required. Name of the custom section. Only one custom section can be added to the Lightning Experience help menu. Specify up to 80 characters. |

## CustomHelpMenuItems

Items included in the custom section. Specify up to 15 items.

| Field Name | Field Type | Description |
| --- | --- | --- |
| linkURL | string | Required. The URL for the resource. |
| masterLabel | string | Required. The name of the resource. Specify up to 100 characters. |
| sortOrder | int | Required. The order of the item within the custom section. Valid values are 1 through 15. |

## Declarative Metadata Sample Definition

The following is an example of a CustomHelpMenuSection component.

```

```

The following is an example package.xml that references the previous definition.

```

```