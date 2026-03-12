---
title: "onNavigationChange() for Lightning Experience for
            Lightning Experience"
domain: api-cti
topic: onnavigationchange-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.880Z
estimatedTokens: 682
keywords: [onNavigationChange, Lightning, Experience, listener, invoked, user, navigates, away, browser, tab, comes, back, Usage, Arguments, Sample]
---

# onNavigationChange() for Lightning Experience for
            Lightning Experience

> For example, the listener is invoked when a user navigates away from a browser tab
                and then comes back to the tab.

# onNavigationChange() for Lightning Experience for Lightning Experience

## Usage

Registers a function to call when one of the following actions occur:

-   The URL of the page changes
-   In a standard app in Lightning Experience, a user navigates between browser tabs or windows and the document comes back into focus. If the document doesn’t come back into focus, the listener isn’t invoked. Also, internal navigation actions that open a new record modal, such as the screenPop() method, will invoke the listener.
-   In a console app in Lightning Experience, a user navigates between primary tabs and subtabs in a console, or the document comes back into focus when a user navigates between browser tabs or windows.
-   In a console app, a tab is refreshed, such as when you create a new case in a console and save it.

For example, the listener is invoked when a user navigates away from a browser tab and then comes back to the tab.

This method is available in API version 38.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| listener | function | JavaScript method called upon a navigation change. |

## Sample Code–HTML and JavaScript

```

```

## Payload

The payload object passed to each call to the listener method contains the following fields.

When you switch from a record detail page to a list view, this method returns:

-   In Lightning Experience, only the url
-   In Lightning Experience console apps, nothing is returned because the listener isn’t invoked

| Name | Type | Description |
| --- | --- | --- |
| url | string | Provides the URL of the page the user navigated to. |
| recordId | string | If the user navigated to a Salesforce record, such as an account or case, the loaded record ID is returned. Otherwise, the field is empty. |
| recordName | string | If the user navigated to a Salesforce record, the loaded record name. Otherwise, the field is empty. |
| objectType | string | If the user navigated to a Salesforce record, the loaded object type, such as an account or case. Otherwise, the field is empty. |
| accountId or contactId | string | If the page the user navigated to is the record home of a person account, the associated account or contact ID is returned. |
| personAccount | boolean | Returned only if person accounts are enabled in your org and the user navigates to a person account.If the page the user navigated to is the record home of a person account, this field is true.If the page the user navigated to is not the record home of a person account, this field is false.If the page the user navigated to is a business account, this field along with the accountId and contactId fields aren’t included in the payload. |

## Code Examples

```
sforce.opencti.onNavigationChange({
     listener: function
});
```

```
<html>
  <head>
    <script type="text/javascript" src="https://domain:port/support/api/66.0/lightning/opencti_min.js"></script>
    <script type="text/javascript">
      var listener = function(payload) {
        console.log('Navigation change occurred. Payload: ', payload);
      };

      // Register the listener.
      window.addEventListener('load', function() {
        sforce.opencti.onNavigationChange({listener: listener});
      });
   </script>
  </head>
</html>
```
