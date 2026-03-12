---
title: "Flow Security"
domain: communities-dev
topic: flow-security
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.490Z
estimatedTokens: 624
keywords: [Flow, Security, guest, external, users, run, flows, override, permission, grant, access, specific, user, profiles, site]
---

# Flow Security

> If guest or external users must run flows, override the flow permission to grant access
    only to specific external user profiles, permission sets, or site guest user profiles, rather
    than allowing users to run all flows. Avoid running flows in system context when possible, and
    restrict access to subflows. Otherwise, ensure that you implement procedural access controls for
    those flows and subflows.

# Flow Security

If guest or external users must run flows, override the flow permission to grant access only to specific external user profiles, permission sets, or site guest user profiles, rather than allowing users to run all flows. Avoid running flows in system context when possible, and restrict access to subflows. Otherwise, ensure that you implement procedural access controls for those flows and subflows.

Flows are a powerful feature that can override platform security settings for access to objects and Apex classes. Flows can be used to activate and deactivate permission sets. Yet screen flows are driven by the browser with user-controlled input parameters. Therefore, we recommend [overriding the run flow permission](https://help.salesforce.com/articleView?id=platform.flow_distribute_security.htm&type=5&language=en_US) to assign access to specific flows based on the guest or external user profile or permission set. For guest users, configure flow access policies on the [guest user profile](https://help.salesforce.com/articleView?id=platform.rss_config_guest_user_profile.htm&type=5&language=en_US) for the appropriate site.

It’s also a good security practice to remove permissions to run subflows, even if users run the subflow independently. From a security perspective, it’s better to create two separate flows and give access only to the flow that the user runs directly, and not the one running as a subflow. Grant flow access only to the highest-level parent flow and not to the subflows. The same recommendation can apply to invocable Apex methods called by flows. Avoid granting user access to those classes, so that calling those methods is limited to only the flows that they were meant to be called from.

Be aware that if a user has permission to run a screen flow, they can:

-   Invoke the flow at any time and with parameters of their choosing.
-   Cancel the flow at any time.

These considerations also apply to subflows, or flows called from other flows.

In particular, flow users can:

-   View and modify the input (start) variables to a screen flow.
-   View output variables returned from a screen subflow to the parent flow.
-   If they have permission to run the subflow, modify input variables to subflows.

If any of these abilities violates your security policy, don’t use subflows. For example, if billing information or other sensitive information that must be kept confidential is handled by subflows. Keep business logic in the main flow.
