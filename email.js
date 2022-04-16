function validate() {
  let name = document.querySelector('.name');
  let email = document.querySelector('.email');
  let contactNum = document.querySelector('.contactnumber');
  let gadget = document.querySelector('.gadget');
  let address = document.querySelector('.address');
  let btn = document.querySelector('.submit .btn');

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (
      name.value == '' ||
      email.value == '' ||
      contactNum.value == '' ||
      gadget.value == '' ||
      address.value == ''
    ) {
      emptyerror();
    } else {
      sendmail(
        name.value,
        email.value,
        contactNum.value,
        gadget.value,
        address.value
      );
      success();
      resetForm();
    }
  });
}
validate();

function sendmail(name, email, contactNum, gadget, address) {
  emailjs.send('contact_service', 'template_sdwq4cb', {
    to_name: 'Soundcraft Order',
    from_name: name,
    name: name,
    email: email,
    contactNum: contactNum,
    gadget: gadget,
    address: address,
  });
}

function emptyerror() {
  swal({
    icon: 'error',
    title: 'Oops...',
    text: 'Fields cannot be empty!',
  });
}

function error() {
  swal({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
  });
}

function success() {
  swal({
    icon: 'success',
    title: 'Success...',
    text: 'Successfully sent message',
  });
}

//Reset form
function resetForm() {
  document.getElementById('contact-form').reset();
}

// //Page reload
// function pageReload() {}
