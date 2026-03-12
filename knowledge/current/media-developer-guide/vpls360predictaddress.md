---
title: "VPLS360_predictAddress"
domain: media-developer-guide
topic: vpls360predictaddress
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.252Z
estimatedTokens: 165
keywords: [VPLS360_predictAddress, Integration, Procedure, passes, input, searchText, address, Google, API, retrieves, suggestions, VPLS360, _predictAddress, Sample, Output]
---

# VPLS360_predictAddress

> This Integration Procedure passes the input searchText of
        the address to the Google Address API and retrieves a list of suggestions.

# VPLS360\_predictAddress

This Integration Procedure passes the input searchText of the address to the Google Address API and retrieves a list of suggestions.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| inputText | Required |
| latitude | Required |
| longitude | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Web shop: New User Onboarding

    -   Self care: Updating the Primary Address

-   Components:

    -   LWC: vplS360AccountSignup.js

    -   LWC: vplS360SearchAddress.js


## Calls

-   Data Mapper: FetchAPIFromVPLMetadata

-   HTTP Action: getAddress

-   HTTP Action: getPlaceDetail

## Code Examples

```
{
    "inputText": "Mahaveer Varna",
    "latitude": "13.0240923",
    "longitude": "77.6405801"
}
```

```
[
    {
        "status": "OK",
        "result": {
            "place_id": "ChIJ9_H0_MsPrjsR408m-T0SVcw",
            "formatted_address": "SH 35, Ardendale, Kannamangala, Bengaluru, Karnataka 560067, India",
            "address_components": [
                {
                    "types": [
                        "route"
                    ],
                    "short_name": "SH 35",
                    "long_name": "State Highway 35"
                },
                {
                    "types": [
                        "sublocality_level_2",
                        "sublocality",
                        "political"
                    ],
                    "short_name": "WestPark",
                    "long_name": "West Park"
                },
                {
                    "types": [
                        "sublocality_level_1",
                        "sublocality",
                        "political"
                    ],
                    "short_name": "32nd Main",
                    "long_name": "32nd Main"
                },
                {
                    "types": [
                        "locality",
                        "political"
                    ],
                    "short_name": "Bengaluru",
                    "long_name": "Bengaluru"
                },
                {
                    "types": [
                        "administrative_area_level_2",
                        "political"
                    ],
                    "short_name": "Bangalore Rural",
                    "long_name": "Bangalore Rural"
                },
                {
                    "types": [
                        "administrative_area_level_1",
                        "political"
                    ],
                    "short_name": "KA",
                    "long_name": "Karnataka"
                },
                {
                    "types": [
                        "country",
                        "political"
                    ],
                    "short_name": "IN",
                    "long_name": "India"
                },
                {
                    "types": [
                        "postal_code"
                    ],
                    "short_name": "560067",
                    "long_name": "560067"
                }
            ]
        },
        "html_attributions": []
    },
    {
        "status": "OK",
        "result": {
            "place_id": "ElVNYWhhdmVlciBNYW5kaXIgUmQsIFRhZ29yZSBUb3duLCBPcmRlcmx5IEJhemFyLCBWYXJhbmFzaSwgVXR0YXIgUHJhZGVzaCAyMjEwMDIsIEluZGlhIi4qLAoUChIJndZDkzIsjjkRqhyG_toFY9QSFAoSCYUSUmfMLY45ETzdItypTrB2",
            "formatted_address": "Mahaveer Mandir Rd, Tagore Town, Orderly Bazar, Varanasi, Uttar Pradesh 221002, India",
            "address_components": [
                {
                    "types": [
                        "route"
                    ],
                    "short_name": "Mahaveer Mandir Rd",
                    "long_name": "Mahaveer Mandir Road"
                },
                {
                    "types": [
                        "sublocality_level_2",
                        "sublocality",
                        "political"
                    ],
                    "short_name": "Tagore Town",
                    "long_name": "Tagore Town"
                },
                {
                    "types": [
                        "sublocality_level_1",
                        "sublocality",
                        "political"
                    ],
                    "short_name": "Orderly Bazar",
                    "long_name": "Orderly Bazar"
                },
                {
                    "types": [
                        "locality",
                        "political"
                    ],
                    "short_name": "Varanasi",
                    "long_name": "Varanasi"
                },
                {
                    "types": [
                        "administrative_area_level_2",
                        "political"
                    ],
                    "short_name": "Varanasi",
                    "long_name": "Varanasi"
                },
                {
                    "types": [
                        "administrative_area_level_1",
                        "political"
                    ],
                    "short_name": "UP",
                    "long_name": "Uttar Pradesh"
                },
                {
                    "types": [
                        "country",
                        "political"
                    ],
                    "short_name": "IN",
                    "long_name": "India"
                },
                {
                    "types": [
                        "postal_code"
                    ],
                    "short_name": "221002",
                    "long_name": "221002"
                }
            ]
        },
        "html_attributions": []
    },
    {
        "status": "OK",
        "result": {
            "place_id": "ChIJ1VFAjqctjjkRO8cPd6EdJuM",
            "formatted_address": "Ardali Bazar Rd, Taktakpur, Orderly Bazar, Varanasi, Uttar Pradesh 221002, India",
            "address_components": [
                {
                    "types": [
                        "route"
                    ],
                    "short_name": "Ardali Bazar Rd",
                    "long_name": "Ardali Bazar Road"
                },
                {
                    "types": [
                        "sublocality_level_2",
                        "sublocality",
                        "political"
                    ],
                    "short_name": "Taktakpur",
                    "long_name": "Taktakpur"
                },
                {
                    "types": [
                        "sublocality_level_1",
                        "sublocality",
                        "political"
                    ],
                    "short_name": "Orderly Bazar",
                    "long_name": "Orderly Bazar"
                },
                {
                    "types": [
                        "locality",
                        "political"
                    ],
                    "short_name": "Varanasi",
                    "long_name": "Varanasi"
                },
                {
                    "types": [
                        "administrative_area_level_2",
                        "political"
                    ],
                    "short_name": "Varanasi",
                    "long_name": "Varanasi"
                },
                {
                    "types": [
                        "administrative_area_level_1",
                        "political"
                    ],
                    "short_name": "UP",
                    "long_name": "Uttar Pradesh"
                },
                {
                    "types": [
                        "country",
                        "political"
                    ],
                    "short_name": "IN",
                    "long_name": "India"
                },
                {
                    "types": [
                        "postal_code"
                    ],
                    "short_name": "221002",
                    "long_name": "221002"
                }
            ]
        },
        "html_attributions": []
    },
    {
        "status": "OK",
        "result": {
            "place_id": "ChIJn4IlCQYyjjkRrfHc2rjpn8U",
            "formatted_address": "T K 34/54, Sarasuati Pada, Near Golden Temple, Chowk, Kabir Road, Kabir Road, Giri Nagar Colony, Varanasi, Uttar Pradesh 221001, India",
            "address_components": [
                {
                    "types": [
                        "locality",
                        "political"
                    ],
                    "short_name": "Varanasi",
                    "long_name": "Varanasi"
                },
                {
                    "types": [
                        "sublocality_level_1",
                        "sublocality",
                        "political"
                    ],
                    "short_name": "Giri Nagar Colony",
                    "long_name": "Giri Nagar Colony"
                },
                {
                    "types": [
                        "administrative_area_level_2",
                        "political"
                    ],
                    "short_name": "Varanasi",
                    "long_name": "Varanasi"
                },
                {
                    "types": [
                        "administrative_area_level_1",
                        "political"
                    ],
                    "short_name": "UP",
                    "long_name": "Uttar Pradesh"
                },
                {
                    "types": [
                        "country",
                        "political"
                    ],
                    "short_name": "IN",
                    "long_name": "India"
                },
                {
                    "types": [
                        "postal_code"
                    ],
                    "short_name": "221001",
                    "long_name": "221001"
                }
            ]
        },
        "html_attributions": []
    },
    {
        "status": "OK",
        "result": {
            "place_id": "ChIJiQWKhZcxjjkRb9PW7v_BV8U",
            "formatted_address": "Bhagwanpur, Varanasi, Uttar Pradesh 221005, India",
            "address_components": [
                {
                    "types": [
                        "sublocality_level_1",
                        "sublocality",
                        "political"
                    ],
                    "short_name": "Bhagwanpur",
                    "long_name": "Bhagwanpur"
                },
                {
                    "types": [
                        "locality",
                        "political"
                    ],
                    "short_name": "Varanasi",
                    "long_name": "Varanasi"
                },
                {
                    "types": [
                        "administrative_area_level_2",
                        "political"
                    ],
                    "short_name": "Varanasi",
                    "long_name": "Varanasi"
                },
                {
                    "types": [
                        "administrative_area_level_1",
                        "political"
                    ],
                    "short_name": "UP",
                    "long_name": "Uttar Pradesh"
                },
                {
                    "types": [
                        "country",
                        "political"
                    ],
                    "short_name": "IN",
                    "long_name": "India"
                },
                {
                    "types": [
                        "postal_code"
                    ],
                    "short_name": "221005",
                    "long_name": "221005"
                }
            ]
        },
        "html_attributions": []
    }
]
```
