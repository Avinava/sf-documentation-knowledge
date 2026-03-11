---
title: "Add a Test Class"
domain: apex-guide
topic: add-a-test-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.494Z
keywords: [Add, Test, Class, Note, See]
---

# Add a Test Class

# Add a Test Class

In this step, you add a test class with one test method. You also run the test and verify code coverage. The test method exercises and validates the code in the trigger and class. Also, it enables you to reach 100% code coverage for the trigger and class.

Prerequisites:

-   A Salesforce account in a sandbox Professional, Enterprise, Performance, or Unlimited Edition org, or an account in a Developer org.
-   [The HelloWorldTrigger Apex trigger.](atlas.en-us.apexcode.meta/apexcode/apex_qs_trigger.htm "In this step, you create a trigger for the Book__c custom object that calls the applyDiscount method of the MyHelloWorld class that you created in the previous step.")

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Testing is an important part of the development process. Before you can deploy Apex or package it for AppExchange, the following must be true.

-   Unit tests must cover at least 75% of your Apex code, and all of those tests must complete successfully.
    
    Note the following.
    
    -   When deploying Apex to a production organization, each unit test in your organization namespace is executed by default.
    -   Calls to System.debug aren’t counted as part of Apex code coverage.
    -   Test methods and test classes aren’t counted as part of Apex code coverage.
    -   While only 75% of your Apex code must be covered by tests, don’t focus on the percentage of code that is covered. Instead, make sure that every use case of your application is covered, including positive and negative cases, as well as bulk and single records. This approach ensures that 75% or more of your code is covered by unit tests.
-   Every trigger must have some test coverage.
-   All classes and triggers must compile successfully.

1.  From Setup, enter Apex Classes in the Quick Find box, then select **Apex Classes** and click **New**.
2.  In the class editor, add this test class definition, and then click **Save**.
    
    ```
    
    ```
    
    This class is defined using the @IsTest annotation. Classes defined this way should only contain test methods and any methods required to support those test methods. One advantage to creating a separate class for testing is that classes defined with @IsTest don’t count against your org’s limit of 6 MB of Apex code. You can also add the @IsTest annotation to individual methods. For more information, see [@IsTest Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm) and [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").
    
    The method validateHelloWorld is defined using the @IsTest annotation. This annotation means that if changes are made to the database, they’re rolled back when execution completes. You don’t have to delete any test data created in the test method.
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)
    
    #### Note
    
    The @IsTest annotation on methods is equivalent to the testMethod keyword. As best practice, Salesforce recommends that you use @IsTest rather than testMethod. The testMethod keyword may be versioned out in a future release.
    
    First, the test method creates a book and inserts it into the database temporarily. The System.debug statement writes the value of the price in the debug log.
    
    ```
    
    ```
    
    After the book is inserted, the code retrieves the newly inserted book, using the ID that was initially assigned to the book when it was inserted. The System.debug statement then logs the new price that the trigger modified.
    
    ```
    
    ```
    
    When the MyHelloWorld class runs, it updates the Price\_\_c field and reduces its value by 10%. The following test verifies that the method applyDiscount ran and produced the expected result.
    
    ```
    
    ```
    
3.  To run this test and view code coverage information, switch to the Developer Console.
4.  In the Developer Console, click **Test** | **New Run**.
5.  To select your test class, click **HelloWorldTestClass**.
6.  To add all methods in the HelloWorldTestClass class to the test run, click **Add Selected**.
7.  Click **Run**.
    
    The test result displays in the Tests tab. Optionally, you can expand the test class in the Tests tab to view which methods were run. In this case, the class contains only one test method.
    
8.  The Overall Code Coverage pane shows the code coverage of this test class. To view the percentage of lines of code in the trigger covered by this test, which is 100%, double-click the code coverage line for **HelloWorldTrigger**. Because the trigger calls a method from the MyHelloWorld class, this class also has coverage (100%). To view the class coverage, double-click **MyHelloWorld**.
9.  To open the log file, in the Logs tab, double-click the most recent log line in the list of logs. The execution log displays, including logging information about the trigger event, the call to the applyDiscount method, and the price before and after the trigger.

By now, you’ve completed all the steps necessary for writing some Apex code with a test that runs in your development environment. In the real world, after you tested your code and are satisfied with it, you want to deploy the code and any prerequisite components to a production org. The next step shows you how to do this deployment for the code and custom object you created.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_qs_trigger.htm "Add an Apex Trigger")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_qs_deploy.htm "Deploy Components to Production")

#### See Also

-   [*Salesforce Help*: Open the Developer Console](https://help.salesforce.com/HTViewHelpDoc?id=code_dev_console_opening.htm&language=en_US "Salesforce Help: Open the Developer Console - HTML (New Window)")