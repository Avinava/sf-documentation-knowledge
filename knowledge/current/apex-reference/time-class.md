---
title: "Time Class"
domain: apex-reference
topic: time-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:31.478Z
estimatedTokens: 1630
namespace: System
keywords: [Time, primitive, data, Usage, addHours, additionalHours, addMilliseconds, additionalMilliseconds, addMinutes, additionalMinutes, addSeconds, additionalSeconds, hour, millisecond, minute]
---

# Time Class

> Contains methods for the Time primitive data type.

**Namespace:** `System`

# Time Class

Contains methods for the Time primitive data type.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

For more information on time, see [Time Data Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_primitives.htm).

## Time Methods

The following are methods for Time.

-   **[addHours(additionalHours)](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_System_Time_addHours)**
    Adds the specified number of hours to a Time.
-   **[addMilliseconds(additionalMilliseconds)](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_System_Time_addMilliseconds)**
    Adds the specified number of milliseconds to a Time.
-   **[addMinutes(additionalMinutes)](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_System_Time_addMinutes)**
    Adds the specified number of minutes to a Time.
-   **[addSeconds(additionalSeconds)](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_System_Time_addSeconds)**
    Adds the specified number of seconds to a Time.
-   **[hour()](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_System_Time_hour)**
    Returns the hour component of a Time.
-   **[millisecond()](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_System_Time_millisecond)**
    Returns the millisecond component of a Time.
-   **[minute()](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_System_Time_minute)**
    Returns the minute component of a Time.
-   **[newInstance(hour, minutes, seconds, milliseconds)](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_System_Time_newInstance)**
    Constructs a Time from Integer representations of the specified hour, minutes, seconds, and milliseconds. (UTC is assumed.)
-   **[second()](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_System_Time_second)**
    Returns the second component of a Time.

### addHours(additionalHours)

Adds the specified number of hours to a Time.

#### Signature

public Time addHours(Integer additionalHours)

#### Parameters

additionalHours

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Time](#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Example

```

```

### addMilliseconds(additionalMilliseconds)

Adds the specified number of milliseconds to a Time.

#### Signature

public Time addMilliseconds(Integer additionalMilliseconds)

#### Parameters

additionalMilliseconds

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Time](#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Example

```

```

### addMinutes(additionalMinutes)

Adds the specified number of minutes to a Time.

#### Signature

public Time addMinutes(Integer additionalMinutes)

#### Parameters

additionalMinutes

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Time](#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Example

```

```

### addSeconds(additionalSeconds)

Adds the specified number of seconds to a Time.

#### Signature

public Time addSeconds(Integer additionalSeconds)

#### Parameters

additionalSeconds

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Time](#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Example

```

```

### hour()

Returns the hour component of a Time.

#### Signature

public Integer hour()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### millisecond()

Returns the millisecond component of a Time.

#### Signature

public Integer millisecond()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### minute()

Returns the minute component of a Time.

#### Signature

public Integer minute()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### newInstance(hour, minutes, seconds, milliseconds)

Constructs a Time from Integer representations of the specified hour, minutes, seconds, and milliseconds. (UTC is assumed.)

#### Signature

public static Time newInstance(Integer hour, Integer minutes, Integer seconds, Integer milliseconds)

#### Parameters

hour

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

minutes

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

seconds

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

milliseconds

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Time](#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Example

The following example creates a time of 18:30:2:20 (UTC).

```

```

### second()

Returns the second component of a Time.

#### Signature

public Integer second()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

## Code Examples

```apex
Time myTime = Time.newInstance(1, 2, 3, 4);
Time expected = Time.newInstance(4, 2, 3, 4);
System.assertEquals(expected, myTime.addHours(3));
```

```apex
Time myTime = Time.newInstance(1, 2, 3, 0);
Time expected = Time.newInstance(1, 2, 4, 400);
System.assertEquals(expected, myTime.addMilliseconds(1400));
```

```apex
Time myTime = Time.newInstance(18, 30, 2, 20);
Integer myMinutes = myTime.minute();
myMinutes = myMinutes + 5;
System.assertEquals(myMinutes, 35);
```

```apex
Time myTime = Time.newInstance(1, 2, 55, 0);
Time expected = Time.newInstance(1, 3, 5, 0);
System.assertEquals(expected, myTime.addSeconds(10));
```

```apex
Time myTime = Time.newInstance(18, 30, 2, 20);
myTime = myTime.addHours(2);
Integer myHour = myTime.hour();
System.assertEquals(myHour, 20);
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- addHours(additionalHours) (atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm)
- addMilliseconds(additionalMilliseconds) (atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm)
- addMinutes(additionalMinutes) (atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm)
- addSeconds(additionalSeconds) (atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm)
- hour() (atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm)
- millisecond() (atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm)
- minute() (atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm)
- newInstance(hour, minutes, seconds, milliseconds) (atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm)
- second() (atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm)
