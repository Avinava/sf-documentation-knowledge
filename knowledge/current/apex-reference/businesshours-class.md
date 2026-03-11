---
title: "BusinessHours Class"
domain: apex-reference
topic: businesshours-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.159Z
keywords: [BusinessHours, Class, Starting, specified, target, date, returns, next, business, hours, open., falls, within, returned., nextStartDate, businessHoursId, targetDate, Signature, Parameters, Return]
---

# BusinessHours Class

> Starting from the specified target date, returns the next
date when business hours are open. If the specified target date falls
within business hours, this target date is returned.

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