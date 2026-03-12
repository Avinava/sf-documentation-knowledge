---
title: "TestVisible Annotation Annotation"
domain: apex-guide
topic: testvisible-annotation-annotation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.501Z
estimatedTokens: 287
keywords: [TestVisible, Annotation, annotation, allow, test, access, protected, members, another, outside, class., include, member, variables, inner, classes., enables, permissive, level, running]
---

# TestVisible Annotation Annotation

> Use the TestVisible annotation
to allow test methods to access private or protected members of another
class outside the test class. These members include methods, member
variables, and inner classes. This annotation enables a more permissive
access level for running tests only. This annotation does

# TestVisible Annotation Annotation

Use the TestVisible annotation to allow test methods to access private or protected members of another class outside the test class. These members include methods, member variables, and inner classes. This annotation enables a more permissive access level for running tests only. This annotation doesn’t change the visibility of members if accessed by non-test classes.

With this annotation, you don’t have to change the access modifiers of your methods and member variables to public if you want to access them in a test method. For example, if a private member variable isn’t supposed to be exposed to external classes but it must be accessible by a test method, you can add the TestVisible annotation to the variable definition.

This example shows how to annotate a private class member variable and private method with TestVisible.

```

```

This test class uses the previous class and contains the test method that accesses the annotated member variable and method.

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_testsetup.htm "TestSetup Annotation Annotation")

## Code Examples

```apex
public class TestVisibleExample {
    // Private member variable
    @TestVisible private static Integer recordNumber = 1;

    // Private method
    @TestVisible private static void updateRecord(String name) {
        // Do something
    }
}
```

```apex
@IsTest
private class TestVisibleExampleTest {
    @IsTest static void test1() {
        // Access private variable annotated with TestVisible
        Integer i = TestVisibleExample.recordNumber;
        System.assertEquals(1, i);

        // Access private method annotated with TestVisible
        TestVisibleExample.updateRecord('RecordName');
        // Perform some verification
    }
}
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_testsetup.htm)
