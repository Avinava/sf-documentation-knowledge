---
title: "ServiceResource Custom Fields"
domain: field-service
topic: serviceresource-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:47:12.133Z
keywords: [ServiceResource, Custom, Fields, Supported, Calls, Special, Access, Rules, See]
---

# ServiceResource Custom Fields

# ServiceResource Custom Fields

Custom fields associated with a field service technician or crew in Field Service.

The standard fields are documented in the [ServiceResource](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_serviceresource.htm "HTML (New Window)") object reference.

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Field Service managed package must be installed.

## Fields

| Field | Details |
| --- | --- |
| FSL__Efficiency__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe efficiency score or the work pace of the service resource. Enter a value from 0.1 to 10. An efficiency of 1 (default) means that the mobile worker works at a typical or average speed. An efficiency greater than 1 means that the mobile worker works faster than average. Less than 1 means that the mobile worker works slower than average.For more info, view the Estimate a Service Resource’s Efficiency Help article. |
| FSL__GanttLabel__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the service resource in the Field Service dispatcher console’s Gantt chart. This is shown under the service resource’s name in the chart. |
| FSL__Online_Offset__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe offset of how long the service resource is considered online since they last used or logged into the mobile app. This overrides the default value in the Field Service Settings page. |
| FSL__Picture_Link__c | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL link to the customer’s picture used as the avatar in the Field Service dispatcher console’s Gantt chart. If no URL is provided here, the Gantt chart uses the user avatar. |
| FSL__Priority__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe priority of the service resource used to rank their appointments. The lower the number the higher the priority. |
| FSL__Travel_Speed__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe average aerial travel speed of the service resource used to calculate the aerial travel time. This field overrides the default value in the Field Service Settings page. The units, selected in the Field Service Settings page, are KPH or MPH. Street level routing and predictive travel calculations don’t use this field. They have their own settings. |

#### See Also

-   [Salesforce Object Reference: ServiceResource](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_serviceresource.htm "Salesforce Object Reference: ServiceResource - HTML (New Window)")
    
-   [Salesforce Help: Estimate a Service Resource’s Efficiency](https://help.salesforce.com/s/articleView?id=service.pfs_efficiency.htm&type=5&language=en_US "Salesforce Help: Estimate a Service Resource’s Efficiency - HTML (New Window)")