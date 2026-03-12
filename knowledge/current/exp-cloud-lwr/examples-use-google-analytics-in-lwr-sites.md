---
title: "Examples: Use Google Analytics in LWR Sites"
domain: exp-cloud-lwr
topic: examples-use-google-analytics-in-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.534Z
estimatedTokens: 1283
keywords: [Examples, Google, Analytics, LWR, Sites, Discover, how, visitors, engage, site, track, their, interactions, real-world, <x-oasis-script>]
---

# Examples: Use Google Analytics in LWR Sites

> Discover how visitors engage with your LWR site by using Google Analytics to track their
  interactions. These real-world examples use the <x-oasis-script> privileged script tag. This tag allows Google Analytics to interact
  with elements within the shadow DOM and attach event handlers such as click events or form
  submissions.

# Examples: Use Google Analytics in LWR Sites

Discover how visitors engage with your LWR site by using Google Analytics to track their interactions. These real-world examples use the <x-oasis-script> privileged script tag. This tag allows Google Analytics to interact with elements within the shadow DOM and attach event handlers such as click events or form submissions.

In each example, you add the provided code sample to the head markup. To access the head markup in your LWR site, in Experience Builder click **Settings** | **Advanced** | **Edit Head Markup**.

![Head markup showing x-oasis-script tags](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_head_markup.png&folder=exp_cloud_lwr)

Because you’re adding Google Analytics as a third-party library, switch to Relaxed CSP in Experience Builder in **Settings** | **Security & Privacy**. Also add the URL for your Google Analytics script to the Trusted Sites for Scripts list on this page.

![Security & Privacy page in Experience Builder settings](/docs/resources/img/en-us/260.0?doc_id=images%2Flwr_settings_security_and_privacy.png&folder=exp_cloud_lwr)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

Each sample includes the same <script> tag that adds an entry to the browser stack to facilitate event tracking on pages in an LWR site, which is a single-page application.

Each sample also loads the Google Analytics JavaScript library using this code, where {id} represents the Google Analytics ID: <x-oasis-script async src=“https://www.googletagmanager.com/gtag/js?{id}”></x-oasis-script>.

## Example 1: Track Page Views

This example tracks when a user views a page in an LWR site. In the sample code, the pushstate event is fired when a visitor lands on a site page. The event listener on the window passes the event to Google Analytics along with the page URL.

[View the Sample Code](https://github.com/salesforce-experiencecloud/privileged-script-third-party-libraries/blob/master/googleAnalytics/trackPageViews.html)

## Example 2: Track Click Events

In this scenario, a page in the LWR site contains a button called Submit and a link called Download. Google Analytics can track when a customer clicks the button or the link.

In the sample code, the buttonAndLinkClick function uses the .button\_class class to listen for a click event on the Submit button. The function also uses .download\_link to listen for a click event on the Download link. When either event is fired, the event listeners on the button and link pass the event details to Google Analytics under the link\_button\_click event category.

[View the Sample Code](https://github.com/salesforce-experiencecloud/privileged-script-third-party-libraries/blob/master/googleAnalytics/trackButtonAndLinkClicks.html)

## Example 3: Track Form Input and Submissions

In this scenario, a page in the LWR site contains a form called Subscribe, and within the form, a button called Submit. Google Analytics can track when a user enters information in the form or clicks Submit.

In the sample code, the formClick function uses the .subscription\_form\_class class to listen for a change event on the form input fields and a click event on the Submit button. When either event is fired, the event listener on the form passes the event details to Google Analytics under the input\_change event category or the form\_submit\_success event category.

[View the Sample Code](https://github.com/salesforce-experiencecloud/privileged-script-third-party-libraries/blob/master/googleAnalytics/trackFormInputsAndSubmissions.html)

## Example 4: Track Outbound Link Clicks

In this scenario, a page in the LWR site contains links that redirect users to external websites. Google Analytics can track when a user clicks any of these outbound links.

In the sample code, the trackOutboundLinks function uses the .outbound class to listen for a click event on an external link. When a click event is fired, the event listener on the link passes the event details—including the external redirect link—to Google Analytics under the outbound event category.

[View the Sample Code](https://github.com/salesforce-experiencecloud/privileged-script-third-party-libraries/blob/master/googleAnalytics/trackOutgoingLinks.html)

## Example 5: Track Visit Duration

In this scenario, Google Analytics tracks how long a user stays on a page on the LWR site.

In the sample code, the beforeunload event listens for a page refresh or page unload. The window.performance attribute from the global window object measures the time since the user landed on the page. When the beforeunload event is fired, the event listener on the window passes the event details to Google Analytics, including the duration of the user’s stay on the page.

[View the Sample Code](https://github.com/salesforce-experiencecloud/privileged-script-third-party-libraries/blob/master/googleAnalytics/trackUserStayDuration.html)

#### See Also

-   [*Google Help:* Analytics Help](https://support.google.com/analytics/?hl=en#topic=10737980 "Google Help: Analytics Help - HTML (New Window)")
