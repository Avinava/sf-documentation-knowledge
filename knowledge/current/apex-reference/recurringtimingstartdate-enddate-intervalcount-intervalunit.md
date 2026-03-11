---
title: "RecurringTiming(startDate, endDate, intervalCount, intervalUnit)"
domain: apex-reference
topic: recurringtimingstartdate-enddate-intervalcount-intervalunit
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.186Z
keywords: [RecurringTiming, startDate, endDate, intervalCount, intervalUnit, Creates, new, instance, RichMessaging.RecurringTiming, class., Signature, Parameters]
---

# RecurringTiming(startDate, endDate, intervalCount, intervalUnit)

> Creates a new instance of the RichMessaging.RecurringTiming class.

### RecurringTiming(startDate, endDate, intervalCount, intervalUnit)

Creates a new instance of the RichMessaging.RecurringTiming class.

#### Signature

public RecurringTiming(Date startDate, Date endDate, Integer intervalCount, RichMessaging.TimingIntervalUnit intervalUnit)

#### Parameters

startDate

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

The start date. Invocable variable.

endDate

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

The end date. Invocable variable.

intervalCount

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The number of interval units that make up the total payment interval. Invocable variable.

intervalUnit

Type: [RichMessaging.TimingIntervalUnit](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_TimingIntervalUnit.htm "Represents an enumerated type that describes the timing interval.")

The amount of time—in calendar units, such as day, month, or year—that represents a fraction of the total payment interval. Invocable variable.