---
title: "CustomBrand"
domain: object-reference
topic: custombrand
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.656Z
estimatedTokens: 582
keywords: [CustomBrand, custom, branding, color, scheme, API, version, 28.0, later, Calls, Special, Access, Rules, Usage]
---

# CustomBrand

> Represents a custom branding and color scheme.
    This object is available in API version 28.0 and
    later.

# CustomBrand

Represents a custom branding and color scheme. This object is available in API version 28.0 and later.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

This object is available only when your org has digital experiences enabled.

## Fields

| Field Name | Details |
| --- | --- |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the parent entity that this branding applies to. The parent entity can be an Experience Cloud site, organization, topic, or reputation level.The branding applies to the entity that the ParentId references. For example, if the ParentId references a network ID, the branding applies to that Experience Cloud site only, and if the ParentId references an organization ID, the branding applies to the organization that it is accessed through, and so on. Label is Branded Entity ID. |

## Usage

Use this object along with [CustomBrandAsset](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custombrandasset.htm "Represents a branding element in a custom branding scheme. For example, a color, logo image, header image, or footer text. A CustomBrandAsset can apply to an Experience Cloud site or to an org using the Salesforce mobile app. This object is available in API version 28.0 and later.") to apply a custom branding scheme to your Experience Cloud site. The branding scheme for the site shows in both the user interface and in the Salesforce mobile app. You must have Create and Manage Experiences to customize site branding.

You can also use this object to apply a custom branding scheme to your org when it is accessed through the Salesforce mobile app.

#### See Also

-   [Network](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_network.htm "Represents an Experience Cloud site. Salesforce Experience Cloud lets you create branded spaces for your employees, customers, and partners. You can customize and create experiences, whether they’re communities, sites, or portals, to meet your business needs, then transition seamlessly between them. Experience Cloud sites let you share information, records, and files with coworkers and stakeholders all in one place. This object is available in API version 26.0 and later.")

## Related Topics

- CustomBrandAsset (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custombrandasset.htm)
- Network (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_network.htm)
