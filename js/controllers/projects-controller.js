angular.module('materializeApp').controller('ProjectsController', function($scope) {

    $scope.projects = [
        {
            description: 'The Game of S.K.A.T.E app was created to solve problems most skaters face when playing the "Game of S.K.A.T.E" and to provide them a better experience during the game.',
            url: 'https://play.google.com/store/apps/details?id=com.wilderpereira.gameofskate',
            img: 'img/portfolio/gameofskate.png'
        },

        {
            description: 'Biomando is a Geography Educational Software/App developed as the final project of the ETEC Informatics Thechnical Course. Project Finalist at Febrace, Feteps and Prêmio Fei Inova Paula Souza.',
            url: 'https://www.facebook.com/Biomando',
            img: 'img/portfolio/biomando.png'
        },

        {
            description: 'GreenBox is the winner project of the FIESP Hackathon 2016. With a smart plant vase and an Android app built by us, it turns the act of planting and growing plants into a game for kids and adults.',
            url: 'https://greenboxkids.com.br/',
            img: 'img/portfolio/greenbox.png'
        },

        {
            description: 'Android App developed for the Brazillian startup Looqbox as a freelance project.',
            url: 'https://play.google.com/store/apps/details?id=com.looqbox',
            img: 'img/portfolio/looqbox.png'
        },

        {
            description: 'Lmgtfygen is an Android app I developed to learn new Android libraries and architectures. It is the app version of the lmgtfy website.',
            url: 'https://play.google.com/store/apps/details?id=com.wilderpereira.lmgtfygen',
            img: 'img/portfolio/lmgtfy.png'
        }
    ];

});