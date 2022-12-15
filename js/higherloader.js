document.body.appendChild(Object.assign(document.createElement('script'), {
  type: 'text/javascript',
  src: 'js/higherkey.js',
  onload: () => this.onScriptLoaded()
}));