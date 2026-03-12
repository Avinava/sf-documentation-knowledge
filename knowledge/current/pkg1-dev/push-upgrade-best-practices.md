---
title: "Push Upgrade Best Practices"
domain: pkg1-dev
topic: push-upgrade-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:25.650Z
estimatedTokens: 916
keywords: [Push, Upgrade, Best, Practices, powerful, features, provide, partners, Pushing, proper, planning, preparation, result, significant, customer]
---

# Push Upgrade Best Practices

> Push Upgrade is one of the most powerful features we provide to our partners. Pushing
      an upgrade without proper planning and preparation can result in significant customer
      satisfaction issues. Here are some best practices to consider.

# Push Upgrade Best Practices

Push Upgrade is one of the most powerful features we provide to our partners. Pushing an upgrade without proper planning and preparation can result in significant customer satisfaction issues. Here are some best practices to consider.

## Plan, Test, and Communicate

-   Share an upgrade timeline plan with your customers so they know when you’ll upgrade, and how often.
-   Plan when you want to push upgrades to your customers’ orgs. Keep in mind that most customers don’t want changes around their month-end, quarter-end, and year-end or audit cycles. Do your customers have other critical time periods when they don’t want any changes to their org? For example, there might be certain times when they don’t have staff available to verify changes or perform any required post-installation steps.
-   Schedule push upgrades during your customers’ off-peak hours, such as late evening and night. Have you considered time zone issues? Do you have customers outside the United States who have different off-peak hours? You can schedule push upgrades to any number of customer organizations at a time. Consider grouping organizations by time zone, if business hours vary widely across your customer base.
-   Don’t schedule push upgrades close to Salesforce-planned maintenance windows. In most cases, it might be better to wait 3-4 weeks after a major Salesforce release before you push major upgrades.
-   Test, test, and test! Since you’re pushing changes to the organization instead of the customer pulling in changes, there’s a higher bar to ensure the new version of your app works well in all customer configurations.

## Stagger Your Push Upgrades

-   Don’t push changes to all customers at once. It’s important to ensure that you have sufficient resources to handle support cases if there are issues. Also, it’s important that you discover possible issues before your entire customer base is affected.
-   Push to your own test organizations first to confirm that the push happens seamlessly. Log in to your test organization after the push upgrade and test to see that everything works as expected.
-   When applicable, push to the sandbox organizations of your customers first before pushing to their production organizations. Give them a week or more to test, validate, and fix in the sandbox environment before you push to their production organizations.
-   Push upgrades to small batches of customer production organizations initially. For example, if you have 1,000 customers, push upgrades to 50 or 100 customers at a time, at least the first few times. After you have confidence in the results, you can upgrade customers in larger batches.

## Focus on Customer Trust

-   You’re responsible for ensuring that your customers’ organizations aren’t adversely affected by your upgrade. Avoid making changes to the package, such as changes to validation rules or formula fields, that might break external integrations made by the customer. If for some reason you do, test and communicate well in advance. Please keep in mind that you can impact customer data, not just metadata, by pushing an upgrade that has bugs.
-   Write an Apex test on install to do basic sanity testing to confirm that the upgraded app works as expected.
-   If you’re enhancing an existing feature, use a post-install script to automatically assign new components to existing users using permission sets.
-   If you’re adding a new feature, don’t auto-assign the feature to existing users. Communicate and work with the admins of the customer org so they can determine who should have access to the new feature, and the timing of the rollout.
