---
title: "Using the isTest(SeeAllData=True) Annotation"
domain: apex-guide
topic: using-the-istestseealldatatrue-annotation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.630Z
keywords: [isTest, SeeAllData=True, Annotation, Warning]
---

# Using the isTest(SeeAllData=True) Annotation

# Using the isTest(SeeAllData=True) Annotation

Annotate your test class or test method with IsTest(SeeAllData=true) to open up data access to records in your organization. The IsTest(SeeAllData=true) annotation applies to data queries but doesn't apply to record creation or changes, including deletions. New and changed records are still rolled back in Apex tests even when using the annotation.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

#### Warning

By annotating your class with @isTest(SeeAllData=true), you allow test methods to access all org records. The best practice, however, is to run Apex tests with data silo using @isTest(SeeAllData=false). For data access considerations in Salesforce API version 23.0 and earlier, see [Isolation of Test Data from Organization Data in Unit Tests](atlas.en-us.apexcode.meta/apexcode/apex_testing_data_access.htm).

This example shows how to define a test class with the @IsTest(SeeAllData=true) annotation. All the test methods in this class have access to all data in the organization.

```

```

This second example shows how to apply the @IsTest(SeeAllData=true) annotation on a test method. Because the test method’s class isn’t annotated, you have to annotate the method to enable access to all data for the method. The second test method doesn’t have this annotation, so it can access only the data it creates. In addition, it can access objects that are used to manage your organization, such as users.

```

```

Considerations for the @IsTest(SeeAllData=true) Annotation

-   If a test class is defined with the @IsTest(SeeAllData=true) annotation, the SeeAllData=true applies to all test methods that don’t explicitly set the SeeAllData keyword.
-   The @IsTest(SeeAllData=true) annotation is used to open up data access when applied at the class or method level. However, if the containing class has been annotated with @IsTest(SeeAllData=true), annotating a method with @IsTest(SeeAllData=false) is ignored for that method. In this case, that method still has access to all the data in the organization. Annotating a method with @IsTest(SeeAllData=true) overrides, for that method, an @IsTest(SeeAllData=false) annotation on the class.
-   @IsTest(SeeAllData=true) and @IsTest(IsParallel=true) annotations can’t be used together on the same Apex method.