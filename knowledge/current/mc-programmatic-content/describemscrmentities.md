---
title: "DescribeMscrmEntities"
domain: mc-programmatic-content
topic: describemscrmentities
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:26.799Z
estimatedTokens: 204
keywords: [DescribeMscrmEntities, **Overview**, **Syntax**, Usage]
---

# DescribeMscrmEntities

> DescribeMscrmEntities()

# DescribeMscrmEntities

## **Overview**

Returns the logical name and display name of all Microsoft Dynamics CRM entities

### **Syntax**

DescribeMscrmEntities()

### Usage

```
%%[
/* Sample code to get a list of all entities in a Dynamics CRM account to a record set */
var @entities_rs
set @entities_rs = describemscrmentities()
]%%
<p> Here is a list of CRM Entities </p>
%%[
var @entity_name, @entity_displayname, @counter
for @counter = 1 to rowcount(@entities_rs) do
set @entity_name = field(row(@entities_rs,@counter), 'Name')
set @entity_displayname = field(row(@entities_rs,@counter), 'DisplayName')
]%%
Entity Name: &amp;nbsp; &amp;nbsp; %%=v(@entity_name)=%% <br>
Entity Display Name: &amp;nbsp; &amp;nbsp; %%=v(@entity_displayname)=%% <br> <br><br>
%%[ next @counter ]%%
```

Last Updated: Jun 8, 2021
