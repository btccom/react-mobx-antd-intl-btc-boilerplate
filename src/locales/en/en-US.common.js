import flatten from 'flat';
const commonMessage = {
  common: {
    notFoundTip: 'Sorry, the page you are looking for does not exist',
    goHome: 'Home',
    goBack: 'Go back'
  }
};
const commonMessageFlatten = flatten(commonMessage);
export default commonMessageFlatten;
