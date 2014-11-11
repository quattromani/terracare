$.getJSON('https://spreadsheets.google.com/feeds/list/1QqyGdDYVPOgVDtRHw_ehIcM0iRV-vajR5RF0k5AAzWo/od6/public/values?alt=json', function(data) {

  for (i = 0; i < data.feed.entry.length; i++) {
    var title = data.feed.entry[i]['gsx$title']['$t'];
    var link = data.feed.entry[i]['gsx$link']['$t'];
    var lede = data.feed.entry[i]['gsx$lede']['$t'];

      news = $('<ul class="vertical lined"/>');
      news.append('<li><a class="b" href="' + link + '">' + title + '</a><br>' + lede + '</li>');

      $('.news-list').append(news);

  }

});
