---
title: "payments Commands"
domain: comm-cli-reference
topic: payments-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.947Z
estimatedTokens: 358
keywords: [payments, Commands, new, Payment, Gateway, commerce, quickstart, setup, Examples, Command]
---

# payments Commands

> Set up a new Payment Gateway.

# payments Commands

-   **[commerce:payments:quickstart:setup](atlas.en-us.comm_cli_reference.meta/comm_cli_reference/comm_cli_reference_commerce_payments.htm#comm_cli_reference_commerce_payments_quickstart_setup)**
    Set up a new Payment Gateway.

## commerce:payments:quickstart:setup

Set up a new Payment Gateway.

### Examples for commerce:payments:quickstart:setup

sfdx commerce:payments:quickstart:setup -p Stripe

### Command Syntax

sfdx commerce:payments:quickstart:setup

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\[\-p PAYMENT-ADAPTER\]

\[\-n STORE-NAME\]

### Parameters

\--json

Optional

Format output as JSON.

Type: boolean

\--loglevel LOGLEVEL

Optional

The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.

Type: enum

Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL

Default value: warn

\-u | \--targetusername TARGETUSERNAME

Optional

A username or alias for the target org. Overrides the default target org.

Type: string

\--apiversion APIVERSION

Optional

Override the API version used for API requests made by this command.

Type: string

\-p | \--payment-adapter PAYMENT-ADAPTER

Optional

Payment Adapter.

Type: string

Default value: Stripe

\-n | \--store-name STORE-NAME

Required

Name of the site to create.

Type: string

Default value: 1commerce

## Related Topics

- commerce:payments:quickstart:setup (atlas.en-us.comm_cli_reference.meta/comm_cli_reference/comm_cli_reference_commerce_payments.htm)
