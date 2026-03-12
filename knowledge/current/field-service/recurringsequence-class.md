---
title: "RecurringSequence Class"
domain: field-service
topic: recurringsequence-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.597Z
estimatedTokens: 238
namespace: FSL
keywords: [RecurringSequence, result, getRecurringAppointmentsSlots, pattern, appointments, recur, daily, weekly, monthly]
---

# RecurringSequence Class

> Represents the result of using the getRecurringAppointmentsSlots method
      to return a pattern of appointments that recur daily, weekly, or monthly.

**Namespace:** `FSL`

# RecurringSequence Class

Represents the result of using the [getRecurringAppointmentsSlots](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringAppointmentsManager.htm#apex_FSL_RecurringAppointmentsManager_getRecurringAppointmentsSlots "Returns a list of RecurringSequence appointments.") method to return a pattern of appointments that recur daily, weekly, or monthly.

## Namespace

[FSL](atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm "The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and custom objects within the Field Service managed package. To allow access to namespace elements, assign the FSL custom permission set that's appropriate for the user's persona. For example, to allow a user to book appointments, assign the FSL Agent custom permission set.")

## Example

This example shows the contents of a returned RecurringSequence object.

```

```

## Code Examples

```apex
global class RecurringAppointmentSlots {
    global ServiceAppointment rootServiceAppointment;
    global List<RecurringSequence> recurringSequences;
}

global class RecurringSequence {
    global List<EncapsulatedResource> participatingResources;
    global List<SchedulingOption> visitSchedulingOptions;
    global List<GradeSlotResult> averageObjectivesGrades;
    global Double sequenceScore;
    global List<TimeInterval> firstPatternOccurrence;
}
```

## Related Topics

- getRecurringAppointmentsSlots (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringAppointmentsManager.htm)
- FSL (atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm)
