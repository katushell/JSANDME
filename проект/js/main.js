'use strict'


//   let fireBall = {
//     fireballSize: [22 + 'px'],
//     getFireballSpeed(left){
//       return left ? 2 : 5
//   } 
//   }
  
//   let wizard = {
//     wizardSpeed: 3,
//     wizardWidth: 70,
//     WizardHeight: [1.337 * wizardWidth]
//   }
  


// console.log(wizard.WizardHeight)



window.GameConstants = {
  Fireball: {
    size: window.fireballSize || 24,
    speed: window.getFireballSpeed || function (movingLeft) {
      return movingLeft ? 2 : 5;
    }
  },
  Wizard: {
    speed: window.wizardSpeed || 2,
    width: window.wizardWidth || 61,
    getHeight: window.getWizardHeight || function (width) {
      return 1.377 * width;
    },
    getX: window.getWizardX || function (width) {
      return width / 3;
    },
    getY: window.getWizardY || function (height) {
      return height - 100;
    }
  }
};


