---
title: "Storing Sensitive Data"
domain: secure-coding-guide
topic: storing-sensitive-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.547Z
estimatedTokens: 3950
keywords: [Storing, Sensitive, Data, Understand, how, employ, robust, encryption, access, secure, storage, solutions, protect, Hardcoded, Secrets]
---

# Storing Sensitive Data

> Understand sensitive data and learn how to employ robust encryption, access controls,
        and secure storage solutions to protect it.

# Storing Sensitive Data

Understand sensitive data and learn how to employ robust encryption, access controls, and secure storage solutions to protect it.

## Sensitive Data - What is it?

Sensitive data can include:

-   Passwords
-   Passphrases
-   Encryption keys
-   OAuth tokens
-   Purchase instruments, such as credit card numbers
-   Personal contact information such as names, phone numbers, email addresses, account usernames, physical addresses, and more
-   Demographic information such as income, gender, age, ethnicity, education
-   In some states and countries: machine identifying information such as MAC address, serial numbers, IP addresses, and more

Sensitive data is also called *personally identifying information* (PII) or *high business impact* (HBI) data. What’s considered sensitive data varies greatly from state to state and country to country. Various compliance standards, such as the Payment Card Industry (PCI) compliance standard, require special steps to be taken when collecting sensitive data in order to stay in compliance.

## Hardcoded Secrets

Storing sensitive information in your application's source code isn’t advisable since anyone with access to the code can view the secrets in clear text.

## Debug Logs

Don’t use any sensitive data (usernames, passwords, names, contact information, opportunity information, PII, and so on) in Apex debug logs. The debug logs include standard Salesforce logs using system.debug() methods or custom debug logs created by the application. Avoid sending sensitive information to a third party by emails or other means as part of reporting possible errors.

## Sensitive Info in URL

Don’t send long-term secrets like usernames, passwords, API tokens, and long-lasting access tokens through GET parameters in a query string. It’s fine to send short-lived tokens like CSRF tokens in the URL. Don’t send a Salesforce session ID or any PII data over a URL to external applications.

## Salesforce Integrations

For external applications, ensure no user credentials (usernames, passwords, or session IDs) are used in external databases. To integrate an external application with Salesforce user accounts, use the OAuth flow. For more information about implementing OAuth, see [Authorize Apps with OAuth](https://developer.salesforce.com/page/Using_OAuth_to_Authorize_External_Applications).

## Sample Vulnerability

If your application copies and stores sensitive data that originated at salesforce.com, take extra precaution. Salesforce.com treats data threats seriously, and a breach could impact your relationship with them if you're a partner.

Storing passwords in plaintext or weakly hashed formats (like MD5) exposes your application to widespread user exploitation if attackers gain database access (for example, through backup theft or SQL injection). If attackers retrieve passwords through SQL injection or data exposure, they can compromise user accounts on a large scale.

## Is My Application Vulnerable?

If your application stores the salesforce.com user password, your application is vulnerable.

Collecting additional sensitive data renders your application non-compliant with industry standards, potentially leading to significant privacy breaches and legal repercussions.

## How Can I Test My Application?

Review the scheme used to store sensitive data and identify information collected in use cases and workflows.

As PII/HBI data varies from state to state and country to county, it’s best to seek expert legal counsel to review sensitive data collected and stored.

## How Do I Protect My Application?

Consider an application that must authenticate users. We have to store some form of the user’s password in order to authenticate them, that is, in order to see if the user presented the correct password. We avoid storing passwords in plaintext to prevent attackers from easily hijacking user accounts if they gain access to the database through SQL injection or stealing backups. Therefore, we want to obfuscate the passwords in such a way that we can still authenticate users.

We could encrypt the passwords, but that requires an encryption key — and where’s that stored? In the database or another accessible location, which brings us back to the original issue: An attacker can recover the plaintext of the passwords by stealing the ciphertexts and the decryption key, and decrypting all the ciphertexts.

(Most or all database-level encryption schemes fall prey to the “But where is the key?” problem. Full-disk encryption, as opposed to encrypting database rows or columns with a key known by the database client, is a separate and arguably more tractable problem.)

Therefore, developers have historically used a cryptographic hash function, a one-way function that is (supposedly) computationally infeasible to reverse. They then store the hash output:

```

```

To authenticate users, the application hashes the provided password and compares it to the stored password:

```

```

The plaintext password is never stored.

However, there’s a problem with this scheme: the attacker can easily pre-compute the hashes of a large password dictionary. Then the attacker matches their hashes to the ones in their stolen database. For all matches, the attacker has effectively reversed the hash. This technique works as well as the password dictionary is good, and there are some good password dictionaries out there.

To address this problem, developers have historically “salted” the hash:

```

```

The goal is to make attackers have to compute a larger dictionary of hashes: they now have to compute 2saltSize (for example, 216 for a 2-byte salt) hashes for each item in their password dictionary.

However, a salted password hash only makes it more expensive to pre-compute the attack against a large password database. It doesn’t protect from attempts to brute-force individual passwords when the hash and salt are known. The main issue is the computing cost; a single round of MD5 or SHA-1 no longer sufficiently slows down attackers. Fast, cheap and highly parallel computation on specialized hardware or commodity compute clusters makes brute force search with a dictionary affordable and accessible, even to adversaries with few resources.

Therefore, we need a solution that significantly slows down the attacker but doesn’t slow down our application by too much. The idea is that we tune the hashing function to be pessimal; Provos and Mazières use a modified form of the Blowfish cipher to pessimize its already-slow setup time. Using bcrypt is a fine solution, but it’s also easy to build a tunably slow hash function using the standard library of most programming languages.

The benefit of this approach is that it slows down the attacker greatly, but for the application to verify a single password candidate still takes essentially no time. (Additionally, since login actions are such a small fraction of all application traffic, it’s OK if verification took an entire 0.5 seconds or more.)

## How do I protect my application?

In Apex and Visualforce applications, safeguarding sensitive data depends on storage, updates, and access permissions.

Protected Custom Metadata Types

Within a namespaced managed package, protected custom metadata types are suitable for storing authentication data and other secrets. Custom metadata types in an organization can be updated using the Metadata API by the creator of the type. They can also be read (but not updated) at runtime using SOQL within an Apex class in the same namespace. Secrets, which are common across all users of the package (such as an API key) must be stored in Managed Protected Custom Metadata Types. Secrets are never hardcoded in the package code or displayed to the user.

For more information, see [Custom Metadata Types](https://help.salesforce.com/s/articleView?id=platform.custommetadatatypes_overview.htm&language=en_US "HTML (New Window)").

Protected Custom Settings

Custom settings enable application developers to create custom sets of data, as well as create and associate custom data for an organization, profile, or specific user. Setting the Custom Setting Definition visibility to "Protected" and including it in a managed package restricts access to be programmatically via Apex code within your package, which is useful for secrets initialized by the admin user or generated at install time.

Unlike custom metadata types, custom settings can be updated at runtime in your Apex class, but can’t be updated through the Metadata API.

Create a Visualforce page for authorized users to input sensitive information without rendering it back on the page. Use the “transient” keyword to declare instance variables within Visualforce controllers to ensure they aren’t transmitted as part of the view state. See [transient keyword](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_transient.htm).

Finally, configure the security settings for this page to ensure it’s only accessible by limited profiles on an as needed basis.

For more information, see [custom settings methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_custom_settings.htm).

Apex Crypto Functions

The Apex Crypto class provides algorithms for creating digests, MACs, signatures, and AES encryption. When using the crypto functions to implement AES encryption, keys must be generated randomly and stored securely in a protected custom setting or a protected custom metadata type. Never hardcode the key in an Apex class.

For more information and examples for implementing the Crypto class, see [Crypto Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_restful_crypto.htm).

Encrypted Custom Fields

Encrypted custom fields are text fields that can contain letters, numbers, or symbols but are encrypted with 128-bit keys and use the AES algorithm. The value of an encrypted field is only visible to users that have the “View Encrypted Data” permission. We don’t recommend storing authentication data in encrypted custom fields, but they’re suitable for storing other types of sensitive data (for example, credit card information or social security numbers).

Named Credentials

Named Credentials are a safe and secure way of storing authentication data for external services called from your Apex code such as authentication tokens. We don’t recommend storing other types of sensitive data in this field (such as credit card information). Users with customized application permissions can view named credentials. If your security policy requires hiding secrets from subscribers, use a protected custom metadata type or setting. For more information, see [named credentials](https://help.salesforce.com/HTViewHelpDoc?id=named_credentials_about.htm&language=en_US) in Salesforce Help.

## General Guidance

When storing sensitive information on a machine:

-   All authentication secrets must be encrypted when stored on disk, including passwords, API Tokens, and OAuth Tokens.
-   Store secrets in vendor-provided key stores (macOS/iOS keychain, Android keystore, Windows DP-API registry) for security compliance.
-   For services running on servers that must boot without user interaction, store secrets in a database encrypted with a key not available to the database process. The application layer provides the key as needed to the database at runtime or decrypts/encrypts as needed in its own process space.
-   Don’t store any cryptographic keys used for protecting secrets in your application code
-   Be cautious of the algorithms and ciphers used in any cryptographic operations
-   Salt hashes, and if possible store salts and hashes separately
-   Use strong platform cryptographic solutions
-   Check if frameworks/platforms have already addressed the problem
-   Use SSL/TLS to transmit sensitive data

The following list provides you with the guidelines to protect your application:

-   ASP.NET provides access to the Windows CryptoAPIs and Data Protection API (DPAPI). Use the storage of sensitive information like passwords and encryption keys if the *DataProtectionPermission* has been granted to the code. Generally, the machine key is used to encrypt and decrypt sensitive data at the risk that if the machine is compromised malicious code could potentially decrypt any stored secrets. More information on this topic can be found here:

    -   [Building Secure .NET Applications: Storing Secrets](http://msdn.microsoft.com/en-us/library/aa302388.aspx#secnetch08_storingsecrets)
    -   [.NET Framework 4 Cryptographic Services](http://msdn.microsoft.com/en-us/library/92f9ye3s%28VS.100%29.aspx)

    The best solution for ASP.NET is to use a hardware device like a cryptographic smartcard or Hardware Security Module (HSM) with the underlying Crypto API and a vendor-supplied CSP.

-   Java provides the [KeyStore](https://docs.oracle.com/javase/7/docs/api/java/security/KeyStore.html) class for storing cryptographic keys. By default a flat file is used on the server that’s encrypted with a password. For this reason, an alternative Cryptographic Service Provider (CSP) is recommended. The strongest solution for Java is to rely on a hardware solution for securely storing cryptographic keys. These keys such as a cryptographic smartcard or Hardware Security Module (HSM) are accessible by using the vendor's supplied CSP in that *java.security* configuration file. For more information on installing Java CSPs, consult the [Java Cryptography Architecture (JCA) Reference Guide](http://java.sun.com/javase/6/docs/technotes/guides/security/crypto/CryptoSpec.html#ProviderInstalling). When not using a CSP, if the product is a client application, you must use JAVA bindings to store the passphrase protecting the keystore in the vendor provided key store. Never store the passphrase in source code or in a property file. For server Java solutions, follow the general guidance of making the passphrase protecting the keystore unavailable to the database process storing credentials.

    A Java implementation of *bcrypt* is called [jBCrypt](http://www.mindrot.org/projects/jBCrypt/).

-   PHP generally doesn't provide cryptographically secure random number generators. Make use of /dev/urandom as the source for random numbers.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=secure_coding_guide)

    #### Note

    But, with the introduction of PHP 7.x, there is now a built-in cryptographically secure random number generator function called random\_int(). This function can be used for generating secure random numbers in PHP 7.x and later versions. See [random\_int](https://www.php.net/manual/en/function.random-int.php).

    Use the [mcrypt](http://php.net/manual/en/book.mcrypt.php) library for cryptography operations. Salted hashes and salts could be subsequently stored in a database.

    A framework called [phpass](http://www.openwall.com/phpass/) offers "OpenBSD-style Blowfish-based *bcrypt*" for PHP. For client apps, you must use native bindings to store user secrets in the vendor-provided key store.

-   For Ruby on Rails, there’s a copy of *bcrypt* called [bcrypt-ruby](http://bcrypt-ruby.rubyforge.org/). For client apps, you must use ruby bindings to store secrets in the vendor provided key store.

-   For Python, use a module that interacts with the vendor-provided keystores such as the python [keyring](https://pypi.python.org/pypi/keyring) module.

-   For Flash/Air apps, use the [Encrypted Local Store](http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/data/EncryptedLocalStore.html) that contains bindings to use vendor-provided keystores to store secrets.

## Code Examples

```
hash = md5    # or SHA1, or Tiger, or SHA512, etc.
storedPasswordHash = hash(password)
```

```
authenticated? = hash(password) == storedPasswordHash
```

```
salt = generateRandomBytes(2)
storedPasswordHash = salt + hash(salt + password)
```
