---
title: "FieldServiceSettings"
domain: field-service
topic: fieldservicesettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:55.749Z
estimatedTokens: 2743
keywords: [FieldServiceSettings, Represents, organization’s, Field, Service, settings., Version, Fields, ObjectMappingItem, ObjectMapping, ObjectMappingField, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest, File]
---

# FieldServiceSettings

> Represents an organization’s Field Service settings.

# FieldServiceSettings

Represents an organization’s Field Service settings.

To learn more about Field Service settings, see [Enable Field Service](https://help.salesforce.com/articleView?id=fs_enable.htm&language=en_US) in Salesforce Help.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for more details.

## Version

FieldServiceSettings is available in API version 40.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| apptAssistantExpiration | int | The expiration time of apptAssistantInfoUrl after which the customer stops seeing the mobile worker's location and estimated time of arrival. Available in API version 50.0 and later. |
| apptAssistantInfoUrl | string | The tracking URL that helps a customer see the mobile worker's estimated time of arrival and tracking information. Available in API version 50.0 and later. |
| apptAssistantRadiusUnitValue | ApptAssistantRadiusUnit (enumeration of type string) | The units for specifying the geofence radius. When the mobile worker enters this area, a Last Mile notification is automatically sent. Valid values are:KilometerMeterMileYardAvailable in API version 50.0 and later. |
| apptAssistantRadiusValue | int | The geofence radius from the service appointment's address used for sending a notification to the customer when the mobile worker approaches the address. Available in API version 50.0 and later. |
| apptAssistantStatus | string | The status on the service appointment used to trigger En Route notification. The value has to match one of the service appointment's Status field options. When the mobile worker selects this status on a service appointment, the customer receives the En Route notification with tracking details. Available in API version 50.0 and later. |
| canceledDefaultStatus | string | The default status value when a service appointment is canceled. Available in API version 65.0 and later. |
| cannotCompleteDefaultStatus | string | The default status value when a service appointment can't be completed. Available in API version 65.0 and later. |
| canPopulateGoogleAddress | boolean | Allows desktop and mobile to send geolocation and map data to Google and Apple. Available in API version 57.0 and later. |
| canSendAppCenterCrashReports | boolean | Allows Salesforce to send crash reports to Microsoft App Center. Available in API version 57.0 and later. |
| canStoreMobileAnalytics | boolean | Allows third parties to store mobile analytics. Available in API version 57.0 and later. |
| completedDefaultStatus | string | The default status value when a service appointment is completed. Available in API version 65.0 and later. |
| deepLinkPublicSecurityKey | string | Provides a public security key for users accessing a deep link action in the Field Service mobile app. Hide the redirection warning by configuring the deep link URL with a security key. The deep link URL then processes the security check. Available in API version 54.0 and later. |
| dispatchedDefaultStatus | string | The default status value when a service appointment is dispatched. Available in API version 65.0 and later. |
| doesAllowEditSaForCrew | boolean | Lets service crew members edit their service appointments.This setting applies only if doesShareSaWithAr is selected. For assigned resources of type Crew, crew members get Read-Write access to their service appointment and, if doesShareSaParentWoWithAr is selected, to their service appointments’ parent work orders. |
| doesShareSaParentWoWithAr | boolean | Shares service appointments’ parent work orders with their assigned resources.This setting applies only if doesShareSaWithAr is selected and sharing access for work orders is set to Private or Public Read Only. Technician assigned resources get Read-Write access to their work orders. For assigned resources of type Crew, the crew leader gets Read-Write access and crew members get Read access. If the service appointment’s parent is a work order line item, assigned resources get access to the associated work order. |
| doesShareSaWithAr | boolean | Shares dispatched service appointments with their assigned resources.This setting applies only if sharing access for service appointments is set to Private or Public Read Only. Technician assigned resources get Read-Write access to their service appointments. For assigned resources of type Crew, the crew leader gets Read-Write access and crew members get Read access. |
| enableDocumentBuilder | boolean | Enables access to Document Builder feature. |
| enableFloatingWorkOrder | boolean | Enables floating work orders for the org.Allows users to create work orders with a floating recurrence cadence based on the previous work order's completion. |
| enablePopulateWorkOrderAddress | boolean | Enables address to be populated when work orders are generated from Maintenance Plan. |
| enableWorkOrders | boolean | Enables Work Orders for the org.This setting allows users to use the Work Order object, whether or not Field Service is enabled. When Field Service is enabled, you can’t turn off Work Orders. |
| enableWorkPlansAutoGeneration | boolean | Allows work plans and their work steps to be generated automatically when a work order or a work order line item is newly created. The specific work plans and work steps to be generated depends on matching criteria specified in Work Plan Selection Rules. Available in API version 52.0 and later. |
| enableWorkStepManualStatusUpdate | boolean | Allows a work step status to be updated manually. A prompt suggests a status update that users can accept or defer. |
| fieldServiceNotificationsOrgPref | boolean | Turns on in-app notifications for the Salesforce mobile app and Lightning Experience users. Notifications are sent when any of the following actions occurs on a work order or work order line item that they own or follow:A text or file post is addedA tracked field is updatedThe record owner changesThe resource assignments change on a related service appointmentIf the option to track all related objects is selected in the feed tracking settings for work orders, users are also notified when child records of work orders—such as service appointments—are created or deleted. |
| fieldServiceOrgPref | boolean | Indicates whether Field Service is enabled. |
| inProgressDefaultStatus | string | The default status value when a service appointment is in progress. Available in API version 65.0 and later. |
| isGeoCodeSyncEnabled | boolean | Syncs the location of a Service Resource to an Inventory object. |
| isLocationHistoryEnabled | boolean | Tracks the location history of a Service Resource. |
| mobileFeedbackEmails | string | Stores an email address to which a feedback email is sent when users leave feedback from the Field Service mobile app. Available in API version 54.0 and later. |
| noneDefaultStatus | string | The default status value when a service appointment has no specific status. Available in API version 65.0 and later. |
| o2EngineEnabled | boolean | Enables Field Service Enhanced Scheduling and Optimization. The default value is false. Available in API version 55.0 and later. |
| objectMappingItem | ObjectMappingItem | Represents an organization's custom field mapping for Work Plan or Work Step generation. Custom Fields can be mapped from WorkPlanTemplate to WorkPlan, WorkStepTemplate to WorkStep, or WorkPlanTemplateEntry to WorkStep. Available in API version 52.0 and later. |
| optimizationServiceAccess | boolean | Allows the optimization service to access data in your Salesforce org. |
| scheduledDefaultStatus | string | The default status value when a service appointment is scheduled. Available in API version 65.0 and later. |
| serviceAppointmentsDueDateOffsetOrgValue | int | Indicates the number of days past the Created Date that the Due Date on auto-created service appointments should fall. Work types include an option to automatically add a service appointment to new work orders or work order line items using the work type. |
| workOrderDurationSource | WorkOrderDurationSource (enumeration of type string) | The source for the work order duration value. Possible values are:WorkTypeTotalFromWorkPlanCustomAvailable in API version 55.0 and later. |
| workOrderLineItemSearchFields | string | The work order line item fields that the search engine should scan to suggest knowledge articles on work order line items. |
| workOrderSearchFields | string | The work order fields that the search engine should scan to suggest knowledge articles on work orders. |

## ObjectMappingItem

Represents an organization's custom field mapping for Work Plan or Work Step generation. Custom Fields can be mapped from WorkPlanTemplate to WorkPlan, WorkStepTemplate to WorkStep, or WorkPlanTemplateEntry to WorkStep. Available in API version 52.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| mappingType | string | The type of object mapping. Valid values are:WorkPlans_WorkPlanTemplate_WorkPlan — Maps a WorkPlanTemplate to a WorkPlanWorkPlans_WorkStepTemplate_WorkStep — Maps a WorkStepTemplate to a WorkStepWorkPlans_WorkPlanTemplateEntry_WorkStep — Maps a WorkPlanTemplateEntry to a WorkStep |
| objectMapping | ObjectMapping | The object mapping details. |

## ObjectMapping

Represents a map of fields in the input object to fields in the output object.

| Field Name | Field Type | Description |
| --- | --- | --- |
| inputObject | string | Required. The name of the object type containing the source fields for mapping. Valid values are:WorkPlanTemplateWorkStepTemplateWorkPlanTemplateEntry |
| mappingFields | [ObjectMappingField] | Required. The mapping of source object fields to target object fields. |
| outputObject | string | Required. The name of the object type that receives data from the source fields. Valid values are:WorkPlanWorkStep |

## ObjectMappingField

A field name in the input object and the corresponding field name in the output object.

| Field Name | Field Type | Description |
| --- | --- | --- |
| inputField | string | Required. The name of a custom field supplying source data. This field is from the object specified in inputObject. |
| outputField | string | Required. The name of a custom field that receives data from the source field specified in inputField. This field is from the object specified in outputObject. |

## Declarative Metadata Sample Definition

This sample file shows a subset of the possible field service settings that you can customize.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see Settings. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<FieldServiceSettings xmlns="http://soap.sforce.com/2006/04/metadata">
   <doesAllowEditSaForCrew>false</doesAllowEditSaForCrew>
   <doesShareSaParentWoWithAr>false</doesShareSaParentWoWithAr>
   <doesShareSaWithAr>false</doesShareSaWithAr>
   <enableWorkOrders>false</enableWorkOrders>
   <enableWorkPlansAutoGeneration>true</enableWorkPlansAutoGeneration>
   <fieldServiceNotificationsOrgPref>false</fieldServiceNotificationsOrgPref>
   <fieldServiceOrgPref>true</fieldServiceOrgPref>
   <isGeoCodeSyncEnabled>false</isGeoCodeSyncEnabled>
   <isLocationHistoryEnabled>false</isLocationHistoryEnabled>
   <o2EngineEnabled>false</o2EngineEnabled>
   <objectMappingItem>
      <mappingType>WorkPlans_WorkPlanTemplate_WorkPlan</mappingType>
      <objectMapping>
         <inputObject>WorkPlanTemplate</inputObject>
         <mappingFields>
            <inputField>WorkPlanTemplate_CustomNumberField__c</inputField>
            <outputField>WorkPlan_CustomNumberField__c</outputField>
         </mappingFields>
         <mappingFields>
            <inputField>WorkPlanTemplate_CustomTextField__c</inputField>
            <outputField>WorkPlan_CustomPicklistField__c</outputField>
         </mappingFields>
         <outputObject>WorkPlan</outputObject>
      </objectMapping>
   </objectMappingItem>
   <objectMappingItem>
      <mappingType>WorkPlans_WorkStepTemplate_WorkStep</mappingType>
      <objectMapping>
         <inputObject>WorkStepTemplate</inputObject>
         <mappingFields>
            <inputField>WokStepTemplate_CustomNumberField__c</inputField>
            <outputField>WokStep_CustomNumberField__c</outputField>
         </mappingFields>
         <mappingFields>
            <inputField>WokStepTemplate_CustomTextField__c</inputField>
            <outputField>WokStep_CustomTextField__c</outputField>
         </mappingFields>
         <outputObject>WorkStep</outputObject>
      </objectMapping>
   </objectMappingItem>
   <objectMappingItem>
      <mappingType>WorkPlans_WorkPlanTemplateEntry_WorkStep</mappingType>
      <objectMapping>
         <inputObject>WorkPlanTemplateEntry</inputObject>
         <mappingFields>
            <inputField>WorkPlanTemplateEntry_CustomDateField__c</inputField>
            <outputField>WokStep_CustomDateField__c</outputField>
         </mappingFields>
         <outputObject>WorkStep</outputObject>
      </objectMapping>
   </objectMappingItem>
   <optimizationServiceAccess>false</optimizationServiceAccess>
   <serviceAppointmentsDueDateOffsetOrgValue>7</serviceAppointmentsDueDateOffsetOrgValue>
   <workOrderLineItemSearchFields>Subject</workOrderLineItemSearchFields>
   <workOrderSearchFields>Subject</workOrderSearchFields>
</FieldServiceSettings>
```
