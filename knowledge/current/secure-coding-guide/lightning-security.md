---
title: "Lightning Security"
domain: secure-coding-guide
topic: lightning-security
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.498Z
estimatedTokens: 4776
keywords: [Lightning, Security, General, Considerations]
---

# Lightning Security

> General Lightning Security Considerations

# Lightning Security

**General Lightning Security Considerations**

Third-party Lightning components and apps operate in a special domain (lightning.force.com or lightning.com) that's shared with Salesforce-authored Lightning code -- in particular, setup.app, which controls many sensitive security settings. Visualforce applications, by contrast, are served from a different domain (force.com) that isn't shared with Salesforce code. Because Lightning code shares the same origin as Salesforce-authored code, increased restrictions are placed on third-party Lightning code. These restrictions are enforced by Lightning Locker and a special Content Security Policy. There’s also additional scrutiny in the AppExchange security review.

When developing Lightning apps, ensure that the [stricter CSP](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/content-security-policy-stricter.html "HTML (New Window)") setting is enabled. Org admins should enable this setting to protect the org's security controls from vulnerabilities in custom Lightning components. Develop and test your code with stricter CSP enabled in order to ensure compatibility. Note that stricter CSP is enabled by default beginning with Summer '18, but not in orgs created previously.

**Content Security Policy for Lightning Components**

Lightning components are currently subject to a Content Security Policy (CSP) with the following directives. See [CSP Directives](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) for more information.

| Directive | Summary |
| --- | --- |
| default-src 'self' | Default policy that resources may be only loaded from the same domain (lightning.force.com or lightning.com). |
| script-src 'self' | Scripts may only be loaded from the same domain (no external script loads). Use static resources to store all scripts. |
| 'unsafe-inline' | Inline JavaScript is not blocked by the CSP but is blocked in the security review as future CSP settings will not allow unsafe-inline. Do not write any code using inline JS in order to prevent your components from malfunctioning when CSP is tightened. |
| object-src 'self' | <object> <embed> and <applet> elements can only be loaded from the same domain (use static resources). |
| style-src 'self' | CSS styles can only be loaded from the same domain (use static resources). |
| img-src 'self' | Images can only be loaded from the same domain. |
| img-src 'http:' 'https:' 'data:' | Images can only be loaded via http, https, or data URIs. The security review requires https. |
| style-src 'https:' | CSS styles can only be loaded via https. |
| media-src 'self' | Audio and video elements can only be loaded from the same domain. |
| frame-ancestors https: | The page can be embedded only via an https parent frame. |
| frame-src https: | All frames must be loaded via https. |
| font-src https: data: | Fonts can be loaded via https and data URIs. |
| connect-src 'self' | XHR callbacks and websockets can only connect back to the same domain. |
| 'unsafe-eval' | eval() and related reflection operations are not blocked by the CSP but are blocked in the AppExchange security review. |

Additional Restrictions For JavaScript in Lightning Components

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=secure_coding_guide)

#### Note

As of Spring ’19 (API version 45.0), you can build Lightning components using two programming models: the Lightning Web Components model, and the original Aura Components model. Lightning web components are custom HTML elements built using HTML and modern JavaScript. Lightning web components and Aura components can coexist and interoperate on a page.

In addition to CSP directives, secure components also meet the following restrictions.

| Restriction | Aura Components | Lightning Web Components |
| --- | --- | --- |
| Components may only read or modify DOM elements belonging to the same namespace. To pass data they must communicate through the public API. | Set Aura attributes, call Aura methods, or use Aura or DOM events. | Use methods and attributes with the @api decorator or use events. |
| Events must not be fired in a renderer function | Fire events from a controller method or a helper method called by a controller method. | No restriction. |
| Component attributes must not be changed during a render cycle to avoid render loops. | Modify attributes from a controller method or a helper method called by a controller method. | Components should not modify their own attributes in a renderedCallback. |
| Components must properly load resources like scripts and stylesheets instead of using script or link tags. | Use the ltng:require component. | Use the lightning/platformResourceLoader module |
| Components must not override native window or document functions. | Aura components must not override window or document functions. | Lightning web components must not override window or document functions |
| Inline JavaScript must only be used for methods in the component markup. For example<div onmouseover=”myFunction”>foo</div> | Aura component method<div onmouseover="{!c.myControllerFunction}">foo</div> | Lightning web component method<div onmouseover={myComponentFunction}>foo</div> |
| Components submitted for security review must include all CSS and JavaScript libraries in static resources. | Load all libraries using ltng:require from a $Resource URL. | Load all libraries using lightning/platformResourceLoader from a $Resource URL. |

You should also be familiar with the restrictions listed in [Security with Lightning Locker](https://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.security_locker_service).

When you submit a Lightning component or app for security review, include all source JavaScript files in static resources, as we cannot review minified code directly. Failure to do so delays the review of your components until we get the appropriate source files. This also applies to sources that compile to JavaScript.

Component Security Boundaries and Encapsulation

In Apex, every method that is annotated @AuraEnabled should be treated as a webservice interface. That is, the developer should assume that an attacker can call this method with any parameter, even if the developer's client-side code does not invoke the method or invokes it using only sanitized parameters. Therefore the parameters of an @AuraEnabled method should:

-   not be placed into a SOQL query unsanitized
-   not be trusted to specify which fields and objects a user can access

Whenever an @AuraEnabled method modifies sObjects, full CRUD/FLS as well as sharing checks should be made to ensure that the client does not elevate their privileges when invoking this method. These checks need to be performed on the server (in Apex). Note that this is different than the situation with Visualforce, in which CRUD/FLS checks can be performed for you by the Visualforce presentation layer. This means porting code from Visualforce to Lightning requires the addition of CRUD/FLS checks each time an sObject is accessed.

Because Lightning components are meant to be re-usable and shareable, each global or public attribute should be viewed as untrusted from the point of view of the component's internal logic. In other words, don't take the contents of an attribute and render them directly to the DOM via innerHTML or $().html(). It does not matter whether, in your app, the attributes are provided by another component you control. When you need to perform a raw HTML write or set an href attribute, then the attribute must be marked sanitized in your JavaScript code.

An important aspect to understand is how session authentication works for your AuraEnabled components. If an Experience Cloud site user's session expires, and the rendered page contains Lightning components that can invoke custom Apex methods (AuraEnabled), the methods are invoked as the site's guest user. Plan your implementation to either provide/revoke access to the site guest user or to monitor for session time-outs to invoke login requests as needed.

**Access Control in Apex Controllers and Supporting Classes**

When Lightning components invoke server-side controllers, the developer must ensure that the server-side read/write operations don’t subvert the organization's security policy as set by the user's profile and sharing permissions. All access control enforcement must occur server-side, because the client is under the control of the attacker. Fortunately you can ensure that your server-side code is safe to use with Lightning components by taking some additional steps when writing your Apex classes.

Sharing in Apex Classes

All controller classes *must* have the with sharing keyword. There are no exceptions. In some cases, your code needs to elevate privileges beyond those of the logged in user. For example, you may have a method that returns summary data computed over fields that the logged-in user cannot access. In this case, the controller must still use the with sharing keyword, but a specific Aura-enabled method may call a helper method in a class that is explicitly marked without sharing. All privileged operations should be placed into these helper classes, and each privileged helper class should perform a single privileged function and no unprivileged functions. All other classes must be with sharing.

```

```

```

```

```

```

Avoid ambiguous sharing policies that make auditing difficult, particularly in large apps with complex control flows. Write apps in such a way that an auditor who looks at a class that performs a database operation can quickly and accurately determine if the database operation respects user permissions. All global classes, classes that expose webservices, or allow for remote invocation (such as Aura Enabled classes and remote action classes) must always use the with sharing keyword. The exception is for controller classes in sites, including Experience Cloud sites, where a with sharing policy could force the granting of excessive permissions to guest users.

CRUD/FLS Enforcement

CRUD/FLS permissions aren’t automatically enforced in Lightning components or controllers. You can’t rely on Lightning components to enforce security as the client is under the control of the attacker, so all security checks must always be performed server-side. You must explicitly check for isAccessible(), isUpdateable()i, isCreateable(), and isDeletable() prior to performing these operations on sObjects.

```

```

**Field Validation Concerns**

For purposes of threat modeling, the client is under the control of the attacker, therefore you cannot rely on client-side field validation to sanitize data written to the server. Client-side field validation has an important usability role -- avoiding round trips for normal (non-malicious) users. Nevertheless, if you require field-level validation of your sObject data model, then this must be performed with triggers. Note that validation in the Aura-enabled server-side controller is also insufficient as users can use the SOAP/REST API to modify objects directly, bypassing the Apex Controller as well as the UI.

**Object Validation Concerns**

When Aura enabled methods receive objects as input types, you must validate the fields within those objects, since any fields could be set by the client. Here’s a typical vulnerable example.

```

```

To do this, you must iterate through all populated fields and check FLS on those fields.

```

```

**Cross Site Request Forgery**

In order to prevent [CSRF attacks](atlas.en-us.secure_coding_guide.meta/secure_coding_guide/secure_coding_cross_site_req_forgery.htm "Learn how to protect yourself from Cross-site Request Forgery (CSRF), a security threat where malicious websites can manipulate your browser to perform actions without your consent on other sites where you are logged in."), do not invoke any server-side controller method that performs a DML operation automatically as the result of a page load. Specifically, do not invoke server-side DML controller method as onInit handlers, or afterRender handlers (if rendering is performed automatically on page load).

```

```

The key is that the DML operation not be performed without an event stemming from human interaction, such as a click. CSRF only applies to server-side DML operations, not operations that update client-side component attributes.

**Cross Site Scripting**

Component markup is rendered differently than standard Visualforce markup (which is rendered server-side) or javascript micro-templating frameworks (which are usually rendered with innerHTML). In Lightning, component markup must be valid xhtml, and the markup is parsed and rendered to the DOM with standard DOM accessors such as setAttribute and textContent. Therefore no html parsing occurs during component markup rendering, and there is no possibility of breaking out of attribute values or nodeValues. When attributes are interpolated into markup, they can only occur as attribute values or the text content of DOM nodes. Lightning attribute values cannot be inserted as attribute names, or portions of attribute values. This means certain constructions that would be valid in Visualforce or most micro-templating frameworks are invalid aura expressions, and most of the remaining constructions are automatically safe:

```

```

Because of this, no encoding is ever performed by the framework when rendering component markup, nor are any encoding functions provided by the framework.

However, there is still the possibility of using unsafe attributes:

```

```

The following is a partial list of unsafe combinations of tags and attributes that should be avoided, if possible within lightning component markup  in order to avoid assigning unsafe values to lightning attributes:

| Tag | Attribute(s) | Issue |
| --- | --- | --- |
| (any) | href or xlink:href | javascript: or data: pseudo-schemes |
| any | on* (event handler) | js execution context |
| iframe, embed | src | javascript: pseudo scheme |
| iframe | srcdoc | html execution context |
| form | formaction | js execution context |
| object | data | js execution via data uri |
| animate | to, from | js execution context |
| any | style | css injection |

This is only a partial list. See [html5sec.org](https://html5sec.org/) for more information about possible unsafe attributes. Of the above unsafe constructions, two are commonly used in component markup, namely anchor tags as well as style tags. There are several options for sanitizing these attributes.

Anchor tags can be sanitized when relative URLs are used:

```

```

The same procedure can be used to control other URIs.

If you must handle both absolute and relative URIs, another option is to mark the attribute as private (for example if you are setting it in your code and are not setting it externally).

Alternately if you cannot mark the attribute as private and must set it in component markup (rather than a custom renderer) you will need to sanitize the attribute yourself with an onChange event:

component:

```

```

with controller:

```

```

Note that the scheme is parsed by the browser rather than with string handling functions. Also note that both the init and change events must be filtered to make sure that only controlled schemes are rendered or re-rendered in your component's markup.

Because the binding between component markup and lightning attributes is automatic, unless you intercept value changes, your code cannot sanitize attributes set from outside your component. Moreover, it is a bad practice to rely on the code that instantiates or interacts with your component to pass you safe values. Relying on the caller to give you data that is safe creates a security dependency between the internal structure of your component and all of the possible callers. In large applications, this typically results in failure to sanitize some input.

Because the above sanitization technique is heavyweight, it is preferable to use only relative URLs in component markup, or to use only private attributes (for example, if the URL is pulled from a URL type on the server).

For style tags, CSS as a language is difficult to sanitize in such a way as to prevent style injection. Moreover, the 'type' fields within lightning attributes are not enforced -- e.g. field marked 'Boolean' may well contain strings, etc. Therefore it is a bad practice to pass attribute values to style tags. Instead use [tokens](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/tokens_using.htm), private attributes, or javascript to manage style changes.

Within javascript, the same cross site scripting issues are possible as with any other javascript code. Be aware that no encoding functions are provided, so if you must use html rendering functions, then place a third-party encoding library such as [secureFilters](https://github.com/salesforce/secure-filters) into your helper (loading this library via static resources creates some race conditions that add complexity to your code). Then, use the secureFilters.html function to sanitize external data passed to rendering functions or third-party libraries that use rendering functions:

```

```

and place the secureFilters code into your helper. Alternately, use an html encoding function that performs the same substitution operations as secureFilters' html() function.

If in the future, encoding functions are provided natively by the framework, this section will be updated with new instructions. Don’t roll your own encoding functions.

Don’t rely on CSP to prevent XSS, as the presence of CSP policies will depend on how your component is surfaced and what the organization's policies are, which is subject to change at runtime. Additionally, CSP will not protect your code from html or style injection.

For more information about general XSS issues, see our [Secure Coding Guidelines](atlas.en-us.secure_coding_guide.meta/secure_coding_guide/secure_coding_cross_site_scripting.htm "Cross-site scripting (XSS) is a prevalent security threat where attackers inject malicious scripts into web pages, potentially leading to data theft, session hijacking, and altered website content. This topic will cover how XSS attacks work and how to protect against them.").

**Arbitrary Redirect**

When redirecting to a third-party side:

1.  Use HTTPS.
2.  Ensure that the domain is hard coded into the source or stored in a custom setting. Storing the domain in a custom object field is not considered sufficient protection.

**Secret Inputs**

In Visualforce, user password entry should be performed with <apex:inputSecret\> tags. The Lightning equivalent for this is the <ui:inputSecret /> component.

**Third-Party Frameworks**

Check out [this blogpost](https://developer.salesforce.com/blogs/developer-relations/2017/02/lockerservice-lightning-container-third-party-libraries-lightning-components.html) about using third-party frameworks within Lightning Locker.

## Code Examples

```apex
public class ExpenseController() {  //Unsafe
    
    @AuraEnabled
    public static String getSummary() {
        doPrivilegedOp() //should not be here  
    }
}
```

```apex
public with sharing class ExpenseController() { //safe 

    @AuraEnabled
    public static String getSummary() {
        HelperClass.doPrivilegedOp()
     }
}
```

```apex
public without sharing HelperClass() { //safe, not a controller and limited functionality

    protected static String doPrivilegedOp() {
        //calculate roll-up field here
    }
}
```

```apex
public with sharing class ExpenseController {

     //ns = namespace, otherwise leave out ns__  
    @AuraEnabled
    public static List<ns__Expense__c> get_UNSAFE_Expenses() {   //vulnerable
        return [SELECT Id, Name, ns__Amount__c, ns__Client__c, ns__Date__c, 
            ns__Reimbursed__c, CreatedDate FROM ns__Expense__c];
     } 

	@AuraEnabled
	public static List<ns__Expense__c> getExpenses() { //safe
        String [] expenseAccessFields = new String [] {'Id',
                                                       'Name',
                                                       'ns__Amount__c',
                                                       'ns__Client__c',
                                                       'ns__Date__c',
                                                       'ns__Reimbursed__c',
                                                       'CreatedDate'
                                                       };


        // Obtaining the field name/token map for the Expense object
        Map<String,Schema.SObjectField> m = Schema.SObjectType.ns__Expense__c.fields.getMap();

        for (String fieldToCheck : expenseAccessFields) {

          // Check if the user has access to view field
          if (!m.get(fieldToCheck).getDescribe().isAccessible()) {

               //also pass error to client
               throw new System.NoAccessException()

               //included to quiet editor
               return null;
            }
         }
 
         //now it is safe to proceed with call
         return [SELECT Id, Name, ns__Amount__c, ns__Client__c, ns__Date__c, 
                     ns__Reimbursed__c, CreatedDate FROM ns__Expense__c];
    	       
       } 
 }
```

```apex
@AuraEnabled
    public static Account insertAccount(Account a){
        // We expect only Name to be set
        if(Schema.SObjectType.Account.fields.Name.isUpdatable()){
            insert a; // <== problem: if Account "a" includes other fields  
                      // or custom fields they will also be set.
            return a;
        }
        
        return new Account();
    }
```

## Related Topics

- CSRF
                attacks (atlas.en-us.secure_coding_guide.meta/secure_coding_guide/secure_coding_cross_site_req_forgery.htm)
- Secure Coding Guidelines (atlas.en-us.secure_coding_guide.meta/secure_coding_guide/secure_coding_cross_site_scripting.htm)
