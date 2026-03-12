---
title: "Deploy Components to Production"
domain: apex-guide
topic: deploy-components-to-production
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.855Z
estimatedTokens: 758
keywords: [Deploy, Components, Production, step, deploy, Apex, code, custom, created, previously, production, organization, change, sets.]
---

# Deploy Components to Production

> In this step, you deploy the Apex code and the custom object you created previously
        to your production organization using change sets.

# Deploy Components to Production

In this step, you deploy the Apex code and the custom object you created previously to your production organization using change sets.

Prerequisites:

-   A Salesforce account in a sandbox Performance, Unlimited, or Enterprise Edition organization.
-   [The HelloWorldTestClass Apex test class.](atlas.en-us.apexcode.meta/apexcode/apex_qs_test.htm "In this step, you add a test class with one test method. You also run the test and verify code coverage. The test method exercises and validates the code in the trigger and class. Also, it enables you to reach 100% code coverage for the trigger and class.")
-   A deployment connection between the sandbox and production organizations that allows inbound change sets to be received by the production organization. See “Change Sets” in Salesforce Help.
-   “Create and Upload Change Sets” user permission to create, edit, or upload outbound change sets.

This procedure doesn't apply to Developer organizations since change sets are available only in Performance, Unlimited, Enterprise, or Database.com Edition organizations. If you have a Developer Edition account, you can use other deployment methods. For more information, see [Deploying Apex](atlas.en-us.apexcode.meta/apexcode/apex_deploying.htm "You can't develop Apex in your Salesforce production org. Your development work is done in a sandbox, in a scratch org, or in a Developer Edition org.").

1.  From Setup, enter Outbound Changesets in the Quick Find box, then select **Outbound Changesets**.
2.  If a splash page appears, click **Continue**.
3.  In the Change Sets list, click **New**.
4.  Enter a name for your change set, for example, HelloWorldChangeSet, and optionally a description. Click **Save**.
5.  In the Change Set Components section, click **Add**.
6.  Select Apex Class from the component type dropdown list, then select the MyHelloWorld and the HelloWorldTestClass classes from the list and click **Add to Change Set**.
7.  To add the dependent components, click **View/Add Dependencies**.
8.  To select all components, select the top checkbox. Click **Add To Change Set**.
9.  In the Change Set Detail section of the change set page, click **Upload**.
10.  Select the target organization, in this case production, and click **Upload**.
11.  After the change set upload completes, deploy it in your production organization.
     1.  Log in to your production organization.
     2.  From Setup, enter Inbound Change Sets in the Quick Find box, then select **Inbound Change Sets**.
     3.  If a splash page appears, click **Continue**.
     4.  In the change sets awaiting deployment list, click your change set's name.
     5.  Click **Deploy**.

In this tutorial, you learned how to create a custom object, how to add an Apex trigger, class, and test class. Finally, you also learned how to test your code, and how to upload the code and the custom object using Change Sets.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_qs_test.htm "Add a Test Class")

## Related Topics

- The
                        HelloWorldTestClass Apex test class. (atlas.en-us.apexcode.meta/apexcode/apex_qs_test.htm)
- Deploying Apex (atlas.en-us.apexcode.meta/apexcode/apex_deploying.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_qs_test.htm)
