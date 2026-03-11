---
title: "Permission Set Groups"
domain: apex-guide
topic: permission-set-groups
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.371Z
keywords: [Permission, Set, Groups, See]
---

# Permission Set Groups

# Permission Set Groups

To provide Apex test coverage for permission set groups, write tests using the calculatePermissionSetGroup() method in the System.Test class.

The [calculatePermissionSetGroup()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_System_Test_class.htm) method forces an immediate calculation of aggregate permissions for a specified permission set group. As the forced calculation counts against Apex CPU limits, and can require complex data setup, it’s a best practice to minimize the number of times you perform this operation. Recalculating complex permission set groups with a large number of included permission sets or overall enabled permissions can cause Apex test failures because Apex CPU limits are exceeded. Apex CPU limits can also be exceeded if the included permission sets in the permission set group aren’t licensed and the permission set group is assigned to many users.

Set this test to run once in a Test setup method, then reuse the data in subsequent tests.

```

```

#### See Also

-   [Salesforce Help: Permission Set Groups](https://help.salesforce.com/s/articleView?id=platform.perm_set_groups.htm&type=5&language=en_US "Salesforce Help: Permission Set Groups - HTML (New Window)")
    
-   [*Apex Reference Guide*: Test Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_test.htm "Apex Reference Guide: Test Class - HTML (New Window)")