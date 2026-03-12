---
title: "Why Your UI Matters—Open CTI for Salesforce Classic vs.
      Lightning Experience"
domain: api-cti
topic: why-your-ui-mattersopen-cti-for-salesforce-classic-vs-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:59.785Z
estimatedTokens: 1052
keywords: [Why, Matters—Open, CTI, Salesforce, Classic, Lightning, Experience, way, implement, Open, depends, org’s, user, There, separate]
---

# Why Your UI Matters—Open CTI for Salesforce Classic vs.
      Lightning Experience

> The way you implement Open CTI depends on your org’s user
      interface. There are separate Open CTI APIs for Salesforce Classic and Lightning
      Experience.

# Why Your UI Matters—Open CTI for Salesforce Classic vs. Lightning Experience

The way you implement Open CTI depends on your org’s user interface. There are separate Open CTI APIs for Salesforce Classic and Lightning Experience.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_cti)

#### Important

Open CTI is in maintenance mode and is scheduled for retirement in February 2028. No new features or enhancements are being added to Open CTI. Effective immediately, Open CTI is deprecated and unavailable for newly created Agentforce Service orgs. To ensure long-term compatibility and access to the latest innovations, we recommend transitioning your development efforts to Service Cloud Voice. For more information, see this [Knowledge Article](https://help.salesforce.com/s/articleView?id=005306437&type=1&language=en_US).

To enable your contact center users to take advantage of the latest phone channel innovations, Salesforce recommends that you modernize your experience by moving to Service Cloud Voice. Service Cloud Voice offers many of the Open CTI features that you love and more. Unlike Open CTI, Service Cloud Voice is natively integrated with Omni-Channel and Command Center for Service, providing a seamless experience for contact center reps and supervisors across all digital channels. See [Get to Know Service Cloud Voice](https://help.salesforce.com/s/articleView?id=service.voice_getting_to_know.htm&language=en_US).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

You can’t swap the two Open CTI APIs in custom JavaScript code because they behave and function differently. Make sure that you think about where you want to implement your CTI system before you begin developing.

## What’s the difference between the two Open CTI APIs?

-   You connect to the API differently.

    In Salesforce Classic

    /support/api/66.0/interaction.js

    In Lightning Experience

    /support/api/66.0/lightning/opencti\_min.js

-   The input syntax for methods is different.

    In Salesforce Classic

    Input example:

    ```

    ```

    In Lightning Experience

    Input example:

    ```

    ```

-   The two APIs provide similar methods, but a few methods behave differently. The input and output for methods can be different.

## Which Open CTI API do I use?

Remember that the APIs can’t be swapped. If your users plan to switch between user interfaces, make sure that they understand that the CTI system might behave or function differently depending on what user interface they’re working in.

Use Open CTI for Salesforce Classic if...

-   You want to make calls using a softphone in Salesforce Classic
-   You want to make calls using a softphone in a Salesforce Classic console app

Use Open CTI for Lightning Experience if...

-   You want to make calls using a softphone in Lightning Experience
-   You want to make calls using a softphone in a Lightning Experience console app

## Are there any setup considerations?

To make calls in Lightning Experience, complete the following.

-   Create a Lightning app and add the Open CTI Softphone to your utility bar.
-   In the call center definition file, the reqSalesforceCompatibilityMode item must be set to Lightning or Classic\_and\_Lightning.

Open CTI for Lightning Experience works only in Lightning apps—it doesn’t work in Salesforce Classic apps. Even though you can view Salesforce Classic apps in Lightning Experience, those apps are still Classic apps under-the-covers. To check if your app is a Lightning app, use the App Manager in Setup.

If you want your Open CTI implementation to work in Lightning Experience and in a console in Salesforce Classic, develop a unique implementation that uses both Open CTI for Salesforce Classic and Lightning Experience.

#### See Also

-   [Method Parity Between Open CTI for Salesforce Classic and Lightning Experience](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic_methods.htm "The methods provided in the two APIs aren’t always the same. Some Salesforce Classic methods aren’t available in Lightning Experience and some have been renamed.")

## Code Examples

```
sampleMethod(var1,var2…)
```

```
sampleMethod({
	arg1 : value1,
	arg2 : value2,
	...
})
```

## Related Topics

- Method Parity Between Open CTI for Salesforce Classic and Lightning Experience (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic_methods.htm)
