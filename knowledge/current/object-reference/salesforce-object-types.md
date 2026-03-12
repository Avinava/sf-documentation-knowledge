---
title: "Salesforce Object Types"
domain: object-reference
topic: salesforce-object-types
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:03.338Z
estimatedTokens: 847
keywords: [Salesforce, Platform, refer, whether, standard, custom, schema, determined, created, However, continued, evolve, there, now, objects]
---

# Salesforce Object Types

> In the Salesforce Platform, an object type used to refer to whether an object was
        standard or custom. A standard object has a schema determined by Salesforce. A custom object
        has a schema determined or created by you. However, as the platform has continued to evolve,
        there are now many more types of objects.

# Salesforce Object Types

In the Salesforce Platform, an object type used to refer to whether an object was standard or custom. A standard object has a schema determined by Salesforce. A custom object has a schema determined or created by you. However, as the platform has continued to evolve, there are now many more types of objects.

The objects in the table are grouped by how objects are identified and accessed in Salesforce. These include objects that are visible via your org or an API, even if they are used for internal purposes.

| Suffix | Object Type | Object Group |
| --- | --- | --- |
| __b | Big object | High Scale |
| __c | Custom object | Common |
| __ChangeEvent | Custom Object Change Event | Common |
| __chn | PlatformEventChannel | Common |
| __cio | Calculated insight object | High Scale |
| __dg | Data graph | High Scale |
| __DataCategorySelection | Knowledge__DataCategorySelection | Common |
| __dlm | Data Model Object (DMOs used for queries have this extension) | High Scale |
| __dlo | Data Lake Object | High Scale |
| __dmo | Data Model Object | High Scale |
| __dso | Data source object | High Scale |
| __e | Platform event | Common |
| __Feed | Knowledge article feed or custom object feed | Common |
| __hd | Historical data | Common |
| __History | Field History Tracking for custom objects | Common |
| _hst | A historical field for a custom report type. | Common |
| __ka | Knowledge article | Common |
| __kav | Knowledge article version | Common |
| __latitude__s | Geolocation custom field with latitude coordinates | Common |
| __longitude__s | Geolocation custom field with longitude coordinates | Common |
| __mdt | Custom metadata type | Common |
| __pc | Custom person account field | Common |
| __pr | Person account relationship field | Common |
| __r | Custom relationship field as used in a SOQL query to traverse the relationship | Common |
| __Share | Custom object sharing object | Common |
| __Tag | Salesforce tags | Common |
| __ViewStat | KnowledgeArticleViewStat | Common |
| __VoteStat | KnowledgeArticleVoteStat | Common |
| __x | External object | Common |
| __xo | Salesforce-to-Salesforce (S2S) spoke/proxy object | Common |
| ChangeEvent | Standard object change event | Common |
| Feed | Standard object feed | Common |

## Identifying an Object Type

You can identify an object type by its developer API name. The developer API name is a unique identifier with a standard suffix that indicates the type. You can see platform objects in the Object Manager, along with their suffix. Object Manager shows the object type.

Many different types of Data Cloud objects share the same suffix. To determine the type of a Data Cloud object, view it in Data Cloud [Data Explorer](https://help.salesforce.com/s/articleView?id=data.c360_a_data_explorer.htm&type=5&language=en_US) and filter by the object type.

## Accessing an Object

Access to an object type is determined by the products and features you’re licensed for and relevant user in object permissions. In some cases, you need permissions in multiple clouds to access objects for a feature. For example, you need permission from Data Cloud and your Sales Cloud org to access Data Cloud objects for Data Cloud-powered features in Sales Cloud. The security model for an org is different from the security model of Data Cloud, because objects are stored differently.
