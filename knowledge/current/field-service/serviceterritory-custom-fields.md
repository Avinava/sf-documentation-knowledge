---
title: "ServiceTerritory Custom Fields"
domain: field-service
topic: serviceterritory-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:55.366Z
estimatedTokens: 793
keywords: [ServiceTerritory, Custom, Fields, fields, associated, geographic, functional, region, which, field, service, work, performed, Field, Service., Supported, Calls, Special, Access, Rules]
---

# ServiceTerritory Custom Fields

> Custom fields associated with a geographic or functional region in which
         field service work can be performed in Field Service.

# ServiceTerritory Custom Fields

Custom fields associated with a geographic or functional region in which field service work can be performed in Field Service.

The standard fields are documented in the [ServiceTerritory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_serviceterritory.htm "HTML (New Window)") object reference.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service managed package must be installed.

## Fields

| Field | Details |
| --- | --- |
| FSL__Hide_Emergency_​Map__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls if the Emergency Wizard map used by the Emergency Wizard global action is hidden for a service territory. This is for privacy purposes. If this is true, it shows a list of appointments with estimated time of arrivals instead.The default value is false. |
| FSL__NumberOfServices​ToDripFeed__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe drip feed rate to dispatch appointments. This is part of the drip feed dispatching feature. This value overrides the default value in the Field Service Settings page.For more info, view the Drip Feed Service Appointments Help article. |
| FSL__System_Jobs__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe list of automators for scheduling jobs associated with a single territory. Possible values are the default or custom automator names configured in the Field Service Settings page. For example, if you create an optimization automator for Los Angeles called "LA_Optimize_1", this field is populated with LA_Optimize_1 for the LA service territory. This field is populated by the system. Don’t edit this field. |
| FSL__TerritoryLevel__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe territory hierarchy level of the polygon defining the service territory. A polygon is a custom shape drawn on the map to define the area of the territory. It can be nested inside another polygon creating a hierarchy. This field is populated by the system. Don’t edit this field. |

## Internal Fields

These internal fields are used by the Field Service managed package for Street Level Routing calculations. Although they’re publicly accessible, they must only be updated by the managed package.

-   FSL\_\_Internal\_SLRGeolocation\_\_Latitude\_\_s
-   FSL\_\_Internal\_SLRGeolocation\_\_Longitude\_\_s
-   FSL\_\_Internal\_SLRGeolocation\_\_c

#### See Also

-   [Salesforce Object Reference: ServiceTerritory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_serviceterritory.htm "Salesforce Object Reference: ServiceTerritory - HTML (New Window)")

-   [Salesforce Help: Drip Feed Service Appointments](https://help.salesforce.com/articleView?id=service.pfs_dispatch_drip_feed.htm&type=5&language=en_US "Salesforce Help: Drip Feed Service Appointments - HTML (New Window)")
