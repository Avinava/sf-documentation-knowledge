---
title: "cgc_sync__Sync_Mobile_App_PL_Repo__c"
domain: retail-api
topic: cgcsyncsyncmobileappplrepoc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.853Z
estimatedTokens: 908
keywords: [cgc_sync__Sync_Mobile_App_PL_Repo__c, repository, dropdown, boxes, mobile, app, API, version, 53.0, later, cgc, _sync, _Mobile, _App, _PL]
---

# cgc_sync__Sync_Mobile_App_PL_Repo__c

> Represents the repository of dropdown boxes in a mobile
         app.
      This object is available in API version 53.0 and later.

# cgc\_sync\_\_Sync\_Mobile\_App\_PL\_Repo\_\_c

Represents the repository of dropdown boxes in a mobile app. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgc_sync__Business_Area__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionKey used to segregate business areas.Possible value is 0000. |
| cgc_sync__Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCode for the picklist. |
| cgc_sync__Field__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSalesforce field name of the picklist. |
| cgc_sync__Has_Empty_Item__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the picklist contains an empty item (true) or not (false).The default value is false. |
| cgc_sync__ImageId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionImage ID of the icon of the corresponding picklist value. |
| cgc_sync__Mobile_App_Domain__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMapping to the domain name of the mobile runtime artifact. |
| cgc_sync__Object__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRefers to the object name. |
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
| cgc_sync__ValidationCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionValue to filter the picklist. |
