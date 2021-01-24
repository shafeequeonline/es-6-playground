// contst the value will be constant
// no re-assigning of values possible when we are using const

// let same like var we can decalare and re-aasign new values

var statuses = [ 
    { code: 'OK', response: 'Request successful' },
    { code: 'FAILED', response: 'There was an error with your request' },
    { code: 'PENDING', response: 'Your reqeust is still pending' }
  ];
  const message = '';
  let currentCode = 'OK';
  
  for (var i = 0; i < statuses.length; i++) {
    if (statuses[i].code === currentCode) {
      message = statuses[i].response;
    }
}