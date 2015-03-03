function runScriptInTab(script) {
  chrome.tabs.executeScript({
    code  : script
  });
}

function popForm() {
  runScriptInTab('jj.popForm();');
}

// keep auto-fill checkbox sync
chrome.storage.sync.get('isAutoFillForm', function(item) {
  $('.auto-fill').prop('checked', !!item.isAutoFillForm);
});

chrome.storage.sync.get('prSeed', function(item) {
  $('.pr-seed-text').val(item.prSeed);
});

// popup.html button events
$('.pop-buttons').on('click', '.pop-form', function() {
  popForm();
});

$('.auto-fill').on('change', function() {
  var isChecked = $(this).is(':checked');
  chrome.storage.sync.set({'isAutoFillForm': isChecked});
});

$('.tab-buttons .btn').on('click', function(e) {
  e.preventDefault();

  var $target = $($(this).data('target'));

  $('.tab-buttons .btn').removeClass('active');
  $('.tab-content .tab').removeClass('active');

  $(this).addClass('active');
  $target.addClass('active');
});

$('.reset-pr-seed').on('click', function(e) {
  var seed = '**Ticket:** https://jira.brandingbrand.com/browse/{{jiraTicket}}\n\n' +
             '**Reviewers:** \n\n' +
             '## Description\n\n\n\n' +
             '## Test\n\n\n';

  $('.pr-seed-text').val(seed);
});

$('.save-pr-seed').on('click', function(e) {
  var seed = $('.pr-seed-text').val();
  var $self = $(this);
  chrome.storage.sync.set({'prSeed': seed});
  $self.text('Saved!');
  setTimeout(function() {
    $self.text('Save');
  }, 1000);
});