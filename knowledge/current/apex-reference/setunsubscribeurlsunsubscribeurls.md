---
title: "setUnsubscribeUrls(UnsubscribeUrls)"
domain: apex-reference
topic: setunsubscribeurlsunsubscribeurls
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.284Z
keywords: [setUnsubscribeUrls, UnsubscribeUrls, Optional., Sets, mailto, URI, HTTP, URL, mechanism, unsubscribing, recipient, email, list., list, unsubscribe, URLs, passed, through, added, List-Unsubscribe]
---

# setUnsubscribeUrls(UnsubscribeUrls)

> Optional. Sets a mailto URI and HTTP URL
    of a mechanism for unsubscribing a recipient from an email list. A list of all unsubscribe URLs
    passed through setUnsubscribeUrls is added to
    the List-Unsubscribe header. A minimum of one URL is required
    to use this method.

### setUnsubscribeUrls(UnsubscribeUrls)

Optional. Sets a mailto URI and HTTP URL of a mechanism for unsubscribing a recipient from an email list. A list of all unsubscribe URLs passed through setUnsubscribeUrls is added to the List-Unsubscribe header. A minimum of one URL is required to use this method.

#### Signature

public void setUnsubscribeUrls(List<String> unsubscribeUrls)

#### Parameters

UnsubscribeUrls

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

#### Return Value

Type: void

#### Usage

Provide a list of URLs that support unsubscribe functionality by offering recipients multiple ways to opt-out of future communications. Each provided URL can use different protocols to allow for technical capacities of the recipient.

All setUnsubscribeUrls must have a value of one of these types:

-   Mailto: Allows recipients to send an unsubscribe request via email.
    -   Example: mailto:listrequest@example.com?subject=unsubscribe

-   HTTP: Directs recipients to a web page where they can unsubscribe.
    -   Example: http://example.com/unsubscribe.html?opaque=123456789

-   HTTPS: Directs recipients to a secure web page to unsubscribe.
    -   Example: https://example.com/unsubscribe.html?opaque=123456789

#### Example

This example demonstrates how to send an email using Salesforce's Messaging.SingleEmailMessage class that includes an option to include an unsubscribe link for a user to click. It creates an email message, sets the recipient's email address, subject, and body, and includes an unsubscribe URL. The email message is added to a list and sent using the Messaging.sendEmail method.

```

```