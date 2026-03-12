---
title: "Open Redirects"
domain: packagingGuide
topic: open-redirects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.160Z
estimatedTokens: 316
keywords: [Open, Redirects, redirect, occurs, application, dynamically, user-controlled, any, validation, Prevent, hardcoded, Apex, Revised, Code]
---

# Open Redirects

> An open redirect occurs when an application dynamically redirects to a user-controlled
    parameter value without any validation. Prevent open redirects by using hardcoded
    redirects.

# Open Redirects

An open redirect occurs when an application dynamically redirects to a user-controlled parameter value without any validation. Prevent open redirects by using hardcoded redirects.

Open redirects are also known as arbitrary or unvalidated redirects. This vulnerability is used in phishing attacks to redirect users to any URL.

## Apex Example

In this function definition, the String.redirect statement retrieves the redirect URL parameter for the current page. The parameter is used to craft a redirection URL, and then to perform a client-side redirect to the crafted URL.

```

```

The <apex:form> Visualforce markup view triggers the changepassword action, which results in an open redirect vulnerability in a package.

```

```

## Revised Code

Open redirects expose your redirection parameters to potential attackers. You can prevent open redirects using multiple strategies. One strategy is to use hardcoded redirects. In a hardcoded redirect, you set the value explicitly as shown in this example:

```

```

To learn more about open redirects and how to prevent them in your code, check out the [Secure Server-Side Development module](https://trailhead.salesforce.com/content/learn/modules/secure-serverside-development) on Trailhead.

## Code Examples

```apex
public PageReference changepassword(){
   PageReference savePage;
   String redirect = ApexPages.currentPage().getParameters().get('redirect');
   redirect = (redirect == NULL) ? '/home/home.jsp' : redirect;
   savePage = new PageReference(redirect);
   savePage.setRedirect(true);
   return savePage;
}
```

```
<apex:form>
   Redirection action: <apex:inputText value="{!userInput}" />
   <br/><apex:commandButton value="Submit" action="{!changepassword}" />
</apex:form>
```

```apex
public PageReference changepassword(){
   PageReference savePage;
   savePage = new PageReference('/home/home.jsp');
   savePage.setRedirect(true);
   return savePage;
}
```
