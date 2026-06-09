import type { INodeProperties } from 'n8n-workflow';

export const generalDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					]
				}
			},
			"options": [
				{
					"name": "Post Create Test Card Ranges",
					"value": "Post Create Test Card Ranges",
					"action": "Creates one or more test card ranges.",
					"description": "Creates one or more test card ranges.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/createTestCardRanges"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /createTestCardRanges",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Create Test Card Ranges"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account Code",
			"name": "accountCode",
			"type": "string",
			"default": "",
			"description": "The code of the account, for which the test card ranges should be created.",
			"routing": {
				"send": {
					"property": "accountCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Create Test Card Ranges"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account Type Code",
			"name": "accountTypeCode",
			"type": "string",
			"default": "",
			"description": "The type of the account, for which the test card ranges should be created.\n\nPermitted values:\n* Company\n* MerchantAccount\n> These values are case-sensitive.",
			"routing": {
				"send": {
					"property": "accountTypeCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Create Test Card Ranges"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Test Card Ranges",
			"name": "testCardRanges",
			"type": "json",
			"default": "[\n  {\n    \"address\": {}\n  }\n]",
			"description": "A list of test card ranges to create.",
			"routing": {
				"send": {
					"property": "testCardRanges",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Create Test Card Ranges"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Create Test Card Ranges"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Create Test Card Ranges"
					]
				}
			}
		},
];
