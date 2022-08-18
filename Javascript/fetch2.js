console.log("about to fetch data");
        fetch('https://random-data-api.com/api/users/random_user') . then(response => {
            return response.json();
        })
        .then(data => {
          // `<div><p> city: ${data.city}</p></div>`
          // below code only works with pre tag for that format
          // document.querySelector("pre").innerHTML = JSON.stringify(data,null,4);
          console.log(data);
          // const city = "<div><p> City = " + data.address.city + "</p>";
          // var listOfItems = "";
          // const some = [0, 15, 1546, 1687, 16874, 18564];
          // for (let i = 0; i < some.length; i++) {
          //   listOfItems += `<li> ${some[i]}</li>`;
          // }

          let detailsOfAUser = `<div class="">
            <div class="details">
            <img src=${data.avatar} class="avatar" />
                <p>Id : ${data.id}</p>
                <p>Name : ${data.first_name}</p>
                <p class="p">Last Name : ${data.last_name}</p>
                <p>City : ${data.address.city}</p>
                <p>Country : ${data.address.country}</p>
                <p>Gender : ${data.gender}</p>
                <p>Phone Number : ${data.phone_number}</p>
                <p>Employment : ${data.employment.title}</p>
                <p>Email: ${data.email}</p>
                
                
            </div>
          </div>`;

          document.querySelector(".dummyContent").innerHTML = detailsOfAUser;

          const id = "<p> ID = " + data.id + "</p>";
          const Fname = "<p> First Name = " + data.first_name + "</p></div>";

          //   document.write(city + id + Fname);

          //document.querySelector(".content").innerHTML = city;

          //   let elem = document.createElement('div');
          //   let elemText = document.createTextNode('This is a text in div');
          //   elem.appendChild(elemText);

          //   document.body.appendChild(elem);

          //   let list = document.createElement('ul');
          //   let li = document.createElement('li');
          //   li.innerHTML = 'List Item'
          //   list.appendChild(li);
          //   document.body.appendChild(list);

          //   let turtleImg = document.createElement('img');
          //   turtleImg.src = "turtle.png";
          //   document.body.appendChild(turtleImg);
          //   turtleImg.style.width ='50px';

          // document.querySelector(".id").innerHTML = id;

          // const node = document.createElement("div");
          // const textNode = document.createTextNode(JSON.stringify(data.id));
          // node.appendChild(textNode);
          //document.getElementById("id").appendChild(node);

          // var myObject = data;
          // var count = Object.keys(myObject).length;
          // for (let i = 0; i < count; i++) {
          //   var li = document.createElement("li");
          //   li.textContent = data[i];
          //   console.log(data[i]);
          // }

          // var div = document.createElement("div"),
          // p = document.createElement("p");
          // p.innerHTML = "I am p Tag";
          // div[0].append(p);

          // array of object
          //   for (const key in object) {
          //     if (Object.hasOwnProperty.call(object, key)) {
          //         const element = object[key];

          //     }
          //   }
        })   

