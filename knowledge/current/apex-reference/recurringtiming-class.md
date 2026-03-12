---
title: "RecurringTiming Class"
domain: apex-reference
topic: recurringtiming-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.770Z
estimatedTokens: 1963
namespace: RichMessaging
keywords: [RecurringTiming, Represents, payment, occurs, regular, basis., startDate, endDate, intervalCount, intervalUnit, endDateValue, intervalCountValue, intervalUnitValue, startDateValue, timingType]
---

# RecurringTiming Class

> Represents a payment that occurs on a regular basis.

**Namespace:** `RichMessaging`

# RecurringTiming Class

Represents a payment that occurs on a regular basis.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

-   **[RecurringTiming Constructors](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_constructors)**

-   **[RecurringTiming Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_properties)**


## RecurringTiming Constructors

The following are constructors for RecurringTiming.

-   **[RecurringTiming(startDate, endDate, intervalCount, intervalUnit)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_ctor)**
    Creates a new instance of the RichMessaging.RecurringTiming class.
-   **[RecurringTiming()](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_ctor_2)**
    Creates a new instance of the RichMessaging.RecurringTiming class.

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

### RecurringTiming()

Creates a new instance of the RichMessaging.RecurringTiming class.

#### Signature

public RecurringTiming()

## RecurringTiming Properties

The following are properties for RecurringTiming.

-   **[endDate](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_endDate)**
    The end date. Invocable variable.
-   **[endDateValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_endDateValue)**
    The end date. Enabled for Lightning components.
-   **[intervalCount](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_intervalCount)**
    The number of interval units that make up the total payment interval. Invocable variable.
-   **[intervalCountValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_intervalCountValue)**
    The number of interval units that make up the total payment interval. Enabled for Lightning components.
-   **[intervalUnit](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_intervalUnit)**
    The amount of time—in calendar units, such as day, month, or year—that represents a fraction of the total payment interval. Invocable variable.
-   **[intervalUnitValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_intervalUnitValue)**
    The amount of time—in calendar units, such as day, month, or year—that represents a fraction of the total payment interval. Enabled for Lightning components.
-   **[startDate](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_startDate)**
    The start date. Invocable variable.
-   **[startDateValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_startDateValue)**
    The start date. Enabled for Lightning components.
-   **[timingType](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_RichMessaging_RecurringTiming_timingType)**
    Always returns “RecurringTiming”.

### endDate

The end date. Invocable variable.

#### Signature

public Date endDate {get; set;}

#### Property Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

### endDateValue

The end date. Enabled for Lightning components.

#### Signature

public Date endDateValue {get; set;}

#### Property Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

### intervalCount

The number of interval units that make up the total payment interval. Invocable variable.

#### Signature

public Integer intervalCount {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### intervalCountValue

The number of interval units that make up the total payment interval. Enabled for Lightning components.

#### Signature

public Integer intervalCountValue {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### intervalUnit

The amount of time—in calendar units, such as day, month, or year—that represents a fraction of the total payment interval. Invocable variable.

#### Signature

public String intervalUnit {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### intervalUnitValue

The amount of time—in calendar units, such as day, month, or year—that represents a fraction of the total payment interval. Enabled for Lightning components.

#### Signature

public RichMessaging.TimingIntervalUnit intervalUnitValue {get; set;}

#### Property Value

Type: [RichMessaging.TimingIntervalUnit](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_TimingIntervalUnit.htm "Represents an enumerated type that describes the timing interval.")

### startDate

The start date. Invocable variable.

#### Signature

public Date startDate {get; set;}

#### Property Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

### startDateValue

The start date. Enabled for Lightning components.

#### Signature

public Date startDateValue {get; set;}

#### Property Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

### timingType

Always returns “RecurringTiming”.

#### Signature

public String timingType {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- RichMessaging (atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm)
- RecurringTiming Constructors (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm)
- RecurringTiming Properties (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm)
- RecurringTiming(startDate, endDate, intervalCount, intervalUnit) (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm)
- RecurringTiming() (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm)
- Date (atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- RichMessaging.TimingIntervalUnit (atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_TimingIntervalUnit.htm)
- endDate (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm)
- endDateValue (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm)
