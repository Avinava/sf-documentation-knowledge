---
title: "User Input and Interaction"
domain: pages
topic: user-input-and-interaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.617Z
estimatedTokens: 1587
keywords: [User, Input, Interaction, <apex, input>, attribute, pass-through, HTML, attributes, mobile-friendly, forms, interfaces, efficient, take, advantage]
---

# User Input and Interaction

> Use <apex:input>, the type attribute, and pass-through HTML attributes to
        create mobile-friendly forms and user interfaces that are efficient and take advantage of
        native mobile browser features.

# User Input and Interaction

Use <apex:input\>, the type attribute, and pass-through HTML attributes to create mobile-friendly forms and user interfaces that are efficient and take advantage of native mobile browser features.

Without a keyboard and mouse, standard HTML forms can be difficult for users to fill out and interact with on mobile devices, especially phones. For Visualforce pages that don’t use JavaScript remoting to make requests, choose Visualforce components for form input with an eye towards mobile users. No other change you can make to your Visualforce pages will have a larger usability impact than taking advantage of new HTML5 and mobile browser features to improve your forms and user interface controls.

## Choose Efficient Input Elements

Use <apex:input\> to get user input whenever possible. <apex:input\> is an HTML5-ready, mobile-friendly, general-purpose input component that adapts to the data expected by a form field. It’s even more flexible than <apex:inputField\> because it uses the type attribute to allow client browsers to display type-appropriate user input widgets, such as a date picker, or use a type-specific keyboard that makes entering input on a mobile device much easier.

You can also use <apex:inputField\> to create an HTML input element for a value that corresponds to a field on a Salesforce object. <apex:inputField\> adapts the HTML generated to correspond with the data type of the underlying sObject field. Usually this is what you want, but if it isn’t, use the type attribute to override the automatic data type detection. However, be aware that <apex:inputField\> generates a lot of HTML, and requires additional resources to load, which means it’s not the most efficient component to use over a mobile wireless connection.

## Use the type Attribute to Create Mobile-Friendly Input Elements

Set the type attribute on <apex:input\> components—and <apex:inputField\>, if you’re using it—to display data-type-specific keyboards and other input user interface widgets that are easier to use on touchscreens. The value is passed through to the generated HTML <input\> element, for display in the Salesforce app.

As users step through form elements, the input method for that form element adapts for the type of data expected. Text fields show the standard keyboard, email fields show an email-specific keyboard with characters like the “@” sign and “.com” assigned to keys, date fields show a date picker, and so on.

Here’s an example of a form that illustrates how this works:

```

```

As the user moves through the form fields, either by tapping into them or tapping the **Next** button, the keyboard changes to match the expected data for the field.

![Filling in form fields](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce1%2Fdeveloper%2Fimages%2Fdev_best_practices_vf_form_fields_3fer.png&folder=pages)

These type-specific keyboards make filling in forms much easier for people using their mobile devices.

<apex:input\> allows the following explicit type values to be set:

-   date
-   datetime
-   datetime-local
-   month
-   week
-   time
-   email
-   number
-   range
-   search
-   tel
-   text
-   url

You can also set type to auto, and the data type of the associated controller property or method is used.

The HTML type attribute, including new HTML5 features, is a standard part of HTML. For additional details about the type attribute, what you can use it for, and how it relates to mobile development, see [WHATWG’s list of input type attribute values and descriptions](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#attr-input-type "HTML (New Window)"). Not all values are supported on Visualforce input components. If you want to use a value not supported by Visualforce, use static HTML instead of a Visualforce tag.

## Use HTML5 Pass-Through Attributes for Client-Side Validation

Set pass-through attributes on your <apex:input\> and other Visualforce components to enable other HTML5 features, such as client-side validation. By performing basic validation on the client side, you can avoid sending a request to the server and waiting for a response, when there are easily-corrected errors on a form.

Attributes prefixed with html- are passed through to the generated HTML, with the prefix removed. To enable client-side validation, set an html-pattern attribute on the <apex:input\> tag to match expected form values. This will add a pattern attribute to the generated <input\> tag, enabling client-side validation for that field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Client-side validation requires that the Visualforce page be set to API version 29.0 or later, and the page docType be set to html-5.0.

Validation patterns are regular expressions. Form input is checked against the expression, and if it matches, the field input is considered valid. If it doesn’t match, the input is considered invalid; an error message is displayed, and the form won’t be submitted to the server. Here’s an example of a field that requires an email address from a specific domain:

```

```

Other useful HTML5 attributes that can be set as pass-through attributes include:

-   placeholder (set using the html-placeholder attribute)—adds ghost text to the field to show sample input to the user.
-   title (set using the title attribute on <apex:input\>, and the html-title attribute on components without a title attribute)—adds an error message to use if the field fails client-side validation.

For inspiration for how you can use attributes to enhance the usability of HTML <input\> elements, [HTML5 Forms Introduction and New Attributes](http://html5doctor.com/html5-forms-introduction-and-new-attributes/ "HTML (New Window)") is a good survey of the new features in HTML5. For further details, especially for mobile users, and details of client-side forms validation, see [Client-side form validation](http://developers.whatwg.org/forms.html#client-side-form-validation "HTML (New Window)") and [Improving the user experience on mobile devices](http://developers.whatwg.org/forms.html#improving-the-user-experience-on-mobile-devices "HTML (New Window)") in WHATWG’s [HTML: The Living Standard](http://developers.whatwg.org/ "HTML (New Window)").

## Code Examples

```
<apex:form >
  
    <apex:outputLabel value="Phone" for="phone"/>
    <apex:input id="phone" value="{!fPhone}" type="tel"/><br/>
      
    <apex:outputLabel value="Email" for="email"/>
    <apex:input id="email" value="{!fText}" type="email"/><br/>
      
    <apex:outputLabel value="That Number" for="num"/>
    <apex:input id="num" value="{!fNumber}" type="number"/><br/>
      
    <apex:outputLabel value="The Big Day" for="date"/>
    <apex:input id="date" value="{!fDate}" type="date"/><br/>
      
</apex:form>
```

```
<apex:input id="email" value="{!fText}" type="email"
    html-placeholder="you@example.com"
    html-pattern="^[a-zA-Z0-9._-]+@example.com$"
    title="Please enter an example.com email address"/>
```
