---
title: "Return Result for Synchronous Code"
domain: lightning
topic: return-result-for-synchronous-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.138Z
estimatedTokens: 1163
keywords: [Result, Synchronous, Code, aura, executes, synchronously, finishes, executing, statement, JavaScript, Step, Define, Markup, Implement, Logic]
---

# Return Result for Synchronous Code

> aura:method executes synchronously. A synchronous
    method finishes executing before it returns. Use the return statement to return a value from synchronous JavaScript code.

# Return Result for Synchronous Code

aura:method executes synchronously. A synchronous method finishes executing before it returns. Use the return statement to return a value from synchronous JavaScript code.

An asynchronous method can continue to execute after it returns. JavaScript code often uses the callback pattern to return a result after asynchronous code completes. We’ll describe later how to return a result for an asynchronous action.

## Step 1: Define aura:method in Markup

Let’s look at a logParam aura:method that executes synchronous code. We’ll use the c:auraMethodCallerWrapper.app and components outlined in [Calling Component Methods](atlas.en-us.lightning.meta/lightning/js_cmp_methods.htm "Use <aura:method> to define a method as part of a component's API. This enables you to directly call a method in a component’s client-side controller instead of firing and handling a component event. Using <aura:method> simplifies the code needed for a parent component to call a method on a child component that it contains."). Here’s the markup that defines the aura:method.

```

```

The logParam aura:method has an aura:attribute with a name of message. This attribute enables you to set a message parameter when you call the logParam method.

The name attribute of logParam configures the aura:method to invoke logParam() in the client-side controller.

An aura:method can have multiple aura:attribute tags. Each aura:attribute corresponds to a parameter that you can pass into the aura:method. For more details on the syntax, see [aura:method](atlas.en-us.lightning.meta/lightning/ref_tag_method.htm "Use <aura:method> to define a method as part of a component's API. This enables you to directly call a method in a component’s client-side controller instead of firing and handling a component event. Using <aura:method> simplifies the code needed for a parent component to call a method on a child component that it contains.").

You don’t explicitly declare a return value in the aura:method markup. You just use a return statement in the JavaScript controller.

## Step 2: Implement aura:method Logic in Controller

The logParam aura:method invokes logParam() in auraMethodController.js. Let’s look at that source.

```

```

logParam() simply logs the parameter passed in and returns the parameter value to demonstrate how to use the return statement. If your code is synchronous, you can use a return statement; for example, you’re not making an asynchronous server-side action call.

## Step 3: Call aura:method from Parent Controller

callAuraMethod() in the controller for c:auraMethodCaller calls the logParam aura:method defined in its child component, c:auraMethod. Here’s the controller for c:auraMethodCaller.

```

```

callAuraMethod() finds the child component, c:auraMethod, and calls its logParam aura:method with an argument for the message parameter of the aura:method.

```

```

auraMethodResult is the value returned from logParam.

## Step 4: Add Button to Initiate Call to aura:method

The c:auraMethodCaller markup contains a lightning:button that invokes callAuraMethod() in auraMethodCallerController.js. We use this button to initiate the call to aura:method in the child component.

```

```

#### See Also

-   [Return Result for Asynchronous Code](atlas.en-us.lightning.meta/lightning/js_cmp_methods_async.htm "aura:method executes synchronously. Use the return statement to return a value from synchronous JavaScript code. JavaScript code that calls a server-side action is asynchronous. Asynchronous code can continue to execute after it returns. You can’t use the return statement to return the result of an asynchronous call because the aura:method returns before the asynchronous code completes. For asynchronous code, use a callback instead of a return statement.")

-   [Calling Component Methods](atlas.en-us.lightning.meta/lightning/js_cmp_methods.htm "Use <aura:method> to define a method as part of a component's API. This enables you to directly call a method in a component’s client-side controller instead of firing and handling a component event. Using <aura:method> simplifies the code needed for a parent component to call a method on a child component that it contains.")

-   [aura:method](atlas.en-us.lightning.meta/lightning/ref_tag_method.htm "Use <aura:method> to define a method as part of a component's API. This enables you to directly call a method in a component’s client-side controller instead of firing and handling a component event. Using <aura:method> simplifies the code needed for a parent component to call a method on a child component that it contains.")

## Code Examples

```
<!-- c:auraMethod -->
<aura:component>
    <aura:method name="logParam"
      description="Sample method with parameter">
        <aura:attribute name="message" type="String" default="default message" />
    </aura:method>
    
    <p>This component has an aura:method definition.</p>
</aura:component>
```

```
/* auraMethodController.js */
({
    logParam : function(cmp, event) {
        var params = event.getParam('arguments');
        if (params) {
            var message = params.message;
            console.log("message: " + message);
            return message;
        }
    },
})
```

```
/* auraMethodCallerController.js */
({
    callAuraMethod : function(component, event, helper) {
        var childCmp = component.find("child");
        // call the aura:method in the child component
        var auraMethodResult = 
          childCmp.logParam("message sent by parent component");
        console.log("auraMethodResult: " + auraMethodResult);
    },
})
```

```
childCmp.logParam("message sent by parent component");
```

```
<!-- c:auraMethodCaller.cmp -->
<aura:component >
    <p>Parent component calls aura:method in child component</p>
    <c:auraMethod aura:id="child" />
    
    <lightning:button label="Call aura:method in child component"
        onclick="{! c.callAuraMethod}" />
</aura:component>
```

## Related Topics

- Calling Component Methods (atlas.en-us.lightning.meta/lightning/js_cmp_methods.htm)
- aura:method (atlas.en-us.lightning.meta/lightning/ref_tag_method.htm)
- Return Result for Asynchronous Code (atlas.en-us.lightning.meta/lightning/js_cmp_methods_async.htm)
