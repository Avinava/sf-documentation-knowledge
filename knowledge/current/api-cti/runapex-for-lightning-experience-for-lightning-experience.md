---
title: "runApex() for Lightning Experience for Lightning
            Experience"
domain: api-cti
topic: runapex-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.924Z
estimatedTokens: 540
keywords: [runApex, Lightning, Experience, Executes, Apex, that’s, exposed, Salesforce, API, version, 38.0, later, Usage, Arguments, Sample]
---

# runApex() for Lightning Experience for Lightning
            Experience

> Executes an Apex method from an Apex class that’s exposed in Salesforce. This
                method is available in API version 38.0 or later.

# runApex() for Lightning Experience for Lightning Experience

## Usage

Executes an Apex method from an Apex class that’s exposed in Salesforce. This method is available in API version 38.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| args | object | A JavaScript object containing the following:apexClass (string)—Specifies the Apex class of the method to execute.methodName (string)—Specifies the method to execute.methodParams (string)—Specifies the method parameters to pass. The string must include field value pairs and be formatted as a valid query string.For example:name=acme&phone=(212) 555-5555If the Apex method doesn’t take any parameters, you can specify methodParams as none or an empty object, {}.callback (function)—JavaScript method called upon completion of the method. |

## Sample Code–HTML and JavaScript

1.  In Setup, create an Apex class and Apex method.

    ```

    ```

2.  In Setup, click **Generate from WSDL** to expose the method and class so that a third-party softphone can call it.
3.  Add your code to the softphone:

    ```

    ```

4.  Output is returned. In this example, one account named Acme was found:

    ```

    ```


## Response

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | Returns true if the API method call was invoked successfully, false otherwise. |
| returnValue | object | A JavaScript object containing the result from executing the method from the specified Apex class. No specific format is returned. The format is determined by the value from the method that executed. For example:{"runApex":"[{"attributes":{"type":"Account", \"url":"/services/data/v66.0/sobjects/Account/ 001xx000003DGawAAG\"},"Id":"001xx000003DGawAAG", \"Name":"Acme","Phone":"(212)555-5555"}]"} |
| errors | array | If the API call was successful, this variable is null. If the API call failed, this variable returns an array of error messages. |

#### See Also

-   [*Salesforce Help*: Apex Code Overview](https://help.salesforce.com/apex/HTViewHelpDoc?id=code_about.htm&language=en_US "Salesforce Help: Apex Code Overview - html (New Window)")

## Code Examples

```
sforce.opencti.runApex({
    apexClass:string, 
    methodName:string,
    methodParams:string,
    callback:function //Optional
})
```

```apex
global class AccountRetrieval{

webService static String getAccount(String name) {
   List<Account> accounts = new List<Account>();
   for (Account account : Database.query('Select Id, Name, phone from Account where Name like \'' + name + '%\'')){
       accounts.add(account);
   }
       String JSONString = JSON.serialize(accounts);
       return JSONString;
   }
}
```

```
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/66.0/lightning/opencti_min.js"></script>
   <script type="text/javascript">
       var callback = function(response) {
         if (response.success) {
            console.log('API method call executed successfully! returnValue:', response.returnValue);
         } else { 
            console.error('Something went wrong! Errors:', response.errors);
         }
      };
       function runApex() {
          var param = {apexClass: 'AccountRetrieval', methodName: 'getAccount', methodParams: 'name=acme'};
          param.callback = callback;
          //Invokes API method
          sforce.opencti.runApex(param);
       }
   </script>
</head>
<body>
       <button onclick="runApex();">runApex</button>
</body>
</html>
```

```
{
    "success": true,
    "returnValue": {
        "runApex": "[{"attributes":{"type":"Account","url":"/services/data/v38.0/sobjects/Account
/001xx000003DGawAAG\"},"Id":"001xx000003DGawAAG","Name":"Acme","Phone":"(212) 555-5555"}]"
    },
    "errors": null
}
```

```
{"runApex":"[{"attributes":{"type":"Account",
\"url":"/services/data/v66.0/sobjects/Account/
001xx000003DGawAAG\"},"Id":"001xx000003DGawAAG",
\"Name":"Acme","Phone":"(212)555-5555"}]"}
```

## Related Topics

- error
                                    messages (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_error_messages_lightning.htm)
