---
title: "cgc_sync__Sync_Named_Fetch_Tree_Nodes__c"
domain: retail-api
topic: cgcsyncsyncnamedfetchtreenodesc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:37.869Z
estimatedTokens: 753
keywords: [nodes, construct, tree, structure, sync, objects, API, version, 53.0, later, cgc, _sync, _Named, _Fetch, _Tree]
---

# cgc_sync__Sync_Named_Fetch_Tree_Nodes__c

> Contains information about the nodes that are used to construct the tree structure of
      sync objects. This object is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Named\_Fetch\_Tree\_Nodes\_\_c

Contains information about the nodes that are used to construct the tree structure of sync objects. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Sort, UpdateDescriptionUnique identification of the record. |
| SetupOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the setup owner.This is a polymorphic relationship field.Relationship NameSetupOwnerRelationship TypeLookupRefers ToOrganization, Profile, User |
| cgc_sync__Child_Join_Field__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the relation between two objects. When the NFT is evaluated, it returns details of the products and tactics that are related to the contract IDs and to the retrieved contracts. |
| cgc_sync__Display_Name__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionDisplay name of the NFT. This field is unique to your organization. |
| cgc_sync__Fetch_Tree_Name__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the fetch tree. This is used to look up nodes (records) in the same tree. |
| cgc_sync__Join_Field__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the join field. |
| cgc_sync__Object_Api_Name__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the object from which the data is retrieved. |
| cgc_sync__Parent_Join_Field__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionList of returned contracts for a given set of account IDs. At the parent level, the join field acts as the lookup field. |
| cgc_sync__Parent_Node_Id__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionParent object of this node. |
| cgc_sync__SF_Rest_Enabled__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a client can use (true) standard Salesforce REST APIs for synchronization to evaluate an NFT or not (false).The default value is false. |
| cgc_sync__Where_2__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSecond part of the where clause. |
| cgc_sync__Where_3__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThird part of the where clause. |
| cgc_sync__Where_4__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFourth part of the where clause. |
| cgc_sync__Where__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionConditional statements of the where clause to filter and retrieve data from the back end. |
