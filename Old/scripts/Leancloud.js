var APP_ID = 'RXUUPp68EacDal2omal4h3lP-gzGzoHsz';
var APP_KEY = '7JIhb6w2sDIausaNyaf4NqsH';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
//——————————————————
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})