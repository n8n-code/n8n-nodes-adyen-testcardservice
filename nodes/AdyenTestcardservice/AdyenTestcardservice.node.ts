import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { generalDescription } from './resources/general';

export class AdyenTestcardservice implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Adyen Testcardservice',
                name: 'N8nDevAdyenTestcardservice',
                icon: { light: 'file:./adyen-testcardservice.svg', dark: 'file:./adyen-testcardservice.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Test Cards API generates custom test card numbers. See [Custom test cards](https://docs.adyen.com/development-resources/testing/create-test-ca..',
                defaults: { name: 'Adyen Testcardservice' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAdyenTestcardserviceApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "General",
					"value": "General",
					"description": ""
				}
			],
			"default": ""
		},
		...generalDescription
                ],
        };
}
