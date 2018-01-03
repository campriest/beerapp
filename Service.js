import axios from 'axios';

class Service{

  sendData(data){
      axios.post('http://localhost:',
      item: data

  })

  .then(function (response){
    console.log(response);

  })
  .catch(function(error) {
    console.log(error);

  });
  }
}
export default Service;
