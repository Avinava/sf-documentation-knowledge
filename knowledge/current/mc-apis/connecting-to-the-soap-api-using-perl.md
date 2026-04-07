---
title: "Connecting to the SOAP API Using Perl"
domain: mc-apis
topic: connecting-to-the-soap-api-using-perl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:15.744Z
estimatedTokens: 774
keywords: [Connecting, SOAP, API, Perl, development, environment, systems, Marketing, Cloud, via, Why, Connect, How, Don't, forget, specify, soapaction, on_action, wsdl, uri, target, proxy, endpoint, address, define, attribute, prefix, compatibility, NET, document, literal, envelope, partnerAPI, requires, addressing, security, extensions, <wsse, xmlns, wsse="http, docs.oasis-open.org, wss, UsernameToken>, Username>XXXXXX<, wsse, Username>, Password>XXXXXX<, Password>, Security>, Construct, arguments, call, convert, UTF, you're, 5.6, explicitly, won't, encoded, base64]
---

> This page contains information on connecting your development environment or other systems to the Marketing Cloud SOAP API via Perl.

# Connecting to the SOAP API Using Perl

This page contains information on connecting your development environment or other systems to the Marketing Cloud SOAP API via Perl.

## Why Connect to the SOAP API using Perl

You can use the connection to the SOAP API to test your calls and perform various tasks, such as sending email and retrieving tracking information.

## How To Connect to the SOAP API using Perl

Use the sample code below as a model to construct your own authentication call to the SOAP API:

```
#!/usr/bin/perl
use strict;
use warnings;
use Data::Dumper;
use SOAP::Lite +trace => [qw (debug)];

use constant USERNAME  => 'XXXXXX';
use constant PASSWORD  => 'XXXXXX';
use constant ENDPOINT  => 'https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx';
use constant ACTION    => 'VersionInfo';
use constant NAMESPACE => 'http://exacttarget.com/wsdl/partnerAPI';

# Don't forget to specify the soapaction (on_action),
# find the soapaction it in the wsdl.
# uri is the target namespace in the wsdl
# proxy is the endpoint address
my $soap = SOAP::Lite
    -> uri(NAMESPACE)
    -> on_action( sub { return '"' . ACTION . '"' } )
    -> proxy(ENDPOINT);
# You must define the namespace used
# in the wsdl, as an attribute to the
# method without namespace prefix
# for compatibility with .NET (document/literal).
my $method = SOAP::Data->name('VersionInfoRequestMsg')
  ->attr({xmlns => NAMESPACE});
# SOAP envelope headers. Marketing Cloud partnerAPI requires addressing, security
# extensions.
//
# <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
#   <wsse:UsernameToken>
#     <wsse:Username>XXXXXX</wsse:Username>
#     <wsse:Password>XXXXXX</wsse:Password>
#   </wsse:UsernameToken>
# </wsse:Security>
//
my @hdrs;
push @hdrs, SOAP::Header
->name(Action => ACTION)
->uri('http://schemas.xmlsoap.org/ws/2004/08/addressing')
->prefix('wsa');
push @hdrs, SOAP::Header
->name(To => ENDPOINT)
->uri('http://schemas.xmlsoap.org/ws/2004/08/addressing')
->prefix('wsa');
push @hdrs, SOAP::Header
->name(Security =>
\SOAP::Data->value(
SOAP::Data->name(UsernameToken =>
\SOAP::Data->value(
SOAP::Data->name(Username => USERNAME)->prefix('wsse'),
SOAP::Data->name(Password => PASSWORD)->prefix('wsse')))
->prefix('wsse')))
->uri('http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd')
->prefix('wsse');
# Construct method arguments.
my @args;
push @args, SOAP::Data->name(IncludeVersionHistory => 'true')->type('boolean');
# make the call
my $result = $soap->call(@hdrs, $method, @args);
if ($result->fault) {
print Dumper $result->fault;
} else {
print Dumper $result->result;
}
```

The code below demonstrates how to use UTF-8 encoding in your calls:

```
#!perl -w
use SOAP::Lite;
# convert to UTF (if you're using Perl 5.6)
(my $utf = 't&#xE4;t&#xE4;') =~ tr/\0-\x{ff}//CU;
# specify type explicitly and it won't be encoded as base64
my $string = SOAP::Data->type(string => $utf);
my $result = SOAP::Lite
    -> proxy (...)
    -> uri (...)
    -> hello($string)
    -> result;
```
