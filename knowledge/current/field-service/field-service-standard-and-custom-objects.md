---
title: "Field Service Standard and Custom Objects"
domain: field-service
topic: field-service-standard-and-custom-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.291Z
keywords: [Field, Service, Standard, Custom, Objects, Note]
---

# Field Service Standard and Custom Objects

# Field Service Standard and Custom Objects

A list of standard Salesforce objects and Salesforce-managed custom objects used in Field Service.

The following list links to reference information for the standard objects and Salesforce-managed custom objects. Some objects are specific to Field Service, while others are used across a variety Salesforce features.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

Most objects are available only if Field Service is enabled. Objects not tied to Field Service enablement are shown with an asterisk (\*).

-   **[Address](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_address.htm)**  
    Represents a mailing, billing, or home address.
-   **[ApptBundleAggrDurDnscale](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_apptbundleaggrdurdnscale.htm)**  
    Sums the duration of the bundle members, reduced by a predefined percentage. This object is available in API version 54.0 and later.
-   **[ApptBundleAggrPolicy](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_apptbundleaggrpolicy.htm)**  
    Policy that defines how the property values of the bundle members are aggregated and assigned to the bundle. This object is available in API version 54.0 and later.
-   **[ApptBundleConfig](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_apptbundleconfig.htm)**  
    Represents the general parameters that define the behavior of the bundle. This object is available in API version 54.0 and later.
-   **[ApptBundlePolicy](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_apptbundlepolicy.htm)**  
    Policy that defines how the bundling of service appointments should be handled. This object is available in API version 54.0 and later.
-   **[ApptBundlePolicySvcTerr](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_apptbundlepolicysvcterr.htm)**  
    Represents a link between the BundlePolicy and the ServiceTerritory. This object is available in API version 54.0 and later.
-   **[ApptBundlePropagatePolicy](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_apptbundlepropagatepolicy.htm)**  
    Policy that defines which property values are inherited from the bundle to the bundle members or are assigned as constant values in the bundle members. This object is available in API version 55.0 and later.
-   **[ApptBundleRestrictPolicy](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_apptbundlerestrictpolicy.htm)**  
    Policy that defines the restrictions that are considered while forming a bundle. This object is available in API version 54.0 and later.
-   **[ApptBundleSortPolicy](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_apptbundlesortpolicy.htm)**  
    Policy that defines the properties by which the bundle members are sorted within the bundle. Can also be used in the automatic mode for determining the order of the automatic selection of bundle members. This object is available in API version 54.0 and later.
-   **[AppExtension](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_appextension.htm)**  
    Represents a connection between the Field Service mobile app and another app, typically for passing record data to the Salesforce mobile app or other apps. This object is available in API version 41.0 and later.
-   **[Asset\*](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_asset.htm)**  
    Represents an item of commercial value, such as a product sold by your company or a competitor, that a customer has purchased.
-   **[AssetAccountParticipant](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_assetaccountparticipant.htm)**  
    Represents a junction between the Asset and Account objects describing the association between a participating account and an asset. This object is available in API version 56.0 and later.
-   **[AssetAttribute](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_assetattribute.htm)**  
    Stores asset attributes to track and analyze asset conditions to improve their uptime. This object is available in API version 57.0 and later.
-   **[AssetContactParticipant](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_assetcontactparticipant.htm)**  
    Represents a junction between the Asset and Contact objects describing the association between a participating contact and an asset. This object is available in API version 56.0 and later.
-   **[AssetDowntimePeriod\*](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_assetdowntimeperiod.htm)**  
    Represents a period during which an asset is not able to perform as expected. Downtime periods include planned activities, such as maintenance, and unplanned events, such as mechanical breakdown. This object is available in API version 49.0 and later.
-   **[AssetRelationship\*](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_assetrelationship.htm)**  
    Represents a non-hierarchical relationship between assets due to an asset modification; for example, a replacement, upgrade, or other circumstance. In Revenue Lifecycle Management, this object represents an asset or assets grouped in a bundle or set. This object is available in API version 41.0 and later.
-   **[AssetWarranty](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_assetwarranty.htm)**  
    Defines the warranty terms applicable to an asset along with any exclusions and extensions. This object is available in API version 50.0 and later.
-   **[AssignedResource](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_assignedresource.htm)**  
    Represents a service resource who is assigned to a service appointment in Field Service and Lightning Scheduler. Assigned resources appear in the Assigned Resources related list on service appointments. This object is available in API version 38.0 and later.
-   **[AssociatedLocation](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_associatedlocation.htm)**  
    Represents a link between an account and a location in Field Service. You can associate multiple accounts with one location. For example, a shopping center location may have multiple customer accounts.
-   **[AttributeDefinition](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_attributedefinition.htm)**  
    Represents a product, asset, or object attribute, for example, a hardward specification or software detail. This object is available in API version 57.0 and later.
-   **[AttributePicklist](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_attributepicklist.htm)**  
    Represents a custom picklist for an asset attribute. This object is available in API version 57.0 and later.
-   **[AttributePicklistValue](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_attributepicklistvalue.htm)**  
    Represents the values of an asset attribute picklist. This object is available in API version 57.0 and later.
-   **[ContractLineItem\*](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_contractlineitem.htm)**  
    Represents a product covered by a service contract (customer support agreement). This object is available in API version 18.0 and later.
-   **[ContractLineOutcome](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_contractlineoutcome.htm)**  
    Represents information on a contract line outcome’s captured data and other related parameters that are used when capturing data. This object is available in API version 58.0 and later.
-   **[ContractLineOutcomeData](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_contractlineoutcomedata.htm)**  
    Represents the contract line outcome’s captured data. It stores the data that was captured between the contract line outcome’s start date and end date. This object is available in API version 58.0 and later.
-   **[DigitalSignature](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_digitalsignature.htm)**  
    Represents a signature captured on a service report in field service.
-   **[Entitlement\*](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_entitlement.htm)**  
    Represents the customer support an account or contact is eligible to receive. This object is available in API version 18.0 and later. Entitlements may be based on an asset, product, or service contract.
-   **[EntityMilestone\*](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_entitymilestone.htm)**  
    Represents a required step in a customer support process on a work order. The Salesforce user interface uses the term “object milestone. This object is available in API version 37.0 and later.
-   **[Expense](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_expense.htm)**  
    Represents an expense linked to a work order. Service resource technicians can log expenses, such as tools or travel costs. This object is available in API version 49.0 and later.
-   **[ExpenseReport](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_expensereport.htm)**  
    Represents a report that summarizes expenses. This object is available in API version 50.0 and later.
-   **[ExpenseReportEntry](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_expensereportentry.htm)**  
    Represents an entry in an expense report. This object is available in API version 50.0 and later.
-   **[FieldServiceMobileSettings](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_fieldservicemobilesettings.htm)**  
    Represents a configuration of settings that control the Field Service iOS and Android mobile app experience. This object is available in API version 38.0 and later.
-   **[FldSvcObjChg](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_fldsvcobjchg.htm)**  
    Represents a change made to one of a service appointment’s tracked fields. This object is available in API version 63.0 and later.
-   **[FldSvcObjChgDtl](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_fldsvcobjchgdtl.htm)**  
    Represents the details of a change made to one of a service appointment’s tracked fields. This object is available in API version 63.0 and later.
-   **[FSL\_\_Time\_Dependency\_\_c](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_fsl__time_dependency__c.htm)**  
    Represents a dependency between two service appointments. This object is used to define scheduling relationships between two appointments. It allows you to determine the order and timing in which dependent appointments should be scheduled.
-   **[GeolocationBasedAction](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_geolocationbasedaction.htm)**  
    Represents a geolocation-based action, which is an action that’s triggered when a user enters, exits, or is within the area of the associated object. Available in API version 61.0 and later.
-   **[LinkedArticle](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_linkedarticle.htm)**  
    Represents a knowledge article that is attached to a work order, work order line item, or work type. This object is available in API version 37.0 and later.
-   **[Location](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_location.htm)**  
    Represents a warehouse, service vehicle, work site, or other element of the region where your team performs field service work. In API version 49.0 and later, you can associate activities with specific locations. Activities, such as the tasks and events related to a location, appear in the activities timeline when you view the location detail page. Also in API version 49.0 and later, Work.com users can view Employees as a related list on Location records. In API version 51.0 and later, this object is available for Omnichannel Inventory and represents physical locations where inventory is available for fulfilling orders.
-   **[MaintenanceAsset](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_maintenanceasset.htm)**  
    Represents an asset covered by a maintenance plan in field service. Assets can be associated with multiple maintenance plans.
-   **[MaintenancePlan](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_maintenanceplan.htm)**  
    Represents a preventive maintenance schedule for one or more assets in field service.
-   **[MaintenanceWorkRule](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_maintenanceworkrule.htm)**  
    Represents the recurrence pattern for a maintenance record. This object is available in API version 49.0 and later.
-   **[MobileSettingsAssignment](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_mobilesettingsassignment.htm)**  
    Represents the assignment of a particular field service mobile settings configuration to a user profile. This object is available in API version 41.0 and later.
-   **[OperatingHours](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_operatinghours.htm)**  
    Represents the hours in which a service territory, service resource, or account is available for work. OperatingHours is used by Field Service, Salesforce Scheduler, Salesforce Meetings, Sales Engagement, and Workforce Engagement. This object is available in API version 38.0 and later.
-   **[OperatingHoursHoliday](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_fs_operatinghoursholiday.htm)**  
    Represents the day or hours for which a service territory or service resource is unavailable in Field Service, Salesforce Scheduler, Salesforce Meetings, Sales Engagement, or Workforce Engagement. This object is available in API version 54.0 and later.
-   **[Pricebook2\*](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_pricebook2.htm)**  
    Represents a price book that contains the list of products that your org sells.
-   **[Product2\*](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_product2.htm)**  
    Represents a product that your company sells.
-   **[ProductConsumed](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_productconsumed.htm)**  
    Represents an item from your inventory that was used to complete a work order or work order line item in field service.
-   **[ProductConsumedState](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_productconsumedstate.htm)**  
    Represents the status of an item from your inventory that was used to complete a work order or work order line item in Field Service. This object is available in API version 57.0 and later.
-   **[ProductItem](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_productitem.htm)**  
    Represents the stock of a particular product at a particular location in field service, such as all bolts stored in your main warehouse.
-   **[ProductItemTransaction](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_productitemtransaction.htm)**  
    Represents an action taken on a product item in field service. Product item transactions are auto-generated records that help you track when a product item is replenished, consumed, or adjusted.
-   **[ProductRequest](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_productrequest.htm)**  
    Represents an order for a part or parts in field service.
-   **[ProductRequestLineItem](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_productrequestlineitem.htm)**  
    Represents a request for a part in field service. Product request line items are components of product requests.
-   **[ProductRequired](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_productrequired.htm)**  
    Represents a product that is needed to complete a work order or work order line item in field service.
-   **[ProductServiceCampaign](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_productservicecampaign.htm)**  
    Represents a set of activities to be performed on a product service campaign asset, such as a product recall for safety issues or product defects. This object is available in API version 51.0 and later.
-   **[ProductServiceCampaignItem](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_productservicecampaignitem.htm)**  
    Represents a product service campaign's asset. This object is available in API version 51.0 and later.
-   **[ProductServiceCampaignItemStatus](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_productservicecampaignitemstatus.htm)**  
    Represents a status for a product service campaign item in field service. This object is available in API version 51.0 and later.
-   **[ProductServiceCampaignStatus](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_productservicecampaignstatus.htm)**  
    Represents a status for a product service campaign in field service. This object is available in API version 51.0 and later.
-   **[ProductTransfer](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_producttransfer.htm)**  
    Represents the transfer of inventory between locations in field service.
-   **[ProductWarrantyTerm](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_productwarrantyterm.htm)**  
    Defines the relationship between a product or product family and warranty term. This object is available in API version 50.0 and later.
-   **[RecordsetFilterCriteria](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_recordsetfiltercriteria.htm)**  
    Represents a set of filters that can be used to match service appointments or assets based on your criteria fields. For example, you can create recordset filter criteria so that only service appointments that satisfy the filter criteria are matched to the filtered shifts, and likewise only maintenance work rules that satisfy your criteria are matched to assets. This object is available in API version 50.0 and later. Assets and maintenance work rules are available in API version 52.0 and later.
-   **[RecordsetFilterCriteriaRule](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_recordsetfiltercriteriarule.htm)**  
    Represents a rule using fields from the designated source object to create filters on the filtered, or target, object. RecordsetFilterCriteriaRule is associated with the RecordsetFilterCriteria object. This object is available in API version 50.0 and later.
-   **[RecordsetFltrCritMonitor](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_recordsetfltrcritmonitor.htm)**  
    Monitors whether the value of an asset attribute is within the threshold of a recordset filter criteria (RFC). You can monitor one or more RFCs for an Asset. This object is available in API version 57.0 and later.
-   **[ResourceAbsence](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_resourceabsence.htm)**  
    Represents a time period in which a service resource is unavailable to work in Field Service, Salesforce Scheduler, or Workforce Engagement. This object is available in API version 38.0 and later.
-   **[ResourcePreference](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_resourcepreference.htm)**  
    Represents an account’s preference for a specified service resource on field service work.
-   **[ReturnOrder](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_returnorder.htm)**  
    Represents the return or repair of inventory or products in Field Service, or the return of order products in Order Management. This object is available in API version 42.0 and later.
-   **[ReturnOrderLineItem](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_returnorderlineitem.htm)**  
    Represents a specific product that is returned or repaired as part of a return order in Field service, or a specific order item that is returned as part of a return order in Order Management. This object is available in API version 42.0 and later.
-   **[SerializedProduct](atlas.en-us.field_service_dev.meta/field_service_dev/hc_sforce_api_objects_serializedproduct.htm)**  
    Records serial numbers for each individual product in an inventory. This object is available in API version 50.0 and later.
-   **[SerializedProductTransaction](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_serializedproducttransaction.htm)**  
    Represents transactions performed on a serialized product. This object is available in API version 57.0 and later.
-   **[ServiceAppointment](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_serviceappointment.htm)**  
    Represents an appointment to complete work for a customer in Field Service, Lightning Scheduler,Intelligent Appointment Management, and Virtual Care.This object is available in API version 38.0 and later.
-   **[ServiceAppointmentStatus](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_serviceappointmentstatus.htm)**  
    Represents a possible status of a service appointment in field service.
-   **[ServiceContract\*](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_servicecontract.htm)**  
    Represents a customer support contract (business agreement). This object is available in API version 18.0 and later.
-   **[ServiceCrew](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_servicecrew.htm)**  
    Represents a group of service resources who can be assigned to service appointments as a unit.
-   **[ServiceCrewMember](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_servicecrewmember.htm)**  
    Represents a technician service resource that belongs to a service crew.
-   **[ServiceReport](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_servicereport.htm)**  
    Represents a report that summarizes a work order, work order line item, or service appointment.
-   **[ServiceReportLayout](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_servicereportlayout.htm)**  
    Represents a service report template in field service.
-   **[ServiceResource](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_serviceresource.htm)**  
    Represents a service technician or service crew in Field Service and Salesforce Scheduler, or an agent in Workforce Engagement. This object is available in API version 38.0 and later.
-   **[ServiceResourceCapacity](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_serviceresourcecapacity.htm)**  
    Represents the maximum number of scheduled hours or number of service appointments that a capacity-based service resource can complete within a specific time period. This object is available in API version 38.0 and later.
-   **[ServiceResourceSkill](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_serviceresourceskill.htm)**  
    Represents a skill that a service resource possesses in Field Service and Lightning Scheduler. This object is available in API version 38.0 and later.
-   **[ServiceTerritory](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_serviceterritory.htm)**  
    Represents a geographic or functional region in which work can be performed in Field Service, Salesforce Scheduler, or Workforce Engagement. This object is available in API version 38.0 and later.
-   **[ServiceTerritoryLocation](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_serviceterritorylocation.htm)**  
    Represents a location associated with a particular service territory in field service.
-   **[ServiceTerritoryMember](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_serviceterritorymember.htm)**  
    Represents a service resource who can be assigned in a service territory in Field Service, Salesforce Scheduler, or Workforce Engagement. This object is available in API version 38.0 and later.
-   **[Shift](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_shift.htm)**  
    Represents a shift for service resource scheduling. Available in API versions 46.0 and later.
-   **[ShiftPattern](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_shiftpattern.htm)**  
    Represents a pattern of templates for creating shifts. This object is available in API version 51.0 and later.
-   **[ShiftPatternEntry](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_shiftpatternentry.htm)**  
    ShiftPatternEntry links a shift template to a shift pattern. This object is available in API version 51.0 and later.
-   **[ShiftTemplate](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_shifttemplate.htm)**  
    Represents a template for creating shifts. This object is available in API version 51.0 and later.
-   **[Shipment](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_shipment.htm)**  
    Represents the transport of inventory in field service or a shipment of order items in Order Management.
-   **[Skill\*](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_skill.htm)**  
    Represents a category or group of Chat users or service resources in Field Service or Workforce Engagement. This object is available in API version 24.0 and later.
-   **[SkillRequirement](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_skillrequirement.htm)**  
    Represents a skill that is required to complete a particular task in Field Service, Omni-Channel, Salesforce Scheduler, or Workforce Engagement. Skill requirements can be added to pending service routing objects in Omni-Channel. They can be added to work types, work orders, and work order line items in Field Service and Lightning Scheduler. And they can be added to job profiles in Workforce Engagement. This object is available in API version 38.0 and later. You also can add skill requirements to work items in Omni-Channel skills-based routing using API version 42.0 and later.
-   **[TimeSheet](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_timesheet.htm)**  
    Represents a schedule of a service resource’s time in Field Service or Workforce Engagement. This object is available in API v47.0 and later.
-   **[TimeSheetEntry](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_timesheetentry.htm)**  
    Represents a span of time that a service resource spends on a field service task. This object is available in API version 47.0 and later.
-   **[TimeSlot](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_timeslot.htm)**  
    Represents a period of time on a specified day of the week during which work can be performed in Field Service, Salesforce Scheduler, or Workforce Engagement. Operating hours consist of one or more time slots. This object is available in API version 38.0 and later.
-   **[TravelMode](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_travelmode.htm)**  
    Represents a travel mode used for travel time calculations. The records include information about the type of transportation (such as Car or Walking), whether a vehicle can take toll roads, and whether a vehicle is transporting hazardous materials. This object is available in API version 54.0 and later.
-   **[WarrantyTerm](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_warrantyterm.htm)**  
    Represents warranty terms defining the labor, parts, and expenses covered, along with any exchange options, provided to rectify issues with products. This object is available in API version 50.0 and later.
-   **[WorkCapacityAvailability](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_workcapacityavailability.htm)**  
    Represents the available work capacity for a specific time and service territory. This object is available in API version 59.0 and later.
-   **[WorkCapacityLimit](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_workcapacitylimit.htm)**  
    Represents the capacity limit in a specific service territory for a workstream or for the whole service territory in a given period. This object is available in API version 59.0 and later.
-   **[WorkCapacityUsage](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_workcapacityusage.htm)**  
    Represents the capacity usage in a specific service territory for a workstream or for the whole service territory in a given period. This object is available in API version 59.0 and later.
-   **[WorkOrder\*](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_workorder.htm)**  
    Represents field service work to be performed for a customer. This object is available in API version 36.0 and later.
-   **[WorkOrderLineItem\*](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_workorderlineitem.htm)**  
    Represents a subtask on a work order in field service. This object is available in API version 36.0 and later.
-   **[WorkOrderLineItemStatus](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_workorderlineitemstatus.htm)**  
    Represents a possible status of a work order line item in field service.
-   **[WorkPlan](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_workplan.htm)**  
    Represents a work plan for a work order or work order line item. This object is available in API version 52.0 and later.
-   **[WorkPlanSelectionRule](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_workplanselectionrule.htm)**  
    Represents a rule that selects a work plan for a work order or work order line item. This object is available in API version 52.0 and later.
-   **[WorkPlanTemplate](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_workplantemplate.htm)**  
    Represents a template for a work plan. This object is available in API version 52.0 and later.
-   **[WorkPlanTemplateEntry](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_workplantemplateentry.htm)**  
    Represents an object that associates a work step template with a work plan template. This object is available in API version 52.0 and later.
-   **[WorkOrderStatus](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_workorderstatus.htm)**  
    Represents a possible status of a work order in field service.
-   **[WorkStep](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_workstep.htm)**  
    Represents a work step in a work plan. This object is available in API version 52.0 and later.
-   **[WorkStepStatus](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_workstepstatus.htm)**  
    Represents a picklist for a status category on a work step. This object is available in API version 52.0 and later.
-   **[WorkStepTemplate](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_worksteptemplate.htm)**  
    Represents a template for a work step. This object is available in API version 52.0 and later.
-   **[WorkType](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_worktype.htm)**  
    Represents a type of work to be performed in Field Service and Lightning Scheduler. Work types are templates that can be applied to work order or work order line items. This object is available in API version 38.0 and later.
-   **[WorkTypeGroup](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_worktypegroup.htm)**  
    Represents a grouping of work types used to categorize types of appointments available in Lightning Scheduler, or to define scheduling limits in Field Service. This object is available in API version 45.0 and later.
-   **[WorkTypeGroupMember](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_worktypegroupmember.htm)**  
    Represents the relationship between a work type and the work type group it belongs to. This object is available in API version 45.0 and later.