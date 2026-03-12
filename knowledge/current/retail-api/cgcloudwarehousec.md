---
title: "cgcloud__Warehouse__c"
domain: retail-api
topic: cgcloudwarehousec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.479Z
estimatedTokens: 2010
keywords: [cgcloud__Warehouse__c, Stores, warehouse, organizational, segmentation, purpose, maintaining, materials, stored, different, places, API, version, 54.0, later]
---

# cgcloud__Warehouse__c

> Stores the details of the warehouse object. An organizational
         segmentation for the purpose of maintaining materials that are stored in different
         places. This object is available in API version 54.0 and later.

# cgcloud\_\_Warehouse\_\_c

Stores the details of the warehouse object. An organizational segmentation for the purpose of maintaining materials that are stored in different places. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Address_Note__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription for the address. It can contain the building name and other hints to find the site. |
| cgcloud__Business_Unit__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the bookkeeping segment. |
| cgcloud__City__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the city. |
| cgcloud__Country__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the country.Possible values are:ar—Argentinaat—Austriaau—Australiabe—Belgiumbr—Brazilca—Canadach—Switzerlandcl—Chilecn—Chinade—Germanyes—Spainfr—Francegb—United Kingdomie—Irelandin—Indiait—Italyjp—Japanmx—Mexiconl—Netherlandspl—Polandru—Russian Federationus—United Statesza—South Africa |
| cgcloud__County__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the county. |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__District__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDistrict of the city or state. |
| cgcloud__Email__c | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmail address. |
| cgcloud__Fax__c | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFax number. |
| cgcloud__GLN__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionGlobal location number. |
| cgcloud__House_Number__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates where the building can be found in a street. |
| cgcloud__International_Postal_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPostal code with the format valid for every country. |
| cgcloud__Is_Postbox__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the warehouse is a postbox.The default value is false. |
| cgcloud__Latitude__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDecimal degree of latitude. |
| cgcloud__Longitude__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDecimal degree of longitude. |
| cgcloud__Phone_1__c | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFirst phone number. |
| cgcloud__Phone_2__c | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSecond phone number. |
| cgcloud__Postbox__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of a numbered post box. |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales organization to which the data type option belongs.Possible values are:0000000100020003 |
| cgcloud__State__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState or province of the country.Possible values are:AL—AlabamaAZ—ArizonaCA—CaliforniaGA—GeorgiaIA—IowaID—IdahoIL—IllinoisKS—KansasMD—MarylandMI—MichiganMO—MissouriNC—North CarolinaND—North DakotaNE—NebraskaNM—New MexicoNY—New YorkOH—OhioOR—OregonPA—PennsylvaniaSC—South CarolinaSD—South DakotaTX—TexasVA—VirginiaWA—Washington |
| cgcloud__Street__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the street. |

## Associated Objects

This object contains these following associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Warehouse\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Warehouse\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Warehouse\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Warehouse\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Warehouse\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
CASE($User.cgcloud__Language_Postfix__c,
"Language1", cgcloud__Description_Language_1__c,
"Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c),
"Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c),
"Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c),
cgcloud__Description_Language_1__c)
```

## Related Topics

- cgcloud__Warehouse__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Warehouse__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Warehouse__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Warehouse__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Warehouse__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
