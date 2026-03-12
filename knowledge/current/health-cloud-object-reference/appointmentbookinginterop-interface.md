---
title: "AppointmentBookingInterop Interface"
domain: health-cloud-object-reference
topic: appointmentbookinginterop-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.663Z
estimatedTokens: 2278
keywords: [AppointmentBookingInterop, Apex, implementation, healthcare, appointment, availability, booking, Usage, bookAppointment, var1, cancelAppointment, findSlots, getSlotStatus]
---

# AppointmentBookingInterop Interface

> Contains default Apex implementation for healthcare appointment
      availability and booking.

# AppointmentBookingInterop Interface

Contains default Apex implementation for healthcare appointment availability and booking.

## Namespace

[healthcloudext](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

## Usage

Managing appointments from Health Cloud requires identifying the source system's time slot support; implementing the Health Cloud global AppointmentBookingInterop interface; transforming the input request to fit the source electronic health records (EHR) system; routing the request to the EHR system; and getting the appointment information back from an external appointment booking system.

The external appointment management system is commonly part of a larger electronic health records (EHR) system. The integration between Health Cloud and the EHR can be direct or via integration middleware such as Mulesoft.

The OrgPermissions.HealthCloud permission must be enabled in your Salesforce org to access the Health Cloud AppointmentBookingInterop interface and its methods.

You can use the default implementation AppointmentBookingInteropFhirAdapter provided by Health Cloud to make a call out to an external scheduling system of truth for appointment availability and booking. All communications with the external system use the FHIR 4 standard.

If implementing the default Health Cloud global interface isn’t right for your context, you can provide your own Apex class and integrate with your appointment management system in your own way. An ISV or a Salesforce partner with a Health Cloud license can distribute customized Apex code to your organization using packages.

To include more data in the response or change the structure of the response, create a custom version of the findSlots method. Your custom method can prepare the data in the response or map data to the list of time slots expected. Your custom method must use the same signature as the original method. After you create your custom findSlots method, incorporate it into a custom implementation of the AppointmentBookingInterop interface.

To have Intelligent Appointment Manager use your custom implementation of the AppointmentBookingInterop interface, update the active version of your Intelligent Appointment Management Configuration. From Setup, in the Intelligent Appointment Management Configuration, for Apex Class, enter your custom Apex class. If left blank, Intelligent Appointment Manager uses the default Apex class.

Use Salesforce platform Named Credentials to configure the class name and authentication for Apex callouts. Then, map the Name Credential name in the AppointmentBookingConfig setup object. The Apex delegator class uses the setup object to invoke the corresponding implementation between the default implementation or your own provided Apex implementation. See Named Credentials as Callout Endpoints in the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts_named_credentials.htm).

-   **[AppointmentBookingInterop Methods](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_AppointmentBookingInterop.htm#apex_healthcloudext_AppointmentBookingInterop_methods)**

-   **[AppointmentBookingInterop Example Implementation](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_AppointmentBookingInterop.htm#apex_interface_healthcloudext_AppointmentBookingInterop_Example)**
    This is an example implementation of the default class AppointmentBookingInteropFhirAdapter that implements the healthcloudext.AppointmentBookingInterop interface.

## AppointmentBookingInterop Methods

The following are methods for AppointmentBookingInterop.

-   **[bookAppointment(var1)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_AppointmentBookingInterop.htm#apex_healthcloudext_AppointmentBookingInterop_bookAppointment)**
    Creates the healthcare appointment in the external scheduling system.
-   **[cancelAppointment(var1)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_AppointmentBookingInterop.htm#apex_healthcloudext_AppointmentBookingInterop_cancelAppointment)**
    Cancels the booking appointment in the external scheduling system.
-   **[findSlots(var1)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_AppointmentBookingInterop.htm#apex_healthcloudext_AppointmentBookingInterop_findSlots)**
    Finds the available time slots for providers who match the patient’s needs.
-   **[getSlotStatus(var1)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_AppointmentBookingInterop.htm#apex_healthcloudext_AppointmentBookingInterop_getSlotStatus)**
    Retrieves the status of the time period slot that’s assigned to the appointment.

### bookAppointment(var1)

Creates the healthcare appointment in the external scheduling system.

#### Signature

public healthcloudext.BookAppointmentResponse bookAppointment(healthcloudext.BookAppointmentRequest var1)

```

```

#### Parameters

var1

Type: [healthcloudext.BookAppointmentRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm#apex_class_healthcloudext_BookAppointmentRequest "Contains set of options to book a healthcare appointment.")

#### Return Value

Type: [healthcloudext.BookAppointmentResponse](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm#apex_class_healthcloudext_BookAppointmentResponse "Represents the appointment booking details from the external scheduling system.")

### cancelAppointment(var1)

Cancels the booking appointment in the external scheduling system.

#### Signature

public healthcloudext.CancelAppointmentResponse cancelAppointment(healthcloudext.CancelAppointmentRequest var1)

```

```

#### Parameters

var1

Type: [healthcloudext.CancelAppointmentRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm#apex_class_healthcloudext_CancelAppointmentRequest "Contains set of options to cancel the booked appointment.")

#### Return Value

Type: [healthcloudext.CancelAppointmentResponse](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentResponse.htm#apex_class_healthcloudext_CancelAppointmentResponse "Represents the appointment cancellation details from the external scheduling system.")

### findSlots(var1)

Finds the available time slots for providers who match the patient’s needs.

The findSlots method accepts FindSlotsRequest as a parameter. The FindSlotsRequest class extends the AppointmentBase class and inherits its properties, including details about the care provider such as code sets, identifiers, and the source system used for scheduling.

#### Signature

public Map<String,List<healthcloudext.Slot>> findSlots(healthcloudext.FindSlotsRequest var1)

```

```

#### Parameters

var1

Type: [healthcloudext.FindSlotsRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_FindSlotsRequest.htm#apex_class_healthcloudext_FindSlotsRequest "Contains set of options to find available time slots for providers who match the patient’s needs. This class extends the AppointmentBase class and inherits its properties.")

#### Return Value

Type: Map<String,List<[healthcloudext.Slot](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_Slot.htm#apex_class_healthcloudext_Slot "Represents the time period slot details for the appointment.")\>>

### getSlotStatus(var1)

Retrieves the status of the time period slot that’s assigned to the appointment.

#### Signature

public healthcloudext.Slot getSlotStatus(healthcloudext.GetSlotStatusRequest var1)

```

```

#### Parameters

var1

Type: [healthcloudext.GetSlotStatusRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_GetSlotStatusRequest.htm#apex_class_healthcloudext_GetSlotStatusRequest "Contains set of options to retrieve the slot status.")

#### Return Value

Type: [healthcloudext.Slot](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_Slot.htm#apex_class_healthcloudext_Slot "Represents the time period slot details for the appointment.")

## AppointmentBookingInterop Example Implementation

This is an example implementation of the default class AppointmentBookingInteropFhirAdapter that implements the healthcloudext.AppointmentBookingInterop interface.

```

```

## Code Examples

```
healthcloudext.AppointmentBookingInterop, bookAppointment, [healthcloudext.BookAppointmentRequest], healthcloudext.BookAppointmentResponse
```

```
healthcloudext.AppointmentBookingInterop, cancelAppointment, [healthcloudext.CancelAppointmentRequest], healthcloudext.CancelAppointmentResponse
```

```apex
healthcloudext.AppointmentBookingInterop, findSlots, [healthcloudext.FindSlotsRequest], Map<String,List<healthcloudext.Slot>>
```

```
healthcloudext.AppointmentBookingInterop, getSlotStatus, [healthcloudext.GetSlotStatusRequest], healthcloudext.Slot
```

```apex
global class AppointmentBookingInteropFhirAdapter implement healthcloudext.AppointmentBookingInterop{
   static final String DEFAULT_ERROR_MESSAGE = 'Error during callout to the external system';
   static final String DEFAULT_ERROR_CODE = '500';

   /*
      @Method Name: findSlots
      @Param: request Type: healthcloudext.FindSlotsRequest
      @Desc: FindSlot implementation
   */
   global Map<String,List<Slot>> findSlots(FindSlotsRequest request)

   /*
      @Method Name: bookAppointment
      @Param: request Type: healthcloudext.BookAppointmentRequest
      @Desc: Book Appointment implementation
   */
   global BookAppointmentResponse bookAppointment(BookAppointmentRequest request)

   /*
   @Method Name: getSlotStatus
   @Param: request Type: healthcloudext.GetSlotStatusRequest
   @Desc: getSlotStatus implementation
   */
   global Slot getSlotStatus(GetSlotStatusRequest request)

   /*
   @Method Name: cancelAppointment
   @Param: request Type: healthcloudext.CancelAppointmentRequest
   @Desc: Cancel Appointment implementation
   */
   global CancelAppointmentResponse cancelAppointment(CancelAppointmentRequest request)
}
```

## Related Topics

- healthcloudext (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm)
- AppointmentBookingInterop Methods (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_AppointmentBookingInterop.htm)
- AppointmentBookingInterop Example Implementation (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_AppointmentBookingInterop.htm)
- bookAppointment(var1) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_AppointmentBookingInterop.htm)
- cancelAppointment(var1) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_AppointmentBookingInterop.htm)
- findSlots(var1) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_AppointmentBookingInterop.htm)
- getSlotStatus(var1) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_AppointmentBookingInterop.htm)
- healthcloudext.BookAppointmentRequest (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm)
- healthcloudext.BookAppointmentResponse (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm)
- healthcloudext.CancelAppointmentRequest (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm)
