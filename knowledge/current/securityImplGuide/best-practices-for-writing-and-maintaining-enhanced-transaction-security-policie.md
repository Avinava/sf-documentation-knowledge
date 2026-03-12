---
title: "Best Practices for Writing and
    Maintaining
    Enhanced Transaction Security Policies"
domain: securityImplGuide
topic: best-practices-for-writing-and-maintaining-enhanced-transaction-security-policie
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:35:44.674Z
estimatedTokens: 1422
keywords: [Best, Practices, Writing, Maintaining, Enhanced, Transaction, Security, Policies, policy, management, isn’t, always, easy, especially, sure]
---

# Best Practices for Writing and
    Maintaining
    Enhanced Transaction Security Policies

> Transaction security policy management isn’t always easy, especially when you have many
    policies. To make sure that your policies remain functional, write and maintain them using these
    best practices. Well-structured and tested policies keep your employees and customers connected,
    productive, and secure.

# Best Practices for Writing and Maintaining Enhanced Transaction Security Policies

Transaction security policy management isn’t always easy, especially when you have many policies. To make sure that your policies remain functional, write and maintain them using these best practices. Well-structured and tested policies keep your employees and customers connected, productive, and secure.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


## Writing Policies

Use these general guidelines as you write your policies.

Know your users

Do your users use features that work best with certain browsers? Do they rely on mobile devices in the field? Have features that your users regularly access changed? Think about what your users experience during their day-to-day work, and write your policies with those behaviors in mind. Remember: Policies prevent activities that are genuinely out of bounds, and they must not prevent users from completing core job tasks.

Know what’s coming

To check whether the features that your users rely on change, read the Salesforce release notes. Feature changes can sometimes cause your policies to behave unexpectedly.

Know your environments

Use sandbox environments to your advantage. Run your policies in a sandbox under conditions similar to your production org. Let policies run for 24 hours to see how they work. Use this feedback to evaluate how your policy functions in the conditions it has to work under.

Know your policies

To avoid confusion and lighten your maintenance load, create only one policy per event. Schedule regular policy maintenance and reviews to make sure that you don’t have policies that counteract one another. Check the Salesforce release notes for feature updates that might change the way your policies behave.

Use these guidelines if you write an Apex-based policy rather than use Condition Builder.

Know your code

If you have an Apex developer in your organization, work with the developer as you write your policy. By consulting with someone who knows the ins and outs of Apex, you can team up to write robust and reliable policies and tests. If you don’t have access to an Apex expert, learn about Apex by taking the Apex Basics Trailhead module or studying the Apex Developer Guide.

Know your limits

Because Apex runs in a multi-tenant environment, the Apex runtime engine strictly enforces limits. Enforcing limits ensures that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that cannot be handled. Limits vary based on the event that the policy is based on. Construct your policies with these limits in mind. Read more about Apex Governors and Limits.

## Testing Policies

Testing policies is the best way to make sure that you’re crafting the right solution for your organization and your users.

-   Try out your policies in a sandbox. Then deploy your security policy in a production org when you’re certain your policy works.
-   If you make far-reaching changes in your org, retest your policies to make sure that they are compatible with the changes you made. For example, if you create a workflow for field employees that generates a report, check all report event policies that could be affected.
-   If your policy is Apex-based, follow Apex testing best practices.
-   Run data silo tests. These tests run faster, produce easy-to-diagnose failures, and are more reliable.

## Troubleshooting

Something is wrong with my policy. Where do I start?

Use the error message that your policy creates as a starting point. Check the Apex Developer Guide for advice on the error category.

My policy shuts down before it executes.

Policies don’t execute if they take too long to perform all their actions. Streamline your policy, and make sure that it’s within the metering limit.

I have multiple policies for the same event. What do I do?

In general, make only as many policies as you can manage and maintain. There’s no limit on the number of policies you can create, but not all policies trigger. Policies are prioritized, and trigger in this order: block the operation, require multi-factor authentication, no action. If you have multiple policies for the same event, not all of those policies trigger. For example, let's say you have two policies for one event, but one policy blocks the operation and the second is set to require multi-factor authentication. The policy that blocks the user executes first and if it triggers, the other policy doesn’t execute.

My policy isn’t working. How do I debug it?

First, disable the policy and move it to a sandbox. You don’t want a broken policy to cause problems for your colleagues or customers while you troubleshoot. Then evaluate whether the issue is with your policy settings or the Apex code if your policy is Apex-based.

-   If you think your settings are the source of the problem, evaluate the policy’s conditions and actions in your sandbox. Adjust the policy’s settings, and test for the behaviors you want.
-   If you suspect that the problem is with your Apex code, you can debug Apex using the Developer Console and debug logs.

I can’t turn off my policy, and it’s blocking my users in production. What do I do?

Check for known issues documented in Knowledge Articles or Known Issues. These resources explain issues that other customers experienced, along with functional workarounds. If that doesn’t work, contact Salesforce.
