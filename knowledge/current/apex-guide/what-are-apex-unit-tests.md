---
title: "What Are Apex Unit Tests?"
domain: apex-guide
topic: what-are-apex-unit-tests
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:34.100Z
estimatedTokens: 1450
keywords: [Apex, Unit, Tests?, facilitate, development, robust, error-free, code, supports, creation, execution, unit, tests., tests, verify, whether, particular, piece, working, properly.]
---

# What Are Apex Unit Tests?

> To facilitate the development of robust, error-free code, Apex supports the creation and
            execution of unit tests. Unit tests are class methods that verify whether a
            particular piece of code is working properly. Unit test methods take no arguments,
            commit no data t

# What Are Apex Unit Tests?

To facilitate the development of robust, error-free code, Apex supports the creation and execution of unit tests. Unit tests are class methods that verify whether a particular piece of code is working properly. Unit test methods take no arguments, commit no data to the database, and send no emails. Such methods are flagged with the @IsTest annotation in the method definition. Unit test methods must be defined in test classes, that is, classes annotated with @IsTest.

For example:

```

```

Use the @IsTest annotation to define classes and methods that only contain code used for testing your application. The @IsTest annotation can take multiple modifiers within parentheses and separated by blanks.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The @IsTest annotation on methods is equivalent to the testMethod keyword. As best practice, Salesforce recommends that you use @IsTest rather than testMethod. The testMethod keyword may be versioned out in a future release.

This example of a test class contains two test methods.

```

```

Classes and methods defined as @IsTest can be either private or public. The access level of test classes methods doesn’t matter. You need not add an access modifier when defining a test class or test methods. The default access level in Apex is private. The testing framework can always find the test methods and execute them, regardless of their access level.

Classes defined as @IsTest must be top-level classes and can't be interfaces or enums.

Methods of a test class can only be called from a test method or code invoked by a test method; non-test requests can’t invoke it.

This example shows a class to be tested and its corresponding test class. It contains two methods and a constructor.

```

```

This example contains the corresponding test class with four test methods. Each method in the previous class is called. Although there’s sufficient test coverage, the test methods in the test class perform extra testing to verify boundary conditions.

```

```

## Unit Test Considerations

Here are some things to note about unit tests.

-   Starting with Salesforce API 28.0, test methods can no longer reside in non-test classes and must be part of classes annotated with IsTest. See the [TestVisible](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_testvisible.htm) annotation to learn how you can access private class members from a test class.
-   Test methods can’t be used to test Web service callouts. Instead, use mock callouts. See [Test Web Service Callouts](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_testing.htm "Generated code is saved as an Apex class containing the methods you can invoke for calling the web service. To deploy or package this Apex class and other accompanying code, 75% of the code must have test coverage, including the methods in the generated class. By default, test methods don’t support web service callouts, and tests that perform web service callouts fail. To prevent tests from failing and to increase code coverage, Apex provides the built-in WebServiceMock interface and the Test.setMock method. Use WebServiceMock and Test.setMock to receive fake responses in a test method.") and [Testing HTTP Callouts](atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing.htm "To deploy or package Apex, 75% of your code must have test coverage. By default, test methods don’t support HTTP callouts, so tests that perform callouts fail. Enable HTTP callout testing by instructing Apex to generate mock responses in tests, using Test.setMock.").
-   You can’t send email messages from a test method.
-   Since test methods don’t commit data created in the test, you don’t have to delete test data upon completion.
-   If the value of a static member variable in a test class is changed in a testSetup or test method, the new value isn’t preserved. Other test methods in this class get the original value of the static member variable. This behavior also applies when the static member variable is defined in another class and accessed in test methods.
-   For some sObjects that have fields with unique constraints, inserting duplicate sObject records results in an error. For example, inserting CollaborationGroup sObjects with the same names results in an error because CollaborationGroup records must have unique names.
-   Tracked changes for a record (FeedTrackedChange records) in Chatter feeds aren't available when test methods modify the associated record. FeedTrackedChange records require the change to the parent record they're associated with to be committed to the database before they're created. Since test methods don't commit data, they don't result in the creation of FeedTrackedChange records. Similarly, field history tracking records can't be created in test methods because they require other sObject records to be committed first. For example, AccountHistory records can’t be created in test methods because Account records must be committed first.
-   If your tests include DML, make sure that you don’t exceed the MAX\_DML\_ROWS limit. See “Miscellaneous Apex Limits” in [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.")

1.  [Accessing Private Test Class Members](atlas.en-us.apexcode.meta/apexcode/apex_testing_testvisible.htm)


#### See Also

-   [IsTest Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm)

## Code Examples

```apex
@IsTest
private class myClass {
    @IsTest
    static void myTest() {
        // code_block
    }
}
```

```apex
@IsTest
private class MyTestClass {

   // Methods for testing
   @IsTest
   static void test1() {
      // Implement test code
   }

   @IsTest
   static void test2() {
      // Implement test code
   }

}
```

```apex
public class TVRemoteControl {
    // Volume to be modified
    Integer volume;
    // Constant for maximum volume value
    static final Integer MAX_VOLUME = 50;    
    
    // Constructor
    public TVRemoteControl(Integer v) {
        // Set initial value for volume
        volume = v;
    }
        
    public Integer increaseVolume(Integer amount) {
        volume += amount;
        if (volume > MAX_VOLUME) {
            volume = MAX_VOLUME;
        } 
        return volume;
    }
    
    public Integer decreaseVolume(Integer amount) {
        volume -= amount;
        if (volume < 0) {
            volume = 0;
        }  
        return volume;
    }    
    
    public static String getMenuOptions() {
        return 'AUDIO SETTINGS - VIDEO SETTINGS';
    }
       
}
```

```apex
@IsTest
class TVRemoteControlTest {
    @IsTest 
    static void testVolumeIncrease() {
        TVRemoteControl rc = new TVRemoteControl(10);
        Integer newVolume = rc.increaseVolume(15);
        System.assertEquals(25, newVolume);
    }
    
    @IsTest
    static void testVolumeDecrease() {
        TVRemoteControl rc = new TVRemoteControl(20);
        Integer newVolume = rc.decreaseVolume(15);
        System.assertEquals(5, newVolume);        
    } 
        
    @IsTest
    static void testVolumeIncreaseOverMax() {
        TVRemoteControl rc = new TVRemoteControl(10);
        Integer newVolume = rc.increaseVolume(100);
        System.assertEquals(50, newVolume);        
    }
    
    @IsTest
    static void testVolumeDecreaseUnderMin() {
        TVRemoteControl rc = new TVRemoteControl(10);
        Integer newVolume = rc.decreaseVolume(100);
        System.assertEquals(0, newVolume);        
    }
    
    @IsTest
    static void testGetMenuOptions() {
        // Static method call. No need to create a class instance.
        String menu = TVRemoteControl.getMenuOptions();
        System.assertNotEquals(null, menu);
        System.assertNotEquals('', menu);
    }
}
```

## Related Topics

- TestVisible (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_testvisible.htm)
- Test Web Service Callouts (atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_testing.htm)
- Testing HTTP
                        Callouts (atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing.htm)
- Execution Governors and Limits (atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm)
- Accessing Private Test Class Members (atlas.en-us.apexcode.meta/apexcode/apex_testing_testvisible.htm)
- IsTest Annotation (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm)
