---
title: "Integrate Open CTI with Lightning Flow for Service"
domain: salesforce-guided-engagement
topic: integrate-open-cti-with-lightning-flow-for-service
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.870Z
estimatedTokens: 1313
keywords: [Integrate, Open, CTI, Lightning, Flow, Service, APIs, third-party, telephony, services, Salesforce, advantage, three, getSoftphoneLayout, screenPop]
---

# Integrate Open CTI with Lightning Flow for Service

> Open CTI provides a set of APIs that enables third-party telephony services to
        integrate with Salesforce. Lightning Flow for Service takes advantage of three Open CTI
        methods: getSoftphoneLayout(), screenPop(), and searchAndScreenPop().

# Integrate Open CTI with Lightning Flow for Service

Open CTI provides a set of APIs that enables third-party telephony services to integrate with Salesforce. Lightning Flow for Service takes advantage of three Open CTI methods: getSoftphoneLayout(), screenPop(), and searchAndScreenPop().

1.  Update your Open CTI implementation to allow incoming calls to screen-pop to flows.

    You can also pass call data, such as the phone number or customer name, directly to a flow when it’s screen-popped.

    Use Open CTI API version 42.0 and later with the following methods.

    -   [getSoftphoneLayout()](https://developer.salesforce.com/docs/atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_getsoftphonelayout_lex.htm "HTML (New Window)")
    -   [screenPop()](https://developer.salesforce.com/docs/atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_screenpop_lex.htm "HTML (New Window)")
    -   [searchAndScreenPop()](https://developer.salesforce.com/docs/atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_searchandscreenpop_lex.htm "HTML (New Window)")

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

    #### Note

    Before updating your implementation, make sure that you understand how Open CTI arguments are passed.

    Flows can accept input variables, which are also called arguments. The Actions & Recommendations component on a record page automatically attempts to pass the parent record ID to the flow. To use this information, the flow defines an input variable called recordId of type Text. The Open CTI API allows for more complex variable passing. Single variables and collection variables, like lists and arrays, can be passed through the flowArgs parameter available in the screenPop and searchAndScreenPop methods.

2.  [Create flows](atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_flow.htm "Create the actions and recommendations that you want to users to start from the Actions & Recommendations component. You can show flows, quick actions, and recommendations that result from Next Best Action strategies.").

    For example, create an Unknown Caller screen flow for when there’s an incoming call and there’s no match in Salesforce for the caller. In Flow Builder, create a screen flow to verify the caller.

    -   Add a screen with input components First Name, Last Name, Phone Number, and Address.
    -   Add the Create Records element to create a contact and set the contact fields using the screen input components.
    -   Connect the start element to the Unknown Caller screen.

    In addition to the Unknown Caller flow, create other flows and actions that you want your agents to use when talking to customers on the phone.

3.  Configure screen-pop settings in the softphone layout.

    From Setup, go to the Softphone Layouts page.

    For No matching records, select **Pop to flow**. Then select the flow you created for Unknown Callers.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

    #### Note

    When you use the Pop to flow option, flows open as primary tabs in the console.

    For Single-matching records, select **Pop detail page**. This setting allows the contact record page, for example, to be popped. ![Screen shot of the Screen Pop Settings page.](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fguided_engagement_open_cti_pop_settings.png&folder=salesforce_guided_engagement)

4.  Create an Actions & Recommendations deployment and configure default actions for the phone channel.
5.  [Customize the record page](atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_component.htm "The Actions & Recommendations component displays RecordActions associated to the parent record. Add the component to your Lightning pages so that users can see the actions that they can take.").

    Add the Actions & Recommendations component to a record page, such as the contact page. Select the deployment in the component properties. When calls match a Salesforce record and users get popped to that page, they can see which actions to complete for the call.


#### See Also

-   [*Open CTI Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro.htm "
    Open CTI Developer Guide
    - HTML (New Window)")

-   [*Salesforce Help*: Designing a Custom Softphone Layout](https://help.salesforce.com/articleView?id=cti_admin_phonelayoutscreate.htm&language=en_US "Salesforce Help: Designing a Custom Softphone Layout - HTML (New Window)")

-   [*Salesforce Help*: Assigning a Softphone Layout to a User Profile](https://help.salesforce.com/articleView?id=cti_admin_phonelayoutsassign.htm&language=en_US "Salesforce Help: Assigning a Softphone Layout to a User Profile - HTML (New Window)")

-   [*Lightning Components Developer Guide*: Set Flow Variable Values from a Lightning Component](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_using_flow_inputs_set.htm "Lightning Components Developer Guide: Set Flow Variable Values from a
    Lightning Component - HTML (New Window)")

## Related Topics

- Create flows (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_flow.htm)
- Customize the record
                        page (atlas.en-us.salesforce_guided_engagement.meta/salesforce_guided_engagement/guided_engagement_setup_component.htm)
