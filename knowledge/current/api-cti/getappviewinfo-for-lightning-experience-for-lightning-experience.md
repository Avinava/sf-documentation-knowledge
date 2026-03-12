---
title: "getAppViewInfo() for Lightning Experience for
            Lightning Experience"
domain: api-cti
topic: getappviewinfo-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.718Z
estimatedTokens: 527
keywords: [getAppViewInfo, Lightning, Experience, current, application, view, API, version, 38.0, later, Usage, Arguments, Sample, Code–HTML, JavaScript]
---

# getAppViewInfo() for Lightning Experience for
            Lightning Experience

> Returns information about the current application view. This method is available in
                API version 38.0 or later.

# getAppViewInfo() for Lightning Experience for Lightning Experience

## Usage

Returns information about the current application view. This method is available in API version 38.0 or later.

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

When you switch from a record detail page to a list view, this method returns:

-   In Lightning Experience, only the url
-   In Lightning Experience console apps, nothing is returned because the listener isn’t invoked

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | Returns true if the API method call was invoked successfully, false otherwise. |
| returnValue | object | Returns the URL of the current application view and includes any applicable record ID, record name, and object type. For example:{     "url": "https://MyDomainNamemy.salesforce.com/lightning/r/Case/500D0000003tcchIAA/view?t=1459806689555",     "recordId": "001x0000003DGQR",     "recordName": "Acme",     "objectType": "Account" }Invoking this API method on a person account object returns the following additional information.accountId or contactId—The associated account or contact ID.personAccount—Which is true if person accounts are enabled in your org, false otherwise.For example:{     "url": "https://MyDomainNamemy.salesforce.com/lightning/r/Account/001x0000003DGQR/view",     "recordId": "001x0000003DGQR",     "recordName": "Acme Person Account",     "objectType": "Account",     "contactId": "003D000000QOMqg",     "personAccount": true }NoteSince the URL structure of the returnValue can change in the future, we recommend that you don’t build any logic based on it. |
| error | array | If the API call was successful, this variable is null. If the API call failed, this variable returns an array of error messages. |

## Code Examples

```
sforce.opencti.getAppViewInfo({
     callback: function
});
```

```
<html>
  <head>
    <script type="text/javascript" src="https://domain:port/support/api/66.0/lightning/opencti_min.js"></script>
    <script type="text/javascript">
      var callback = function(response) {
         if (response.success) {
            console.log('API method call executed successfully! returnValue:', response.returnValue);
         } else { 
            console.error('Something went wrong! Errors:', response.errors);
         } 
      };

      function getAppViewInfo() {
          sforce.opencti.getAppViewInfo({callback: callback});
      }
     </script>
  </head>
  <body>
    <button onclick="getAppViewInfo();">getAppViewInfo()</button>
  </body>
</html>
```

```
{
    "url": "https://MyDomainNamemy.salesforce.com/lightning/r/Case/500D0000003tcchIAA/view?t=1459806689555",
    "recordId": "001x0000003DGQR",
    "recordName": "Acme",
    "objectType": "Account"
}
```

```
{
    "url": "https://MyDomainNamemy.salesforce.com/lightning/r/Account/001x0000003DGQR/view",
    "recordId": "001x0000003DGQR",
    "recordName": "Acme Person Account",
    "objectType": "Account",
    "contactId": "003D000000QOMqg",
    "personAccount": true
}
```

## Related Topics

- error
                              messages (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_error_messages_lightning.htm)
