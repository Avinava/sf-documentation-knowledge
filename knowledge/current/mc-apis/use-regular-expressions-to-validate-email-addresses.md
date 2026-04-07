---
title: "Use Regular Expressions to Validate Email Addresses"
domain: mc-apis
topic: use-regular-expressions-to-validate-email-addresses
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:21.066Z
estimatedTokens: 1067
keywords: [Regular, Expressions, Validate, Email, Addresses, regarding, user, SOAP, API, Why, How, Commented, Sample, NET, Code, PHP, Java]
---

> This page contains information  regarding the user of regular expressions to validate email addresses in SOAP API calls.

# Use Regular Expressions to Validate Email Addresses

This page contains information regarding the user of regular expressions to validate email addresses in SOAP API calls.

## Why Use Regular Expressions to Validate Email Addresses

By validating email addresses using regular expressions, you ensure that email addresses used in your API calls follow the correct syntax before import into Marketing Cloud Use these regular expressions to aid in achieving better data quality.

These regular expressions are subject to change. Please contact your Marketing Cloud representative if you have any questions.

## How To Use Regular Expressions to Validate Email Addresses

The regular expressions below perform the following checks:

-   Ensures the email address contains only valid characters
-   Verifies the presence of a single @ character
-   Verifies that a single period character separates the domain and the domain suffix

Use the regular expressions below as part of your email validation process:

### Validate Email Addresses

```
<Email_Address_Regex>^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$</Email_Address_Regex>
```

### Validate Commented Email Addresses

```
<Commented_Email_Address_Regex>^^\(([a-zA-Z0-9 _\-\.\+]+)\)\ ([a-zA-Z0-9 _\+\!\#\$\%\&\'\*\-\/\=\?\^\`\{\|\}\~\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\w _\!\#\$\%\&\'\*\-\/\=\?\^\`\{\|\}\~]+\.)+))([a-zA-Z]{2,24}|[0-9]{1,3})$|^([a-zA-Z0-9 \w _\+\!\#\$\%\&\'\*\-\/\=\?\^\`\{\|\}\~\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9_\-]+\.)+))([a-zA-Z]{2,24}|[0-9]{1,3})$</Commented_Email_Address_Regex>
```

### Sample .NET Code

```
<%@ language="C#" %>
<form id="form1" runat="server">
    <asp:TextBox ID="emailAddress" runat="server"/>
    <asp:Button ID="btnSubmit" runat="server" Text="Submit" />
    <asp:RegularExpressionValidator ID="regexpName" runat="server"
                                    ErrorMessage="This is not a valid email."
                                    ControlToValidate="emailAddress"
ValidationExpression ="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$" />
</form>
```

### Sample PHP Code

```
<?php
if (!$_REQUEST[&apos;action&apos;]) {
?>
<form action=&apos;<?=$_SERVER[&apos;PHP_SELF&apos;]; ?>&apos; method=&apos;POST&apos;> Email Address: <input type=&apos;text&apos; name=&apos;email&apos;> <input type=&apos;hidden&apos; name=&apos;action&apos; value=&apos;validate&apos;> <p> <input type=&apos;submit&apos; value=&apos;Submit&apos;> </form> <?php }
if ($_REQUEST[&apos;action&apos;] == &apos;validate&apos;) { if (preg_match(^[a-z0-9!#$%&amp;&apos;*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;&apos;*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$)?apos;, $_REQUEST[&apos;email&apos;])) { echo &apos;Valid email&apos;; } else { echo &apos;Invalid email&apos;; } } ?>
```

### Sample Java Code (Commented Email)

```apex
public void  testIsEmailValid() {
        boolean isValid = false;

        //Initialize reg ex for email.
        String expression = "^\\(([a-zA-Z0-9 _\\-\\.\\+]+)\\)\\ ([a-zA-Z0-9
" +
               "_\\!\\#\\$\\%\\&amp;\\'\\*\\-\\/\\=\\?\\^\\`\\{\|\\}\\~\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\
" +
                ".[0-9]{1,3}\\.)|(([a-zA-Z0-9\\w
" +
                "_\\!\\#\\$\\%\\&amp;\\'\\*\\-\\/\\=\\?\\^\\`\\{\|\\}\\~]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3}
" +
                ")$|^([a-zA-Z0-9 \\w
" +
                "_\\!\\#\\$\\%\\&amp;\\'\\*\\-\\/\\=\\?\\^\\`\\{\|\\}\\~\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\
" +
                ".[0-9]{1,3}\\.)|(([a-zA-Z0-9_\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$";

         CharSequence inputStr ="name.su$rname@$blah.com";  //This fails
         CharSequence inputStr2 ="name.su$rname@blah.com";  //This passes validation

        //Make the comparison case-insensitive.
        Pattern pattern = Pattern.compile(expression, Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(inputStr2);
        if (matcher.matches()) {
            isValid = true;
        }
        System.out.println("is Valid ::: " + isValid);
    }
```
