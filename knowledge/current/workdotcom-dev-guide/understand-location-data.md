---
title: "Understand Location Data"
domain: workdotcom-dev-guide
topic: understand-location-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.454Z
estimatedTokens: 647
keywords: [Understand, Location, Data, Work.com, uses, associate, Employees, physical, abstract, locations, solutions, may, already, alternate, model]
---

# Understand Location Data

> Work.com uses Location to associate Employees to physical and abstract locations.
    Existing solutions may already have an alternate data model that tracks employee locations. To
    apply the full power of Work.com, solutions may need to correlate or synchronize their data with
    Location data.

# Understand Location Data

Work.com uses Location to associate Employees to physical and abstract locations. Existing solutions may already have an alternate data model that tracks employee locations. To apply the full power of Work.com, solutions may need to correlate or synchronize their data with Location data.

Locations can be physical sites, such as a building, a farm, a factory, or any location where your employees normally congregate during their regular workday. Locations can also be abstractions, representing an aggregation of child locations that should be viewed together because of a shared characteristic, such as locations belonging to the same sales region. If your solution already uses a different entity or data source to define locations, and you need to correlate this information with Work.com, you'll need to synchronize your data with the Location object. Synchronization strategies similar to those described for synchronizing Employee data can also be used for Location data.

## Querying the Location Hierarchy

Because Location is modeled and used as a hierarchical tree structure, it's important to be able to efficiently query subtrees within it. This is made possible using the wkcc\_\_LocationPath\_\_c field, along with the Location trigger. wkcc\_\_LocationPath\_\_c is of the form “<level one id>,<level two id>,<level three id>”, and so forth.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=workdotcom_dev_guide)

#### Important

Treat wkcc\_\_LocationPath\_\_c as a read-only field. Only Salesforce should modify the location path for a location.

The following SOQL example queries for a subtree in a Location hierarchy.

```

```

A normal flow would be to query for the location at the top of the subtree you're interested in, and then query as:

```

```

#### See Also

-   [Location](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_location.htm "Location is used by Work.com to represent a physical location, with a visitor address, with extra custom fields added by Work.com. If location search filtering for all levels is enabled in the org, a location can also be an abstraction.")

-   [Command Center Data Triggers](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_data_triggers.htm "Work.com installs and uses Command Center data triggers on Employee, Individual, User, and Location. Adding or modifying records for these objects can trigger changes in related objects. It’s also possible to disable the triggers for data loads.")

## Code Examples

```
SELECT Id, Name, wkcc__LocationPath__c FROM Location 
WHERE wkcc__LocationPath__c LIKE '1314R000000PZ0eQAG,1314R000000PZ0jQAG,%'
```

```apex
Schema.Location parentLoc = [SELECT Id, wkcc__LocationPath__c FROM Location 
    WHERE LocationLevel = 2 LIMIT 1];
String parentLikeClause = parentLoc.wkcc__LocationPath__c + ',%';
List<Schema.Location> locs = [SELECT Id, Name, wkcc__LocationPath__c FROM Location 
    WHERE wkcc__LocationPath__c LIKE :parentLikeClause];
```

## Related Topics

- Location (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_location.htm)
- Command Center Data Triggers (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_data_triggers.htm)
