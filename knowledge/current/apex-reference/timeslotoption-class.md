---
title: "TimeSlotOption Class"
domain: apex-reference
topic: timeslotoption-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.790Z
estimatedTokens: 1316
namespace: RichMessaging
keywords: [TimeSlotOption, Represents, complex, time, slot, option, type., used, provide, payloads, translated, structured, content, rich, messages., startTime, endTime, duration, durationValue, endTimeValue]
---

# TimeSlotOption Class

> Represents a complex time slot option type. This class is used to provide time option
    payloads that can be translated to structured content payloads in rich content
    messages.

**Namespace:** `RichMessaging`

# TimeSlotOption Class

Represents a complex time slot option type. This class is used to provide time option payloads that can be translated to structured content payloads in rich content messages.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

-   **[TimeSlotOption Constructors](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_constructors)**

-   **[TimeSlotOption Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_properties)**


## TimeSlotOption Constructors

The following are constructors for TimeSlotOption.

-   **[TimeSlotOption(startTime, endTime)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_ctor)**
    Creates a TimeSlotOption object with a start and end time.
-   **[TimeSlotOption(startTime, duration)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_ctor_2)**
    Creates a TimeSlotOption object with a start time and a duration.
-   **[TimeSlotOption()](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_ctor_3)**
    Creates a TimeSlotOption object.

### TimeSlotOption(startTime, endTime)

Creates a TimeSlotOption object with a start and end time.

#### Signature

public TimeSlotOption(Datetime startTime, Datetime endTime)

#### Parameters

startTime

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

Start time.

endTime

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

End time.

### TimeSlotOption(startTime, duration)

Creates a TimeSlotOption object with a start time and a duration.

#### Signature

public TimeSlotOption(Datetime startTime, Integer duration)

#### Parameters

startTime

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

Start time.

duration

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Duration in seconds.

### TimeSlotOption()

Creates a TimeSlotOption object.

#### Signature

public TimeSlotOption()

## TimeSlotOption Properties

The following are properties for TimeSlotOption.

-   **[duration](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_duration)**
    The duration in seconds.
-   **[durationValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_durationValue)**
    The duration in seconds. Enabled for Lightning components.
-   **[endTimeValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_endTimeValue)**
    The end time. Enabled for Lightning components.
-   **[startTime](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_startTime)**
    The start time.
-   **[startTimeValue](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_RichMessaging_TimeSlotOption_startTimeValue)**
    The start time. Enabled for Lightning components.

### duration

The duration in seconds.

#### Signature

public Integer duration {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### durationValue

The duration in seconds. Enabled for Lightning components.

#### Signature

public Integer durationValue {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### endTimeValue

The end time. Enabled for Lightning components.

#### Signature

public Datetime endTimeValue {get; set;}

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### startTime

The start time.

#### Signature

public Datetime startTime {get; set;}

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### startTimeValue

The start time. Enabled for Lightning components.

#### Signature

public Datetime startTimeValue {get; set;}

#### Property Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

## Related Topics

- RichMessaging (atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm)
- TimeSlotOption Constructors (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm)
- TimeSlotOption Properties (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm)
- TimeSlotOption(startTime, endTime) (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm)
- TimeSlotOption(startTime, duration) (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm)
- TimeSlotOption() (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- duration (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm)
- durationValue (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm)
