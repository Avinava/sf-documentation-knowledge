---
title: "RecurringPattern Class"
domain: field-service
topic: recurringpattern-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:55.269Z
estimatedTokens: 1150
namespace: FSL
keywords: [RecurringPattern, Represents, sharing, required, RecurringAppointmentsManager, pattern, appointments, recur, weekly., Usage, Example, Recurring, Pattern, DaysOfWeek, Frequency, FrequencyType, NumberOfVisits]
---

# RecurringPattern Class

> Represents a global sharing class that is a required parameter for
        RecurringAppointmentsManager to
      return a pattern of appointments that recur weekly.

**Namespace:** `FSL`

# RecurringPattern Class

Represents a global sharing class that is a required parameter for [RecurringAppointmentsManager](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringAppointmentsManager.htm#apex_class_FSL_RecurringAppointmentsManager "Represents the result of using the getRecurringAppointmentSlots method to return a pattern of appointments that recur weekly.") to return a pattern of appointments that recur weekly.

## Namespace

[FSL](atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm "The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and custom objects within the Field Service managed package. To allow access to namespace elements, assign the FSL custom permission set that's appropriate for the user's persona. For example, to allow a user to book appointments, assign the FSL Agent custom permission set.")

## Usage

RecurringPatternis a global sharing class that is a required parameter for [RecurringAppointmentsManager](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringAppointmentsManager.htm#apex_class_FSL_RecurringAppointmentsManager "Represents the result of using the getRecurringAppointmentSlots method to return a pattern of appointments that recur weekly."). All properties must be complete to call the RecurringAppointmentsManager API.

## Example

This example shows code for RecurringPattern and its properties.

```

```

-   **[Recurring Pattern Properties](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringPattern.htm#apex_FSL_RecurringPattern_properties)**


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

## Code Examples

```apex
global class RecurringPattern {
    global enum DaysOfWeek {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday}
    global enum FrequencyType {DAILY, WEEKLY, MONTHLY}
    global Set<DaysOfWeek> DaysOfWeek { get; set; }
    global FrequencyType FrequencyType { get; set; }
    global Integer Frequency { get; set; }
    global Integer NumberOfVisits { get; set; }
}
```

## Related Topics

- RecurringAppointmentsManager (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringAppointmentsManager.htm)
- FSL (atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm)
- Recurring Pattern Properties (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringPattern.htm)
- DaysOfWeek (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringPattern.htm)
- Frequency (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringPattern.htm)
- FrequencyType (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringPattern.htm)
- NumberOfVisits (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringPattern.htm)
