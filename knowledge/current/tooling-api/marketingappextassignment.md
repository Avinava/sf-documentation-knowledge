---
title: "MarketingAppExtAssignment"
domain: tooling-api
topic: marketingappextassignment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.224Z
keywords: [MarketingAppExtAssignment, Note, Supported, SOAP, Calls, REST, HTTP, Methods, Special, Access, Rules, Fields]
---

# MarketingAppExtAssignment

# MarketingAppExtAssignment

Represents a Marketing App Extension Business Unit assignment, which dictates which Account Engagement business unit the external activity data is available in. Available in API version 53.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

Pardot is now known as Marketing Cloud Account Engagement. We wish we could snap our fingers to update the name everywhere, but you can expect to see the previous name in a few places, including API references and documentation.

## Supported SOAP Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

MarketingAppExtAssignment is available to customers with Account Engagement Plus, Advanced, or Premium editions.

## Fields

| Field | Details |
| --- | --- |
| MarketingAppExtensionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThis is a relationship field. The Marketing App Extension the Business Unit Assignment is associated with. Appears in the UI.Relationship NameMarketingAppExtensionRelationship TypeLookupRefers ToMarketingAppExtension |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThis is a relationship field. The ID of the Account Engagement business unit. Appears in the UI.Relationship NameParentRelationship TypeLookupRefers ToPardotTenant |