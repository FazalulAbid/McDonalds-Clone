const person = [{
        head: "Straight to the Points: McDelivery® in the App",
        desc: "The McDonald’s app is now the only place you’ll earn MyMcDonald’s Rewards points on every McDelivery order. Plus, you can get those free McDonald’s rewards you earn delivered, too. Just order, relax and enjoy—we’ll bring your faves to you.*",
        small: "*At participating McDonald's. Only in the app. App registration required. Must be opted into MyMcDonald's Rewards. In app delivery not yet available in CO.",
        image: "assets/images/1.jpg",
    },
    {
        head: "Free Fries Now.* Free McDonald’s Later.^",
        desc: "Get free large Fries when you download the McDonald’s app and join MyMcDonald’s Rewards. Then, unlock free McDonald’s faves only in the app with 1500 bonus points after your first purchase.",
        small: "*Offer valid 1x thru the last day of the month for first time app users at participating McDonald's. May take up to 48 hours to appear in your deals. Excludes delivery. Free MyMcDonalds Rewards points valid 1x thru 12/31/22 for first time MyMcDonald's Rewards users. Program available only at participating McDonald’s. McD app download and registration required.",
        image: "assets/images/2.jpg",
    },
    {
        head: "Lead The Change",
        desc: "To all those feeding and fostering community by embracing your passion, apply for a chance to be a McDonald’s® Black & Positively Golden® Change Leader and ignite your story. Whether you are an activist, financial guru, artist or creator, McDonald’s is empowering those who are leading change.",
        small: "",
        image: "assets/images/3.jpg",
    },
    {
        head: "Your Story Deserves a Hollywood Ending",
        desc: "Latinos have stories to tell, yet they make up less than 1% of the ones told in Hollywood. As a champion of the Hispanic community McDonald’s wants to help change that. With Spotlight Dorado, McDonald’s is giving aspiring Latino filmmakers a chance to participate in a short film competition. Aspiring filmmakers will bring their vision to life having their story produced into a short film with invaluable mentorship from renowned industry leaders and a chance to showcase their film in film festivals around the country.",
        small: "",
        image: "assets/images/4.jpg",
    },
    {
        head: "Order McDelivery® Now*",
        desc: "Get all your McDonald’s favorites delivered right to your doorstep with McDelivery® on Uber Eats, DoorDash or Grubhub.",
        small: "*At participating McDonald’s. Prices may be higher than at restaurants. Delivery/service fees apply",
        image: "assets/images/5.jpg",
    },
    {
        head: "Deals for Days",
        desc: "Get exclusive deals on your McDonald’s favorites in the app with contactless Mobile Order & Pay* and convenient Drive Thru or Curbside pickup.",
        small: "*Mobile Order & Pay at participating McDonald’s.",
        image: "assets/images/6.jpg",
    },
];

let count = person.length;
for (let i = 0; i < person.length; i++) {
    // Image Div
    var img = document.createElement("img");
    img.src = person[i].image;
    img.classList.add('content-img');
    var divimg = document.createElement("div");
    divimg.classList.add('col-lg-8');
    divimg.appendChild(img);

    // Div coloumn content
    var divTextCon = document.createElement("div");
    divTextCon.classList.add('col-lg-4');

    //Header
    var header = document.createElement("h2");
    header.classList.add('content-head');
    header.innerText = person[i].head;
    divTextCon.appendChild(header);


    //Description
    var desc = document.createElement("p");
    desc.classList.add('content-desc');
    desc.innerText = person[i].desc;
    divTextCon.appendChild(desc);



    //Small
    if (person[i].small != "") {
        var small = document.createElement("p");
        small.classList.add('content-small');
        small.innerText = person[i].small;
        divTextCon.appendChild(small);
    }


    //Button
    var btn = document.createElement("button");
    btn.classList.add('btn', 'btn-warning');
    btn.innerText = "Apply Now to be a Change Leader";
    divTextCon.appendChild(btn);


    //Main Row
    var row = document.createElement("div");
    row.classList.add('row', 'content-row');


    //Append to main row
    row.appendChild(divimg);
    row.appendChild(divTextCon);

    document.getElementById("content-con").appendChild(row);
}