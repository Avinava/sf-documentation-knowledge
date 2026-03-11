---
title: "createServiceAppointment(createServiceAppointmentInput)"
domain: apex-reference
topic: createserviceappointmentcreateserviceappointmentinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.162Z
keywords: [createServiceAppointment, createServiceAppointmentInput, Create, service, appointment., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, Example, See]
---

# createServiceAppointment(createServiceAppointmentInput)

> Create a service appointment.

### createServiceAppointment(createServiceAppointmentInput)

Create a service appointment.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ServiceAppointmentOutput createServiceAppointment(ConnectApi.CreateServiceAppointmentInput createServiceAppointmentInput)

#### Parameters

createServiceAppointmentInput

Type: [ConnectApi.CreateServiceAppointmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_create_service_appointment.htm "Contains information to create a service appointment.")

Input parameters to create a service appointment.

#### Return Value

Type: [ConnectApi.ServiceAppointmentOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_service_appointment_output.htm "Output of the create service appointment request.")

#### Usage

Considerations for using engagement channel types with the service-appointments resource:

-   Enable **Schedule Appointments Using Engagement Channels** in Salesforce Scheduler Settings in your Salesforce org.
-   When you create or modify appointments, shifts must be defined in the scheduling policy. For more information on setting up shifts in the scheduling policy, see [Define Shift Rules in Scheduling Policy](https://help.salesforce.com/s/articleView?id=platform.ls_use_shifts_to_determine_time_slots.htm&type=5&language=en_US "HTML (New Window)").
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)
    
    #### Note
    
    Engagement channel types are not supported with operating hours rules in the scheduling policy.
    
-   When you use engagement channel type and shifts to create a service appointment, Salesforce Scheduler considers the default value for the Appointment Type (if not specified). However, Salesforce Scheduler only considers the engagement channel type and Appointment Type is ignored.

#### Example

For an account (existing user):

```

```

For a lead (authenticated guest user):

```

```

#### See Also

-   [Service Appointments](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_service_appointments.htm "Service Appointments - HTML (New Window)")