import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AdyenTestcardserviceApi implements ICredentialType {
        name = 'N8nDevAdyenTestcardserviceApi';

        displayName = 'Adyen Testcardservice API';

        icon: Icon = { light: 'file:../nodes/AdyenTestcardservice/adyen-testcardservice.svg', dark: 'file:../nodes/AdyenTestcardservice/adyen-testcardservice.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://pal-test.adyen.com/pal/services/TestCard/v1',
                        required: true,
                        placeholder: 'https://pal-test.adyen.com/pal/services/TestCard/v1',
                        description: 'The base URL of your Adyen Testcardservice API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-API-Key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
