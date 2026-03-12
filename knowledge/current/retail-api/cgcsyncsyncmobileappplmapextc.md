---
title: "cgc_sync__Sync_Mobile_App_PL_Map_Ext__c"
domain: retail-api
topic: cgcsyncsyncmobileappplmapextc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.844Z
estimatedTokens: 822
keywords: [cgc_sync__Sync_Mobile_App_PL_Map_Ext__c, mapping, picklists, dropdown, boxes, mobile, app, API, version, 53.0, later, cgc, _sync, _Mobile, _App]
---

# cgc_sync__Sync_Mobile_App_PL_Map_Ext__c

> Contains the mapping information of picklists and dropdown boxes in
         the mobile app. This object is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Mobile\_App\_PL\_Map\_Ext\_\_c

Contains the mapping information of picklists and dropdown boxes in the mobile app. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgc_sync__Business_Area__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionKey used to segregate business areas.The default value is 0000. |
| cgc_sync__Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPicklist code. |
| cgc_sync__Ignore_On_Mobile_App__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to ignore elements in the mobile app (true) or not (false).The default value is false. |
| cgc_sync__ImageId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionImage ID of the icon of the corresponding picklist value. |
| cgc_sync__ParentPicklist__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRefers to the picklist-mapping record.This is a relationship field.Relationship Namecgc_sync__ParentPicklist__rRelationship TypeMaster-detailRefers Tocgc_sync__Sync_Mobile_App_PL_Map__c (the master object) |
| cgc_sync__Picklist_Value__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPicklist value. |
| cgc_sync__ShortText_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionShort text for language 1 to display for this sales org. |
| cgc_sync__ShortText_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionShort text for language 2 to display for this sales org. |
| cgc_sync__ShortText_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionShort text for language 3 to display for this sales org. |
| cgc_sync__ShortText_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionShort text for language 4 to display for this sales org. |
| cgc_sync__Sort__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOrder of values in the picklist. |
| cgc_sync__Text_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText for language 1 to display for this sales org. |
| cgc_sync__Text_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText for language 2 to display for this sales org. |
| cgc_sync__Text_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText for language 3 to display for this sales org. |
| cgc_sync__Text_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText for language 4 to display for this sales org. |
| cgc_sync__ValidationCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionValue to filter picklist items. |
