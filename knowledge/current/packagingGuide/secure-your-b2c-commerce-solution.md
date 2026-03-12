---
title: "Secure Your B2C Commerce Solution"
domain: packagingGuide
topic: secure-your-b2c-commerce-solution
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.122Z
estimatedTokens: 1468
keywords: [Secure, B2C, Commerce, Solution, Cartridges, Headless, Integrations, listed, AppExchange, adhere, requirements, Encryption, Cryptography, Secret, Storage]
---

# Secure Your B2C Commerce Solution

> All B2C Commerce Cartridges and Headless Integrations listed on AppExchange must adhere
  to these requirements.

# Secure Your B2C Commerce Solution

All B2C Commerce Cartridges and Headless Integrations listed on AppExchange must adhere to these requirements.

## Encryption, Cryptography, and Secret Storage

Protect data at rest using strong encryption schemes, and protect the encryption keys.

See [Encryption and Cryptography](https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/content/b2c_commerce/topics/b2c_security_best_practices/b2c_encryption_and_cryptography.html) and [Secret Storage](https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/content/b2c_commerce/topics/b2c_security_best_practices/b2c_secret_storage.html).

## Authentication and Authorization

Before processing requests that carry privileged actions, authenticate and authorize the requests. Also enforce authentication and authorization when reading or writing confidential objects such as [Order](https://documentation.b2c.commercecloud.salesforce.com/DOC1/index.jsp?topic=%2Fcom.demandware.dochelp%2FDWAPI%2Fscriptapi%2Fhtml%2Fapi%2Fclass_dw_order_Order.html), [Customer](https://documentation.b2c.commercecloud.salesforce.com/DOC1/index.jsp?topic=%2Fcom.demandware.dochelp%2FDWAPI%2Fscriptapi%2Fhtml%2Fapi%2Fclass_dw_customer_Customer.html), and [PaymentInstrument](https://documentation.b2c.commercecloud.salesforce.com/DOC1/index.jsp?topic=%2Fcom.demandware.dochelp%2FDWAPI%2Fscriptapi%2Fhtml%2Fapi%2Fclass_dw_order_PaymentInstrument.html).

See [Authentication and Authorization](https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/content/b2c_commerce/topics/b2c_security_best_practices/b2c_developer_authentication_and_authorization.html).

## Open Commerce API (OCAPI) and Salesforce Commerce API (SCAPI) Settings

Follow the principle of least privilege for OCAPI and SCAPI permissions. Provide users with the minimum set of permissions required to perform a task. Document the permissions, and share them with your customers.

See [OCAPI Settings](https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/OCAPI/current/usage/OCAPISettings.html) and [Authorization for SCAPI](https://developer.salesforce.com/docs/commerce/commerce-api/guide/authorization.html).

## Sensitive Data Storage and Logging

Sensitive data is any information that must be protected against unauthorized access. Different regulations classify information as sensitive data and can include payment instruments, protected health information, personally identifiable information, access tokens, and encryption keys. Document and disclose to customers a list of sensitive data stored or processed by your solution. Redact sensitive data in [B2C Commerce log files](https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/content/b2c_commerce/topics/site_development/b2c_log_files_overview.html).

See [Storing Sensitive Data](https://developer.salesforce.com/docs/atlas.en-us.260.0.secure_coding_guide.meta/secure_coding_guide/secure_coding_storing_sensitive_data.htm).

## Cryptography

Use supported cryptography APIs such as [dw.crypto](https://documentation.b2c.commercecloud.salesforce.com/DOC1/index.jsp?topic=%2Fcom.demandware.dochelp%2FDWAPI%2Fscriptapi%2Fhtml%2Fapi%2Fpackage_dw_crypto.html). Don’t implement custom cryptography.

## Client-Side Scripts

Include and serve all client-side scripts statically from the B2C Commerce [cartridge](https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/content/b2c_commerce/topics/site_development/b2c_cartridges_overview.html). Avoid dynamically loading third-party scripts from content delivery networks (CDNs) or other third parties.

## Code Injection

Don’t interpret any input data as script. Statically include all source code.

## User-Input Validation

Ensure that user input is exactly the kind of data that your solution expects. Validate all user input before processing.

See [Data Validation](https://documentation.b2c.commercecloud.salesforce.com/DOC1/index.jsp?topic=%2Fcom.demandware.dochelp%2Fcontent%2Fb2c_commerce%2Ftopics%2Fb2c_security_best_practices%2Fb2c_data_validation.html).

## User Input

Escape all user-provided content before rendering it in any context including HTML and JavaScript.

See [Template Best Practices](https://documentation.b2c.commercecloud.salesforce.com/DOC1/index.jsp?topic=%2Fcom.demandware.dochelp%2Fcontent%2Fb2c_commerce%2Ftopics%2Fsite_development%2Fb2c_content_best_practices.html).

## Cross-Site Request Forgery (CSRF)

Include CSRF protection in all state-changing controllers.

See [Cross-Site Request Forgery](https://documentation.b2c.commercecloud.salesforce.com/DOC1/index.jsp?topic=%2Fcom.demandware.dochelp%2Fcontent%2Fb2c_commerce%2Ftopics%2Fb2c_security_best_practices%2Fb2c_cross_site_request_forgery.html).

## Open Redirects

Open redirects are used in phishing attacks to redirect users to any URL. Never redirect users based on untrusted data. Follow the practices in [Open Redirect Attacks](https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/content/b2c_commerce/topics/b2c_security_best_practices/b2c_open_redirect_attacks.html).

## Content Security Policy

Document and share your Content Security Policy with customers when applicable.

## Patches and Upgrades

To simplify installation of patches and upgrades, direct customers to use separate cartridges for customizations whenever possible.

## Environments

Follow the B2C Commerce security [guidelines](https://documentation.b2c.commercecloud.salesforce.com/DOC1/index.jsp?topic=%2Fcom.demandware.dochelp%2Fcontent%2Fb2c_commerce%2Ftopics%2Fb2c_security_best_practices%2Fb2c_commerce_security_guide.html) as you set up, administer, and develop your Salesforce B2C Commerce environments.
