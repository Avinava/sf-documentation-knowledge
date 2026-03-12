---
title: "Work with a Continuation in an Apex Class"
domain: lightning
topic: work-with-a-continuation-in-an-apex-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:47.916Z
estimatedTokens: 727
keywords: [Work, Continuation, Apex]
---

# Work with a Continuation in an Apex Class

> To work with a continuation in an Apex class, use the Apex Continuation object.

# Work with a Continuation in an Apex Class

To work with a continuation in an Apex class, use the Apex Continuation object.

1.  Before you can call an external service, you must add the remote site to a list of authorized remote sites in the Salesforce user interface. From **Setup**, in the **Quick Find** box, enter Remote Site Settings. Select **Remote Site Settings**, and then click **New Remote Site**. Add the callout URL corresponding to LONG\_RUNNING\_SERVICE\_URL in the Apex Class Continuation example below.

    If the callout specifies a named credential as the endpoint, you don’t need to configure remote site settings. A named credential specifies the URL of a callout endpoint and its required authentication parameters in one definition. In your code, specify the named credential URL instead of the long-running service URL.

2.  To make a long-running callout, define an Apex method that returns a Continuation object. (Don’t worry about the attributes of the @AuraEnabled annotation yet. We explain that soon.)

    ```

    ```

3.  Set an Apex callback method to be invoked after the callout completes in the continuationMethod property of the Continuation object. In this example, the callback method is processResponse. The callback method must be in the same Apex class.

    ```

    ```

4.  Set the endpoint for a callout by adding an HttpRequest object to the Continuation object. A single Continuation object can contain a maximum of three callouts. Each callout must have a remote site or named credential defined in Setup.

    ```

    ```

5.  Set data to pass to the callback method in the state property of the Continuation object. The state property has an Object type so you can pass in any data type that’s supported in Apex.

    ```

    ```

6.  Code the logic in the Apex callback. When all the callouts set in the Continuation object have completed, the Apex callback method, processResponse, is invoked. The callback method has two parameters that you can access.

    ```

    ```

    1.  labels—A list of labels, one for each request in the continuation. These labels are automatically created.
    2.  state—The state that you set in the state property in your Continuation object.
7.  Get the response for each request in the continuation. For example:

    ```

    ```

8.  Return the results to the JavaScript controller.

## Complete Apex Class Example with Continuation

Here’s a complete Apex class that ties together all the earlier steps.

```

```

#### See Also

-   [Make Long-Running Callouts with Continuations](atlas.en-us.lightning.meta/lightning/apex_continuations.htm "Use the Continuation class in Apex to make a long-running request to an external web service. Process the response in a callback method. Continuations are the preferred way to manage callouts because they can provide substantial improvements to the user experience.")

## Code Examples

```apex
@AuraEnabled(continuation=true cacheable=true)
public static Object startRequest() {
    // Create continuation. Argument is timeout in seconds.
    Continuation con = new Continuation(40);
    // more to come here
    return con;
}
```

```
con.continuationMethod='processResponse';
```

```
HttpRequest req = new HttpRequest();
req.setMethod('GET');
req.setEndpoint(LONG_RUNNING_SERVICE_URL);
con.addHttpRequest(req);
```

```
con.state='Hello, World!';
```

```apex
public static Object processResponse(List<String> labels, Object state)
```

## Related Topics

- Make Long-Running Callouts with Continuations (atlas.en-us.lightning.meta/lightning/apex_continuations.htm)
