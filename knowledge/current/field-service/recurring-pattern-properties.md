---
title: "Recurring Pattern Properties"
domain: field-service
topic: recurring-pattern-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.061Z
keywords: [Recurring, Pattern, Properties, list, days, used, book, appointments, which, derived, visiting, hours, record, associated, service, appointment.., DaysOfWeek, Signature, Property, Value]
---

# Recurring Pattern Properties

> The list of the days that can be used to book appointments, which
      can be derived from the visiting hours record associated with the service
    appointment..

## Recurring Pattern Properties

RecurringPattern contains the following properties.

-   **[DaysOfWeek](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringPattern.htm#apex_FSL_RecurringPattern_DaysOfWeek)**  
    The list of the days that can be used to book appointments, which can be derived from the visiting hours record associated with the service appointment..
-   **[Frequency](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringPattern.htm#apex_FSL_RecurringPattern_Frequency)**  
    The number of appointments to book inside the FrequencyType time frame provided.
-   **[FrequencyType](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringPattern.htm#apex_FSL_RecurringPattern_FrequencyType)**  
    The frequency of recurring appointments. Currently, only weekly frequency is supported.
-   **[NumberOfVisits](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringPattern.htm#apex_FSL_RecurringPattern_NumberOfVisits)**  
    Total number of appointments to schedule.

### DaysOfWeek

The list of the days that can be used to book appointments, which can be derived from the visiting hours record associated with the service appointment..

#### Signature

global Set<DaysOfWeek> DaysOfWeek { get; set; }

global enum<FSL.RecurringPattern> DaysOfWeek {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday}

#### Property Value

Type: [Set<enum>](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_enum.htm)

#### Usage

You can set DaysofWeek manually. Alternately, you can derive the days the customer is available from the visiting hours record associated with the work order that is associated with the service appointment passed into the API.

Only one visit should be scheduled per day. For example, if you are scheduling a total of six visits and set DaysOfWeek to Monday and Wednesday, the API doesn’t provide a response with more than one visit scheduled for Monday and one visit scheduled for Wednesday.

### Frequency

The number of appointments to book inside the FrequencyType time frame provided.

#### Signature

global Integer Frequency { get; set; }

#### Property Value

Type: [Integer](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_integer.htm)

### FrequencyType

The frequency of recurring appointments. Currently, only weekly frequency is supported.

#### Signature

global FrequencyType FrequencyType { get; set; }

#### Property Value

Type: [Enum](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_enum.htm)

### NumberOfVisits

Total number of appointments to schedule.

#### Signature

global Integer NumberOfVisits { get; set; }

#### Property Value

Type: [Integer](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_integer.htm)