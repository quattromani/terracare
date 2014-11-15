$.getJSON('https://spreadsheets.google.com/feeds/list/1OUfkaY35qyxLa15Fw1mv9KZSYYAh01EBoAH8lC197sc/od6/public/values?alt=json&callback=?', function(data) {

  for (i = 0; i < data.feed.entry.length; i++) {
    var title = data.feed.entry[i]['gsx$title']['$t'];
    var link = data.feed.entry[i]['gsx$link']['$t'];

      events = $('<ul class="vertical"/>');
      events.append('<li><a class="b" href="' + link + '">' + title + '</a><br></li>');

      $('.events-list').append(events);

  }

});
