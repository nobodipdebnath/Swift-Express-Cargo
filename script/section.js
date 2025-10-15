document.getElementById('history').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('pending-section').classList.add('hidden');
    document.getElementById('statement-section').classList.add('hidden');

})
document.getElementById('pending').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('pending-section').classList.remove('hidden');
    document.getElementById('statement-section').classList.add('hidden');
})
document.getElementById('statement').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('pending-section').classList.add('hidden');
    document.getElementById('statement-section').classList.remove('hidden');
})



// document.getElementById('overview').addEventListener('click',function(event){
//     event.preventDefault();
//     document.getElementById('section-text').innerText = 'Welcome to Swift Express Cargo, ABC-123'
//     document.getElementById('section-title').classList.remove('hidden')
//     document.getElementById('section-img').classList.remove('hidden');
// })
// document.getElementById('packages').addEventListener('click',function(event){
//     event.preventDefault();
//     document.getElementById('section-text').innerText = 'My Packages'
//     document.getElementById('section-title').classList.add('hidden')
//     document.getElementById('section-img').classList.add('hidden');
// })
// document.getElementById('create').addEventListener('click',function(event){
//     event.preventDefault();
//     document.getElementById('section-text').innerText = 'Create Prealert'
//     document.getElementById('section-title').classList.add('hidden')
//     document.getElementById('section-img').classList.add('hidden');
// })
// document.getElementById('payment').addEventListener('click',function(event){
//     event.preventDefault();
//     document.getElementById('section-text').innerText = 'Payment'
//     document.getElementById('section-title').classList.add('hidden')
//     document.getElementById('section-img').classList.add('hidden');
// })
// document.getElementById('cost').addEventListener('click',function(event){
//     event.preventDefault();
//     document.getElementById('section-text').innerText = 'Cost Calculator'
//     document.getElementById('section-title').classList.add('hidden')
//     document.getElementById('section-img').classList.add('hidden');
// })
// document.getElementById('location').addEventListener('click',function(event){
//     event.preventDefault();
//     document.getElementById('section-text').innerText = 'Your Address'
//     document.getElementById('section-title').classList.add('hidden')
//     document.getElementById('section-img').classList.add('hidden');
// })
// document.getElementById('notification').addEventListener('click',function(event){
//     event.preventDefault();
//     document.getElementById('section-text').innerText = 'Notification !'
//         document.getElementById('section-title').classList.add('hidden')
//     document.getElementById('section-img').classList.add('hidden');
// })

function updateSection(text, showTitle = false, showImg = false) {
  document.getElementById('section-text').innerText = text;

  const title = document.getElementById('section-title');
  const img = document.getElementById('section-img');

  if (showTitle) title.classList.remove('hidden');
  else title.classList.add('hidden');

  if (showImg) img.classList.remove('hidden');
  else img.classList.add('hidden');
}

function setupClick(id, text, showTitle = false, showImg = false) {
  document.getElementById(id).addEventListener('click', function (event) {
    event.preventDefault();
    updateSection(text, showTitle, showImg);
  });
}

setupClick('overview', 'Welcome to Swift Express Cargo, ABC-123', true, true);
setupClick('packages', 'My Packages');
setupClick('create', 'Create Prealert');
setupClick('payment', 'Payment');
setupClick('cost', 'Cost Calculator');
setupClick('location', 'Your Address');
setupClick('notification', 'Notification !');
setupClick('account', 'Account Setting');

