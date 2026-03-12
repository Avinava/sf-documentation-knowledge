---
title: "NamespaceRegistry"
domain: object-reference
topic: namespaceregistry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.084Z
estimatedTokens: 596
namespace: NamespaceRegistry
keywords: [NamespaceRegistry, link, scratch, orgs, were, created, org’s, Dev, Hub, developing, packaging, releasing, app, can’t, API]
---

# NamespaceRegistry

> Represents a namespace that you can link to scratch orgs that were
			created from your org’s Dev Hub. You use the namespace when developing, packaging, and
			releasing an app. You can’t create this object with the API. Use the Link
				Namespace action in the Dev Hub graphical interface to insert a NamespaceRegistry record. This object is available
		in API version 41.0 and later.

**Namespace:** `NamespaceRegistry`

# NamespaceRegistry

Represents a namespace that you can link to scratch orgs that were created from your org’s Dev Hub. You use the namespace when developing, packaging, and releasing an app. You can’t create this object with the API. Use the **Link Namespace** action in the Dev Hub graphical interface to insert a NamespaceRegistry record. This object is available in API version 41.0 and later.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Fields

| Field Name | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionThe name of this namespace registry entry. |
| NamespaceOrg | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe org ID of the Developer Edition org where you've registered the namespace you want to link. |
| NamespacePrefix | TypestringPropertiesFilter, Group, SortDescriptionThe namespace prefix that you want to link to the scratch org. |

## Associated Objects

This object has these associated objects. Unless noted, they’re available in the same API version as this object.

[NamespaceRegistryFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[NamespaceRegistryHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

#### See Also

-   [ActiveScratchOrg](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_activescratchorg.htm "Represents an active scratch org. This object is available in API version 41.0 and later.")

-   [ScratchOrgInfo](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_scratchorginfo.htm "Represents a scratch org and its audit log. Use this object to create a scratch org and keep a log of its creation and deletion. This object is available in API version 41.0 and later.")

## Related Topics

- NamespaceRegistryFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- NamespaceRegistryHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ActiveScratchOrg (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_activescratchorg.htm)
- ScratchOrgInfo (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_scratchorginfo.htm)
