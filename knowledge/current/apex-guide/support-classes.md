---
title: "Support Classes"
domain: apex-guide
topic: support-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.447Z
estimatedTokens: 394
keywords: [Support, Classes, classes, allow, interact, records, commonly, used, support, centers, such, business, hours, cases., Working, Business, Hours, Cases]
---

# Support Classes

> Support classes allow you to interact with records commonly used by support centers,
        such as business hours and cases.

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

## Code Examples

```
// Get the default business hours
BusinessHours bh = [SELECT Id FROM BusinessHours WHERE IsDefault=true];

// Create Datetime on May 28, 2008 at 1:06:08 AM in local timezone.
Datetime startTime = Datetime.newInstance(2008, 5, 28, 1, 6, 8);

// Find the time it will be one business hour from May 28, 2008, 1:06:08 AM using the
// default business hours.  The returned Datetime will be in the local timezone.
Datetime nextTime = BusinessHours.add(bh.id, startTime, 60 * 60 * 1000L);
```

```
// Get the default business hours
BusinessHours bh = [SELECT Id FROM BusinessHours WHERE IsDefault=true];

// Create Datetime on May 28, 2008 at 1:06:08 AM in local timezone.
Datetime startTime = Datetime.newInstance(2008, 5, 28, 1, 6, 8);

// Find the time it will be one business hour from May 28, 2008, 1:06:08 AM using the
// default business hours.  The returned Datetime will be in GMT.
Datetime nextTimeGmt = BusinessHours.addGmt(bh.id, startTime, 60 * 60 * 1000L);
```

```
// Get the default business hours
BusinessHours bh = [select id from businesshours where IsDefault=true];

// Create Datetime on May 28, 2008 at 1:06:08 AM in local timezone.
Datetime startTime = Datetime.newInstance(2008, 5, 28, 1, 6, 8);

// Create Datetime on May 28, 2008 at 4:06:08 PM in local timezone.
Datetime endTime = Datetime.newInstance(2008, 5, 28, 16, 6, 8);

// Find the number of business hours milliseconds between startTime and endTime as
// defined by the default business hours.  Will return a negative value if endTime is
// before startTime, 0 if equal, positive value otherwise.
Long diff = BusinessHours.diff(bh.id, startTime, endTime);
```

```apex
public class GetCaseIdController {

   public static void getCaseIdSample() {
        // Get email thread ID 
        String emailThreadId = '_00Dxx1gEW._500xxYktg';
        // Call Apex method to retrieve case ID from email thread ID 
        ID caseId = Cases.getCaseIdFromEmailThreadId(emailThreadId);
    
    }
}
```
