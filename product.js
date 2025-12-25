
const products = {
    'xc90': {
        title: 'VOLVO XC90',
        desc: 'Our flagship SUV combines Scandinavian luxury with exceptional safety and cutting-edge technology.',
        modelSrc: '3d Models/volvo suv 3d model.glb',
        accel: '5.5S',
        speed: '180KM/H',
        range: '480KM',
        rangeLabel: 'Electric Range'
    },
    'xc40': {
        title: 'VOLVO XC40',
        desc: 'Our compact SUV reimagines city life with smart storage and expressive design.',
        modelSrc: '3d Models/white suv 3d model.glb',
        accel: '4.9S',
        speed: '180KM/H',
        range: '418KM',
        rangeLabel: 'Electric Range'
    },
    'xc60': {
        title: 'VOLVO XC60',
        desc: 'The dynamic mid-size SUV with refreshed design and built-in Google services.',
        modelSrc: '3d Models/beige suv 3d model.glb',
        accel: '5.2S',
        speed: '180KM/H',
        range: 'High',
        rangeLabel: 'Range'
    },
    's90': {
        title: 'VOLVO S90',
        desc: 'The luxury sedan that redefines elegance and comfort for every journey.',
        modelSrc: '3d Models/luxury sedan 3d model.glb',
        accel: '6.2S',
        speed: '180KM/H',
        range: '6.7L/100km',
        rangeLabel: 'Consumption'
    },
    's60': {
        title: 'VOLVO S60',
        desc: 'The dynamic sedan designed for the pure joy of driving.',
        modelSrc: '3d Models/luxury sedan 3d model.glb',
        accel: '5.8S',
        speed: '180KM/H',
        range: '6.8L/100km',
        rangeLabel: 'Consumption'
    },
    'ex90': {
        title: 'VOLVO EX90',
        desc: 'Our new fully electric flagship SUV for a new era of safety.',
        modelSrc: '3d Models/volvo suv 3d model.glb',
        accel: '4.9S',
        speed: '180KM/H',
        range: '600KM',
        rangeLabel: 'Electric Range'
    },
    'ex40': {
        title: 'VOLVO EX40',
        desc: 'The fully electric compact SUV for urban adventures.',
        modelSrc: '3d Models/white suv 3d model.glb',
        accel: '4.7S',
        speed: '180KM/H',
        range: '500KM',
        rangeLabel: 'Electric Range'
    },
    'ex30': {
        title: 'VOLVO EX30',
        desc: 'Our smallest ever electric SUV with big electric performance.',
        modelSrc: '3d Models/beige suv 3d model.glb',
        accel: '3.6S',
        speed: '180KM/H',
        range: '480KM',
        rangeLabel: 'Electric Range'
    },
    'v60': {
        title: 'VOLVO V60',
        desc: 'The versatile estate designed for all your life\'s adventures.',
        modelSrc: '3d Models/luxury sedan 3d model.glb',
        accel: '6.4S',
        speed: '180KM/H',
        range: '6.5L/100km',
        rangeLabel: 'Consumption'
    }
};

const urlParams = new URLSearchParams(window.location.search);
const modelId = urlParams.get('model') || 'xc90';
const product = products[modelId] || products['xc90'];

document.title = product.title;

document.getElementById('backnav').innerHTML = '< Back to Models';
document.getElementById('backnav').onclick = function () { window.location.href = 'index.html'; };

document.getElementById('carmodel').innerHTML = product.title;
document.getElementById('cardesc').innerHTML = product.desc;
document.querySelector('#product-model-viewer').src = product.modelSrc;

document.getElementById('introbtn').innerHTML = 'Configure Now';
document.getElementById('introbtn2').innerHTML = 'Test Drive';

document.getElementById('performtitle').innerHTML = 'PERFORMANCE';
document.getElementById('performlabel').innerHTML = '0-100 km/h';
document.getElementById('performvalue').innerHTML = product.accel;
document.getElementById('performlabel2').innerHTML = 'Top Speed';
document.getElementById('performvalue2').innerHTML = product.speed;
document.getElementById('performlabel3').innerHTML = product.rangeLabel;
document.getElementById('performvalue3').innerHTML = product.range;


document.getElementById('spectitle').innerHTML = 'TECHNICAL SPECIFICATIONS';
document.getElementById('specdesc').innerHTML = 'Engineered for performance, safety, and sustainability. Every detail matters.';
document.getElementById('specname').innerHTML = '0-100 km/h';
document.getElementById('specvalue').innerHTML = product.accel;
document.getElementById('specname2').innerHTML = 'Top Speed';
document.getElementById('specvalue2').innerHTML = product.speed;
document.getElementById('specname3').innerHTML = product.rangeLabel;
document.getElementById('specvalue3').innerHTML = product.range;
document.getElementById('specname4').innerHTML = 'Battery';
document.getElementById('specvalue4').innerHTML = '78 KWH';
document.getElementById('specname5').innerHTML = 'Charging Time';
document.getElementById('specvalue5').innerHTML = '8 HOURS';
document.getElementById('specname6').innerHTML = 'Motor Power';
document.getElementById('specvalue6').innerHTML = '408 HP';
document.getElementById('specname7').innerHTML = 'Drive Type';
document.getElementById('specvalue7').innerHTML = 'AWD';
document.getElementById('specname8').innerHTML = 'Seating';
document.getElementById('specvalue8').innerHTML = '5-7 SEATS';

document.getElementById('metrictitle').innerHTML = 'PERFORMANCE METRICS';
document.getElementById('metricvalue').innerHTML = product.accel;
document.getElementById('metricvalue2').innerHTML = product.speed;
document.getElementById('metricvalue3').innerHTML = product.range;

document.getElementById('safetytitle').innerHTML = 'SAFETY FIRST';
document.getElementById('safetytext').innerHTML = 'We never compromise on safety. Every Volvo is built with your protection in mind. Incorporating safety innovations and smart technologies.';
document.getElementById('safetyhead').innerHTML = 'ACTIVE SAFETY';
document.getElementById('safetyitem').innerHTML = '• City Safety collision avoidance';
document.getElementById('safetyitem2').innerHTML = '• Pilot Assist semi-autonomous driving';
document.getElementById('safetyitem3').innerHTML = '• Run-off Road Mitigation';
document.getElementById('safetyitem4').innerHTML = '• Oncoming Lane Mitigation';
document.getElementById('safetyhead2').innerHTML = 'PASSIVE SAFETY';
document.getElementById('safetyitem5').innerHTML = '• Whiplash Protection Seating';
document.getElementById('safetyitem6').innerHTML = '• Side Impact Protection System';
document.getElementById('safetyitem7').innerHTML = '• Inflatable Curtain';
document.getElementById('luxurytitle').innerHTML = 'SCANDINAVIAN LUXURY';
document.getElementById('luxurytext').innerHTML = 'Every surface, every detail crafted with the finest materials. Experience the perfect harmony of technology and craftsmanship.';
document.getElementById('luxuryitem').innerHTML = '• Premium Nappa Leather Upholstery';
document.getElementById('luxuryitem2').innerHTML = '• Driftwood Inlay & Open-Pore Wood';
document.getElementById('luxuryitem3').innerHTML = '• Tailored Dashboard Display';
document.getElementById('luxuryitem4').innerHTML = '• Crystal Gear Shifter by Orrefors';
document.getElementById('sustaintitle').innerHTML = 'SUSTAINABLE FUTURE';
document.getElementById('sustaintext').innerHTML = 'Our commitment to the planet drives every decision we make, from production to performance.';
document.getElementById('sustainhead').innerHTML = 'CLEANER PRODUCTION';
document.getElementById('sustaindesc').innerHTML = "Volvo's factories use renewable energy and advanced efficiency standards to minimize environmental impact.";
document.getElementById('sustainhead2').innerHTML = 'RESPONSIBLE MATERIALS';
document.getElementById('sustaindesc2').innerHTML = 'Our cars use recycled plastics, textiles, and sustainably sourced materials throughout.';
document.getElementById('sustainhead3').innerHTML = 'ZERO EMISSION VISION';
document.getElementById('sustaindesc3').innerHTML = "Fully electric by 2030 and climate-neutral by 2040. That's our commitment to future generations.";
document.getElementById('ctatitle').innerHTML = 'READY TO EXPERIENCE?';
document.getElementById('ctatext').innerHTML = 'Configure your ' + product.title.replace('VOLVO ', '') + ' or schedule a test drive at your nearest dealer.';
document.getElementById('ctabtn').innerHTML = 'Configure Your ' + product.title.replace('VOLVO ', '');
document.getElementById('ctabtn2').innerHTML = 'Book Test Drive';
document.getElementById('ctabtn3').innerHTML = 'Find a Dealer';
document.getElementById('footertitle').innerHTML = 'ABOUT';
document.getElementById('footertext').innerHTML = 'Volvo Cars is a Swedish luxury vehicle manufacturer committed to safety and sustainability.';
document.getElementById('footertitle2').innerHTML = 'CARS';
document.getElementById('footerlink').innerHTML = 'SUVs';
document.getElementById('footerlink2').innerHTML = 'Sedans';
document.getElementById('footerlink3').innerHTML = 'Wagons';
document.getElementById('footertitle3').innerHTML = 'OWNERS';
document.getElementById('footerlink4').innerHTML = 'Owner Portal';
document.getElementById('footerlink5').innerHTML = 'Service & Parts';
document.getElementById('footerlink6').innerHTML = 'Manuals';
document.getElementById('footertitle4').innerHTML = 'ABOUT';
document.getElementById('footerlink7').innerHTML = 'Company';
document.getElementById('footerlink8').innerHTML = 'Careers';
document.getElementById('footerlink9').innerHTML = 'Sustainability';
document.getElementById('legaltext').innerHTML = 'Privacy Policy';
document.getElementById('legaltext2').innerHTML = 'Terms of Use';
document.getElementById('legaltext3').innerHTML = 'Cookie Settings';



const modelViewer = document.querySelector("#product-model-viewer");




function switchColor(color) {
    if (!modelViewer || !modelViewer.model) return;

    
    

    
    for (const material of modelViewer.model.materials) {
        let name = material.name.toLowerCase();
        if (name.includes('paint') || name.includes('body') || name.includes('car_paint') || name.includes('metal')) {
            material.pbrMetallicRoughness.setBaseColorFactor(color);
        }
    }
}

document.querySelector('.colordot').onclick = () => switchColor([0.9, 0.0, 0.0, 1.0]); 
document.querySelector('.colordot2').onclick = () => switchColor([0.1, 0.2, 0.6, 1.0]); 
document.querySelector('.colordot3').onclick = () => switchColor([0.9, 0.9, 0.9, 1.0]); 
document.querySelector('.colordot4').onclick = () => switchColor([0.16, 0.38, 0.44, 1.0]); 