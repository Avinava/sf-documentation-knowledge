---
title: "Apex Quick Start"
domain: apex-guide
topic: apex-quick-start
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.825Z
estimatedTokens: 653
keywords: [Apex, Quick, Start, step-by-step, tutorial, shows, how, create, simple, trigger, deploy, components, production, organization., Note]
---

# Apex Quick Start

> This step-by-step tutorial shows how to create a simple Apex class and trigger, and
        how to deploy these components to a production organization.

# Apex Quick Start

This step-by-step tutorial shows how to create a simple Apex class and trigger, and how to deploy these components to a production organization.

When you have a Developer Edition or sandbox organization, you can learn some of the core concepts of Apex. After reviewing the basics, you’re ready to write your first Apex program—a simple class, trigger, and unit test.

Because Apex is similar to Java, you can recognize much of the functionality.

This tutorial is based on a custom object called Book that is created in the first step. This custom object is updated through a trigger.

This Hello World sample requires custom objects. You can either create these objects on your own, or download the objects and Apex code as an unmanaged package from AppExchange. To obtain the sample assets in your org, install the [Apex Tutorials Package](https://appexchange.salesforce.com/listingDetail?listingId=a0N30000001saDCEAY "html (New Window)"). This package also contains sample code and objects for the Shipping Invoice example.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

There’s a more complex [Shipping Invoice example](atlas.en-us.apexcode.meta/apexcode/apex_shopping_cart_example.htm) that you can also walk through. That example illustrates many more features of the language.

1.  [Create a Custom Object](atlas.en-us.apexcode.meta/apexcode/apex_qs_customobject.htm)
    In this step, you create a custom object called Book with one custom field called Price.
2.  [Add an Apex Class](atlas.en-us.apexcode.meta/apexcode/apex_qs_class.htm)
    In this step, you add an Apex class that contains a method for updating the book price. This method is called by the trigger that you’ll be adding in the next step.
3.  [Add an Apex Trigger](atlas.en-us.apexcode.meta/apexcode/apex_qs_trigger.htm)
    In this step, you create a trigger for the Book\_\_c custom object that calls the applyDiscount method of the MyHelloWorld class that you created in the previous step.
4.  [Add a Test Class](atlas.en-us.apexcode.meta/apexcode/apex_qs_test.htm)
    In this step, you add a test class with one test method. You also run the test and verify code coverage. The test method exercises and validates the code in the trigger and class. Also, it enables you to reach 100% code coverage for the trigger and class.
5.  [Deploy Components to Production](atlas.en-us.apexcode.meta/apexcode/apex_qs_deploy.htm)
    In this step, you deploy the Apex code and the custom object you created previously to your production organization using change sets.

## Related Topics

- Shipping Invoice example (atlas.en-us.apexcode.meta/apexcode/apex_shopping_cart_example.htm)
- Create a Custom Object (atlas.en-us.apexcode.meta/apexcode/apex_qs_customobject.htm)
- Add an Apex Class (atlas.en-us.apexcode.meta/apexcode/apex_qs_class.htm)
- Add an Apex Trigger (atlas.en-us.apexcode.meta/apexcode/apex_qs_trigger.htm)
- Add a Test Class (atlas.en-us.apexcode.meta/apexcode/apex_qs_test.htm)
- Deploy Components to Production (atlas.en-us.apexcode.meta/apexcode/apex_qs_deploy.htm)
