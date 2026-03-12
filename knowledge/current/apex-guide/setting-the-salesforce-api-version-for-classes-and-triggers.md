---
title: "Setting the Salesforce API Version for Classes and
        Triggers"
domain: apex-guide
topic: setting-the-salesforce-api-version-for-classes-and-triggers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.733Z
estimatedTokens: 239
keywords: [Setting, Salesforce, API, Version, Classes, Triggers, set, Apex, version, trigger]
---

# Setting the Salesforce API Version for Classes and
        Triggers

> To set the Salesforce API and Apex version for a class or trigger:

# Setting the Salesforce API Version for Classes and Triggers

To set the Salesforce API and Apex version for a class or trigger:

1.  Edit either a class or trigger, and click **Version Settings**.
2.  Select the Version of the Salesforce API. This version is also the version of Apex associated with the class or trigger.
3.  Click **Save**.

If you pass an object as a parameter in a method call from one Apex class, C1, to another class, C2, and C2 has different fields exposed due to the Salesforce API version setting, the fields in the objects are controlled by the version settings of C2.

In this example, the Categories field is set to null after calling the insertIdea method in class C2 from a method in the test class C1, because the Categories field isn’t available in version 13.0 of the API.

The first class is saved using Salesforce API version 13.0:

```

```

The following class is saved using Salesforce API version 16.0:

```

```

## Code Examples

```apex
// This class is saved using Salesforce API version 13.0
// Version 13.0 does not include the Idea.categories field
global class C2
{
    global Idea insertIdea(Idea a) {
        insert a; // category field set to null on insert
        
        // retrieve the new idea
        Idea insertedIdea = [SELECT title FROM Idea WHERE Id =:a.Id];
        
        return insertedIdea;
    }
}
```

```apex
@IsTest
// This class is bound to API version 16.0 by Version Settings
private class C1
{  
    static testMethod void testC2Method() {
        Idea i = new Idea();
        i.CommunityId = '09aD000000004YCIAY';
        i.Title = 'Testing Version Settings';
        i.Body = 'Categories field is included in API version 16.0';
        i.Categories = 'test';

        C2 c2 = new C2();
        Idea returnedIdea = c2.insertIdea(i);
        // retrieve the new idea
        Idea ideaMoreFields = [SELECT title, categories FROM Idea
             WHERE Id = :returnedIdea.Id];

        // assert that the categories field from the object created
        // in this class is not null
        System.assert(i.Categories != null);
        // assert that the categories field created in C2 is null
        System.assert(ideaMoreFields.Categories == null);
    }
}
```
