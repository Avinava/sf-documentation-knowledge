---
title: "Time Methods"
domain: apex-reference
topic: time-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.977Z
keywords: [Time, Methods, Adds, specified, number, hours, Time., addHours, additionalHours, Signature, Parameters, Return, Value, Example, addMilliseconds, additionalMilliseconds, addMinutes, additionalMinutes, addSeconds, additionalSeconds]
---

# Time Methods

> Adds the specified number of hours to a Time.

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