---
title: "Address Output"
domain: health-cloud-object-reference
topic: address-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.384Z
estimatedTokens: 256
keywords: [Address, Output, detailed, facility, resource]
---

# Address Output

> The detailed address information for a facility or resource in the response.

# Address Output

The detailed address information for a facility or resource in the response.

Properties

| Property Name | Type | Description | Required |
| --- | --- | --- | --- |
| addressText | String | The complete address formatted as a single text string. | Optional |
| streetLines | Array of Strings | An array of strings, where each string represents a line of the street address. | Optional |
| city | String | The name of the city or town. | Optional |
| district | String | The district, county, or administrative division. | Optional |
| stateProvince | String | The name or standard abbreviation of the state, province, or region. | Optional |
| postalCode | String | The postal code, ZIP code, or equivalent for the address. | Optional |
| country | String | The country name or its ISO 3166-1 alpha-2/alpha-3 code. | Optional |
| latitude | Number | The geographical latitude coordinate of the address. | Optional |
| longitude | Number | The geographical longitude coordinate of the address. | Optional |
