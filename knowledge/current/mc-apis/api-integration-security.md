---
title: "API Integration Security"
domain: mc-apis
topic: api-integration-security
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:15.160Z
estimatedTokens: 1261
keywords: [API, Integration, Security, Keep, considerations, mind, integrating, Salesforce, apps, Marketing, Cloud, general, guidelines, around, web, application, penetration, testing, composite, app, review, OWASP, Top, Ten, checklist, Enforce, Least, Privilege, Secure, Storage, Transit, Authentication, Session, Management, Control, Sensitive, Errors, Cross, Site, Forgery, CSRF, HTML, Injection, Scripting, XSS, Arbitrary, Redirects, Remote, Code, Execution, Insecure, Software, SQL]
---

> Keep the following security considerations in mind when integrating your Salesforce apps with the Marketing Cloud API. For general guidelines around web application penetration testing for your composite app, review the OWASP Top Ten checklist.

# API Integration Security

Keep the following security considerations in mind when integrating your Salesforce apps with the Marketing Cloud API. For general guidelines around web application penetration testing for your composite app, review the [OWASP Top Ten checklist](https://www.owasp.org/index.php/Top_10_2013-Top_10).

## Enforce Least Privilege

Request minimum required scope for the OAuth token for your app API token. This follows the principle of least privilege and reduces risk associated with the API token.

## Secure Storage

Store only the refresh token on your external web server. Keep the access token in memory only and request a new access token when needed. Follow industry best practices to securely store the refresh token on an external platform. Treat the refresh token like a Salesforce credential.

## Secure in Transit

Always enforce TLS when making calls to the Marketing Cloud APIs. Provide the access token only as the authorization header and never as query parameters. Maintain up-to-date TLS configurations on your external web server.

## Authentication and Session Management

Implement authentication and session management correctly by using secure procedures to create, manage, and end a session for each authorized user. Rotate session IDs out and set them with the correct cookie flags. We recommend you use your framework’s session management features as they’re thoroughly tested and more frequently updated.

## Access Control

Your app must verify the user’s session and permission levels before giving access to any restricted data or function. For example, a standard user should not be able to access admin-only pages, or user A should not view user B’s purchase history.

## Sensitive Information in Errors

Your app must handle errors and responses correctly to avoid most of the fingerprinting and enumeration process by a possible attacker. Hide common error responses from the user, such as stack traces and debug logs, because an attacker can use these to gain more information about the server or app.

## Cross Site Request Forgery (CSRF)

Attackers use this vulnerability to trick an authenticated user into performing an unwanted action on the vulnerable server. The attacker crafts a URL or a FORM inside a malicious page and tricks the user to access to it. CSRF attacks typically target state-changing requests, as there is no way for the attacker to see the response of the forged request.

## HTML Injection and Cross Site Scripting (XSS)

HTML injection vulnerabilities occur when an attacker injects HTML into a vulnerable website and makes it appear as if it was originally there. For example, the attacker injects an iframe and displays a completely different page. With Cross Site Scripting, an attacker injects Javascript that executes in the context of a vulnerable domain. The attacker then crafts a payload and tricks a user into visiting the link. The attacker’s Javascript then executes on the user’s browser.

## Arbitrary Redirects

A vulnerable server may perform a redirect function using user-controlled data in some URL. This allows an attacker to use a normal-looking server URL to redirect a user to a malicious site. In addition, if your site uses one page to perform forwards to other resources, an attacker could modify the input parameter and bypass permission checks.

## Remote Code Execution

A web app or server may run some code that is vulnerable to specially crafted input data. That input data executes commands in the target machine. Attackers typically execute code remotely from one of three sources:

1.  Web server runs some vulnerable service that listens to open ports on the internet. Resolution: Check each service that is listening at a port on your web server for vulnerabilities or public exploits.
2.  Web app uses vulnerable components. Resolution: Double check every software package in your app, such as gems, nodes, or libraries, that support process documents, process images, open connections like external URI, or parse XML.
3.  Application is processing user input as serialized data. Resolution: Execute deserialized user data cautiously as it could lead to remote code execution.

## Insecure Software

Most applications use some kind of third-party components, such as Javascript libraries, server side frameworks, and application servers. Ensure you are using the latest available version with no known security vulnerabilities. Vulnerable versions are easy to identify and can open up your application to a broader attack surface.

## SQL Injection

A SQL injection attack inserts a SQL query via the input data from the client to the application. In SQL injection attacks, SQL commands are injected as a part of user supplied input in order to effect the execution of predefined SQL commands.

## Storage of Sensitive Data

Store sensitive data, such as passwords, credit card information, Social Security Numbers, and other PII, securely on servers using your platform's industry best practices for secure storage.
