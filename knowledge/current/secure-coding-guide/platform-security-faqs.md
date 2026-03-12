---
title: "Platform Security FAQs"
domain: secure-coding-guide
topic: platform-security-faqs
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.510Z
estimatedTokens: 3818
keywords: [Platform, Security, FAQs, answers, common, questions, App, Cloud, understand, positive, findings, third-party, Assessments, against, Secure]
---

# Platform Security FAQs

> Get answers to common security questions for the App Cloud platform and understand
        common false positive findings from third-party Security Assessments against the App Cloud
        platform.

# Platform Security FAQs

Get answers to common security questions for the App Cloud platform and understand common false positive findings from third-party Security Assessments against the App Cloud platform.

## Secure Cookies

Certain cookies served from the salesforce.com domain aren’t set as secure or set as persistent. This is intentional.

There are several cookies that the platform uses to enhance functionality that don’t contain any session information. If an attacker accesses or alters those cookies, they can’t use the cookies to gain access or escalate privilege in Salesforce.

The session cookie "sid" is marked as secure and is non-persistent. In other words, the cookie is deleted when the browser is closed.

## Data validation

Data validation or data quality issues don’t fall under security. However, some customers wonder why data from some input fields aren’t validated server-side as part of saving that data in an object.

Most default data validation and quality rules are enforced on the client side. For example, when you update a picklist value to a non-defined value via the API, or when you modify a standard page edit POST.

Here are some examples of data validation rules that are enforced server side.

-   Setting a lookup ID to a non-existent record ID.
-   Data type for a field e.g cannot set a number field with text values.
-   Object Validation Rules or Apex Triggers that validate data.

## Clickjacking

Clickjacking is a type of attack that tricks users into clicking something, such as a button or link. The click sends an HTTP request that performs malicious actions that can lead to data intrusion, unauthorized emails, changed credentials, or similar results. To help protect against this kind of attack, most Salesforce pages can only be served in an inline frame by a page on the same domain.

Experience Cloud sites have two clickjack protection parts—one for the Experience Cloud site, which is set from the Salesforce site detail page, and another for the Site.com site, which is set from the Site.com configuration page. It's recommended that both are set to the same value.

For more information, see [Configure Clickjack Protection](https://help.salesforce.com/s/articleView?id=xcloud.security_clickjack_protection_configure.htm&type=5&language=en_US) in Salesforce Help.

## Cross-Site Request Forgery (CSRF)

CSRF protection is enabled by default. You can view andmodify the setting from the Session Settings page in Setup.

CSRF tokens are scoped to a particular user, entity operated on, and session and are reused within a user's session. The token itself is randomly generated such that an attacker can’t guess the token, and it’s just as difficult for an attacker to get the user's sessionid as it is the CSRF token. Because of these inherent protects, Salesforce reuses CSRF tokens.

## Cross-Site Scripting

All standard pages output encode user-controlled data in the proper context.

For Visualforce pages, all merge fields are HTML encoded by default.

Any cross-site scripting vulnerabilities that occur from custom Visualforce pages must be addressed with best practice recommendations and tools provided for developers.

Apex and Visualforce provide additional encoding utilities for other contexts. Developers are responsible for the proper output encoding for other non-html contexts. See [Cross Site Scripting (XSS)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/pages_security_tips_xss.htm "HTML (New Window)") in the Apex Developer Guide

The platform implements context-specific output encoding for user-controlled data. Salesforce data can be presented in a multitude of contexts and systems, which makes it challenging to successfully anticipate the correct context for data at input time.

Standard pages are designed to properly encode data in the correct context in which the data is displayed.

If input encoding is required, you can implement custom triggers on desired objects and fields. For more information, see [Secure Coding Cross Site Scripting](atlas.en-us.secure_coding_guide.meta/secure_coding_guide/secure_coding_cross_site_scripting.htm "Cross-site scripting (XSS) is a prevalent security threat where attackers inject malicious scripts into web pages, potentially leading to data theft, session hijacking, and altered website content. This topic will cover how XSS attacks work and how to protect against them.")

## File Upload

We’re aware that it is possible for malicious users to upload files that contain malicious content and that a user who downloads the file can be compromised if antivirus software doesn’t detect the malicious code.

Files stored in Salesforce aren’t scanned for malicious content. The data is stored as binary on Salesforce servers. Certain file types are parsed for search indexing or for preview display and controls have been put in place to ensure the process occurs in an isolated environment with limited privileges.

To protect the platform, files and attachments are stored within the services in such a manner that if something was uploaded which was infected, it has no effect on the rest of the service or other files because of the way it is stored. Salesforce can’t control the customer's end points, and it is a customer responsibility to ensure that those endpoints have up-to-date antivirus protection.

The app layer is abstracted from the infrastructure layer via our multi-tenant model, hence the reason we are speaking to two different parts, the infrastructure layer we manage and protect, and the app layer where users are able to upload anything they want in a secure manner. Salesforce can't control whether the user chooses to upload an infected file, or whether of some of our customers intentionally upload items that are known to be infected.

Certain file types and upload and download behavior can be managed via File Upload and Download Security in Setup. For other file types, custom Apex triggers on related objects can limit the file extensions uploaded.

For more information, see [Configure File Upload and Download Security Settings](https://help.salesforce.com/apex/HTViewHelpDoc?id=admin_files_type_security.htm&language=en_US "HTML (New Window)") in Salesforce Help and the [Configure the setting 'File Upload and Download Security'](https://help.salesforce.com/s/articleView?id=000386250&type=1&language=en_US "HTML (New Window)") knowledge article.

To monitor files and URLs that are uploaded to or downloaded from Salesforce, you can also use external add-ons.

## Arbitrary SQL Query Execution

There is no SQL in the finding. Instead, the finding contains SOQL, so there is not a security impact. The request is a call to our REST API, which allows users to query objects and fields that they already can access based on the access control settings that the admin has set. REST API enforces the correct permissions including Sharing and CRUD/FLS. Therefore nothing is exposed to the user that they have permission to access, and no secrets, proprietary information, or information useful to an attacker is exposed.

For more information on REST API and SOQL Queries, see [REST API SOQL Reference: Query](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_query.htm) and [SOQL and SOSL Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_sosl_intro.htm)..

## FRONTDOOR.JSP SID

The frontdoor.jsp SID used via login.salesforce.com is a temporary session that can’t be used upon login. Salesforce is aware of the ability to log in via frontdoor.jsp?sid=<sessionid> via the API. (You can’t use the temporary session ID, but the SID created it upon login.)

For more information about this behavior, see [Using Frontdoor.jsp to Bridge an Existing Session Into Salesforce](https://help.salesforce.com/s/articleView?id=xcloud.security_frontdoorjsp.htm&type=5&language=en_US) in Salesforce Help.

## JSESSIONID

JSESSIONID is a temporary session ID and the cookie can’t be exploited. The main session cookie is the SID and it is marked secure.

## HTTP Header: X-Content-Type-Options: no sniff

The X-Content-Type-Options: no sniff HTTP header helps prevent the execution of malicious files (JavaScript, Style sheet) as dynamic content by preventing the browser from inferring the MIME type from the document content. The browser obeys the content-type sent by the server.

This HTTP header is enabled and can’t be disabled. To temporarily disable this feature for issue remediation, contact Salesforce Customer Support.

## HTTP Header: Referer

The [Referer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) HTTP header helps prevents the leaking of confidential information from the URL to other sites when loading assets (images, scripts) or clicking a link. When sending a request from Salesforce to a third-party domain, the Referer HTTP header contains only the Salesforce domain, not the full URL.

For example, when a user clicks on a link on https://domain.my.salesforce.com/page.jsp?oid=XXXXXX&secret=YYYYY the Referer header includes https://domain.my.salesforce.com.

The Referer header is unchanged within the same domain.

The scope of the redirections that use the Referer directive differs based on whether the external URL belongs to another Salesforce org. If the target URL belongs to another Salesforce org, it applies in Lightning Experience and Salesforce Classic. Otherwise, it only applies to components and pages built in Salesforce Classic that take users to a non-Salesforce domain. For more information, see [Trust Redirections to Your Other Salesforce Orgs](https://help.salesforce.com/s/articleView?language=en_US&id=sf.security_trusted_urls_external_redirections_orgs.htm) and [Manage Redirections to External URLs](https://help.salesforce.com/s/articleView?id=xcloud.security_external_redirects.htm&type=5&language=en_US)

## HTTP Header: Content-Security-Policy (CSP) frame-ancestors Directive

Clickjacking uses a trusted domain or site to trick users into clicking a malicious link. With clickjacking, the trusted domain is served in an iframe, then a hidden or transparent UI control is served in the same location. For example, a transparent button on top of the Save button. The user thinks that they’re clicking the top-level iframe when they’re really clicking the hidden UI control.

To protect your users, Salesforce uses clickjack protection. For pages that Salesforce serves, clickjack protection is implemented through the Content-Security-Policy (CSP) HTTP response header frame-ancestors directive. That directive tells the browser which sites are allowed to load the page in an iframe.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=secure_coding_guide)

#### Note

The CSP frame-ancestors header directive replaces the obsolete X-Frame-Options header. For more information, see [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) on the Mozilla Developer Network.

By default, Visualforce pages can be loaded in an iframe. For Visualforce pages with headers, the CSP frame-ancestors HTTP response header directive is absent. We highly recommend that you enable clickjack protection for your Visualforce pages and specify the trusted domains for inline frames for other features. For more information, see [Configure Clickjack Protection](https://help.salesforce.com/s/articleView?id=xcloud.security_clickjack_protection_configure.htm&type=5&language=en_US) in Salesforce Help.

## HTTP Header: Content-Security-Policy-Report-Only

The Content-Security-Policy-Report-Only response header allows Salesforce to monitor the use of third-party assets in order to detect HTTP contents loaded on HTTPS websites.

This header defines a policy. The policy is checked by the browser (Chrome, Firefox, and Safari - not Internet Explorer) on each page but not enforced. The browser sends a report to Salesforce for each policy violation. This header is enabled by default on all pages (Classic). Lightning enforces its own CSP.

The Content Security Policy is made of several directives. In Classic, the directives indicate that assets (for example, images, fonts, and style sheets) can be loaded over HTTPS or inline.

The frame-ancestor directive indicates that only salesforce.com and force.com can include an IFRAME of Salesforce services.

## HTTP Headers: Cross-Site Scripting (XSS) Protection

The HTTP X-XSS-Protection response header and the reflected-XSS content security policy (CSP) directive were intended to help protect against cross-scripting (XSS) attacks and reflected cross-site scripting attacks. Both are deprecated.

To help prevent cross-site scripting (XSS) and other code injection attacks, configure your content security policy (CSP) in Salesforce. Use the [CSPTrustedSite](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_csptrustedsite.htm) metadata type or see [Manage Trusted URLs](https://help.salesforce.com/s/articleView?id=xcloud.security_trusted_urls_manage.htm&type=5&language=en_US) in Salesforce Help.

## HTTP Header: Strict-Transport-Security (HSTS)

The Strict-Transport-Security (HSTS) HTTP header is enabled for login.salesforce.com, MyDomain login URLs, on Lightning + content domains, VisualForce, and all system-managed domains for Experience Cloud sites and Salesforce Sites. With this HTTP header, supported browsers always use HTTPS, protecting your users from attacks during HTTP redirections.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=secure_coding_guide)

#### Note

HSTS is enabled for authenticated traffic only on the App Servers (your Salesforce instance).

If you serve your Experience Cloud sites or Salesforce Sites on a registrable custom domain, such as https://example.com, you can include the HSTS HTTP header in the headers for your custom domain via a setting. See [Enable HSTS Preloading on a Custom Domain](https://help.salesforce.com/s/articleView?id=products.domain_mgmt_hsts_preloading.htm&type=5&language=en_US) in Salesforce Help.

## HTTP Public Key Pinning

Public Key Pinning (HPKP) allows a website to declare the list of valid certificates for this website in the HPKP header sent to the server. Like HSTS, this information is valid for the amount of time specified in the HPKP header.

The HPKP header contains a hash of all the valid public keys from any of the SSL certificates in the chain. Like CSP, it is possible to report only violations and to block certificate mismatches.

Salesforce uses HPKP in report-only mode. No content is blocked if the certificate does not match any of the PINs.

## Browser Caching of HTTP Responses

Salesforce uses caching to improve performance. The caching behavior is controlled via HTTP header cache response directives. The main security issue with caching is if an attacker gains access to the local client machine. To mitigate access to the cached data in this scenario, configure user browsers to not cache requests.

We review on a case-by-case basis whether to allow certain pages and resources to be cached based on the content being cached.

## Related Topics

- Secure Coding Cross Site Scripting (atlas.en-us.secure_coding_guide.meta/secure_coding_guide/secure_coding_cross_site_scripting.htm)
