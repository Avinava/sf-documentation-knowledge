---
title: "BusinessHours Class"
domain: apex-reference
topic: businesshours-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.385Z
estimatedTokens: 1817
namespace: System
keywords: [BusinessHours, set, business, hours, which, customer, support, team, operates., add, businessHoursId, startDate, intervalMilliseconds, addGmt, diff, endDate, isWithin, targetDate, Example, nextStartDate]
---

# BusinessHours Class

> Use the BusinessHours methods to set the business hours at which your customer support
team operates.

**Namespace:** `System`

# BusinessHours Class

Use the BusinessHours methods to set the business hours at which your customer support team operates.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## BusinessHours Methods

The following are methods for BusinessHours. All methods are static.

-   **[add(businessHoursId, startDate, intervalMilliseconds)](atlas.en-us.apexref.meta/apexref/apex_classes_businesshours.htm#apex_System_BusinessHours_add)**
    Adds an interval of time from a start Datetime traversing business hours only. Returns the result Datetime in the local time zone.
-   **[addGmt(businessHoursId, startDate, intervalMilliseconds)](atlas.en-us.apexref.meta/apexref/apex_classes_businesshours.htm#apex_System_BusinessHours_addGmt)**
    Adds an interval of milliseconds from a start Datetime traversing business hours only. Returns the result Datetime in GMT.
-   **[diff(businessHoursId, startDate, endDate)](atlas.en-us.apexref.meta/apexref/apex_classes_businesshours.htm#apex_System_BusinessHours_diff)**
    Returns the difference in milliseconds between a start and end Datetime based on a specific set of business hours.
-   **[isWithin(businessHoursId, targetDate)](atlas.en-us.apexref.meta/apexref/apex_classes_businesshours.htm#apex_System_BusinessHours_isWithin)**
    Returns true if the specified target date occurs within business hours. Holidays are included in the calculation.
-   **[nextStartDate(businessHoursId, targetDate)](atlas.en-us.apexref.meta/apexref/apex_classes_businesshours.htm#apex_System_BusinessHours_nextStartDate)**
    Starting from the specified target date, returns the next date when business hours are open. If the specified target date falls within business hours, this target date is returned.

### add(businessHoursId, startDate, intervalMilliseconds)

Adds an interval of time from a start Datetime traversing business hours only. Returns the result Datetime in the local time zone.

#### Signature

public static Datetime add(String businessHoursId, Datetime startDate, Long intervalMilliseconds)

#### Parameters

businessHoursId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

startDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

intervalMilliseconds

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

Interval value should be provided in milliseconds, however time precision smaller than one minute is ignored.

#### Return Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### addGmt(businessHoursId, startDate, intervalMilliseconds)

Adds an interval of milliseconds from a start Datetime traversing business hours only. Returns the result Datetime in GMT.

#### Signature

public static Datetime addGmt(String businessHoursId, Datetime startDate, Long intervalMilliseconds)

#### Parameters

businessHoursId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

startDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

intervalMilliseconds

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Return Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### diff(businessHoursId, startDate, endDate)

Returns the difference in milliseconds between a start and end Datetime based on a specific set of business hours.

#### Signature

public static Long diff(String businessHoursId, Datetime startDate, Datetime endDate)

#### Parameters

businessHoursId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

startDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

endDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### isWithin(businessHoursId, targetDate)

Returns true if the specified target date occurs within business hours. Holidays are included in the calculation.

#### Signature

public static Boolean isWithin(String businessHoursId, Datetime targetDate)

#### Parameters

businessHoursId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The business hours ID.

targetDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The date to verify.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

The following example finds whether a given time is within the default business hours.

```

```

### nextStartDate(businessHoursId, targetDate)

Starting from the specified target date, returns the next date when business hours are open. If the specified target date falls within business hours, this target date is returned.

#### Signature

public static Datetime nextStartDate(String businessHoursId, Datetime targetDate)

#### Parameters

businessHoursId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The business hours ID.

targetDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The date used as a start date to obtain the next date.

#### Return Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

The following example finds the next date starting from the target date when business hours reopens. If the target date is within the given business hours, the target date is returned. The returned time is in the local time zone.

```

```

## Code Examples

```
// Get the default business hours
BusinessHours bh = [SELECT Id FROM BusinessHours WHERE IsDefault=true];

// Create Datetime on May 28, 2013 at 1:06:08 AM in the local timezone.
Datetime targetTime = Datetime.newInstance(2013, 5, 28, 1, 6, 8);

// Find whether the time is within the default business hours
Boolean isWithin= BusinessHours.isWithin(bh.id, targetTime);
```

```
// Get the default business hours
BusinessHours bh = [SELECT Id FROM BusinessHours WHERE IsDefault=true];

// Create Datetime on May 28, 2013 at 1:06:08 AM in the local timezone.
Datetime targetTime = Datetime.newInstance(2013, 5, 28, 1, 6, 8);
// Starting from the targetTime, find the next date when business hours reopens. Return the target time.

// if it is within the business hours. The returned time will be in the local time zone
Datetime nextStart = BusinessHours.nextStartDate(bh.id, targetTime);
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- add(businessHoursId, startDate, intervalMilliseconds) (atlas.en-us.apexref.meta/apexref/apex_classes_businesshours.htm)
- addGmt(businessHoursId, startDate, intervalMilliseconds) (atlas.en-us.apexref.meta/apexref/apex_classes_businesshours.htm)
- diff(businessHoursId, startDate, endDate) (atlas.en-us.apexref.meta/apexref/apex_classes_businesshours.htm)
- isWithin(businessHoursId, targetDate) (atlas.en-us.apexref.meta/apexref/apex_classes_businesshours.htm)
- nextStartDate(businessHoursId, targetDate) (atlas.en-us.apexref.meta/apexref/apex_classes_businesshours.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- Long (atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
