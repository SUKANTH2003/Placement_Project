document.getElementById('submit').addEventListener('click', function ()
 {
  const user=document.getElementById('username').value;
  const pass=document.getElementById('password').value;
  const message=document.getElementById('result');

  if (user==='sukanth' && pass==='@2003')
  {
    message.textContent='Login Successful';
    message.className='success';
  }
   else 
  {
    message.textContent='Invalid credentials';
    message.className='failed';
  }
});
