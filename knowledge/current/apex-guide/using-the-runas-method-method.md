---
title: "Using the  runAs Method Method"
domain: apex-guide
topic: using-the-runas-method-method
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.090Z
estimatedTokens: 1149
keywords: [runAs, Generally, Apex, code, runs, system, mode, where, object-level, field-level, permissions, current, user, aren’t, taken, account., System, write, test, change]
---

# Using the  runAs Method Method

> Generally, all Apex code runs in system mode, where the object-level and field-level
      permissions of the current user aren’t taken into account. With the System method runAs, you can write test methods that change the user
      context to an existing user or a new user. Then the user’s sharing rules and
      object-level and field-level permissions are enforced.

# Using the runAs Method Method

Generally, all Apex code runs in system mode, where the object-level and field-level permissions of the current user aren’t taken into account. With the System method runAs, you can write test methods that change the user context to an existing user or a new user. Then the user’s sharing rules and object-level and field-level permissions are enforced.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The user’s sharing rules and object-level and field-level permissions are enforced within a runAs block, regardless of the sharing mode (with sharing or without sharing) of the test class.

If a user-defined method is called in the runAs block, the sharing mode enforced is that of the class where the method is defined, not the test class.

You can use runAs only in test methods. The original system context is started again after all runAs test methods complete.

The runAs method ignores user license limits. You can create users with runAs even if your organization has no additional user licenses.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Every call to runAs counts against the total number of DML statements issued in the process.

In the following example, a new test user is created, then code is run as that user, with that user's record sharing access:

```

```

You can nest more than one runAs method. For example:

```

```

## Other Uses of runAs

You can also use the runAs method to perform mixed DML operations in your test by enclosing the DML operations within the runAs block. In this way, you bypass the mixed DML error that is otherwise returned when inserting or updating setup objects together with other sObjects. See [sObjects That Cannot Be Used Together in DML Operations](atlas.en-us.apexcode.meta/apexcode/apex_dml_non_mix_sobjects.htm#apex_dml_non_mix_sobjects "DML operations on certain sObjects, sometimes referred to as setup objects, can’t be mixed with DML on non-setup sObjects in the same transaction. This restriction exists because some sObjects affect the user’s access to records in the org. You must insert or update these types of sObjects in a different transaction to prevent operations from happening with incorrect access-level permissions. For example, you can’t update an account and a user role in a single transaction.").

There’s another overload of the runAs method (runAs(System.Version)) that takes a package version as an argument. This method causes the code of a specific version of a managed package to be used. For information on using the runAs method and specifying a package version context, see [Testing Behavior in Package Versions](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior_testing.htm "When you change the behavior in an Apex class or trigger for different package versions, it’s important to test that your code runs as expected in the different package versions. You can write test methods that change the package version context to a different package version by using the System.runAs method. You can only use System.runAs in a test method.").

-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_testing_tools_start_stop_test.htm "Using Limits, startTest , and , and stopTest")

#### See Also

-   [Enforce Sharing Rules](atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_rules.htm "Apex generally runs in system context, so the current user’s permissions and field-level security aren’t taken into account during code execution. You can use sharing rules to extend a user’s access to specific records, and then enforce sharing rules by using the with sharing keyword on a class declaration. If you declare a class with the without sharing keyword, then sharing rules aren’t enforced.")

-   [Enforce Object and Field Permissions](atlas.en-us.apexcode.meta/apexcode/apex_classes_perms_enforcing.htm "Apex generally runs in system context, so the current user's permissions and field-level security (FLS) aren’t taken into account during code execution. To enforce the FLS and object permissions of the current user, you can enforce user mode for database operations and SOQL queries. You can also check the current user's permissions for an object or a field, and then perform a specific DML operation or a query only if the user has sufficient permissions.")

-   [*Apex Reference Guide*: System.runAs(userSObject)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_runAs_2)

## Code Examples

```apex
@isTest
private class TestRunAs {
   public static testMethod void testRunAs() {
        // Setup test data
        // Create a unique UserName
        String uniqueUserName = 'standarduser' + DateTime.now().getTime() + '@testorg.com';
        // This code runs as the system user
        Profile p = [SELECT Id FROM Profile WHERE Name='Standard User'];
        User u = new User(Alias = 'standt', Email='standarduser@testorg.com',
        EmailEncodingKey='UTF-8', LastName='Testing', LanguageLocaleKey='en_US',
        LocaleSidKey='en_US', ProfileId = p.Id,
        TimeZoneSidKey='America/Los_Angeles',
         UserName=uniqueUserName);

        System.runAs(u) {
              // The following code runs as user 'u'
              System.debug('Current User: ' + UserInfo.getUserName());
              System.debug('Current Profile: ' + UserInfo.getProfileId());
          }
    }
}
```

```apex
@isTest
private class TestRunAs2 {

   public static testMethod void test2() {

      Profile p = [SELECT Id FROM Profile WHERE Name='Standard User'];
      User u2 = new User(Alias = 'newUser', Email='newuser@testorg.com',
         EmailEncodingKey='UTF-8', LastName='Testing', LanguageLocaleKey='en_US',
         LocaleSidKey='en_US', ProfileId = p.Id,
         TimeZoneSidKey='America/Los_Angeles', UserName='newuser@testorg.com');

      System.runAs(u2) {
         // The following code runs as user u2.
         System.debug('Current User: ' + UserInfo.getUserName());
         System.debug('Current Profile: ' + UserInfo.getProfileId());

         // The following code runs as user u3.
         User u3 = [SELECT Id FROM User WHERE UserName='newuser@testorg.com'];
         System.runAs(u3) {
            System.debug('Current User: ' + UserInfo.getUserName());
            System.debug('Current Profile: ' + UserInfo.getProfileId());
         }

         // Any additional code here would run as user u2.
      }
   }
}
```

## Related Topics

- sObjects That Cannot Be Used Together
               in DML Operations (atlas.en-us.apexcode.meta/apexcode/apex_dml_non_mix_sobjects.htm)
- Testing Behavior in Package
                  Versions (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior_testing.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_testing_tools_start_stop_test.htm)
- Enforce Sharing Rules (atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_rules.htm)
- Enforce Object and Field Permissions (atlas.en-us.apexcode.meta/apexcode/apex_classes_perms_enforcing.htm)
