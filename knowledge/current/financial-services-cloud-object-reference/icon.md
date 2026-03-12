---
title: "Icon"
domain: financial-services-cloud-object-reference
topic: icon
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.936Z
estimatedTokens: 322
keywords: [Icon, mapping, custom, icons, objects.This, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, Special]
---

# Icon

> Represents the mapping of custom icons to objects.This type extends the Metadata metadata type and inherits its
                        fullName field.

# Icon

Represents the mapping of custom icons to objects.This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

Icon components have the suffix .icon and are stored in the icons folder.

## Version

Icon components are available in API version 49.0 and later.

## Special Access Rules

To use this metadata type, your Salesforce org must have the Health Cloud or Financial Services Cloud license.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| image | string | Required. The image file that is mapped to the object.Use the ContentAsset metadata type to hold the icon image referenced in the image field. |
| key | string | Required. A field value in the object. For example, with the PersonLifeEventobject, possible values for key can be birthday, marriage, childbirth, and so on. |
| usageType | IconUsageType (enumeration of type string) | Required. The object that is mapped to the image. Valid values are:PersonLifeEventInsurancePolicyBusinessMilestoneAssetMilestoneFinancialAccountMilestone |

## Declarative Metadata Sample Definition

The following is an example of an Icon component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Icon xmlns="http://soap.sforce.com/2006/04/metadata">
    <usageType>PersonLifeEvent</usageType>
    <key>Birth</key>
    <image>image</image>
</Icon>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>icons</members>
        <name>Icon</name>
    </types>
    <version>49.0</version>
</Package>
```
