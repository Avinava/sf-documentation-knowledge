---
title: "notifyInitializationComplete() for Lightning Experience for Lightning
                        Experience"
domain: api-cti
topic: notifyinitializationcomplete-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.857Z
estimatedTokens: 523
keywords: [notifyInitializationComplete, Lightning, Experience, Notifies, Salesforce, softphone, initialization, switch, standby, URL, initializes, loading, icon, displays, Usage]
---

# notifyInitializationComplete() for Lightning Experience for Lightning
                        Experience

> Notifies Salesforce that
                                        the softphone initialization is complete and that Salesforce
                                        should not switch to a standby URL. While the softphone
                                        initializes, a loading icon displays i

# notifyInitializationComplete() for Lightning Experience for Lightning Experience

## Usage

Notifies Salesforce that the softphone initialization is complete and that Salesforce should not switch to a standby URL. While the softphone initializes, a loading icon displays in the softphone area. To use a standby URL, you must specify the reqStandbyUrl and reqTimeout fields, in the call center’s definition file. For more information, see [Optional Call Center Elements and Attributes](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_call_def_file_optional.htm "The call center definition file can include optional <item> elements in the <section> element.")

The notifyInitializationComplete() method for Lightning Experience works differently from the Salesforce Classic method.

-   In Lightning Experience, the method takes an optional callback object. In Salesforce Classic, the method doesn't take arguments.
-   In Lightning Experience, after you go to the standby URL your browser session continues to use that standby URL. To force the standby URL check, you must restart the browser—close it and open it again. In Salesforce Classic, the standby URL check was completed only after you logged in to Salesforce, and the check wasn't repeated if you kept using the same Salesforce session.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–HTML and JavaScript

```

```

## Response

This method is asynchronous. The response is returned in an object passed to a callback method. The response object contains the following fields.

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | Returns true if the API method call was invoked successfully, false otherwise. |
| returnValue | object | This API method doesn’t return this object. The returnValue is always null. |
| errors | array | If the API call was successful, this variable is null. If the API call failed, this variable returns an array of error messages. |

## Code Examples

```
sforce.opencti.notifyInitializationComplete({
     callback: function //Optional
});
```

```
<html>
  <head>
    <script type="text/javascript" src="http://domain:port/support/api/66.0/lightning/opencti_min.js"></script>
    <script type="text/javascript">
      // Invokes API method
      sforce.opencti.notifyInitializationComplete();
    </script>
  </head>
  <body>
    The Open CTI framework was notified that the softphone initialization is complete.
  </body>
</html>
```

## Related Topics

- Optional Call Center Elements and Attributes (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_call_def_file_optional.htm)
- error
                              messages (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_error_messages_lightning.htm)
