---
title: "Test and Troubleshoot Your New Enhanced Policy"
domain: securityImplGuide
topic: test-and-troubleshoot-your-new-enhanced-policy
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.642Z
estimatedTokens: 1492
keywords: [Test, Troubleshoot, New, Enhanced, Policy, transaction, security, isn’t, behaving, expect, check, testing, troubleshooting, tips, diagnose]
---

# Test and Troubleshoot Your New Enhanced Policy

> If your enhanced transaction security policy isn’t behaving as you expect, check out
        these testing and troubleshooting tips to diagnose the problem.

# Test and Troubleshoot Your New Enhanced Policy

If your enhanced transaction security policy isn’t behaving as you expect, check out these testing and troubleshooting tips to diagnose the problem.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


## Test in a Sandbox

Always test a new policy in a sandbox before deploying it to production. While in your sandbox, create and enable the policy, and then try different actions to test whether it’s executing as you expect.

For example, if you want your ReportEvent policy to block all report exports on leads, try different report operations to ensure that they’re being blocked. For example:

-   Run standard reports on leads.
-   Create a custom report type on leads, and run reports that use that type.
-   Execute report REST API queries on leads.

## Check Your Policy Conditions

If your policy isn’t working as you expect, it’s possible that you added the wrong conditions. Event Manager is a great tool to troubleshoot policy conditions. When you enable storage or streaming for your event from the Event Manager UI, you can examine the field values for real events in your org. You can then compare these actual values with the values that you expect and see if they match.

For example, let’s say you create a ReportEvent policy with the condition "QueriedEntities equals Lead." You then run a custom report type in your org that contains Lead objects. You expect the policy to trigger, but it doesn’t. Try these steps to find the problem.

1.  Enable storage for ReportEvent in Event Manager to view a history of the ReportEvents in your org.
2.  Run your custom report type again so that a ReportEvent entry is stored.
3.  From an API client such as Postman, query your ReportEvent event objects, and find the entry that corresponds to this recent run of the custom report type.
4.  Check the value of the QueriedEntities field. Is it what you expected? If it isn’t, change your condition. For example, if your custom report type is on more than just leads, the value of QueriedEntities is something like Lead, Campaign, MyCustomObject\_\_c. In this case, change your policy condition to be "QueriedEntities *contains* Lead."

## Add Automated Apex Tests

Automated Apex tests are a good way to find typos, logical flaws, and regressions in the Apex code for your new enhanced policy. In general, it’s a best practice to write automated tests early in the development cycle. Testing ensures that you fix malfunctioning policies before they negatively affect your production users.

For example, the Lead Data Export Apex class contains a typo so that the condition tests for Laed instead of Lead. When you execute this Apex test, it fails, so you know that something is wrong.

```

```

## Add Apex Debug Logs

After creating and running Apex tests, you now know there’s a problem in your Apex code, but you don’t know what it is. Apex debug logs help you gain visibility into what your Apex class is doing so that you can fix the issue.

Let’s update the Apex code for the enhanced Lead Data Export policy that currently has the unfortunate Laed typo with some System.debug() statements.

```

```

Rerun the Apex test from the Developer Console, and view the debug logs that your Apex code generated. This example shows that the QueriedEntities field of the recent event doesn’t contain a Lead. The highlighted debug log pinpoints the condition that didn’t evaluate correctly. Now it’s easy to examine your Apex code and find the typo.

![Developer Console showing debug logs](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_setup%2Fimages%2Fenh_txn_sec_migrate_debug_logs.png&folder=securityImplGuide)

If you want to see the debug output when a policy runs in a production environment, add a User Trace flag for the Automated User. The Automated User executes transaction security policies.

![Setup Debug Logs page showing new user trace flag](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_setup%2Fimages%2Fenh_txn_sec_migrate_trace_flag.png&folder=securityImplGuide)

#### See Also

-   [Manage Real-Time Event Monitoring Events](atlas.en-us.securityImplGuide.meta/securityImplGuide/event_monitoring_monitor_events_with_event_manager.htm "Manage streaming and storage settings for Real-Time Event Monitoring events declaratively with the Event Manager. You can also manage settings programmatically with the Metadata API. Real-Time Event Monitoring helps you monitor and detect standard events in Salesforce in near real-time. You can store the event data for auditing or reporting purposes. You can create transaction security policies using Condition Builder—a point-and-click tool—or Apex code.")

-   [Execute Apex Tests](https://help.salesforce.com/s/articleView?id=sf.code_test_execution.htm&language=en_US)

-   [*Apex Developer Guide*: Debug Log](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_debugging_debug_log.htm "Apex Developer Guide: Debug Log  - HTML (New Window)")

-   [View Debug Logs](https://help.salesforce.com/apex/HTViewHelpDoc?id=code_viewing_log_details.htm&language=en_US "The debug log contains information about each transaction, such as whether it was successful and how long it took. Depending on the filters set by your trace flags, the log can contain varying levels of detail about the transaction.")

-   [Set Up Debug Logging](https://help.salesforce.com/apex/HTViewHelpDoc?id=code_add_users_debug_log.htm&language=en_US "To activate debug logging for users, Apex classes, and Apex triggers, configure trace flags and debug levels in the Developer Console or in Setup. Each trace flag includes a debug level, start time, end time, and log type. The trace flag’s log type specifies the entity you’re tracing.")

## Code Examples

```apex
/**
 * Tests for the LeadExportEventCondition class, to make sure that our Transaction Security Apex 
 * logic handles events and event field values as expected.
 **/
 @isTest
 public class LeadExportEventConditionTest {
 
     /**
      * Test Case 1: If an ApiEvent has Lead as a queried entity and more than 2000 rows 
      * processed, then the evaluate method of our policy's Apex should return true.
      **/ 
      static testMethod void testApiEventPositiveTestCase() {
          // set up our event and its field values
          ApiEvent testEvent = new ApiEvent();
          testEvent.QueriedEntities = 'Account, Lead';
          testEvent.RowsProcessed = 2001;
          
          // test that the Apex returns true for this event
          LeadExportEventCondition  eventCondition = new LeadExportEventCondition();
          System.assert(eventCondition.evaluate(testEvent));   
      }
 
 }
```

```apex
global class LeadExportEventCondition implements TxnSecurity.EventCondition {
    public boolean evaluate(SObject event) {
        switch on event{
            when ApiEvent apiEvent {
                System.debug('Evaluating an ApiEvent');
                return evaluate(apiEvent.QueriedEntities, apiEvent.RowsProcessed);
            }
            when ReportEvent reportEvent {
                System.debug('Evaluating a ReportEvent');
                return evaluate(reportEvent.QueriedEntities, reportEvent.RowsProcessed);
            }
            when null {
                System.debug('Evaluating null');
                return false;   
            }
            when else {
                System.debug('Evaluating another event type: ' + event);
                return false;
            }
        }
    }

    private boolean evaluate(String queriedEntities, Decimal rowsProcessed){
        // pulling out our 2 conditions into variables
        // so that we can also use them for logging!
        boolean containsLead = queriedEntities.contains('Laed');
        boolean moreThan2000 = rowsProcessed > 2000;
        
        System.debug('Contains Lead? ' + containsLead);
        System.debug('More than 2000 rows? ' + moreThan2000);
        
        if (containsLead && moreThan2000){
            return true;
        }
        return false;
    }
}
```

## Related Topics

- Manage Real-Time Event Monitoring Events (atlas.en-us.securityImplGuide.meta/securityImplGuide/event_monitoring_monitor_events_with_event_manager.htm)
