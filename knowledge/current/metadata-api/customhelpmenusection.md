---
title: "CustomHelpMenuSection"
domain: metadata-api
topic: customhelpmenusection
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:37.959Z
estimatedTokens: 500
keywords: [CustomHelpMenuSection, Lightning, Experience, help, menu, admin, added, display, custom, org-specific, resources, org, extends, Metadata, inherits]
---

# CustomHelpMenuSection

> Represents the section of the Lightning Experience
      help menu that the admin added to display custom, org-specific help resources for the org. The
      custom section contains help resources added by the admin.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

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

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomHelpMenuSection xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>MyOrgCustomHelp</masterLabel>
    <customHelpMenuItems>
        <linkUrl>https://www.yourcompanyhelp.com/gettingstarted</linkUrl>
        <masterLabel>Getting Started</masterLabel>
        <sortOrder>1</sortOrder>
    </customHelpMenuItems>
    <customHelpMenuItems>
        <linkUrl>https://www.yourcompanyhelp.com/features</linkUrl>
        <masterLabel>Feature to Start Using Right Away</masterLabel>
        <sortOrder>2</sortOrder>
    </customHelpMenuItems>
    <customHelpMenuItems>
        <linkUrl>https://www.yourcompanyhelp.com/salestips</linkUrl>
        <masterLabel>Tips for Sales Team Members</masterLabel>
        <sortOrder>3</sortOrder>
    </customHelpMenuItems>
</CustomHelpMenuSection>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>MyOrgCustomHelp</members>
        <name>CustomHelpMenuSection</name>
    </types>
    <version>45.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
