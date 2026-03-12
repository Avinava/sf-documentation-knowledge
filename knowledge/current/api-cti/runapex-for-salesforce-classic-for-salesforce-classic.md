---
title: "runApex() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: runapex-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.916Z
estimatedTokens: 426
keywords: [runApex, Salesforce, Classic, Executes, Apex, that’s, exposed, Usage, Arguments, Sample, Code–JavaScript]
---

# runApex() for Salesforce Classic for Salesforce Classic

> Executes an Apex method from an Apex class that’s exposed
                    in Salesforce.

# runApex() for Salesforce Classic for Salesforce Classic

## Usage

Executes an Apex method from an Apex class that’s exposed in Salesforce.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| apexClass | string | Specifies the Apex class of the method to execute. |
| methodName | string | Specifies the method to execute. |
| methodParams | string | Specifies the method parameters to pass. The string must include field value pairs and be formatted as a valid query string. For example:name=acme&phone=(212) 555-5555. |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–JavaScript

1.  An administrator creates an Apex class and Apex method:

    ```

    ```

2.  In the location where you’ve created the Apex class and method in Salesforce, click **Generate WSDL** to expose the method and class so that a third-party softphone can call it.
3.  Add your code to the softphone:

    ```

    ```

4.  Output is returned. In this example, one account named, Acme, was found:

    ```

    ```


## Response

| Name | Type | Description |
| --- | --- | --- |
| result | string | Returns the result from executing the method from the specified Apex class.No specific format is returned. The format is determined by the value from the method that was executed. |
| error | string | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

#### See Also

-   [*Salesforce Help*: Apex Code Overview](https://help.salesforce.com/apex/HTViewHelpDoc?id=code_about.htm&language=en_US "Salesforce Help: Apex Code Overview - html (New Window)")

## Code Examples

```
sforce.interaction.runApex(apexClass:string, methodName:string, methodParams:string, (optional) callback:function)
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
   <script type="text/javascript" src="http://domain:port/support/api/25.0/interaction.js"></script>
   <script type="text/javascript">
       var callback = function (response) {
           if (response.result) {
                  alert(response.result);
            } else {
                   alert(response.error);
           }
        };
       function runApex() {
                //Invokes API method
                sforce.interaction.runApex('AccountRetrieval', 'getAccount', 'name=acme', callback);
        }
</script>
</head>
<body>
       <button onclick="runApex();">runApex</button>
</body>
</html>
```

```
[{"attributes":{"type":"Account",
"url":"/services/data/v25.0/sobjects/Account/001x0000003DGQRAA4"},
"Id":"001x0000003DGQRAA4","Name":"Acme","Phone":"(212) 555-5555"}]
```
