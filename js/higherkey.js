const tabs = document.querySelectorAll('[data-tab-value]')
const tabInfos = document.querySelectorAll('[data-tab-info]')

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document
			.querySelector(tab.dataset.tabValue);

		tabInfos.forEach(tabInfo => {
			tabInfo.classList.remove('active')
		})
		target.classList.add('active');
	})
})



window.addEventListener('load', function () {
  var svgs = d3.selectAll(".mermaid svg");
  svgs.each(function() {
    var svg = d3.select(this);
    svg.html("<g>" + svg.html() + "</g>");
    var inner = svg.select("g");
    var zoom = d3.zoom().on("zoom", function(event) {
      inner.attr("transform", event.transform);
    });
    svg.call(zoom);
  });
});



    const callback = function () {
      alert('A callback was triggered');
    };
    const config = {
      startOnLoad: true,
      securityLevel: 'loose',
      theme:'dark',
    };
    mermaid.initialize(config);
