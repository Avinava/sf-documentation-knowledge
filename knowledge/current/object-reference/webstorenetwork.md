---
title: "WebStoreNetwork"
domain: object-reference
topic: webstorenetwork
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.468Z
estimatedTokens: 595
keywords: [WebStoreNetwork, relationship, web, store, experience, site, API, version, 49.0, later, Calls, Special, Access, Rules, Usage]
---

# WebStoreNetwork

> Represents the relationship between a web store and an experience site.
      This object is available in API version 49.0 and later.

# WebStoreNetwork

Represents the relationship between a web store and an experience site. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You must:

-   Have CRUD read permission to access this object
-   Be a Salesforce admin with CRUD create permission to create a new record in this object

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the web store network. |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the experience site associated with the web store.This field is a relationship field.Relationship NameNetworkRelationship TypeLookupRefers ToNetwork |
| WebStoreId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the web store associated with the experience site.This field is a relationship field.Relationship NameWebStoreRelationship TypeLookupRefers ToWebStore |

## Usage

After you copy web store data between a sandbox and production, or between sandboxes, you can programmatically associate the copy with a different site by updating the corresponding WebStoreNetwork record. You can even change the association while the store is active. The site must use a template that’s compatible with the web store type, and the site can’t be associated with a store. Otherwise, you can change the association only by editing the web store in the UI.

#### See Also

-   [Network](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_network.htm "Represents an Experience Cloud site. Salesforce Experience Cloud lets you create branded spaces for your employees, customers, and partners. You can customize and create experiences, whether they’re communities, sites, or portals, to meet your business needs, then transition seamlessly between them. Experience Cloud sites let you share information, records, and files with coworkers and stakeholders all in one place. This object is available in API version 26.0 and later.")

-   [WebStore](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstore.htm "Represents a B2B or D2C store. This object is available in API version 49.0 and later.")

## Related Topics

- Network (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_network.htm)
- WebStore (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstore.htm)
