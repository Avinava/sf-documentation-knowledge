---
title: "Telephony Integration REST API Authorization"
domain: voice-developer-guide
topic: telephony-integration-rest-api-authorization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.798Z
estimatedTokens: 783
keywords: [Telephony, Integration, REST, API, Authorization, requires, JWT, Usually, provisioning, process, already, content, simply, instructions, case]
---

# Telephony Integration REST API Authorization

> The Telephony Integration REST API requires JWT authorization. Usually, the provisioning
  process already sets up this authorization for you. This content simply provides instructions in
  case you must manually set up this authorization.

# Telephony Integration REST API Authorization

The Telephony Integration REST API requires JWT authorization. Usually, the provisioning process already sets up this authorization for you. This content simply provides instructions in case you must manually set up this authorization.

While creating a contact center instance with the Service Cloud Voice setup flow, a private/public key pair is auto-generated. The private key is stored as a secure string in AWS Systems Manager Parameter Store. The private key can be a 1024-, 2048, or 4096-bit RSA key length. We recommend an RSA key length of 2048. For contact centers using Amazon Connect as their telephony partner, the private key is stored as a secure string in AWS Systems Manager Parameter Store. Beginning in the Winter ’26 release, private keys for contact centers using Amazon Connect are automatically migrated and stored in AWS Secrets Manager.

The public key is stored in the corresponding Salesforce CallCenter record. The private key is used to sign the JWT claim which must be included in the Bearer header for any HTTP request targeting the Service Cloud Voice REST API.

Before you begin, generate an RSA private key and a signed [X509](https://en.wikipedia.org/wiki/X.509) certificate using [OpenSSL](https://www.openssl.org/).

Once you’ve satisfied this prerequisite, set up authorization for this API.

1.  Construct a JWT header with this format: {"alg":"RS256"}.

    Example header:

    { "alg": "RS256", "typ": "JWT" }

2.  Base64url encode the JWT header as defined in [Base 64 Encoding with URL and Filename Safe Alphabet](https://tools.ietf.org/html/rfc4648#section-5). For example: eyJhbGciOiJSUzI1NiJ9.
3.  Construct a JSON claims set for the JWT with the following parameters:

    -   **iat**—The issued at time is the time since the Unix epoch when the JWT token was issued, expressed as the number of seconds since 1970-01-01T0:0:0Z.
    -   **iss**—The issuer is the Salesforce org ID where you set up your contact center and registered the certificate.
    -   **sub**—The subject must contain the Salesforce Call Center API Name.
    -   **exp**—The expiration time of the assertion within 24 hours, expressed as the number of seconds from 1970-01-01T0:0:0Z, measured in UTC.
    -   **jti**—The unique ID for the JWT token. Recommended but not required.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

        #### Note

        Salesforce doesn’t require JWT ID (JTI) claims in your JWT bearer tokens. However, if you pass a JTI claim in your JWT bearer token, Salesforce validates that the JTI claim hasn’t been sent before. This validation prevents JWT replay attacks.


    Sample JSON claim set for the JWT:

    ```

    ```

4.  Base64url encode the JWT claims set without any line breaks.
5.  Sign the JWT using RSA SHA256 with the encoded header, encoded payload, and private key to [generate a JWT token](https://www.jwt.io/).
6.  Use the generated JWT token as part of the Authorization header with the value as Bearer {signedJwtToken} when making the API request.

## Code Examples

```
{ 
  "iat": 1756767613,
  "exp": 1756854000,
  "iss": "00DHs00000Kmpyr", 
  "sub": "scv4cc1",
  "jti": "6af41080-8787-11f0-a7ad-736f74082154"
}
```
