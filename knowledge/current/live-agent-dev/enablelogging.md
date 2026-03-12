---
title: "enableLogging"
domain: live-agent-dev
topic: enablelogging
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.211Z
estimatedTokens: 2162
keywords: [enableLogging, deployment, enable, logging, particular, API, versions, 28.0, later, Usage, Messages, Logged, Events]
---

# enableLogging

> Use the enableLogging deployment method to enable logging on a particular deployment.
  Available in API versions 28.0 and later.

# enableLogging

Use the enableLogging deployment method to enable logging on a particular deployment. Available in API versions 28.0 and later.

## Usage

Enables logging for a particular deployment, allowing your Web browser’s JavaScript console to store information about the activity that occurs within a deployment. You can retrieve the information from your browser’s developer console, so check the help for your browser if you’re not sure how to find it.

## Syntax

liveagent.enableLogging();

## Parameters

None

## Messages for Logged Events

| Message | Triggered | Meaning |
| --- | --- | --- |
| System initialized. Waiting for the DOM to be ready. | When liveagent.init() is called, usually at page load | Chat endpoint URL, org ID and deployment ID have been set, now waiting for DOM to be ready before continuing. |
| No available event model. Exiting. | During liveagent.init(), if there is an error | This means no DOM event listener was found, which would be very rare. We would not be able to continue at this point, so it would be a hard stop. |
| DOM is ready. Setting up environment. | Upon DOM ready of the page | The page has fully loaded and the DOM is ready, so we perform our first "ping" to the server, which is to get the settings/information about the given deployment ID. |
| Setting state for button {Button ID} to online | When the state of a button has changed to online | The button is available for a chat request to be made. |
| Setting state for button {Button ID} to offline | When the state of a button has changed to offline | The button is not available for a chat request to be made. |
| Requesting new session | During the first ping to the server | No session ID cookie was found, so a new one must be generated. This means it was the first time visiting the site with this deployment code for this browsing session. |
| Reusing existing session | During the first ping to the server | A session cookie exists, so it is reused. This means the visitor has already been to this site during this browsing session (e.g., going from one page to another). |
| Received new session ID | As a response to the first ping | The server generated a new session ID, and it is being stored as a session cookie named "liveagent_sid.” |
| Ping rate set to {Rate}ms | As a response to the first ping | Indicates how frequently (in milliseconds) the page will ping the Chat server. The default is 50000 (50 seconds). This effectively indicates when button refreshes will occur. |
| Pinging server to keep presence | When a ping to the server is made | Indicates the visitor is still connected to and pinging the Chat server, meaning no errors or disconnects have occurred. |
| Disconnecting from Chat | When an error occurs | An error was thrown, whether in response from the server or due to network connectivity issues. Indicates that the visitor will no longer ping Chat for this page load (i.e., they will need to refresh). |
| Received updated Chat server url: {URL}! Consider updating this site's deployment code. | When an org has moved to a new core instance | The Chat instance specified in the deployment code is no longer valid for this org, so the new URL has been provided. For better performance, we recommend updating the deployment code if they receive this. |
| Server Warning: {Message} | A non-fatal exception occurred | A warning condition was encountered, but processing can continue. The message provides further details. |
| Server sent an anonymous warning | A non-fatal exception occurred | A warning condition was encountered, but processing can continue. No message was provided. |
| Server Error: {Message} | A fatal exception occurred | An error condition was encountered, and processing cannot be continued. The message provides further details. |
| Server responded with an error | A fatal exception occurred | An error condition was encountered, and processing cannot be continued. No message was provided. |
| Group Start: Invite {Button ID} Rule Evaluation | Rule evaluation has been triggered | Evaluation of the filter logic for the given invite button ID has begun. This means the button is online and available for chat, and the filter logic will be used to determine if it should be displayed/presented or not. |
| Filter Logic: {Filter Logic} | Rule evaluation has been triggered | An information log containing the string representation of the filter logic of the invite rules as specified in the admin setup area. Useful to understand how the rules will be evaluated. |
| Evaluating StandardInviteRule | When a standard rule is being evaluated | Standard rules are "Number of Page Views" and "URL Match." They are part of the out-of-the-box rules that are provided in the admin setup area. |
| Evaluating TimerInviteRule | When a timer-based rule is being evaluated | Timer-based rules are "Seconds on Page" and "Seconds on Site." They are part of the out-of-the-box rules as well, except these rules will be re-evaluated again in the future when the required number of seconds has passed if the criteria was not met the first time (e.g., on page load). |
| Evaluating CustomInviteRule | When a custom rule is being evaluated | "Custom Variable" rules allow variable names to be specified which will be compared against upon evaluating these rules. The "setCustomVariable" API is used in conjunction with these to specify the value to compare with against the value specified in the admin setup area. |
| CustomInviteRule evaluation failed due to missing custom variable | When a custom rule is being evaluated | A "Custom Variable" rule was set up, but the "setCustomVariable" API was never called with this variable name specified, therefore the rule can not be evaluated. |
| Evaluate: {From Value} == {To Value} | When a rule with an "equals" comparator is being evaluated | A rule is being evaluated by comparing that the two values match exactly. |
| Not Equals - Evaluate: {From Value} != {To Value} | When a rule with a "not equal to" comparator is being evaluated | A rule is being evaluated by comparing that the two values do not match. |
| Starts With - Evaluate: {From Value} indexOf {To Value} == 0 | When a rule with a "starts with" comparator is being evaluated. | A rule is being evaluated by comparing that the first value starts with the second value. |
| Contains - Evaluate: {From Value} indexOf {To Value} != -1 | When a rule with a "contains" comparator is being evaluated | A rule is being evaluated by comparing that the first value contains the second value. |
| Does Not Contain - Evaluate: {From Value} indexOf {To Value} == -1 | When a rule with a "does not contain" comparator is being evaluated | A rule is being evaluated by comparing that the first value does not contain the second value. |
| Less Than - Evaluate: {From Value} < {To Value} | When a rule with a "less than" comparator is being evaluated | A rule is being evaluated by comparing that the first value is less than the second value. |
| Greater Than - Evaluate: {From Value} > {To Value} | When a rule with a "greater than" comparator is being evaluated | A rule is being evaluated by comparing that the first value is greater than the second value. |
| Less or Equal - Evaluate: {From Value} <= {To Value} | When a rule with a "less or equal" comparator is being evaluated | A rule is being evaluated by comparing that the first value is less than or equal to the second value. |
| Greater or Equal - Evaluate: {From Value} >= {To Value} | When a rule with a "greater or equal" comparator is being evaluated | A rule is being evaluated by comparing that the first value is greater than or equal to the second value. |
| Evaluating Atom Node: {Rule ID} | When a rule is being evaluated | Indicates that an actual rule is being evaluated. |
| Group Start: Evaluating And Node | When two rules are being evaluated with an "AND" clause | When multiple rules are used, this indicates when the criteria of a pair of rules must both be "true." |
| Group Start: Evaluating Or Node | When two rules are being evaluated with an "OR" clause | When multiple rules are used, this indicates when the criteria of a pair of rules must be "true" for one of them. |
| Group Start: Evaluating Not Node | When two rules are being evaluated with a "NOT" clause | This indicates to check for the opposite of what the criteria evaluates to. |
| Setting invite delay to: {Invite Delay} | When a timer-based rule has not yet met the criteria | If the criteria for a timer-based rule is not met, a delay is set to attempt to evaluate the rules again in the future when the criteria will have been met. |
