---
title: "Setting the Salesforce API Version for Classes and
        Triggers"
domain: apex-guide
topic: setting-the-salesforce-api-version-for-classes-and-triggers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.668Z
keywords: [Setting, Salesforce, API, Version, Classes, Triggers]
---

# Setting the Salesforce API Version for Classes and
        Triggers

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