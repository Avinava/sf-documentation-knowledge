---
title: "Support Classes"
domain: apex-guide
topic: support-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.178Z
keywords: [Support, Classes, Working, Business, Hours, Cases, See]
---

# Support Classes

# Support Classes

Support classes allow you to interact with records commonly used by support centers, such as business hours and cases.

## Working with Business Hours

Business hours are used to specify the hours at which your customer support team operates, including multiple business hours in multiple time zones.

This example finds the time one business hour from startTime, returning the Datetime in the local time zone. It gets the default business hours by querying BusinessHours. Also, it calls the BusinessHours add method.

```

```

This example finds the time one business hour from startTime, returning the Datetime in GMT:

```

```

The next example finds the difference between startTime and nextTime:

```

```

## Working with Cases

Incoming and outgoing email messages can be associated with their corresponding cases using the Cases class getCaseIdFromEmailThreadId method. This method is used with Email-to-Case, which is an automated process that turns emails received from customers into customer service cases.

The following example uses an email thread ID to retrieve the related case ID.

```

```

#### See Also

-   [*Apex Reference Guide*: BusinessHours Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_businesshours.htm "Apex Reference Guide: BusinessHours Class - HTML (New Window)")
    
-   [*Apex Reference Guide*: Cases Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_system_cases.htm "Apex Reference Guide: Cases Class - HTML (New Window)")