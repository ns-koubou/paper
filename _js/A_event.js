// wrap table
$(function() {
  $('table:not(.scroll table)').wrap('<div class="scroll"></div>');
});

// disqus
$(function() {
  var disqus_shortname = 'nskoubou';

  $('#disqus_thread').waypoint({
    handler: function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;

      dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);

      this.destroy();
    },
    context: '#main'
  });
});

// Twitter widget
document.addEventListener('mdl-componentupgraded', function() {
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
});
