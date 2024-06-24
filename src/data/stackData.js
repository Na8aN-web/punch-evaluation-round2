import Cinema from '../assets/services/cinema.png';
import Data from '../assets/services/data.png';
import Dotnet from '../assets/services/dotnet.png';
import Graphics from '../assets/services/graphics.png';
import Illustration from '../assets/services/illustration.png';
import Magento from '../assets/services/magento.png';
import Shopify from '../assets/services/shopify.png';
import Unreal from '../assets/services/unreal.png';
import Ux from '../assets/services/ux.png';
import Webflow from '../assets/services/webflow.png';

export const stackData = [
    {
        name: 'IT & Development',
        images: [
            { image: Dotnet, name: 'DotNet Developer' },
            { image: Data, name: 'Data Scientist' },
            { image: Magento, name: 'Magento Developer' },
            { image: Shopify, name: 'Shopify Developer' },
            { image: Webflow, name: 'Webflow Developer' }
        ]
    },
    {
        name: 'Design and Creative',
        images: [
            { image: Cinema, name: 'Cinema 4D' },
            { image: Unreal, name: 'Unreal Engine' },
            { image: Graphics, name: 'Graphics Designer' },
            { image: Illustration, name: 'Illustration Artist' },
            { image: Ux, name: 'UX Designer' }
        ]
    },
];