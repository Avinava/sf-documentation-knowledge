---
title: "Create an Enhanced Transaction Security Policy That Uses Apex"
domain: securityImplGuide
topic: create-an-enhanced-transaction-security-policy-that-uses-apex
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.653Z
estimatedTokens: 1551
keywords: [Enhanced, Transaction, Security, Policy, Uses, Apex, Setup, specify, empty, code, implement, TxnSecurity.EventCondition]
---

# Create an Enhanced Transaction Security Policy That Uses Apex

> Use Setup to create an enhanced transaction security policy that uses Apex. You can
    specify an existing Apex class or create an empty class that you then code. The Apex class must
    implement the TxnSecurity.EventCondition
    interface.

# Create an Enhanced Transaction Security Policy That Uses Apex

Use Setup to create an enhanced transaction security policy that uses Apex. You can specify an existing Apex class or create an empty class that you then code. The Apex class must implement the TxnSecurity.EventCondition interface.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


| User Permissions Needed |
| --- |
| To view events: | View Real-Time Event Monitoring Data |
| To view transaction security policies: | View All Data |
| To create, edit, and manage transaction security policies: | Customize Application |

You can create multiple policies for the same type of event, but we recommend that your policies and their actions don’t overlap. If multiple policies with the same action for a given event execute when the event occurs, their order of execution is indeterminate.

1.  From Setup, in the Quick Find box, enter Transaction Security, and then select **Transaction Security Policies**.
2.  Click **New**, and then select **Apex**.
3.  Click **Next**.
4.  Select an event that your policy is built on.

    For example, if you want to track API calls in your org, select **API Event**. If you want to monitor when users view or export reports, select **Report Event**. See [Enhanced Transaction Security](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types.htm "Enhanced Transaction Security is a framework that intercepts real-time events and applies appropriate actions to monitor and control user activity. Each transaction security policy has conditions that evaluate events and the real-time actions that are triggered after those conditions are met. The actions are Block, Multi-Factor Authentication, and Notifications. Before you build your policies, understand the available event types, policy conditions, and common use cases. Enhanced Transaction Security is included in Real-Time Event Monitoring.") for the full list of available events.

5.  Select the Apex class that implements your policy. If you haven’t already created the class, select **New Empty Apex Class**.
6.  Click **Next**.
7.  Select the action that the policy performs when triggered.

    The available actions vary depending on the event type. For more information, see [Enhanced Transaction Security Actions and Notifications](https://help.salesforce.com/s/articleView?id=sf.enhanced_transaction_security_actions_notifs.htm&language=en_US "HTML (New Window)").

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

    #### Note

    The two-factor authentication action isn’t available in the Salesforce mobile app, Lightning Experience, or via API for events. Instead, the block action is used. For example, if a two-factor authentication policy is triggered on a list view performed via the API, Salesforce blocks the API user.

8.  If applicable, choose a block message or notification type and recipient.
9.  Enter a name and description for your policy.

    Your policy name must begin with a letter, not end with an underscore, and not contain two consecutive underscores.

10.  Optionally, enable the policy.

     If you chose to create an Apex class, don’t enable the policy yet because you must first add code to the class.

11.  Click **Finish**.

     Your new policy appears in the Policies table. If you chose to create an Apex class, its name is the 25 characters of your policy name without spaces appended with the EventCondition string. If your policy is named “My Apex Class,” your Apex class is auto-generated as MyApexClassEventCondition. The class is listed in the Apex Condition column.

12.  Click the name of your Apex class if you want to edit it.

     If you chose to create an Apex class, you must add the implementation code. Salesforce adds this basic code to get you started.

     ```

     ```


When you delete a transaction security policy that uses Apex, the implementation class isn't deleted. You can either delete this Apex class separately or reuse it in another policy.

Don’t include DML statements in your Apex-based policies because they can cause errors. When you send a custom email via Apex during transaction policy evaluation, you get an error, even if the record isn’t explicitly related to another record. For more information, see [Apex DML Operations](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dml_section.htm) in the Apex Reference Guide.

-   **[Enhanced Apex Transaction Security Implementation Examples](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_apex_examples.htm)**
    Here are examples of implementing enhanced Apex transaction security.
-   **[Asynchronous Apex Example](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_apex_dml_example.htm)**
    When executing a transaction security policy, use an asynchronous Apex process to offload time-consuming operations, such as sending a notification email to an external recipient.
-   **[Enhanced Transaction Security Apex Testing](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_apex_testing.htm)**
    Writing robust tests is an engineering best practice to ensure that your code does what you expect and to find errors before your users and customers do. It’s even more important to write tests for your transaction security policy’s Apex code because it executes during critical user actions in your Salesforce org. For example, a bug in your LoginEvent policy that’s not caught during testing can result in locking your users out of your org, a situation best avoided.

#### See Also

-   [*Apex Reference Guide*: TxnSecurity.EventCondition Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_interface_TxnSecurity_EventCondition.htm "Apex Reference Guide: TxnSecurity.EventCondition Interface  - HTML (New Window)")

## Code Examples

```apex
global class MyApexClassEventCondition implements TxnSecurity.EventCondition {

  public boolean evaluate(SObject event) {
    return false;
  }

}
```

## Related Topics

- Enhanced Transaction Security (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_types.htm)
- Enhanced Apex Transaction Security Implementation Examples (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_apex_examples.htm)
- Asynchronous Apex Example (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_apex_dml_example.htm)
- Enhanced Transaction Security Apex Testing (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_apex_testing.htm)
