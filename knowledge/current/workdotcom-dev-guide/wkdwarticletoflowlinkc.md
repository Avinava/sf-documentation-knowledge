---
title: "wkdw__ArticleToFlowLink__c"
domain: workdotcom-dev-guide
topic: wkdwarticletoflowlinkc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.445Z
estimatedTokens: 482
keywords: [wkdw__ArticleToFlowLink__c, new, custom, order, let, customer, configure, flows, invocable, Knowledge, Article, community, API, version, 53.0]
---

# wkdw__ArticleToFlowLink__c

> Create new custom object in order to let customer configure which flows will
         be invocable from Knowledge Article page in community. This object is available in API
      version 53.0 and later.

# wkdw\_\_ArticleToFlowLink\_\_c

Create new custom object in order to let customer configure which flows will be invocable from Knowledge Article page in community. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. A null value can mean that the record was only referenced and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the article flow link record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. The default value is the user logged in to the API who ran create().This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| wkdw__ArticleNumber__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionKnowledge Article Number that contains the flow link. |
| wkdw__FlowAPIName__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionAPI name of the flow link that is on an article page. |
| wkdw__IsActive__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the flow button is visible on an article page.The default value is 'true'. |
| wkdw__Label__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLabel for the button that triggers a flow on an article page. |
