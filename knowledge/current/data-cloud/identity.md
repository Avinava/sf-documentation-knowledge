---
title: "Identity"
domain: data-cloud
topic: identity
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:12.325Z
estimatedTokens: 521
keywords: [Identity, Salesforce, Interactions, SDK, supports, identification, new, returning, customer, first-party, cookie, _sfid_$, domainHash, produced, running, website’s, domain, through, hashing, function.]
---

# Identity

> The Salesforce Interactions SDK supports identification of new and returning customer
  using the first-party cookie _sfid_${domainHash}. Also, the
   domainHash is produced by running the website’s domain through a hashing
  function.

# Identity

The Salesforce Interactions SDK supports identification of new and returning customer using the first-party cookie \_sfid\_${domainHash}. Also, the domainHash is produced by running the website’s domain through a hashing function.

-   New customers receive a randomly generated anonymousId, which is persisted to the first-party cookie
-   Returning customers use the anonymousId already stored in the first-party cookie

## Sharing a Cookie Across Multiple Domains

If you must share cookies across multiple domains, configure the Salesforce Interactions Web SDK with the shared domain name. This can be done through either configuration passed to SalesforceInteractions.init or in a function call to SalesforceInteractions.setCookieDomain.

For example, to share a cookie between these two domains:

-   abc.domain.com
-   xyz.domain.com

The cookie domain can be configured with:

```

```

The cookie domain could also be set using the setCookieDomain function.

## Identity Methods

```

```

Returns the value of the cookie domain used to generate the first-party cookie. The first party cookie stores the anonymous customer identity.

```

```

```

```

Sets the value of the cookie domain used to generate the first-party cookie. The first party cookie stores the anonymous customer identity.

```

```

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

Setting the cookie via the setCookieDomain function doesn’t take effect if the Salesforce Web Interactions SDK is already initialized. Ideally, this function call happens before initialization but it’s also possible to call SalesforceInteractions.reinit() to force the cookie changes to take effect.

```

```

Returns the value of the anonymous customer identity persisted in the first-party cookie.

```

```

```

```

Sets the value of the anonymous customer identity persisted in the first-party cookie.

```

```

```

```

Removes the first-party cookie and generates a brand new cookie with a newly generated anonymous customer identity.

```

```

## Code Examples

```
SalesforceInteractions.init({
  cookieDomain: 'domain.com'
  })
```

```
getCookieDomain(): string
```

```
SalesforceInteractions.getCookieDomain()
     // => "domain.com"
```

```
setCookieDomain(newDomain:string): void
```

```
SalesforceInteractions.setCookieDomain('domain.com')
```
